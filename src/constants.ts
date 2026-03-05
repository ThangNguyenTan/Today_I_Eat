import type { FoodType, MealTime } from "./types";

export const FOOD_CATEGORIES: Record<string, FoodType[]> = {
  "Món Nước (Noodles & Soups)": [
    "Phở",
    "Bún Bò Huế",
    "Mì Quảng",
    "Bún Riêu",
    "Hủ Tiếu",
    "Bánh Canh",
    "Bún Mắm",
    "Bún Cá",
    "Mì Cay",
    "Cháo Lòng",
  ],
  "Cơm (Rice Dishes)": ["Cơm Tấm", "Cơm Gà", "Cơm Chiên"],
  "Món Khô (Dry Dishes)": [
    "Bún Chả",
    "Bún Thịt Nướng",
    "Bún Đậu",
    "Cao Lầu",
    "Mì Trộn",
    "Bò Kho",
    "Bò Né",
    "Xôi",
  ],
  "Món Cuốn (Rolls)": [
    "Gỏi Cuốn",
    "Chả Giò",
    "Nem Rán",
    "Nem Nướng",
    "Bò Bía",
    "Phở Cuốn",
  ],
  "Món Bánh (Savory Cakes & Bread)": [
    "Bánh Mì",
    "Bánh Mì Xíu Mại",
    "Bánh Cuốn",
    "Bánh Xèo",
    "Bánh Khọt",
    "Bánh Bao",
    "Bánh Bèo",
    "Bột Chiên",
    "Há Cảo",
  ],
  "Ăn Vặt (Snacks)": [
    "Bánh Tráng Nướng",
    "Bánh Tráng Trộn",
    "Ốc",
    "Phá Lấu",
    "Bắp Xào",
  ],
  "Tráng Miệng (Desserts)": ["Chè"],
  "Lẩu (Hotpot)": ["Lẩu"],
  "Đồ Nướng (BBQ)": ["Đồ Nướng"],
  "Món Ngoại (International)": ["Gà Rán", "Pizza", "Burger", "Sushi", "Dimsum"],
};

export const FOOD_TYPES: FoodType[] = [
  // Most Popular & Iconic
  "Phở",
  "Bánh Mì",
  "Cơm Tấm",
  "Bún Chả",
  "Bún Thịt Nướng",

  // Very Popular Everyday Eats
  "Hủ Tiếu",
  "Bún Bò Huế",
  "Bún Riêu",
  "Cơm Gà",
  "Xôi",
  "Chả Giò",
  "Bánh Bao",

  // Everyday Soups & Noodles
  "Bánh Canh",
  "Mì Quảng",
  "Bún Mắm",
  "Bún Cá",

  // Common Street & Snack Items
  "Gỏi Cuốn",
  "Bánh Xèo",
  "Bún Đậu",
  "Bánh Cuốn",
  "Bánh Bèo",
  "Bột Chiên",
  "Bánh Tráng Trộn",
  "Bánh Tráng Nướng",
  "Ốc",
  "Bắp Xào",

  // Other Well-Known Local Favorites
  "Bò Kho",
  "Bò Né",
  "Cao Lầu",
  "Bánh Mì Xíu Mại",
  "Phá Lấu",

  // Group Meal / Social Foods
  "Lẩu",
  "Đồ Nướng",

  // Desserts / Sweets
  "Chè",

  // Modern / International Favorites (less traditional but widely eaten especially in cities)
  "Gà Rán",
  "Burger",
  "Pizza",
  "Mì Cay",
  "Mì Trộn",
  "Há Cảo",
  "Dimsum",
  "Sushi",
];

export const MEAL_TIMES: MealTime[] = ["Sáng", "Trưa", "Chiều", "Tối", "Khuya"];

export const HCM_DISTRICTS = [
  "Quận 1",
  "Quận 3",
  "Quận 4",
  "Quận 5",
  "Quận 6",
  "Quận 7",
  "Quận 8",
  "Quận 10",
  "Quận 11",
  "Quận 12",
  "Bình Thạnh",
  "Gò Vấp",
  "Phú Nhuận",
  "Tân Bình",
  "Tân Phú",
  "Bình Tân",
  "Thủ Đức",
  "Hóc Môn",
  "Củ Chi",
  "Nhà Bè",
  "Bình Chánh",
  "Cần Giờ",
];

export const DEFAULT_LOCATION = {
  latitude: 10.7769,
  longitude: 106.7009,
  area: "Quận 1",
};

export const SORT_OPTIONS = [
  { value: "near", label: "Gần nhất" },
  { value: "far", label: "Xa nhất" },
  { value: "high_rating", label: "Đánh giá cao" },
  { value: "low_rating", label: "Đánh giá thấp" },
] as const;
