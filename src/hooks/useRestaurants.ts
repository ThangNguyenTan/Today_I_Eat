import { useState, useEffect } from 'react';
import type { Restaurant, MealTime } from '@/types';
import { SAMPLE_RESTAURANTS } from '@/data/sampleRestaurants';

const STORAGE_KEY = 'today-i-eat-restaurants';

export const getCurrentMealTime = (): MealTime => {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 11) return "Sáng";
  if (hour >= 11 && hour < 15) return "Trưa";
  if (hour >= 15 && hour < 18) return "Chiều";
  if (hour >= 18 && hour < 22) return "Tối";
  return "Khuya";
};

export const useRestaurants = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    let initialData: Restaurant[] = [];

    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          initialData = parsed;
        }
      } catch (e) {
        console.error('Failed to parse restaurants', e);
      }
    }

    // Merge logic: Add sample restaurants that aren't already in the list (by name + location)
    const seededSample = SAMPLE_RESTAURANTS.map(r => ({
      ...r,
      id: crypto.randomUUID(),
      createdAt: Date.now()
    }));

    const merged = [...initialData];
    
    seededSample.forEach(sample => {
      const exists = merged.some(r => r.name === sample.name && r.location === sample.location);
      if (!exists) {
        merged.push(sample);
      }
    });

    // Filter logic: Only keep restaurants that are likely in Ho Chi Minh City
    // BUT: Always keep sample restaurants to ensure consistency between environments
    const hcmcMerged = merged.filter(res => {
      const isSample = SAMPLE_RESTAURANTS.some(s => s.name === res.name && s.location === res.location);
      if (isSample) return true;

      const loc = res.location.toUpperCase();
      return loc.includes("TP. HCM") || 
             loc.includes("HỒ CHÍ MINH") || 
             loc.includes("SÀI GÒN") || 
             loc.includes("SAIGON") ||
             /QUẬN\s+\d+/.test(loc) ||
             /Q\.\d+/.test(loc) ||
             loc.includes("BÌNH THẠNH") ||
             loc.includes("PHÚ NHUẬN") ||
             loc.includes("GÒ VẤP") ||
             loc.includes("TÂN BÌNH") ||
             loc.includes("TÂN PHÚ") ||
             loc.includes("THỦ ĐỨC") ||
             loc.includes("BÌNH TÂN");
    });

    console.log(`Loaded ${hcmcMerged.length} restaurants (${SAMPLE_RESTAURANTS.length} samples)`);

    // Final Migration/Cleanup for existing items
    const migrated = hcmcMerged.map(res => {
      const match = SAMPLE_RESTAURANTS.find(s => s.name === res.name && s.location === res.location);
      let updated = { ...res };
      
      // Update links if broken or missing
      if (match && (res.googleMapsUrl?.includes('maps.app.goo.gl') || !res.googleMapsUrl)) {
        updated.googleMapsUrl = match.googleMapsUrl;
      }
      
      // Add mealTimes if missing
      if (!updated.mealTimes && match) {
        updated.mealTimes = match.mealTimes;
      }
      
      return updated;
    });

    setRestaurants(migrated);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!loading) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(restaurants));
    }
  }, [restaurants, loading]);

  const addRestaurant = (restaurant: Omit<Restaurant, 'id' | 'createdAt'>) => {
    const newRestaurant: Restaurant = {
      ...restaurant,
      id: crypto.randomUUID(),
      createdAt: Date.now(),
    };
    setRestaurants((prev) => [newRestaurant, ...prev]);
  };

  const getRandomRestaurant = (mealTime?: MealTime) => {
    let pool = restaurants;
    if (mealTime) {
      pool = restaurants.filter(r => r.mealTimes?.includes(mealTime));
    }
    
    // If pool is empty, fall back to all restaurants
    if (pool.length === 0) pool = restaurants;
    if (pool.length === 0) return null;
    
    const randomIndex = Math.floor(Math.random() * pool.length);
    return pool[randomIndex];
  };

  const toggleFavorite = (id: string) => {
    setRestaurants(prev => prev.map(res => 
      res.id === id ? { ...res, isFavorite: !res.isFavorite } : res
    ));
  };

  const updateRating = (id: string, rating: number) => {
    setRestaurants(prev => prev.map(res => 
      res.id === id ? { ...res, rating } : res
    ));
  };

  return {
    restaurants,
    addRestaurant,
    getRandomRestaurant,
    toggleFavorite,
    updateRating,
    loading,
  };
};
