import { useState, useEffect, useRef, useCallback } from "react";
import { useRestaurants } from "@/hooks/useRestaurants";
import { useGeolocation } from "@/hooks/useGeolocation";
import { usePullToRefresh } from "@/hooks/usePullToRefresh";
import { useToast } from "@/context/ToastContext";
import { PullToRefresh } from "@/components/PullToRefresh";
import { RestaurantCard } from "@/components/RestaurantCard";
import { RestaurantCardSkeleton } from "@/components/RestaurantCardSkeleton";
import { SuggestionModal } from "@/components/SuggestionModal";
import { ChevronUp, Loader2 } from "lucide-react";
import { NearbyModal } from "@/components/NearbyModal";
import { Pagination } from "@/components/Pagination";
import { useAuth } from "@/context/AuthContext";
import { BottomNavigation } from "@/components/BottomNavigation";
import { FilterModal } from "@/components/FilterModal";
import { RestaurantPocketView } from "@/components/RestaurantPocketView";
import { FavoritesModal } from "@/components/FavoritesModal";
import { useUserProfile } from "@/hooks/useUserProfile";
import { motion, AnimatePresence } from "framer-motion";
import type { Restaurant, SortOption } from "@/types";

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
  const { profile, toggleFavorite } = useUserProfile(user);

  // API & Data
  const {
    restaurants,
    totalCount,
    loading: apiLoading,
    currentPage,
    totalPages,
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
  const [sortBy, setSortBy] = useState<SortOption | "">(
    () =>
      (new URLSearchParams(window.location.search).get(
        "sortBy",
      ) as SortOption) || "near",
  );
  const [selectedRestaurant, setSelectedRestaurant] =
    useState<Restaurant | null>(null);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);

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
          lat: userLocation?.lat,
          lon: userLocation?.lon,
          sortBy: sortBy || undefined,
        });
      }, 300);
    },
    [
      activeTypes,
      searchQuery,
      showNearbyOnly,
      manualArea,
      search,
      sortBy,
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
  }, [sortBy, userLocation]);

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

  const handleSortChange = useCallback(
    (value: SortOption | "") => {
      if ((value === "near" || value === "far") && !userLocation) {
        if (permissionStatus === "denied") {
          info(
            "Vị trí bị chặn. Vui lòng bật lại trong cài đặt trình duyệt để sắp xếp theo khoảng cách.",
            5000,
          );
          return;
        }
        getLocation();
      }
      setSortBy(value);
    },
    [userLocation, getLocation, permissionStatus, info],
  );

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
        onLogin={login}
        onLogout={logout}
        onOpenFavorites={() => setIsFavoritesOpen(true)}
      />

      <main className="container relative z-10 mx-auto max-w-2xl px-6 py-10">
        <HeroSection
          greeting={greeting}
          onSuggest={() => setIsSuggestionModalOpen(true)}
        />

        <ActionSection
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          apiLoading={apiLoading}
          geoLoading={geoLoading}
          totalCount={totalCount}
          activeTypes={activeTypes}
          isFilterOpen={isFilterOpen}
          sortBy={sortBy}
          onSortChange={handleSortChange}
          onOpenNearby={() => setIsNearbyModalOpen(true)}
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
                      isFavorite={profile?.favoriteRestaurantIds?.includes(
                        res.id,
                      )}
                      onToggleFavorite={async (e) => {
                        e.stopPropagation();
                        if (!user) {
                          login();
                          return;
                        }
                        await toggleFavorite(res.id);
                        if (profile?.favoriteRestaurantIds?.includes(res.id)) {
                          info("Đã bỏ lưu quán.");
                        } else {
                          success("Đã thả tim quán! ❤️");
                        }
                      }}
                    />
                  </motion.div>
                ))
              ) : (
                <EmptyState user={user} onLogin={login} />
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
                lat: userLocation?.lat,
                lon: userLocation?.lon,
                sortBy: sortBy || undefined,
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
        onLogin={user ? () => setIsFavoritesOpen(true) : login}
        isFilterActive={isFilterOpen}
        isNearbyActive={isNearbyModalOpen}
        user={user}
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

      <SuggestionModal
        isOpen={isSuggestionModalOpen}
        onClose={() => setIsSuggestionModalOpen(false)}
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
        isFavorite={
          selectedRestaurant
            ? profile?.favoriteRestaurantIds?.includes(selectedRestaurant.id)
            : false
        }
        onToggleFavorite={async () => {
          if (!user) {
            login();
            return;
          }
          if (selectedRestaurant) {
            await toggleFavorite(selectedRestaurant.id);
            if (
              profile?.favoriteRestaurantIds?.includes(selectedRestaurant.id)
            ) {
              info("Đã bỏ lưu quán.");
            } else {
              success("Đã thả tim quán! ❤️");
            }
          }
        }}
      />

      <FavoritesModal
        isOpen={isFavoritesOpen}
        onClose={() => setIsFavoritesOpen(false)}
        favoriteIds={profile?.favoriteRestaurantIds || []}
        onSelectRestaurant={(r) => setSelectedRestaurant(r)}
        onToggleFavorite={async (id) => {
          if (!user) return login();
          await toggleFavorite(id);
        }}
      />

      <Footer />
    </div>
  );
}

export default App;
