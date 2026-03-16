import React, { useState, useEffect, useCallback } from "react";
import { Coffee, MapPin, Star, Loader2, ChevronRight } from "lucide-react";
import { type NearbyRestaurant } from "./NearbyModal";
import { LazyImage } from "./ui/LazyImage";
import { useTranslation } from "react-i18next";
import { cn, getEmoji, getDistanceColor, formatDistance } from "@/lib/utils";
import { motion } from "framer-motion";

interface AfterMealSectionProps {
  lat?: number;
  lon?: number;
  restaurantName?: string;
  currentRestaurantType?: string;
  currentRestaurantId?: string;
  onSelectRestaurant?: (r: NearbyRestaurant) => void;
}

export const AfterMealSection: React.FC<AfterMealSectionProps> = ({
  lat,
  lon,
  restaurantName,
  currentRestaurantType,
  currentRestaurantId,
  onSelectRestaurant,
}) => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState<NearbyRestaurant[]>([]);

  const fetchNearbyCoffee = useCallback(async () => {
    if (!lat || !lon) return;
    setLoading(true);
    try {
      // Fetch both Coffee and Chè (Dessert)
      const params = new URLSearchParams({
        lat: String(lat),
        lon: String(lon),
        radiusKm: "2", // Smaller radius for after-meal walk/short drive
        limit: "10",
        type: "Cà Phê,Chè",
      });
      const resp = await fetch(`/api/restaurants/nearby?${params}`);
      if (!resp.ok) throw new Error("API error");
      const data = await resp.json();
      
      // Filter out current restaurant if it happens to be one
      const filtered = (data.restaurants as NearbyRestaurant[]).filter(
        (r) => r.id !== currentRestaurantId
      );
      setItems(filtered);
    } catch (err) {
      console.error("Failed to fetch after-meal suggestions:", err);
    } finally {
      setLoading(false);
    }
  }, [lat, lon, currentRestaurantId]);

  useEffect(() => {
    fetchNearbyCoffee();
  }, [fetchNearbyCoffee]);

  // Don't show if current restaurant is already a dessert/coffee place
  const isDessertPlace = currentRestaurantType === "Cà Phê" || currentRestaurantType === "Chè";
  if (isDessertPlace) return null;

  if (!loading && items.length === 0) return null;

  return (
    <div className="space-y-4 pt-4 border-t border-gray-100">
      <div className="flex items-center justify-between px-1">
        <div className="flex flex-col">
          <h3 className="text-sm font-black text-gray-900 flex items-center gap-2">
            <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-orange-100 text-orange-600">
              <Coffee className="h-4 w-4" />
            </span>
            {t("pocket.afterMealTitle", "Xong bữa rồi? Tráng miệng thôi!")}
          </h3>
          <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mt-1 ml-8">
            {t("pocket.afterMealSubtitle", { name: restaurantName || "đây" })}
          </p>
        </div>
      </div>

      <div className="flex overflow-x-auto no-scrollbar gap-4 px-1 pb-4 -mx-1 mask-linear-right">
        {loading ? (
          Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="flex-none w-48 h-32 rounded-3xl bg-gray-50 border border-gray-100 animate-pulse flex items-center justify-center"
            >
              <Loader2 className="h-5 w-5 text-gray-200 animate-spin" />
            </div>
          ))
        ) : (
          items.map((r, i) => (
            <motion.div
              key={r.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              onClick={() => onSelectRestaurant?.(r)}
              className="flex-none w-52 group relative bg-white rounded-[2.5rem] border border-gray-100 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer active:scale-95 flex flex-col"
            >
              {/* Image Section - Larger & Vertical */}
              <div className="relative h-36 w-full overflow-hidden">
                {r.thumbnailUrl ? (
                  <LazyImage
                    src={r.thumbnailUrl}
                    alt={r.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-orange-50 to-amber-100 flex items-center justify-center text-5xl">
                    {getEmoji(r.type)}
                  </div>
                )}
                
                {/* Distance Badge Overlaid */}
                <div className="absolute top-3 left-3">
                   <span className={cn(
                      "flex items-center gap-1 px-2.5 py-1 rounded-xl backdrop-blur-md bg-white/90 border border-white/20 shadow-lg text-[10px] font-black uppercase tracking-tight",
                      getDistanceColor(r.distanceKm)
                    )}>
                      <MapPin className="h-2.5 w-2.5" />
                      {formatDistance(r.distanceKm)}
                    </span>
                </div>

                {/* Rating Badge Overlaid */}
                {r.rating && r.rating.avg > 0 && (
                  <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-black/60 backdrop-blur-md px-2 py-1 rounded-lg border border-white/10">
                    <Star className="h-2.5 w-2.5 fill-amber-400 text-amber-400" />
                    <span className="text-[10px] font-black text-white">{r.rating.avg.toFixed(1)}</span>
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div className="p-4 flex flex-col flex-1">
                <div className="flex-1">
                  <h4 className="text-sm font-black text-gray-900 group-hover:text-primary transition-colors line-clamp-2 leading-tight mb-2">
                    {r.name}
                  </h4>
                  <p className="text-[10px] font-bold text-muted-foreground line-clamp-1 mb-4 flex items-center gap-1">
                    <span className="w-1 h-1 rounded-full bg-primary/40" />
                    {r.location}
                  </p>
                </div>
                
                <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-50">
                   <div className="flex items-center gap-1.5">
                      <span className="text-[9px] font-black text-primary/60 uppercase tracking-[0.2em]">
                        {r.type}
                      </span>
                   </div>
                   <div
                      className="p-2 rounded-xl bg-gray-50 text-gray-400 hover:bg-primary hover:text-white transition-all group-hover/btn:scale-110"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </div>
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
};
