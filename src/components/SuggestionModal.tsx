import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from './ui/dialog';
import type { Restaurant } from '@/types';
import { Button } from './ui/button';
import { Sparkles, MapPin, Utensils, ExternalLink, RefreshCw, Heart, Loader2, RotateCw } from 'lucide-react';
import { FOOD_TYPES } from '@/constants';

interface SuggestionModalProps {
  restaurant: Restaurant | null;
  isOpen: boolean;
  onClose: () => void;
  onShuffle: () => void;
}

export const SuggestionModal: React.FC<SuggestionModalProps> = ({
  restaurant,
  isOpen,
  onClose,
  onShuffle,
}) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [spinningType, setSpinningType] = useState<string>('');
  const [spinningName, setSpinningName] = useState<string>('');

  useEffect(() => {
    if (isOpen && restaurant) {
      startSpinning();
    }
  }, [isOpen, restaurant?.id]);

  const startSpinning = () => {
    setIsSpinning(true);
    let count = 0;
    const maxCount = 25; // Number of cycles
    const intervalTime = 60; // Base speed
    
    const interval = setInterval(() => {
      setSpinningType(FOOD_TYPES[Math.floor(Math.random() * FOOD_TYPES.length)]);
      // Just some random food-related words for the "name" spin
      const placeholders = ["Đang chọn...", "Chờ tí nhé...", "Hôm nay ăn gì?", "Suỵt...", "Tèn tèn ten...", "Sắp xong rồi!"];
      setSpinningName(placeholders[Math.floor(Math.random() * placeholders.length)]);
      
      count++;
      if (count >= maxCount) {
        clearInterval(interval);
        setIsSpinning(false);
      }
    }, intervalTime);
  };

  const handleShuffle = () => {
    onShuffle();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && !isSpinning && onClose()}>
      <DialogContent 
        aria-describedby={undefined}
        className="fixed left-[50%] top-[50%] z-50 w-[92vw] max-w-md translate-x-[-50%] translate-y-[-50%] border-0 p-0 overflow-hidden rounded-[2.5rem] sm:rounded-[3rem] shadow-2xl max-h-[92vh] flex flex-col"
      >
        <DialogDescription className="sr-only">
          Kết quả gợi ý món ăn dành cho bạn
        </DialogDescription>
        <div className="bg-gradient-to-br from-primary to-orange-500 p-6 pt-10 text-center text-white relative flex-none">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none overflow-hidden">
            <Sparkles className="absolute top-5 left-5 h-16 w-16" />
            <Utensils className="absolute bottom-5 right-5 h-16 w-16" />
          </div>
          
          <DialogHeader className="mb-4">
            <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-[1.5rem] bg-white/20 backdrop-blur-md shadow-inner">
              {isSpinning ? (
                <RotateCw className="h-8 w-8 text-white animate-spin" />
              ) : (
                <Sparkles className="h-8 w-8 text-white animate-pulse" />
              )}
            </div>
            <DialogTitle className="text-2xl font-black tracking-tight text-white mb-1">
              {isSpinning ? "Đang quay..." : "Tìm thấy rồi!"}
            </DialogTitle>
            <p className="text-white/80 text-[10px] font-medium uppercase tracking-[0.2em]">
              {isSpinning ? "Chờ tí nhé" : "Gợi ý cho bạn"}
            </p>
          </DialogHeader>

          <div className={`transition-all duration-300 transform ${isSpinning ? 'scale-105' : 'scale-100'}`}>
            <div className="bg-white/10 backdrop-blur-xl rounded-[2rem] p-4 border border-white/20 shadow-2xl relative overflow-hidden">
              {isSpinning && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-[shimmer_2s_infinite]" />
              )}
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/60">
                Hãy thử ngay món
              </span>
              <h2 className="mt-1 text-2xl font-black text-white leading-tight">
                {isSpinning ? spinningType : restaurant?.type || "Đang chọn..."}
              </h2>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto no-scrollbar p-6 pb-8 space-y-6 bg-white relative">
          {isSpinning && (
            <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-10 flex flex-col items-center justify-center space-y-4">
              <div className="flex flex-col items-center text-center px-8">
                <Loader2 className="h-12 w-12 text-primary animate-spin mb-4" />
                <h3 className="text-xl font-black text-gray-400 italic animate-pulse">
                  {spinningName}
                </h3>
              </div>
            </div>
          )}

          {restaurant ? (
            <>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 rounded-[1.5rem] bg-[#FAFAFA] border border-gray-100">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary flex-none">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="space-y-0.5 flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-black text-lg text-[#1A1A1A] truncate">{restaurant.name}</h3>
                      {restaurant.isFavorite && (
                        <Heart className="h-4 w-4 fill-red-500 text-red-500 flex-none" />
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground leading-tight line-clamp-2">
                      {restaurant.location}
                    </p>
                  </div>
                </div>

                {restaurant.googleMapsUrl && (
                  <a 
                    href={restaurant.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-[#1A1A1A] text-sm font-bold text-white hover:bg-primary transition-all duration-300 shadow-xl shadow-black/5"
                  >
                    Dẫn đường trên Maps
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Button 
                  onClick={handleShuffle} 
                  disabled={isSpinning}
                  variant="outline" 
                  className="h-12 rounded-xl border-gray-100 text-xs font-bold hover:bg-gray-50 gap-2"
                >
                  <RefreshCw className={`h-3 w-3 ${isSpinning ? 'animate-spin' : ''}`} />
                  Thử lại
                </Button>
                <Button 
                  onClick={onClose} 
                  disabled={isSpinning}
                  className="h-12 rounded-xl bg-orange-50 text-primary hover:bg-orange-100 border-0 text-xs font-bold"
                >
                  Đi thôi! 😋
                </Button>
              </div>
            </>
          ) : (
            <div className="text-center py-4">
              <p className="text-muted-foreground">Có gì đó sai sai rồi...</p>
              <Button onClick={onClose} className="mt-4 w-full rounded-2xl">
                Đóng
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
