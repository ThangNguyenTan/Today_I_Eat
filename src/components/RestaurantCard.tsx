import type { Restaurant } from "@/types";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import {
  MapPin,
  Utensils,
  ExternalLink,
  Quote,
  Heart,
  Star,
  Clock,
} from "lucide-react";

interface RestaurantCardProps {
  restaurant: Restaurant;
  onToggleFavorite?: () => void;
}

// Food emoji mapping for visual appeal
const foodEmojis: Record<string, string> = {
  Phở: "🍜",
  Bún: "🍜",
  Cơm: "🍚",
  "Bánh mì": "🥖",
  "Hủ tiếu": "🍲",
  Lẩu: "🫕",
  BBQ: "🥩",
  "Hải sản": "🦐",
  Chay: "🥬",
  Cafe: "☕",
  "Trà sữa": "🧋",
  Kem: "🍦",
  "Ăn vặt": "🍿",
  "Món Hàn": "🍱",
  "Món Nhật": "🍣",
  "Món Thái": "🍛",
  "Món Hoa": "🥟",
  Pizza: "🍕",
  Burger: "🍔",
};

export const RestaurantCard: React.FC<RestaurantCardProps> = ({
  restaurant,
  onToggleFavorite,
}) => {
  const emoji =
    Object.entries(foodEmojis).find(([key]) =>
      restaurant.type.toLowerCase().includes(key.toLowerCase()),
    )?.[1] || "🍽️";

  return (
    <Card className="group relative overflow-hidden border-0 bg-white shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 rounded-[2rem]">
      {/* Gradient border effect on hover */}
      <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-primary/20 via-orange-500/20 to-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl scale-105" />

      {/* Animated corner decoration */}
      <div className="absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-br from-primary/10 to-orange-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-150" />

      <CardHeader className="relative flex flex-col items-start space-y-3 p-6 pb-2">
        <div className="flex w-full items-center justify-between">
          {/* Type Badge with Emoji */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-primary/10 to-orange-500/10 border border-primary/10">
            <span className="text-base">{emoji}</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
              {restaurant.type}
            </span>
          </div>

          {/* Favorite Toggle with Animation */}
          {onToggleFavorite && (
            <button
              onClick={(e) => {
                e.preventDefault();
                onToggleFavorite?.();
              }}
              className={`relative p-2.5 rounded-full transition-all duration-300 hover:scale-125 active:scale-90 ${
                restaurant.isFavorite
                  ? "bg-gradient-to-br from-red-500 to-pink-500 text-white shadow-lg shadow-red-500/30"
                  : "hover:bg-gray-100 text-gray-300 hover:text-gray-400"
              }`}
            >
              <Heart
                className={`h-4 w-4 transition-transform duration-300 ${restaurant.isFavorite ? "fill-current scale-110" : ""}`}
              />
              {restaurant.isFavorite && (
                <div className="absolute inset-0 rounded-full bg-red-500/20 animate-ping" />
              )}
            </button>
          )}
        </div>

        <CardTitle className="text-xl font-black tracking-tight text-[#1A1A1A] group-hover:text-primary transition-colors duration-300 line-clamp-1">
          {restaurant.name}
        </CardTitle>

        {/* Rating placeholder - adds visual interest */}
        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-2 group-hover:translate-y-0">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`h-3 w-3 transition-all duration-300 ${star <= 4 ? "fill-amber-400 text-amber-400" : "text-gray-200"}`}
              style={{ transitionDelay: `${star * 50}ms` }}
            />
          ))}
          <span className="text-[10px] font-bold text-muted-foreground ml-1">
            4.0
          </span>
        </div>
      </CardHeader>

      <CardContent className="p-6 pt-2 space-y-4">
        {/* Location Section with Icon Animation */}
        <div className="flex items-start gap-3 text-sm group/loc">
          <div className="mt-0.5 p-2 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 text-muted-foreground group-hover/loc:from-primary/10 group-hover/loc:to-orange-500/10 group-hover/loc:text-primary transition-all duration-300">
            <MapPin className="h-4 w-4" />
          </div>
          <div className="flex-1">
            <span className="text-muted-foreground leading-tight line-clamp-2 group-hover:text-gray-700 transition-colors">
              {restaurant.location}
            </span>
          </div>
        </div>

        {/* Notes Section with Animated Quote */}
        {restaurant.notes && (
          <div className="relative p-4 rounded-2xl bg-gradient-to-br from-[#FAFAFA] to-gray-50/50 border border-gray-100/50 overflow-hidden group/note">
            <Quote className="absolute -top-1 -left-1 h-6 w-6 text-primary/10 rotate-180 group-hover/note:text-primary/20 group-hover/note:scale-110 transition-all duration-300" />
            <p className="text-xs font-medium italic text-muted-foreground/90 leading-relaxed pl-3">
              "{restaurant.notes}"
            </p>
          </div>
        )}

        {/* Action Link with Slide Effect */}
        {restaurant.googleMapsUrl && (
          <div className="pt-2">
            <a
              href={restaurant.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gray-50 text-xs font-bold text-gray-600 overflow-hidden group/btn hover:text-white transition-colors duration-300"
            >
              {/* Sliding background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-orange-500 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
              <span className="relative z-10 flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5" />
                Xem trên bản đồ
                <ExternalLink className="h-3 w-3 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
              </span>
            </a>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
