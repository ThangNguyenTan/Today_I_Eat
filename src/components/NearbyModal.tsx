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
import {
  getGoogleMapsUrl,
  formatOperatingHours,
  formatDistance,
  getEmoji,
  getDistanceColor,
} from "@/lib/utils";
import { LazyImage } from "./ui/LazyImage";

// ─── Types ────────────────────────────────────────────────────────────────────
type Phase = "idle" | "locating" | "loading" | "done" | "error";

export interface NearbyRestaurant extends Restaurant {
  distanceKm: number;
}

interface NearbyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectRestaurant?: (r: Restaurant) => void;
}

// ─── Component ────────────────────────────────────────────────────────────────
export const NearbyModal: React.FC<NearbyModalProps> = ({
  isOpen,
  onClose,
  onSelectRestaurant,
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
    permissionStatus,
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
      if (permissionStatus === "granted" && !hasAttempted && phase === "idle") {
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
    permissionStatus,
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
          {/* Permission Prompt */}
          {permissionStatus === "prompt" && phase === "idle" && (
            <div className="py-16 flex flex-col items-center gap-8 text-center px-6 animate-in fade-in zoom-in-95 duration-500">
              <div className="relative w-24 h-24 flex items-center justify-center">
                <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-2xl animate-pulse" />
                <div className="relative h-20 w-20 flex items-center justify-center rounded-[2rem] bg-gradient-to-br from-white to-emerald-50 shadow-2xl border-4 border-white">
                  <MapPin className="h-10 w-10 text-emerald-500" />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-black text-gray-900">
                  Tìm quán ngon gần bạn?
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Để hiển thị danh sách các quán ăn quanh đây, chúng tôi cần bạn
                  cấp quyền truy cập vị trí.
                </p>
              </div>
              <Button
                onClick={getLocation}
                className="w-full h-14 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-black uppercase tracking-widest shadow-xl shadow-emerald-500/20 hover:scale-[1.02] active:scale-95 transition-all"
              >
                Tiếp tục
              </Button>
            </div>
          )}

          {/* Blocked Permission */}
          {permissionStatus === "denied" && (
            <div className="py-8 flex flex-col items-center gap-4 text-center px-6 animate-in fade-in zoom-in-95 duration-500">
              <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center">
                <AlertCircle className="h-8 w-8 text-red-400" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-black text-gray-900">
                  Vị trí bị chặn
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Bạn đã từ chối quyền truy cập vị trí. Để tiếp tục, vui lòng
                  bật lại trong cài đặt trình duyệt.
                </p>
                <div className="mt-4 p-3.5 rounded-2xl bg-gray-50 border border-gray-100 text-left">
                  <p className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-2">
                    Cách mở lại nhanh:
                  </p>
                  <ol className="text-[11px] text-gray-600 space-y-1 ml-4 list-decimal leading-snug">
                    <li>Nhấn vào biểu tượng 🔒 hoặc ⚙️ ở thanh địa chỉ</li>
                    <li>Ở phần "Vị trí", chọn "Cho phép" (Allow)</li>
                    <li>Tải lại trang web</li>
                  </ol>
                </div>
              </div>
              <Button
                variant="outline"
                onClick={() => window.location.reload()}
                className="w-full h-12 rounded-xl font-black uppercase tracking-[0.1em] gap-2 text-[11px]"
              >
                <RefreshCw className="h-3.5 w-3.5" />
                Tải lại trang
              </Button>
            </div>
          )}

          {/* Locating GPS */}
          {phase === "locating" && permissionStatus !== "denied" && (
            <div className="py-20 flex flex-col items-center gap-10">
              <div className="relative w-24 h-24 flex items-center justify-center">
                <div className="radar-ring" style={{ animationDelay: "0s" }} />
                <div
                  className="radar-ring"
                  style={{ animationDelay: "0.5s" }}
                />
                <div className="radar-ring" style={{ animationDelay: "1s" }} />
                <div className="relative z-10 w-16 h-16 rounded-full bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/40">
                  <Navigation className="h-8 w-8 text-white animate-pulse" />
                </div>
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
                    <RestaurantRow
                      key={r.id}
                      restaurant={r}
                      rank={idx + 1}
                      onClick={() => onSelectRestaurant?.(r)}
                    />
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
                variant="luxury"
                onClick={getLocation}
                className="rounded-xl px-10 h-12 shadow-xl"
              >
                <RefreshCw className="mr-2 h-4 w-4" />
                Thử lại ngay
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
  onClick?: () => void;
}> = ({ restaurant: r, rank, onClick }) => {
  const emoji = getEmoji(r.type);
  const distColor = getDistanceColor(r.distanceKm);
  const isPermanentlyClosed =
    r.operating?.status === 2 && !r.operating?.next_available_time;

  const hours = formatOperatingHours(
    r.operating?.openTime,
    r.operating?.closeTime,
  );

  return (
    <div
      onClick={onClick}
      className="group flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-gray-100 hover:border-emerald-200 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
    >
      {/* Rank number */}
      <div className="flex-shrink-0 w-7 h-7 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-[11px] font-black text-gray-400 mt-0.5">
        {rank}
      </div>

      {/* Thumbnail or emoji */}
      {r.thumbnailUrl ? (
        <LazyImage
          src={r.thumbnailUrl}
          alt={r.name}
          className="flex-shrink-0 w-12 h-12 rounded-2xl object-cover bg-gray-100 mt-0.5"
          containerClassName="flex-shrink-0 w-12 h-12 rounded-2xl mt-0.5"
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
            <div className="flex items-center gap-1.5 mt-1">
              <span className="text-[10px] font-bold text-primary/70 uppercase tracking-widest bg-primary/5 px-2 py-0.5 rounded-md border border-primary/10">
                {r.type}
              </span>
            </div>
          </div>
          {/* Distance badge */}
          <span
            className={`flex-shrink-0 text-[11px] font-black px-2 py-1.5 rounded-xl border-2 self-start ${distColor} shadow-sm`}
          >
            {formatDistance(r.distanceKm)}
          </span>
        </div>

        {/* Operating hours area (moved to its own line for better spacing) */}
        {!isPermanentlyClosed && hours && (
          <div className="flex items-center gap-1.5 mt-2 text-muted-foreground/80">
            <div className="p-1 rounded-md bg-gray-50 border border-gray-100 italic">
              <Clock className="h-3 w-3" />
            </div>
            <span className="text-[11px] font-bold tracking-tight">
              {hours}
            </span>
          </div>
        )}

        {isPermanentlyClosed && (
          <div className="mt-2">
            <span className="inline-flex px-2 py-0.5 rounded-md bg-red-50 text-red-500 text-[9px] font-black uppercase tracking-wider border border-red-100">
              Đã đóng vĩnh viễn
            </span>
          </div>
        )}

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
