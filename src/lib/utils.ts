import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
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
