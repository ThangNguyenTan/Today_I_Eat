import { useState, useEffect, useCallback, useRef } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import type { User } from "firebase/auth";
import type { Restaurant, MealTime, RestaurantsApiResponse } from "@/types";

import { getRestaurantKey } from "@/lib/utils";

// ─── API base URL (proxied by Vite to http://localhost:3001) ─────────────────
const API_BASE = "/api";

// ─── Hook ─────────────────────────────────────────────────────────────────────
export const useRestaurants = (user: User | null) => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const ITEMS_PER_PAGE = 10;
  const abortControllerRef = useRef<AbortController | null>(null);

  // ─── Fetch a page from the API ──────────────────────────────────────────────
  const fetchPage = useCallback(
    async (
      page = 1,
      filters: {
        type?: string;
        q?: string;
        district?: string;
        lat?: number;
        lon?: number;
      } = {},
    ): Promise<RestaurantsApiResponse> => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
      abortControllerRef.current = new AbortController();

      const params = new URLSearchParams({
        page: String(page),
        limit: String(ITEMS_PER_PAGE),
      });
      if (filters.type && filters.type !== "Tất cả")
        params.set("type", filters.type);
      if (filters.q) params.set("q", filters.q);
      if (filters.district) params.set("district", filters.district);
      if (filters.lat !== undefined && filters.lon !== undefined) {
        params.set("lat", String(filters.lat));
        params.set("lon", String(filters.lon));
        params.set("radiusKm", "50"); // Large radius if sorting by distance
      }

      const resp = await fetch(`${API_BASE}/restaurants?${params}`, {
        signal: abortControllerRef.current.signal,
      });
      if (!resp.ok) throw new Error(`API error: ${resp.status}`);
      return resp.json();
    },
    [],
  );

  // Initial component mount
  useEffect(() => {
    setLoading(false);
  }, [user?.uid]);

  // ── Go to specific page ───────────────────────────────────────────────────
  const goToPage = useCallback(
    async (
      page: number,
      filters: {
        type?: string;
        q?: string;
        district?: string;
        lat?: number;
        lon?: number;
      } = {},
    ) => {
      setLoading(true);
      try {
        const data = await fetchPage(page, filters);
        setRestaurants(data.restaurants);
        setCurrentPage(page);
        setHasMore(page * ITEMS_PER_PAGE < data.total);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } catch (err) {
        if (err instanceof Error && err.name === "AbortError") return;
        console.error(`Failed to load page ${page}:`, err);
      } finally {
        setLoading(false);
      }
    },
    [fetchPage],
  );

  // ── Search / filter (resets to page 1) ───────────────────────────────────
  const search = useCallback(
    async (
      filters: {
        type?: string;
        q?: string;
        district?: string;
        lat?: number;
        lon?: number;
      } = {},
    ) => {
      setLoading(true);
      try {
        const data = await fetchPage(1, filters);
        setRestaurants(data.restaurants);
        setTotalCount(data.total);
        setCurrentPage(1);
        setHasMore(data.total > data.restaurants.length);
      } catch (err) {
        if (err instanceof Error && err.name === "AbortError") return;
        console.error("Search failed:", err);
      } finally {
        setLoading(false);
      }
    },
    [fetchPage],
  );

  // ── Add restaurant (user-generated, still stored in Firestore) ───────────
  const addRestaurant = async (
    restaurant: Omit<Restaurant, "id" | "createdAt">,
  ) => {
    const newRestaurant: Restaurant = {
      ...restaurant,
      id: crypto.randomUUID(),
      createdAt: Date.now(),
    };
    setRestaurants((prev) => [newRestaurant, ...prev]);

    if (user) {
      try {
        const key = getRestaurantKey(newRestaurant);
        await setDoc(
          doc(db, "users", user.uid, "custom_restaurants", key),
          newRestaurant,
        );
      } catch (error) {
        console.error("Failed to save custom restaurant to Firestore:", error);
      }
    }
  };

  // ── Random suggestion ─────────────────────────────────────────────────────
  const getRandomRestaurant = useCallback(
    async (mealTime?: MealTime): Promise<Restaurant | null> => {
      try {
        const params = new URLSearchParams();
        if (mealTime) params.set("mealTime", mealTime);
        const resp = await fetch(`${API_BASE}/restaurants/random?${params}`);
        if (!resp.ok) throw new Error("API error");
        return resp.json();
      } catch {
        // Fallback: pick from current loaded list
        const pool = (
          mealTime
            ? restaurants.filter((r) => r.mealTimes?.includes(mealTime))
            : restaurants
        ).filter((r) => r.isOpen !== false);
        const src =
          pool.length > 0
            ? pool
            : restaurants.filter((r) => r.isOpen !== false);
        if (src.length === 0) return null;
        return src[Math.floor(Math.random() * src.length)];
      }
    },
    [restaurants],
  );

  return {
    restaurants,
    totalCount,
    loading,
    hasMore,
    currentPage,
    totalPages: Math.ceil(totalCount / ITEMS_PER_PAGE),
    addRestaurant,
    getRandomRestaurant,
    goToPage,
    search,
  };
};
