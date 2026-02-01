import { useState, useEffect } from 'react';
import { doc, setDoc, collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import type { User } from 'firebase/auth';
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

// Helper to get a stable key for a restaurant (name + location)
const getRestaurantKey = (r: { name: string, location: string }) => {
  const name = r.name.trim();
  const location = r.location.trim();
  return btoa(unescape(encodeURIComponent(`${name}-${location}`))).replace(/[/+=]/g, '_');
};

export const useRestaurants = (user: User | null) => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [loading, setLoading] = useState(true);
  const [isSyncing, setIsSyncing] = useState(false);

  // Trigger loading state when user status changes (login/logout)
  useEffect(() => {
    setLoading(true);
  }, [user?.uid]);

  // Main Data Orchestrator: Handles initial load, logout reset, and cloud sync
  useEffect(() => {
    let isMounted = true;

    const orchestrateData = async () => {
      setLoading(true);
      
      // 1. Load Local State (Samples + Local Customs)
      const stored = localStorage.getItem(STORAGE_KEY);
      let localRestaurants: Restaurant[] = [];

      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          if (Array.isArray(parsed)) localRestaurants = parsed;
        } catch (e) {
          console.error('Failed to parse local restaurants', e);
        }
      }

      // Seed samples if not present
      const seededSample = SAMPLE_RESTAURANTS.map(r => ({
        ...r,
        id: crypto.randomUUID(),
        createdAt: Date.now()
      }));

      let currentList = [...localRestaurants];
      seededSample.forEach(sample => {
        const exists = currentList.some(r => r.name.trim() === sample.name.trim() && r.location.trim() === sample.location.trim());
        if (!exists) currentList.push(sample);
      });

      // Filter for HCMC (Simple cleanup)
      currentList = currentList.filter(res => {
        const isSample = SAMPLE_RESTAURANTS.some(s => s.name === res.name && s.location === res.location);
        if (isSample) return true;
        const loc = res.location.toUpperCase();
        return loc.includes("TP. HCM") || loc.includes("HỒ CHÍ MINH") || loc.includes("SÀI GÒN") ||
               /QUẬN\s+\d+/.test(loc) || /Q\.\d+/.test(loc) || loc.includes("BÌNH THẠNH") ||
               loc.includes("PHÚ NHUẬN") || loc.includes("GÒ VẤP") || loc.includes("TÂN BÌNH") ||
               loc.includes("TÂN PHÚ") || loc.includes("THỦ ĐỨC") || loc.includes("BÌNH TÂN");
      });

      // 2. If NOT logged in, we are done
      if (!user) {
        if (isMounted) {
          setRestaurants(currentList);
          setLoading(false);
        }
        return;
      }

      // 3. If Logged In, Sync with Cloud
      setIsSyncing(true);
      try {
        // Fetch Cloud Customs
        const customRef = collection(db, 'users', user.uid, 'custom_restaurants');
        const customSnap = await getDocs(customRef);
        const cloudCustom: Restaurant[] = [];
        customSnap.forEach((doc) => {
          cloudCustom.push({ ...doc.data() as Restaurant, id: doc.id });
        });

        // Fetch Cloud Preferences
        const prefRef = collection(db, 'users', user.uid, 'preferences');
        const prefSnap = await getDocs(prefRef);
        const cloudPrefs: Record<string, boolean> = {};
        prefSnap.forEach((doc) => {
          cloudPrefs[doc.id] = doc.data().isFavorite;
        });

        // Merge Strategy: Keep local samples, add cloud customs, apply cloud prefs
        const samplesOnly = currentList.filter(r => 
          SAMPLE_RESTAURANTS.some(s => s.name.trim() === r.name.trim() && s.location.trim() === r.location.trim())
        );

        let mergedList = [...samplesOnly];
        
        // Add cloud customs
        cloudCustom.forEach(cc => {
          const exists = mergedList.some(r => r.name.trim() === cc.name.trim() && r.location.trim() === cc.location.trim());
          if (!exists) mergedList.push(cc);
        });

        // Apply Preferences (Cloud is absolute truth for favorites)
        const finalSync = mergedList.map(res => {
          const key = getRestaurantKey(res);
          if (cloudPrefs[key] !== undefined) {
            return { ...res, isFavorite: cloudPrefs[key] };
          }
          return res;
        });

        if (isMounted) setRestaurants(finalSync);
      } catch (error) {
        console.error("Critical: Failed to sync with cloud database:", error);
      } finally {
        if (isMounted) {
          setIsSyncing(false);
          setLoading(false);
        }
      }
    };

    orchestrateData();

    return () => {
      isMounted = false;
    };
  }, [user?.uid]);

  const addRestaurant = async (restaurant: Omit<Restaurant, 'id' | 'createdAt'>) => {
    const newRestaurant: Restaurant = {
      ...restaurant,
      id: crypto.randomUUID(),
      createdAt: Date.now(),
    };

    // Update Local State
    setRestaurants((prev) => [newRestaurant, ...prev]);

    // Update Firestore if logged in
    if (user) {
      setIsSyncing(true);
      try {
        const key = getRestaurantKey(newRestaurant);
        await setDoc(doc(db, 'users', user.uid, 'custom_restaurants', key), newRestaurant);
      } catch (error) {
        console.error("Failed to add custom restaurant to cloud:", error);
      } finally {
        setIsSyncing(false);
      }
    }
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

  const toggleFavorite = async (id: string) => {
    const restaurant = restaurants.find(r => r.id === id);
    if (!restaurant) return;

    const newFavoriteStatus = !restaurant.isFavorite;

    // Update Local State
    setRestaurants(prev => prev.map(res => 
      res.id === id ? { ...res, isFavorite: newFavoriteStatus } : res
    ));

    // Update Firestore if logged in
    if (user) {
      setIsSyncing(true);
      try {
        const key = getRestaurantKey(restaurant);
        const favRef = doc(db, 'users', user.uid, 'preferences', key);
        await setDoc(favRef, { 
          name: restaurant.name,
          location: restaurant.location,
          isFavorite: newFavoriteStatus,
          updatedAt: Date.now()
        }, { merge: true });
      } catch (error) {
        console.error("Failed to sync favorite to cloud:", error);
      } finally {
        setIsSyncing(false);
      }
    }
  };

  return {
    restaurants,
    addRestaurant,
    getRandomRestaurant,
    toggleFavorite,
    loading,
    isSyncing
  };
};
