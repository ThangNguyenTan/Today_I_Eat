import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import type { Restaurant } from "@/types";
import { Button } from "./ui/button";
import {
  Sparkles,
  MapPin,
  Utensils,
  ExternalLink,
  RefreshCw,
  Heart,
  Loader2,
  RotateCw,
  PartyPopper,
  Navigation,
} from "lucide-react";
import { FOOD_TYPES } from "@/constants";

interface SuggestionModalProps {
  restaurant: Restaurant | null;
  isOpen: boolean;
  onClose: () => void;
  onShuffle: () => void;
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

export const SuggestionModal: React.FC<SuggestionModalProps> = ({
  restaurant,
  isOpen,
  onClose,
  onShuffle,
}) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [spinningType, setSpinningType] = useState<string>("");
  const [spinningName, setSpinningName] = useState<string>("");
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (isOpen && restaurant) {
      startSpinning();
    }
  }, [isOpen, restaurant?.id]);

  const startSpinning = () => {
    setIsSpinning(true);
    setShowConfetti(false);
    let count = 0;
    const maxCount = 25;
    const intervalTime = 60;

    const interval = setInterval(() => {
      setSpinningType(
        FOOD_TYPES[Math.floor(Math.random() * FOOD_TYPES.length)],
      );
      const placeholders = [
        "Đang chọn...",
        "Chờ tí nhé...",
        "Hôm nay ăn gì?",
        "Suỵt...",
        "Tèn tèn ten...",
        "Sắp xong rồi!",
      ];
      setSpinningName(
        placeholders[Math.floor(Math.random() * placeholders.length)],
      );

      count++;
      if (count >= maxCount) {
        clearInterval(interval);
        setIsSpinning(false);
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 2000);
      }
    }, intervalTime);
  };

  const handleShuffle = () => {
    onShuffle();
  };

  const confettiColors = [
    "#F97316",
    "#FB923C",
    "#FCD34D",
    "#34D399",
    "#60A5FA",
    "#A78BFA",
  ];

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
          {/* Animated background patterns */}
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

          {/* Confetti effect */}
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
              className={`text-3xl font-black tracking-tight text-white mb-2 transition-all duration-500 ${isSpinning ? "animate-pulse" : "animate-in zoom-in-95"}`}
            >
              {isSpinning ? "Đang quay..." : "🎉 Tìm thấy rồi!"}
            </DialogTitle>
            <p className="text-white/80 text-[11px] font-bold uppercase tracking-[0.25em]">
              {isSpinning ? "Chờ tí nhé ⏳" : "Gợi ý hoàn hảo cho bạn"}
            </p>
          </DialogHeader>

          {/* Food type reveal card */}
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
                {isSpinning ? spinningType : restaurant?.type || "Đang chọn..."}
                <span className="inline-block ml-2 animate-bounce">✨</span>
              </h2>
            </div>
          </div>
        </div>

        {/* Content section */}
        <div className="flex-1 overflow-y-auto no-scrollbar p-6 pb-8 space-y-6 bg-gradient-to-b from-white to-gray-50/50 relative">
          {isSpinning && (
            <div className="absolute inset-0 bg-white/90 backdrop-blur-sm z-10 flex flex-col items-center justify-center space-y-4">
              <div className="flex flex-col items-center text-center px-8">
                <div className="relative">
                  <Loader2 className="h-16 w-16 text-primary animate-spin" />
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" />
                </div>
                <h3 className="text-xl font-black text-gray-400 italic animate-pulse mt-6">
                  {spinningName}
                </h3>
              </div>
            </div>
          )}

          {restaurant ? (
            <>
              <div className="space-y-4">
                {/* Restaurant info card */}
                <div className="flex items-start gap-4 p-5 rounded-[1.75rem] bg-white border border-gray-100 shadow-lg shadow-black/5 hover:shadow-xl transition-shadow duration-300">
                  <div className="p-3 rounded-2xl bg-gradient-to-br from-primary to-orange-500 text-white shadow-lg shadow-primary/20 flex-none">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div className="space-y-1 flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-black text-xl text-[#1A1A1A] truncate">
                        {restaurant.name}
                      </h3>
                      {restaurant.isFavorite && (
                        <Heart className="h-5 w-5 fill-red-500 text-red-500 flex-none animate-pulse" />
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      {restaurant.location}
                    </p>
                  </div>
                </div>

                {/* Google Maps button */}
                {restaurant.googleMapsUrl && (
                  <a
                    href={restaurant.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-gradient-to-r from-[#1A1A1A] to-gray-800 text-sm font-bold text-white hover:from-primary hover:to-orange-500 transition-all duration-500 shadow-xl shadow-black/10 hover:shadow-primary/30 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <Navigation className="h-5 w-5 group-hover:animate-bounce" />
                    Dẫn đường trên Maps
                    <ExternalLink className="h-4 w-4 opacity-60 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                )}
              </div>

              {/* Action buttons */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <Button
                  onClick={handleShuffle}
                  disabled={isSpinning}
                  variant="outline"
                  className="h-14 rounded-2xl border-2 border-gray-100 text-sm font-bold hover:bg-gray-50 hover:border-gray-200 gap-2 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <RefreshCw
                    className={`h-4 w-4 ${isSpinning ? "animate-spin" : "group-hover:rotate-180 transition-transform duration-500"}`}
                  />
                  Thử lại
                </Button>
                <Button
                  onClick={onClose}
                  disabled={isSpinning}
                  className="h-14 rounded-2xl bg-gradient-to-r from-primary to-orange-500 hover:from-orange-500 hover:to-primary text-white text-sm font-black shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Đi thôi! 🚀
                </Button>
              </div>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
                <Utensils className="h-10 w-10 text-gray-300" />
              </div>
              <p className="text-muted-foreground font-medium">
                Có gì đó sai sai rồi...
              </p>
              <Button onClick={onClose} className="mt-6 w-full rounded-2xl">
                Đóng
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
