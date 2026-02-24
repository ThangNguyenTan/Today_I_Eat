import { useState, useEffect, useMemo, useRef, useCallback } from "react";
import { useRestaurants, getCurrentMealTime } from "@/hooks/useRestaurants";
import { usePullToRefresh } from "@/hooks/usePullToRefresh";
import { useToast } from "@/context/ToastContext";
import { RestaurantForm } from "@/components/RestaurantForm";
import { PullToRefresh } from "@/components/PullToRefresh";
import { RestaurantCard } from "@/components/RestaurantCard";
import { SuggestionModal } from "@/components/SuggestionModal";
import { Button } from "@/components/ui/button";
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
  X,
  Navigation,
} from "lucide-react";
import { NearbyModal } from "@/components/NearbyModal";
import { UserMenu } from "@/components/UserMenu";
import { useAuth } from "@/context/AuthContext";
import type { Restaurant, MealTime, FoodType } from "@/types";
import { FOOD_TYPES, HCM_DISTRICTS } from "@/constants";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Check, ChevronsUpDown } from "lucide-react";

function App() {
  const { user, login, logout } = useAuth();
  const {
    restaurants,
    totalCount,
    loading,
    isSyncing,
    hasMore: apiHasMore,
    addRestaurant,
    getRandomRestaurant,
    toggleFavorite,
    loadMore,
    search,
  } = useRestaurants(user);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [suggestion, setSuggestion] = useState<Restaurant | null>(null);
  const [isSuggestionModalOpen, setIsSuggestionModalOpen] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [greeting, setGreeting] = useState("");
  const [currentFilter, setCurrentFilter] = useState<MealTime | undefined>(
    undefined,
  );
  const [activeType, setActiveType] = useState<FoodType | "Tất cả">("Tất cả");
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [showNearbyOnly, setShowNearbyOnly] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [manualArea, setManualArea] = useState<string | null>(null);
  const [isAreaSelectorOpen, setIsAreaSelectorOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isNearbyModalOpen, setIsNearbyModalOpen] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  // Debounced server search when filters change
  const searchTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const triggerSearch = useCallback(
    (
      overrides: {
        type?: FoodType | "Tất cả";
        q?: string;
        district?: string;
        favOnly?: boolean;
      } = {},
    ) => {
      const type = overrides.type ?? activeType;
      const q = overrides.q ?? searchQuery;
      const district =
        overrides.district ??
        (showNearbyOnly ? (manualArea ?? undefined) : undefined);
      const favOnly = overrides.favOnly ?? showFavoritesOnly;

      if (searchTimeoutRef.current) clearTimeout(searchTimeoutRef.current);
      searchTimeoutRef.current = setTimeout(() => {
        search({
          type: type !== "Tất cả" ? type : undefined,
          q: q || undefined,
          district: district || undefined,
        });
        // showFavoritesOnly is still client-side (Firebase-based)
        void favOnly;
      }, 300);
    },
    [
      activeType,
      searchQuery,
      showNearbyOnly,
      manualArea,
      showFavoritesOnly,
      search,
    ],
  );

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 11) setGreeting("Chào buổi sáng ☕");
    else if (hour < 14) setGreeting("Chúc bạn bữa trưa ngon miệng 🍱");
    else if (hour < 18) setGreeting("Chiều rồi, làm chút ăn vặt nhỉ? 🍰");
    else setGreeting("Bữa tối ấm cúng nhé 🍜");
  }, []);

  useEffect(() => {
    if (!user) {
      setShowFavoritesOnly(false);
      setIsFormOpen(false);
    }
  }, [user]);

  // Pull-to-refresh handler
  const { success, info } = useToast();
  const handleRefresh = useCallback(async () => {
    // Reset filters and search
    setSearchQuery("");
    setActiveType("Tất cả");
    setShowFavoritesOnly(false);
    setShowNearbyOnly(false);
    setManualArea(null);

    // Update greeting based on current time
    const hour = new Date().getHours();
    if (hour < 11) setGreeting("Chào buổi sáng ☕");
    else if (hour < 14) setGreeting("Chúc bạn bữa trưa ngon miệng 🍱");
    else if (hour < 18) setGreeting("Chiều rồi, làm chút ăn vặt nhỉ? 🍰");
    else setGreeting("Bữa tối ấm cúng nhé 🍜");

    // Simulate network delay for better UX feedback
    await new Promise((resolve) => setTimeout(resolve, 800));
    success("Đã làm mới danh sách!", 2000);
  }, [success]);

  const { pullDistance, isRefreshing, pullProgress } = usePullToRefresh({
    onRefresh: handleRefresh,
    threshold: 80,
    maxPull: 120,
  });

  const handleSuggest = async (filter?: MealTime) => {
    const mealTime = filter || getCurrentMealTime();
    setCurrentFilter(mealTime);
    setIsSuggestionModalOpen(true);
    const random = await getRandomRestaurant(mealTime);
    setSuggestion(random);
  };

  const handleShuffle = async () => {
    const random = await getRandomRestaurant(currentFilter);
    setSuggestion(random);
  };

  // Client-side favorite filter on top of server results
  const displayedRestaurants = useMemo(() => {
    if (showFavoritesOnly) return restaurants.filter((r) => r.isFavorite);
    return restaurants;
  }, [restaurants, showFavoritesOnly]);

  // Trigger server search whenever filter state changes
  useEffect(() => {
    triggerSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeType, searchQuery, showNearbyOnly, manualArea]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > window.innerHeight);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    if (!apiHasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoadingMore) {
          setIsLoadingMore(true);
          loadMore({
            type: activeType !== "Tất cả" ? activeType : undefined,
            q: searchQuery || undefined,
            district: showNearbyOnly ? (manualArea ?? undefined) : undefined,
          }).finally(() => setIsLoadingMore(false));
        }
      },
      { threshold: 0.1, rootMargin: "100px" },
    );

    if (sentinelRef.current) observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, [
    apiHasMore,
    isLoadingMore,
    loadMore,
    activeType,
    searchQuery,
    showNearbyOnly,
    manualArea,
  ]);

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#1A1A1A] pb-24 font-sans selection:bg-primary/20">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full" />
        <div className="absolute top-[20%] -left-[10%] w-[30%] h-[30%] bg-orange-200/20 blur-[100px] rounded-full" />
      </div>

      {/* Pull to Refresh Indicator */}
      <PullToRefresh
        pullDistance={pullDistance}
        isRefreshing={isRefreshing}
        pullProgress={pullProgress}
      />

      {/* Header */}
      <header className="sticky top-0 z-40 w-full glass border-b-0">
        <div className="container flex h-16 items-center justify-between px-6">
          <div
            className="flex items-center gap-3 group cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-orange-500 text-white shadow-lg shadow-primary/25 ring-4 ring-white group-hover:scale-110 transition-transform duration-300">
              <UtensilsCrossed className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
              {/* Animated ping */}
              <div
                className="absolute inset-0 rounded-2xl bg-primary/30 animate-ping opacity-0 group-hover:opacity-100"
                style={{ animationDuration: "1.5s" }}
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg font-black tracking-tight leading-none group-hover:text-primary transition-colors duration-300">
                Ăn Gì Đây?
              </h1>
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground">
                🇻🇳 Vietnamese Cuisine
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <UserMenu
              user={
                user
                  ? {
                      name: user.displayName || "User",
                      email: user.email || "",
                      photoURL:
                        user.photoURL ||
                        `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.uid}`,
                    }
                  : null
              }
              onLogin={login}
              onLogout={logout}
              isSyncing={isSyncing}
            />
            <div className="w-[1px] h-6 bg-gray-100 mx-1 hidden sm:block" />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => (user ? setIsFormOpen(!isFormOpen) : login())}
              className={`rounded-full transition-all duration-300 ${isFormOpen ? "bg-primary text-white scale-110 rotate-45" : "hover:bg-primary/10 hover:scale-110"}`}
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
            <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-sm font-bold text-primary uppercase tracking-widest animate-bounce-in">
              {greeting}
            </p>
            <h2 className="text-5xl font-black tracking-tight sm:text-6xl leading-[1.1] mt-6">
              Hôm nay bạn <br />
              <span className="text-gradient inline-block animate-in slide-in-from-bottom-4 duration-700">
                thấy thế nào?
              </span>
            </h2>
            <p className="text-muted-foreground mt-4 text-sm max-w-xs mx-auto">
              Để chúng tôi giúp bạn chọn món ngon cho bữa ăn hôm nay! 🍜
            </p>
          </div>
        </section>

        {/* Action Button - Enhanced */}
        <section className="mb-16 flex justify-center">
          <div className="relative group">
            {/* Animated glow effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-primary via-orange-500 to-amber-500 rounded-[3rem] blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-500 animate-pulse" />

            {/* Floating particles */}
            <div
              className="absolute -top-4 left-1/4 w-2 h-2 bg-primary rounded-full animate-float opacity-60"
              style={{ animationDelay: "0s" }}
            />
            <div
              className="absolute -top-6 right-1/3 w-3 h-3 bg-orange-400 rounded-full animate-float opacity-60"
              style={{ animationDelay: "0.5s" }}
            />
            <div
              className="absolute -bottom-4 left-1/3 w-2 h-2 bg-amber-400 rounded-full animate-float opacity-60"
              style={{ animationDelay: "1s" }}
            />

            <Button
              size="xl"
              onClick={() => handleSuggest()}
              className="relative h-20 px-12 rounded-[2.5rem] bg-gradient-to-r from-primary via-orange-500 to-amber-500 hover:from-amber-500 hover:via-orange-500 hover:to-primary transition-all duration-500 hover:scale-105 active:scale-95 shadow-2xl shadow-primary/40 border-4 border-white"
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 rounded-[2.25rem] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>

              <span className="relative z-10 flex items-center gap-4 text-lg font-black uppercase tracking-wider">
                Ăn gì bây giờ?
                <div className="p-2 bg-white/20 rounded-xl backdrop-blur-sm">
                  <UtensilsCrossed className="h-6 w-6 animate-bounce" />
                </div>
              </span>
            </Button>
          </div>
        </section>

        {/* Add Restaurant Form (Collapsible) */}
        {isFormOpen && (
          <section className="mb-12 animate-in zoom-in-95 fade-in duration-300">
            <div className="rounded-[2.5rem] border-0 bg-white p-8 shadow-2xl">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-black tracking-tight">
                    Thêm Quán Mới
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {user
                      ? "Lưu giữ hương vị yêu thích của bạn"
                      : "Vui lòng đăng nhập để lưu quán"}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsFormOpen(false)}
                  className="rounded-full"
                >
                  <PlusCircle className="h-5 w-5 rotate-45" />
                </Button>
              </div>

              {user ? (
                <RestaurantForm
                  onAdd={(data) => {
                    addRestaurant(data);
                    setIsFormOpen(false);
                    success(`Đã thêm quán "${data.name}" vào danh sách! 🎉`);
                  }}
                />
              ) : (
                <div className="py-10 text-center space-y-6">
                  <div className="mx-auto w-20 h-20 bg-primary/5 rounded-[1.5rem] flex items-center justify-center">
                    <PlusCircle className="h-10 w-10 text-primary" />
                  </div>
                  <p className="text-muted-foreground text-sm max-w-[15rem] mx-auto">
                    Đăng nhập để bắt đầu xây dựng kho tàng ẩm thực của riêng
                    bạn.
                  </p>
                  <Button
                    onClick={login}
                    className="rounded-xl px-8 font-black uppercase tracking-widest shadow-lg shadow-primary/20"
                  >
                    Đăng nhập ngay
                  </Button>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Search & Filter Section */}
        <section className="mb-10 space-y-6">
          <div className="relative group z-30">
            {/* Gradient border effect */}
            <div className="absolute -inset-0.5 rounded-[2.2rem] bg-gradient-to-r from-primary/50 via-orange-400/50 to-amber-500/50 opacity-20 group-hover:opacity-100 blur transition duration-500 group-focus-within:opacity-100 group-focus-within:blur-md" />

            <div className="relative flex items-center bg-white rounded-[2rem] shadow-xl shadow-black/5 transition-all duration-300 group-focus-within:shadow-2xl group-focus-within:shadow-primary/20 group-focus-within:-translate-y-1">
              <div className="pl-6 text-muted-foreground group-focus-within:text-primary transition-colors duration-300">
                <Search className="h-6 w-6" />
              </div>
              <input
                type="text"
                placeholder="Tìm tên quán, món ăn hoặc địa chỉ..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-16 pl-4 pr-14 rounded-[2rem] bg-transparent border-0 focus:ring-0 text-base font-medium placeholder:text-muted-foreground/50"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute inset-y-0 right-4 my-auto h-8 w-8 flex items-center justify-center rounded-full bg-gray-100 text-muted-foreground hover:bg-primary hover:text-white transition-all duration-300 hover:rotate-90"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between px-2">
            <div>
              <h3 className="text-2xl font-black tracking-tight">Khám phá</h3>
              <p className="text-sm text-muted-foreground flex items-center gap-1">
                <Info className="h-3 w-3" />
                {loading
                  ? "Đang tải..."
                  : searchQuery || activeType !== "Tất cả"
                    ? `Tìm thấy ${displayedRestaurants.length} địa điểm`
                    : `Có ${totalCount.toLocaleString()} địa điểm quanh bạn`}
              </p>
            </div>
            <div className="flex items-center gap-2">
              {/* Gần Đây button */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsNearbyModalOpen(true)}
                className="rounded-full gap-1.5 font-bold text-xs uppercase tracking-widest transition-all text-emerald-600 hover:bg-emerald-50 hover:text-emerald-700"
              >
                <Navigation className="h-4 w-4" />
                Gần Đây
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className={`rounded-full gap-2 font-bold text-xs uppercase tracking-widest transition-all ${isFilterOpen ? "bg-primary text-white shadow-lg" : "text-primary"}`}
              >
                <ListFilter className="h-4 w-4" />
                Bộ lọc
              </Button>
            </div>
          </div>
        </section>

        {/* Restaurant List */}
        <section className="space-y-8">
          {/* Expanded Filter UI */}
          {isFilterOpen && (
            <div className="animate-in slide-in-from-top-4 fade-in duration-300">
              <div className="pt-0 px-8 pb-8 rounded-[3rem] bg-white border border-gray-100 shadow-2xl space-y-8 relative overflow-hidden">
                {/* Decorative Background Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-500/5 rounded-full -ml-12 -mb-12 blur-2xl pointer-events-none" />

                {/* Header with Clear Action */}
                <div className="flex items-center justify-between px-1">
                  <div className="space-y-1">
                    <h3 className="text-sm font-black uppercase tracking-widest text-primary">
                      Bộ lọc tìm kiếm
                    </h3>
                    <p className="text-[10px] font-bold text-muted-foreground/60 uppercase tracking-tighter">
                      Tùy chỉnh theo nhu cầu của bạn
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setActiveType("Tất cả");
                      setShowFavoritesOnly(false);
                      setShowNearbyOnly(false);
                      setManualArea(null);
                    }}
                    className={`flex items-center gap-2 py-1.5 px-3 rounded-full text-[9px] font-black text-red-500 bg-red-50 hover:bg-red-100 uppercase tracking-widest transition-all duration-500 ${
                      activeType !== "Tất cả" ||
                      showFavoritesOnly ||
                      showNearbyOnly
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-2 pointer-events-none"
                    }`}
                  >
                    <RotateCcw className="h-3 w-3" />
                    Làm mới
                  </button>
                </div>

                <div className="grid gap-10 sm:grid-cols-2">
                  {/* Location Section */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 px-1">
                      <MapPin className="h-3.5 w-3.5 text-primary" />
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
                        Khu vực
                      </span>
                    </div>
                    <Popover
                      open={isAreaSelectorOpen}
                      onOpenChange={setIsAreaSelectorOpen}
                    >
                      <PopoverTrigger asChild>
                        <button
                          className={`w-full flex items-center justify-between px-5 py-3.5 rounded-2xl text-[11px] font-bold transition-all border-2 ${
                            showNearbyOnly
                              ? "bg-primary/5 border-primary text-primary shadow-sm"
                              : "bg-gray-50/50 border-transparent text-gray-500 hover:bg-gray-100/50"
                          }`}
                        >
                          <span className="uppercase tracking-widest">
                            {manualArea || "Toàn thành phố"}
                          </span>
                          <ChevronsUpDown className="h-4 w-4 opacity-30" />
                        </button>
                      </PopoverTrigger>
                      <PopoverContent
                        className="w-[240px] p-0 rounded-3xl border-gray-100 shadow-2xl"
                        align="start"
                        sideOffset={8}
                      >
                        <Command>
                          <CommandInput
                            placeholder="Tìm Quận..."
                            className="h-12 text-[13px] border-none focus:ring-0"
                          />
                          <CommandList className="max-h-[300px] p-2">
                            <CommandEmpty className="text-[11px] py-6 text-center text-muted-foreground font-medium">
                              Không tìm thấy khu vực này 📍
                            </CommandEmpty>
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
                                  className="text-[12px] py-3 px-4 rounded-xl cursor-pointer hover:bg-primary/5 data-[selected=true]:bg-primary/10"
                                >
                                  <div className="flex items-center justify-between w-full">
                                    <span className="font-semibold">
                                      {district}
                                    </span>
                                    {manualArea === district && (
                                      <Check className="h-4 w-4 text-primary" />
                                    )}
                                  </div>
                                </CommandItem>
                              ))}
                            </CommandGroup>
                          </CommandList>
                        </Command>
                      </PopoverContent>
                    </Popover>
                  </div>

                  {/* Preferences Section */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 px-1">
                      <Heart className="h-3.5 w-3.5 text-red-500" />
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
                        Ưu tiên
                      </span>
                    </div>
                    <button
                      onClick={() =>
                        user
                          ? setShowFavoritesOnly(!showFavoritesOnly)
                          : login()
                      }
                      className={`w-full flex items-center justify-between px-5 py-3.5 rounded-2xl text-[11px] font-bold transition-all border-2 ${
                        showFavoritesOnly
                          ? "bg-red-50 border-red-200 text-red-500 shadow-sm"
                          : "bg-gray-50/50 border-transparent text-gray-500 hover:bg-gray-100/50"
                      }`}
                    >
                      <span className="uppercase tracking-widest">
                        Danh sách quán ruột
                      </span>
                      <div
                        className={`h-5 w-10 rounded-full transition-all duration-500 flex items-center px-1 ${showFavoritesOnly ? "bg-red-500" : "bg-gray-200"}`}
                      >
                        <div
                          className={`h-3 w-3 rounded-full bg-white shadow-sm transition-all duration-300 ${showFavoritesOnly ? "translate-x-5" : "translate-x-0"}`}
                        />
                      </div>
                    </button>
                  </div>
                </div>

                {/* Categories Section */}
                <div className="space-y-6 pt-2">
                  <div className="flex items-center justify-between px-1">
                    <div className="flex items-center gap-2">
                      <UtensilsCrossed className="h-3.5 w-3.5 text-orange-500" />
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
                        Loại món ăn
                      </span>
                    </div>
                    {activeType !== "Tất cả" && (
                      <span className="text-[9px] font-black text-primary/60 uppercase">
                        Đang chọn: {activeType}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-3 overflow-x-auto pb-6 pt-2 no-scrollbar -mx-2 px-6 snap-x snap-mandatory">
                    <button
                      onClick={() => setActiveType("Tất cả")}
                      className={`snap-start flex-none px-6 py-3.5 rounded-[1.2rem] text-[11px] font-black uppercase tracking-wider transition-all duration-300 border-2 ${
                        activeType === "Tất cả"
                          ? "bg-primary border-primary text-white shadow-xl shadow-primary/30 scale-105"
                          : "bg-white border-gray-100 text-gray-400 hover:border-primary/30 hover:text-primary"
                      }`}
                    >
                      🍽️ Tất cả
                    </button>
                    {FOOD_TYPES.map((type) => {
                      // Simple emoji mapping
                      const emoji =
                        {
                          Phở: "🍜",
                          Bún: "🍜",
                          Cơm: "🍚",
                          Lẩu: "🫕",
                          "Đồ chay": "🥗",
                          "Bánh mì": "🥖",
                          "Ăn vặt": "🍿",
                          "Bánh cuốn": "🍥",
                          "Bún đậu": "🥒",
                          "Hải sản": "🦐",
                          Ốc: "🐚",
                          Mì: "🍝",
                          "Hủ tiếu": "🍲",
                          "Đồ nướng": "🥩",
                          "Nước & Cafe": "🥤",
                          Chè: "🍧",
                          "Bánh xèo": "🥞",
                          Khác: "🍴",
                        }[type] || "🍽️";

                      return (
                        <button
                          key={type}
                          onClick={() => setActiveType(type)}
                          className={`snap-start flex-none px-6 py-3.5 rounded-[1.2rem] text-[11px] font-black uppercase tracking-wider transition-all duration-300 border-2 ${
                            activeType === type
                              ? "bg-primary border-primary text-white shadow-xl shadow-primary/30 scale-105"
                              : "bg-white border-gray-100 text-gray-400 hover:border-primary/30 hover:text-primary"
                          }`}
                        >
                          <span className="mr-2 text-base">{emoji}</span>
                          {type}
                        </button>
                      );
                    })}
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
                  onToggleFavorite={
                    user
                      ? () => {
                          toggleFavorite(res.id);
                          if (!res.isFavorite) {
                            success(`Đã thêm "${res.name}" vào quán ruột! ❤️`);
                          } else {
                            info(`Đã xóa "${res.name}" khỏi quán ruột.`);
                          }
                        }
                      : undefined
                  }
                />
              ))
            ) : (
              <div className="col-span-full py-24 text-center glass rounded-[2.5rem] border-dashed border-2 border-gray-100 flex flex-col items-center justify-center group overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-transparent pointer-events-none" />

                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-150 animate-pulse" />
                  <div className="relative h-28 w-28 flex items-center justify-center rounded-[2.5rem] bg-gradient-to-br from-white to-gray-50 shadow-2xl shadow-primary/10 border-4 border-white transform transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
                    <Heart className="h-12 w-12 text-gray-200 fill-gray-50 transition-colors duration-500 group-hover:text-red-400 group-hover:fill-red-100" />
                  </div>
                  {/* Floating particles */}
                  <div
                    className="absolute -top-2 -right-2 h-8 w-8 bg-red-100 rounded-full flex items-center justify-center animate-bounce shadow-lg"
                    style={{ animationDelay: "0.2s" }}
                  >
                    <Heart className="h-4 w-4 text-red-500 fill-red-500" />
                  </div>
                  <div
                    className="absolute -bottom-2 -left-2 h-6 w-6 bg-orange-100 rounded-full flex items-center justify-center animate-bounce shadow-lg"
                    style={{ animationDelay: "0.4s" }}
                  >
                    <UtensilsCrossed className="h-3 w-3 text-orange-500" />
                  </div>
                </div>

                {user ? (
                  <div className="relative z-10 max-w-sm px-4">
                    <h4 className="text-2xl font-black mb-3 text-gray-800">
                      Chưa có "quán ruột" nào?
                    </h4>
                    <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
                      Đừng để bụng đói! Hãy thêm những quán ăn yêu thích của bạn
                      để chúng tôi có thể gợi ý cho bữa sau nhé.
                    </p>
                    <Button
                      onClick={() => setIsFormOpen(true)}
                      className="rounded-xl px-8 h-12 bg-primary text-white font-bold shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all"
                    >
                      <PlusCircle className="mr-2 h-5 w-5" />
                      Thêm quán ngay
                    </Button>
                  </div>
                ) : (
                  <div className="relative z-10 max-w-sm px-4">
                    <h4 className="text-2xl font-black mb-3 text-gray-800">
                      Bạn chưa đăng nhập
                    </h4>
                    <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
                      Đăng nhập để lưu lại những địa điểm ăn uống yêu thích và
                      đồng bộ trên mọi thiết bị của bạn.
                    </p>
                    <Button
                      onClick={login}
                      className="rounded-xl px-10 h-12 font-black uppercase tracking-widest bg-gradient-to-r from-primary to-orange-500 text-white shadow-xl shadow-primary/25 hover:scale-105 active:scale-95 transition-all"
                    >
                      Đăng nhập ngay
                    </Button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Infinite Scroll Skeleton & Status */}
          <div className="mt-12 text-center pb-20">
            {isLoadingMore && (
              <div className="grid gap-6 sm:grid-cols-2 mt-6">
                {[1, 2].map((i) => (
                  <div
                    key={i}
                    className="h-64 rounded-[2rem] bg-white shadow-sm border border-gray-100 overflow-hidden relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-[shimmer_1.5s_infinite] z-10" />
                    <div className="p-6 space-y-4">
                      {/* Header skeleton */}
                      <div className="flex justify-between items-center">
                        <div className="w-24 h-6 bg-gray-100 rounded-full" />
                        <div className="w-8 h-8 bg-gray-100 rounded-full" />
                      </div>

                      {/* Title skeleton */}
                      <div className="w-3/4 h-8 bg-gray-100 rounded-xl" />

                      {/* Content skeleton */}
                      <div className="space-y-2 pt-2">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gray-100 rounded-xl" />
                          <div className="flex-1 h-4 bg-gray-100 rounded-full" />
                        </div>
                        <div className="h-20 bg-gray-50 rounded-2xl mt-4 border border-gray-100/50" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {apiHasMore ? (
              <div
                ref={sentinelRef}
                className="h-24 flex flex-col items-center justify-center gap-3"
              >
                <div className="flex gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary animate-bounce [animation-delay:-0.3s]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-primary animate-bounce [animation-delay:-0.15s]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-primary animate-bounce" />
                </div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                  Đang tìm thêm món ngon...
                </p>
              </div>
            ) : (
              displayedRestaurants.length > 0 && (
                <div className="py-8 px-6 rounded-[2rem] bg-gray-50/50 border border-dashed border-gray-200">
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                    ✨ Đã hiển thị tất cả quán ăn ✨
                  </p>
                </div>
              )
            )}
            {displayedRestaurants.length === 0 &&
              !loading &&
              !showFavoritesOnly && (
                <div className="py-20 text-center glass rounded-[2.5rem] border-0 flex flex-col items-center justify-center">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gray-100 rounded-full animate-ping opacity-20" />
                    <div className="flex h-24 w-24 items-center justify-center rounded-[2rem] bg-gradient-to-br from-gray-50 to-gray-100 border-4 border-white shadow-xl shadow-gray-200/50 text-gray-300">
                      <Search className="h-10 w-10 text-gray-400" />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-white p-2 rounded-full shadow-lg">
                      <span className="text-2xl">🤔</span>
                    </div>
                  </div>

                  <h4 className="text-xl font-black text-gray-800 mb-2">
                    Không tìm thấy quán nào
                  </h4>
                  <p className="text-muted-foreground font-medium px-6 max-w-xs mx-auto text-sm mb-6">
                    {showNearbyOnly
                      ? `Opps! Hiện tại "Ăn Gì Đây" chưa có quán nào tại ${manualArea || "khu vực này"}.`
                      : "Thử tìm từ khóa khác xem sao nhé? 🍲"}
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
          showScrollTop
            ? "translate-y-0 opacity-100"
            : "translate-y-20 opacity-0 pointer-events-none"
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

      {/* Nearby Modal */}
      <NearbyModal
        isOpen={isNearbyModalOpen}
        onClose={() => setIsNearbyModalOpen(false)}
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
