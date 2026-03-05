export type FoodType =
  | "Phở"
  | "Bún Bò Huế"
  | "Mì Quảng"
  | "Bún Riêu"
  | "Hủ Tiếu"
  | "Bánh Canh"
  | "Bún Mắm"
  | "Bún Cá"
  | "Mì Cay"
  | "Cơm Tấm"
  | "Cơm Gà"
  | "Cơm Chiên"
  | "Bún Chả"
  | "Bún Thịt Nướng"
  | "Bún Đậu"
  | "Cao Lầu"
  | "Mì Trộn"
  | "Bò Kho"
  | "Bò Né"
  | "Gỏi Cuốn"
  | "Chả Giò"
  | "Nem Rán"
  | "Nem Nướng"
  | "Bò Bía"
  | "Phở Cuốn"
  | "Xôi"
  | "Cháo Lòng"
  | "Bánh Mì"
  | "Bánh Mì Xíu Mại"
  | "Bánh Cuốn"
  | "Bánh Xèo"
  | "Bánh Khọt"
  | "Bánh Bao"
  | "Bánh Bèo"
  | "Bột Chiên"
  | "Há Cảo"
  | "Bánh Tráng Nướng"
  | "Bánh Tráng Trộn"
  | "Ốc"
  | "Phá Lấu"
  | "Bắp Xào"
  | "Chè"
  | "Lẩu"
  | "Đồ Nướng"
  | "Gà Rán"
  | "Pizza"
  | "Burger"
  | "Sushi"
  | "Dimsum";

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
  next_available_time?: string;
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

export interface UserProfile {
  uid: string;
  favoriteRestaurantIds: string[];
}

export type SortOption = "near" | "far" | "high_rating" | "low_rating";
