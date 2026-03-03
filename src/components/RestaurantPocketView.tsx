import React from "react";
import { Dialog, DialogContent, DialogDescription } from "./ui/dialog";
import {
  MapPin,
  Clock,
  Star,
  Share2,
  Navigation,
  Utensils,
  Phone,
  Tag,
  ArrowLeft,
  MessageCircle,
  ChevronRight,
  Heart,
} from "lucide-react";
import { Button } from "./ui/button";
import type { Restaurant } from "@/types";
import { getGoogleMapsUrl, formatOperatingHours } from "@/lib/utils";
import { cn } from "@/lib/utils";
import { useToast } from "@/context/ToastContext";

interface RestaurantPocketViewProps {
  restaurant: Restaurant | null;
  isOpen: boolean;
  onClose: () => void;
  isFavorite?: boolean;
  onToggleFavorite?: () => void;
}

export const RestaurantPocketView: React.FC<RestaurantPocketViewProps> = ({
  restaurant: r,
  isOpen,
  onClose,
  isFavorite,
  onToggleFavorite,
}) => {
  if (!r) return null;

  const mapsUrl = getGoogleMapsUrl(
    r.name,
    r.location,
    r.position?.latitude,
    r.position?.longitude,
  );

  const isPermanentlyClosed =
    r.operating?.status === 2 && !r.operating?.next_available_time;

  const hours = formatOperatingHours(
    r.operating?.openTime,
    r.operating?.closeTime,
  );

  const { success } = useToast();

  const handleShare = async () => {
    // Generate a robust link back to the app with the restaurant name as a search query.
    // Ensure we handle trailing slashes and correctly encode the name.
    const baseUrl = window.location.origin + window.location.pathname;
    const appUrl = `${baseUrl.replace(/\/$/, "")}?q=${encodeURIComponent(r.name)}`;
    const shareText = `Khám phá quán ${r.name} trên Ăn Gì Đây! 🤤`;

    // Attempt native share if available
    if (navigator.share) {
      try {
        await navigator.share({
          title: r.name,
          text: shareText,
          url: appUrl,
        });
        return; // Success
      } catch (err: any) {
        if (err.name !== "AbortError") {
          console.error("Error sharing:", err);
        }
      }
    }

    // Fallback to clipboard
    try {
      await navigator.clipboard.writeText(`${shareText}\n${appUrl}`);
      success("Đã sao chép liên kết quán! ✨");
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="p-0 border-0 max-w-lg w-full h-[92dvh] sm:h-auto sm:max-h-[85dvh] overflow-hidden rounded-t-[3rem] sm:rounded-[3rem] bg-white gap-0">
        <DialogDescription className="sr-only">
          Chi tiết nhà hàng {r.name}
        </DialogDescription>

        {/* Top Action Bar (Floating) */}
        <div className="absolute top-0 left-0 right-0 z-[60] px-6 py-6 flex items-center justify-between pointer-events-none transition-all duration-300">
          <button
            onClick={onClose}
            className="p-3.5 rounded-[1.25rem] bg-white/80 hover:bg-white backdrop-blur-md border border-white/50 text-gray-900 shadow-xl pointer-events-auto transition-all active:scale-90 hover:scale-105"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-2 pointer-events-auto">
            {onToggleFavorite && (
              <button
                onClick={onToggleFavorite}
                className={cn(
                  "p-3.5 rounded-[1.25rem] backdrop-blur-md shadow-xl transition-all active:scale-90 hover:scale-105 border",
                  isFavorite
                    ? "bg-white text-red-500 border-white"
                    : "bg-white/80 hover:bg-white border-white/50 text-gray-900",
                )}
              >
                <Heart
                  className={cn("h-5 w-5", isFavorite && "fill-current")}
                />
              </button>
            )}
            <button
              onClick={handleShare}
              className="p-3.5 rounded-[1.25rem] bg-white/80 hover:bg-white backdrop-blur-md border border-white/50 text-gray-900 shadow-xl transition-all active:scale-90 hover:scale-105"
            >
              <Share2 className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto overscroll-contain pb-12">
          {/* Hero Section */}
          <div className="relative w-full h-80 flex-shrink-0">
            {(() => {
              let imageUrl = r.thumbnailUrl;

              if (r.photos && r.photos.length > 0) {
                const bestPhoto = r.photos.reduce((prev, current) => {
                  return current.width * current.height >
                    prev.width * prev.height
                    ? current
                    : prev;
                }, r.photos[0]);
                imageUrl = bestPhoto.value;
              }

              if (imageUrl) {
                return (
                  <img
                    src={imageUrl}
                    alt={r.name}
                    className="w-full h-full object-cover"
                  />
                );
              }

              return (
                <div className="w-full h-full bg-gradient-to-br from-primary/10 to-orange-500/10 flex items-center justify-center text-8xl">
                  🍽️
                </div>
              );
            })()}
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/30" />
          </div>

          {/* Content */}
          <div className="relative -mt-8 bg-white rounded-t-[3rem] px-8 pt-10 pb-6 space-y-8">
            {/* Header Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest border border-primary/10">
                  {r.type}
                </span>
                {r.cuisines?.map((c) => (
                  <span
                    key={c}
                    className="px-3 py-1 rounded-full bg-gray-50 text-gray-500 text-[10px] font-bold border border-gray-100 uppercase tracking-widest"
                  >
                    {c}
                  </span>
                ))}
              </div>
              <h1 className="text-3xl font-black text-gray-900 leading-tight">
                {r.name}
              </h1>

              {r.rating && r.rating.avg > 0 && (
                <div className="flex items-center gap-4">
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-black text-gray-900">
                      {r.rating.avg.toFixed(1)}
                    </span>
                    <span className="text-sm font-bold text-gray-400">/ 5</span>
                  </div>
                  <div className="flex items-center gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={cn(
                          "h-3.5 w-3.5 transition-colors",
                          star <= Math.round(r.rating!.avg)
                            ? "fill-amber-400 text-amber-400"
                            : "text-gray-200",
                        )}
                      />
                    ))}
                  </div>
                  <div className="h-4 w-[1px] bg-gray-100" />
                  <span className="text-sm font-bold text-muted-foreground">
                    {r.rating.displayTotalReview} đánh giá
                  </span>
                </div>
              )}
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-[2rem] bg-emerald-50/50 border border-emerald-100 flex flex-col gap-3">
                <div className="flex items-center gap-2 text-emerald-600">
                  <Clock className="h-4 w-4" />
                  <span className="text-[10px] font-black uppercase tracking-widest">
                    Giờ mở cửa
                  </span>
                </div>
                <p className="text-sm font-bold text-emerald-900 leading-tight">
                  {isPermanentlyClosed
                    ? "Đã đóng vĩnh viễn"
                    : hours || "Đang cập nhật"}
                </p>
              </div>
              <div className="p-4 rounded-[2rem] bg-orange-50/50 border border-orange-100 flex flex-col gap-3">
                <div className="flex items-center gap-2 text-orange-600">
                  <Tag className="h-4 w-4" />
                  <span className="text-[10px] font-black uppercase tracking-widest">
                    Ưu đãi
                  </span>
                </div>
                <p className="text-sm font-bold text-orange-900 leading-tight">
                  {r.promotionGroups?.[0]?.text || "Không có ưu đãi"}
                </p>
              </div>
            </div>

            {/* Location & Contact */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-gray-50 border border-gray-100 text-gray-400 flex-shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-bold text-gray-900 leading-relaxed">
                    {r.location}
                  </p>
                  <Button
                    variant="link"
                    className="h-auto p-0 text-primary font-bold text-xs gap-1"
                    onClick={() => window.open(mapsUrl, "_blank")}
                  >
                    Chỉ đường trên Google Maps
                    <ChevronRight className="h-3 w-3" />
                  </Button>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-gray-50 border border-gray-100 text-gray-400 flex-shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <p className="text-sm font-bold text-gray-900 leading-relaxed">
                  (028) 3823 8238
                </p>
              </div>

              {r.shopeeUrl && (
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-2xl bg-gray-50 border border-gray-100 text-gray-400 flex-shrink-0">
                    <Utensils className="h-5 w-5" />
                  </div>
                  <Button
                    variant="link"
                    className="h-auto p-0 text-orange-600 font-bold text-xs gap-1"
                    onClick={() => window.open(r.shopeeUrl!, "_blank")}
                  >
                    Đặt món trên ShopeeFood
                    <ChevronRight className="h-3 w-3" />
                  </Button>
                </div>
              )}
            </div>

            {/* Bottom Actions */}
            <div className="flex gap-3 pt-4">
              <Button
                onClick={() => window.open(mapsUrl, "_blank")}
                className="flex-1 h-16 rounded-3xl bg-primary hover:bg-orange-600 text-white font-black uppercase tracking-widest shadow-xl shadow-primary/20 gap-2"
              >
                <Navigation className="h-5 w-5" />
                Mở Bản Đồ
              </Button>
              <Button
                variant="outline"
                className="h-16 w-16 rounded-3xl border-2 border-gray-100 flex items-center justify-center text-primary active:scale-95 transition-all"
              >
                <MessageCircle className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
