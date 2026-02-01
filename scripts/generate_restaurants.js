
const FOOD_TYPES = [
  "Phở", "Bún", "Cơm", "Lẩu", "Đồ chay", "Bánh mì", "Ăn vặt", 
  "Bánh cuốn", "Bún đậu", "Hải sản", "Ốc", "Mì", "Hủ tiếu", 
  "Đồ nướng", "Nước & Cafe", "Chè", "Bánh xèo", "Khác"
];

const HCM_DISTRICTS = [
  "Quận 1", "Quận 3", "Quận 4", "Quận 5", "Quận 6", "Quận 7", "Quận 8", "Quận 10", "Quận 11", "Quận 12",
  "Bình Thạnh", "Gò Vấp", "Phú Nhuận", "Tân Bình", "Tân Phú", "Bình Tân", "Thủ Đức",
  "Hóc Môn", "Củ Chi", "Nhà Bè", "Bình Chánh", "Cần Giờ"
];

const MEAL_TIMES = ["Sáng", "Trưa", "Chiều", "Tối", "Khuya"];

const NAMES = [
  "Hương Việt", "Sài Thành", "Phố Hội", "Cô Ba", "Chú Bảy", "Dì Liên", "Anh Tư", "Bà Năm", "Ông Già", 
  "Xưa & Nay", "Gia Đình", "Đệ Nhất", "Thanh Xuân", "Hào Hùng", "Minh Khai", "Thanh Đa", "Bến Thành",
  "Đồng Quê", "Sông Trăng", "Mưa Hồng", "Nắng Vàng", "Saigon Deli", "Viet Kitchen", "Local Taste",
  "Hồng Phát", "Kim Anh", "Ngọc Lan", "Thái Bình", "Hoàn Kiếm", "Nam Hải", "Đông Á", "Vĩnh Lộc"
];

const STREETS = {
  "Quận 1": ["Lê Thánh Tôn", "Lý Tự Trọng", "Nguyễn Huệ", "Hàm Nghi", "Đồng Khởi"],
  "Quận 3": ["Võ Văn Tần", "Nguyễn Đình Chiểu", "Lê Quý Đôn", "Pasteur", "Điện Biên Phủ"],
  "Quận 4": ["Vĩnh Khánh", "Đoàn Văn Bơ", "Hoàng Diệu", "Tôn Đản", "Bến Vân Đồn"],
  "Quận 5": ["Nguyễn Trãi", "Trần Hưng Đạo", "An Dương Vương", "Võ Văn Kiệt", "Hồng Bàng"],
  "Quận 6": ["Hậu Giang", "Chợ Lớn", "Kinh Dương Vương", "Bình Tiên", "Lê Quang Sung"],
  "Quận 7": ["Nguyễn Văn Linh", "Nguyễn Thị Thập", "Lê Văn Lương", "Huỳnh Tấn Phát", "Phạm Hữu Lầu"],
  "Quận 8": ["Phạm Hùng", "Tùng Thiện Vương", "Hưng Phú", "Dương Bá Trạc", "Mai Hắc Đế"],
  "Quận 10": ["Nguyễn Tri Phương", "Thành Thái", "Sư Vạn Hạnh", "Lý Thái Tổ", "Ba Tháng Hai"],
  "Quận 11": ["Lạc Long Quân", "Lãnh Binh Thăng", "Ông Ích Khiêm", "Minh Phụng", "Hòa Bình"],
  "Quận 12": ["Tô Ký", "Nguyễn Ánh Thủ", "Lê Văn Khương", "Quang Trung", "Hà Huy Giáp"],
  "Bình Thạnh": ["Lê Quang Định", "Phan Văn Trị", "Nguyễn Gia Trí", "Bạch Đằng", "Xô Viết Nghệ Tĩnh"],
  "Gò Vấp": ["Quang Trung", "Phan Văn Trị", "Lê Đức Thọ", "Nguyễn Oanh", "Thống Nhất"],
  "Phú Nhuận": ["Phan Xích Long", "Nguyễn Kiệm", "Phan Đình Phùng", "Thích Quảng Đức", "Huỳnh Văn Bánh"],
  "Tân Bình": ["Lê Văn Sỹ", "Cộng Hòa", "Trường Chinh", "Út Tịch", "Hoàng Văn Thụ"],
  "Tân Phú": ["Lũy Bán Bích", "Tân Sơn Nhì", "Độc Lập", "Vườn Lài", "Thạch Lam"],
  "Bình Tân": ["Tên Lửa", "Đường số 7", "Kinh Dương Vương", "Mã Lò", "Tân Kỳ Tân Quý"],
  "Thủ Đức": ["Võ Văn Ngân", "Đặng Văn Bi", "Kha Vạn Cân", "Phạm Văn Đồng", "Tô Ngọc Vân"],
  "Hóc Môn": ["Lý Thường Kiệt", "Song Hành", "Trưng Nữ Vương", "Lê Lợi", "Nguyễn Ảnh Thủ"],
  "Củ Chi": ["Tỉnh Lộ 8", "Quốc Lộ 22", "Hà Duy Phiên", "Liêu Bình Hương", "Nguyễn Văn Khạ"],
  "Nhà Bè": ["Lê Văn Lương", "Huỳnh Tấn Phát", "Phạm Hữu Lầu", "Nguyễn Văn Tạo", "Nguyễn Hữu Thọ"],
  "Bình Chánh": ["Nguyễn Hữu Trí", "Quốc Lộ 1A", "Trần Đại Nghĩa", "Vĩnh Lộc", "Quách Điêu"],
  "Cần Giờ": ["Duyên Hải", "Thạnh Thới", "Tắc Xuất", "Lương Văn Nho", "Trần Quang Đạo"]
};

// Map food types to prefixes
const PREFIXES = {
  "Phở": "Phở",
  "Bún": "Bún",
  "Cơm": "Cơm",
  "Lẩu": "Lẩu",
  "Đồ chay": "Chay",
  "Bánh mì": "Bánh mì",
  "Ăn vặt": "Ăn vặt",
  "Bánh cuốn": "Bánh cuốn",
  "Bún đậu": "Bún đậu",
  "Hải sản": "Hải sản",
  "Ốc": "Ốc",
  "Mì": "Mì",
  "Hủ tiếu": "Hủ tiếu",
  "Đồ nướng": "Nướng",
  "Nước & Cafe": "Cafe",
  "Chè": "Chè",
  "Bánh xèo": "Bánh xèo",
  "Khác": "Quán"
};

const restaurants = [];

HCM_DISTRICTS.forEach(district => {
  FOOD_TYPES.forEach(type => {
    for (let i = 1; i <= 5; i++) {
      const name = NAMES[Math.floor(Math.random() * NAMES.length)];
      const prefix = PREFIXES[type];
      const street = STREETS[district][Math.floor(Math.random() * STREETS[district].length)];
      const hno = Math.floor(Math.random() * 500) + 1;
      
      const resName = `${prefix} ${name} ${i > 1 ? i : ''}`.trim();
      const location = `${hno} ${street}, ${district}, TP. HCM`;
      const query = encodeURIComponent(`${resName} ${location}`);
      
      restaurants.push({
        name: resName,
        type: type,
        location: location,
        googleMapsUrl: `https://www.google.com/maps/search/?api=1&query=${query}`,
        notes: `Một quán ${type.toLowerCase()} cực kỳ tâm đắc tại ${district}. Đồ ăn tươi ngon, phục vụ chu đáo.`,
        mealTimes: ["Trưa", "Tối"]
      });
    }
  });
});


import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fileContent = `import type { Restaurant } from '@/types';

export const SAMPLE_RESTAURANTS: Omit<Restaurant, 'id' | 'createdAt'>[] = ${JSON.stringify(restaurants, null, 2)};
`;

const outputPath = path.join(__dirname, '../src/data/sampleRestaurants.ts');
fs.writeFileSync(outputPath, fileContent, 'utf8');
console.log(`Successfully wrote ${restaurants.length} restaurants to ${outputPath}`);
