import { useState, useEffect, useCallback } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import type { User } from "firebase/auth";
import type { FoodiePersona, UserProfile } from "@/types";

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
        setProfile(docSnap.data() as UserProfile);
      } else {
        const newProfile: UserProfile = {
          uid: user.uid,
          favoriteRestaurantIds: [],
        };
        setProfile(newProfile);
      }
    } catch (err) {
      console.error("Failed to fetch user profile:", err);
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  const updatePersona = async (persona: FoodiePersona) => {
    if (!user) return;

    try {
      const docRef = doc(db, "users", user.uid);
      const updatedProfile = {
        ...profile,
        uid: user.uid,
        persona: {
          ...persona,
          lastUpdated: Date.now(),
        },
      };

      await setDoc(docRef, updatedProfile, { merge: true });
      setProfile(updatedProfile as UserProfile);
      return true;
    } catch (err) {
      console.error("Failed to update persona:", err);
      return false;
    }
  };

  return {
    profile,
    loading,
    updatePersona,
    refreshProfile: fetchProfile,
  };
};
