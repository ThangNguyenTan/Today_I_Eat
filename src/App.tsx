import { useState, useEffect, useRef, useCallback } from "react";
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
import { ChevronUp, Loader2, ArrowLeft } from "lucide-react";
import { NearbyModal } from "@/components/NearbyModal";
import { Pagination } from "@/components/Pagination";
import { useAuth } from "@/context/AuthContext";
import { BottomNavigation } from "@/components/BottomNavigation";
import { FilterModal } from "@/components/FilterModal";
import { PersonalityQuiz } from "@/components/PersonalityQuiz";
import { RestaurantPocketView } from "@/components/RestaurantPocketView";
import { useUserProfile } from "@/hooks/useUserProfile";
import { motion, AnimatePresence } from "framer-motion";
import type { FoodiePersona, Restaurant } from "@/types";

// Layout & Section Components
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { ActionSection } from "@/components/home/ActionSection";
import { EmptyState } from "@/components/home/EmptyState";

// Hooks
import { useAppUI } from "@/hooks/useAppUI";

function App() {
  // Auth & Profile
  const { user, loading: authLoading, login, logout } = useAuth();
  const { profile, updatePersona } = useUserProfile(user);

  // API & Data
  const {
    restaurants,
    totalCount,
    loading: apiLoading,
    currentPage,
    totalPages,
    addRestaurant,
    goToPage,
    search,
  } = useRestaurants(user);

  // Geolocation
  const {
    latitude,
    longitude,
    area,
    loading: geoLoading,
    error: geoError,
    hasAttempted: geoAttempted,
    isFallback,
    permissionStatus,
    getLocation,
  } = useGeolocation();

  // UI State Components
  const { greeting, showScrollTop, scrollToTop } = useAppUI();
  const { success, info } = useToast();

  // Functional State
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSuggestionModalOpen, setIsSuggestionModalOpen] = useState(false);
  const [activeTypes, setActiveTypes] = useState<string[]>([]);
  const [showNearbyOnly, setShowNearbyOnly] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [manualArea, setManualArea] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState(
    () => new URLSearchParams(window.location.search).get("q") || "",
  );
  const [isNearbyModalOpen, setIsNearbyModalOpen] = useState(false);
  const [userLocation, setUserLocation] = useState<{
    lat: number;
    lon: number;
  } | null>(null);
  const [isSortingByDistance, setIsSortingByDistance] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] =
    useState<Restaurant | null>(null);

  // ─── Search Logic ──────────────────────────────────────────────────────────

  const searchTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const triggerSearch = useCallback(
    (
      overrides: {
        types?: string[];
        q?: string;
        district?: string;
      } = {},
    ) => {
      const types =
        overrides.types !== undefined ? overrides.types : activeTypes;
      const q = overrides.q ?? searchQuery;
      const district =
        overrides.district ??
        (showNearbyOnly ? (manualArea ?? undefined) : undefined);

      if (searchTimeoutRef.current) clearTimeout(searchTimeoutRef.current);
      searchTimeoutRef.current = setTimeout(() => {
        search({
          type: types.length > 0 ? types.join(",") : undefined,
          q: q || undefined,
          district: district || undefined,
          lat: isSortingByDistance ? userLocation?.lat : undefined,
          lon: isSortingByDistance ? userLocation?.lon : undefined,
        });
      }, 300);
    },
    [
      activeTypes,
      searchQuery,
      showNearbyOnly,
      manualArea,
      search,
      isSortingByDistance,
      userLocation,
    ],
  );

  // Initial load
  useEffect(() => {
    triggerSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Live search on query change
  useEffect(() => {
    triggerSearch({ q: searchQuery });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  // Sync location changes
  useEffect(() => {
    if (latitude && longitude) {
      setUserLocation({ lat: latitude, lon: longitude });
    }
    if (area) {
      setManualArea(area);
    }
  }, [latitude, longitude, area]);

  // Handle location errors
  useEffect(() => {
    if (geoAttempted && isFallback && geoError) {
      info(geoError, 4000);
    }
  }, [geoAttempted, isFallback, geoError, info]);

  // Re-trigger search when sorting/location changes
  useEffect(() => {
    triggerSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSortingByDistance, userLocation]);

  // Automatically open quiz for new users
  useEffect(() => {
    if (user && profile && !profile.persona && !isQuizOpen) {
      const timer = setTimeout(() => setIsQuizOpen(true), 1500);
      return () => clearTimeout(timer);
    }
  }, [user, profile, isQuizOpen]);

  // Automatically open restaurant pocket view for shared links
  const hasAutoOpenedRef = useRef(false);
  useEffect(() => {
    const queryParam = new URLSearchParams(window.location.search).get("q");
    if (
      !hasAutoOpenedRef.current &&
      !apiLoading &&
      restaurants.length > 0 &&
      queryParam
    ) {
      const exactMatch = restaurants.find(
        (r) => r.name.toLowerCase() === queryParam.toLowerCase(),
      );
      if (exactMatch) {
        setSelectedRestaurant(exactMatch);
        hasAutoOpenedRef.current = true;
        // Optionally clean up the URL for a cleaner UX
        window.history.replaceState(
          {},
          document.title,
          window.location.pathname,
        );
      }
    }
  }, [restaurants, apiLoading]);

  // ─── Event Handlers ───────────────────────────────────────────────────────

  const handleRefresh = useCallback(async () => {
    setSearchQuery("");
    setActiveTypes([]);
    setShowNearbyOnly(false);
    setManualArea(null);

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

    if (permissionStatus === "denied") {
      info(
        "Vị trí bị chặn. Vui lòng bật lại trong cài đặt trình duyệt để sắp xếp.",
        5000,
      );
      return;
    }

    if (!userLocation) getLocation();
    setIsSortingByDistance(true);
  }, [isSortingByDistance, userLocation, getLocation, permissionStatus, info]);

  const handleApplyFilters = (filters: {
    types: string[];
    area: string | null;
  }) => {
    setActiveTypes(filters.types);
    setManualArea(filters.area);
    setShowNearbyOnly(!!filters.area);

    triggerSearch({
      types: filters.types,
      district: filters.area || undefined,
    });
  };

  // ─── Render Helpers ────────────────────────────────────────────────────────

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAFAFA]">
        <div className="relative">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          >
            <Loader2 className="h-12 w-12 text-primary" />
          </motion.div>
          <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl animate-pulse" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#1A1A1A] pb-32 font-sans selection:bg-primary/20">
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full" />
        <div className="absolute top-[20%] -left-[10%] w-[30%] h-[30%] bg-orange-200/20 blur-[100px] rounded-full" />
      </div>

      <PullToRefresh
        pullDistance={pullDistance}
        isRefreshing={isRefreshing}
        pullProgress={pullProgress}
      />

      <Header
        user={user}
        isFormOpen={isFormOpen}
        onToggleForm={() => setIsFormOpen(!isFormOpen)}
        onLogin={login}
        onLogout={logout}
        onOpenQuiz={() => setIsQuizOpen(true)}
      />

      <main className="container relative z-10 mx-auto max-w-2xl px-6 py-10">
        <HeroSection
          greeting={greeting}
          onSuggest={() => setIsSuggestionModalOpen(true)}
        />

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
                    Lưu giữ hương vị yêu thích của bạn
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsFormOpen(false)}
                  className="rounded-full hover:bg-gray-100 transition-all p-2"
                >
                  <ArrowLeft className="h-5 w-5 text-gray-500" />
                </Button>
              </div>

              <RestaurantForm
                onAdd={(data) => {
                  addRestaurant(data);
                  setIsFormOpen(false);
                  success(`Đã thêm quán "${data.name}" vào danh sách! 🎉`);
                }}
              />
            </div>
          </section>
        )}

        <ActionSection
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          apiLoading={apiLoading}
          geoLoading={geoLoading}
          totalCount={totalCount}
          activeTypes={activeTypes}
          isFilterOpen={isFilterOpen}
          isSortingByDistance={isSortingByDistance}
          onOpenNearby={() => setIsNearbyModalOpen(true)}
          onToggleDistanceSort={toggleDistanceSort}
          onToggleFilter={() => setIsFilterOpen(!isFilterOpen)}
        />

        {/* Restaurant List */}
        <section className="space-y-8">
          <div className="grid gap-6 sm:grid-cols-2">
            <AnimatePresence mode="popLayout">
              {apiLoading ? (
                Array.from({ length: 6 }).map((_, i) => (
                  <motion.div
                    key={`skeleton-${i}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2, delay: i * 0.05 }}
                  >
                    <RestaurantCardSkeleton />
                  </motion.div>
                ))
              ) : restaurants.length > 0 ? (
                restaurants.map((res, i) => (
                  <motion.div
                    key={res.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                  >
                    <RestaurantCard
                      restaurant={res}
                      onClick={() => setSelectedRestaurant(res)}
                    />
                  </motion.div>
                ))
              ) : (
                <EmptyState
                  user={user}
                  onLogin={login}
                  onAdd={() => setIsFormOpen(true)}
                />
              )}
            </AnimatePresence>
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => {
              goToPage(page, {
                type:
                  activeTypes.length > 0 ? activeTypes.join(",") : undefined,
                q: searchQuery || undefined,
                district: showNearbyOnly
                  ? (manualArea ?? undefined)
                  : undefined,
                lat: isSortingByDistance ? userLocation?.lat : undefined,
                lon: isSortingByDistance ? userLocation?.lon : undefined,
              });
            }}
            isLoading={apiLoading}
          />
        </section>
      </main>

      <BottomNavigation
        onHome={scrollToTop}
        onNearby={() => setIsNearbyModalOpen(true)}
        onSuggest={() => setIsSuggestionModalOpen(true)}
        onFilter={() => setIsFilterOpen(!isFilterOpen)}
        onAdd={() => setIsFormOpen(!isFormOpen)}
        isFilterActive={isFilterOpen}
        isFormOpen={isFormOpen}
        isNearbyActive={isNearbyModalOpen}
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

      {/* Modals */}
      <PersonalityQuiz
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        onComplete={(persona: FoodiePersona) => {
          updatePersona(persona);
          success("Đã lưu hồ sơ ẩm thực của bạn! ✨");
        }}
      />

      <SuggestionModal
        isOpen={isSuggestionModalOpen}
        onClose={() => setIsSuggestionModalOpen(false)}
        persona={profile?.persona}
        onSelectRestaurant={(r) => setSelectedRestaurant(r)}
      />

      <NearbyModal
        isOpen={isNearbyModalOpen}
        onClose={() => setIsNearbyModalOpen(false)}
        onSelectRestaurant={(r) => {
          setSelectedRestaurant(r);
        }}
      />

      <FilterModal
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        activeTypes={activeTypes}
        manualArea={manualArea}
        onApply={handleApplyFilters}
      />

      <RestaurantPocketView
        restaurant={selectedRestaurant}
        isOpen={!!selectedRestaurant}
        onClose={() => setSelectedRestaurant(null)}
      />

      <Footer />
    </div>
  );
}

export default App;
