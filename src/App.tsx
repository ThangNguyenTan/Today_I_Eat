import { useState, useEffect, useMemo, useRef } from 'react';
import { useRestaurants, getCurrentMealTime } from '@/hooks/useRestaurants';
import { useGeolocation } from '@/hooks/useGeolocation';
import { RestaurantForm } from '@/components/RestaurantForm';
import { RestaurantCard } from '@/components/RestaurantCard';
import { SuggestionModal } from '@/components/SuggestionModal';
import { Button } from '@/components/ui/button';
import { 
  PlusCircle, 
  UtensilsCrossed, 
  ListFilter, 
  Info,
  ChevronUp,
  Heart,
  MapPin,
  RotateCcw,
  Search,
  X
} from 'lucide-react';
import { UserMenu } from '@/components/UserMenu';
import { useAuth } from '@/context/AuthContext';
import type { Restaurant, MealTime, FoodType } from '@/types';
import { FOOD_TYPES, HCM_DISTRICTS } from '@/constants';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Check, ChevronsUpDown } from 'lucide-react';
import { cn } from '@/lib/utils';

function App() {
  const { user, login, logout } = useAuth();
  const { restaurants, addRestaurant, getRandomRestaurant, toggleFavorite, isSyncing } = useRestaurants(user);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [suggestion, setSuggestion] = useState<Restaurant | null>(null);
  const [isSuggestionModalOpen, setIsSuggestionModalOpen] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [greeting, setGreeting] = useState('');
  const [currentFilter, setCurrentFilter] = useState<MealTime | undefined>(undefined);
  const [activeType, setActiveType] = useState<FoodType | 'Tất cả'>('Tất cả');
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [showNearbyOnly, setShowNearbyOnly] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { area, loading: geoLoading, error: geoError, getLocation, hasAttempted } = useGeolocation();
  const [currentArea, setCurrentArea] = useState<string | null>(null);
  const [manualArea, setManualArea] = useState<string | null>(null);
  const [isAreaSelectorOpen, setIsAreaSelectorOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const itemsPerPage = 10;

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 11) setGreeting('Chào buổi sáng ☕');
    else if (hour < 14) setGreeting('Chúc bạn bữa trưa ngon miệng 🍱');
    else if (hour < 18) setGreeting('Chiều rồi, làm chút ăn vặt nhỉ? 🍰');
    else setGreeting('Bữa tối ấm cúng nhé 🍜');
  }, []);

  useEffect(() => {
    if (!user) {
      setShowFavoritesOnly(false);
      setIsFormOpen(false);
    }
  }, [user]);

  const handleSuggest = (filter?: MealTime) => {
    const mealTime = filter || getCurrentMealTime();
    setCurrentFilter(mealTime);
    const random = getRandomRestaurant(mealTime);
    setSuggestion(random);
    setIsSuggestionModalOpen(true);
  };

  const handleShuffle = () => {
    const random = getRandomRestaurant(currentFilter);
    setSuggestion(random);
  };

  const filteredRestaurants = useMemo(() => {
    let result = restaurants;
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(r => 
        r.name.toLowerCase().includes(query) ||
        r.location.toLowerCase().includes(query) ||
        (r.notes && r.notes.toLowerCase().includes(query)) ||
        r.type.toLowerCase().includes(query)
      );
    }

    if (activeType !== 'Tất cả') {
      result = result.filter(r => r.type === activeType);
    }
    if (showFavoritesOnly) {
      result = result.filter(r => r.isFavorite);
    }
    const activeArea = manualArea || currentArea;
    
    if (showNearbyOnly && activeArea) {
      result = result.filter(r => {
        const loc = r.location.toUpperCase();
        const target = activeArea.toUpperCase();
        
        // coreArea is the name/number without prefix (e.g., "1", "BÌNH THẠNH")
        const coreArea = target.replace(/QUẬN|HUYỆN|Q\.|Q|DISTRICT|D\.|THÀNH PHỐ|TP\./g, '').trim();
        const isNumeric = /^\d+$/.test(coreArea);

        if (isNumeric) {
          /**
           * For numeric districts (e.g. "1"):
           * 1. Look for District Keywords (Q, Quận, etc.) followed by the number.
           * 2. Use word boundaries (\b) to avoid matching "12" when looking for "1".
           * 3. Specifically ensure it's NOT preceded by "P." or "PHƯỜNG" to avoid ward matches.
           */
          const districtRegex = new RegExp(`(^|[^P])\\b(QUẬN|Q\\.|Q|DISTRICT|D)\\s?${coreArea}\\b`, 'i');
          
          // Pattern for shorthand ", Q1" or ", 1" at the end of parts
          const shorthandRegex = new RegExp(`,\\s?(Q\\.|Q|D\\.)?\\s?${coreArea}\\b`, 'i');
          
          return districtRegex.test(loc) || (loc.includes(coreArea) && shorthandRegex.test(loc));
        } else {
          /**
           * For named districts (e.g. "BÌNH THẠNH"):
           * 1. Search for the name preceded by a district keyword.
           * 2. Or if the address is simply the district name itself.
           */
          const namedRegex = new RegExp(`\\b(QUẬN|Q\\.|Q|DISTRICT|D|HUYỆN|H\\.|THÀNH PHỐ|TP\\.)\\s?${coreArea}\\b`, 'i');
          
          // Fallback for simple names but cautious about wards
          const isFullMatch = loc.trim() === coreArea;
          const containsNamedDistrict = loc.includes(coreArea) && namedRegex.test(loc);
          
          return isFullMatch || containsNamedDistrict;
        }
      });
    }
    return result;
  }, [restaurants, activeType, showFavoritesOnly, showNearbyOnly, searchQuery, currentArea]);

  const displayedRestaurants = filteredRestaurants.slice(0, page * itemsPerPage);
  const hasMore = filteredRestaurants.length > displayedRestaurants.length;

  // Sync currentArea from hook
  useEffect(() => {
    setCurrentArea(area);
  }, [area]);

  // Request location when "Nearby" is toggled on
  useEffect(() => {
    if (showNearbyOnly && !currentArea && !geoLoading && !hasAttempted && !geoError) {
      getLocation();
    }
  }, [showNearbyOnly, currentArea, geoLoading, hasAttempted, geoError, getLocation]);

  // Reset page when filter changes
  useEffect(() => {
    setPage(1);
  }, [activeType, showNearbyOnly, showFavoritesOnly, searchQuery]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > window.innerHeight);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    if (!hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoadingMore) {
          setIsLoadingMore(true);
          // Add a small delay to make the loading state feel more natural
          setTimeout(() => {
            setPage((prev) => prev + 1);
            setIsLoadingMore(false);
          }, 800);
        }
      },
      { threshold: 0.1, rootMargin: '100px' }
    );

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => observer.disconnect();
  }, [hasMore, filteredRestaurants.length, isLoadingMore]);

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#1A1A1A] pb-24 font-sans selection:bg-primary/20">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full" />
        <div className="absolute top-[20%] -left-[10%] w-[30%] h-[30%] bg-orange-200/20 blur-[100px] rounded-full" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 w-full glass border-b-0">
        <div className="container flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-orange-500 text-white shadow-lg shadow-primary/20 ring-4 ring-white">
              <UtensilsCrossed className="h-5 w-5" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg font-black tracking-tight leading-none">Ăn Gì Đây?</h1>
              <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">Vietnamese Cuisine</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <UserMenu 
              user={user ? {
                name: user.displayName || 'User',
                email: user.email || '',
                photoURL: user.photoURL || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.uid}`
              } : null} 
              onLogin={login} 
              onLogout={logout} 
              isSyncing={isSyncing} 
            />
            <div className="w-[1px] h-6 bg-gray-100 mx-1 hidden sm:block" />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => user ? setIsFormOpen(!isFormOpen) : login()}
              className={`rounded-full transition-all ${isFormOpen ? 'bg-primary text-white scale-110' : 'hover:bg-primary/10'}`}
              title={!user ? "Đăng nhập để thêm quán" : ""}
            >
              <PlusCircle className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>

      <main className="container relative z-10 mx-auto max-w-2xl px-6 py-10">
        {/* Welcome & Mood Section */}
        <section className="mb-12">
          <div className="space-y-1 mb-8 text-center">
            <p className="text-sm font-semibold text-primary/80 uppercase tracking-widest">{greeting}</p>
            <h2 className="text-5xl font-black tracking-tight sm:text-6xl leading-[1.1] mt-4">
              Hôm nay bạn <br />
              <span className="text-gradient">thấy thế nào?</span>
            </h2>
          </div>
        </section>

        {/* Action Button */}
        <section className="mb-16 flex justify-center">
          <Button
            size="xl"
            onClick={() => handleSuggest()}
            className="group relative h-20 px-10 rounded-[2.5rem] bg-gradient-to-r from-primary to-orange-500 hover:to-orange-600 transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-primary/30 border-4 border-white"
          >
            <span className="relative z-10 flex items-center gap-4 text-lg font-black uppercase tracking-wider">
              Ăn gì bây giờ?
              <div className="animate-bounce">
                <UtensilsCrossed className="h-6 w-6" />
              </div>
            </span>
          </Button>
        </section>

        {/* Add Restaurant Form (Collapsible) */}
        {isFormOpen && (
          <section className="mb-12 animate-in zoom-in-95 fade-in duration-300">
            <div className="rounded-[2.5rem] border-0 bg-white p-8 shadow-2xl">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-black tracking-tight">Thêm Quán Mới</h3>
                  <p className="text-sm text-muted-foreground">
                    {user ? "Lưu giữ hương vị yêu thích của bạn" : "Vui lòng đăng nhập để lưu quán"}
                  </p>
                </div>
                <Button variant="ghost" size="icon" onClick={() => setIsFormOpen(false)} className="rounded-full">
                   <PlusCircle className="h-5 w-5 rotate-45" />
                </Button>
              </div>
              
              {user ? (
                <RestaurantForm
                  onAdd={(data) => {
                    addRestaurant(data);
                    setIsFormOpen(false);
                  }}
                />
              ) : (
                <div className="py-10 text-center space-y-6">
                  <div className="mx-auto w-20 h-20 bg-primary/5 rounded-[1.5rem] flex items-center justify-center">
                     <PlusCircle className="h-10 w-10 text-primary" />
                  </div>
                  <p className="text-muted-foreground text-sm max-w-[15rem] mx-auto">
                    Đăng nhập để bắt đầu xây dựng kho tàng ẩm thực của riêng bạn.
                  </p>
                  <Button onClick={login} className="rounded-xl px-8 font-black uppercase tracking-widest shadow-lg shadow-primary/20">
                    Đăng nhập ngay
                  </Button>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Search & Filter Section */}
        <section className="mb-10 space-y-4">
          <div className="relative group">
            <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
            </div>
            <input
              type="text"
              placeholder="Tìm tên quán, món ăn hoặc địa chỉ..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-16 pl-14 pr-14 rounded-[2rem] bg-white border-0 shadow-xl shadow-black/5 focus:ring-4 focus:ring-primary/10 transition-all text-base font-medium placeholder:text-muted-foreground/60"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-5 flex items-center text-muted-foreground hover:text-primary transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>
          
          <div className="flex items-center justify-between px-2">
            <div>
              <h3 className="text-2xl font-black tracking-tight">Khám phá</h3>
              <p className="text-sm text-muted-foreground flex items-center gap-1">
                <Info className="h-3 w-3" />
                {searchQuery || activeType !== 'Tất cả' 
                  ? `Tìm thấy ${filteredRestaurants.length} địa điểm` 
                  : `Có ${restaurants.length} địa điểm quanh bạn`}
              </p>
            </div>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className={`rounded-full gap-2 font-bold text-xs uppercase tracking-widest transition-all ${isFilterOpen ? 'bg-primary text-white shadow-lg' : 'text-primary'}`}
            >
              <ListFilter className="h-4 w-4" />
              Bộ lọc
            </Button>
          </div>
        </section>

        {/* Restaurant List */}
        <section className="space-y-8">

          {/* Expanded Filter UI */}
          {isFilterOpen && (
            <div className="animate-in slide-in-from-top-4 fade-in duration-300">
              <div className="p-5 rounded-[2.5rem] bg-white border border-gray-100 shadow-xl space-y-6">
                {/* Secondary Toggles Row */}
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-2">
                      <button 
                        onClick={() => {
                          if (showNearbyOnly) {
                            setShowNearbyOnly(false);
                          } else {
                            setShowNearbyOnly(true);
                            if (!currentArea && !manualArea) {
                              getLocation();
                            }
                          }
                        }}
                        disabled={geoLoading}
                        className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                          showNearbyOnly 
                          ? 'bg-blue-50 text-blue-600 ring-1 ring-blue-500/20' 
                          : 'bg-gray-50 text-gray-400 hover:bg-gray-100'
                        } ${geoLoading ? 'opacity-50 cursor-wait' : ''}`}
                      >
                        {geoLoading ? (
                          <RotateCcw className="h-3 w-3 animate-spin" />
                        ) : (
                          <MapPin className={`h-3 w-3 ${showNearbyOnly ? 'fill-current' : ''}`} />
                        )}
                        {showNearbyOnly && (manualArea || currentArea) ? `Ở ${manualArea || currentArea}` : 'Gần đây'}
                      </button>

                      <button 
                        onClick={() => user ? setShowFavoritesOnly(!showFavoritesOnly) : login()}
                        className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                          showFavoritesOnly 
                          ? 'bg-red-50 text-red-500 ring-1 ring-red-500/20' 
                          : user 
                            ? 'bg-gray-50 text-gray-400 hover:bg-gray-100'
                            : 'bg-gray-50/50 text-gray-300 cursor-help'
                        }`}
                        title={!user ? "Đăng nhập để xem Quán ruột" : ""}
                      >
                        <Heart className={`h-3 w-3 ${showFavoritesOnly ? 'fill-current' : ''}`} />
                        Quán ruột
                      </button>
                    </div>

                    {/* Manual District Selection Fallback/Alternative */}
                    {(showNearbyOnly || geoError) && (
                      <div className="flex items-center gap-2 animate-in fade-in slide-in-from-left-2 duration-300 px-1">
                        <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">Hoặc chọn:</span>
                        <Popover open={isAreaSelectorOpen} onOpenChange={setIsAreaSelectorOpen}>
                          <PopoverTrigger asChild>
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="h-7 rounded-lg text-[9px] font-black uppercase border-dashed border-primary/30 text-primary hover:bg-primary/5"
                            >
                              {manualArea || "Chọn Quận..."}
                              <ChevronsUpDown className="ml-1 h-3 w-3 opacity-50" />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-[180px] p-0 rounded-2xl border-gray-100 shadow-2xl" align="start">
                            <Command>
                              <CommandInput placeholder="Tìm Quận..." className="h-8 text-[11px]" />
                              <CommandList className="max-h-[200px]">
                                <CommandEmpty className="text-[10px] py-2">Không thấy rồi...</CommandEmpty>
                                <CommandGroup>
                                  {HCM_DISTRICTS.map((district) => (
                                    <CommandItem
                                      key={district}
                                      value={district}
                                      onSelect={() => {
                                        setManualArea(district);
                                        setShowNearbyOnly(true);
                                        setIsAreaSelectorOpen(false);
                                      }}
                                      className="text-[11px] py-2 cursor-pointer"
                                    >
                                      <Check
                                        className={cn(
                                          "mr-2 h-3 w-3",
                                          manualArea === district ? "opacity-100" : "opacity-0"
                                        )}
                                      />
                                      {district}
                                    </CommandItem>
                                  ))}
                                </CommandGroup>
                              </CommandList>
                            </Command>
                          </PopoverContent>
                        </Popover>
                        {manualArea && (
                          <button 
                            onClick={() => setManualArea(null)}
                            className="text-[9px] font-bold text-red-400 hover:text-red-500"
                          >
                            Xóa
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                  
                  <button 
                    onClick={() => {
                      setActiveType('Tất cả');
                      setShowFavoritesOnly(false);
                      setShowNearbyOnly(false);
                      setManualArea(null);
                    }}
                    className={`flex items-center gap-1.5 p-2 px-3 rounded-xl text-[10px] font-black text-primary hover:bg-primary/5 uppercase tracking-widest transition-all duration-300 ${
                      (activeType !== 'Tất cả' || showFavoritesOnly || showNearbyOnly)
                        ? 'opacity-100 translate-x-0'
                        : 'opacity-0 translate-x-4 pointer-events-none'
                    }`}
                  >
                    <RotateCcw className="h-3 w-3" />
                    <span className="whitespace-nowrap">Xóa lọc</span>
                  </button>
                </div>

                {/* Categories Row */}
                <div className="space-y-3">
                  <span className="px-1 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60">
                    Phân loại món ăn
                  </span>
                  <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar -mx-1 px-1 mask-fade-right">
                    <button
                      onClick={() => setActiveType('Tất cả')}
                      className={`flex-none px-6 py-2.5 rounded-2xl text-xs font-black transition-all border-2 ${
                        activeType === 'Tất cả'
                          ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20 scale-105'
                          : 'bg-white border-gray-100 text-gray-400 hover:border-primary/30'
                      }`}
                    >
                      Tất cả
                    </button>
                    {FOOD_TYPES.map((type) => (
                      <button
                        key={type}
                        onClick={() => setActiveType(type)}
                        className={`flex-none px-6 py-2.5 rounded-2xl text-xs font-black transition-all border-2 ${
                          activeType === type
                            ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20 scale-105'
                            : 'bg-white border-gray-100 text-gray-400 hover:border-primary/30'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="grid gap-6 sm:grid-cols-2">
            {displayedRestaurants.length > 0 ? (
              displayedRestaurants.map((res) => (
                <RestaurantCard
                  key={res.id}
                  restaurant={res}
                  onToggleFavorite={user ? () => toggleFavorite(res.id) : undefined}
                />
              ))
            ) : (
              <div className="col-span-full py-20 text-center glass rounded-[2.5rem] border-0">
                <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-[2rem] bg-orange-50 text-primary animate-float">
                  <Heart className="h-10 w-10 fill-current" />
                </div>
                {user ? (
                  <>
                    <h4 className="text-xl font-bold mb-2">Chưa có "quán ruột"?</h4>
                    <p className="max-w-[15rem] mx-auto text-muted-foreground text-sm">
                      Hãy thêm những địa điểm bạn yêu thích bằng cách nhấn vào trái tim nhé!
                    </p>
                  </>
                ) : (
                  <>
                    <h4 className="text-xl font-bold mb-2">Đăng nhập để bắt đầu</h4>
                    <p className="max-w-[15rem] mx-auto text-muted-foreground text-sm mb-6">
                      Lưu những quán ăn yêu thích của bạn và đồng bộ trên mọi thiết bị.
                    </p>
                    <Button onClick={login} className="rounded-xl px-8 font-black uppercase tracking-widest shadow-lg shadow-primary/20">
                      Đăng nhập ngay
                    </Button>
                  </>
                )}
              </div>
            )}
          </div>

          {/* Infinite Scroll Skeleton & Status */}
          <div className="mt-12 text-center pb-20">
            {isLoadingMore && (
              <div className="grid gap-6 sm:grid-cols-2 mt-6 animate-pulse">
                {[1, 2].map((i) => (
                  <div key={i} className="h-48 rounded-[2rem] bg-gray-100 shadow-sm border-0">
                    <div className="p-6 space-y-4">
                      <div className="w-20 h-5 bg-gray-200 rounded-full" />
                      <div className="w-3/4 h-8 bg-gray-200 rounded-lg" />
                      <div className="w-full h-4 bg-gray-200 rounded-lg" />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {hasMore ? (
              <div ref={sentinelRef} className="h-24 flex flex-col items-center justify-center gap-3">
                <div className="flex gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary animate-bounce [animation-delay:-0.3s]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-primary animate-bounce [animation-delay:-0.15s]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-primary animate-bounce" />
                </div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Đang tìm thêm món ngon...</p>
              </div>
            ) : filteredRestaurants.length > (itemsPerPage) && (
              <div className="py-8 px-6 rounded-[2rem] bg-gray-50/50 border border-dashed border-gray-200">
                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                  ✨ Đã hiển thị tất cả quán ăn ✨
                </p>
              </div>
            )}
            {filteredRestaurants.length === 0 && (
              <div className="py-20 text-center glass rounded-[2.5rem] border-0">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gray-50 text-gray-300">
                  <MapPin className="h-10 w-10" />
                </div>
                <p className="text-muted-foreground font-bold px-6">
                  {showNearbyOnly 
                    ? `Opps! Hiện tại "Ăn Gì Đây" chưa có quán nào tại ${manualArea || currentArea || 'vị trí của bạn'}.`
                    : "Không tìm thấy quán nào trong danh mục này 🍲"}
                </p>
                {showNearbyOnly && (
                  <Button 
                    variant="link" 
                    onClick={() => setShowNearbyOnly(false)}
                    className="mt-4 text-primary font-bold"
                  >
                    Xem tất cả khu vực
                  </Button>
                )}
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Fixed Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 p-4 rounded-2xl bg-white shadow-2xl border border-gray-100 text-primary transition-all duration-500 hover:scale-110 active:scale-90 ${
          showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
        }`}
      >
        <ChevronUp className="h-6 w-6 stroke-[3px]" />
      </button>

      {/* Suggestion Modal */}
      <SuggestionModal
        isOpen={isSuggestionModalOpen}
        restaurant={suggestion}
        onClose={() => setIsSuggestionModalOpen(false)}
        onShuffle={handleShuffle}
      />

      {/* Footer */}
      <footer className="mt-20 py-10 text-center border-t bg-white/50">
        <div className="container px-6">
          <p className="text-sm font-bold opacity-20 uppercase tracking-[0.3em]">
            Ăn Gì Đây? © 2026
          </p>
          <p className="mt-2 text-[10px] text-muted-foreground uppercase tracking-widest">
            Made with ✨ for Vietnam
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
