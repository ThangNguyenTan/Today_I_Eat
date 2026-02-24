export type FoodType =
  | "Phở"
  | "Bún"
  | "Cơm"
  | "Lẩu"
  | "Đồ chay"
  | "Bánh mì"
  | "Ăn vặt"
  | "Bánh cuốn"
  | "Bún đậu"
  | "Hải sản"
  | "Ốc"
  | "Mì"
  | "Hủ tiếu"
  | "Đồ nướng"
  | "Nước & Cafe"
  | "Chè"
  | "Bánh xèo"
  | "Khác";

export type MealTime = "Sáng" | "Trưa" | "Chiều" | "Tối" | "Khuya";

// ─── Rich data from MongoDB ────────────────────────────────────────────────────

export interface RestaurantRating {
  totalReview: number;
  avg: number;
  displayTotalReview: string;
  appLink?: string;
}

export interface RestaurantPhoto {
  width: number;
  height: number;
  value: string; // URL
}

export interface RestaurantPosition {
  latitude: number;
  longitude: number;
  isVerified?: boolean;
}

export interface OperatingInfo {
  status: number;
  color?: string;
  openTime: string; // "HH:MM:SS"
  closeTime: string; // "HH:MM:SS"
}

export interface PromotionGroup {
  group: number;
  text: string;
  icon?: string;
  discountType?: number;
  id?: number;
}

// ─── Core restaurant (matches backend transformRestaurant output) ──────────────

export interface Restaurant {
  // Core fields (used throughout the app)
  id: string;
  name: string;
  type: FoodType | string;
  location: string; // maps to MongoDB `address`
  googleMapsUrl?: string; // derived from position or shopeeUrl
  notes?: string | null;
  mealTimes?: MealTime[];
  isFavorite?: boolean;
  createdAt: number;

  // Rich fields from MongoDB
  rating?: RestaurantRating | null;
  position?: RestaurantPosition | null;
  photos?: RestaurantPhoto[];
  thumbnailUrl?: string | null;
  logoUrl?: string | null;
  cuisines?: string[];
  categories?: string[];
  isOpen?: boolean;
  operating?: OperatingInfo | null;
  promotionGroups?: PromotionGroup[];
  keyword?: string;
  shopeeUrl?: string | null;
  restaurantId?: number | null;

  // Added by NearbyModal
  distanceKm?: number;
}

export interface Suggestion {
  mealType: string;
  restaurant: Restaurant;
}

// ─── API response shapes ───────────────────────────────────────────────────────

export interface RestaurantsApiResponse {
  restaurants: Restaurant[];
  total: number;
  page: number;
  limit: number;
}

export interface NearbyApiResponse {
  restaurants: Restaurant[];
  total: number;
}
