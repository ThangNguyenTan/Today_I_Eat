export type FoodType =
  | "Phở"
  | "Bánh Mì"
  | "Gỏi Cuốn"
  | "Chả Giò"
  | "Nem Rán"
  | "Bún Chả"
  | "Bún Bò Huế"
  | "Cơm Tấm"
  | "Cao Lầu"
  | "Bánh Cuốn"
  | "Bánh Xèo"
  | "Bánh Khọt"
  | "Bún Đậu Mắm Tôm"
  | "Bánh Bao"
  | "Xôi"
  | "Bún Riêu"
  | "Bò Kho"
  | "Nem Nướng"
  | "Bánh Tráng Nướng"
  | "Bánh Bèo"
  | "Bánh Canh"
  | "Bánh Mì Xíu Mại"
  | "Bún Thịt Nướng"
  | "Mì Quảng"
  | "Hủ Tiếu"
  | "Cơm Gà"
  | "Cơm Chiên"
  | "Bún Mắm"
  | "Cháo Lòng"
  | "Ốc"
  | "Lẩu"
  | "Chè";

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

// ─── User Profile & Personality ──────────────────────────────────────────────

export type TastePreference = "Spicy" | "Sweet" | "Salty" | "Sour" | "Umami";
export type AdventureLevel = "Conservative" | "Balanced" | "Adventurous";
export type BudgetPreference = "Budget" | "Mid-range" | "Splurge";

export interface FoodiePersona {
  adventureLevel: AdventureLevel;
  primaryTaste: TastePreference;
  budgetPreference: BudgetPreference;
  favoriteCuisines: string[];
  lastUpdated: number;
}

export interface UserProfile {
  uid: string;
  persona?: FoodiePersona;
  favoriteRestaurantIds: string[];
}

export type SortOption = "near" | "far" | "high_rating" | "low_rating";
