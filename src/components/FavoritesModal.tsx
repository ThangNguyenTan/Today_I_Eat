import { useState, useEffect } from "react";
import type { Restaurant } from "@/types";
import { ArrowLeft, Loader2, Heart } from "lucide-react";
import { useRestaurants } from "@/hooks/useRestaurants";
import { RestaurantCard } from "./RestaurantCard";

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
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [loading, setLoading] = useState(false);
  const { fetchRestaurantsByIds } = useRestaurants(null);

  useEffect(() => {
    if (isOpen) {
      if (favoriteIds.length > 0) {
        setLoading(true);
        fetchRestaurantsByIds(favoriteIds).then((data) => {
          setRestaurants(data);
          setLoading(false);
        });
      } else {
        setRestaurants([]);
      }
    }
  }, [isOpen, favoriteIds, fetchRestaurantsByIds]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      />

      {/* Modal sheet */}
      <div className="relative w-full sm:max-w-2xl bg-[#FAFAFA] rounded-t-[2.5rem] sm:rounded-[2.5rem] shadow-2xl animate-in slide-in-from-bottom-8 sm:zoom-in-95 duration-400 flex flex-col max-h-[92dvh]">
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
                Quán Ruột ({favoriteIds.length})
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
              <p className="font-bold text-gray-400">Đang tải danh sách...</p>
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
                  Chưa có quán yêu thích
                </p>
                <p className="text-sm text-muted-foreground">
                  Bạn chưa lưu quán nào. Hãy thả tim các quán ngon nha!
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
