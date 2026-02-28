import type { Restaurant } from "@/types";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { MapPin, ExternalLink, Quote, Star, Tag, Clock } from "lucide-react";
import {
  getGoogleMapsUrl,
  formatOperatingHours,
  formatDistance,
  getEmoji,
  cn,
} from "@/lib/utils";
import { LazyImage } from "./ui/LazyImage";

interface RestaurantCardProps {
  restaurant: Restaurant;
  onClick?: () => void;
}

export const RestaurantCard: React.FC<RestaurantCardProps> = ({
  restaurant,
  onClick,
}) => {
  const emoji = getEmoji(restaurant.type);
  const hasThumb = Boolean(restaurant.thumbnailUrl);
  const mapsUrl = getGoogleMapsUrl(
    restaurant.name,
    restaurant.location,
    restaurant.position?.latitude,
    restaurant.position?.longitude,
  );

  const isPermanentlyClosed =
    restaurant.operating?.status === 2 &&
    !restaurant.operating?.next_available_time;

  const hours = formatOperatingHours(
    restaurant.operating?.openTime,
    restaurant.operating?.closeTime,
  );

  return (
    <Card
      onClick={onClick}
      className="group relative overflow-hidden border-0 bg-white shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 rounded-[2rem] cursor-pointer"
    >
      {/* Gradient border glow */}
      <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-primary/20 via-orange-500/20 to-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl scale-105" />

      {/* Thumbnail / hero image */}
      {hasThumb ? (
        <div className="relative w-full h-44 overflow-hidden rounded-t-[2rem]">
          <LazyImage
            src={restaurant.thumbnailUrl!}
            alt={restaurant.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            containerClassName="w-full h-full"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

          {/* Operating hours & Distance pill */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {isPermanentlyClosed ? (
              <div className="px-3 py-1.5 rounded-xl backdrop-blur-md bg-red-600/90 text-white text-[10px] font-black uppercase tracking-wider shadow-lg">
                ● Đã Đóng Vĩnh Viễn
              </div>
            ) : hours ? (
              <div
                className={cn(
                  "px-3 py-1.5 rounded-xl backdrop-blur-md bg-black/40 text-white text-[10px] font-black tracking-tight shadow-md border border-white/20 flex items-center gap-1.5",
                )}
              >
                <Clock className="h-3 w-3 opacity-80" />
                <span className="font-bold">{hours}</span>
              </div>
            ) : null}

            {restaurant.distanceKm !== undefined && (
              <div className="w-fit px-3 py-1.5 rounded-xl backdrop-blur-md bg-white/20 text-white text-[10px] font-black tracking-widest shadow-md border border-white/10 flex items-center gap-1.5 uppercase">
                <MapPin className="h-3 w-3" />
                {formatDistance(restaurant.distanceKm)}
              </div>
            )}
          </div>
        </div>
      ) : (
        /* Premium gradient placeholder for no-image restaurants */
        <div className="relative w-full h-32 overflow-hidden rounded-t-[2rem] bg-gradient-to-br from-orange-50 via-white to-amber-50 group-hover:from-orange-100 group-hover:to-amber-100 transition-colors duration-500">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-5xl group-hover:scale-125 group-hover:rotate-12 transition-transform duration-700 ease-out opacity-20 group-hover:opacity-40">
              {emoji}
            </div>
          </div>

          {/* Operating hours & Distance pill */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {isPermanentlyClosed ? (
              <div className="px-3 py-1.5 rounded-xl bg-red-600/90 text-white text-[10px] font-black uppercase tracking-wider shadow-lg">
                ● Đã Đóng Vĩnh Viễn
              </div>
            ) : hours ? (
              <div
                className={cn(
                  "px-3 py-1.5 rounded-xl bg-gray-800/80 text-white text-[10px] font-black tracking-tight shadow-md border border-white/10 flex items-center gap-1.5",
                )}
              >
                <Clock className="h-3 w-3 opacity-80" />
                <span className="font-bold">{hours}</span>
              </div>
            ) : null}

            {restaurant.distanceKm !== undefined && (
              <div className="w-fit px-3 py-1.5 rounded-xl bg-gray-100 text-gray-500 text-[10px] font-black tracking-widest shadow-sm border border-gray-200 flex items-center gap-1.5 uppercase">
                <MapPin className="h-3 w-3" />
                {formatDistance(restaurant.distanceKm)}
              </div>
            )}
          </div>

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(249,115,22,0.1),transparent)]" />
        </div>
      )}

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
