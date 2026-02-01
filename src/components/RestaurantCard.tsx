import type { Restaurant } from '@/types';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { MapPin, Utensils, ExternalLink, Quote, Heart } from 'lucide-react';

interface RestaurantCardProps {
  restaurant: Restaurant;
  onToggleFavorite?: () => void;
}

export const RestaurantCard: React.FC<RestaurantCardProps> = ({
  restaurant,
  onToggleFavorite,
}) => {
  return (
    <Card className="group overflow-hidden border-0 bg-white shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 rounded-[2rem]">
      <CardHeader className="relative flex flex-col items-start space-y-3 p-6 pb-2">
        <div className="flex w-full items-center justify-between">
          {/* Type Badge */}
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest">
            <Utensils className="h-3 w-3" />
            <span>{restaurant.type}</span>
          </div>

          {/* Favorite Toggle */}
          {onToggleFavorite && (
            <button
              onClick={(e) => {
                e.preventDefault();
                onToggleFavorite?.();
              }}
              className={`p-2 rounded-full transition-all duration-300 hover:scale-110 active:scale-95 ${
                restaurant.isFavorite 
                  ? 'bg-red-50 text-red-500' 
                  : 'hover:bg-gray-100 text-gray-300'
              }`}
            >
              <Heart className={`h-5 w-5 ${restaurant.isFavorite ? 'fill-current' : ''}`} />
            </button>
          )}
        </div>
        
        <CardTitle className="text-xl font-black tracking-tight text-[#1A1A1A] group-hover:text-primary transition-colors line-clamp-1">
          {restaurant.name}
        </CardTitle>

      </CardHeader>
      
      <CardContent className="p-6 pt-2 space-y-4">
        {/* Location Section */}
        <div className="flex items-start gap-2.5 text-sm">
          <div className="mt-0.5 p-1.5 rounded-lg bg-gray-50 text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" />
          </div>
          <span className="text-muted-foreground leading-tight line-clamp-2">
            {restaurant.location}
          </span>
        </div>

        {/* Notes Section with Subtle Quote Style */}
        {restaurant.notes && (
          <div className="relative p-4 rounded-2xl bg-[#FAFAFA] border border-gray-50">
            <Quote className="absolute -top-2 -left-1 h-4 w-4 text-primary/20 rotate-180" />
            <p className="text-xs font-medium italic text-muted-foreground/90 leading-relaxed">
              {restaurant.notes}
            </p>
          </div>
        )}

        {/* Action Link */}
        {restaurant.googleMapsUrl && (
          <div className="pt-2">
            <a 
              href={restaurant.googleMapsUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gray-50 text-xs font-bold text-gray-600 hover:bg-primary hover:text-white transition-all duration-300"
            >
              Xem trên bản đồ
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
