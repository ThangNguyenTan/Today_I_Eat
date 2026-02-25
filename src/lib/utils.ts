import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { MealTime } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getCurrentMealTime = (): MealTime => {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 11) return "Sáng";
  if (hour >= 11 && hour < 15) return "Trưa";
  if (hour >= 15 && hour < 18) return "Chiều";
  if (hour >= 18 && hour < 22) return "Tối";
  return "Khuya";
};

export const getRestaurantKey = (r: { name: string; location: string }) => {
  const name = r.name.trim();
  const location = r.location.trim();
  return btoa(unescape(encodeURIComponent(`${name}-${location}`))).replace(
    /[/+=]/g,
    "_",
  );
};

// Food emoji mapping for visual appeal
export const FOOD_EMOJIS: Record<string, string> = {
  // Common types
  phở: "🍜",
  bún: "🍜",
  cơm: "🍚",
  "bánh mì": "🥖",
  "hủ tiếu": "🍲",
  lẩu: "🫕",
  bbq: "🥩",
  "hải sản": "🦐",
  chay: "🥬",
  cafe: "☕",
  "cà phê": "☕",
  "trà sữa": "🧋",
  kem: "🍦",
  "ăn vặt": "🍿",
  "món hàn": "🍱",
  "món nhật": "🍣",
  "món thái": "🍛",
  "món hoa": "🥟",
  pizza: "🍕",
  burger: "🍔",
  "đồ nướng": "🥩",
  ốc: "🐚",
  mì: "🍝",
  chè: "🍧",
  "bánh cuốn": "🍥",
  "bún đậu": "🥒",
  "bún đậu mắm tôm": "🥒",
  "nước & cafe": "🥤",
  "bánh xèo": "🥞",
  "bánh khọt": "🥞",
  "gỏi cuốn": "🥗",
  "chả giò": "🥓",
  "nem rán": "🥓",
  "bún chả": "🍜",
  "bún bò huế": "🍜",
  "cơm tấm": "🍚",
  "cao lầu": "🍜",
  "bánh bao": " dumpling",
  xôi: "🍚",
  "bún riêu": "🍜",
  "bò kho": "🥘",
  "nem nướng": "🍢",
  "bánh tráng nướng": "🍕",
  "bánh bèo": "🍥",
  "bánh canh": "🍜",
  "bánh mì xíu mại": "🥖",
  "bún thịt nướng": "🍜",
  "mì quảng": "🍝",
  "cơm gà": "🍗",
  "cơm chiên": "🍚",
  "bún mắm": "🍜",
  "cháo lòng": "🥣",
};

export function getEmoji(type?: string): string {
  if (!type) return "🍽️";
  const lower = type.toLowerCase();
  // Try exact match first
  if (FOOD_EMOJIS[lower]) return FOOD_EMOJIS[lower];
  // Then try inclusion
  const match = Object.entries(FOOD_EMOJIS).find(([k]) => lower.includes(k));
  return match?.[1] ?? "🍽️";
}

export function getDistanceColor(km: number): string {
  if (km <= 1) return "text-emerald-600 bg-emerald-50 border-emerald-200";
  if (km <= 2.5) return "text-blue-600 bg-blue-50 border-blue-200";
  return "text-orange-600 bg-orange-50 border-orange-200";
}

export function getGoogleMapsUrl(
  name: string,
  address: string,
  lat?: number,
  lng?: number,
): string {
  const query = `${name} ${address}`.trim();
  const encodedQuery = encodeURIComponent(query);

  if (lat && lng) {
    // Combine name/address search with absolute coordinate precision
    // Using api=1 Search with query for labeling/context and center/zoom for precise positioning
    return `https://www.google.com/maps/search/?api=1&query=${encodedQuery}&center=${lat},${lng}&zoom=18`;
  }

  return `https://www.google.com/maps/search/?api=1&query=${encodedQuery}`;
}

export function formatOperatingHours(
  openTime?: string,
  closeTime?: string,
): string | null {
  if (!openTime || !closeTime) return null;

  const formatTime = (timeStr: string) => {
    const parts = timeStr.split(":");
    if (parts.length < 2) return timeStr;
    return `${parts[0]}:${parts[1]}`;
  };

  return `${formatTime(openTime)} - ${formatTime(closeTime)}`;
}

export function formatDistance(km?: number): string | null {
  if (km === undefined) return null;
  if (km < 1) {
    const meters = Math.round(km * 1000);
    return `${meters}m`;
  }
  return `${km.toFixed(1)}km`;
}

import type { Restaurant } from "@/types";

export function getAIHighlights(r: Restaurant): string[] {
  const highlights: string[] = [];
  const name = r.name.toLowerCase();

  // 1. Quality/Popularity based on rating
  if (r.rating && r.rating.avg >= 4.5) {
    highlights.push(
      `Được đánh giá cực cao (${r.rating.avg}/5⭐) bởi cộng đồng sành ăn địa phương.`,
    );
  } else if (r.rating && r.rating.totalReview > 500) {
    highlights.push(
      `Địa điểm quen thuộc với hơn ${r.rating.displayTotalReview} lượt review, đảm bảo hương vị ổn định.`,
    );
  } else {
    highlights.push(
      "Hidden gem (ngọc ẩn) với hương vị độc bản, được nhiều thực khách truyền tai nhau.",
    );
  }

  // 2. Flavor Profile based on type/cuisines
  const type = r.type || r.cuisines?.[0] || "";
  const foodTypeMap: Record<string, string> = {
    Phở: "Nước dùng thanh ngọt từ xương hầm truyền thống, sợi bánh mềm mướt đặc trưng.",
    "Bánh Mì":
      "Sự kết hợp hoàn hảo giữa vỏ bánh giòn tan và nhân thơm béo từ pate nhà làm.",
    "Bún Chả":
      "Thịt nướng xém cạnh thơm nồng mùi than củi, ăn kèm nước chấm đậm đà vị Hà Thành.",
    "Cơm Tấm":
      "Gạo tấm thơm bùi kết hợp cùng sườn nướng mật ong vàng ruộm, chuẩn vị Sài Gòn.",
    Café: "Không gian chill với hạt cafe nguyên chất, rang xay tại chỗ thơm nồng nàn.",
    "Hải Sản":
      "Nguồn hải sản tươi sống nhập mới mỗi ngày, chế biến giữ trọn vị ngọt tự nhiên.",
    Ốc: "Gia vị tẩm ướp đặc sắc, menu đa dạng từ xào me đến nướng mỡ hành thơm lừng.",
  };

  const foundType = Object.keys(foodTypeMap).find((t) => type.includes(t));
  if (foundType) {
    highlights.push(foodTypeMap[foundType]);
  } else {
    highlights.push(
      `Chuyên các món ${type} với phong cách chế biến sáng tạo, nguyên liệu luôn tươi mới.`,
    );
  }

  // 3. Vibe/Occasion based on promotions or metadata
  if (r.promotionGroups && r.promotionGroups.length > 0) {
    highlights.push(
      `Đang có ưu đãi hấp dẫn: "${r.promotionGroups[0].text}" - cực kỳ hời cho bữa ăn của bạn.`,
    );
  } else if (name.includes("gia đình") || name.includes("quán")) {
    highlights.push(
      "Không gian gần gũi, ấm cúng, là lựa chọn lý tưởng cho các buổi họp mặt gia đình.",
    );
  } else {
    highlights.push(
      "Dịch vụ nhanh nhẹn, chu đáo, phù hợp cho cả ăn tại chỗ hoặc đặt mang về.",
    );
  }

  // 4. Pro Tip
  if (r.shopeeUrl) {
    highlights.push(
      "Mẹo: Đặt qua ShopeeFood để nhận thêm voucher giảm giá và freeship độc quyền.",
    );
  } else {
    highlights.push(
      `Gợi ý: Đừng quên thử món "Best-seller" của quán, luôn hết sớm vào khung giờ cao điểm.`,
    );
  }

  return highlights.slice(0, 3);
}
