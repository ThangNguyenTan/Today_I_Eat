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

export interface Restaurant {
  id: string;
  name: string;
  type: FoodType | string;
  location: string;
  googleMapsUrl?: string;
  notes?: string;
  mealTimes?: MealTime[];
  isFavorite?: boolean;
  rating?: number;
  createdAt: number;
}

export interface Suggestion {
  mealType: string;
  restaurant: Restaurant;
}
