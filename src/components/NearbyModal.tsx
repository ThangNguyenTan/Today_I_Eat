import { useState, useEffect, useRef, useCallback } from "react";
import { useGeolocation } from "@/hooks/useGeolocation";
import type { Restaurant } from "@/types";
import {
  MapPin,
  Navigation,
  X,
  ExternalLink,
  Loader2,
  AlertCircle,
  RefreshCw,
  Clock,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { getGoogleMapsUrl } from "@/lib/utils";

// ─── Helpers ─────────────────────────────────────────────────────────────────
function formatDistance(km: number): string {
  if (km < 1) return `${Math.round(km * 1000)} m`;
  return `${km.toFixed(1)} km`;
}

function getDistanceColor(km: number): string {
  if (km <= 1) return "text-emerald-600 bg-emerald-50 border-emerald-200";
  if (km <= 2.5) return "text-blue-600 bg-blue-50 border-blue-200";
  return "text-orange-600 bg-orange-50 border-orange-200";
}

const foodEmojis: Record<string, string> = {
  Phở: "🍜",
  "Bánh Mì": "🥖",
  "Gỏi Cuốn": "🥗",
  "Chả Giò": "🥓",
  "Nem Rán": "🥓",
  "Bún Chả": "🍜",
  "Bún Bò Huế": "🍜",
  "Cơm Tấm": "🍚",
  "Cao Lầu": "🍜",
  "Bánh Cuốn": "🍥",
  "Bánh Xèo": "🥞",
  "Bánh Khọt": "🥞",
  "Bún Đậu Mắm Tôm": "🥒",
  "Bánh Bao": "🥟",
  Xôi: "🍚",
  "Bún Riêu": "🍜",
  "Bò Kho": "🥘",
  "Nem Nướng": "🍢",
  "Bánh Tráng Nướng": "🍕",
  "Bánh Bèo": "🍥",
  "Bánh Canh": "🍜",
  "Bánh Mì Xíu Mại": "🥖",
  "Bún Thịt Nướng": "🍜",
  "Mì Quảng": "🍝",
  "Hủ Tiếu": "🍲",
  "Cơm Gà": "🍗",
  "Cơm Chiên": "🍚",
  "Bún Mắm": "🍜",
  "Cháo Lòng": "🥣",
  Ốc: "🐚",
  Lẩu: "🫕",
  "Trà Sữa": "🧋",
  "Cà Phê": "☕",
  Chè: "🍧",
};

function getEmoji(type: string): string {
  const lower = type.toLowerCase();
  const match = Object.entries(foodEmojis).find(([k]) => lower.includes(k));
  return match?.[1] ?? "🍽️";
}

// ─── Types ────────────────────────────────────────────────────────────────────
type Phase = "idle" | "locating" | "loading" | "done" | "error";

export interface NearbyRestaurant extends Restaurant {
  distanceKm: number;
}

interface NearbyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// ─── Component ────────────────────────────────────────────────────────────────
export const NearbyModal: React.FC<NearbyModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [phase, setPhase] = useState<Phase>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [nearby, setNearby] = useState<NearbyRestaurant[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const {
    latitude,
    longitude,
    loading: geoLoading,
    error: geoError,
    hasAttempted,
    getLocation,
  } = useGeolocation();

  const isCancelledRef = useRef(false);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const RADIUS_KM = 5;
  const LIMIT = 15;

  const runSearch = useCallback(
    async (lat: number, lon: number, pageNum = 1) => {
      isCancelledRef.current = false;
      if (pageNum === 1) {
        setPhase("loading");
        setNearby([]);
      } else {
        setIsLoadingMore(true);
      }

      try {
        const params = new URLSearchParams({
          lat: String(lat),
          lon: String(lon),
          radiusKm: String(RADIUS_KM),
          limit: String(LIMIT),
          page: String(pageNum),
        });
        const resp = await fetch(`/api/restaurants/nearby?${params}`);
        if (!resp.ok) throw new Error(`API error: ${resp.status}`);
        const data = await resp.json();

        if (!isCancelledRef.current) {
          if (pageNum === 1) {
            setNearby(data.restaurants as NearbyRestaurant[]);
          } else {
            setNearby((prev) => [
              ...prev,
              ...(data.restaurants as NearbyRestaurant[]),
            ]);
          }

          setHasMore(pageNum * LIMIT < data.total);
          setPage(pageNum);
          setPhase("done");
          setIsLoadingMore(false);
        }
      } catch (err) {
        if (!isCancelledRef.current) {
          setErrorMsg("Không thể tải dữ liệu từ máy chủ");
          setPhase("error");
          setIsLoadingMore(false);
        }
      }
    },
    [],
  );

  useEffect(() => {
    if (isOpen) {
      if (!hasAttempted && phase === "idle") {
        setPhase("locating");
        getLocation();
      } else if (latitude && longitude && phase === "locating") {
        runSearch(latitude, longitude);
      } else if (geoError && phase === "locating") {
        setPhase("error");
        setErrorMsg(geoError);
      }
    } else {
      isCancelledRef.current = true;
      setPhase("idle");
      setNearby([]);
      setPage(1);
      setHasMore(true);
    }
  }, [
    isOpen,
    hasAttempted,
    latitude,
    longitude,
    geoError,
    getLocation,
    runSearch,
    phase,
  ]);

  useEffect(() => {
    if (geoLoading) {
      setPhase("locating");
    }
  }, [geoLoading]);

  useEffect(() => {
    if (!hasMore || phase !== "done" || !latitude || !longitude) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoadingMore) {
          runSearch(latitude, longitude, page + 1);
        }
      },
      { threshold: 0.1, rootMargin: "100px" },
    );

    if (sentinelRef.current) observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, [hasMore, phase, latitude, longitude, isLoadingMore, runSearch, page]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      />

      {/* Modal sheet */}
      <div className="relative w-full sm:max-w-lg bg-white rounded-t-[2.5rem] sm:rounded-[2.5rem] shadow-2xl animate-in slide-in-from-bottom-8 sm:zoom-in-95 duration-400 flex flex-col max-h-[92dvh]">
        {/* Handle (mobile) */}
        <div className="flex justify-center pt-3 pb-1 sm:hidden">
          <div className="w-10 h-1 bg-gray-200 rounded-full" />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-4 pb-3 border-b border-gray-100 flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10">
              <Navigation className="h-5 w-5 text-emerald-600" />
            </div>
            <div>
              <h2 className="text-lg font-black tracking-tight">Gần Đây</h2>
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                Trong vòng {RADIUS_KM} km · Sắp xếp theo khoảng cách
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X className="h-5 w-5 text-gray-400" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto overscroll-contain px-4 pb-6">
          {/* Locating GPS */}
          {phase === "locating" && (
            <div className="py-20 flex flex-col items-center gap-5">
              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-emerald-50 flex items-center justify-center">
                  <Navigation className="h-11 w-11 text-emerald-500 animate-pulse" />
                </div>
                <div className="absolute inset-0 rounded-full border-4 border-emerald-300/50 animate-ping" />
              </div>
              <div className="text-center space-y-1">
                <p className="font-black text-gray-800 text-lg">
                  Đang xác định vị trí...
                </p>
                <p className="text-sm text-muted-foreground">
                  Vui lòng cho phép truy cập GPS
                </p>
              </div>
            </div>
          )}

          {/* Loading from API */}
          {phase === "loading" && (
            <div className="py-20 flex flex-col items-center gap-5">
              <div className="relative">
                <Loader2 className="h-14 w-14 text-emerald-500 animate-spin" />
                <div className="absolute inset-0 bg-emerald-500/10 rounded-full blur-xl animate-pulse" />
              </div>
              <div className="text-center space-y-1">
                <p className="font-black text-gray-800">
                  Đang tìm quán gần bạn...
                </p>
                <p className="text-sm text-muted-foreground">Chờ xíu nha ☕</p>
              </div>
            </div>
          )}

          {/* Done */}
          {phase === "done" && (
            <div className="pt-4 space-y-3">
              {nearby.length > 0 ? (
                <>
                  {/* Stats row */}
                  <div className="flex items-center justify-between px-1 mb-2">
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                      {nearby.length} quán trong {RADIUS_KM} km
                    </p>
                    {latitude && longitude && (
                      <a
                        href={`https://www.google.com/maps/search/restaurants/@${latitude},${longitude},15z`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-[10px] font-bold text-emerald-600 hover:underline"
                      >
                        <MapPin className="h-3 w-3" />
                        Mở bản đồ
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                  {nearby.map((r, idx) => (
                    <RestaurantRow key={r.id} restaurant={r} rank={idx + 1} />
                  ))}

                  {hasMore ? (
                    <div ref={sentinelRef} className="py-6 flex justify-center">
                      <Loader2 className="h-6 w-6 text-emerald-500 animate-spin" />
                    </div>
                  ) : (
                    <div className="pt-2 pb-4 text-center">
                      <button
                        onClick={getLocation}
                        className="text-[11px] font-bold text-muted-foreground hover:text-primary flex items-center gap-1 mx-auto"
                      >
                        <RefreshCw className="h-3 w-3" />
                        Tìm lại
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <EmptyNearby km={RADIUS_KM} onRetry={getLocation} />
              )}
            </div>
          )}

          {/* Error */}
          {phase === "error" && (
            <div className="py-16 flex flex-col items-center gap-5 text-center px-6">
              <div className="w-20 h-20 rounded-[1.5rem] bg-red-50 flex items-center justify-center">
                <AlertCircle className="h-10 w-10 text-red-400" />
              </div>
              <div className="space-y-1">
                <p className="font-black text-gray-800">Không thể định vị</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {errorMsg}
                </p>
              </div>
              <Button
                onClick={getLocation}
                className="rounded-xl px-8 font-black uppercase tracking-widest gap-2"
              >
                <RefreshCw className="h-4 w-4" />
                Thử lại
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// ─── RestaurantRow ────────────────────────────────────────────────────────────
export const RestaurantRow: React.FC<{
  restaurant: NearbyRestaurant;
  rank: number;
}> = ({ restaurant: r, rank }) => {
  const emoji = getEmoji(r.type);
  const distColor = getDistanceColor(r.distanceKm);
  const isOpen = r.isOpen ?? true;

  return (
    <div className="group flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-gray-100 hover:border-emerald-200 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
      {/* Rank number */}
      <div className="flex-shrink-0 w-7 h-7 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-[11px] font-black text-gray-400 mt-0.5">
        {rank}
      </div>

      {/* Thumbnail or emoji */}
      {r.thumbnailUrl ? (
        <img
          src={r.thumbnailUrl}
          alt={r.name}
          className="flex-shrink-0 w-12 h-12 rounded-2xl object-cover bg-gray-100 mt-0.5"
          loading="lazy"
        />
      ) : (
        <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/10 to-orange-500/10 flex items-center justify-center text-2xl mt-0.5">
          {emoji}
        </div>
      )}

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <p className="font-black text-sm text-gray-900 leading-tight line-clamp-1 group-hover:text-emerald-700 transition-colors duration-200">
              {r.name}
            </p>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                {r.type}
              </span>
              {/* Open/closed badge */}
              <span
                className={`text-[9px] font-black uppercase px-1.5 py-0.5 rounded-full ${
                  isOpen
                    ? "bg-emerald-50 text-emerald-600"
                    : "bg-gray-100 text-gray-400"
                }`}
              >
                {isOpen ? "Đang mở" : "Đóng cửa"}
              </span>
            </div>
          </div>
          {/* Distance badge */}
          <span
            className={`flex-shrink-0 text-[11px] font-black px-2 py-1 rounded-lg border ${distColor}`}
          >
            {formatDistance(r.distanceKm)}
          </span>
        </div>

        {/* Rating */}
        {r.rating && r.rating.avg > 0 && (
          <div className="flex items-center gap-1 mt-1">
            <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
            <span className="text-[11px] font-bold text-gray-600">
              {r.rating.avg.toFixed(1)}
            </span>
            <span className="text-[10px] text-muted-foreground">
              ({r.rating.displayTotalReview} đánh giá)
            </span>
          </div>
        )}

        {/* Address */}
        <div className="flex items-center gap-1.5 mt-1">
          <MapPin className="h-3 w-3 text-muted-foreground flex-shrink-0" />
          <p className="text-[11px] text-muted-foreground line-clamp-1 leading-tight">
            {r.location}
          </p>
        </div>

        {/* Meal times */}
        {r.mealTimes && r.mealTimes.length > 0 && (
          <div className="flex items-center gap-1.5 mt-0.5">
            <Clock className="h-3 w-3 text-muted-foreground flex-shrink-0" />
            <p className="text-[11px] text-muted-foreground">
              {r.mealTimes.join(" · ")}
            </p>
          </div>
        )}

        {/* Promotions */}
        {r.promotionGroups && r.promotionGroups.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-1.5">
            {r.promotionGroups.slice(0, 2).map((p, i) => (
              <span
                key={i}
                className="text-[9px] font-black px-2 py-0.5 rounded-full bg-orange-50 text-orange-600 border border-orange-100"
              >
                🏷️ {p.text}
              </span>
            ))}
          </div>
        )}

        {/* CTA link */}
        <a
          href={getGoogleMapsUrl(
            r.name,
            r.location,
            r.position?.latitude,
            r.position?.longitude,
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 mt-2 text-[11px] font-bold text-emerald-600 hover:underline"
          onClick={(e) => e.stopPropagation()}
        >
          <ExternalLink className="h-3 w-3" />
          Chỉ đường
        </a>
      </div>
    </div>
  );
};

// ─── Empty state ──────────────────────────────────────────────────────────────
const EmptyNearby: React.FC<{ km: number; onRetry: () => void }> = ({
  km,
  onRetry,
}) => (
  <div className="py-16 flex flex-col items-center gap-5 text-center px-6">
    <div className="text-5xl">🗺️</div>
    <div className="space-y-1">
      <p className="font-black text-gray-800">Không có quán nào gần đây</p>
      <p className="text-sm text-muted-foreground leading-relaxed">
        Hiện tại không có quán nào trong bán kính {km} km của bạn.
        <br />
        Thử mở rộng phạm vi hoặc khám phá toàn bộ danh sách nhé!
      </p>
    </div>
    <Button
      variant="outline"
      onClick={onRetry}
      className="rounded-xl px-8 font-black uppercase tracking-widest gap-2"
    >
      <RefreshCw className="h-4 w-4" />
      Thử lại
    </Button>
  </div>
);
