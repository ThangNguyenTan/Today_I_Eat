import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { Button } from "./ui/button";
import {
  Sparkles,
  Utensils,
  RefreshCw,
  Loader2,
  RotateCw,
  PartyPopper,
  AlertCircle,
  Navigation,
} from "lucide-react";
import { FOOD_TYPES } from "@/constants";
import { useGeolocation } from "@/hooks/useGeolocation";
import { RestaurantRow, type NearbyRestaurant } from "./NearbyModal";
import type { FoodiePersona } from "@/types";

interface SuggestionModalProps {
  isOpen: boolean;
  onClose: () => void;
  persona?: FoodiePersona;
}

// Confetti particle component
const ConfettiParticle = ({
  delay,
  color,
}: {
  delay: number;
  color: string;
}) => (
  <div
    className="absolute w-2 h-2 rounded-full animate-confetti"
    style={{
      backgroundColor: color,
      left: `${Math.random() * 100}%`,
      animationDelay: `${delay}ms`,
      animationDuration: `${1000 + Math.random() * 500}ms`,
    }}
  />
);

type Phase = "idle" | "spinning" | "locating" | "loading" | "done" | "error";

export const SuggestionModal: React.FC<SuggestionModalProps> = ({
  isOpen,
  onClose,
  persona,
}) => {
  const {
    latitude,
    longitude,
    hasAttempted,
    loading: geoLoading,
    error: geoError,
    getLocation,
  } = useGeolocation();

  const [phase, setPhase] = useState<Phase>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [nearby, setNearby] = useState<NearbyRestaurant[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const [spinningType, setSpinningType] = useState<string>("");

  const isCancelledRef = useRef(false);
  const spinTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const RADIUS_KM = 5;
  const LIMIT = 15;

  const runSearch = useCallback(
    async (lat: number, lon: number, type: string, pageNum = 1) => {
      console.log(`[SuggestionModal] runSearch: ${lat}, ${lon}, type: ${type}`);
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
          type,
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
          console.error("[SuggestionModal] runSearch error:", err);
          setErrorMsg("Không thể tải dữ liệu từ máy chủ");
          setPhase("error");
          setIsLoadingMore(false);
        }
      }
    },
    [],
  );

  const locateAndSearch = useCallback(() => {
    console.log("[SuggestionModal] locateAndSearch called");
    setPhase("locating");
    setNearby([]);
    setPage(1);
    setHasMore(true);
    setErrorMsg("");

    if (!hasAttempted && !geoLoading) {
      console.log("[SuggestionModal] Getting location...");
      getLocation();
    }
  }, [hasAttempted, geoLoading, getLocation]);

  // Handle geolocation updates during "locating" phase
  useEffect(() => {
    if (phase === "locating" && hasAttempted) {
      console.log("[SuggestionModal] Locating done, calling runSearch");
      if (latitude && longitude) {
        runSearch(latitude, longitude, spinningType, 1);
      } else if (geoError) {
        setPhase("error");
        setErrorMsg(geoError);
      }
    }
  }, [
    phase,
    hasAttempted,
    latitude,
    longitude,
    geoError,
    runSearch,
    spinningType,
  ]);

  const startSpinning = useCallback(() => {
    console.log("[SuggestionModal] startSpinning called");
    isCancelledRef.current = false;
    setPhase("spinning");
    setShowConfetti(false);

    if (spinTimeoutRef.current) {
      clearTimeout(spinTimeoutRef.current);
    }

    let count = 0;
    const maxCount = 16;

    // Use persona favorite cuisines if available, else use all
    const pool =
      persona?.favoriteCuisines && persona.favoriteCuisines.length > 0
        ? persona.favoriteCuisines
        : FOOD_TYPES;

    const spin = (delay: number) => {
      if (isCancelledRef.current) {
        console.log("[SuggestionModal] spin cancelled");
        return;
      }

      const randomType = pool[Math.floor(Math.random() * pool.length)];
      setSpinningType(randomType);

      count++;
      if (count >= maxCount) {
        console.log("[SuggestionModal] spin reached maxCount, resolving...");
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 2000);
        locateAndSearch();
      } else {
        const nextDelay = count < 8 ? delay : delay * 1.2;
        spinTimeoutRef.current = setTimeout(() => spin(nextDelay), nextDelay);
      }
    };

    spin(50);
  }, [locateAndSearch, persona]);

  useEffect(() => {
    if (isOpen) {
      startSpinning();
    } else {
      console.log("[SuggestionModal] closing, cleaning up");
      isCancelledRef.current = true;
      if (spinTimeoutRef.current) {
        clearTimeout(spinTimeoutRef.current);
        spinTimeoutRef.current = null;
      }
      setPhase("idle");
      setNearby([]);
      setPage(1);
      setHasMore(true);
      setSpinningType("");
      setShowConfetti(false);
    }
    return () => {
      isCancelledRef.current = true;
      if (spinTimeoutRef.current) {
        clearTimeout(spinTimeoutRef.current);
      }
    };
  }, [isOpen, startSpinning]);

  useEffect(() => {
    if (!hasMore || phase !== "done" || !latitude || !longitude) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoadingMore) {
          runSearch(latitude, longitude, spinningType, page + 1);
        }
      },
      { threshold: 0.1, rootMargin: "100px" },
    );

    if (sentinelRef.current) observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, [
    hasMore,
    phase,
    latitude,
    longitude,
    isLoadingMore,
    runSearch,
    page,
    spinningType,
  ]);

  const confettiColors = [
    "#F97316",
    "#FB923C",
    "#FCD34D",
    "#34D399",
    "#60A5FA",
    "#A78BFA",
  ];
  const isSpinning = phase === "spinning";

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => !open && !isSpinning && onClose()}
    >
      <DialogContent
        aria-describedby={undefined}
        className="fixed left-[50%] top-[50%] z-50 w-[92vw] max-w-md translate-x-[-50%] translate-y-[-50%] border-0 p-0 overflow-hidden rounded-[2.5rem] sm:rounded-[3rem] shadow-2xl max-h-[92vh] flex flex-col"
      >
        <DialogDescription className="sr-only">
          Kết quả gợi ý món ăn dành cho bạn
        </DialogDescription>

        {/* Header with gradient and animations */}
        <div className="bg-gradient-to-br from-primary via-orange-500 to-amber-500 p-6 pt-10 text-center text-white relative flex-none overflow-hidden">
          <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
            <div
              className="absolute top-4 left-4 w-20 h-20 border-4 border-white/30 rounded-full animate-ping"
              style={{ animationDuration: "3s" }}
            />
            <div
              className="absolute bottom-4 right-4 w-16 h-16 border-4 border-white/20 rounded-full animate-ping"
              style={{ animationDuration: "2.5s", animationDelay: "0.5s" }}
            />
            <Sparkles
              className="absolute top-6 right-8 h-12 w-12 animate-pulse"
              style={{ animationDuration: "2s" }}
            />
            <Utensils
              className="absolute bottom-6 left-8 h-10 w-10 animate-bounce"
              style={{ animationDuration: "2s" }}
            />
          </div>

          {showConfetti && (
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {confettiColors.flatMap((color, i) =>
                Array.from({ length: 5 }).map((_, j) => (
                  <ConfettiParticle
                    key={`${i}-${j}`}
                    delay={j * 100}
                    color={color}
                  />
                )),
              )}
            </div>
          )}

          <DialogHeader className="mb-4 relative z-10">
            <div
              className={`mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-[1.75rem] backdrop-blur-md shadow-2xl shadow-black/20 transition-all duration-500 ${isSpinning ? "bg-white/20 animate-pulse" : "bg-white/30"}`}
            >
              {isSpinning ? (
                <RotateCw className="h-10 w-10 text-white animate-spin" />
              ) : (
                <PartyPopper className="h-10 w-10 text-white animate-bounce" />
              )}
            </div>
            <DialogTitle
              className={`text-3xl font-black tracking-tight text-white mb-2 transition-all duration-500 ${isSpinning ? "" : "animate-in zoom-in-95"}`}
            >
              {isSpinning ? "Đang quay..." : "🎉 Tìm thấy rồi!"}
            </DialogTitle>
            <p className="text-white/80 text-[11px] font-bold uppercase tracking-[0.25em]">
              {isSpinning ? "Đang tìm món ngon..." : "Gợi ý hoàn hảo cho bạn"}
            </p>
          </DialogHeader>

          <div
            className={`transition-all duration-500 transform ${isSpinning ? "scale-95" : "scale-100"}`}
          >
            <div className="bg-white/15 backdrop-blur-xl rounded-[2rem] p-5 border border-white/30 shadow-2xl relative overflow-hidden">
              {isSpinning && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_1s_infinite]" />
              )}
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60 block mb-2">
                Hãy thử ngay món
              </span>
              <h2
                className={`text-3xl font-black text-white leading-tight transition-all duration-300 ${isSpinning ? "" : "animate-in slide-in-from-bottom-2"}`}
              >
                {spinningType || "Đang chọn..."}
              </h2>
            </div>
          </div>
        </div>

        {/* Content section */}
        {!isSpinning && (
          <div className="flex-1 overflow-y-auto no-scrollbar p-6 pb-8 space-y-6 bg-gradient-to-b from-white to-gray-50/50 relative min-h-[100px] animate-in fade-in zoom-in-95 duration-500">
            {phase === "locating" && (
              <div className="py-16 flex flex-col items-center gap-8">
                <div className="relative w-24 h-24 flex items-center justify-center">
                  <div
                    className="radar-ring"
                    style={{ animationDelay: "0s" }}
                  />
                  <div
                    className="radar-ring"
                    style={{ animationDelay: "0.5s" }}
                  />
                  <div
                    className="radar-ring"
                    style={{ animationDelay: "1s" }}
                  />
                  <div className="relative z-10 w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/40">
                    <Navigation className="h-8 w-8 text-white animate-pulse" />
                  </div>
                </div>
                <div className="text-center space-y-1">
                  <p className="font-black text-gray-800">
                    Đang tìm quán {spinningType} gần bạn...
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Vui lòng cho phép truy cập GPS
                  </p>
                </div>
              </div>
            )}

            {phase === "loading" && (
              <div className="py-12 flex flex-col items-center gap-5">
                <div className="relative">
                  <Loader2 className="h-12 w-12 text-primary animate-spin" />
                  <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl animate-pulse" />
                </div>
                <div className="text-center space-y-1">
                  <p className="font-black text-gray-800">
                    Đang tải danh sách quán...
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Chờ chút nhé 🍽️
                  </p>
                </div>
              </div>
            )}

            {phase === "done" && (
              <div className="space-y-3">
                {nearby.length > 0 ? (
                  <>
                    <div className="flex items-center justify-between px-1 mb-2">
                      <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                        Top quán {spinningType} quanh bạn
                      </p>
                    </div>
                    {nearby.map((r, idx) => (
                      <RestaurantRow key={r.id} restaurant={r} rank={idx + 1} />
                    ))}

                    {hasMore ? (
                      <div
                        ref={sentinelRef}
                        className="py-6 flex justify-center"
                      >
                        <Loader2 className="h-6 w-6 text-orange-500 animate-spin" />
                      </div>
                    ) : (
                      <div className="pt-2 pb-4 text-center">
                        <p className="text-[11px] font-bold text-gray-300 uppercase tracking-widest">
                          ✨ Đã hết danh sách ✨
                        </p>
                      </div>
                    )}

                    <div className="grid grid-cols-2 gap-3 pt-6 pb-2">
                      <Button
                        onClick={startSpinning}
                        className="h-14 rounded-2xl border-2 border-gray-100 bg-white text-gray-800 text-sm font-bold shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-300 hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2"
                      >
                        <RotateCw className="h-4 w-4" />
                        Tìm món khác
                      </Button>
                      <Button
                        onClick={onClose}
                        className="h-14 rounded-2xl bg-gradient-to-r from-primary to-orange-500 text-white text-sm font-black shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-1 active:scale-95"
                      >
                        Đóng
                      </Button>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
                      <Utensils className="h-10 w-10 text-gray-300" />
                    </div>
                    <p className="text-gray-800 font-bold mb-1">Rất tiếc...</p>
                    <p className="text-sm text-muted-foreground mb-6">
                      Không tìm thấy quán {spinningType} nào quanh vị trí của
                      bạn.
                    </p>
                    <Button
                      onClick={startSpinning}
                      variant="outline"
                      className="h-12 rounded-xl"
                    >
                      <RotateCw className="mr-2 h-4 w-4" /> Quán món khác
                    </Button>
                  </div>
                )}
              </div>
            )}

            {phase === "error" && (
              <div className="py-12 flex flex-col items-center gap-5 text-center px-6">
                <div className="w-16 h-16 rounded-[1.25rem] bg-red-50 flex items-center justify-center">
                  <AlertCircle className="h-8 w-8 text-red-400" />
                </div>
                <div className="space-y-1">
                  <p className="font-black text-gray-800">Đã xảy ra lỗi</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {errorMsg}
                  </p>
                </div>
                <Button onClick={locateAndSearch} className="mt-2 rounded-xl">
                  <RefreshCw className="mr-2 h-4 w-4" /> Thử lại
                </Button>
              </div>
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
