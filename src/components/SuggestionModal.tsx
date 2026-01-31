import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import type { Restaurant } from '@/types';
import { Button } from './ui/button';
import { Sparkles, MapPin, Utensils, ExternalLink, RefreshCw, Star, Heart } from 'lucide-react';

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
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md border-0 p-0 overflow-hidden rounded-[3rem] gap-0">
        <div className="bg-gradient-to-br from-primary to-orange-500 p-8 pt-12 text-center text-white relative">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none overflow-hidden">
            <Sparkles className="absolute top-10 left-10 h-20 w-20" />
            <Utensils className="absolute bottom-10 right-10 h-20 w-20" />
          </div>
          
          <DialogHeader className="mb-6">
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-[2rem] bg-white/20 backdrop-blur-md shadow-inner">
              <Sparkles className="h-10 w-10 text-white animate-pulse" />
            </div>
            <DialogTitle className="text-3xl font-black tracking-tight text-white mb-2">
              Tìm thấy rồi!
            </DialogTitle>
            <p className="text-white/80 text-sm font-medium uppercase tracking-widest">
              Gợi ý dành riêng cho bạn
            </p>
          </DialogHeader>

          {restaurant && (
            <div className="bg-white/10 backdrop-blur-xl rounded-[2.5rem] p-6 border border-white/20 shadow-2xl">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">
                Hôm nay hãy thử
              </span>
              <h2 className="mt-1 text-4xl font-black text-white leading-tight">
                {restaurant.type}
              </h2>
            </div>
          )}
        </div>

        <div className="p-8 pb-10 space-y-8 bg-white">
          {restaurant ? (
            <>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-5 rounded-[2rem] bg-[#FAFAFA] border border-gray-100">
                  <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-black text-xl text-[#1A1A1A]">{restaurant.name}</h3>
                      {restaurant.isFavorite && (
                        <Heart className="h-5 w-5 fill-red-500 text-red-500" />
                      )}
                    </div>
                    {restaurant.rating && (
                      <div className="flex items-center gap-0.5 mb-1">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star 
                            key={s} 
                            className={`h-3 w-3 ${s <= (restaurant.rating || 0) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-200'}`} 
                          />
                        ))}
                      </div>
                    )}
                    <p className="text-sm text-muted-foreground leading-snug">
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
                  onClick={onShuffle} 
                  variant="outline" 
                  className="h-14 rounded-2xl border-gray-100 font-bold hover:bg-gray-50 gap-2"
                >
                  <RefreshCw className="h-4 w-4" />
                  Quay lại
                </Button>
                <Button 
                  onClick={onClose} 
                  className="h-14 rounded-2xl bg-orange-50 text-primary hover:bg-orange-100 border-0 font-bold"
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
