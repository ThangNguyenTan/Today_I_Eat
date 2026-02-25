import { useState, useEffect, useMemo, useRef, useCallback } from "react";
import { useRestaurants } from "@/hooks/useRestaurants";
import { useGeolocation } from "@/hooks/useGeolocation";
import { usePullToRefresh } from "@/hooks/usePullToRefresh";
import { useToast } from "@/context/ToastContext";
import { RestaurantForm } from "@/components/RestaurantForm";
import { PullToRefresh } from "@/components/PullToRefresh";
import { RestaurantCard } from "@/components/RestaurantCard";
import { RestaurantCardSkeleton } from "@/components/RestaurantCardSkeleton";
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
  Search,
  X,
  Navigation,
  ExternalLink,
  Loader2,
} from "lucide-react";
import { NearbyModal } from "@/components/NearbyModal";
import { UserMenu } from "@/components/UserMenu";
import { Pagination } from "@/components/Pagination";
import { useAuth } from "@/context/AuthContext";
import { BottomNavigation } from "@/components/BottomNavigation";
import { FilterModal } from "@/components/FilterModal";
import { PersonalityQuiz } from "@/components/PersonalityQuiz";
import { LoginOverlay } from "@/components/LoginOverlay";
import { RestaurantPocketView } from "@/components/RestaurantPocketView";
import { useUserProfile } from "@/hooks/useUserProfile";
import type { FoodType, FoodiePersona, Restaurant } from "@/types";

function App() {
  const { user, loading: authLoading, login, logout } = useAuth();
  const {
    restaurants,
    totalCount,
    loading: apiLoading,
    currentPage,
    totalPages,
    addRestaurant,
    toggleFavorite,
    goToPage,
    search,
  } = useRestaurants(user);
  const {
    latitude,
    longitude,
    area,
    loading: geoLoading,
    error: geoError,
    hasAttempted: geoAttempted,
    isFallback,
    getLocation,
  } = useGeolocation();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSuggestionModalOpen, setIsSuggestionModalOpen] = useState(false);
  const [greeting, setGreeting] = useState("");
  const [activeType, setActiveType] = useState<FoodType | "Tất cả">("Tất cả");
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [showNearbyOnly, setShowNearbyOnly] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [manualArea, setManualArea] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isNearbyModalOpen, setIsNearbyModalOpen] = useState(false);
  const [userLocation, setUserLocation] = useState<{
    lat: number;
    lon: number;
  } | null>(null);
  const [isSortingByDistance, setIsSortingByDistance] = useState(false);
  const { profile, updatePersona } = useUserProfile(user);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] =
    useState<Restaurant | null>(null);

  // Automatically open quiz for new users without a persona
  useEffect(() => {
    if (user && profile && !profile.persona && !isQuizOpen) {
      const timer = setTimeout(() => setIsQuizOpen(true), 1500);
      return () => clearTimeout(timer);
    }
  }, [user, profile, isQuizOpen]);

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
          lat: isSortingByDistance ? userLocation?.lat : undefined,
          lon: isSortingByDistance ? userLocation?.lon : undefined,
          favOnly: favOnly,
        });
      }, 300);
    },
    [
      activeType,
      searchQuery,
      showNearbyOnly,
      manualArea,
      showFavoritesOnly,
      search,
      isSortingByDistance,
      userLocation,
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

  const toggleDistanceSort = useCallback(() => {
    if (isSortingByDistance && userLocation) {
      setIsSortingByDistance(false);
      return;
    }

    if (!userLocation) {
      getLocation();
    }
    setIsSortingByDistance(true);
  }, [isSortingByDistance, userLocation, getLocation]);

  const handleSuggest = () => {
    setIsSuggestionModalOpen(true);
  };

  // Client-side favorite filter on top of server results
  const displayedRestaurants = useMemo(() => {
    if (showFavoritesOnly) return restaurants.filter((r) => r.isFavorite);
    return restaurants;
  }, [restaurants, showFavoritesOnly]);

  // Initial load search
  useEffect(() => {
    triggerSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Sync search query only (allow live search for text while keeping filters manual)
  useEffect(() => {
    if (searchQuery) {
      triggerSearch({ q: searchQuery });
    } else if (searchQuery === "") {
      triggerSearch({ q: "" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  // No automatic location retrieval on mount to save resources

  // Update userLocation when geolocation state changes
  useEffect(() => {
    if (latitude && longitude) {
      setUserLocation({ lat: latitude, lon: longitude });
    }
    if (area) {
      setManualArea(area);
    }
  }, [latitude, longitude, area]);

  // Show Toast for location fallback
  useEffect(() => {
    if (geoAttempted && isFallback && geoError) {
      info(geoError, 4000);
    }
  }, [geoAttempted, isFallback, geoError, info]);

  // Re-trigger search when location or sort mode changes
  useEffect(() => {
    triggerSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSortingByDistance, userLocation]);

  const handleApplyFilters = (filters: {
    type: FoodType | "Tất cả";
    favOnly: boolean;
    area: string | null;
  }) => {
    setActiveType(filters.type);
    setShowFavoritesOnly(filters.favOnly);
    setManualArea(filters.area);
    setShowNearbyOnly(!!filters.area);

    // Trigger explicit search with new filters
    triggerSearch({
      type: filters.type,
      favOnly: filters.favOnly,
      district: filters.area || undefined,
    });
  };

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

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAFAFA]">
        <div className="relative">
          <Loader2 className="h-12 w-12 animate-spin text-primary" />
          <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl animate-pulse" />
        </div>
      </div>
    );
  }

  if (!user) {
    return <LoginOverlay onLogin={login} />;
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#1A1A1A] pb-32 font-sans selection:bg-primary/20">
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
      <header className="sticky top-0 z-40 w-full glass-premium border-b-0">
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
              onOpenQuiz={() => setIsQuizOpen(true)}
            />
            <div className="w-[1px] h-6 bg-gray-100 mx-1 hidden sm:block" />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => (user ? setIsFormOpen(!isFormOpen) : login())}
              className={`rounded-full transition-all duration-300 ${isFormOpen ? "bg-primary text-white scale-110 rotate-45" : "hover:bg-primary/10 hover:scale-110"} hidden sm:flex`}
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
              variant="luxury"
              onClick={() => handleSuggest()}
              className="relative h-20 px-12 rounded-[2.5rem] shadow-2xl shadow-primary/40 border-4 border-white"
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
                {apiLoading ? (
                  <Loader2 className="h-6 w-6 animate-spin text-primary" />
                ) : (
                  <Search className="h-6 w-6" />
                )}
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

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 px-2">
            <div>
              <h3 className="text-3xl font-black tracking-tight">Khám phá</h3>
              <p className="text-sm text-muted-foreground flex items-center gap-1.5 mt-1">
                <Info className="h-3.5 w-3.5 text-primary/60" />
                {apiLoading || geoLoading
                  ? "Đang tải..."
                  : searchQuery || activeType !== "Tất cả"
                    ? `Tìm thấy ${totalCount.toLocaleString()} địa điểm`
                    : `Có ${totalCount.toLocaleString()} địa điểm`}
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-2 bg-white p-1.5 rounded-2xl shadow-sm border border-gray-100">
              {/* Gần Đây button */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsNearbyModalOpen(true)}
                className="rounded-xl gap-1.5 font-bold text-[10px] uppercase tracking-widest transition-all text-emerald-600 hover:bg-emerald-50 hover:text-emerald-700 h-9"
              >
                <Navigation className="h-3.5 w-3.5" />
                Gần Đây
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleDistanceSort}
                className={`rounded-xl gap-1.5 font-bold text-[10px] uppercase tracking-widest transition-all h-9 ${isSortingByDistance ? "bg-amber-50 text-amber-600 shadow-sm ring-1 ring-amber-200" : "text-amber-600 hover:bg-amber-50"}`}
              >
                <MapPin className="h-3.5 w-3.5" />
                {isSortingByDistance ? "Đang sắp xếp" : "Sắp xếp"}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className={`rounded-xl gap-2 font-bold text-[10px] uppercase tracking-widest transition-all h-9 ${isFilterOpen ? "bg-primary text-white shadow-lg" : "text-primary hover:bg-primary/5"}`}
              >
                <ListFilter className="h-3.5 w-3.5" />
                Bộ lọc
              </Button>
            </div>
          </div>
        </section>

        {/* Restaurant List */}
        <section className="space-y-8">
          <div className="grid gap-6 sm:grid-cols-2">
            {apiLoading ? (
              Array.from({ length: 6 }).map((_, i) => (
                <RestaurantCardSkeleton key={`skeleton-${i}`} />
              ))
            ) : displayedRestaurants.length > 0 ? (
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
                  onClick={() => setSelectedRestaurant(res)}
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

          {/* Pagination UI */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => {
              goToPage(page, {
                type: activeType !== "Tất cả" ? activeType : undefined,
                q: searchQuery || undefined,
                district: showNearbyOnly
                  ? (manualArea ?? undefined)
                  : undefined,
                lat: isSortingByDistance ? userLocation?.lat : undefined,
                lon: isSortingByDistance ? userLocation?.lon : undefined,
                favOnly: showFavoritesOnly,
              });
            }}
            isLoading={apiLoading}
          />
        </section>
      </main>

      {/* Mobile Bottom Navigation Bar */}
      <BottomNavigation
        onHome={scrollToTop}
        onNearby={() => setIsNearbyModalOpen(true)}
        onSuggest={handleSuggest}
        onFilter={() => setIsFilterOpen(!isFilterOpen)}
        onAdd={() => (user ? setIsFormOpen(!isFormOpen) : login())}
        isFilterActive={isFilterOpen}
        isFormOpen={isFormOpen}
      />

      {/* Fixed Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-32 sm:bottom-8 right-4 sm:right-8 z-50 p-4 rounded-2xl bg-white shadow-2xl border border-gray-100 text-primary transition-all duration-500 hover:scale-110 active:scale-90 ${
          showScrollTop
            ? "translate-y-0 opacity-100"
            : "translate-y-20 opacity-0 pointer-events-none"
        }`}
      >
        <ChevronUp className="h-6 w-6 stroke-[3px]" />
      </button>

      {/* Personality Quiz Modal */}
      <PersonalityQuiz
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        onComplete={(persona: FoodiePersona) => {
          updatePersona(persona);
          success("Đã lưu hồ sơ ẩm thực của bạn! ✨");
        }}
      />

      {/* Suggestion Modal */}
      <SuggestionModal
        isOpen={isSuggestionModalOpen}
        onClose={() => setIsSuggestionModalOpen(false)}
        persona={profile?.persona}
      />

      {/* Restaurant Pocket View (Details) */}
      <RestaurantPocketView
        restaurant={selectedRestaurant}
        isOpen={!!selectedRestaurant}
        onClose={() => setSelectedRestaurant(null)}
        onToggleFavorite={toggleFavorite}
      />

      {/* Nearby Modal */}
      <NearbyModal
        isOpen={isNearbyModalOpen}
        onClose={() => setIsNearbyModalOpen(false)}
        onSelectRestaurant={(r) => {
          setSelectedRestaurant(r);
          setIsNearbyModalOpen(false);
        }}
      />

      {/* Filter Modal */}
      <FilterModal
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        activeType={activeType}
        showFavoritesOnly={showFavoritesOnly}
        manualArea={manualArea}
        isLoggedIn={!!user}
        onLogin={login}
        onApply={handleApplyFilters}
      />

      {/* Footer */}
      <footer className="relative mt-20 pt-24 pb-12 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container px-6 relative z-10">
          <div className="grid gap-12 sm:grid-cols-2 mb-16">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-orange-500 text-white shadow-lg">
                  <UtensilsCrossed className="h-5 w-5" />
                </div>
                <h2 className="text-xl font-black tracking-tight">
                  Ăn Gì Đây?
                </h2>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
                Nền tảng giúp bạn khám phá tinh hoa ẩm thực Việt Nam. Tìm kiếm
                những quán ăn ngon nhất quanh bạn chỉ với vài cú chạm.
              </p>
            </div>

            <div className="space-y-6 sm:text-right">
              <h3 className="text-sm font-black uppercase tracking-[0.2em] text-primary">
                Hợp tác kinh doanh
              </h3>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Bạn muốn đưa quán của mình lên bản đồ ẩm thực?
                  <br />
                  Hãy liên hệ với chúng tôi để cùng phát triển!
                </p>
                <div className="flex flex-col sm:items-end gap-2">
                  <a
                    href="mailto:partnership@angiday.vn"
                    className="group inline-flex items-center gap-2 text-sm font-bold hover:text-primary transition-colors"
                  >
                    partnership@angiday.vn
                    <div className="p-1.5 rounded-lg bg-gray-50 group-hover:bg-primary/10 transition-colors">
                      <ExternalLink className="h-3 w-3" />
                    </div>
                  </a>
                  <a
                    href="tel:+84901234567"
                    className="group inline-flex items-center gap-2 text-sm font-bold hover:text-primary transition-colors"
                  >
                    +84 901 234 567
                    <div className="p-1.5 rounded-lg bg-gray-50 group-hover:bg-primary/10 transition-colors">
                      <ExternalLink className="h-3 w-3" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-30">
                Ăn Gì Đây? © 2026
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-[10px] font-bold text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest"
                >
                  Điều khoản
                </a>
                <a
                  href="#"
                  className="text-[10px] font-bold text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest"
                >
                  Bảo mật
                </a>
              </div>
            </div>
            <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-[0.1em]">
              Handcrafted with ✨ for Vietnam Cuisine
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
