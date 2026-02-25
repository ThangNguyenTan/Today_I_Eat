import type { Restaurant } from "@/types";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import {
  MapPin,
  ExternalLink,
  Quote,
  Heart,
  Star,
  Clock,
  Tag,
} from "lucide-react";
import { getGoogleMapsUrl } from "@/lib/utils";

interface RestaurantCardProps {
  restaurant: Restaurant;
  onToggleFavorite?: () => void;
}

// Food emoji mapping for visual appeal
const foodEmojis: Record<string, string> = {
  phở: "🍜",
  bún: "🍜",
  cơm: "🍚",
  "bánh mì": "🥖",
  "hủ tiếu": "🍲",
  lẩu: "🫕",
  bbq: "🥩",
  "hải sản": "🦐",
  chay: "🥬",
  cafe: "☕",
  "trà sữa": "🧋",
  kem: "🍦",
  "ăn vặt": "🍿",
  "món hàn": "🍱",
  "món nhật": "🍣",
  "món thái": "🍛",
  "món hoa": "🥟",
  pizza: "🍕",
  burger: "🍔",
  "đồ nướng": "🥩",
  ốc: "🐚",
  mì: "🍝",
  chè: "🍧",
  "bánh cuốn": "🍥",
  "bún đậu": "🥒",
  "nước & cafe": "🥤",
  "bánh xèo": "🥞",
};

function getEmoji(type: string): string {
  const lower = type.toLowerCase();
  const match = Object.entries(foodEmojis).find(([k]) => lower.includes(k));
  return match?.[1] ?? "🍽️";
}

export const RestaurantCard: React.FC<RestaurantCardProps> = ({
  restaurant,
  onToggleFavorite,
}) => {
  const emoji = getEmoji(restaurant.type);
  const hasThumb = Boolean(restaurant.thumbnailUrl);
  const isOpen = restaurant.isOpen ?? true;
  const mapsUrl = getGoogleMapsUrl(
    restaurant.name,
    restaurant.location,
    restaurant.position?.latitude,
    restaurant.position?.longitude,
  );

  return (
    <Card className="group relative overflow-hidden border-0 bg-white shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 rounded-[2rem]">
      {/* Gradient border glow */}
      <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-primary/20 via-orange-500/20 to-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl scale-105" />

      {/* Thumbnail / hero image */}
      {hasThumb ? (
        <div className="relative w-full h-36 overflow-hidden rounded-t-[2rem]">
          <img
            src={restaurant.thumbnailUrl!}
            alt={restaurant.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

          {/* Open / closed pill */}
          <div
            className={`absolute top-3 left-3 text-[9px] font-black uppercase px-2 py-1 rounded-full backdrop-blur-sm ${
              isOpen
                ? "bg-emerald-500/90 text-white"
                : "bg-gray-600/80 text-gray-200"
            }`}
          >
            {isOpen ? "● Đang mở" : "● Đóng cửa"}
          </div>

          {/* Favorite button overlaid on image */}
          {onToggleFavorite && (
            <button
              onClick={(e) => {
                e.preventDefault();
                onToggleFavorite();
              }}
              className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-125 active:scale-90 ${
                restaurant.isFavorite
                  ? "bg-gradient-to-br from-red-500 to-pink-500 text-white shadow-lg shadow-red-500/30"
                  : "bg-white/70 text-gray-500 hover:text-red-500"
              }`}
            >
              <Heart
                className={`h-4 w-4 ${restaurant.isFavorite ? "fill-current" : ""}`}
              />
              {restaurant.isFavorite && (
                <div className="absolute inset-0 rounded-full bg-red-500/20 animate-ping" />
              )}
            </button>
          )}
        </div>
      ) : null}

      <CardHeader
        className={`relative flex flex-col items-start space-y-3 p-6 ${hasThumb ? "pb-2 pt-4" : "pb-2"}`}
      >
        <div className="flex w-full items-center justify-between">
          {/* Type Badge */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-primary/10 to-orange-500/10 border border-primary/10">
            <span className="text-base">{emoji}</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
              {restaurant.type}
            </span>
          </div>

          {/* Favorite button (no thumbnail case) */}
          {!hasThumb && onToggleFavorite && (
            <button
              onClick={(e) => {
                e.preventDefault();
                onToggleFavorite();
              }}
              className={`relative p-2.5 rounded-full transition-all duration-300 hover:scale-125 active:scale-90 ${
                restaurant.isFavorite
                  ? "bg-gradient-to-br from-red-500 to-pink-500 text-white shadow-lg shadow-red-500/30"
                  : "hover:bg-gray-100 text-gray-300 hover:text-gray-400"
              }`}
            >
              <Heart
                className={`h-4 w-4 transition-transform ${restaurant.isFavorite ? "fill-current scale-110" : ""}`}
              />
              {restaurant.isFavorite && (
                <div className="absolute inset-0 rounded-full bg-red-500/20 animate-ping" />
              )}
            </button>
          )}

          {/* Open badge (no thumbnail) */}
          {!hasThumb && (
            <span
              className={`text-[9px] font-black uppercase px-2 py-1 rounded-full ${
                isOpen
                  ? "bg-emerald-50 text-emerald-600"
                  : "bg-gray-100 text-gray-400"
              }`}
            >
              {isOpen ? "● Đang mở" : "● Đóng"}
            </span>
          )}
        </div>

        <CardTitle className="text-xl font-black tracking-tight text-[#1A1A1A] group-hover:text-primary transition-colors duration-300 line-clamp-1">
          {restaurant.name}
        </CardTitle>

        {/* Rating row */}
        {restaurant.rating && restaurant.rating.avg > 0 ? (
          <div className="flex items-center gap-1.5">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`h-3 w-3 transition-all duration-300 ${
                  star <= Math.round(restaurant.rating!.avg)
                    ? "fill-amber-400 text-amber-400"
                    : "text-gray-200"
                }`}
              />
            ))}
            <span className="text-[11px] font-bold text-gray-600 ml-0.5">
              {restaurant.rating.avg.toFixed(1)}
            </span>
            <span className="text-[10px] text-muted-foreground">
              ({restaurant.rating.displayTotalReview})
            </span>
          </div>
        ) : (
          /* Placeholder stars on hover for restaurants without ratings */
          <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-2 group-hover:translate-y-0">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`h-3 w-3 transition-all duration-300 ${star <= 4 ? "fill-amber-400 text-amber-400" : "text-gray-200"}`}
                style={{ transitionDelay: `${star * 50}ms` }}
              />
            ))}
          </div>
        )}
      </CardHeader>

      <CardContent className="p-6 pt-2 space-y-3">
        {/* Location */}
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

        {/* Meal times */}
        {restaurant.mealTimes && restaurant.mealTimes.length > 0 && (
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Clock className="h-3.5 w-3.5 flex-shrink-0" />
            <span>{restaurant.mealTimes.join(" · ")}</span>
          </div>
        )}

        {/* Promotions */}
        {restaurant.promotionGroups &&
          restaurant.promotionGroups.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {restaurant.promotionGroups.slice(0, 3).map((p, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1 text-[10px] font-black px-2.5 py-1 rounded-full bg-orange-50 text-orange-600 border border-orange-100"
                >
                  <Tag className="h-2.5 w-2.5" />
                  {p.text}
                </span>
              ))}
            </div>
          )}

        {/* Notes */}
        {restaurant.notes && (
          <div className="relative p-4 rounded-2xl bg-gradient-to-br from-[#FAFAFA] to-gray-50/50 border border-gray-100/50 overflow-hidden group/note">
            <Quote className="absolute -top-1 -left-1 h-6 w-6 text-primary/10 rotate-180 group-hover/note:text-primary/20 transition-all duration-300" />
            <p className="text-xs font-medium italic text-muted-foreground/90 leading-relaxed pl-3">
              "{restaurant.notes}"
            </p>
          </div>
        )}

        {/* Maps CTA */}
        <div className="pt-1">
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gray-50 text-xs font-bold text-gray-600 overflow-hidden group/btn hover:text-white transition-colors duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-orange-500 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
            <span className="relative z-10 flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5" />
              Xem trên bản đồ
              <ExternalLink className="h-3 w-3 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
            </span>
          </a>
        </div>
      </CardContent>
    </Card>
  );
};
