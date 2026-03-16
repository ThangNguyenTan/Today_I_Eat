import { useState, useEffect } from "react";
import type { Restaurant } from "@/types";
import { ArrowLeft, Loader2, Heart } from "lucide-react";
import { useRestaurants } from "@/hooks/useRestaurants";
import { RestaurantCard } from "./RestaurantCard";
import { useTranslation } from "react-i18next";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";

interface FavoritesModalProps {
  isOpen: boolean;
  onClose: () => void;
  favoriteIds: string[];
  onSelectRestaurant?: (r: Restaurant) => void;
  onToggleFavorite: (id: string) => void;
}

export const FavoritesModal: React.FC<FavoritesModalProps> = ({
  isOpen,
  onClose,
  favoriteIds,
  onSelectRestaurant,
  onToggleFavorite,
}) => {
  const { t } = useTranslation();
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [loading, setLoading] = useState(false);
  const { fetchRestaurantsByIds } = useRestaurants(null);

  const [prevIsOpen, setPrevIsOpen] = useState(isOpen);

  if (prevIsOpen !== isOpen) {
    setPrevIsOpen(isOpen);
    if (isOpen) {
      setLoading(favoriteIds.length > 0);
      setRestaurants([]);
    }
  }

  useEffect(() => {
    if (isOpen && favoriteIds.length > 0) {
      fetchRestaurantsByIds(favoriteIds).then((data) => {
        setRestaurants(data);
        setLoading(false);
      });
    }
  }, [isOpen, favoriteIds, fetchRestaurantsByIds]);

  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="fixed left-[50%] top-[50%] z-50 w-[94vw] max-w-2xl translate-x-[-50%] translate-y-[-50%] border-0 p-0 overflow-hidden bg-[#FAFAFA] rounded-t-[2.5rem] sm:rounded-[2.5rem] shadow-2xl flex flex-col max-h-[92dvh] transition-all duration-300 [&>button]:hidden">
        <DialogTitle className="sr-only">
          {t("favorites.title")}
        </DialogTitle>
        <DialogDescription className="sr-only">
          {t("favorites.emptyDesc")}
        </DialogDescription>
        {/* Handle (mobile) */}
        <div className="flex justify-center pt-3 pb-1 sm:hidden">
          <div className="w-10 h-1 bg-gray-200 rounded-full" />
        </div>

        {/* Header */}
        <div className="flex flex-col border-b border-gray-100 flex-shrink-0 relative bg-white rounded-t-[2.5rem] pb-4">
          <div className="flex items-center justify-between px-6 pt-4 pb-1">
            <button
              onClick={onClose}
              className="p-2 -ml-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 text-gray-500" />
            </button>
            <div className="flex items-center gap-2 pointer-events-none mt-1">
              <div className="p-1.5 rounded-xl bg-red-50 text-red-500 shadow-sm">
                <Heart className="h-4 w-4 fill-current" />
              </div>
              <h2 className="text-lg font-black tracking-tight whitespace-nowrap">
                {t("favorites.title")} ({favoriteIds.length})
              </h2>
            </div>
            <div className="w-9" />
          </div>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto overscroll-contain px-4 sm:px-6 pb-6 pt-6">
          {loading ? (
            <div className="py-20 flex flex-col items-center gap-5">
              <Loader2 className="h-10 w-10 text-red-500 animate-spin" />
              <p className="font-bold text-gray-400">
                {t("favorites.loading")}
              </p>
            </div>
          ) : restaurants.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2">
              {restaurants.map((r) => (
                <div key={r.id}>
                  <RestaurantCard
                    restaurant={r}
                    onClick={() => {
                      onSelectRestaurant?.(r);
                      onClose(); // Auto close to view pocket
                    }}
                    isFavorite={favoriteIds.includes(r.id)}
                    onToggleFavorite={(e) => {
                      e.stopPropagation();
                      onToggleFavorite(r.id);
                    }}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="py-20 flex flex-col items-center gap-4 text-center">
              <div className="w-20 h-20 rounded-[2rem] bg-gray-100 flex items-center justify-center text-gray-300">
                <Heart className="h-10 w-10 stroke-[1.5]" />
              </div>
              <div className="space-y-1">
                <p className="font-black text-gray-800 text-lg">
                  {t("favorites.emptyTitle")}
                </p>
                <p className="text-sm text-muted-foreground">
                  {t("favorites.emptyDesc")}
                </p>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
