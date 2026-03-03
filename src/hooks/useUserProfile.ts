import { useState, useEffect, useCallback } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import type { User } from "firebase/auth";
import type { UserProfile } from "@/types";

export const useUserProfile = (user: User | null) => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchProfile = useCallback(async () => {
    if (!user) {
      setProfile(null);
      setLoading(false);
      return;
    }

    try {
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data() as UserProfile;
        // Merge with local storage if available to prevent loss
        const localFavs = localStorage.getItem(`favs_${user.uid}`);
        if (localFavs) {
          const parsed = JSON.parse(localFavs);
          const mergedFavs = Array.from(
            new Set([...(data.favoriteRestaurantIds || []), ...parsed]),
          );
          data.favoriteRestaurantIds = mergedFavs;
        }
        setProfile(data);
      } else {
        const localFavs = localStorage.getItem(`favs_${user.uid}`);
        const newProfile: UserProfile = {
          uid: user.uid,
          favoriteRestaurantIds: localFavs ? JSON.parse(localFavs) : [],
        };
        setProfile(newProfile);
      }
    } catch (err) {
      console.error("Failed to fetch user profile:", err);
      // Fallback so the app doesn't break
      const localFavs = localStorage.getItem(`favs_${user.uid}`);
      setProfile({
        uid: user.uid,
        favoriteRestaurantIds: localFavs ? JSON.parse(localFavs) : [],
      });
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  const toggleFavorite = async (restaurantId: string): Promise<boolean> => {
    if (!user) return false;

    const currentProfile = profile || {
      uid: user.uid,
      favoriteRestaurantIds: [],
    };
    const currentFavorites = currentProfile.favoriteRestaurantIds || [];
    const isFavorite = currentFavorites.includes(restaurantId);

    const newFavorites = isFavorite
      ? currentFavorites.filter((id) => id !== restaurantId)
      : [...currentFavorites, restaurantId];

    // Optimistic update
    setProfile({ ...currentProfile, favoriteRestaurantIds: newFavorites });
    localStorage.setItem(`favs_${user.uid}`, JSON.stringify(newFavorites));

    try {
      const docRef = doc(db, "users", user.uid);
      await setDoc(
        docRef,
        { favoriteRestaurantIds: newFavorites },
        { merge: true },
      );
      return true;
    } catch (err) {
      console.error("Failed to toggle favorite:", err);
      // Removed revert to keep session-local changes working
      return false;
    }
  };

  return {
    profile,
    loading,
    toggleFavorite,
    refreshProfile: fetchProfile,
  };
};
