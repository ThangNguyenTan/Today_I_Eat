import type { Restaurant } from '@/types';

export const SAMPLE_RESTAURANTS: Omit<Restaurant, 'id' | 'createdAt'>[] = [
  {
    "name": "Phở Đồng Quê",
    "type": "Phở",
    "location": "266 Lê Thánh Tôn, Quận 1, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20%C4%90%E1%BB%93ng%20Qu%C3%AA%20266%20L%C3%AA%20Th%C3%A1nh%20T%C3%B4n%2C%20Qu%E1%BA%ADn%201%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Quận 1. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Bến Thành 2",
    "type": "Phở",
    "location": "309 Nguyễn Huệ, Quận 1, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20B%E1%BA%BFn%20Th%C3%A0nh%202%20309%20Nguy%E1%BB%85n%20Hu%E1%BB%87%2C%20Qu%E1%BA%ADn%201%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Quận 1. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Sài Thành 3",
    "type": "Phở",
    "location": "494 Đồng Khởi, Quận 1, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20S%C3%A0i%20Th%C3%A0nh%203%20494%20%C4%90%E1%BB%93ng%20Kh%E1%BB%9Fi%2C%20Qu%E1%BA%ADn%201%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Quận 1. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Hào Hùng 4",
    "type": "Phở",
    "location": "435 Đồng Khởi, Quận 1, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20H%C3%A0o%20H%C3%B9ng%204%20435%20%C4%90%E1%BB%93ng%20Kh%E1%BB%9Fi%2C%20Qu%E1%BA%ADn%201%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Quận 1. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Hương Việt 5",
    "type": "Phở",
    "location": "409 Lê Thánh Tôn, Quận 1, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20H%C6%B0%C6%A1ng%20Vi%E1%BB%87t%205%20409%20L%C3%AA%20Th%C3%A1nh%20T%C3%B4n%2C%20Qu%E1%BA%ADn%201%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Quận 1. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Gia Đình",
    "type": "Bún",
    "location": "399 Lê Thánh Tôn, Quận 1, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20Gia%20%C4%90%C3%ACnh%20399%20L%C3%AA%20Th%C3%A1nh%20T%C3%B4n%2C%20Qu%E1%BA%ADn%201%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Quận 1. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Kim Anh 2",
    "type": "Bún",
    "location": "39 Lê Thánh Tôn, Quận 1, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20Kim%20Anh%202%2039%20L%C3%AA%20Th%C3%A1nh%20T%C3%B4n%2C%20Qu%E1%BA%ADn%201%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Quận 1. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Đệ Nhất 3",
    "type": "Bún",
    "location": "72 Nguyễn Huệ, Quận 1, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%90%E1%BB%87%20Nh%E1%BA%A5t%203%2072%20Nguy%E1%BB%85n%20Hu%E1%BB%87%2C%20Qu%E1%BA%ADn%201%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Quận 1. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Hương Việt 4",
    "type": "Bún",
    "location": "20 Đồng Khởi, Quận 1, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20H%C6%B0%C6%A1ng%20Vi%E1%BB%87t%204%2020%20%C4%90%E1%BB%93ng%20Kh%E1%BB%9Fi%2C%20Qu%E1%BA%ADn%201%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Quận 1. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Sài Thành 5",
    "type": "Bún",
    "location": "493 Hàm Nghi, Quận 1, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20S%C3%A0i%20Th%C3%A0nh%205%20493%20H%C3%A0m%20Nghi%2C%20Qu%E1%BA%ADn%201%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Quận 1. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Hương Việt",
    "type": "Cơm",
    "location": "186 Đồng Khởi, Quận 1, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20H%C6%B0%C6%A1ng%20Vi%E1%BB%87t%20186%20%C4%90%E1%BB%93ng%20Kh%E1%BB%9Fi%2C%20Qu%E1%BA%ADn%201%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Quận 1. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Phố Hội 2",
    "type": "Cơm",
    "location": "316 Hàm Nghi, Quận 1, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20Ph%E1%BB%91%20H%E1%BB%99i%202%20316%20H%C3%A0m%20Nghi%2C%20Qu%E1%BA%ADn%201%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Quận 1. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Hào Hùng 3",
    "type": "Cơm",
    "location": "362 Lê Thánh Tôn, Quận 1, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20H%C3%A0o%20H%C3%B9ng%203%20362%20L%C3%AA%20Th%C3%A1nh%20T%C3%B4n%2C%20Qu%E1%BA%ADn%201%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Quận 1. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Hoàn Kiếm 4",
    "type": "Cơm",
    "location": "153 Đồng Khởi, Quận 1, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20Ho%C3%A0n%20Ki%E1%BA%BFm%204%20153%20%C4%90%E1%BB%93ng%20Kh%E1%BB%9Fi%2C%20Qu%E1%BA%ADn%201%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Quận 1. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Viet Kitchen 5",
    "type": "Cơm",
    "location": "90 Nguyễn Huệ, Quận 1, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20Viet%20Kitchen%205%2090%20Nguy%E1%BB%85n%20Hu%E1%BB%87%2C%20Qu%E1%BA%ADn%201%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Quận 1. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Thái Bình",
    "type": "Lẩu",
    "location": "340 Hàm Nghi, Quận 1, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20Th%C3%A1i%20B%C3%ACnh%20340%20H%C3%A0m%20Nghi%2C%20Qu%E1%BA%ADn%201%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Quận 1. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Sài Thành 2",
    "type": "Lẩu",
    "location": "116 Đồng Khởi, Quận 1, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20S%C3%A0i%20Th%C3%A0nh%202%20116%20%C4%90%E1%BB%93ng%20Kh%E1%BB%9Fi%2C%20Qu%E1%BA%ADn%201%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Quận 1. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Local Taste 3",
    "type": "Lẩu",
    "location": "154 Lý Tự Trọng, Quận 1, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20Local%20Taste%203%20154%20L%C3%BD%20T%E1%BB%B1%20Tr%E1%BB%8Dng%2C%20Qu%E1%BA%ADn%201%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Quận 1. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Ngọc Lan 4",
    "type": "Lẩu",
    "location": "409 Hàm Nghi, Quận 1, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20Ng%E1%BB%8Dc%20Lan%204%20409%20H%C3%A0m%20Nghi%2C%20Qu%E1%BA%ADn%201%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Quận 1. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Dì Liên 5",
    "type": "Lẩu",
    "location": "124 Hàm Nghi, Quận 1, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20D%C3%AC%20Li%C3%AAn%205%20124%20H%C3%A0m%20Nghi%2C%20Qu%E1%BA%ADn%201%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Quận 1. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Hoàn Kiếm",
    "type": "Đồ chay",
    "location": "494 Lý Tự Trọng, Quận 1, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20Ho%C3%A0n%20Ki%E1%BA%BFm%20494%20L%C3%BD%20T%E1%BB%B1%20Tr%E1%BB%8Dng%2C%20Qu%E1%BA%ADn%201%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Quận 1. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Đệ Nhất 2",
    "type": "Đồ chay",
    "location": "192 Lý Tự Trọng, Quận 1, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20%C4%90%E1%BB%87%20Nh%E1%BA%A5t%202%20192%20L%C3%BD%20T%E1%BB%B1%20Tr%E1%BB%8Dng%2C%20Qu%E1%BA%ADn%201%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Quận 1. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Đông Á 3",
    "type": "Đồ chay",
    "location": "70 Hàm Nghi, Quận 1, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20%C4%90%C3%B4ng%20%C3%81%203%2070%20H%C3%A0m%20Nghi%2C%20Qu%E1%BA%ADn%201%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Quận 1. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Phố Hội 4",
    "type": "Đồ chay",
    "location": "252 Hàm Nghi, Quận 1, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20Ph%E1%BB%91%20H%E1%BB%99i%204%20252%20H%C3%A0m%20Nghi%2C%20Qu%E1%BA%ADn%201%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Quận 1. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Local Taste 5",
    "type": "Đồ chay",
    "location": "54 Hàm Nghi, Quận 1, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20Local%20Taste%205%2054%20H%C3%A0m%20Nghi%2C%20Qu%E1%BA%ADn%201%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Quận 1. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Sài Thành",
    "type": "Bánh mì",
    "location": "262 Hàm Nghi, Quận 1, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20S%C3%A0i%20Th%C3%A0nh%20262%20H%C3%A0m%20Nghi%2C%20Qu%E1%BA%ADn%201%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Quận 1. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Thanh Xuân 2",
    "type": "Bánh mì",
    "location": "20 Lý Tự Trọng, Quận 1, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20Thanh%20Xu%C3%A2n%202%2020%20L%C3%BD%20T%E1%BB%B1%20Tr%E1%BB%8Dng%2C%20Qu%E1%BA%ADn%201%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Quận 1. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Gia Đình 3",
    "type": "Bánh mì",
    "location": "121 Lê Thánh Tôn, Quận 1, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20Gia%20%C4%90%C3%ACnh%203%20121%20L%C3%AA%20Th%C3%A1nh%20T%C3%B4n%2C%20Qu%E1%BA%ADn%201%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Quận 1. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Thái Bình 4",
    "type": "Bánh mì",
    "location": "42 Đồng Khởi, Quận 1, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20Th%C3%A1i%20B%C3%ACnh%204%2042%20%C4%90%E1%BB%93ng%20Kh%E1%BB%9Fi%2C%20Qu%E1%BA%ADn%201%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Quận 1. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Minh Khai 5",
    "type": "Bánh mì",
    "location": "366 Hàm Nghi, Quận 1, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20Minh%20Khai%205%20366%20H%C3%A0m%20Nghi%2C%20Qu%E1%BA%ADn%201%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Quận 1. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Hào Hùng",
    "type": "Ăn vặt",
    "location": "474 Nguyễn Huệ, Quận 1, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20H%C3%A0o%20H%C3%B9ng%20474%20Nguy%E1%BB%85n%20Hu%E1%BB%87%2C%20Qu%E1%BA%ADn%201%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Quận 1. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Anh Tư 2",
    "type": "Ăn vặt",
    "location": "84 Đồng Khởi, Quận 1, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20Anh%20T%C6%B0%202%2084%20%C4%90%E1%BB%93ng%20Kh%E1%BB%9Fi%2C%20Qu%E1%BA%ADn%201%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Quận 1. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Vĩnh Lộc 3",
    "type": "Ăn vặt",
    "location": "242 Lê Thánh Tôn, Quận 1, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20V%C4%A9nh%20L%E1%BB%99c%203%20242%20L%C3%AA%20Th%C3%A1nh%20T%C3%B4n%2C%20Qu%E1%BA%ADn%201%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Quận 1. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Saigon Deli 4",
    "type": "Ăn vặt",
    "location": "364 Đồng Khởi, Quận 1, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20Saigon%20Deli%204%20364%20%C4%90%E1%BB%93ng%20Kh%E1%BB%9Fi%2C%20Qu%E1%BA%ADn%201%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Quận 1. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Bà Năm 5",
    "type": "Ăn vặt",
    "location": "466 Lê Thánh Tôn, Quận 1, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20B%C3%A0%20N%C4%83m%205%20466%20L%C3%AA%20Th%C3%A1nh%20T%C3%B4n%2C%20Qu%E1%BA%ADn%201%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Quận 1. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Ông Già",
    "type": "Bánh cuốn",
    "location": "357 Lý Tự Trọng, Quận 1, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20%C3%94ng%20Gi%C3%A0%20357%20L%C3%BD%20T%E1%BB%B1%20Tr%E1%BB%8Dng%2C%20Qu%E1%BA%ADn%201%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Quận 1. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Gia Đình 2",
    "type": "Bánh cuốn",
    "location": "39 Đồng Khởi, Quận 1, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20Gia%20%C4%90%C3%ACnh%202%2039%20%C4%90%E1%BB%93ng%20Kh%E1%BB%9Fi%2C%20Qu%E1%BA%ADn%201%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Quận 1. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Gia Đình 3",
    "type": "Bánh cuốn",
    "location": "304 Lê Thánh Tôn, Quận 1, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20Gia%20%C4%90%C3%ACnh%203%20304%20L%C3%AA%20Th%C3%A1nh%20T%C3%B4n%2C%20Qu%E1%BA%ADn%201%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Quận 1. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Dì Liên 4",
    "type": "Bánh cuốn",
    "location": "171 Đồng Khởi, Quận 1, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20D%C3%AC%20Li%C3%AAn%204%20171%20%C4%90%E1%BB%93ng%20Kh%E1%BB%9Fi%2C%20Qu%E1%BA%ADn%201%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Quận 1. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Dì Liên 5",
    "type": "Bánh cuốn",
    "location": "189 Lý Tự Trọng, Quận 1, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20D%C3%AC%20Li%C3%AAn%205%20189%20L%C3%BD%20T%E1%BB%B1%20Tr%E1%BB%8Dng%2C%20Qu%E1%BA%ADn%201%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Quận 1. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Anh Tư",
    "type": "Bún đậu",
    "location": "332 Lê Thánh Tôn, Quận 1, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20Anh%20T%C6%B0%20332%20L%C3%AA%20Th%C3%A1nh%20T%C3%B4n%2C%20Qu%E1%BA%ADn%201%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Quận 1. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Hồng Phát 2",
    "type": "Bún đậu",
    "location": "48 Nguyễn Huệ, Quận 1, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20H%E1%BB%93ng%20Ph%C3%A1t%202%2048%20Nguy%E1%BB%85n%20Hu%E1%BB%87%2C%20Qu%E1%BA%ADn%201%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Quận 1. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Đông Á 3",
    "type": "Bún đậu",
    "location": "181 Lê Thánh Tôn, Quận 1, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20%C4%90%C3%B4ng%20%C3%81%203%20181%20L%C3%AA%20Th%C3%A1nh%20T%C3%B4n%2C%20Qu%E1%BA%ADn%201%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Quận 1. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Xưa & Nay 4",
    "type": "Bún đậu",
    "location": "346 Lý Tự Trọng, Quận 1, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20X%C6%B0a%20%26%20Nay%204%20346%20L%C3%BD%20T%E1%BB%B1%20Tr%E1%BB%8Dng%2C%20Qu%E1%BA%ADn%201%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Quận 1. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Xưa & Nay 5",
    "type": "Bún đậu",
    "location": "494 Lê Thánh Tôn, Quận 1, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20X%C6%B0a%20%26%20Nay%205%20494%20L%C3%AA%20Th%C3%A1nh%20T%C3%B4n%2C%20Qu%E1%BA%ADn%201%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Quận 1. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Dì Liên",
    "type": "Hải sản",
    "location": "291 Nguyễn Huệ, Quận 1, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20D%C3%AC%20Li%C3%AAn%20291%20Nguy%E1%BB%85n%20Hu%E1%BB%87%2C%20Qu%E1%BA%ADn%201%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Quận 1. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Gia Đình 2",
    "type": "Hải sản",
    "location": "394 Đồng Khởi, Quận 1, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20Gia%20%C4%90%C3%ACnh%202%20394%20%C4%90%E1%BB%93ng%20Kh%E1%BB%9Fi%2C%20Qu%E1%BA%ADn%201%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Quận 1. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Dì Liên 3",
    "type": "Hải sản",
    "location": "185 Nguyễn Huệ, Quận 1, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20D%C3%AC%20Li%C3%AAn%203%20185%20Nguy%E1%BB%85n%20Hu%E1%BB%87%2C%20Qu%E1%BA%ADn%201%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Quận 1. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Mưa Hồng 4",
    "type": "Hải sản",
    "location": "307 Hàm Nghi, Quận 1, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20M%C6%B0a%20H%E1%BB%93ng%204%20307%20H%C3%A0m%20Nghi%2C%20Qu%E1%BA%ADn%201%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Quận 1. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Dì Liên 5",
    "type": "Hải sản",
    "location": "469 Lê Thánh Tôn, Quận 1, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20D%C3%AC%20Li%C3%AAn%205%20469%20L%C3%AA%20Th%C3%A1nh%20T%C3%B4n%2C%20Qu%E1%BA%ADn%201%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Quận 1. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Đông Á",
    "type": "Ốc",
    "location": "288 Lý Tự Trọng, Quận 1, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20%C4%90%C3%B4ng%20%C3%81%20288%20L%C3%BD%20T%E1%BB%B1%20Tr%E1%BB%8Dng%2C%20Qu%E1%BA%ADn%201%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Quận 1. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Bến Thành 2",
    "type": "Ốc",
    "location": "168 Nguyễn Huệ, Quận 1, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20B%E1%BA%BFn%20Th%C3%A0nh%202%20168%20Nguy%E1%BB%85n%20Hu%E1%BB%87%2C%20Qu%E1%BA%ADn%201%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Quận 1. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Sông Trăng 3",
    "type": "Ốc",
    "location": "320 Đồng Khởi, Quận 1, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20S%C3%B4ng%20Tr%C4%83ng%203%20320%20%C4%90%E1%BB%93ng%20Kh%E1%BB%9Fi%2C%20Qu%E1%BA%ADn%201%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Quận 1. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Hương Việt 4",
    "type": "Ốc",
    "location": "426 Lý Tự Trọng, Quận 1, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20H%C6%B0%C6%A1ng%20Vi%E1%BB%87t%204%20426%20L%C3%BD%20T%E1%BB%B1%20Tr%E1%BB%8Dng%2C%20Qu%E1%BA%ADn%201%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Quận 1. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Thanh Đa 5",
    "type": "Ốc",
    "location": "63 Lý Tự Trọng, Quận 1, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20Thanh%20%C4%90a%205%2063%20L%C3%BD%20T%E1%BB%B1%20Tr%E1%BB%8Dng%2C%20Qu%E1%BA%ADn%201%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Quận 1. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Anh Tư",
    "type": "Mì",
    "location": "484 Lê Thánh Tôn, Quận 1, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20Anh%20T%C6%B0%20484%20L%C3%AA%20Th%C3%A1nh%20T%C3%B4n%2C%20Qu%E1%BA%ADn%201%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Quận 1. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Hào Hùng 2",
    "type": "Mì",
    "location": "334 Nguyễn Huệ, Quận 1, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20H%C3%A0o%20H%C3%B9ng%202%20334%20Nguy%E1%BB%85n%20Hu%E1%BB%87%2C%20Qu%E1%BA%ADn%201%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Quận 1. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Saigon Deli 3",
    "type": "Mì",
    "location": "441 Đồng Khởi, Quận 1, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20Saigon%20Deli%203%20441%20%C4%90%E1%BB%93ng%20Kh%E1%BB%9Fi%2C%20Qu%E1%BA%ADn%201%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Quận 1. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Bến Thành 4",
    "type": "Mì",
    "location": "211 Hàm Nghi, Quận 1, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20B%E1%BA%BFn%20Th%C3%A0nh%204%20211%20H%C3%A0m%20Nghi%2C%20Qu%E1%BA%ADn%201%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Quận 1. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Nắng Vàng 5",
    "type": "Mì",
    "location": "172 Hàm Nghi, Quận 1, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20N%E1%BA%AFng%20V%C3%A0ng%205%20172%20H%C3%A0m%20Nghi%2C%20Qu%E1%BA%ADn%201%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Quận 1. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Sài Thành",
    "type": "Hủ tiếu",
    "location": "194 Lý Tự Trọng, Quận 1, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20S%C3%A0i%20Th%C3%A0nh%20194%20L%C3%BD%20T%E1%BB%B1%20Tr%E1%BB%8Dng%2C%20Qu%E1%BA%ADn%201%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Quận 1. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Anh Tư 2",
    "type": "Hủ tiếu",
    "location": "140 Nguyễn Huệ, Quận 1, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20Anh%20T%C6%B0%202%20140%20Nguy%E1%BB%85n%20Hu%E1%BB%87%2C%20Qu%E1%BA%ADn%201%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Quận 1. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Thanh Xuân 3",
    "type": "Hủ tiếu",
    "location": "116 Lý Tự Trọng, Quận 1, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20Thanh%20Xu%C3%A2n%203%20116%20L%C3%BD%20T%E1%BB%B1%20Tr%E1%BB%8Dng%2C%20Qu%E1%BA%ADn%201%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Quận 1. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Sông Trăng 4",
    "type": "Hủ tiếu",
    "location": "165 Hàm Nghi, Quận 1, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20S%C3%B4ng%20Tr%C4%83ng%204%20165%20H%C3%A0m%20Nghi%2C%20Qu%E1%BA%ADn%201%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Quận 1. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Hoàn Kiếm 5",
    "type": "Hủ tiếu",
    "location": "57 Lê Thánh Tôn, Quận 1, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20Ho%C3%A0n%20Ki%E1%BA%BFm%205%2057%20L%C3%AA%20Th%C3%A1nh%20T%C3%B4n%2C%20Qu%E1%BA%ADn%201%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Quận 1. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Dì Liên",
    "type": "Đồ nướng",
    "location": "291 Lý Tự Trọng, Quận 1, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20D%C3%AC%20Li%C3%AAn%20291%20L%C3%BD%20T%E1%BB%B1%20Tr%E1%BB%8Dng%2C%20Qu%E1%BA%ADn%201%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Quận 1. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Nắng Vàng 2",
    "type": "Đồ nướng",
    "location": "370 Lý Tự Trọng, Quận 1, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20N%E1%BA%AFng%20V%C3%A0ng%202%20370%20L%C3%BD%20T%E1%BB%B1%20Tr%E1%BB%8Dng%2C%20Qu%E1%BA%ADn%201%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Quận 1. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Hào Hùng 3",
    "type": "Đồ nướng",
    "location": "342 Hàm Nghi, Quận 1, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20H%C3%A0o%20H%C3%B9ng%203%20342%20H%C3%A0m%20Nghi%2C%20Qu%E1%BA%ADn%201%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Quận 1. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Thái Bình 4",
    "type": "Đồ nướng",
    "location": "47 Nguyễn Huệ, Quận 1, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20Th%C3%A1i%20B%C3%ACnh%204%2047%20Nguy%E1%BB%85n%20Hu%E1%BB%87%2C%20Qu%E1%BA%ADn%201%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Quận 1. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Nắng Vàng 5",
    "type": "Đồ nướng",
    "location": "309 Lý Tự Trọng, Quận 1, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20N%E1%BA%AFng%20V%C3%A0ng%205%20309%20L%C3%BD%20T%E1%BB%B1%20Tr%E1%BB%8Dng%2C%20Qu%E1%BA%ADn%201%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Quận 1. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Gia Đình",
    "type": "Nước & Cafe",
    "location": "1 Đồng Khởi, Quận 1, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20Gia%20%C4%90%C3%ACnh%201%20%C4%90%E1%BB%93ng%20Kh%E1%BB%9Fi%2C%20Qu%E1%BA%ADn%201%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Quận 1. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Nắng Vàng 2",
    "type": "Nước & Cafe",
    "location": "322 Lý Tự Trọng, Quận 1, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20N%E1%BA%AFng%20V%C3%A0ng%202%20322%20L%C3%BD%20T%E1%BB%B1%20Tr%E1%BB%8Dng%2C%20Qu%E1%BA%ADn%201%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Quận 1. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Phố Hội 3",
    "type": "Nước & Cafe",
    "location": "128 Lý Tự Trọng, Quận 1, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20Ph%E1%BB%91%20H%E1%BB%99i%203%20128%20L%C3%BD%20T%E1%BB%B1%20Tr%E1%BB%8Dng%2C%20Qu%E1%BA%ADn%201%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Quận 1. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Mưa Hồng 4",
    "type": "Nước & Cafe",
    "location": "61 Đồng Khởi, Quận 1, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20M%C6%B0a%20H%E1%BB%93ng%204%2061%20%C4%90%E1%BB%93ng%20Kh%E1%BB%9Fi%2C%20Qu%E1%BA%ADn%201%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Quận 1. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Bến Thành 5",
    "type": "Nước & Cafe",
    "location": "57 Lý Tự Trọng, Quận 1, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20B%E1%BA%BFn%20Th%C3%A0nh%205%2057%20L%C3%BD%20T%E1%BB%B1%20Tr%E1%BB%8Dng%2C%20Qu%E1%BA%ADn%201%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Quận 1. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Bến Thành",
    "type": "Chè",
    "location": "473 Lý Tự Trọng, Quận 1, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20B%E1%BA%BFn%20Th%C3%A0nh%20473%20L%C3%BD%20T%E1%BB%B1%20Tr%E1%BB%8Dng%2C%20Qu%E1%BA%ADn%201%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Quận 1. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Đệ Nhất 2",
    "type": "Chè",
    "location": "391 Nguyễn Huệ, Quận 1, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20%C4%90%E1%BB%87%20Nh%E1%BA%A5t%202%20391%20Nguy%E1%BB%85n%20Hu%E1%BB%87%2C%20Qu%E1%BA%ADn%201%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Quận 1. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Chú Bảy 3",
    "type": "Chè",
    "location": "161 Lê Thánh Tôn, Quận 1, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20Ch%C3%BA%20B%E1%BA%A3y%203%20161%20L%C3%AA%20Th%C3%A1nh%20T%C3%B4n%2C%20Qu%E1%BA%ADn%201%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Quận 1. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Dì Liên 4",
    "type": "Chè",
    "location": "481 Lê Thánh Tôn, Quận 1, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20D%C3%AC%20Li%C3%AAn%204%20481%20L%C3%AA%20Th%C3%A1nh%20T%C3%B4n%2C%20Qu%E1%BA%ADn%201%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Quận 1. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Cô Ba 5",
    "type": "Chè",
    "location": "359 Lê Thánh Tôn, Quận 1, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20C%C3%B4%20Ba%205%20359%20L%C3%AA%20Th%C3%A1nh%20T%C3%B4n%2C%20Qu%E1%BA%ADn%201%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Quận 1. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Chú Bảy",
    "type": "Bánh xèo",
    "location": "483 Nguyễn Huệ, Quận 1, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20Ch%C3%BA%20B%E1%BA%A3y%20483%20Nguy%E1%BB%85n%20Hu%E1%BB%87%2C%20Qu%E1%BA%ADn%201%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Quận 1. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Anh Tư 2",
    "type": "Bánh xèo",
    "location": "279 Hàm Nghi, Quận 1, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20Anh%20T%C6%B0%202%20279%20H%C3%A0m%20Nghi%2C%20Qu%E1%BA%ADn%201%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Quận 1. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Hoàn Kiếm 3",
    "type": "Bánh xèo",
    "location": "131 Lê Thánh Tôn, Quận 1, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20Ho%C3%A0n%20Ki%E1%BA%BFm%203%20131%20L%C3%AA%20Th%C3%A1nh%20T%C3%B4n%2C%20Qu%E1%BA%ADn%201%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Quận 1. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Viet Kitchen 4",
    "type": "Bánh xèo",
    "location": "319 Nguyễn Huệ, Quận 1, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20Viet%20Kitchen%204%20319%20Nguy%E1%BB%85n%20Hu%E1%BB%87%2C%20Qu%E1%BA%ADn%201%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Quận 1. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Ông Già 5",
    "type": "Bánh xèo",
    "location": "133 Lý Tự Trọng, Quận 1, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20%C3%94ng%20Gi%C3%A0%205%20133%20L%C3%BD%20T%E1%BB%B1%20Tr%E1%BB%8Dng%2C%20Qu%E1%BA%ADn%201%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Quận 1. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Local Taste",
    "type": "Khác",
    "location": "67 Lý Tự Trọng, Quận 1, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20Local%20Taste%2067%20L%C3%BD%20T%E1%BB%B1%20Tr%E1%BB%8Dng%2C%20Qu%E1%BA%ADn%201%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Quận 1. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Local Taste 2",
    "type": "Khác",
    "location": "206 Nguyễn Huệ, Quận 1, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20Local%20Taste%202%20206%20Nguy%E1%BB%85n%20Hu%E1%BB%87%2C%20Qu%E1%BA%ADn%201%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Quận 1. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Hào Hùng 3",
    "type": "Khác",
    "location": "176 Lý Tự Trọng, Quận 1, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20H%C3%A0o%20H%C3%B9ng%203%20176%20L%C3%BD%20T%E1%BB%B1%20Tr%E1%BB%8Dng%2C%20Qu%E1%BA%ADn%201%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Quận 1. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Mưa Hồng 4",
    "type": "Khác",
    "location": "98 Lê Thánh Tôn, Quận 1, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20M%C6%B0a%20H%E1%BB%93ng%204%2098%20L%C3%AA%20Th%C3%A1nh%20T%C3%B4n%2C%20Qu%E1%BA%ADn%201%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Quận 1. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Bà Năm 5",
    "type": "Khác",
    "location": "365 Hàm Nghi, Quận 1, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20B%C3%A0%20N%C4%83m%205%20365%20H%C3%A0m%20Nghi%2C%20Qu%E1%BA%ADn%201%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Quận 1. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Sông Trăng",
    "type": "Phở",
    "location": "153 Võ Văn Tần, Quận 3, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20S%C3%B4ng%20Tr%C4%83ng%20153%20V%C3%B5%20V%C4%83n%20T%E1%BA%A7n%2C%20Qu%E1%BA%ADn%203%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Quận 3. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Nam Hải 2",
    "type": "Phở",
    "location": "303 Lê Quý Đôn, Quận 3, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20Nam%20H%E1%BA%A3i%202%20303%20L%C3%AA%20Qu%C3%BD%20%C4%90%C3%B4n%2C%20Qu%E1%BA%ADn%203%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Quận 3. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Thái Bình 3",
    "type": "Phở",
    "location": "405 Lê Quý Đôn, Quận 3, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20Th%C3%A1i%20B%C3%ACnh%203%20405%20L%C3%AA%20Qu%C3%BD%20%C4%90%C3%B4n%2C%20Qu%E1%BA%ADn%203%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Quận 3. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Gia Đình 4",
    "type": "Phở",
    "location": "369 Điện Biên Phủ, Quận 3, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20Gia%20%C4%90%C3%ACnh%204%20369%20%C4%90i%E1%BB%87n%20Bi%C3%AAn%20Ph%E1%BB%A7%2C%20Qu%E1%BA%ADn%203%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Quận 3. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Hào Hùng 5",
    "type": "Phở",
    "location": "361 Nguyễn Đình Chiểu, Quận 3, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20H%C3%A0o%20H%C3%B9ng%205%20361%20Nguy%E1%BB%85n%20%C4%90%C3%ACnh%20Chi%E1%BB%83u%2C%20Qu%E1%BA%ADn%203%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Quận 3. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Viet Kitchen",
    "type": "Bún",
    "location": "245 Lê Quý Đôn, Quận 3, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20Viet%20Kitchen%20245%20L%C3%AA%20Qu%C3%BD%20%C4%90%C3%B4n%2C%20Qu%E1%BA%ADn%203%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Quận 3. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Hồng Phát 2",
    "type": "Bún",
    "location": "445 Điện Biên Phủ, Quận 3, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20H%E1%BB%93ng%20Ph%C3%A1t%202%20445%20%C4%90i%E1%BB%87n%20Bi%C3%AAn%20Ph%E1%BB%A7%2C%20Qu%E1%BA%ADn%203%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Quận 3. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Thanh Xuân 3",
    "type": "Bún",
    "location": "278 Điện Biên Phủ, Quận 3, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20Thanh%20Xu%C3%A2n%203%20278%20%C4%90i%E1%BB%87n%20Bi%C3%AAn%20Ph%E1%BB%A7%2C%20Qu%E1%BA%ADn%203%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Quận 3. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Nam Hải 4",
    "type": "Bún",
    "location": "475 Nguyễn Đình Chiểu, Quận 3, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20Nam%20H%E1%BA%A3i%204%20475%20Nguy%E1%BB%85n%20%C4%90%C3%ACnh%20Chi%E1%BB%83u%2C%20Qu%E1%BA%ADn%203%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Quận 3. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Local Taste 5",
    "type": "Bún",
    "location": "178 Nguyễn Đình Chiểu, Quận 3, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20Local%20Taste%205%20178%20Nguy%E1%BB%85n%20%C4%90%C3%ACnh%20Chi%E1%BB%83u%2C%20Qu%E1%BA%ADn%203%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Quận 3. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Hoàn Kiếm",
    "type": "Cơm",
    "location": "11 Pasteur, Quận 3, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20Ho%C3%A0n%20Ki%E1%BA%BFm%2011%20Pasteur%2C%20Qu%E1%BA%ADn%203%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Quận 3. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Hồng Phát 2",
    "type": "Cơm",
    "location": "110 Lê Quý Đôn, Quận 3, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20H%E1%BB%93ng%20Ph%C3%A1t%202%20110%20L%C3%AA%20Qu%C3%BD%20%C4%90%C3%B4n%2C%20Qu%E1%BA%ADn%203%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Quận 3. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Mưa Hồng 3",
    "type": "Cơm",
    "location": "287 Nguyễn Đình Chiểu, Quận 3, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20M%C6%B0a%20H%E1%BB%93ng%203%20287%20Nguy%E1%BB%85n%20%C4%90%C3%ACnh%20Chi%E1%BB%83u%2C%20Qu%E1%BA%ADn%203%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Quận 3. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Đệ Nhất 4",
    "type": "Cơm",
    "location": "346 Pasteur, Quận 3, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20%C4%90%E1%BB%87%20Nh%E1%BA%A5t%204%20346%20Pasteur%2C%20Qu%E1%BA%ADn%203%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Quận 3. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Cô Ba 5",
    "type": "Cơm",
    "location": "455 Võ Văn Tần, Quận 3, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20C%C3%B4%20Ba%205%20455%20V%C3%B5%20V%C4%83n%20T%E1%BA%A7n%2C%20Qu%E1%BA%ADn%203%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Quận 3. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Cô Ba",
    "type": "Lẩu",
    "location": "136 Điện Biên Phủ, Quận 3, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20C%C3%B4%20Ba%20136%20%C4%90i%E1%BB%87n%20Bi%C3%AAn%20Ph%E1%BB%A7%2C%20Qu%E1%BA%ADn%203%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Quận 3. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Nắng Vàng 2",
    "type": "Lẩu",
    "location": "447 Nguyễn Đình Chiểu, Quận 3, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20N%E1%BA%AFng%20V%C3%A0ng%202%20447%20Nguy%E1%BB%85n%20%C4%90%C3%ACnh%20Chi%E1%BB%83u%2C%20Qu%E1%BA%ADn%203%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Quận 3. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Phố Hội 3",
    "type": "Lẩu",
    "location": "180 Võ Văn Tần, Quận 3, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20Ph%E1%BB%91%20H%E1%BB%99i%203%20180%20V%C3%B5%20V%C4%83n%20T%E1%BA%A7n%2C%20Qu%E1%BA%ADn%203%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Quận 3. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Mưa Hồng 4",
    "type": "Lẩu",
    "location": "24 Pasteur, Quận 3, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20M%C6%B0a%20H%E1%BB%93ng%204%2024%20Pasteur%2C%20Qu%E1%BA%ADn%203%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Quận 3. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Bà Năm 5",
    "type": "Lẩu",
    "location": "132 Điện Biên Phủ, Quận 3, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20B%C3%A0%20N%C4%83m%205%20132%20%C4%90i%E1%BB%87n%20Bi%C3%AAn%20Ph%E1%BB%A7%2C%20Qu%E1%BA%ADn%203%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Quận 3. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Đồng Quê",
    "type": "Đồ chay",
    "location": "325 Võ Văn Tần, Quận 3, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20%C4%90%E1%BB%93ng%20Qu%C3%AA%20325%20V%C3%B5%20V%C4%83n%20T%E1%BA%A7n%2C%20Qu%E1%BA%ADn%203%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Quận 3. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Cô Ba 2",
    "type": "Đồ chay",
    "location": "342 Điện Biên Phủ, Quận 3, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20C%C3%B4%20Ba%202%20342%20%C4%90i%E1%BB%87n%20Bi%C3%AAn%20Ph%E1%BB%A7%2C%20Qu%E1%BA%ADn%203%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Quận 3. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Sông Trăng 3",
    "type": "Đồ chay",
    "location": "155 Pasteur, Quận 3, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20S%C3%B4ng%20Tr%C4%83ng%203%20155%20Pasteur%2C%20Qu%E1%BA%ADn%203%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Quận 3. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Dì Liên 4",
    "type": "Đồ chay",
    "location": "95 Điện Biên Phủ, Quận 3, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20D%C3%AC%20Li%C3%AAn%204%2095%20%C4%90i%E1%BB%87n%20Bi%C3%AAn%20Ph%E1%BB%A7%2C%20Qu%E1%BA%ADn%203%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Quận 3. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Ông Già 5",
    "type": "Đồ chay",
    "location": "76 Võ Văn Tần, Quận 3, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20%C3%94ng%20Gi%C3%A0%205%2076%20V%C3%B5%20V%C4%83n%20T%E1%BA%A7n%2C%20Qu%E1%BA%ADn%203%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Quận 3. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Local Taste",
    "type": "Bánh mì",
    "location": "459 Lê Quý Đôn, Quận 3, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20Local%20Taste%20459%20L%C3%AA%20Qu%C3%BD%20%C4%90%C3%B4n%2C%20Qu%E1%BA%ADn%203%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Quận 3. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Bà Năm 2",
    "type": "Bánh mì",
    "location": "15 Pasteur, Quận 3, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20B%C3%A0%20N%C4%83m%202%2015%20Pasteur%2C%20Qu%E1%BA%ADn%203%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Quận 3. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Hào Hùng 3",
    "type": "Bánh mì",
    "location": "124 Nguyễn Đình Chiểu, Quận 3, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20H%C3%A0o%20H%C3%B9ng%203%20124%20Nguy%E1%BB%85n%20%C4%90%C3%ACnh%20Chi%E1%BB%83u%2C%20Qu%E1%BA%ADn%203%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Quận 3. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Kim Anh 4",
    "type": "Bánh mì",
    "location": "261 Điện Biên Phủ, Quận 3, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20Kim%20Anh%204%20261%20%C4%90i%E1%BB%87n%20Bi%C3%AAn%20Ph%E1%BB%A7%2C%20Qu%E1%BA%ADn%203%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Quận 3. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Minh Khai 5",
    "type": "Bánh mì",
    "location": "34 Nguyễn Đình Chiểu, Quận 3, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20Minh%20Khai%205%2034%20Nguy%E1%BB%85n%20%C4%90%C3%ACnh%20Chi%E1%BB%83u%2C%20Qu%E1%BA%ADn%203%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Quận 3. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Hào Hùng",
    "type": "Ăn vặt",
    "location": "172 Võ Văn Tần, Quận 3, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20H%C3%A0o%20H%C3%B9ng%20172%20V%C3%B5%20V%C4%83n%20T%E1%BA%A7n%2C%20Qu%E1%BA%ADn%203%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Quận 3. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Đông Á 2",
    "type": "Ăn vặt",
    "location": "192 Pasteur, Quận 3, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20%C4%90%C3%B4ng%20%C3%81%202%20192%20Pasteur%2C%20Qu%E1%BA%ADn%203%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Quận 3. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Thái Bình 3",
    "type": "Ăn vặt",
    "location": "328 Nguyễn Đình Chiểu, Quận 3, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20Th%C3%A1i%20B%C3%ACnh%203%20328%20Nguy%E1%BB%85n%20%C4%90%C3%ACnh%20Chi%E1%BB%83u%2C%20Qu%E1%BA%ADn%203%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Quận 3. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Đệ Nhất 4",
    "type": "Ăn vặt",
    "location": "332 Pasteur, Quận 3, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20%C4%90%E1%BB%87%20Nh%E1%BA%A5t%204%20332%20Pasteur%2C%20Qu%E1%BA%ADn%203%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Quận 3. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Local Taste 5",
    "type": "Ăn vặt",
    "location": "83 Điện Biên Phủ, Quận 3, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20Local%20Taste%205%2083%20%C4%90i%E1%BB%87n%20Bi%C3%AAn%20Ph%E1%BB%A7%2C%20Qu%E1%BA%ADn%203%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Quận 3. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Nắng Vàng",
    "type": "Bánh cuốn",
    "location": "165 Nguyễn Đình Chiểu, Quận 3, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20N%E1%BA%AFng%20V%C3%A0ng%20165%20Nguy%E1%BB%85n%20%C4%90%C3%ACnh%20Chi%E1%BB%83u%2C%20Qu%E1%BA%ADn%203%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Quận 3. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Hào Hùng 2",
    "type": "Bánh cuốn",
    "location": "286 Điện Biên Phủ, Quận 3, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20H%C3%A0o%20H%C3%B9ng%202%20286%20%C4%90i%E1%BB%87n%20Bi%C3%AAn%20Ph%E1%BB%A7%2C%20Qu%E1%BA%ADn%203%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Quận 3. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Mưa Hồng 3",
    "type": "Bánh cuốn",
    "location": "419 Điện Biên Phủ, Quận 3, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20M%C6%B0a%20H%E1%BB%93ng%203%20419%20%C4%90i%E1%BB%87n%20Bi%C3%AAn%20Ph%E1%BB%A7%2C%20Qu%E1%BA%ADn%203%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Quận 3. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Local Taste 4",
    "type": "Bánh cuốn",
    "location": "296 Nguyễn Đình Chiểu, Quận 3, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20Local%20Taste%204%20296%20Nguy%E1%BB%85n%20%C4%90%C3%ACnh%20Chi%E1%BB%83u%2C%20Qu%E1%BA%ADn%203%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Quận 3. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Anh Tư 5",
    "type": "Bánh cuốn",
    "location": "397 Pasteur, Quận 3, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20Anh%20T%C6%B0%205%20397%20Pasteur%2C%20Qu%E1%BA%ADn%203%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Quận 3. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Hào Hùng",
    "type": "Bún đậu",
    "location": "156 Nguyễn Đình Chiểu, Quận 3, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20H%C3%A0o%20H%C3%B9ng%20156%20Nguy%E1%BB%85n%20%C4%90%C3%ACnh%20Chi%E1%BB%83u%2C%20Qu%E1%BA%ADn%203%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Quận 3. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Ngọc Lan 2",
    "type": "Bún đậu",
    "location": "93 Điện Biên Phủ, Quận 3, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20Ng%E1%BB%8Dc%20Lan%202%2093%20%C4%90i%E1%BB%87n%20Bi%C3%AAn%20Ph%E1%BB%A7%2C%20Qu%E1%BA%ADn%203%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Quận 3. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Thái Bình 3",
    "type": "Bún đậu",
    "location": "487 Võ Văn Tần, Quận 3, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20Th%C3%A1i%20B%C3%ACnh%203%20487%20V%C3%B5%20V%C4%83n%20T%E1%BA%A7n%2C%20Qu%E1%BA%ADn%203%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Quận 3. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Bến Thành 4",
    "type": "Bún đậu",
    "location": "49 Pasteur, Quận 3, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20B%E1%BA%BFn%20Th%C3%A0nh%204%2049%20Pasteur%2C%20Qu%E1%BA%ADn%203%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Quận 3. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Hào Hùng 5",
    "type": "Bún đậu",
    "location": "419 Điện Biên Phủ, Quận 3, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20H%C3%A0o%20H%C3%B9ng%205%20419%20%C4%90i%E1%BB%87n%20Bi%C3%AAn%20Ph%E1%BB%A7%2C%20Qu%E1%BA%ADn%203%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Quận 3. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Sông Trăng",
    "type": "Hải sản",
    "location": "487 Pasteur, Quận 3, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20S%C3%B4ng%20Tr%C4%83ng%20487%20Pasteur%2C%20Qu%E1%BA%ADn%203%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Quận 3. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Anh Tư 2",
    "type": "Hải sản",
    "location": "416 Điện Biên Phủ, Quận 3, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20Anh%20T%C6%B0%202%20416%20%C4%90i%E1%BB%87n%20Bi%C3%AAn%20Ph%E1%BB%A7%2C%20Qu%E1%BA%ADn%203%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Quận 3. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Minh Khai 3",
    "type": "Hải sản",
    "location": "374 Lê Quý Đôn, Quận 3, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20Minh%20Khai%203%20374%20L%C3%AA%20Qu%C3%BD%20%C4%90%C3%B4n%2C%20Qu%E1%BA%ADn%203%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Quận 3. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Vĩnh Lộc 4",
    "type": "Hải sản",
    "location": "236 Võ Văn Tần, Quận 3, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20V%C4%A9nh%20L%E1%BB%99c%204%20236%20V%C3%B5%20V%C4%83n%20T%E1%BA%A7n%2C%20Qu%E1%BA%ADn%203%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Quận 3. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Gia Đình 5",
    "type": "Hải sản",
    "location": "92 Võ Văn Tần, Quận 3, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20Gia%20%C4%90%C3%ACnh%205%2092%20V%C3%B5%20V%C4%83n%20T%E1%BA%A7n%2C%20Qu%E1%BA%ADn%203%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Quận 3. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Gia Đình",
    "type": "Ốc",
    "location": "475 Lê Quý Đôn, Quận 3, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20Gia%20%C4%90%C3%ACnh%20475%20L%C3%AA%20Qu%C3%BD%20%C4%90%C3%B4n%2C%20Qu%E1%BA%ADn%203%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Quận 3. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Xưa & Nay 2",
    "type": "Ốc",
    "location": "369 Pasteur, Quận 3, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20X%C6%B0a%20%26%20Nay%202%20369%20Pasteur%2C%20Qu%E1%BA%ADn%203%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Quận 3. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Cô Ba 3",
    "type": "Ốc",
    "location": "150 Pasteur, Quận 3, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20C%C3%B4%20Ba%203%20150%20Pasteur%2C%20Qu%E1%BA%ADn%203%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Quận 3. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Thanh Đa 4",
    "type": "Ốc",
    "location": "364 Nguyễn Đình Chiểu, Quận 3, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20Thanh%20%C4%90a%204%20364%20Nguy%E1%BB%85n%20%C4%90%C3%ACnh%20Chi%E1%BB%83u%2C%20Qu%E1%BA%ADn%203%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Quận 3. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Vĩnh Lộc 5",
    "type": "Ốc",
    "location": "478 Nguyễn Đình Chiểu, Quận 3, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20V%C4%A9nh%20L%E1%BB%99c%205%20478%20Nguy%E1%BB%85n%20%C4%90%C3%ACnh%20Chi%E1%BB%83u%2C%20Qu%E1%BA%ADn%203%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Quận 3. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Bến Thành",
    "type": "Mì",
    "location": "399 Nguyễn Đình Chiểu, Quận 3, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20B%E1%BA%BFn%20Th%C3%A0nh%20399%20Nguy%E1%BB%85n%20%C4%90%C3%ACnh%20Chi%E1%BB%83u%2C%20Qu%E1%BA%ADn%203%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Quận 3. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Đông Á 2",
    "type": "Mì",
    "location": "262 Lê Quý Đôn, Quận 3, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20%C4%90%C3%B4ng%20%C3%81%202%20262%20L%C3%AA%20Qu%C3%BD%20%C4%90%C3%B4n%2C%20Qu%E1%BA%ADn%203%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Quận 3. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Phố Hội 3",
    "type": "Mì",
    "location": "435 Pasteur, Quận 3, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20Ph%E1%BB%91%20H%E1%BB%99i%203%20435%20Pasteur%2C%20Qu%E1%BA%ADn%203%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Quận 3. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Chú Bảy 4",
    "type": "Mì",
    "location": "135 Điện Biên Phủ, Quận 3, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20Ch%C3%BA%20B%E1%BA%A3y%204%20135%20%C4%90i%E1%BB%87n%20Bi%C3%AAn%20Ph%E1%BB%A7%2C%20Qu%E1%BA%ADn%203%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Quận 3. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Phố Hội 5",
    "type": "Mì",
    "location": "259 Nguyễn Đình Chiểu, Quận 3, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20Ph%E1%BB%91%20H%E1%BB%99i%205%20259%20Nguy%E1%BB%85n%20%C4%90%C3%ACnh%20Chi%E1%BB%83u%2C%20Qu%E1%BA%ADn%203%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Quận 3. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Bà Năm",
    "type": "Hủ tiếu",
    "location": "302 Pasteur, Quận 3, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20B%C3%A0%20N%C4%83m%20302%20Pasteur%2C%20Qu%E1%BA%ADn%203%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Quận 3. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Nam Hải 2",
    "type": "Hủ tiếu",
    "location": "127 Pasteur, Quận 3, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20Nam%20H%E1%BA%A3i%202%20127%20Pasteur%2C%20Qu%E1%BA%ADn%203%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Quận 3. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Xưa & Nay 3",
    "type": "Hủ tiếu",
    "location": "267 Pasteur, Quận 3, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20X%C6%B0a%20%26%20Nay%203%20267%20Pasteur%2C%20Qu%E1%BA%ADn%203%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Quận 3. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Sài Thành 4",
    "type": "Hủ tiếu",
    "location": "461 Võ Văn Tần, Quận 3, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20S%C3%A0i%20Th%C3%A0nh%204%20461%20V%C3%B5%20V%C4%83n%20T%E1%BA%A7n%2C%20Qu%E1%BA%ADn%203%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Quận 3. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Xưa & Nay 5",
    "type": "Hủ tiếu",
    "location": "406 Nguyễn Đình Chiểu, Quận 3, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20X%C6%B0a%20%26%20Nay%205%20406%20Nguy%E1%BB%85n%20%C4%90%C3%ACnh%20Chi%E1%BB%83u%2C%20Qu%E1%BA%ADn%203%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Quận 3. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Hương Việt",
    "type": "Đồ nướng",
    "location": "450 Nguyễn Đình Chiểu, Quận 3, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20H%C6%B0%C6%A1ng%20Vi%E1%BB%87t%20450%20Nguy%E1%BB%85n%20%C4%90%C3%ACnh%20Chi%E1%BB%83u%2C%20Qu%E1%BA%ADn%203%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Quận 3. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Hoàn Kiếm 2",
    "type": "Đồ nướng",
    "location": "459 Võ Văn Tần, Quận 3, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20Ho%C3%A0n%20Ki%E1%BA%BFm%202%20459%20V%C3%B5%20V%C4%83n%20T%E1%BA%A7n%2C%20Qu%E1%BA%ADn%203%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Quận 3. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Hoàn Kiếm 3",
    "type": "Đồ nướng",
    "location": "13 Pasteur, Quận 3, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20Ho%C3%A0n%20Ki%E1%BA%BFm%203%2013%20Pasteur%2C%20Qu%E1%BA%ADn%203%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Quận 3. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Mưa Hồng 4",
    "type": "Đồ nướng",
    "location": "198 Lê Quý Đôn, Quận 3, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20M%C6%B0a%20H%E1%BB%93ng%204%20198%20L%C3%AA%20Qu%C3%BD%20%C4%90%C3%B4n%2C%20Qu%E1%BA%ADn%203%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Quận 3. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Đông Á 5",
    "type": "Đồ nướng",
    "location": "337 Điện Biên Phủ, Quận 3, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20%C4%90%C3%B4ng%20%C3%81%205%20337%20%C4%90i%E1%BB%87n%20Bi%C3%AAn%20Ph%E1%BB%A7%2C%20Qu%E1%BA%ADn%203%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Quận 3. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Nắng Vàng",
    "type": "Nước & Cafe",
    "location": "10 Nguyễn Đình Chiểu, Quận 3, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20N%E1%BA%AFng%20V%C3%A0ng%2010%20Nguy%E1%BB%85n%20%C4%90%C3%ACnh%20Chi%E1%BB%83u%2C%20Qu%E1%BA%ADn%203%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Quận 3. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Hào Hùng 2",
    "type": "Nước & Cafe",
    "location": "289 Điện Biên Phủ, Quận 3, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20H%C3%A0o%20H%C3%B9ng%202%20289%20%C4%90i%E1%BB%87n%20Bi%C3%AAn%20Ph%E1%BB%A7%2C%20Qu%E1%BA%ADn%203%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Quận 3. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Vĩnh Lộc 3",
    "type": "Nước & Cafe",
    "location": "257 Võ Văn Tần, Quận 3, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20V%C4%A9nh%20L%E1%BB%99c%203%20257%20V%C3%B5%20V%C4%83n%20T%E1%BA%A7n%2C%20Qu%E1%BA%ADn%203%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Quận 3. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Vĩnh Lộc 4",
    "type": "Nước & Cafe",
    "location": "199 Điện Biên Phủ, Quận 3, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20V%C4%A9nh%20L%E1%BB%99c%204%20199%20%C4%90i%E1%BB%87n%20Bi%C3%AAn%20Ph%E1%BB%A7%2C%20Qu%E1%BA%ADn%203%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Quận 3. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Bến Thành 5",
    "type": "Nước & Cafe",
    "location": "417 Nguyễn Đình Chiểu, Quận 3, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20B%E1%BA%BFn%20Th%C3%A0nh%205%20417%20Nguy%E1%BB%85n%20%C4%90%C3%ACnh%20Chi%E1%BB%83u%2C%20Qu%E1%BA%ADn%203%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Quận 3. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Hương Việt",
    "type": "Chè",
    "location": "265 Pasteur, Quận 3, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20H%C6%B0%C6%A1ng%20Vi%E1%BB%87t%20265%20Pasteur%2C%20Qu%E1%BA%ADn%203%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Quận 3. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Xưa & Nay 2",
    "type": "Chè",
    "location": "446 Điện Biên Phủ, Quận 3, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20X%C6%B0a%20%26%20Nay%202%20446%20%C4%90i%E1%BB%87n%20Bi%C3%AAn%20Ph%E1%BB%A7%2C%20Qu%E1%BA%ADn%203%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Quận 3. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Hào Hùng 3",
    "type": "Chè",
    "location": "395 Pasteur, Quận 3, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20H%C3%A0o%20H%C3%B9ng%203%20395%20Pasteur%2C%20Qu%E1%BA%ADn%203%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Quận 3. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Đệ Nhất 4",
    "type": "Chè",
    "location": "380 Nguyễn Đình Chiểu, Quận 3, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20%C4%90%E1%BB%87%20Nh%E1%BA%A5t%204%20380%20Nguy%E1%BB%85n%20%C4%90%C3%ACnh%20Chi%E1%BB%83u%2C%20Qu%E1%BA%ADn%203%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Quận 3. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Bà Năm 5",
    "type": "Chè",
    "location": "197 Lê Quý Đôn, Quận 3, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20B%C3%A0%20N%C4%83m%205%20197%20L%C3%AA%20Qu%C3%BD%20%C4%90%C3%B4n%2C%20Qu%E1%BA%ADn%203%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Quận 3. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Nam Hải",
    "type": "Bánh xèo",
    "location": "459 Điện Biên Phủ, Quận 3, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20Nam%20H%E1%BA%A3i%20459%20%C4%90i%E1%BB%87n%20Bi%C3%AAn%20Ph%E1%BB%A7%2C%20Qu%E1%BA%ADn%203%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Quận 3. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Saigon Deli 2",
    "type": "Bánh xèo",
    "location": "455 Điện Biên Phủ, Quận 3, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20Saigon%20Deli%202%20455%20%C4%90i%E1%BB%87n%20Bi%C3%AAn%20Ph%E1%BB%A7%2C%20Qu%E1%BA%ADn%203%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Quận 3. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Thanh Xuân 3",
    "type": "Bánh xèo",
    "location": "173 Lê Quý Đôn, Quận 3, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20Thanh%20Xu%C3%A2n%203%20173%20L%C3%AA%20Qu%C3%BD%20%C4%90%C3%B4n%2C%20Qu%E1%BA%ADn%203%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Quận 3. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Ông Già 4",
    "type": "Bánh xèo",
    "location": "324 Lê Quý Đôn, Quận 3, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20%C3%94ng%20Gi%C3%A0%204%20324%20L%C3%AA%20Qu%C3%BD%20%C4%90%C3%B4n%2C%20Qu%E1%BA%ADn%203%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Quận 3. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Sài Thành 5",
    "type": "Bánh xèo",
    "location": "195 Pasteur, Quận 3, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20S%C3%A0i%20Th%C3%A0nh%205%20195%20Pasteur%2C%20Qu%E1%BA%ADn%203%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Quận 3. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Kim Anh",
    "type": "Khác",
    "location": "153 Nguyễn Đình Chiểu, Quận 3, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20Kim%20Anh%20153%20Nguy%E1%BB%85n%20%C4%90%C3%ACnh%20Chi%E1%BB%83u%2C%20Qu%E1%BA%ADn%203%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Quận 3. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Dì Liên 2",
    "type": "Khác",
    "location": "196 Lê Quý Đôn, Quận 3, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20D%C3%AC%20Li%C3%AAn%202%20196%20L%C3%AA%20Qu%C3%BD%20%C4%90%C3%B4n%2C%20Qu%E1%BA%ADn%203%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Quận 3. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Đông Á 3",
    "type": "Khác",
    "location": "82 Võ Văn Tần, Quận 3, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20%C4%90%C3%B4ng%20%C3%81%203%2082%20V%C3%B5%20V%C4%83n%20T%E1%BA%A7n%2C%20Qu%E1%BA%ADn%203%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Quận 3. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Ngọc Lan 4",
    "type": "Khác",
    "location": "91 Lê Quý Đôn, Quận 3, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20Ng%E1%BB%8Dc%20Lan%204%2091%20L%C3%AA%20Qu%C3%BD%20%C4%90%C3%B4n%2C%20Qu%E1%BA%ADn%203%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Quận 3. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Sông Trăng 5",
    "type": "Khác",
    "location": "149 Nguyễn Đình Chiểu, Quận 3, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20S%C3%B4ng%20Tr%C4%83ng%205%20149%20Nguy%E1%BB%85n%20%C4%90%C3%ACnh%20Chi%E1%BB%83u%2C%20Qu%E1%BA%ADn%203%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Quận 3. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Đông Á",
    "type": "Phở",
    "location": "231 Tôn Đản, Quận 4, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20%C4%90%C3%B4ng%20%C3%81%20231%20T%C3%B4n%20%C4%90%E1%BA%A3n%2C%20Qu%E1%BA%ADn%204%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Quận 4. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Dì Liên 2",
    "type": "Phở",
    "location": "126 Vĩnh Khánh, Quận 4, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20D%C3%AC%20Li%C3%AAn%202%20126%20V%C4%A9nh%20Kh%C3%A1nh%2C%20Qu%E1%BA%ADn%204%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Quận 4. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Thanh Xuân 3",
    "type": "Phở",
    "location": "484 Đoàn Văn Bơ, Quận 4, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20Thanh%20Xu%C3%A2n%203%20484%20%C4%90o%C3%A0n%20V%C4%83n%20B%C6%A1%2C%20Qu%E1%BA%ADn%204%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Quận 4. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Gia Đình 4",
    "type": "Phở",
    "location": "277 Bến Vân Đồn, Quận 4, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20Gia%20%C4%90%C3%ACnh%204%20277%20B%E1%BA%BFn%20V%C3%A2n%20%C4%90%E1%BB%93n%2C%20Qu%E1%BA%ADn%204%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Quận 4. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Hào Hùng 5",
    "type": "Phở",
    "location": "485 Tôn Đản, Quận 4, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20H%C3%A0o%20H%C3%B9ng%205%20485%20T%C3%B4n%20%C4%90%E1%BA%A3n%2C%20Qu%E1%BA%ADn%204%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Quận 4. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Dì Liên",
    "type": "Bún",
    "location": "337 Tôn Đản, Quận 4, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20D%C3%AC%20Li%C3%AAn%20337%20T%C3%B4n%20%C4%90%E1%BA%A3n%2C%20Qu%E1%BA%ADn%204%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Quận 4. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Local Taste 2",
    "type": "Bún",
    "location": "187 Hoàng Diệu, Quận 4, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20Local%20Taste%202%20187%20Ho%C3%A0ng%20Di%E1%BB%87u%2C%20Qu%E1%BA%ADn%204%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Quận 4. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Vĩnh Lộc 3",
    "type": "Bún",
    "location": "21 Đoàn Văn Bơ, Quận 4, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20V%C4%A9nh%20L%E1%BB%99c%203%2021%20%C4%90o%C3%A0n%20V%C4%83n%20B%C6%A1%2C%20Qu%E1%BA%ADn%204%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Quận 4. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Mưa Hồng 4",
    "type": "Bún",
    "location": "127 Tôn Đản, Quận 4, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20M%C6%B0a%20H%E1%BB%93ng%204%20127%20T%C3%B4n%20%C4%90%E1%BA%A3n%2C%20Qu%E1%BA%ADn%204%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Quận 4. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Local Taste 5",
    "type": "Bún",
    "location": "398 Hoàng Diệu, Quận 4, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20Local%20Taste%205%20398%20Ho%C3%A0ng%20Di%E1%BB%87u%2C%20Qu%E1%BA%ADn%204%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Quận 4. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Thanh Đa",
    "type": "Cơm",
    "location": "281 Đoàn Văn Bơ, Quận 4, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20Thanh%20%C4%90a%20281%20%C4%90o%C3%A0n%20V%C4%83n%20B%C6%A1%2C%20Qu%E1%BA%ADn%204%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Quận 4. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Anh Tư 2",
    "type": "Cơm",
    "location": "475 Tôn Đản, Quận 4, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20Anh%20T%C6%B0%202%20475%20T%C3%B4n%20%C4%90%E1%BA%A3n%2C%20Qu%E1%BA%ADn%204%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Quận 4. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Nắng Vàng 3",
    "type": "Cơm",
    "location": "272 Tôn Đản, Quận 4, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20N%E1%BA%AFng%20V%C3%A0ng%203%20272%20T%C3%B4n%20%C4%90%E1%BA%A3n%2C%20Qu%E1%BA%ADn%204%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Quận 4. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Cô Ba 4",
    "type": "Cơm",
    "location": "408 Vĩnh Khánh, Quận 4, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20C%C3%B4%20Ba%204%20408%20V%C4%A9nh%20Kh%C3%A1nh%2C%20Qu%E1%BA%ADn%204%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Quận 4. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Hào Hùng 5",
    "type": "Cơm",
    "location": "310 Bến Vân Đồn, Quận 4, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20H%C3%A0o%20H%C3%B9ng%205%20310%20B%E1%BA%BFn%20V%C3%A2n%20%C4%90%E1%BB%93n%2C%20Qu%E1%BA%ADn%204%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Quận 4. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Dì Liên",
    "type": "Lẩu",
    "location": "312 Bến Vân Đồn, Quận 4, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20D%C3%AC%20Li%C3%AAn%20312%20B%E1%BA%BFn%20V%C3%A2n%20%C4%90%E1%BB%93n%2C%20Qu%E1%BA%ADn%204%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Quận 4. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Kim Anh 2",
    "type": "Lẩu",
    "location": "475 Bến Vân Đồn, Quận 4, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20Kim%20Anh%202%20475%20B%E1%BA%BFn%20V%C3%A2n%20%C4%90%E1%BB%93n%2C%20Qu%E1%BA%ADn%204%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Quận 4. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Thanh Xuân 3",
    "type": "Lẩu",
    "location": "160 Hoàng Diệu, Quận 4, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20Thanh%20Xu%C3%A2n%203%20160%20Ho%C3%A0ng%20Di%E1%BB%87u%2C%20Qu%E1%BA%ADn%204%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Quận 4. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Cô Ba 4",
    "type": "Lẩu",
    "location": "477 Tôn Đản, Quận 4, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20C%C3%B4%20Ba%204%20477%20T%C3%B4n%20%C4%90%E1%BA%A3n%2C%20Qu%E1%BA%ADn%204%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Quận 4. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Phố Hội 5",
    "type": "Lẩu",
    "location": "182 Bến Vân Đồn, Quận 4, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20Ph%E1%BB%91%20H%E1%BB%99i%205%20182%20B%E1%BA%BFn%20V%C3%A2n%20%C4%90%E1%BB%93n%2C%20Qu%E1%BA%ADn%204%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Quận 4. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Viet Kitchen",
    "type": "Đồ chay",
    "location": "488 Tôn Đản, Quận 4, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20Viet%20Kitchen%20488%20T%C3%B4n%20%C4%90%E1%BA%A3n%2C%20Qu%E1%BA%ADn%204%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Quận 4. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Viet Kitchen 2",
    "type": "Đồ chay",
    "location": "494 Hoàng Diệu, Quận 4, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20Viet%20Kitchen%202%20494%20Ho%C3%A0ng%20Di%E1%BB%87u%2C%20Qu%E1%BA%ADn%204%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Quận 4. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Đồng Quê 3",
    "type": "Đồ chay",
    "location": "303 Hoàng Diệu, Quận 4, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20%C4%90%E1%BB%93ng%20Qu%C3%AA%203%20303%20Ho%C3%A0ng%20Di%E1%BB%87u%2C%20Qu%E1%BA%ADn%204%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Quận 4. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Kim Anh 4",
    "type": "Đồ chay",
    "location": "215 Đoàn Văn Bơ, Quận 4, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20Kim%20Anh%204%20215%20%C4%90o%C3%A0n%20V%C4%83n%20B%C6%A1%2C%20Qu%E1%BA%ADn%204%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Quận 4. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Kim Anh 5",
    "type": "Đồ chay",
    "location": "178 Hoàng Diệu, Quận 4, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20Kim%20Anh%205%20178%20Ho%C3%A0ng%20Di%E1%BB%87u%2C%20Qu%E1%BA%ADn%204%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Quận 4. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Minh Khai",
    "type": "Bánh mì",
    "location": "196 Tôn Đản, Quận 4, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20Minh%20Khai%20196%20T%C3%B4n%20%C4%90%E1%BA%A3n%2C%20Qu%E1%BA%ADn%204%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Quận 4. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Phố Hội 2",
    "type": "Bánh mì",
    "location": "201 Vĩnh Khánh, Quận 4, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20Ph%E1%BB%91%20H%E1%BB%99i%202%20201%20V%C4%A9nh%20Kh%C3%A1nh%2C%20Qu%E1%BA%ADn%204%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Quận 4. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Kim Anh 3",
    "type": "Bánh mì",
    "location": "130 Tôn Đản, Quận 4, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20Kim%20Anh%203%20130%20T%C3%B4n%20%C4%90%E1%BA%A3n%2C%20Qu%E1%BA%ADn%204%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Quận 4. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Đông Á 4",
    "type": "Bánh mì",
    "location": "389 Đoàn Văn Bơ, Quận 4, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20%C4%90%C3%B4ng%20%C3%81%204%20389%20%C4%90o%C3%A0n%20V%C4%83n%20B%C6%A1%2C%20Qu%E1%BA%ADn%204%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Quận 4. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Kim Anh 5",
    "type": "Bánh mì",
    "location": "282 Đoàn Văn Bơ, Quận 4, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20Kim%20Anh%205%20282%20%C4%90o%C3%A0n%20V%C4%83n%20B%C6%A1%2C%20Qu%E1%BA%ADn%204%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Quận 4. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Kim Anh",
    "type": "Ăn vặt",
    "location": "161 Vĩnh Khánh, Quận 4, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20Kim%20Anh%20161%20V%C4%A9nh%20Kh%C3%A1nh%2C%20Qu%E1%BA%ADn%204%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Quận 4. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Ông Già 2",
    "type": "Ăn vặt",
    "location": "148 Hoàng Diệu, Quận 4, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20%C3%94ng%20Gi%C3%A0%202%20148%20Ho%C3%A0ng%20Di%E1%BB%87u%2C%20Qu%E1%BA%ADn%204%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Quận 4. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Nắng Vàng 3",
    "type": "Ăn vặt",
    "location": "444 Đoàn Văn Bơ, Quận 4, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20N%E1%BA%AFng%20V%C3%A0ng%203%20444%20%C4%90o%C3%A0n%20V%C4%83n%20B%C6%A1%2C%20Qu%E1%BA%ADn%204%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Quận 4. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Kim Anh 4",
    "type": "Ăn vặt",
    "location": "411 Đoàn Văn Bơ, Quận 4, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20Kim%20Anh%204%20411%20%C4%90o%C3%A0n%20V%C4%83n%20B%C6%A1%2C%20Qu%E1%BA%ADn%204%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Quận 4. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Local Taste 5",
    "type": "Ăn vặt",
    "location": "209 Vĩnh Khánh, Quận 4, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20Local%20Taste%205%20209%20V%C4%A9nh%20Kh%C3%A1nh%2C%20Qu%E1%BA%ADn%204%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Quận 4. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Sài Thành",
    "type": "Bánh cuốn",
    "location": "82 Hoàng Diệu, Quận 4, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20S%C3%A0i%20Th%C3%A0nh%2082%20Ho%C3%A0ng%20Di%E1%BB%87u%2C%20Qu%E1%BA%ADn%204%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Quận 4. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Ngọc Lan 2",
    "type": "Bánh cuốn",
    "location": "71 Bến Vân Đồn, Quận 4, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20Ng%E1%BB%8Dc%20Lan%202%2071%20B%E1%BA%BFn%20V%C3%A2n%20%C4%90%E1%BB%93n%2C%20Qu%E1%BA%ADn%204%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Quận 4. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Nắng Vàng 3",
    "type": "Bánh cuốn",
    "location": "242 Tôn Đản, Quận 4, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20N%E1%BA%AFng%20V%C3%A0ng%203%20242%20T%C3%B4n%20%C4%90%E1%BA%A3n%2C%20Qu%E1%BA%ADn%204%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Quận 4. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Hồng Phát 4",
    "type": "Bánh cuốn",
    "location": "72 Vĩnh Khánh, Quận 4, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20H%E1%BB%93ng%20Ph%C3%A1t%204%2072%20V%C4%A9nh%20Kh%C3%A1nh%2C%20Qu%E1%BA%ADn%204%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Quận 4. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Hào Hùng 5",
    "type": "Bánh cuốn",
    "location": "229 Bến Vân Đồn, Quận 4, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20H%C3%A0o%20H%C3%B9ng%205%20229%20B%E1%BA%BFn%20V%C3%A2n%20%C4%90%E1%BB%93n%2C%20Qu%E1%BA%ADn%204%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Quận 4. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Sài Thành",
    "type": "Bún đậu",
    "location": "322 Bến Vân Đồn, Quận 4, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20S%C3%A0i%20Th%C3%A0nh%20322%20B%E1%BA%BFn%20V%C3%A2n%20%C4%90%E1%BB%93n%2C%20Qu%E1%BA%ADn%204%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Quận 4. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Sông Trăng 2",
    "type": "Bún đậu",
    "location": "141 Tôn Đản, Quận 4, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20S%C3%B4ng%20Tr%C4%83ng%202%20141%20T%C3%B4n%20%C4%90%E1%BA%A3n%2C%20Qu%E1%BA%ADn%204%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Quận 4. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Bến Thành 3",
    "type": "Bún đậu",
    "location": "61 Bến Vân Đồn, Quận 4, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20B%E1%BA%BFn%20Th%C3%A0nh%203%2061%20B%E1%BA%BFn%20V%C3%A2n%20%C4%90%E1%BB%93n%2C%20Qu%E1%BA%ADn%204%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Quận 4. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Kim Anh 4",
    "type": "Bún đậu",
    "location": "106 Tôn Đản, Quận 4, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20Kim%20Anh%204%20106%20T%C3%B4n%20%C4%90%E1%BA%A3n%2C%20Qu%E1%BA%ADn%204%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Quận 4. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Hồng Phát 5",
    "type": "Bún đậu",
    "location": "483 Bến Vân Đồn, Quận 4, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20H%E1%BB%93ng%20Ph%C3%A1t%205%20483%20B%E1%BA%BFn%20V%C3%A2n%20%C4%90%E1%BB%93n%2C%20Qu%E1%BA%ADn%204%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Quận 4. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Đông Á",
    "type": "Hải sản",
    "location": "103 Đoàn Văn Bơ, Quận 4, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20%C4%90%C3%B4ng%20%C3%81%20103%20%C4%90o%C3%A0n%20V%C4%83n%20B%C6%A1%2C%20Qu%E1%BA%ADn%204%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Quận 4. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Cô Ba 2",
    "type": "Hải sản",
    "location": "191 Tôn Đản, Quận 4, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20C%C3%B4%20Ba%202%20191%20T%C3%B4n%20%C4%90%E1%BA%A3n%2C%20Qu%E1%BA%ADn%204%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Quận 4. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Hào Hùng 3",
    "type": "Hải sản",
    "location": "61 Hoàng Diệu, Quận 4, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20H%C3%A0o%20H%C3%B9ng%203%2061%20Ho%C3%A0ng%20Di%E1%BB%87u%2C%20Qu%E1%BA%ADn%204%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Quận 4. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Kim Anh 4",
    "type": "Hải sản",
    "location": "17 Đoàn Văn Bơ, Quận 4, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20Kim%20Anh%204%2017%20%C4%90o%C3%A0n%20V%C4%83n%20B%C6%A1%2C%20Qu%E1%BA%ADn%204%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Quận 4. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Hoàn Kiếm 5",
    "type": "Hải sản",
    "location": "206 Đoàn Văn Bơ, Quận 4, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20Ho%C3%A0n%20Ki%E1%BA%BFm%205%20206%20%C4%90o%C3%A0n%20V%C4%83n%20B%C6%A1%2C%20Qu%E1%BA%ADn%204%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Quận 4. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Chú Bảy",
    "type": "Ốc",
    "location": "257 Hoàng Diệu, Quận 4, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20Ch%C3%BA%20B%E1%BA%A3y%20257%20Ho%C3%A0ng%20Di%E1%BB%87u%2C%20Qu%E1%BA%ADn%204%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Quận 4. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Anh Tư 2",
    "type": "Ốc",
    "location": "173 Bến Vân Đồn, Quận 4, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20Anh%20T%C6%B0%202%20173%20B%E1%BA%BFn%20V%C3%A2n%20%C4%90%E1%BB%93n%2C%20Qu%E1%BA%ADn%204%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Quận 4. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Đông Á 3",
    "type": "Ốc",
    "location": "190 Bến Vân Đồn, Quận 4, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20%C4%90%C3%B4ng%20%C3%81%203%20190%20B%E1%BA%BFn%20V%C3%A2n%20%C4%90%E1%BB%93n%2C%20Qu%E1%BA%ADn%204%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Quận 4. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Thái Bình 4",
    "type": "Ốc",
    "location": "6 Bến Vân Đồn, Quận 4, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20Th%C3%A1i%20B%C3%ACnh%204%206%20B%E1%BA%BFn%20V%C3%A2n%20%C4%90%E1%BB%93n%2C%20Qu%E1%BA%ADn%204%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Quận 4. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Kim Anh 5",
    "type": "Ốc",
    "location": "200 Vĩnh Khánh, Quận 4, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20Kim%20Anh%205%20200%20V%C4%A9nh%20Kh%C3%A1nh%2C%20Qu%E1%BA%ADn%204%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Quận 4. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Mưa Hồng",
    "type": "Mì",
    "location": "168 Vĩnh Khánh, Quận 4, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20M%C6%B0a%20H%E1%BB%93ng%20168%20V%C4%A9nh%20Kh%C3%A1nh%2C%20Qu%E1%BA%ADn%204%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Quận 4. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Hương Việt 2",
    "type": "Mì",
    "location": "41 Đoàn Văn Bơ, Quận 4, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20H%C6%B0%C6%A1ng%20Vi%E1%BB%87t%202%2041%20%C4%90o%C3%A0n%20V%C4%83n%20B%C6%A1%2C%20Qu%E1%BA%ADn%204%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Quận 4. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Nam Hải 3",
    "type": "Mì",
    "location": "7 Vĩnh Khánh, Quận 4, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20Nam%20H%E1%BA%A3i%203%207%20V%C4%A9nh%20Kh%C3%A1nh%2C%20Qu%E1%BA%ADn%204%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Quận 4. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Vĩnh Lộc 4",
    "type": "Mì",
    "location": "92 Hoàng Diệu, Quận 4, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20V%C4%A9nh%20L%E1%BB%99c%204%2092%20Ho%C3%A0ng%20Di%E1%BB%87u%2C%20Qu%E1%BA%ADn%204%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Quận 4. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Cô Ba 5",
    "type": "Mì",
    "location": "150 Tôn Đản, Quận 4, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20C%C3%B4%20Ba%205%20150%20T%C3%B4n%20%C4%90%E1%BA%A3n%2C%20Qu%E1%BA%ADn%204%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Quận 4. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Xưa & Nay",
    "type": "Hủ tiếu",
    "location": "376 Hoàng Diệu, Quận 4, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20X%C6%B0a%20%26%20Nay%20376%20Ho%C3%A0ng%20Di%E1%BB%87u%2C%20Qu%E1%BA%ADn%204%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Quận 4. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Hồng Phát 2",
    "type": "Hủ tiếu",
    "location": "282 Vĩnh Khánh, Quận 4, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20H%E1%BB%93ng%20Ph%C3%A1t%202%20282%20V%C4%A9nh%20Kh%C3%A1nh%2C%20Qu%E1%BA%ADn%204%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Quận 4. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Ông Già 3",
    "type": "Hủ tiếu",
    "location": "457 Đoàn Văn Bơ, Quận 4, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20%C3%94ng%20Gi%C3%A0%203%20457%20%C4%90o%C3%A0n%20V%C4%83n%20B%C6%A1%2C%20Qu%E1%BA%ADn%204%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Quận 4. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Viet Kitchen 4",
    "type": "Hủ tiếu",
    "location": "318 Tôn Đản, Quận 4, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20Viet%20Kitchen%204%20318%20T%C3%B4n%20%C4%90%E1%BA%A3n%2C%20Qu%E1%BA%ADn%204%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Quận 4. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Ông Già 5",
    "type": "Hủ tiếu",
    "location": "206 Đoàn Văn Bơ, Quận 4, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20%C3%94ng%20Gi%C3%A0%205%20206%20%C4%90o%C3%A0n%20V%C4%83n%20B%C6%A1%2C%20Qu%E1%BA%ADn%204%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Quận 4. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Nắng Vàng",
    "type": "Đồ nướng",
    "location": "74 Tôn Đản, Quận 4, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20N%E1%BA%AFng%20V%C3%A0ng%2074%20T%C3%B4n%20%C4%90%E1%BA%A3n%2C%20Qu%E1%BA%ADn%204%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Quận 4. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Mưa Hồng 2",
    "type": "Đồ nướng",
    "location": "58 Vĩnh Khánh, Quận 4, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20M%C6%B0a%20H%E1%BB%93ng%202%2058%20V%C4%A9nh%20Kh%C3%A1nh%2C%20Qu%E1%BA%ADn%204%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Quận 4. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Ngọc Lan 3",
    "type": "Đồ nướng",
    "location": "138 Hoàng Diệu, Quận 4, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20Ng%E1%BB%8Dc%20Lan%203%20138%20Ho%C3%A0ng%20Di%E1%BB%87u%2C%20Qu%E1%BA%ADn%204%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Quận 4. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Saigon Deli 4",
    "type": "Đồ nướng",
    "location": "152 Vĩnh Khánh, Quận 4, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20Saigon%20Deli%204%20152%20V%C4%A9nh%20Kh%C3%A1nh%2C%20Qu%E1%BA%ADn%204%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Quận 4. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Mưa Hồng 5",
    "type": "Đồ nướng",
    "location": "267 Bến Vân Đồn, Quận 4, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20M%C6%B0a%20H%E1%BB%93ng%205%20267%20B%E1%BA%BFn%20V%C3%A2n%20%C4%90%E1%BB%93n%2C%20Qu%E1%BA%ADn%204%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Quận 4. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Mưa Hồng",
    "type": "Nước & Cafe",
    "location": "375 Vĩnh Khánh, Quận 4, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20M%C6%B0a%20H%E1%BB%93ng%20375%20V%C4%A9nh%20Kh%C3%A1nh%2C%20Qu%E1%BA%ADn%204%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Quận 4. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Dì Liên 2",
    "type": "Nước & Cafe",
    "location": "496 Bến Vân Đồn, Quận 4, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20D%C3%AC%20Li%C3%AAn%202%20496%20B%E1%BA%BFn%20V%C3%A2n%20%C4%90%E1%BB%93n%2C%20Qu%E1%BA%ADn%204%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Quận 4. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Minh Khai 3",
    "type": "Nước & Cafe",
    "location": "31 Đoàn Văn Bơ, Quận 4, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20Minh%20Khai%203%2031%20%C4%90o%C3%A0n%20V%C4%83n%20B%C6%A1%2C%20Qu%E1%BA%ADn%204%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Quận 4. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Saigon Deli 4",
    "type": "Nước & Cafe",
    "location": "13 Bến Vân Đồn, Quận 4, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20Saigon%20Deli%204%2013%20B%E1%BA%BFn%20V%C3%A2n%20%C4%90%E1%BB%93n%2C%20Qu%E1%BA%ADn%204%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Quận 4. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Thanh Đa 5",
    "type": "Nước & Cafe",
    "location": "74 Hoàng Diệu, Quận 4, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20Thanh%20%C4%90a%205%2074%20Ho%C3%A0ng%20Di%E1%BB%87u%2C%20Qu%E1%BA%ADn%204%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Quận 4. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Dì Liên",
    "type": "Chè",
    "location": "230 Tôn Đản, Quận 4, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20D%C3%AC%20Li%C3%AAn%20230%20T%C3%B4n%20%C4%90%E1%BA%A3n%2C%20Qu%E1%BA%ADn%204%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Quận 4. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Dì Liên 2",
    "type": "Chè",
    "location": "491 Đoàn Văn Bơ, Quận 4, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20D%C3%AC%20Li%C3%AAn%202%20491%20%C4%90o%C3%A0n%20V%C4%83n%20B%C6%A1%2C%20Qu%E1%BA%ADn%204%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Quận 4. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Đông Á 3",
    "type": "Chè",
    "location": "41 Vĩnh Khánh, Quận 4, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20%C4%90%C3%B4ng%20%C3%81%203%2041%20V%C4%A9nh%20Kh%C3%A1nh%2C%20Qu%E1%BA%ADn%204%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Quận 4. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Ông Già 4",
    "type": "Chè",
    "location": "214 Vĩnh Khánh, Quận 4, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20%C3%94ng%20Gi%C3%A0%204%20214%20V%C4%A9nh%20Kh%C3%A1nh%2C%20Qu%E1%BA%ADn%204%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Quận 4. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Dì Liên 5",
    "type": "Chè",
    "location": "167 Hoàng Diệu, Quận 4, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20D%C3%AC%20Li%C3%AAn%205%20167%20Ho%C3%A0ng%20Di%E1%BB%87u%2C%20Qu%E1%BA%ADn%204%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Quận 4. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Chú Bảy",
    "type": "Bánh xèo",
    "location": "424 Bến Vân Đồn, Quận 4, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20Ch%C3%BA%20B%E1%BA%A3y%20424%20B%E1%BA%BFn%20V%C3%A2n%20%C4%90%E1%BB%93n%2C%20Qu%E1%BA%ADn%204%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Quận 4. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Đông Á 2",
    "type": "Bánh xèo",
    "location": "229 Hoàng Diệu, Quận 4, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20%C4%90%C3%B4ng%20%C3%81%202%20229%20Ho%C3%A0ng%20Di%E1%BB%87u%2C%20Qu%E1%BA%ADn%204%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Quận 4. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Nam Hải 3",
    "type": "Bánh xèo",
    "location": "222 Vĩnh Khánh, Quận 4, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20Nam%20H%E1%BA%A3i%203%20222%20V%C4%A9nh%20Kh%C3%A1nh%2C%20Qu%E1%BA%ADn%204%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Quận 4. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Viet Kitchen 4",
    "type": "Bánh xèo",
    "location": "221 Vĩnh Khánh, Quận 4, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20Viet%20Kitchen%204%20221%20V%C4%A9nh%20Kh%C3%A1nh%2C%20Qu%E1%BA%ADn%204%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Quận 4. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Nam Hải 5",
    "type": "Bánh xèo",
    "location": "458 Hoàng Diệu, Quận 4, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20Nam%20H%E1%BA%A3i%205%20458%20Ho%C3%A0ng%20Di%E1%BB%87u%2C%20Qu%E1%BA%ADn%204%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Quận 4. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Hương Việt",
    "type": "Khác",
    "location": "217 Hoàng Diệu, Quận 4, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20H%C6%B0%C6%A1ng%20Vi%E1%BB%87t%20217%20Ho%C3%A0ng%20Di%E1%BB%87u%2C%20Qu%E1%BA%ADn%204%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Quận 4. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Vĩnh Lộc 2",
    "type": "Khác",
    "location": "468 Tôn Đản, Quận 4, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20V%C4%A9nh%20L%E1%BB%99c%202%20468%20T%C3%B4n%20%C4%90%E1%BA%A3n%2C%20Qu%E1%BA%ADn%204%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Quận 4. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Local Taste 3",
    "type": "Khác",
    "location": "228 Vĩnh Khánh, Quận 4, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20Local%20Taste%203%20228%20V%C4%A9nh%20Kh%C3%A1nh%2C%20Qu%E1%BA%ADn%204%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Quận 4. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Saigon Deli 4",
    "type": "Khác",
    "location": "360 Tôn Đản, Quận 4, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20Saigon%20Deli%204%20360%20T%C3%B4n%20%C4%90%E1%BA%A3n%2C%20Qu%E1%BA%ADn%204%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Quận 4. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Local Taste 5",
    "type": "Khác",
    "location": "92 Bến Vân Đồn, Quận 4, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20Local%20Taste%205%2092%20B%E1%BA%BFn%20V%C3%A2n%20%C4%90%E1%BB%93n%2C%20Qu%E1%BA%ADn%204%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Quận 4. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Đông Á",
    "type": "Phở",
    "location": "194 An Dương Vương, Quận 5, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20%C4%90%C3%B4ng%20%C3%81%20194%20An%20D%C6%B0%C6%A1ng%20V%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%205%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Quận 5. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Thái Bình 2",
    "type": "Phở",
    "location": "8 Hồng Bàng, Quận 5, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20Th%C3%A1i%20B%C3%ACnh%202%208%20H%E1%BB%93ng%20B%C3%A0ng%2C%20Qu%E1%BA%ADn%205%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Quận 5. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Nắng Vàng 3",
    "type": "Phở",
    "location": "18 Hồng Bàng, Quận 5, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20N%E1%BA%AFng%20V%C3%A0ng%203%2018%20H%E1%BB%93ng%20B%C3%A0ng%2C%20Qu%E1%BA%ADn%205%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Quận 5. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Thanh Đa 4",
    "type": "Phở",
    "location": "93 An Dương Vương, Quận 5, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20Thanh%20%C4%90a%204%2093%20An%20D%C6%B0%C6%A1ng%20V%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%205%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Quận 5. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Hồng Phát 5",
    "type": "Phở",
    "location": "398 Nguyễn Trãi, Quận 5, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20H%E1%BB%93ng%20Ph%C3%A1t%205%20398%20Nguy%E1%BB%85n%20Tr%C3%A3i%2C%20Qu%E1%BA%ADn%205%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Quận 5. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Anh Tư",
    "type": "Bún",
    "location": "314 Hồng Bàng, Quận 5, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20Anh%20T%C6%B0%20314%20H%E1%BB%93ng%20B%C3%A0ng%2C%20Qu%E1%BA%ADn%205%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Quận 5. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Đồng Quê 2",
    "type": "Bún",
    "location": "89 Trần Hưng Đạo, Quận 5, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%90%E1%BB%93ng%20Qu%C3%AA%202%2089%20Tr%E1%BA%A7n%20H%C6%B0ng%20%C4%90%E1%BA%A1o%2C%20Qu%E1%BA%ADn%205%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Quận 5. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Anh Tư 3",
    "type": "Bún",
    "location": "468 Võ Văn Kiệt, Quận 5, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20Anh%20T%C6%B0%203%20468%20V%C3%B5%20V%C4%83n%20Ki%E1%BB%87t%2C%20Qu%E1%BA%ADn%205%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Quận 5. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Bến Thành 4",
    "type": "Bún",
    "location": "164 Nguyễn Trãi, Quận 5, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20B%E1%BA%BFn%20Th%C3%A0nh%204%20164%20Nguy%E1%BB%85n%20Tr%C3%A3i%2C%20Qu%E1%BA%ADn%205%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Quận 5. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Thái Bình 5",
    "type": "Bún",
    "location": "273 Hồng Bàng, Quận 5, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20Th%C3%A1i%20B%C3%ACnh%205%20273%20H%E1%BB%93ng%20B%C3%A0ng%2C%20Qu%E1%BA%ADn%205%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Quận 5. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Thanh Xuân",
    "type": "Cơm",
    "location": "410 An Dương Vương, Quận 5, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20Thanh%20Xu%C3%A2n%20410%20An%20D%C6%B0%C6%A1ng%20V%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%205%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Quận 5. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Ngọc Lan 2",
    "type": "Cơm",
    "location": "458 Hồng Bàng, Quận 5, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20Ng%E1%BB%8Dc%20Lan%202%20458%20H%E1%BB%93ng%20B%C3%A0ng%2C%20Qu%E1%BA%ADn%205%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Quận 5. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Phố Hội 3",
    "type": "Cơm",
    "location": "148 Nguyễn Trãi, Quận 5, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20Ph%E1%BB%91%20H%E1%BB%99i%203%20148%20Nguy%E1%BB%85n%20Tr%C3%A3i%2C%20Qu%E1%BA%ADn%205%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Quận 5. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Saigon Deli 4",
    "type": "Cơm",
    "location": "134 Hồng Bàng, Quận 5, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20Saigon%20Deli%204%20134%20H%E1%BB%93ng%20B%C3%A0ng%2C%20Qu%E1%BA%ADn%205%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Quận 5. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Xưa & Nay 5",
    "type": "Cơm",
    "location": "69 Võ Văn Kiệt, Quận 5, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20X%C6%B0a%20%26%20Nay%205%2069%20V%C3%B5%20V%C4%83n%20Ki%E1%BB%87t%2C%20Qu%E1%BA%ADn%205%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Quận 5. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Ông Già",
    "type": "Lẩu",
    "location": "119 Trần Hưng Đạo, Quận 5, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20%C3%94ng%20Gi%C3%A0%20119%20Tr%E1%BA%A7n%20H%C6%B0ng%20%C4%90%E1%BA%A1o%2C%20Qu%E1%BA%ADn%205%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Quận 5. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Viet Kitchen 2",
    "type": "Lẩu",
    "location": "7 Nguyễn Trãi, Quận 5, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20Viet%20Kitchen%202%207%20Nguy%E1%BB%85n%20Tr%C3%A3i%2C%20Qu%E1%BA%ADn%205%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Quận 5. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Hương Việt 3",
    "type": "Lẩu",
    "location": "363 An Dương Vương, Quận 5, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20H%C6%B0%C6%A1ng%20Vi%E1%BB%87t%203%20363%20An%20D%C6%B0%C6%A1ng%20V%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%205%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Quận 5. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Bà Năm 4",
    "type": "Lẩu",
    "location": "255 Võ Văn Kiệt, Quận 5, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20B%C3%A0%20N%C4%83m%204%20255%20V%C3%B5%20V%C4%83n%20Ki%E1%BB%87t%2C%20Qu%E1%BA%ADn%205%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Quận 5. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Ông Già 5",
    "type": "Lẩu",
    "location": "104 Trần Hưng Đạo, Quận 5, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20%C3%94ng%20Gi%C3%A0%205%20104%20Tr%E1%BA%A7n%20H%C6%B0ng%20%C4%90%E1%BA%A1o%2C%20Qu%E1%BA%ADn%205%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Quận 5. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Mưa Hồng",
    "type": "Đồ chay",
    "location": "457 Nguyễn Trãi, Quận 5, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20M%C6%B0a%20H%E1%BB%93ng%20457%20Nguy%E1%BB%85n%20Tr%C3%A3i%2C%20Qu%E1%BA%ADn%205%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Quận 5. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Kim Anh 2",
    "type": "Đồ chay",
    "location": "424 Nguyễn Trãi, Quận 5, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20Kim%20Anh%202%20424%20Nguy%E1%BB%85n%20Tr%C3%A3i%2C%20Qu%E1%BA%ADn%205%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Quận 5. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Nắng Vàng 3",
    "type": "Đồ chay",
    "location": "169 Hồng Bàng, Quận 5, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20N%E1%BA%AFng%20V%C3%A0ng%203%20169%20H%E1%BB%93ng%20B%C3%A0ng%2C%20Qu%E1%BA%ADn%205%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Quận 5. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Viet Kitchen 4",
    "type": "Đồ chay",
    "location": "416 An Dương Vương, Quận 5, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20Viet%20Kitchen%204%20416%20An%20D%C6%B0%C6%A1ng%20V%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%205%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Quận 5. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Saigon Deli 5",
    "type": "Đồ chay",
    "location": "316 Võ Văn Kiệt, Quận 5, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20Saigon%20Deli%205%20316%20V%C3%B5%20V%C4%83n%20Ki%E1%BB%87t%2C%20Qu%E1%BA%ADn%205%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Quận 5. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Bến Thành",
    "type": "Bánh mì",
    "location": "343 Trần Hưng Đạo, Quận 5, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20B%E1%BA%BFn%20Th%C3%A0nh%20343%20Tr%E1%BA%A7n%20H%C6%B0ng%20%C4%90%E1%BA%A1o%2C%20Qu%E1%BA%ADn%205%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Quận 5. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Thái Bình 2",
    "type": "Bánh mì",
    "location": "105 Trần Hưng Đạo, Quận 5, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20Th%C3%A1i%20B%C3%ACnh%202%20105%20Tr%E1%BA%A7n%20H%C6%B0ng%20%C4%90%E1%BA%A1o%2C%20Qu%E1%BA%ADn%205%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Quận 5. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Bà Năm 3",
    "type": "Bánh mì",
    "location": "163 Võ Văn Kiệt, Quận 5, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20B%C3%A0%20N%C4%83m%203%20163%20V%C3%B5%20V%C4%83n%20Ki%E1%BB%87t%2C%20Qu%E1%BA%ADn%205%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Quận 5. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Kim Anh 4",
    "type": "Bánh mì",
    "location": "216 Võ Văn Kiệt, Quận 5, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20Kim%20Anh%204%20216%20V%C3%B5%20V%C4%83n%20Ki%E1%BB%87t%2C%20Qu%E1%BA%ADn%205%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Quận 5. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Local Taste 5",
    "type": "Bánh mì",
    "location": "477 An Dương Vương, Quận 5, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20Local%20Taste%205%20477%20An%20D%C6%B0%C6%A1ng%20V%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%205%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Quận 5. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Chú Bảy",
    "type": "Ăn vặt",
    "location": "447 An Dương Vương, Quận 5, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20Ch%C3%BA%20B%E1%BA%A3y%20447%20An%20D%C6%B0%C6%A1ng%20V%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%205%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Quận 5. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Phố Hội 2",
    "type": "Ăn vặt",
    "location": "177 Võ Văn Kiệt, Quận 5, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20Ph%E1%BB%91%20H%E1%BB%99i%202%20177%20V%C3%B5%20V%C4%83n%20Ki%E1%BB%87t%2C%20Qu%E1%BA%ADn%205%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Quận 5. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Local Taste 3",
    "type": "Ăn vặt",
    "location": "488 Hồng Bàng, Quận 5, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20Local%20Taste%203%20488%20H%E1%BB%93ng%20B%C3%A0ng%2C%20Qu%E1%BA%ADn%205%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Quận 5. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Hương Việt 4",
    "type": "Ăn vặt",
    "location": "82 An Dương Vương, Quận 5, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20H%C6%B0%C6%A1ng%20Vi%E1%BB%87t%204%2082%20An%20D%C6%B0%C6%A1ng%20V%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%205%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Quận 5. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Ngọc Lan 5",
    "type": "Ăn vặt",
    "location": "496 Trần Hưng Đạo, Quận 5, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20Ng%E1%BB%8Dc%20Lan%205%20496%20Tr%E1%BA%A7n%20H%C6%B0ng%20%C4%90%E1%BA%A1o%2C%20Qu%E1%BA%ADn%205%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Quận 5. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Phố Hội",
    "type": "Bánh cuốn",
    "location": "452 Võ Văn Kiệt, Quận 5, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20Ph%E1%BB%91%20H%E1%BB%99i%20452%20V%C3%B5%20V%C4%83n%20Ki%E1%BB%87t%2C%20Qu%E1%BA%ADn%205%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Quận 5. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Sài Thành 2",
    "type": "Bánh cuốn",
    "location": "247 Nguyễn Trãi, Quận 5, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20S%C3%A0i%20Th%C3%A0nh%202%20247%20Nguy%E1%BB%85n%20Tr%C3%A3i%2C%20Qu%E1%BA%ADn%205%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Quận 5. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Thái Bình 3",
    "type": "Bánh cuốn",
    "location": "272 Nguyễn Trãi, Quận 5, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20Th%C3%A1i%20B%C3%ACnh%203%20272%20Nguy%E1%BB%85n%20Tr%C3%A3i%2C%20Qu%E1%BA%ADn%205%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Quận 5. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Chú Bảy 4",
    "type": "Bánh cuốn",
    "location": "1 Hồng Bàng, Quận 5, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20Ch%C3%BA%20B%E1%BA%A3y%204%201%20H%E1%BB%93ng%20B%C3%A0ng%2C%20Qu%E1%BA%ADn%205%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Quận 5. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Gia Đình 5",
    "type": "Bánh cuốn",
    "location": "354 Võ Văn Kiệt, Quận 5, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20Gia%20%C4%90%C3%ACnh%205%20354%20V%C3%B5%20V%C4%83n%20Ki%E1%BB%87t%2C%20Qu%E1%BA%ADn%205%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Quận 5. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Đồng Quê",
    "type": "Bún đậu",
    "location": "176 Hồng Bàng, Quận 5, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20%C4%90%E1%BB%93ng%20Qu%C3%AA%20176%20H%E1%BB%93ng%20B%C3%A0ng%2C%20Qu%E1%BA%ADn%205%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Quận 5. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Hồng Phát 2",
    "type": "Bún đậu",
    "location": "411 Võ Văn Kiệt, Quận 5, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20H%E1%BB%93ng%20Ph%C3%A1t%202%20411%20V%C3%B5%20V%C4%83n%20Ki%E1%BB%87t%2C%20Qu%E1%BA%ADn%205%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Quận 5. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Phố Hội 3",
    "type": "Bún đậu",
    "location": "136 Nguyễn Trãi, Quận 5, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20Ph%E1%BB%91%20H%E1%BB%99i%203%20136%20Nguy%E1%BB%85n%20Tr%C3%A3i%2C%20Qu%E1%BA%ADn%205%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Quận 5. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Ông Già 4",
    "type": "Bún đậu",
    "location": "319 Hồng Bàng, Quận 5, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20%C3%94ng%20Gi%C3%A0%204%20319%20H%E1%BB%93ng%20B%C3%A0ng%2C%20Qu%E1%BA%ADn%205%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Quận 5. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Viet Kitchen 5",
    "type": "Bún đậu",
    "location": "386 Nguyễn Trãi, Quận 5, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20Viet%20Kitchen%205%20386%20Nguy%E1%BB%85n%20Tr%C3%A3i%2C%20Qu%E1%BA%ADn%205%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Quận 5. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Đông Á",
    "type": "Hải sản",
    "location": "368 Trần Hưng Đạo, Quận 5, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20%C4%90%C3%B4ng%20%C3%81%20368%20Tr%E1%BA%A7n%20H%C6%B0ng%20%C4%90%E1%BA%A1o%2C%20Qu%E1%BA%ADn%205%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Quận 5. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Đồng Quê 2",
    "type": "Hải sản",
    "location": "357 Trần Hưng Đạo, Quận 5, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20%C4%90%E1%BB%93ng%20Qu%C3%AA%202%20357%20Tr%E1%BA%A7n%20H%C6%B0ng%20%C4%90%E1%BA%A1o%2C%20Qu%E1%BA%ADn%205%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Quận 5. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Nắng Vàng 3",
    "type": "Hải sản",
    "location": "149 Võ Văn Kiệt, Quận 5, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20N%E1%BA%AFng%20V%C3%A0ng%203%20149%20V%C3%B5%20V%C4%83n%20Ki%E1%BB%87t%2C%20Qu%E1%BA%ADn%205%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Quận 5. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Thanh Đa 4",
    "type": "Hải sản",
    "location": "159 Hồng Bàng, Quận 5, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20Thanh%20%C4%90a%204%20159%20H%E1%BB%93ng%20B%C3%A0ng%2C%20Qu%E1%BA%ADn%205%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Quận 5. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Hào Hùng 5",
    "type": "Hải sản",
    "location": "205 An Dương Vương, Quận 5, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20H%C3%A0o%20H%C3%B9ng%205%20205%20An%20D%C6%B0%C6%A1ng%20V%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%205%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Quận 5. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Anh Tư",
    "type": "Ốc",
    "location": "406 Nguyễn Trãi, Quận 5, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20Anh%20T%C6%B0%20406%20Nguy%E1%BB%85n%20Tr%C3%A3i%2C%20Qu%E1%BA%ADn%205%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Quận 5. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Anh Tư 2",
    "type": "Ốc",
    "location": "445 Trần Hưng Đạo, Quận 5, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20Anh%20T%C6%B0%202%20445%20Tr%E1%BA%A7n%20H%C6%B0ng%20%C4%90%E1%BA%A1o%2C%20Qu%E1%BA%ADn%205%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Quận 5. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Hương Việt 3",
    "type": "Ốc",
    "location": "271 Hồng Bàng, Quận 5, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20H%C6%B0%C6%A1ng%20Vi%E1%BB%87t%203%20271%20H%E1%BB%93ng%20B%C3%A0ng%2C%20Qu%E1%BA%ADn%205%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Quận 5. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Cô Ba 4",
    "type": "Ốc",
    "location": "345 Nguyễn Trãi, Quận 5, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20C%C3%B4%20Ba%204%20345%20Nguy%E1%BB%85n%20Tr%C3%A3i%2C%20Qu%E1%BA%ADn%205%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Quận 5. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Cô Ba 5",
    "type": "Ốc",
    "location": "446 Võ Văn Kiệt, Quận 5, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20C%C3%B4%20Ba%205%20446%20V%C3%B5%20V%C4%83n%20Ki%E1%BB%87t%2C%20Qu%E1%BA%ADn%205%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Quận 5. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Thanh Đa",
    "type": "Mì",
    "location": "14 Nguyễn Trãi, Quận 5, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20Thanh%20%C4%90a%2014%20Nguy%E1%BB%85n%20Tr%C3%A3i%2C%20Qu%E1%BA%ADn%205%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Quận 5. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Đồng Quê 2",
    "type": "Mì",
    "location": "376 An Dương Vương, Quận 5, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20%C4%90%E1%BB%93ng%20Qu%C3%AA%202%20376%20An%20D%C6%B0%C6%A1ng%20V%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%205%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Quận 5. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Bà Năm 3",
    "type": "Mì",
    "location": "395 Nguyễn Trãi, Quận 5, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20B%C3%A0%20N%C4%83m%203%20395%20Nguy%E1%BB%85n%20Tr%C3%A3i%2C%20Qu%E1%BA%ADn%205%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Quận 5. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Nam Hải 4",
    "type": "Mì",
    "location": "490 Trần Hưng Đạo, Quận 5, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20Nam%20H%E1%BA%A3i%204%20490%20Tr%E1%BA%A7n%20H%C6%B0ng%20%C4%90%E1%BA%A1o%2C%20Qu%E1%BA%ADn%205%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Quận 5. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Hào Hùng 5",
    "type": "Mì",
    "location": "248 Trần Hưng Đạo, Quận 5, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20H%C3%A0o%20H%C3%B9ng%205%20248%20Tr%E1%BA%A7n%20H%C6%B0ng%20%C4%90%E1%BA%A1o%2C%20Qu%E1%BA%ADn%205%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Quận 5. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Nắng Vàng",
    "type": "Hủ tiếu",
    "location": "234 Võ Văn Kiệt, Quận 5, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20N%E1%BA%AFng%20V%C3%A0ng%20234%20V%C3%B5%20V%C4%83n%20Ki%E1%BB%87t%2C%20Qu%E1%BA%ADn%205%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Quận 5. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Kim Anh 2",
    "type": "Hủ tiếu",
    "location": "141 An Dương Vương, Quận 5, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20Kim%20Anh%202%20141%20An%20D%C6%B0%C6%A1ng%20V%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%205%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Quận 5. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Minh Khai 3",
    "type": "Hủ tiếu",
    "location": "459 Hồng Bàng, Quận 5, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20Minh%20Khai%203%20459%20H%E1%BB%93ng%20B%C3%A0ng%2C%20Qu%E1%BA%ADn%205%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Quận 5. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Ông Già 4",
    "type": "Hủ tiếu",
    "location": "241 An Dương Vương, Quận 5, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20%C3%94ng%20Gi%C3%A0%204%20241%20An%20D%C6%B0%C6%A1ng%20V%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%205%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Quận 5. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Đông Á 5",
    "type": "Hủ tiếu",
    "location": "394 An Dương Vương, Quận 5, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20%C4%90%C3%B4ng%20%C3%81%205%20394%20An%20D%C6%B0%C6%A1ng%20V%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%205%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Quận 5. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Đông Á",
    "type": "Đồ nướng",
    "location": "10 An Dương Vương, Quận 5, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20%C4%90%C3%B4ng%20%C3%81%2010%20An%20D%C6%B0%C6%A1ng%20V%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%205%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Quận 5. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Chú Bảy 2",
    "type": "Đồ nướng",
    "location": "350 Hồng Bàng, Quận 5, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20Ch%C3%BA%20B%E1%BA%A3y%202%20350%20H%E1%BB%93ng%20B%C3%A0ng%2C%20Qu%E1%BA%ADn%205%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Quận 5. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Sông Trăng 3",
    "type": "Đồ nướng",
    "location": "286 Võ Văn Kiệt, Quận 5, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20S%C3%B4ng%20Tr%C4%83ng%203%20286%20V%C3%B5%20V%C4%83n%20Ki%E1%BB%87t%2C%20Qu%E1%BA%ADn%205%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Quận 5. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Phố Hội 4",
    "type": "Đồ nướng",
    "location": "414 Hồng Bàng, Quận 5, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20Ph%E1%BB%91%20H%E1%BB%99i%204%20414%20H%E1%BB%93ng%20B%C3%A0ng%2C%20Qu%E1%BA%ADn%205%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Quận 5. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Hồng Phát 5",
    "type": "Đồ nướng",
    "location": "264 Võ Văn Kiệt, Quận 5, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20H%E1%BB%93ng%20Ph%C3%A1t%205%20264%20V%C3%B5%20V%C4%83n%20Ki%E1%BB%87t%2C%20Qu%E1%BA%ADn%205%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Quận 5. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Thái Bình",
    "type": "Nước & Cafe",
    "location": "392 Nguyễn Trãi, Quận 5, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20Th%C3%A1i%20B%C3%ACnh%20392%20Nguy%E1%BB%85n%20Tr%C3%A3i%2C%20Qu%E1%BA%ADn%205%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Quận 5. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Bà Năm 2",
    "type": "Nước & Cafe",
    "location": "422 An Dương Vương, Quận 5, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20B%C3%A0%20N%C4%83m%202%20422%20An%20D%C6%B0%C6%A1ng%20V%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%205%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Quận 5. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Ông Già 3",
    "type": "Nước & Cafe",
    "location": "13 Trần Hưng Đạo, Quận 5, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20%C3%94ng%20Gi%C3%A0%203%2013%20Tr%E1%BA%A7n%20H%C6%B0ng%20%C4%90%E1%BA%A1o%2C%20Qu%E1%BA%ADn%205%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Quận 5. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Vĩnh Lộc 4",
    "type": "Nước & Cafe",
    "location": "73 An Dương Vương, Quận 5, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20V%C4%A9nh%20L%E1%BB%99c%204%2073%20An%20D%C6%B0%C6%A1ng%20V%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%205%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Quận 5. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Hoàn Kiếm 5",
    "type": "Nước & Cafe",
    "location": "132 An Dương Vương, Quận 5, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20Ho%C3%A0n%20Ki%E1%BA%BFm%205%20132%20An%20D%C6%B0%C6%A1ng%20V%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%205%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Quận 5. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Sài Thành",
    "type": "Chè",
    "location": "383 Hồng Bàng, Quận 5, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20S%C3%A0i%20Th%C3%A0nh%20383%20H%E1%BB%93ng%20B%C3%A0ng%2C%20Qu%E1%BA%ADn%205%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Quận 5. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Nắng Vàng 2",
    "type": "Chè",
    "location": "244 Nguyễn Trãi, Quận 5, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20N%E1%BA%AFng%20V%C3%A0ng%202%20244%20Nguy%E1%BB%85n%20Tr%C3%A3i%2C%20Qu%E1%BA%ADn%205%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Quận 5. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Viet Kitchen 3",
    "type": "Chè",
    "location": "252 Nguyễn Trãi, Quận 5, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20Viet%20Kitchen%203%20252%20Nguy%E1%BB%85n%20Tr%C3%A3i%2C%20Qu%E1%BA%ADn%205%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Quận 5. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Phố Hội 4",
    "type": "Chè",
    "location": "392 An Dương Vương, Quận 5, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20Ph%E1%BB%91%20H%E1%BB%99i%204%20392%20An%20D%C6%B0%C6%A1ng%20V%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%205%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Quận 5. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Saigon Deli 5",
    "type": "Chè",
    "location": "321 Võ Văn Kiệt, Quận 5, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20Saigon%20Deli%205%20321%20V%C3%B5%20V%C4%83n%20Ki%E1%BB%87t%2C%20Qu%E1%BA%ADn%205%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Quận 5. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Phố Hội",
    "type": "Bánh xèo",
    "location": "174 Võ Văn Kiệt, Quận 5, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20Ph%E1%BB%91%20H%E1%BB%99i%20174%20V%C3%B5%20V%C4%83n%20Ki%E1%BB%87t%2C%20Qu%E1%BA%ADn%205%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Quận 5. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Cô Ba 2",
    "type": "Bánh xèo",
    "location": "284 Trần Hưng Đạo, Quận 5, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20C%C3%B4%20Ba%202%20284%20Tr%E1%BA%A7n%20H%C6%B0ng%20%C4%90%E1%BA%A1o%2C%20Qu%E1%BA%ADn%205%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Quận 5. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Đệ Nhất 3",
    "type": "Bánh xèo",
    "location": "101 Hồng Bàng, Quận 5, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20%C4%90%E1%BB%87%20Nh%E1%BA%A5t%203%20101%20H%E1%BB%93ng%20B%C3%A0ng%2C%20Qu%E1%BA%ADn%205%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Quận 5. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Ông Già 4",
    "type": "Bánh xèo",
    "location": "126 An Dương Vương, Quận 5, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20%C3%94ng%20Gi%C3%A0%204%20126%20An%20D%C6%B0%C6%A1ng%20V%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%205%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Quận 5. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Hoàn Kiếm 5",
    "type": "Bánh xèo",
    "location": "355 Hồng Bàng, Quận 5, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20Ho%C3%A0n%20Ki%E1%BA%BFm%205%20355%20H%E1%BB%93ng%20B%C3%A0ng%2C%20Qu%E1%BA%ADn%205%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Quận 5. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Gia Đình",
    "type": "Khác",
    "location": "233 Võ Văn Kiệt, Quận 5, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20Gia%20%C4%90%C3%ACnh%20233%20V%C3%B5%20V%C4%83n%20Ki%E1%BB%87t%2C%20Qu%E1%BA%ADn%205%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Quận 5. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Cô Ba 2",
    "type": "Khác",
    "location": "163 Trần Hưng Đạo, Quận 5, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20C%C3%B4%20Ba%202%20163%20Tr%E1%BA%A7n%20H%C6%B0ng%20%C4%90%E1%BA%A1o%2C%20Qu%E1%BA%ADn%205%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Quận 5. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Dì Liên 3",
    "type": "Khác",
    "location": "181 Võ Văn Kiệt, Quận 5, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20D%C3%AC%20Li%C3%AAn%203%20181%20V%C3%B5%20V%C4%83n%20Ki%E1%BB%87t%2C%20Qu%E1%BA%ADn%205%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Quận 5. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Bà Năm 4",
    "type": "Khác",
    "location": "247 Võ Văn Kiệt, Quận 5, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20B%C3%A0%20N%C4%83m%204%20247%20V%C3%B5%20V%C4%83n%20Ki%E1%BB%87t%2C%20Qu%E1%BA%ADn%205%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Quận 5. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Saigon Deli 5",
    "type": "Khác",
    "location": "12 An Dương Vương, Quận 5, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20Saigon%20Deli%205%2012%20An%20D%C6%B0%C6%A1ng%20V%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%205%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Quận 5. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Local Taste",
    "type": "Phở",
    "location": "218 Lê Quang Sung, Quận 6, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20Local%20Taste%20218%20L%C3%AA%20Quang%20Sung%2C%20Qu%E1%BA%ADn%206%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Quận 6. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Hào Hùng 2",
    "type": "Phở",
    "location": "108 Chợ Lớn, Quận 6, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20H%C3%A0o%20H%C3%B9ng%202%20108%20Ch%E1%BB%A3%20L%E1%BB%9Bn%2C%20Qu%E1%BA%ADn%206%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Quận 6. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Chú Bảy 3",
    "type": "Phở",
    "location": "496 Lê Quang Sung, Quận 6, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20Ch%C3%BA%20B%E1%BA%A3y%203%20496%20L%C3%AA%20Quang%20Sung%2C%20Qu%E1%BA%ADn%206%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Quận 6. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Gia Đình 4",
    "type": "Phở",
    "location": "257 Bình Tiên, Quận 6, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20Gia%20%C4%90%C3%ACnh%204%20257%20B%C3%ACnh%20Ti%C3%AAn%2C%20Qu%E1%BA%ADn%206%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Quận 6. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Kim Anh 5",
    "type": "Phở",
    "location": "208 Hậu Giang, Quận 6, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20Kim%20Anh%205%20208%20H%E1%BA%ADu%20Giang%2C%20Qu%E1%BA%ADn%206%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Quận 6. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Đồng Quê",
    "type": "Bún",
    "location": "219 Chợ Lớn, Quận 6, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%90%E1%BB%93ng%20Qu%C3%AA%20219%20Ch%E1%BB%A3%20L%E1%BB%9Bn%2C%20Qu%E1%BA%ADn%206%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Quận 6. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Đệ Nhất 2",
    "type": "Bún",
    "location": "186 Lê Quang Sung, Quận 6, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%90%E1%BB%87%20Nh%E1%BA%A5t%202%20186%20L%C3%AA%20Quang%20Sung%2C%20Qu%E1%BA%ADn%206%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Quận 6. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Hoàn Kiếm 3",
    "type": "Bún",
    "location": "71 Hậu Giang, Quận 6, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20Ho%C3%A0n%20Ki%E1%BA%BFm%203%2071%20H%E1%BA%ADu%20Giang%2C%20Qu%E1%BA%ADn%206%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Quận 6. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Hào Hùng 4",
    "type": "Bún",
    "location": "375 Kinh Dương Vương, Quận 6, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20H%C3%A0o%20H%C3%B9ng%204%20375%20Kinh%20D%C6%B0%C6%A1ng%20V%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%206%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Quận 6. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Vĩnh Lộc 5",
    "type": "Bún",
    "location": "405 Chợ Lớn, Quận 6, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20V%C4%A9nh%20L%E1%BB%99c%205%20405%20Ch%E1%BB%A3%20L%E1%BB%9Bn%2C%20Qu%E1%BA%ADn%206%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Quận 6. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Đệ Nhất",
    "type": "Cơm",
    "location": "274 Chợ Lớn, Quận 6, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20%C4%90%E1%BB%87%20Nh%E1%BA%A5t%20274%20Ch%E1%BB%A3%20L%E1%BB%9Bn%2C%20Qu%E1%BA%ADn%206%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Quận 6. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Saigon Deli 2",
    "type": "Cơm",
    "location": "315 Bình Tiên, Quận 6, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20Saigon%20Deli%202%20315%20B%C3%ACnh%20Ti%C3%AAn%2C%20Qu%E1%BA%ADn%206%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Quận 6. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Ngọc Lan 3",
    "type": "Cơm",
    "location": "212 Chợ Lớn, Quận 6, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20Ng%E1%BB%8Dc%20Lan%203%20212%20Ch%E1%BB%A3%20L%E1%BB%9Bn%2C%20Qu%E1%BA%ADn%206%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Quận 6. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Dì Liên 4",
    "type": "Cơm",
    "location": "469 Chợ Lớn, Quận 6, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20D%C3%AC%20Li%C3%AAn%204%20469%20Ch%E1%BB%A3%20L%E1%BB%9Bn%2C%20Qu%E1%BA%ADn%206%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Quận 6. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Thái Bình 5",
    "type": "Cơm",
    "location": "50 Lê Quang Sung, Quận 6, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20Th%C3%A1i%20B%C3%ACnh%205%2050%20L%C3%AA%20Quang%20Sung%2C%20Qu%E1%BA%ADn%206%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Quận 6. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Hương Việt",
    "type": "Lẩu",
    "location": "158 Hậu Giang, Quận 6, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20H%C6%B0%C6%A1ng%20Vi%E1%BB%87t%20158%20H%E1%BA%ADu%20Giang%2C%20Qu%E1%BA%ADn%206%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Quận 6. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Bến Thành 2",
    "type": "Lẩu",
    "location": "110 Lê Quang Sung, Quận 6, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20B%E1%BA%BFn%20Th%C3%A0nh%202%20110%20L%C3%AA%20Quang%20Sung%2C%20Qu%E1%BA%ADn%206%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Quận 6. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Phố Hội 3",
    "type": "Lẩu",
    "location": "373 Lê Quang Sung, Quận 6, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20Ph%E1%BB%91%20H%E1%BB%99i%203%20373%20L%C3%AA%20Quang%20Sung%2C%20Qu%E1%BA%ADn%206%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Quận 6. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Đông Á 4",
    "type": "Lẩu",
    "location": "451 Lê Quang Sung, Quận 6, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20%C4%90%C3%B4ng%20%C3%81%204%20451%20L%C3%AA%20Quang%20Sung%2C%20Qu%E1%BA%ADn%206%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Quận 6. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Dì Liên 5",
    "type": "Lẩu",
    "location": "323 Bình Tiên, Quận 6, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20D%C3%AC%20Li%C3%AAn%205%20323%20B%C3%ACnh%20Ti%C3%AAn%2C%20Qu%E1%BA%ADn%206%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Quận 6. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Bà Năm",
    "type": "Đồ chay",
    "location": "46 Chợ Lớn, Quận 6, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20B%C3%A0%20N%C4%83m%2046%20Ch%E1%BB%A3%20L%E1%BB%9Bn%2C%20Qu%E1%BA%ADn%206%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Quận 6. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Hương Việt 2",
    "type": "Đồ chay",
    "location": "284 Lê Quang Sung, Quận 6, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20H%C6%B0%C6%A1ng%20Vi%E1%BB%87t%202%20284%20L%C3%AA%20Quang%20Sung%2C%20Qu%E1%BA%ADn%206%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Quận 6. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Kim Anh 3",
    "type": "Đồ chay",
    "location": "348 Hậu Giang, Quận 6, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20Kim%20Anh%203%20348%20H%E1%BA%ADu%20Giang%2C%20Qu%E1%BA%ADn%206%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Quận 6. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Nam Hải 4",
    "type": "Đồ chay",
    "location": "175 Hậu Giang, Quận 6, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20Nam%20H%E1%BA%A3i%204%20175%20H%E1%BA%ADu%20Giang%2C%20Qu%E1%BA%ADn%206%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Quận 6. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Hồng Phát 5",
    "type": "Đồ chay",
    "location": "110 Chợ Lớn, Quận 6, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20H%E1%BB%93ng%20Ph%C3%A1t%205%20110%20Ch%E1%BB%A3%20L%E1%BB%9Bn%2C%20Qu%E1%BA%ADn%206%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Quận 6. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Bến Thành",
    "type": "Bánh mì",
    "location": "100 Kinh Dương Vương, Quận 6, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20B%E1%BA%BFn%20Th%C3%A0nh%20100%20Kinh%20D%C6%B0%C6%A1ng%20V%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%206%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Quận 6. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Đồng Quê 2",
    "type": "Bánh mì",
    "location": "181 Hậu Giang, Quận 6, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20%C4%90%E1%BB%93ng%20Qu%C3%AA%202%20181%20H%E1%BA%ADu%20Giang%2C%20Qu%E1%BA%ADn%206%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Quận 6. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Gia Đình 3",
    "type": "Bánh mì",
    "location": "306 Lê Quang Sung, Quận 6, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20Gia%20%C4%90%C3%ACnh%203%20306%20L%C3%AA%20Quang%20Sung%2C%20Qu%E1%BA%ADn%206%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Quận 6. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Vĩnh Lộc 4",
    "type": "Bánh mì",
    "location": "107 Kinh Dương Vương, Quận 6, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20V%C4%A9nh%20L%E1%BB%99c%204%20107%20Kinh%20D%C6%B0%C6%A1ng%20V%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%206%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Quận 6. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Minh Khai 5",
    "type": "Bánh mì",
    "location": "286 Kinh Dương Vương, Quận 6, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20Minh%20Khai%205%20286%20Kinh%20D%C6%B0%C6%A1ng%20V%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%206%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Quận 6. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Hồng Phát",
    "type": "Ăn vặt",
    "location": "64 Bình Tiên, Quận 6, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20H%E1%BB%93ng%20Ph%C3%A1t%2064%20B%C3%ACnh%20Ti%C3%AAn%2C%20Qu%E1%BA%ADn%206%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Quận 6. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Local Taste 2",
    "type": "Ăn vặt",
    "location": "297 Chợ Lớn, Quận 6, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20Local%20Taste%202%20297%20Ch%E1%BB%A3%20L%E1%BB%9Bn%2C%20Qu%E1%BA%ADn%206%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Quận 6. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Local Taste 3",
    "type": "Ăn vặt",
    "location": "434 Bình Tiên, Quận 6, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20Local%20Taste%203%20434%20B%C3%ACnh%20Ti%C3%AAn%2C%20Qu%E1%BA%ADn%206%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Quận 6. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Chú Bảy 4",
    "type": "Ăn vặt",
    "location": "74 Kinh Dương Vương, Quận 6, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20Ch%C3%BA%20B%E1%BA%A3y%204%2074%20Kinh%20D%C6%B0%C6%A1ng%20V%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%206%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Quận 6. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Xưa & Nay 5",
    "type": "Ăn vặt",
    "location": "368 Hậu Giang, Quận 6, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20X%C6%B0a%20%26%20Nay%205%20368%20H%E1%BA%ADu%20Giang%2C%20Qu%E1%BA%ADn%206%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Quận 6. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Xưa & Nay",
    "type": "Bánh cuốn",
    "location": "262 Chợ Lớn, Quận 6, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20X%C6%B0a%20%26%20Nay%20262%20Ch%E1%BB%A3%20L%E1%BB%9Bn%2C%20Qu%E1%BA%ADn%206%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Quận 6. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Sài Thành 2",
    "type": "Bánh cuốn",
    "location": "417 Hậu Giang, Quận 6, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20S%C3%A0i%20Th%C3%A0nh%202%20417%20H%E1%BA%ADu%20Giang%2C%20Qu%E1%BA%ADn%206%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Quận 6. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Kim Anh 3",
    "type": "Bánh cuốn",
    "location": "459 Chợ Lớn, Quận 6, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20Kim%20Anh%203%20459%20Ch%E1%BB%A3%20L%E1%BB%9Bn%2C%20Qu%E1%BA%ADn%206%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Quận 6. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Đồng Quê 4",
    "type": "Bánh cuốn",
    "location": "357 Hậu Giang, Quận 6, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20%C4%90%E1%BB%93ng%20Qu%C3%AA%204%20357%20H%E1%BA%ADu%20Giang%2C%20Qu%E1%BA%ADn%206%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Quận 6. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Hương Việt 5",
    "type": "Bánh cuốn",
    "location": "210 Lê Quang Sung, Quận 6, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20H%C6%B0%C6%A1ng%20Vi%E1%BB%87t%205%20210%20L%C3%AA%20Quang%20Sung%2C%20Qu%E1%BA%ADn%206%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Quận 6. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Mưa Hồng",
    "type": "Bún đậu",
    "location": "29 Bình Tiên, Quận 6, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20M%C6%B0a%20H%E1%BB%93ng%2029%20B%C3%ACnh%20Ti%C3%AAn%2C%20Qu%E1%BA%ADn%206%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Quận 6. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Thanh Xuân 2",
    "type": "Bún đậu",
    "location": "207 Chợ Lớn, Quận 6, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20Thanh%20Xu%C3%A2n%202%20207%20Ch%E1%BB%A3%20L%E1%BB%9Bn%2C%20Qu%E1%BA%ADn%206%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Quận 6. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Thanh Đa 3",
    "type": "Bún đậu",
    "location": "489 Hậu Giang, Quận 6, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20Thanh%20%C4%90a%203%20489%20H%E1%BA%ADu%20Giang%2C%20Qu%E1%BA%ADn%206%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Quận 6. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Nam Hải 4",
    "type": "Bún đậu",
    "location": "338 Lê Quang Sung, Quận 6, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20Nam%20H%E1%BA%A3i%204%20338%20L%C3%AA%20Quang%20Sung%2C%20Qu%E1%BA%ADn%206%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Quận 6. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Viet Kitchen 5",
    "type": "Bún đậu",
    "location": "211 Bình Tiên, Quận 6, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20Viet%20Kitchen%205%20211%20B%C3%ACnh%20Ti%C3%AAn%2C%20Qu%E1%BA%ADn%206%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Quận 6. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Thanh Xuân",
    "type": "Hải sản",
    "location": "390 Hậu Giang, Quận 6, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20Thanh%20Xu%C3%A2n%20390%20H%E1%BA%ADu%20Giang%2C%20Qu%E1%BA%ADn%206%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Quận 6. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Xưa & Nay 2",
    "type": "Hải sản",
    "location": "360 Bình Tiên, Quận 6, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20X%C6%B0a%20%26%20Nay%202%20360%20B%C3%ACnh%20Ti%C3%AAn%2C%20Qu%E1%BA%ADn%206%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Quận 6. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Minh Khai 3",
    "type": "Hải sản",
    "location": "489 Hậu Giang, Quận 6, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20Minh%20Khai%203%20489%20H%E1%BA%ADu%20Giang%2C%20Qu%E1%BA%ADn%206%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Quận 6. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Mưa Hồng 4",
    "type": "Hải sản",
    "location": "141 Lê Quang Sung, Quận 6, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20M%C6%B0a%20H%E1%BB%93ng%204%20141%20L%C3%AA%20Quang%20Sung%2C%20Qu%E1%BA%ADn%206%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Quận 6. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Gia Đình 5",
    "type": "Hải sản",
    "location": "225 Hậu Giang, Quận 6, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20Gia%20%C4%90%C3%ACnh%205%20225%20H%E1%BA%ADu%20Giang%2C%20Qu%E1%BA%ADn%206%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Quận 6. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Gia Đình",
    "type": "Ốc",
    "location": "379 Lê Quang Sung, Quận 6, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20Gia%20%C4%90%C3%ACnh%20379%20L%C3%AA%20Quang%20Sung%2C%20Qu%E1%BA%ADn%206%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Quận 6. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Hương Việt 2",
    "type": "Ốc",
    "location": "307 Chợ Lớn, Quận 6, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20H%C6%B0%C6%A1ng%20Vi%E1%BB%87t%202%20307%20Ch%E1%BB%A3%20L%E1%BB%9Bn%2C%20Qu%E1%BA%ADn%206%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Quận 6. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Cô Ba 3",
    "type": "Ốc",
    "location": "6 Lê Quang Sung, Quận 6, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20C%C3%B4%20Ba%203%206%20L%C3%AA%20Quang%20Sung%2C%20Qu%E1%BA%ADn%206%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Quận 6. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Ông Già 4",
    "type": "Ốc",
    "location": "171 Kinh Dương Vương, Quận 6, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20%C3%94ng%20Gi%C3%A0%204%20171%20Kinh%20D%C6%B0%C6%A1ng%20V%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%206%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Quận 6. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Đồng Quê 5",
    "type": "Ốc",
    "location": "162 Chợ Lớn, Quận 6, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20%C4%90%E1%BB%93ng%20Qu%C3%AA%205%20162%20Ch%E1%BB%A3%20L%E1%BB%9Bn%2C%20Qu%E1%BA%ADn%206%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Quận 6. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Minh Khai",
    "type": "Mì",
    "location": "37 Kinh Dương Vương, Quận 6, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20Minh%20Khai%2037%20Kinh%20D%C6%B0%C6%A1ng%20V%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%206%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Quận 6. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Đông Á 2",
    "type": "Mì",
    "location": "57 Lê Quang Sung, Quận 6, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20%C4%90%C3%B4ng%20%C3%81%202%2057%20L%C3%AA%20Quang%20Sung%2C%20Qu%E1%BA%ADn%206%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Quận 6. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Cô Ba 3",
    "type": "Mì",
    "location": "10 Chợ Lớn, Quận 6, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20C%C3%B4%20Ba%203%2010%20Ch%E1%BB%A3%20L%E1%BB%9Bn%2C%20Qu%E1%BA%ADn%206%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Quận 6. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Dì Liên 4",
    "type": "Mì",
    "location": "129 Chợ Lớn, Quận 6, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20D%C3%AC%20Li%C3%AAn%204%20129%20Ch%E1%BB%A3%20L%E1%BB%9Bn%2C%20Qu%E1%BA%ADn%206%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Quận 6. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Chú Bảy 5",
    "type": "Mì",
    "location": "326 Bình Tiên, Quận 6, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20Ch%C3%BA%20B%E1%BA%A3y%205%20326%20B%C3%ACnh%20Ti%C3%AAn%2C%20Qu%E1%BA%ADn%206%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Quận 6. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Sông Trăng",
    "type": "Hủ tiếu",
    "location": "339 Chợ Lớn, Quận 6, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20S%C3%B4ng%20Tr%C4%83ng%20339%20Ch%E1%BB%A3%20L%E1%BB%9Bn%2C%20Qu%E1%BA%ADn%206%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Quận 6. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Sông Trăng 2",
    "type": "Hủ tiếu",
    "location": "233 Lê Quang Sung, Quận 6, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20S%C3%B4ng%20Tr%C4%83ng%202%20233%20L%C3%AA%20Quang%20Sung%2C%20Qu%E1%BA%ADn%206%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Quận 6. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Nam Hải 3",
    "type": "Hủ tiếu",
    "location": "316 Chợ Lớn, Quận 6, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20Nam%20H%E1%BA%A3i%203%20316%20Ch%E1%BB%A3%20L%E1%BB%9Bn%2C%20Qu%E1%BA%ADn%206%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Quận 6. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Kim Anh 4",
    "type": "Hủ tiếu",
    "location": "289 Bình Tiên, Quận 6, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20Kim%20Anh%204%20289%20B%C3%ACnh%20Ti%C3%AAn%2C%20Qu%E1%BA%ADn%206%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Quận 6. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Ngọc Lan 5",
    "type": "Hủ tiếu",
    "location": "99 Kinh Dương Vương, Quận 6, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20Ng%E1%BB%8Dc%20Lan%205%2099%20Kinh%20D%C6%B0%C6%A1ng%20V%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%206%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Quận 6. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Gia Đình",
    "type": "Đồ nướng",
    "location": "429 Chợ Lớn, Quận 6, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20Gia%20%C4%90%C3%ACnh%20429%20Ch%E1%BB%A3%20L%E1%BB%9Bn%2C%20Qu%E1%BA%ADn%206%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Quận 6. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Viet Kitchen 2",
    "type": "Đồ nướng",
    "location": "491 Chợ Lớn, Quận 6, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20Viet%20Kitchen%202%20491%20Ch%E1%BB%A3%20L%E1%BB%9Bn%2C%20Qu%E1%BA%ADn%206%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Quận 6. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Minh Khai 3",
    "type": "Đồ nướng",
    "location": "156 Lê Quang Sung, Quận 6, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20Minh%20Khai%203%20156%20L%C3%AA%20Quang%20Sung%2C%20Qu%E1%BA%ADn%206%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Quận 6. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Mưa Hồng 4",
    "type": "Đồ nướng",
    "location": "112 Bình Tiên, Quận 6, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20M%C6%B0a%20H%E1%BB%93ng%204%20112%20B%C3%ACnh%20Ti%C3%AAn%2C%20Qu%E1%BA%ADn%206%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Quận 6. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Đệ Nhất 5",
    "type": "Đồ nướng",
    "location": "417 Chợ Lớn, Quận 6, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20%C4%90%E1%BB%87%20Nh%E1%BA%A5t%205%20417%20Ch%E1%BB%A3%20L%E1%BB%9Bn%2C%20Qu%E1%BA%ADn%206%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Quận 6. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Local Taste",
    "type": "Nước & Cafe",
    "location": "122 Bình Tiên, Quận 6, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20Local%20Taste%20122%20B%C3%ACnh%20Ti%C3%AAn%2C%20Qu%E1%BA%ADn%206%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Quận 6. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Thanh Đa 2",
    "type": "Nước & Cafe",
    "location": "362 Bình Tiên, Quận 6, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20Thanh%20%C4%90a%202%20362%20B%C3%ACnh%20Ti%C3%AAn%2C%20Qu%E1%BA%ADn%206%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Quận 6. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Saigon Deli 3",
    "type": "Nước & Cafe",
    "location": "16 Kinh Dương Vương, Quận 6, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20Saigon%20Deli%203%2016%20Kinh%20D%C6%B0%C6%A1ng%20V%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%206%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Quận 6. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Sông Trăng 4",
    "type": "Nước & Cafe",
    "location": "383 Kinh Dương Vương, Quận 6, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20S%C3%B4ng%20Tr%C4%83ng%204%20383%20Kinh%20D%C6%B0%C6%A1ng%20V%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%206%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Quận 6. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Anh Tư 5",
    "type": "Nước & Cafe",
    "location": "211 Kinh Dương Vương, Quận 6, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20Anh%20T%C6%B0%205%20211%20Kinh%20D%C6%B0%C6%A1ng%20V%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%206%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Quận 6. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Local Taste",
    "type": "Chè",
    "location": "270 Lê Quang Sung, Quận 6, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20Local%20Taste%20270%20L%C3%AA%20Quang%20Sung%2C%20Qu%E1%BA%ADn%206%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Quận 6. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Chú Bảy 2",
    "type": "Chè",
    "location": "443 Bình Tiên, Quận 6, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20Ch%C3%BA%20B%E1%BA%A3y%202%20443%20B%C3%ACnh%20Ti%C3%AAn%2C%20Qu%E1%BA%ADn%206%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Quận 6. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Hồng Phát 3",
    "type": "Chè",
    "location": "298 Bình Tiên, Quận 6, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20H%E1%BB%93ng%20Ph%C3%A1t%203%20298%20B%C3%ACnh%20Ti%C3%AAn%2C%20Qu%E1%BA%ADn%206%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Quận 6. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Sài Thành 4",
    "type": "Chè",
    "location": "93 Kinh Dương Vương, Quận 6, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20S%C3%A0i%20Th%C3%A0nh%204%2093%20Kinh%20D%C6%B0%C6%A1ng%20V%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%206%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Quận 6. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Sài Thành 5",
    "type": "Chè",
    "location": "401 Chợ Lớn, Quận 6, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20S%C3%A0i%20Th%C3%A0nh%205%20401%20Ch%E1%BB%A3%20L%E1%BB%9Bn%2C%20Qu%E1%BA%ADn%206%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Quận 6. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Bến Thành",
    "type": "Bánh xèo",
    "location": "232 Lê Quang Sung, Quận 6, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20B%E1%BA%BFn%20Th%C3%A0nh%20232%20L%C3%AA%20Quang%20Sung%2C%20Qu%E1%BA%ADn%206%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Quận 6. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Thanh Đa 2",
    "type": "Bánh xèo",
    "location": "159 Lê Quang Sung, Quận 6, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20Thanh%20%C4%90a%202%20159%20L%C3%AA%20Quang%20Sung%2C%20Qu%E1%BA%ADn%206%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Quận 6. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Đồng Quê 3",
    "type": "Bánh xèo",
    "location": "33 Bình Tiên, Quận 6, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20%C4%90%E1%BB%93ng%20Qu%C3%AA%203%2033%20B%C3%ACnh%20Ti%C3%AAn%2C%20Qu%E1%BA%ADn%206%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Quận 6. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Mưa Hồng 4",
    "type": "Bánh xèo",
    "location": "41 Hậu Giang, Quận 6, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20M%C6%B0a%20H%E1%BB%93ng%204%2041%20H%E1%BA%ADu%20Giang%2C%20Qu%E1%BA%ADn%206%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Quận 6. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Anh Tư 5",
    "type": "Bánh xèo",
    "location": "267 Lê Quang Sung, Quận 6, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20Anh%20T%C6%B0%205%20267%20L%C3%AA%20Quang%20Sung%2C%20Qu%E1%BA%ADn%206%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Quận 6. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Nam Hải",
    "type": "Khác",
    "location": "266 Lê Quang Sung, Quận 6, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20Nam%20H%E1%BA%A3i%20266%20L%C3%AA%20Quang%20Sung%2C%20Qu%E1%BA%ADn%206%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Quận 6. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Thanh Xuân 2",
    "type": "Khác",
    "location": "272 Chợ Lớn, Quận 6, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20Thanh%20Xu%C3%A2n%202%20272%20Ch%E1%BB%A3%20L%E1%BB%9Bn%2C%20Qu%E1%BA%ADn%206%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Quận 6. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Sông Trăng 3",
    "type": "Khác",
    "location": "47 Lê Quang Sung, Quận 6, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20S%C3%B4ng%20Tr%C4%83ng%203%2047%20L%C3%AA%20Quang%20Sung%2C%20Qu%E1%BA%ADn%206%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Quận 6. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Hoàn Kiếm 4",
    "type": "Khác",
    "location": "46 Kinh Dương Vương, Quận 6, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20Ho%C3%A0n%20Ki%E1%BA%BFm%204%2046%20Kinh%20D%C6%B0%C6%A1ng%20V%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%206%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Quận 6. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Đồng Quê 5",
    "type": "Khác",
    "location": "406 Bình Tiên, Quận 6, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20%C4%90%E1%BB%93ng%20Qu%C3%AA%205%20406%20B%C3%ACnh%20Ti%C3%AAn%2C%20Qu%E1%BA%ADn%206%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Quận 6. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Đông Á",
    "type": "Phở",
    "location": "126 Nguyễn Văn Linh, Quận 7, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20%C4%90%C3%B4ng%20%C3%81%20126%20Nguy%E1%BB%85n%20V%C4%83n%20Linh%2C%20Qu%E1%BA%ADn%207%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Quận 7. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Vĩnh Lộc 2",
    "type": "Phở",
    "location": "334 Nguyễn Thị Thập, Quận 7, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20V%C4%A9nh%20L%E1%BB%99c%202%20334%20Nguy%E1%BB%85n%20Th%E1%BB%8B%20Th%E1%BA%ADp%2C%20Qu%E1%BA%ADn%207%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Quận 7. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Đông Á 3",
    "type": "Phở",
    "location": "329 Nguyễn Thị Thập, Quận 7, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20%C4%90%C3%B4ng%20%C3%81%203%20329%20Nguy%E1%BB%85n%20Th%E1%BB%8B%20Th%E1%BA%ADp%2C%20Qu%E1%BA%ADn%207%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Quận 7. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Thanh Xuân 4",
    "type": "Phở",
    "location": "20 Lê Văn Lương, Quận 7, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20Thanh%20Xu%C3%A2n%204%2020%20L%C3%AA%20V%C4%83n%20L%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%207%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Quận 7. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Local Taste 5",
    "type": "Phở",
    "location": "208 Lê Văn Lương, Quận 7, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20Local%20Taste%205%20208%20L%C3%AA%20V%C4%83n%20L%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%207%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Quận 7. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Bến Thành",
    "type": "Bún",
    "location": "396 Nguyễn Văn Linh, Quận 7, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20B%E1%BA%BFn%20Th%C3%A0nh%20396%20Nguy%E1%BB%85n%20V%C4%83n%20Linh%2C%20Qu%E1%BA%ADn%207%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Quận 7. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Đồng Quê 2",
    "type": "Bún",
    "location": "4 Huỳnh Tấn Phát, Quận 7, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%90%E1%BB%93ng%20Qu%C3%AA%202%204%20Hu%E1%BB%B3nh%20T%E1%BA%A5n%20Ph%C3%A1t%2C%20Qu%E1%BA%ADn%207%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Quận 7. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Saigon Deli 3",
    "type": "Bún",
    "location": "461 Lê Văn Lương, Quận 7, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20Saigon%20Deli%203%20461%20L%C3%AA%20V%C4%83n%20L%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%207%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Quận 7. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Dì Liên 4",
    "type": "Bún",
    "location": "443 Nguyễn Văn Linh, Quận 7, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20D%C3%AC%20Li%C3%AAn%204%20443%20Nguy%E1%BB%85n%20V%C4%83n%20Linh%2C%20Qu%E1%BA%ADn%207%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Quận 7. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Saigon Deli 5",
    "type": "Bún",
    "location": "51 Nguyễn Thị Thập, Quận 7, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20Saigon%20Deli%205%2051%20Nguy%E1%BB%85n%20Th%E1%BB%8B%20Th%E1%BA%ADp%2C%20Qu%E1%BA%ADn%207%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Quận 7. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Hào Hùng",
    "type": "Cơm",
    "location": "275 Lê Văn Lương, Quận 7, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20H%C3%A0o%20H%C3%B9ng%20275%20L%C3%AA%20V%C4%83n%20L%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%207%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Quận 7. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Ông Già 2",
    "type": "Cơm",
    "location": "175 Phạm Hữu Lầu, Quận 7, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20%C3%94ng%20Gi%C3%A0%202%20175%20Ph%E1%BA%A1m%20H%E1%BB%AFu%20L%E1%BA%A7u%2C%20Qu%E1%BA%ADn%207%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Quận 7. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Hồng Phát 3",
    "type": "Cơm",
    "location": "43 Nguyễn Thị Thập, Quận 7, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20H%E1%BB%93ng%20Ph%C3%A1t%203%2043%20Nguy%E1%BB%85n%20Th%E1%BB%8B%20Th%E1%BA%ADp%2C%20Qu%E1%BA%ADn%207%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Quận 7. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Thanh Đa 4",
    "type": "Cơm",
    "location": "343 Nguyễn Thị Thập, Quận 7, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20Thanh%20%C4%90a%204%20343%20Nguy%E1%BB%85n%20Th%E1%BB%8B%20Th%E1%BA%ADp%2C%20Qu%E1%BA%ADn%207%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Quận 7. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Dì Liên 5",
    "type": "Cơm",
    "location": "239 Nguyễn Văn Linh, Quận 7, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20D%C3%AC%20Li%C3%AAn%205%20239%20Nguy%E1%BB%85n%20V%C4%83n%20Linh%2C%20Qu%E1%BA%ADn%207%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Quận 7. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Hào Hùng",
    "type": "Lẩu",
    "location": "431 Phạm Hữu Lầu, Quận 7, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20H%C3%A0o%20H%C3%B9ng%20431%20Ph%E1%BA%A1m%20H%E1%BB%AFu%20L%E1%BA%A7u%2C%20Qu%E1%BA%ADn%207%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Quận 7. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Sông Trăng 2",
    "type": "Lẩu",
    "location": "287 Lê Văn Lương, Quận 7, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20S%C3%B4ng%20Tr%C4%83ng%202%20287%20L%C3%AA%20V%C4%83n%20L%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%207%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Quận 7. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Phố Hội 3",
    "type": "Lẩu",
    "location": "330 Huỳnh Tấn Phát, Quận 7, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20Ph%E1%BB%91%20H%E1%BB%99i%203%20330%20Hu%E1%BB%B3nh%20T%E1%BA%A5n%20Ph%C3%A1t%2C%20Qu%E1%BA%ADn%207%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Quận 7. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Hồng Phát 4",
    "type": "Lẩu",
    "location": "180 Phạm Hữu Lầu, Quận 7, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20H%E1%BB%93ng%20Ph%C3%A1t%204%20180%20Ph%E1%BA%A1m%20H%E1%BB%AFu%20L%E1%BA%A7u%2C%20Qu%E1%BA%ADn%207%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Quận 7. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Đệ Nhất 5",
    "type": "Lẩu",
    "location": "217 Nguyễn Thị Thập, Quận 7, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20%C4%90%E1%BB%87%20Nh%E1%BA%A5t%205%20217%20Nguy%E1%BB%85n%20Th%E1%BB%8B%20Th%E1%BA%ADp%2C%20Qu%E1%BA%ADn%207%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Quận 7. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Local Taste",
    "type": "Đồ chay",
    "location": "421 Phạm Hữu Lầu, Quận 7, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20Local%20Taste%20421%20Ph%E1%BA%A1m%20H%E1%BB%AFu%20L%E1%BA%A7u%2C%20Qu%E1%BA%ADn%207%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Quận 7. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Thái Bình 2",
    "type": "Đồ chay",
    "location": "31 Nguyễn Thị Thập, Quận 7, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20Th%C3%A1i%20B%C3%ACnh%202%2031%20Nguy%E1%BB%85n%20Th%E1%BB%8B%20Th%E1%BA%ADp%2C%20Qu%E1%BA%ADn%207%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Quận 7. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Đông Á 3",
    "type": "Đồ chay",
    "location": "459 Huỳnh Tấn Phát, Quận 7, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20%C4%90%C3%B4ng%20%C3%81%203%20459%20Hu%E1%BB%B3nh%20T%E1%BA%A5n%20Ph%C3%A1t%2C%20Qu%E1%BA%ADn%207%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Quận 7. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Bến Thành 4",
    "type": "Đồ chay",
    "location": "108 Nguyễn Thị Thập, Quận 7, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20B%E1%BA%BFn%20Th%C3%A0nh%204%20108%20Nguy%E1%BB%85n%20Th%E1%BB%8B%20Th%E1%BA%ADp%2C%20Qu%E1%BA%ADn%207%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Quận 7. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Nắng Vàng 5",
    "type": "Đồ chay",
    "location": "274 Phạm Hữu Lầu, Quận 7, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20N%E1%BA%AFng%20V%C3%A0ng%205%20274%20Ph%E1%BA%A1m%20H%E1%BB%AFu%20L%E1%BA%A7u%2C%20Qu%E1%BA%ADn%207%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Quận 7. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Ông Già",
    "type": "Bánh mì",
    "location": "381 Lê Văn Lương, Quận 7, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20%C3%94ng%20Gi%C3%A0%20381%20L%C3%AA%20V%C4%83n%20L%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%207%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Quận 7. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Xưa & Nay 2",
    "type": "Bánh mì",
    "location": "36 Nguyễn Văn Linh, Quận 7, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20X%C6%B0a%20%26%20Nay%202%2036%20Nguy%E1%BB%85n%20V%C4%83n%20Linh%2C%20Qu%E1%BA%ADn%207%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Quận 7. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Gia Đình 3",
    "type": "Bánh mì",
    "location": "257 Nguyễn Thị Thập, Quận 7, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20Gia%20%C4%90%C3%ACnh%203%20257%20Nguy%E1%BB%85n%20Th%E1%BB%8B%20Th%E1%BA%ADp%2C%20Qu%E1%BA%ADn%207%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Quận 7. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Saigon Deli 4",
    "type": "Bánh mì",
    "location": "282 Lê Văn Lương, Quận 7, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20Saigon%20Deli%204%20282%20L%C3%AA%20V%C4%83n%20L%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%207%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Quận 7. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Đệ Nhất 5",
    "type": "Bánh mì",
    "location": "211 Nguyễn Thị Thập, Quận 7, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20%C4%90%E1%BB%87%20Nh%E1%BA%A5t%205%20211%20Nguy%E1%BB%85n%20Th%E1%BB%8B%20Th%E1%BA%ADp%2C%20Qu%E1%BA%ADn%207%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Quận 7. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Đệ Nhất",
    "type": "Ăn vặt",
    "location": "254 Huỳnh Tấn Phát, Quận 7, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20%C4%90%E1%BB%87%20Nh%E1%BA%A5t%20254%20Hu%E1%BB%B3nh%20T%E1%BA%A5n%20Ph%C3%A1t%2C%20Qu%E1%BA%ADn%207%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Quận 7. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Bà Năm 2",
    "type": "Ăn vặt",
    "location": "139 Huỳnh Tấn Phát, Quận 7, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20B%C3%A0%20N%C4%83m%202%20139%20Hu%E1%BB%B3nh%20T%E1%BA%A5n%20Ph%C3%A1t%2C%20Qu%E1%BA%ADn%207%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Quận 7. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Phố Hội 3",
    "type": "Ăn vặt",
    "location": "148 Nguyễn Văn Linh, Quận 7, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20Ph%E1%BB%91%20H%E1%BB%99i%203%20148%20Nguy%E1%BB%85n%20V%C4%83n%20Linh%2C%20Qu%E1%BA%ADn%207%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Quận 7. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Ông Già 4",
    "type": "Ăn vặt",
    "location": "154 Nguyễn Thị Thập, Quận 7, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20%C3%94ng%20Gi%C3%A0%204%20154%20Nguy%E1%BB%85n%20Th%E1%BB%8B%20Th%E1%BA%ADp%2C%20Qu%E1%BA%ADn%207%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Quận 7. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Thanh Đa 5",
    "type": "Ăn vặt",
    "location": "249 Nguyễn Văn Linh, Quận 7, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20Thanh%20%C4%90a%205%20249%20Nguy%E1%BB%85n%20V%C4%83n%20Linh%2C%20Qu%E1%BA%ADn%207%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Quận 7. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Đệ Nhất",
    "type": "Bánh cuốn",
    "location": "441 Phạm Hữu Lầu, Quận 7, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20%C4%90%E1%BB%87%20Nh%E1%BA%A5t%20441%20Ph%E1%BA%A1m%20H%E1%BB%AFu%20L%E1%BA%A7u%2C%20Qu%E1%BA%ADn%207%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Quận 7. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Sài Thành 2",
    "type": "Bánh cuốn",
    "location": "154 Nguyễn Thị Thập, Quận 7, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20S%C3%A0i%20Th%C3%A0nh%202%20154%20Nguy%E1%BB%85n%20Th%E1%BB%8B%20Th%E1%BA%ADp%2C%20Qu%E1%BA%ADn%207%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Quận 7. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Bến Thành 3",
    "type": "Bánh cuốn",
    "location": "27 Huỳnh Tấn Phát, Quận 7, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20B%E1%BA%BFn%20Th%C3%A0nh%203%2027%20Hu%E1%BB%B3nh%20T%E1%BA%A5n%20Ph%C3%A1t%2C%20Qu%E1%BA%ADn%207%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Quận 7. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Hào Hùng 4",
    "type": "Bánh cuốn",
    "location": "380 Huỳnh Tấn Phát, Quận 7, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20H%C3%A0o%20H%C3%B9ng%204%20380%20Hu%E1%BB%B3nh%20T%E1%BA%A5n%20Ph%C3%A1t%2C%20Qu%E1%BA%ADn%207%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Quận 7. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Minh Khai 5",
    "type": "Bánh cuốn",
    "location": "234 Nguyễn Văn Linh, Quận 7, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20Minh%20Khai%205%20234%20Nguy%E1%BB%85n%20V%C4%83n%20Linh%2C%20Qu%E1%BA%ADn%207%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Quận 7. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Nam Hải",
    "type": "Bún đậu",
    "location": "166 Huỳnh Tấn Phát, Quận 7, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20Nam%20H%E1%BA%A3i%20166%20Hu%E1%BB%B3nh%20T%E1%BA%A5n%20Ph%C3%A1t%2C%20Qu%E1%BA%ADn%207%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Quận 7. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Dì Liên 2",
    "type": "Bún đậu",
    "location": "35 Nguyễn Văn Linh, Quận 7, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20D%C3%AC%20Li%C3%AAn%202%2035%20Nguy%E1%BB%85n%20V%C4%83n%20Linh%2C%20Qu%E1%BA%ADn%207%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Quận 7. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Bà Năm 3",
    "type": "Bún đậu",
    "location": "94 Lê Văn Lương, Quận 7, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20B%C3%A0%20N%C4%83m%203%2094%20L%C3%AA%20V%C4%83n%20L%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%207%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Quận 7. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Bà Năm 4",
    "type": "Bún đậu",
    "location": "428 Huỳnh Tấn Phát, Quận 7, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20B%C3%A0%20N%C4%83m%204%20428%20Hu%E1%BB%B3nh%20T%E1%BA%A5n%20Ph%C3%A1t%2C%20Qu%E1%BA%ADn%207%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Quận 7. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Đệ Nhất 5",
    "type": "Bún đậu",
    "location": "447 Phạm Hữu Lầu, Quận 7, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20%C4%90%E1%BB%87%20Nh%E1%BA%A5t%205%20447%20Ph%E1%BA%A1m%20H%E1%BB%AFu%20L%E1%BA%A7u%2C%20Qu%E1%BA%ADn%207%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Quận 7. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Nắng Vàng",
    "type": "Hải sản",
    "location": "285 Lê Văn Lương, Quận 7, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20N%E1%BA%AFng%20V%C3%A0ng%20285%20L%C3%AA%20V%C4%83n%20L%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%207%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Quận 7. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Minh Khai 2",
    "type": "Hải sản",
    "location": "57 Lê Văn Lương, Quận 7, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20Minh%20Khai%202%2057%20L%C3%AA%20V%C4%83n%20L%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%207%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Quận 7. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Bến Thành 3",
    "type": "Hải sản",
    "location": "95 Nguyễn Thị Thập, Quận 7, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20B%E1%BA%BFn%20Th%C3%A0nh%203%2095%20Nguy%E1%BB%85n%20Th%E1%BB%8B%20Th%E1%BA%ADp%2C%20Qu%E1%BA%ADn%207%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Quận 7. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Anh Tư 4",
    "type": "Hải sản",
    "location": "493 Lê Văn Lương, Quận 7, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20Anh%20T%C6%B0%204%20493%20L%C3%AA%20V%C4%83n%20L%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%207%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Quận 7. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Gia Đình 5",
    "type": "Hải sản",
    "location": "89 Nguyễn Thị Thập, Quận 7, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20Gia%20%C4%90%C3%ACnh%205%2089%20Nguy%E1%BB%85n%20Th%E1%BB%8B%20Th%E1%BA%ADp%2C%20Qu%E1%BA%ADn%207%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Quận 7. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Vĩnh Lộc",
    "type": "Ốc",
    "location": "93 Nguyễn Văn Linh, Quận 7, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20V%C4%A9nh%20L%E1%BB%99c%2093%20Nguy%E1%BB%85n%20V%C4%83n%20Linh%2C%20Qu%E1%BA%ADn%207%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Quận 7. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Đồng Quê 2",
    "type": "Ốc",
    "location": "231 Lê Văn Lương, Quận 7, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20%C4%90%E1%BB%93ng%20Qu%C3%AA%202%20231%20L%C3%AA%20V%C4%83n%20L%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%207%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Quận 7. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Hồng Phát 3",
    "type": "Ốc",
    "location": "378 Nguyễn Thị Thập, Quận 7, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20H%E1%BB%93ng%20Ph%C3%A1t%203%20378%20Nguy%E1%BB%85n%20Th%E1%BB%8B%20Th%E1%BA%ADp%2C%20Qu%E1%BA%ADn%207%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Quận 7. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Chú Bảy 4",
    "type": "Ốc",
    "location": "213 Phạm Hữu Lầu, Quận 7, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20Ch%C3%BA%20B%E1%BA%A3y%204%20213%20Ph%E1%BA%A1m%20H%E1%BB%AFu%20L%E1%BA%A7u%2C%20Qu%E1%BA%ADn%207%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Quận 7. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Ngọc Lan 5",
    "type": "Ốc",
    "location": "444 Nguyễn Văn Linh, Quận 7, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20Ng%E1%BB%8Dc%20Lan%205%20444%20Nguy%E1%BB%85n%20V%C4%83n%20Linh%2C%20Qu%E1%BA%ADn%207%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Quận 7. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Vĩnh Lộc",
    "type": "Mì",
    "location": "247 Nguyễn Thị Thập, Quận 7, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20V%C4%A9nh%20L%E1%BB%99c%20247%20Nguy%E1%BB%85n%20Th%E1%BB%8B%20Th%E1%BA%ADp%2C%20Qu%E1%BA%ADn%207%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Quận 7. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Hào Hùng 2",
    "type": "Mì",
    "location": "296 Nguyễn Thị Thập, Quận 7, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20H%C3%A0o%20H%C3%B9ng%202%20296%20Nguy%E1%BB%85n%20Th%E1%BB%8B%20Th%E1%BA%ADp%2C%20Qu%E1%BA%ADn%207%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Quận 7. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Sông Trăng 3",
    "type": "Mì",
    "location": "67 Nguyễn Thị Thập, Quận 7, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20S%C3%B4ng%20Tr%C4%83ng%203%2067%20Nguy%E1%BB%85n%20Th%E1%BB%8B%20Th%E1%BA%ADp%2C%20Qu%E1%BA%ADn%207%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Quận 7. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Hoàn Kiếm 4",
    "type": "Mì",
    "location": "164 Lê Văn Lương, Quận 7, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20Ho%C3%A0n%20Ki%E1%BA%BFm%204%20164%20L%C3%AA%20V%C4%83n%20L%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%207%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Quận 7. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Chú Bảy 5",
    "type": "Mì",
    "location": "255 Huỳnh Tấn Phát, Quận 7, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20Ch%C3%BA%20B%E1%BA%A3y%205%20255%20Hu%E1%BB%B3nh%20T%E1%BA%A5n%20Ph%C3%A1t%2C%20Qu%E1%BA%ADn%207%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Quận 7. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Đông Á",
    "type": "Hủ tiếu",
    "location": "398 Phạm Hữu Lầu, Quận 7, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20%C4%90%C3%B4ng%20%C3%81%20398%20Ph%E1%BA%A1m%20H%E1%BB%AFu%20L%E1%BA%A7u%2C%20Qu%E1%BA%ADn%207%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Quận 7. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Thanh Xuân 2",
    "type": "Hủ tiếu",
    "location": "218 Lê Văn Lương, Quận 7, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20Thanh%20Xu%C3%A2n%202%20218%20L%C3%AA%20V%C4%83n%20L%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%207%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Quận 7. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Đồng Quê 3",
    "type": "Hủ tiếu",
    "location": "127 Nguyễn Thị Thập, Quận 7, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20%C4%90%E1%BB%93ng%20Qu%C3%AA%203%20127%20Nguy%E1%BB%85n%20Th%E1%BB%8B%20Th%E1%BA%ADp%2C%20Qu%E1%BA%ADn%207%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Quận 7. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Cô Ba 4",
    "type": "Hủ tiếu",
    "location": "185 Lê Văn Lương, Quận 7, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20C%C3%B4%20Ba%204%20185%20L%C3%AA%20V%C4%83n%20L%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%207%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Quận 7. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Minh Khai 5",
    "type": "Hủ tiếu",
    "location": "78 Phạm Hữu Lầu, Quận 7, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20Minh%20Khai%205%2078%20Ph%E1%BA%A1m%20H%E1%BB%AFu%20L%E1%BA%A7u%2C%20Qu%E1%BA%ADn%207%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Quận 7. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Đông Á",
    "type": "Đồ nướng",
    "location": "123 Lê Văn Lương, Quận 7, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20%C4%90%C3%B4ng%20%C3%81%20123%20L%C3%AA%20V%C4%83n%20L%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%207%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Quận 7. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Cô Ba 2",
    "type": "Đồ nướng",
    "location": "447 Nguyễn Văn Linh, Quận 7, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20C%C3%B4%20Ba%202%20447%20Nguy%E1%BB%85n%20V%C4%83n%20Linh%2C%20Qu%E1%BA%ADn%207%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Quận 7. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Anh Tư 3",
    "type": "Đồ nướng",
    "location": "283 Phạm Hữu Lầu, Quận 7, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20Anh%20T%C6%B0%203%20283%20Ph%E1%BA%A1m%20H%E1%BB%AFu%20L%E1%BA%A7u%2C%20Qu%E1%BA%ADn%207%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Quận 7. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Dì Liên 4",
    "type": "Đồ nướng",
    "location": "75 Nguyễn Văn Linh, Quận 7, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20D%C3%AC%20Li%C3%AAn%204%2075%20Nguy%E1%BB%85n%20V%C4%83n%20Linh%2C%20Qu%E1%BA%ADn%207%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Quận 7. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Nam Hải 5",
    "type": "Đồ nướng",
    "location": "483 Huỳnh Tấn Phát, Quận 7, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20Nam%20H%E1%BA%A3i%205%20483%20Hu%E1%BB%B3nh%20T%E1%BA%A5n%20Ph%C3%A1t%2C%20Qu%E1%BA%ADn%207%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Quận 7. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Minh Khai",
    "type": "Nước & Cafe",
    "location": "7 Lê Văn Lương, Quận 7, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20Minh%20Khai%207%20L%C3%AA%20V%C4%83n%20L%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%207%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Quận 7. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Hào Hùng 2",
    "type": "Nước & Cafe",
    "location": "345 Nguyễn Văn Linh, Quận 7, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20H%C3%A0o%20H%C3%B9ng%202%20345%20Nguy%E1%BB%85n%20V%C4%83n%20Linh%2C%20Qu%E1%BA%ADn%207%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Quận 7. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Anh Tư 3",
    "type": "Nước & Cafe",
    "location": "4 Huỳnh Tấn Phát, Quận 7, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20Anh%20T%C6%B0%203%204%20Hu%E1%BB%B3nh%20T%E1%BA%A5n%20Ph%C3%A1t%2C%20Qu%E1%BA%ADn%207%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Quận 7. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Hương Việt 4",
    "type": "Nước & Cafe",
    "location": "56 Nguyễn Thị Thập, Quận 7, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20H%C6%B0%C6%A1ng%20Vi%E1%BB%87t%204%2056%20Nguy%E1%BB%85n%20Th%E1%BB%8B%20Th%E1%BA%ADp%2C%20Qu%E1%BA%ADn%207%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Quận 7. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Anh Tư 5",
    "type": "Nước & Cafe",
    "location": "90 Phạm Hữu Lầu, Quận 7, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20Anh%20T%C6%B0%205%2090%20Ph%E1%BA%A1m%20H%E1%BB%AFu%20L%E1%BA%A7u%2C%20Qu%E1%BA%ADn%207%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Quận 7. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Xưa & Nay",
    "type": "Chè",
    "location": "76 Huỳnh Tấn Phát, Quận 7, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20X%C6%B0a%20%26%20Nay%2076%20Hu%E1%BB%B3nh%20T%E1%BA%A5n%20Ph%C3%A1t%2C%20Qu%E1%BA%ADn%207%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Quận 7. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Hoàn Kiếm 2",
    "type": "Chè",
    "location": "76 Nguyễn Văn Linh, Quận 7, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20Ho%C3%A0n%20Ki%E1%BA%BFm%202%2076%20Nguy%E1%BB%85n%20V%C4%83n%20Linh%2C%20Qu%E1%BA%ADn%207%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Quận 7. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Dì Liên 3",
    "type": "Chè",
    "location": "257 Nguyễn Thị Thập, Quận 7, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20D%C3%AC%20Li%C3%AAn%203%20257%20Nguy%E1%BB%85n%20Th%E1%BB%8B%20Th%E1%BA%ADp%2C%20Qu%E1%BA%ADn%207%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Quận 7. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Thái Bình 4",
    "type": "Chè",
    "location": "128 Huỳnh Tấn Phát, Quận 7, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20Th%C3%A1i%20B%C3%ACnh%204%20128%20Hu%E1%BB%B3nh%20T%E1%BA%A5n%20Ph%C3%A1t%2C%20Qu%E1%BA%ADn%207%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Quận 7. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Saigon Deli 5",
    "type": "Chè",
    "location": "112 Nguyễn Văn Linh, Quận 7, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20Saigon%20Deli%205%20112%20Nguy%E1%BB%85n%20V%C4%83n%20Linh%2C%20Qu%E1%BA%ADn%207%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Quận 7. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Chú Bảy",
    "type": "Bánh xèo",
    "location": "421 Lê Văn Lương, Quận 7, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20Ch%C3%BA%20B%E1%BA%A3y%20421%20L%C3%AA%20V%C4%83n%20L%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%207%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Quận 7. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Hương Việt 2",
    "type": "Bánh xèo",
    "location": "418 Huỳnh Tấn Phát, Quận 7, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20H%C6%B0%C6%A1ng%20Vi%E1%BB%87t%202%20418%20Hu%E1%BB%B3nh%20T%E1%BA%A5n%20Ph%C3%A1t%2C%20Qu%E1%BA%ADn%207%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Quận 7. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Gia Đình 3",
    "type": "Bánh xèo",
    "location": "319 Nguyễn Thị Thập, Quận 7, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20Gia%20%C4%90%C3%ACnh%203%20319%20Nguy%E1%BB%85n%20Th%E1%BB%8B%20Th%E1%BA%ADp%2C%20Qu%E1%BA%ADn%207%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Quận 7. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Sông Trăng 4",
    "type": "Bánh xèo",
    "location": "385 Huỳnh Tấn Phát, Quận 7, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20S%C3%B4ng%20Tr%C4%83ng%204%20385%20Hu%E1%BB%B3nh%20T%E1%BA%A5n%20Ph%C3%A1t%2C%20Qu%E1%BA%ADn%207%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Quận 7. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Hương Việt 5",
    "type": "Bánh xèo",
    "location": "100 Lê Văn Lương, Quận 7, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20H%C6%B0%C6%A1ng%20Vi%E1%BB%87t%205%20100%20L%C3%AA%20V%C4%83n%20L%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%207%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Quận 7. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Đệ Nhất",
    "type": "Khác",
    "location": "462 Phạm Hữu Lầu, Quận 7, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20%C4%90%E1%BB%87%20Nh%E1%BA%A5t%20462%20Ph%E1%BA%A1m%20H%E1%BB%AFu%20L%E1%BA%A7u%2C%20Qu%E1%BA%ADn%207%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Quận 7. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Vĩnh Lộc 2",
    "type": "Khác",
    "location": "276 Huỳnh Tấn Phát, Quận 7, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20V%C4%A9nh%20L%E1%BB%99c%202%20276%20Hu%E1%BB%B3nh%20T%E1%BA%A5n%20Ph%C3%A1t%2C%20Qu%E1%BA%ADn%207%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Quận 7. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Nắng Vàng 3",
    "type": "Khác",
    "location": "173 Huỳnh Tấn Phát, Quận 7, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20N%E1%BA%AFng%20V%C3%A0ng%203%20173%20Hu%E1%BB%B3nh%20T%E1%BA%A5n%20Ph%C3%A1t%2C%20Qu%E1%BA%ADn%207%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Quận 7. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Nam Hải 4",
    "type": "Khác",
    "location": "310 Lê Văn Lương, Quận 7, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20Nam%20H%E1%BA%A3i%204%20310%20L%C3%AA%20V%C4%83n%20L%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%207%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Quận 7. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Đồng Quê 5",
    "type": "Khác",
    "location": "487 Nguyễn Thị Thập, Quận 7, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20%C4%90%E1%BB%93ng%20Qu%C3%AA%205%20487%20Nguy%E1%BB%85n%20Th%E1%BB%8B%20Th%E1%BA%ADp%2C%20Qu%E1%BA%ADn%207%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Quận 7. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Đồng Quê",
    "type": "Phở",
    "location": "59 Phạm Hùng, Quận 8, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20%C4%90%E1%BB%93ng%20Qu%C3%AA%2059%20Ph%E1%BA%A1m%20H%C3%B9ng%2C%20Qu%E1%BA%ADn%208%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Quận 8. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Vĩnh Lộc 2",
    "type": "Phở",
    "location": "219 Tùng Thiện Vương, Quận 8, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20V%C4%A9nh%20L%E1%BB%99c%202%20219%20T%C3%B9ng%20Thi%E1%BB%87n%20V%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%208%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Quận 8. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Dì Liên 3",
    "type": "Phở",
    "location": "194 Hưng Phú, Quận 8, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20D%C3%AC%20Li%C3%AAn%203%20194%20H%C6%B0ng%20Ph%C3%BA%2C%20Qu%E1%BA%ADn%208%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Quận 8. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Minh Khai 4",
    "type": "Phở",
    "location": "80 Phạm Hùng, Quận 8, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20Minh%20Khai%204%2080%20Ph%E1%BA%A1m%20H%C3%B9ng%2C%20Qu%E1%BA%ADn%208%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Quận 8. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Bà Năm 5",
    "type": "Phở",
    "location": "260 Phạm Hùng, Quận 8, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20B%C3%A0%20N%C4%83m%205%20260%20Ph%E1%BA%A1m%20H%C3%B9ng%2C%20Qu%E1%BA%ADn%208%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Quận 8. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Thanh Xuân",
    "type": "Bún",
    "location": "245 Dương Bá Trạc, Quận 8, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20Thanh%20Xu%C3%A2n%20245%20D%C6%B0%C6%A1ng%20B%C3%A1%20Tr%E1%BA%A1c%2C%20Qu%E1%BA%ADn%208%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Quận 8. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Ngọc Lan 2",
    "type": "Bún",
    "location": "398 Hưng Phú, Quận 8, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20Ng%E1%BB%8Dc%20Lan%202%20398%20H%C6%B0ng%20Ph%C3%BA%2C%20Qu%E1%BA%ADn%208%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Quận 8. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Nam Hải 3",
    "type": "Bún",
    "location": "400 Phạm Hùng, Quận 8, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20Nam%20H%E1%BA%A3i%203%20400%20Ph%E1%BA%A1m%20H%C3%B9ng%2C%20Qu%E1%BA%ADn%208%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Quận 8. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Hào Hùng 4",
    "type": "Bún",
    "location": "443 Tùng Thiện Vương, Quận 8, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20H%C3%A0o%20H%C3%B9ng%204%20443%20T%C3%B9ng%20Thi%E1%BB%87n%20V%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%208%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Quận 8. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Saigon Deli 5",
    "type": "Bún",
    "location": "163 Mai Hắc Đế, Quận 8, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20Saigon%20Deli%205%20163%20Mai%20H%E1%BA%AFc%20%C4%90%E1%BA%BF%2C%20Qu%E1%BA%ADn%208%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Quận 8. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Thanh Xuân",
    "type": "Cơm",
    "location": "102 Phạm Hùng, Quận 8, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20Thanh%20Xu%C3%A2n%20102%20Ph%E1%BA%A1m%20H%C3%B9ng%2C%20Qu%E1%BA%ADn%208%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Quận 8. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Vĩnh Lộc 2",
    "type": "Cơm",
    "location": "383 Phạm Hùng, Quận 8, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20V%C4%A9nh%20L%E1%BB%99c%202%20383%20Ph%E1%BA%A1m%20H%C3%B9ng%2C%20Qu%E1%BA%ADn%208%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Quận 8. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Phố Hội 3",
    "type": "Cơm",
    "location": "416 Mai Hắc Đế, Quận 8, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20Ph%E1%BB%91%20H%E1%BB%99i%203%20416%20Mai%20H%E1%BA%AFc%20%C4%90%E1%BA%BF%2C%20Qu%E1%BA%ADn%208%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Quận 8. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Sông Trăng 4",
    "type": "Cơm",
    "location": "14 Phạm Hùng, Quận 8, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20S%C3%B4ng%20Tr%C4%83ng%204%2014%20Ph%E1%BA%A1m%20H%C3%B9ng%2C%20Qu%E1%BA%ADn%208%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Quận 8. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Saigon Deli 5",
    "type": "Cơm",
    "location": "346 Mai Hắc Đế, Quận 8, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20Saigon%20Deli%205%20346%20Mai%20H%E1%BA%AFc%20%C4%90%E1%BA%BF%2C%20Qu%E1%BA%ADn%208%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Quận 8. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Minh Khai",
    "type": "Lẩu",
    "location": "3 Tùng Thiện Vương, Quận 8, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20Minh%20Khai%203%20T%C3%B9ng%20Thi%E1%BB%87n%20V%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%208%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Quận 8. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Xưa & Nay 2",
    "type": "Lẩu",
    "location": "184 Mai Hắc Đế, Quận 8, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20X%C6%B0a%20%26%20Nay%202%20184%20Mai%20H%E1%BA%AFc%20%C4%90%E1%BA%BF%2C%20Qu%E1%BA%ADn%208%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Quận 8. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Mưa Hồng 3",
    "type": "Lẩu",
    "location": "394 Phạm Hùng, Quận 8, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20M%C6%B0a%20H%E1%BB%93ng%203%20394%20Ph%E1%BA%A1m%20H%C3%B9ng%2C%20Qu%E1%BA%ADn%208%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Quận 8. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Saigon Deli 4",
    "type": "Lẩu",
    "location": "339 Mai Hắc Đế, Quận 8, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20Saigon%20Deli%204%20339%20Mai%20H%E1%BA%AFc%20%C4%90%E1%BA%BF%2C%20Qu%E1%BA%ADn%208%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Quận 8. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Thanh Đa 5",
    "type": "Lẩu",
    "location": "418 Mai Hắc Đế, Quận 8, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20Thanh%20%C4%90a%205%20418%20Mai%20H%E1%BA%AFc%20%C4%90%E1%BA%BF%2C%20Qu%E1%BA%ADn%208%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Quận 8. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Ông Già",
    "type": "Đồ chay",
    "location": "201 Tùng Thiện Vương, Quận 8, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20%C3%94ng%20Gi%C3%A0%20201%20T%C3%B9ng%20Thi%E1%BB%87n%20V%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%208%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Quận 8. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Local Taste 2",
    "type": "Đồ chay",
    "location": "345 Tùng Thiện Vương, Quận 8, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20Local%20Taste%202%20345%20T%C3%B9ng%20Thi%E1%BB%87n%20V%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%208%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Quận 8. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Bà Năm 3",
    "type": "Đồ chay",
    "location": "56 Mai Hắc Đế, Quận 8, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20B%C3%A0%20N%C4%83m%203%2056%20Mai%20H%E1%BA%AFc%20%C4%90%E1%BA%BF%2C%20Qu%E1%BA%ADn%208%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Quận 8. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Local Taste 4",
    "type": "Đồ chay",
    "location": "290 Phạm Hùng, Quận 8, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20Local%20Taste%204%20290%20Ph%E1%BA%A1m%20H%C3%B9ng%2C%20Qu%E1%BA%ADn%208%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Quận 8. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Đông Á 5",
    "type": "Đồ chay",
    "location": "487 Hưng Phú, Quận 8, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20%C4%90%C3%B4ng%20%C3%81%205%20487%20H%C6%B0ng%20Ph%C3%BA%2C%20Qu%E1%BA%ADn%208%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Quận 8. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Đệ Nhất",
    "type": "Bánh mì",
    "location": "191 Phạm Hùng, Quận 8, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20%C4%90%E1%BB%87%20Nh%E1%BA%A5t%20191%20Ph%E1%BA%A1m%20H%C3%B9ng%2C%20Qu%E1%BA%ADn%208%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Quận 8. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Bà Năm 2",
    "type": "Bánh mì",
    "location": "286 Tùng Thiện Vương, Quận 8, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20B%C3%A0%20N%C4%83m%202%20286%20T%C3%B9ng%20Thi%E1%BB%87n%20V%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%208%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Quận 8. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Sài Thành 3",
    "type": "Bánh mì",
    "location": "372 Phạm Hùng, Quận 8, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20S%C3%A0i%20Th%C3%A0nh%203%20372%20Ph%E1%BA%A1m%20H%C3%B9ng%2C%20Qu%E1%BA%ADn%208%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Quận 8. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Sài Thành 4",
    "type": "Bánh mì",
    "location": "320 Phạm Hùng, Quận 8, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20S%C3%A0i%20Th%C3%A0nh%204%20320%20Ph%E1%BA%A1m%20H%C3%B9ng%2C%20Qu%E1%BA%ADn%208%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Quận 8. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Nắng Vàng 5",
    "type": "Bánh mì",
    "location": "329 Mai Hắc Đế, Quận 8, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20N%E1%BA%AFng%20V%C3%A0ng%205%20329%20Mai%20H%E1%BA%AFc%20%C4%90%E1%BA%BF%2C%20Qu%E1%BA%ADn%208%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Quận 8. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Ông Già",
    "type": "Ăn vặt",
    "location": "178 Tùng Thiện Vương, Quận 8, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20%C3%94ng%20Gi%C3%A0%20178%20T%C3%B9ng%20Thi%E1%BB%87n%20V%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%208%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Quận 8. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Nam Hải 2",
    "type": "Ăn vặt",
    "location": "90 Tùng Thiện Vương, Quận 8, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20Nam%20H%E1%BA%A3i%202%2090%20T%C3%B9ng%20Thi%E1%BB%87n%20V%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%208%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Quận 8. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Xưa & Nay 3",
    "type": "Ăn vặt",
    "location": "143 Tùng Thiện Vương, Quận 8, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20X%C6%B0a%20%26%20Nay%203%20143%20T%C3%B9ng%20Thi%E1%BB%87n%20V%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%208%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Quận 8. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Hồng Phát 4",
    "type": "Ăn vặt",
    "location": "246 Hưng Phú, Quận 8, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20H%E1%BB%93ng%20Ph%C3%A1t%204%20246%20H%C6%B0ng%20Ph%C3%BA%2C%20Qu%E1%BA%ADn%208%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Quận 8. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Gia Đình 5",
    "type": "Ăn vặt",
    "location": "376 Hưng Phú, Quận 8, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20Gia%20%C4%90%C3%ACnh%205%20376%20H%C6%B0ng%20Ph%C3%BA%2C%20Qu%E1%BA%ADn%208%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Quận 8. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Dì Liên",
    "type": "Bánh cuốn",
    "location": "374 Dương Bá Trạc, Quận 8, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20D%C3%AC%20Li%C3%AAn%20374%20D%C6%B0%C6%A1ng%20B%C3%A1%20Tr%E1%BA%A1c%2C%20Qu%E1%BA%ADn%208%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Quận 8. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Kim Anh 2",
    "type": "Bánh cuốn",
    "location": "325 Phạm Hùng, Quận 8, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20Kim%20Anh%202%20325%20Ph%E1%BA%A1m%20H%C3%B9ng%2C%20Qu%E1%BA%ADn%208%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Quận 8. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Đệ Nhất 3",
    "type": "Bánh cuốn",
    "location": "454 Phạm Hùng, Quận 8, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20%C4%90%E1%BB%87%20Nh%E1%BA%A5t%203%20454%20Ph%E1%BA%A1m%20H%C3%B9ng%2C%20Qu%E1%BA%ADn%208%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Quận 8. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Saigon Deli 4",
    "type": "Bánh cuốn",
    "location": "263 Tùng Thiện Vương, Quận 8, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20Saigon%20Deli%204%20263%20T%C3%B9ng%20Thi%E1%BB%87n%20V%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%208%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Quận 8. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Thái Bình 5",
    "type": "Bánh cuốn",
    "location": "416 Hưng Phú, Quận 8, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20Th%C3%A1i%20B%C3%ACnh%205%20416%20H%C6%B0ng%20Ph%C3%BA%2C%20Qu%E1%BA%ADn%208%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Quận 8. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Bến Thành",
    "type": "Bún đậu",
    "location": "306 Dương Bá Trạc, Quận 8, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20B%E1%BA%BFn%20Th%C3%A0nh%20306%20D%C6%B0%C6%A1ng%20B%C3%A1%20Tr%E1%BA%A1c%2C%20Qu%E1%BA%ADn%208%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Quận 8. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Gia Đình 2",
    "type": "Bún đậu",
    "location": "443 Tùng Thiện Vương, Quận 8, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20Gia%20%C4%90%C3%ACnh%202%20443%20T%C3%B9ng%20Thi%E1%BB%87n%20V%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%208%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Quận 8. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Hồng Phát 3",
    "type": "Bún đậu",
    "location": "149 Tùng Thiện Vương, Quận 8, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20H%E1%BB%93ng%20Ph%C3%A1t%203%20149%20T%C3%B9ng%20Thi%E1%BB%87n%20V%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%208%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Quận 8. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Ngọc Lan 4",
    "type": "Bún đậu",
    "location": "208 Phạm Hùng, Quận 8, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20Ng%E1%BB%8Dc%20Lan%204%20208%20Ph%E1%BA%A1m%20H%C3%B9ng%2C%20Qu%E1%BA%ADn%208%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Quận 8. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Mưa Hồng 5",
    "type": "Bún đậu",
    "location": "92 Mai Hắc Đế, Quận 8, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20M%C6%B0a%20H%E1%BB%93ng%205%2092%20Mai%20H%E1%BA%AFc%20%C4%90%E1%BA%BF%2C%20Qu%E1%BA%ADn%208%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Quận 8. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Thái Bình",
    "type": "Hải sản",
    "location": "324 Tùng Thiện Vương, Quận 8, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20Th%C3%A1i%20B%C3%ACnh%20324%20T%C3%B9ng%20Thi%E1%BB%87n%20V%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%208%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Quận 8. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Hoàn Kiếm 2",
    "type": "Hải sản",
    "location": "221 Tùng Thiện Vương, Quận 8, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20Ho%C3%A0n%20Ki%E1%BA%BFm%202%20221%20T%C3%B9ng%20Thi%E1%BB%87n%20V%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%208%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Quận 8. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Thanh Xuân 3",
    "type": "Hải sản",
    "location": "28 Dương Bá Trạc, Quận 8, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20Thanh%20Xu%C3%A2n%203%2028%20D%C6%B0%C6%A1ng%20B%C3%A1%20Tr%E1%BA%A1c%2C%20Qu%E1%BA%ADn%208%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Quận 8. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Mưa Hồng 4",
    "type": "Hải sản",
    "location": "469 Phạm Hùng, Quận 8, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20M%C6%B0a%20H%E1%BB%93ng%204%20469%20Ph%E1%BA%A1m%20H%C3%B9ng%2C%20Qu%E1%BA%ADn%208%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Quận 8. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Hồng Phát 5",
    "type": "Hải sản",
    "location": "264 Dương Bá Trạc, Quận 8, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20H%E1%BB%93ng%20Ph%C3%A1t%205%20264%20D%C6%B0%C6%A1ng%20B%C3%A1%20Tr%E1%BA%A1c%2C%20Qu%E1%BA%ADn%208%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Quận 8. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Sài Thành",
    "type": "Ốc",
    "location": "12 Tùng Thiện Vương, Quận 8, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20S%C3%A0i%20Th%C3%A0nh%2012%20T%C3%B9ng%20Thi%E1%BB%87n%20V%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%208%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Quận 8. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Sài Thành 2",
    "type": "Ốc",
    "location": "229 Phạm Hùng, Quận 8, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20S%C3%A0i%20Th%C3%A0nh%202%20229%20Ph%E1%BA%A1m%20H%C3%B9ng%2C%20Qu%E1%BA%ADn%208%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Quận 8. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Minh Khai 3",
    "type": "Ốc",
    "location": "92 Dương Bá Trạc, Quận 8, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20Minh%20Khai%203%2092%20D%C6%B0%C6%A1ng%20B%C3%A1%20Tr%E1%BA%A1c%2C%20Qu%E1%BA%ADn%208%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Quận 8. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Bến Thành 4",
    "type": "Ốc",
    "location": "32 Hưng Phú, Quận 8, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20B%E1%BA%BFn%20Th%C3%A0nh%204%2032%20H%C6%B0ng%20Ph%C3%BA%2C%20Qu%E1%BA%ADn%208%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Quận 8. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Hào Hùng 5",
    "type": "Ốc",
    "location": "272 Hưng Phú, Quận 8, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20H%C3%A0o%20H%C3%B9ng%205%20272%20H%C6%B0ng%20Ph%C3%BA%2C%20Qu%E1%BA%ADn%208%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Quận 8. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Viet Kitchen",
    "type": "Mì",
    "location": "144 Dương Bá Trạc, Quận 8, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20Viet%20Kitchen%20144%20D%C6%B0%C6%A1ng%20B%C3%A1%20Tr%E1%BA%A1c%2C%20Qu%E1%BA%ADn%208%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Quận 8. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Saigon Deli 2",
    "type": "Mì",
    "location": "307 Phạm Hùng, Quận 8, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20Saigon%20Deli%202%20307%20Ph%E1%BA%A1m%20H%C3%B9ng%2C%20Qu%E1%BA%ADn%208%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Quận 8. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Bà Năm 3",
    "type": "Mì",
    "location": "335 Mai Hắc Đế, Quận 8, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20B%C3%A0%20N%C4%83m%203%20335%20Mai%20H%E1%BA%AFc%20%C4%90%E1%BA%BF%2C%20Qu%E1%BA%ADn%208%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Quận 8. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Đồng Quê 4",
    "type": "Mì",
    "location": "383 Hưng Phú, Quận 8, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20%C4%90%E1%BB%93ng%20Qu%C3%AA%204%20383%20H%C6%B0ng%20Ph%C3%BA%2C%20Qu%E1%BA%ADn%208%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Quận 8. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Ngọc Lan 5",
    "type": "Mì",
    "location": "374 Hưng Phú, Quận 8, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20Ng%E1%BB%8Dc%20Lan%205%20374%20H%C6%B0ng%20Ph%C3%BA%2C%20Qu%E1%BA%ADn%208%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Quận 8. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Đông Á",
    "type": "Hủ tiếu",
    "location": "483 Phạm Hùng, Quận 8, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20%C4%90%C3%B4ng%20%C3%81%20483%20Ph%E1%BA%A1m%20H%C3%B9ng%2C%20Qu%E1%BA%ADn%208%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Quận 8. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Ngọc Lan 2",
    "type": "Hủ tiếu",
    "location": "216 Hưng Phú, Quận 8, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20Ng%E1%BB%8Dc%20Lan%202%20216%20H%C6%B0ng%20Ph%C3%BA%2C%20Qu%E1%BA%ADn%208%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Quận 8. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Hồng Phát 3",
    "type": "Hủ tiếu",
    "location": "237 Phạm Hùng, Quận 8, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20H%E1%BB%93ng%20Ph%C3%A1t%203%20237%20Ph%E1%BA%A1m%20H%C3%B9ng%2C%20Qu%E1%BA%ADn%208%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Quận 8. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Thanh Xuân 4",
    "type": "Hủ tiếu",
    "location": "443 Hưng Phú, Quận 8, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20Thanh%20Xu%C3%A2n%204%20443%20H%C6%B0ng%20Ph%C3%BA%2C%20Qu%E1%BA%ADn%208%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Quận 8. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Nam Hải 5",
    "type": "Hủ tiếu",
    "location": "441 Phạm Hùng, Quận 8, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20Nam%20H%E1%BA%A3i%205%20441%20Ph%E1%BA%A1m%20H%C3%B9ng%2C%20Qu%E1%BA%ADn%208%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Quận 8. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Đệ Nhất",
    "type": "Đồ nướng",
    "location": "277 Mai Hắc Đế, Quận 8, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20%C4%90%E1%BB%87%20Nh%E1%BA%A5t%20277%20Mai%20H%E1%BA%AFc%20%C4%90%E1%BA%BF%2C%20Qu%E1%BA%ADn%208%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Quận 8. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Kim Anh 2",
    "type": "Đồ nướng",
    "location": "6 Dương Bá Trạc, Quận 8, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20Kim%20Anh%202%206%20D%C6%B0%C6%A1ng%20B%C3%A1%20Tr%E1%BA%A1c%2C%20Qu%E1%BA%ADn%208%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Quận 8. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Hào Hùng 3",
    "type": "Đồ nướng",
    "location": "487 Mai Hắc Đế, Quận 8, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20H%C3%A0o%20H%C3%B9ng%203%20487%20Mai%20H%E1%BA%AFc%20%C4%90%E1%BA%BF%2C%20Qu%E1%BA%ADn%208%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Quận 8. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Gia Đình 4",
    "type": "Đồ nướng",
    "location": "159 Hưng Phú, Quận 8, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20Gia%20%C4%90%C3%ACnh%204%20159%20H%C6%B0ng%20Ph%C3%BA%2C%20Qu%E1%BA%ADn%208%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Quận 8. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Hào Hùng 5",
    "type": "Đồ nướng",
    "location": "81 Tùng Thiện Vương, Quận 8, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20H%C3%A0o%20H%C3%B9ng%205%2081%20T%C3%B9ng%20Thi%E1%BB%87n%20V%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%208%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Quận 8. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Bến Thành",
    "type": "Nước & Cafe",
    "location": "40 Mai Hắc Đế, Quận 8, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20B%E1%BA%BFn%20Th%C3%A0nh%2040%20Mai%20H%E1%BA%AFc%20%C4%90%E1%BA%BF%2C%20Qu%E1%BA%ADn%208%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Quận 8. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Thanh Đa 2",
    "type": "Nước & Cafe",
    "location": "327 Tùng Thiện Vương, Quận 8, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20Thanh%20%C4%90a%202%20327%20T%C3%B9ng%20Thi%E1%BB%87n%20V%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%208%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Quận 8. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Thanh Đa 3",
    "type": "Nước & Cafe",
    "location": "46 Mai Hắc Đế, Quận 8, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20Thanh%20%C4%90a%203%2046%20Mai%20H%E1%BA%AFc%20%C4%90%E1%BA%BF%2C%20Qu%E1%BA%ADn%208%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Quận 8. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Đông Á 4",
    "type": "Nước & Cafe",
    "location": "130 Hưng Phú, Quận 8, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20%C4%90%C3%B4ng%20%C3%81%204%20130%20H%C6%B0ng%20Ph%C3%BA%2C%20Qu%E1%BA%ADn%208%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Quận 8. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Local Taste 5",
    "type": "Nước & Cafe",
    "location": "392 Phạm Hùng, Quận 8, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20Local%20Taste%205%20392%20Ph%E1%BA%A1m%20H%C3%B9ng%2C%20Qu%E1%BA%ADn%208%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Quận 8. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Bà Năm",
    "type": "Chè",
    "location": "70 Phạm Hùng, Quận 8, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20B%C3%A0%20N%C4%83m%2070%20Ph%E1%BA%A1m%20H%C3%B9ng%2C%20Qu%E1%BA%ADn%208%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Quận 8. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Phố Hội 2",
    "type": "Chè",
    "location": "319 Tùng Thiện Vương, Quận 8, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20Ph%E1%BB%91%20H%E1%BB%99i%202%20319%20T%C3%B9ng%20Thi%E1%BB%87n%20V%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%208%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Quận 8. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Gia Đình 3",
    "type": "Chè",
    "location": "264 Tùng Thiện Vương, Quận 8, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20Gia%20%C4%90%C3%ACnh%203%20264%20T%C3%B9ng%20Thi%E1%BB%87n%20V%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%208%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Quận 8. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Nam Hải 4",
    "type": "Chè",
    "location": "23 Dương Bá Trạc, Quận 8, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20Nam%20H%E1%BA%A3i%204%2023%20D%C6%B0%C6%A1ng%20B%C3%A1%20Tr%E1%BA%A1c%2C%20Qu%E1%BA%ADn%208%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Quận 8. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Hào Hùng 5",
    "type": "Chè",
    "location": "331 Hưng Phú, Quận 8, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20H%C3%A0o%20H%C3%B9ng%205%20331%20H%C6%B0ng%20Ph%C3%BA%2C%20Qu%E1%BA%ADn%208%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Quận 8. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Thái Bình",
    "type": "Bánh xèo",
    "location": "486 Mai Hắc Đế, Quận 8, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20Th%C3%A1i%20B%C3%ACnh%20486%20Mai%20H%E1%BA%AFc%20%C4%90%E1%BA%BF%2C%20Qu%E1%BA%ADn%208%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Quận 8. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Thái Bình 2",
    "type": "Bánh xèo",
    "location": "70 Mai Hắc Đế, Quận 8, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20Th%C3%A1i%20B%C3%ACnh%202%2070%20Mai%20H%E1%BA%AFc%20%C4%90%E1%BA%BF%2C%20Qu%E1%BA%ADn%208%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Quận 8. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Bến Thành 3",
    "type": "Bánh xèo",
    "location": "357 Tùng Thiện Vương, Quận 8, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20B%E1%BA%BFn%20Th%C3%A0nh%203%20357%20T%C3%B9ng%20Thi%E1%BB%87n%20V%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%208%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Quận 8. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Bà Năm 4",
    "type": "Bánh xèo",
    "location": "8 Phạm Hùng, Quận 8, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20B%C3%A0%20N%C4%83m%204%208%20Ph%E1%BA%A1m%20H%C3%B9ng%2C%20Qu%E1%BA%ADn%208%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Quận 8. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Ngọc Lan 5",
    "type": "Bánh xèo",
    "location": "375 Dương Bá Trạc, Quận 8, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20Ng%E1%BB%8Dc%20Lan%205%20375%20D%C6%B0%C6%A1ng%20B%C3%A1%20Tr%E1%BA%A1c%2C%20Qu%E1%BA%ADn%208%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Quận 8. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Bà Năm",
    "type": "Khác",
    "location": "381 Tùng Thiện Vương, Quận 8, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20B%C3%A0%20N%C4%83m%20381%20T%C3%B9ng%20Thi%E1%BB%87n%20V%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%208%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Quận 8. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Dì Liên 2",
    "type": "Khác",
    "location": "132 Dương Bá Trạc, Quận 8, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20D%C3%AC%20Li%C3%AAn%202%20132%20D%C6%B0%C6%A1ng%20B%C3%A1%20Tr%E1%BA%A1c%2C%20Qu%E1%BA%ADn%208%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Quận 8. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Sài Thành 3",
    "type": "Khác",
    "location": "492 Hưng Phú, Quận 8, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20S%C3%A0i%20Th%C3%A0nh%203%20492%20H%C6%B0ng%20Ph%C3%BA%2C%20Qu%E1%BA%ADn%208%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Quận 8. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Bến Thành 4",
    "type": "Khác",
    "location": "73 Mai Hắc Đế, Quận 8, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20B%E1%BA%BFn%20Th%C3%A0nh%204%2073%20Mai%20H%E1%BA%AFc%20%C4%90%E1%BA%BF%2C%20Qu%E1%BA%ADn%208%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Quận 8. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Saigon Deli 5",
    "type": "Khác",
    "location": "267 Mai Hắc Đế, Quận 8, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20Saigon%20Deli%205%20267%20Mai%20H%E1%BA%AFc%20%C4%90%E1%BA%BF%2C%20Qu%E1%BA%ADn%208%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Quận 8. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Ngọc Lan",
    "type": "Phở",
    "location": "187 Sư Vạn Hạnh, Quận 10, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20Ng%E1%BB%8Dc%20Lan%20187%20S%C6%B0%20V%E1%BA%A1n%20H%E1%BA%A1nh%2C%20Qu%E1%BA%ADn%2010%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Quận 10. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Nắng Vàng 2",
    "type": "Phở",
    "location": "391 Sư Vạn Hạnh, Quận 10, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20N%E1%BA%AFng%20V%C3%A0ng%202%20391%20S%C6%B0%20V%E1%BA%A1n%20H%E1%BA%A1nh%2C%20Qu%E1%BA%ADn%2010%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Quận 10. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Hương Việt 3",
    "type": "Phở",
    "location": "23 Sư Vạn Hạnh, Quận 10, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20H%C6%B0%C6%A1ng%20Vi%E1%BB%87t%203%2023%20S%C6%B0%20V%E1%BA%A1n%20H%E1%BA%A1nh%2C%20Qu%E1%BA%ADn%2010%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Quận 10. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Vĩnh Lộc 4",
    "type": "Phở",
    "location": "314 Lý Thái Tổ, Quận 10, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20V%C4%A9nh%20L%E1%BB%99c%204%20314%20L%C3%BD%20Th%C3%A1i%20T%E1%BB%95%2C%20Qu%E1%BA%ADn%2010%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Quận 10. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Bến Thành 5",
    "type": "Phở",
    "location": "429 Ba Tháng Hai, Quận 10, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20B%E1%BA%BFn%20Th%C3%A0nh%205%20429%20Ba%20Th%C3%A1ng%20Hai%2C%20Qu%E1%BA%ADn%2010%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Quận 10. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Đông Á",
    "type": "Bún",
    "location": "82 Sư Vạn Hạnh, Quận 10, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%90%C3%B4ng%20%C3%81%2082%20S%C6%B0%20V%E1%BA%A1n%20H%E1%BA%A1nh%2C%20Qu%E1%BA%ADn%2010%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Quận 10. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Gia Đình 2",
    "type": "Bún",
    "location": "282 Sư Vạn Hạnh, Quận 10, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20Gia%20%C4%90%C3%ACnh%202%20282%20S%C6%B0%20V%E1%BA%A1n%20H%E1%BA%A1nh%2C%20Qu%E1%BA%ADn%2010%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Quận 10. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Đồng Quê 3",
    "type": "Bún",
    "location": "310 Thành Thái, Quận 10, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%90%E1%BB%93ng%20Qu%C3%AA%203%20310%20Th%C3%A0nh%20Th%C3%A1i%2C%20Qu%E1%BA%ADn%2010%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Quận 10. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Hào Hùng 4",
    "type": "Bún",
    "location": "243 Sư Vạn Hạnh, Quận 10, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20H%C3%A0o%20H%C3%B9ng%204%20243%20S%C6%B0%20V%E1%BA%A1n%20H%E1%BA%A1nh%2C%20Qu%E1%BA%ADn%2010%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Quận 10. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Anh Tư 5",
    "type": "Bún",
    "location": "487 Lý Thái Tổ, Quận 10, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20Anh%20T%C6%B0%205%20487%20L%C3%BD%20Th%C3%A1i%20T%E1%BB%95%2C%20Qu%E1%BA%ADn%2010%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Quận 10. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Mưa Hồng",
    "type": "Cơm",
    "location": "305 Ba Tháng Hai, Quận 10, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20M%C6%B0a%20H%E1%BB%93ng%20305%20Ba%20Th%C3%A1ng%20Hai%2C%20Qu%E1%BA%ADn%2010%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Quận 10. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Hương Việt 2",
    "type": "Cơm",
    "location": "400 Lý Thái Tổ, Quận 10, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20H%C6%B0%C6%A1ng%20Vi%E1%BB%87t%202%20400%20L%C3%BD%20Th%C3%A1i%20T%E1%BB%95%2C%20Qu%E1%BA%ADn%2010%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Quận 10. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Sông Trăng 3",
    "type": "Cơm",
    "location": "305 Sư Vạn Hạnh, Quận 10, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20S%C3%B4ng%20Tr%C4%83ng%203%20305%20S%C6%B0%20V%E1%BA%A1n%20H%E1%BA%A1nh%2C%20Qu%E1%BA%ADn%2010%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Quận 10. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Bến Thành 4",
    "type": "Cơm",
    "location": "407 Ba Tháng Hai, Quận 10, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20B%E1%BA%BFn%20Th%C3%A0nh%204%20407%20Ba%20Th%C3%A1ng%20Hai%2C%20Qu%E1%BA%ADn%2010%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Quận 10. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Bến Thành 5",
    "type": "Cơm",
    "location": "339 Nguyễn Tri Phương, Quận 10, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20B%E1%BA%BFn%20Th%C3%A0nh%205%20339%20Nguy%E1%BB%85n%20Tri%20Ph%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%2010%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Quận 10. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Dì Liên",
    "type": "Lẩu",
    "location": "227 Lý Thái Tổ, Quận 10, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20D%C3%AC%20Li%C3%AAn%20227%20L%C3%BD%20Th%C3%A1i%20T%E1%BB%95%2C%20Qu%E1%BA%ADn%2010%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Quận 10. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Gia Đình 2",
    "type": "Lẩu",
    "location": "69 Lý Thái Tổ, Quận 10, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20Gia%20%C4%90%C3%ACnh%202%2069%20L%C3%BD%20Th%C3%A1i%20T%E1%BB%95%2C%20Qu%E1%BA%ADn%2010%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Quận 10. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Chú Bảy 3",
    "type": "Lẩu",
    "location": "364 Lý Thái Tổ, Quận 10, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20Ch%C3%BA%20B%E1%BA%A3y%203%20364%20L%C3%BD%20Th%C3%A1i%20T%E1%BB%95%2C%20Qu%E1%BA%ADn%2010%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Quận 10. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Thái Bình 4",
    "type": "Lẩu",
    "location": "152 Lý Thái Tổ, Quận 10, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20Th%C3%A1i%20B%C3%ACnh%204%20152%20L%C3%BD%20Th%C3%A1i%20T%E1%BB%95%2C%20Qu%E1%BA%ADn%2010%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Quận 10. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Nắng Vàng 5",
    "type": "Lẩu",
    "location": "161 Thành Thái, Quận 10, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20N%E1%BA%AFng%20V%C3%A0ng%205%20161%20Th%C3%A0nh%20Th%C3%A1i%2C%20Qu%E1%BA%ADn%2010%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Quận 10. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Vĩnh Lộc",
    "type": "Đồ chay",
    "location": "16 Nguyễn Tri Phương, Quận 10, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20V%C4%A9nh%20L%E1%BB%99c%2016%20Nguy%E1%BB%85n%20Tri%20Ph%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%2010%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Quận 10. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Anh Tư 2",
    "type": "Đồ chay",
    "location": "89 Ba Tháng Hai, Quận 10, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20Anh%20T%C6%B0%202%2089%20Ba%20Th%C3%A1ng%20Hai%2C%20Qu%E1%BA%ADn%2010%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Quận 10. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Xưa & Nay 3",
    "type": "Đồ chay",
    "location": "155 Thành Thái, Quận 10, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20X%C6%B0a%20%26%20Nay%203%20155%20Th%C3%A0nh%20Th%C3%A1i%2C%20Qu%E1%BA%ADn%2010%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Quận 10. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Hồng Phát 4",
    "type": "Đồ chay",
    "location": "317 Thành Thái, Quận 10, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20H%E1%BB%93ng%20Ph%C3%A1t%204%20317%20Th%C3%A0nh%20Th%C3%A1i%2C%20Qu%E1%BA%ADn%2010%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Quận 10. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Thanh Xuân 5",
    "type": "Đồ chay",
    "location": "309 Nguyễn Tri Phương, Quận 10, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20Thanh%20Xu%C3%A2n%205%20309%20Nguy%E1%BB%85n%20Tri%20Ph%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%2010%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Quận 10. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Bến Thành",
    "type": "Bánh mì",
    "location": "155 Nguyễn Tri Phương, Quận 10, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20B%E1%BA%BFn%20Th%C3%A0nh%20155%20Nguy%E1%BB%85n%20Tri%20Ph%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%2010%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Quận 10. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Anh Tư 2",
    "type": "Bánh mì",
    "location": "101 Lý Thái Tổ, Quận 10, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20Anh%20T%C6%B0%202%20101%20L%C3%BD%20Th%C3%A1i%20T%E1%BB%95%2C%20Qu%E1%BA%ADn%2010%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Quận 10. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Nam Hải 3",
    "type": "Bánh mì",
    "location": "369 Nguyễn Tri Phương, Quận 10, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20Nam%20H%E1%BA%A3i%203%20369%20Nguy%E1%BB%85n%20Tri%20Ph%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%2010%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Quận 10. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Hương Việt 4",
    "type": "Bánh mì",
    "location": "279 Ba Tháng Hai, Quận 10, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20H%C6%B0%C6%A1ng%20Vi%E1%BB%87t%204%20279%20Ba%20Th%C3%A1ng%20Hai%2C%20Qu%E1%BA%ADn%2010%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Quận 10. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Cô Ba 5",
    "type": "Bánh mì",
    "location": "95 Nguyễn Tri Phương, Quận 10, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20C%C3%B4%20Ba%205%2095%20Nguy%E1%BB%85n%20Tri%20Ph%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%2010%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Quận 10. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Thanh Xuân",
    "type": "Ăn vặt",
    "location": "71 Lý Thái Tổ, Quận 10, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20Thanh%20Xu%C3%A2n%2071%20L%C3%BD%20Th%C3%A1i%20T%E1%BB%95%2C%20Qu%E1%BA%ADn%2010%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Quận 10. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Kim Anh 2",
    "type": "Ăn vặt",
    "location": "472 Nguyễn Tri Phương, Quận 10, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20Kim%20Anh%202%20472%20Nguy%E1%BB%85n%20Tri%20Ph%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%2010%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Quận 10. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Đồng Quê 3",
    "type": "Ăn vặt",
    "location": "71 Lý Thái Tổ, Quận 10, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20%C4%90%E1%BB%93ng%20Qu%C3%AA%203%2071%20L%C3%BD%20Th%C3%A1i%20T%E1%BB%95%2C%20Qu%E1%BA%ADn%2010%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Quận 10. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Nắng Vàng 4",
    "type": "Ăn vặt",
    "location": "80 Lý Thái Tổ, Quận 10, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20N%E1%BA%AFng%20V%C3%A0ng%204%2080%20L%C3%BD%20Th%C3%A1i%20T%E1%BB%95%2C%20Qu%E1%BA%ADn%2010%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Quận 10. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Bến Thành 5",
    "type": "Ăn vặt",
    "location": "499 Sư Vạn Hạnh, Quận 10, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20B%E1%BA%BFn%20Th%C3%A0nh%205%20499%20S%C6%B0%20V%E1%BA%A1n%20H%E1%BA%A1nh%2C%20Qu%E1%BA%ADn%2010%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Quận 10. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Ngọc Lan",
    "type": "Bánh cuốn",
    "location": "14 Nguyễn Tri Phương, Quận 10, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20Ng%E1%BB%8Dc%20Lan%2014%20Nguy%E1%BB%85n%20Tri%20Ph%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%2010%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Quận 10. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Nắng Vàng 2",
    "type": "Bánh cuốn",
    "location": "483 Ba Tháng Hai, Quận 10, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20N%E1%BA%AFng%20V%C3%A0ng%202%20483%20Ba%20Th%C3%A1ng%20Hai%2C%20Qu%E1%BA%ADn%2010%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Quận 10. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Ngọc Lan 3",
    "type": "Bánh cuốn",
    "location": "233 Ba Tháng Hai, Quận 10, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20Ng%E1%BB%8Dc%20Lan%203%20233%20Ba%20Th%C3%A1ng%20Hai%2C%20Qu%E1%BA%ADn%2010%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Quận 10. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Hoàn Kiếm 4",
    "type": "Bánh cuốn",
    "location": "121 Sư Vạn Hạnh, Quận 10, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20Ho%C3%A0n%20Ki%E1%BA%BFm%204%20121%20S%C6%B0%20V%E1%BA%A1n%20H%E1%BA%A1nh%2C%20Qu%E1%BA%ADn%2010%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Quận 10. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Thanh Xuân 5",
    "type": "Bánh cuốn",
    "location": "297 Lý Thái Tổ, Quận 10, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20Thanh%20Xu%C3%A2n%205%20297%20L%C3%BD%20Th%C3%A1i%20T%E1%BB%95%2C%20Qu%E1%BA%ADn%2010%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Quận 10. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Hoàn Kiếm",
    "type": "Bún đậu",
    "location": "462 Thành Thái, Quận 10, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20Ho%C3%A0n%20Ki%E1%BA%BFm%20462%20Th%C3%A0nh%20Th%C3%A1i%2C%20Qu%E1%BA%ADn%2010%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Quận 10. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Viet Kitchen 2",
    "type": "Bún đậu",
    "location": "270 Thành Thái, Quận 10, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20Viet%20Kitchen%202%20270%20Th%C3%A0nh%20Th%C3%A1i%2C%20Qu%E1%BA%ADn%2010%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Quận 10. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Cô Ba 3",
    "type": "Bún đậu",
    "location": "127 Nguyễn Tri Phương, Quận 10, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20C%C3%B4%20Ba%203%20127%20Nguy%E1%BB%85n%20Tri%20Ph%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%2010%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Quận 10. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Viet Kitchen 4",
    "type": "Bún đậu",
    "location": "401 Ba Tháng Hai, Quận 10, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20Viet%20Kitchen%204%20401%20Ba%20Th%C3%A1ng%20Hai%2C%20Qu%E1%BA%ADn%2010%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Quận 10. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Thanh Đa 5",
    "type": "Bún đậu",
    "location": "183 Ba Tháng Hai, Quận 10, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20Thanh%20%C4%90a%205%20183%20Ba%20Th%C3%A1ng%20Hai%2C%20Qu%E1%BA%ADn%2010%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Quận 10. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Dì Liên",
    "type": "Hải sản",
    "location": "452 Thành Thái, Quận 10, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20D%C3%AC%20Li%C3%AAn%20452%20Th%C3%A0nh%20Th%C3%A1i%2C%20Qu%E1%BA%ADn%2010%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Quận 10. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Kim Anh 2",
    "type": "Hải sản",
    "location": "44 Thành Thái, Quận 10, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20Kim%20Anh%202%2044%20Th%C3%A0nh%20Th%C3%A1i%2C%20Qu%E1%BA%ADn%2010%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Quận 10. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Phố Hội 3",
    "type": "Hải sản",
    "location": "283 Ba Tháng Hai, Quận 10, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20Ph%E1%BB%91%20H%E1%BB%99i%203%20283%20Ba%20Th%C3%A1ng%20Hai%2C%20Qu%E1%BA%ADn%2010%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Quận 10. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Dì Liên 4",
    "type": "Hải sản",
    "location": "248 Ba Tháng Hai, Quận 10, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20D%C3%AC%20Li%C3%AAn%204%20248%20Ba%20Th%C3%A1ng%20Hai%2C%20Qu%E1%BA%ADn%2010%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Quận 10. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Thanh Đa 5",
    "type": "Hải sản",
    "location": "397 Sư Vạn Hạnh, Quận 10, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20Thanh%20%C4%90a%205%20397%20S%C6%B0%20V%E1%BA%A1n%20H%E1%BA%A1nh%2C%20Qu%E1%BA%ADn%2010%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Quận 10. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Sài Thành",
    "type": "Ốc",
    "location": "74 Thành Thái, Quận 10, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20S%C3%A0i%20Th%C3%A0nh%2074%20Th%C3%A0nh%20Th%C3%A1i%2C%20Qu%E1%BA%ADn%2010%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Quận 10. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Cô Ba 2",
    "type": "Ốc",
    "location": "451 Thành Thái, Quận 10, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20C%C3%B4%20Ba%202%20451%20Th%C3%A0nh%20Th%C3%A1i%2C%20Qu%E1%BA%ADn%2010%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Quận 10. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Thanh Xuân 3",
    "type": "Ốc",
    "location": "262 Lý Thái Tổ, Quận 10, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20Thanh%20Xu%C3%A2n%203%20262%20L%C3%BD%20Th%C3%A1i%20T%E1%BB%95%2C%20Qu%E1%BA%ADn%2010%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Quận 10. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Hào Hùng 4",
    "type": "Ốc",
    "location": "479 Ba Tháng Hai, Quận 10, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20H%C3%A0o%20H%C3%B9ng%204%20479%20Ba%20Th%C3%A1ng%20Hai%2C%20Qu%E1%BA%ADn%2010%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Quận 10. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Hồng Phát 5",
    "type": "Ốc",
    "location": "457 Thành Thái, Quận 10, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20H%E1%BB%93ng%20Ph%C3%A1t%205%20457%20Th%C3%A0nh%20Th%C3%A1i%2C%20Qu%E1%BA%ADn%2010%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Quận 10. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Vĩnh Lộc",
    "type": "Mì",
    "location": "493 Ba Tháng Hai, Quận 10, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20V%C4%A9nh%20L%E1%BB%99c%20493%20Ba%20Th%C3%A1ng%20Hai%2C%20Qu%E1%BA%ADn%2010%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Quận 10. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Cô Ba 2",
    "type": "Mì",
    "location": "485 Lý Thái Tổ, Quận 10, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20C%C3%B4%20Ba%202%20485%20L%C3%BD%20Th%C3%A1i%20T%E1%BB%95%2C%20Qu%E1%BA%ADn%2010%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Quận 10. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Bến Thành 3",
    "type": "Mì",
    "location": "96 Lý Thái Tổ, Quận 10, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20B%E1%BA%BFn%20Th%C3%A0nh%203%2096%20L%C3%BD%20Th%C3%A1i%20T%E1%BB%95%2C%20Qu%E1%BA%ADn%2010%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Quận 10. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Thanh Xuân 4",
    "type": "Mì",
    "location": "57 Thành Thái, Quận 10, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20Thanh%20Xu%C3%A2n%204%2057%20Th%C3%A0nh%20Th%C3%A1i%2C%20Qu%E1%BA%ADn%2010%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Quận 10. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Cô Ba 5",
    "type": "Mì",
    "location": "266 Lý Thái Tổ, Quận 10, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20C%C3%B4%20Ba%205%20266%20L%C3%BD%20Th%C3%A1i%20T%E1%BB%95%2C%20Qu%E1%BA%ADn%2010%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Quận 10. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Chú Bảy",
    "type": "Hủ tiếu",
    "location": "99 Nguyễn Tri Phương, Quận 10, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20Ch%C3%BA%20B%E1%BA%A3y%2099%20Nguy%E1%BB%85n%20Tri%20Ph%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%2010%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Quận 10. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Hào Hùng 2",
    "type": "Hủ tiếu",
    "location": "16 Lý Thái Tổ, Quận 10, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20H%C3%A0o%20H%C3%B9ng%202%2016%20L%C3%BD%20Th%C3%A1i%20T%E1%BB%95%2C%20Qu%E1%BA%ADn%2010%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Quận 10. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Đệ Nhất 3",
    "type": "Hủ tiếu",
    "location": "78 Nguyễn Tri Phương, Quận 10, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20%C4%90%E1%BB%87%20Nh%E1%BA%A5t%203%2078%20Nguy%E1%BB%85n%20Tri%20Ph%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%2010%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Quận 10. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Anh Tư 4",
    "type": "Hủ tiếu",
    "location": "332 Sư Vạn Hạnh, Quận 10, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20Anh%20T%C6%B0%204%20332%20S%C6%B0%20V%E1%BA%A1n%20H%E1%BA%A1nh%2C%20Qu%E1%BA%ADn%2010%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Quận 10. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Mưa Hồng 5",
    "type": "Hủ tiếu",
    "location": "44 Thành Thái, Quận 10, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20M%C6%B0a%20H%E1%BB%93ng%205%2044%20Th%C3%A0nh%20Th%C3%A1i%2C%20Qu%E1%BA%ADn%2010%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Quận 10. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Viet Kitchen",
    "type": "Đồ nướng",
    "location": "97 Nguyễn Tri Phương, Quận 10, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20Viet%20Kitchen%2097%20Nguy%E1%BB%85n%20Tri%20Ph%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%2010%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Quận 10. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Xưa & Nay 2",
    "type": "Đồ nướng",
    "location": "183 Lý Thái Tổ, Quận 10, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20X%C6%B0a%20%26%20Nay%202%20183%20L%C3%BD%20Th%C3%A1i%20T%E1%BB%95%2C%20Qu%E1%BA%ADn%2010%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Quận 10. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Bến Thành 3",
    "type": "Đồ nướng",
    "location": "335 Thành Thái, Quận 10, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20B%E1%BA%BFn%20Th%C3%A0nh%203%20335%20Th%C3%A0nh%20Th%C3%A1i%2C%20Qu%E1%BA%ADn%2010%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Quận 10. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Đông Á 4",
    "type": "Đồ nướng",
    "location": "64 Nguyễn Tri Phương, Quận 10, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20%C4%90%C3%B4ng%20%C3%81%204%2064%20Nguy%E1%BB%85n%20Tri%20Ph%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%2010%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Quận 10. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Phố Hội 5",
    "type": "Đồ nướng",
    "location": "302 Thành Thái, Quận 10, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20Ph%E1%BB%91%20H%E1%BB%99i%205%20302%20Th%C3%A0nh%20Th%C3%A1i%2C%20Qu%E1%BA%ADn%2010%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Quận 10. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Anh Tư",
    "type": "Nước & Cafe",
    "location": "177 Ba Tháng Hai, Quận 10, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20Anh%20T%C6%B0%20177%20Ba%20Th%C3%A1ng%20Hai%2C%20Qu%E1%BA%ADn%2010%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Quận 10. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Phố Hội 2",
    "type": "Nước & Cafe",
    "location": "36 Thành Thái, Quận 10, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20Ph%E1%BB%91%20H%E1%BB%99i%202%2036%20Th%C3%A0nh%20Th%C3%A1i%2C%20Qu%E1%BA%ADn%2010%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Quận 10. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Hào Hùng 3",
    "type": "Nước & Cafe",
    "location": "155 Ba Tháng Hai, Quận 10, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20H%C3%A0o%20H%C3%B9ng%203%20155%20Ba%20Th%C3%A1ng%20Hai%2C%20Qu%E1%BA%ADn%2010%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Quận 10. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Đồng Quê 4",
    "type": "Nước & Cafe",
    "location": "345 Ba Tháng Hai, Quận 10, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20%C4%90%E1%BB%93ng%20Qu%C3%AA%204%20345%20Ba%20Th%C3%A1ng%20Hai%2C%20Qu%E1%BA%ADn%2010%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Quận 10. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Mưa Hồng 5",
    "type": "Nước & Cafe",
    "location": "330 Nguyễn Tri Phương, Quận 10, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20M%C6%B0a%20H%E1%BB%93ng%205%20330%20Nguy%E1%BB%85n%20Tri%20Ph%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%2010%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Quận 10. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Ông Già",
    "type": "Chè",
    "location": "391 Thành Thái, Quận 10, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20%C3%94ng%20Gi%C3%A0%20391%20Th%C3%A0nh%20Th%C3%A1i%2C%20Qu%E1%BA%ADn%2010%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Quận 10. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Vĩnh Lộc 2",
    "type": "Chè",
    "location": "493 Sư Vạn Hạnh, Quận 10, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20V%C4%A9nh%20L%E1%BB%99c%202%20493%20S%C6%B0%20V%E1%BA%A1n%20H%E1%BA%A1nh%2C%20Qu%E1%BA%ADn%2010%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Quận 10. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Vĩnh Lộc 3",
    "type": "Chè",
    "location": "169 Thành Thái, Quận 10, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20V%C4%A9nh%20L%E1%BB%99c%203%20169%20Th%C3%A0nh%20Th%C3%A1i%2C%20Qu%E1%BA%ADn%2010%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Quận 10. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Thanh Xuân 4",
    "type": "Chè",
    "location": "467 Nguyễn Tri Phương, Quận 10, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20Thanh%20Xu%C3%A2n%204%20467%20Nguy%E1%BB%85n%20Tri%20Ph%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%2010%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Quận 10. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Saigon Deli 5",
    "type": "Chè",
    "location": "97 Sư Vạn Hạnh, Quận 10, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20Saigon%20Deli%205%2097%20S%C6%B0%20V%E1%BA%A1n%20H%E1%BA%A1nh%2C%20Qu%E1%BA%ADn%2010%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Quận 10. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Local Taste",
    "type": "Bánh xèo",
    "location": "302 Lý Thái Tổ, Quận 10, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20Local%20Taste%20302%20L%C3%BD%20Th%C3%A1i%20T%E1%BB%95%2C%20Qu%E1%BA%ADn%2010%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Quận 10. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Bà Năm 2",
    "type": "Bánh xèo",
    "location": "147 Nguyễn Tri Phương, Quận 10, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20B%C3%A0%20N%C4%83m%202%20147%20Nguy%E1%BB%85n%20Tri%20Ph%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%2010%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Quận 10. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Hồng Phát 3",
    "type": "Bánh xèo",
    "location": "39 Thành Thái, Quận 10, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20H%E1%BB%93ng%20Ph%C3%A1t%203%2039%20Th%C3%A0nh%20Th%C3%A1i%2C%20Qu%E1%BA%ADn%2010%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Quận 10. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Đệ Nhất 4",
    "type": "Bánh xèo",
    "location": "460 Sư Vạn Hạnh, Quận 10, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20%C4%90%E1%BB%87%20Nh%E1%BA%A5t%204%20460%20S%C6%B0%20V%E1%BA%A1n%20H%E1%BA%A1nh%2C%20Qu%E1%BA%ADn%2010%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Quận 10. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Dì Liên 5",
    "type": "Bánh xèo",
    "location": "10 Sư Vạn Hạnh, Quận 10, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20D%C3%AC%20Li%C3%AAn%205%2010%20S%C6%B0%20V%E1%BA%A1n%20H%E1%BA%A1nh%2C%20Qu%E1%BA%ADn%2010%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Quận 10. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Bến Thành",
    "type": "Khác",
    "location": "425 Ba Tháng Hai, Quận 10, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20B%E1%BA%BFn%20Th%C3%A0nh%20425%20Ba%20Th%C3%A1ng%20Hai%2C%20Qu%E1%BA%ADn%2010%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Quận 10. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Đồng Quê 2",
    "type": "Khác",
    "location": "205 Lý Thái Tổ, Quận 10, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20%C4%90%E1%BB%93ng%20Qu%C3%AA%202%20205%20L%C3%BD%20Th%C3%A1i%20T%E1%BB%95%2C%20Qu%E1%BA%ADn%2010%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Quận 10. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Cô Ba 3",
    "type": "Khác",
    "location": "327 Ba Tháng Hai, Quận 10, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20C%C3%B4%20Ba%203%20327%20Ba%20Th%C3%A1ng%20Hai%2C%20Qu%E1%BA%ADn%2010%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Quận 10. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Sông Trăng 4",
    "type": "Khác",
    "location": "84 Sư Vạn Hạnh, Quận 10, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20S%C3%B4ng%20Tr%C4%83ng%204%2084%20S%C6%B0%20V%E1%BA%A1n%20H%E1%BA%A1nh%2C%20Qu%E1%BA%ADn%2010%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Quận 10. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Local Taste 5",
    "type": "Khác",
    "location": "122 Nguyễn Tri Phương, Quận 10, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20Local%20Taste%205%20122%20Nguy%E1%BB%85n%20Tri%20Ph%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%2010%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Quận 10. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Hồng Phát",
    "type": "Phở",
    "location": "113 Ông Ích Khiêm, Quận 11, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20H%E1%BB%93ng%20Ph%C3%A1t%20113%20%C3%94ng%20%C3%8Dch%20Khi%C3%AAm%2C%20Qu%E1%BA%ADn%2011%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Quận 11. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Đệ Nhất 2",
    "type": "Phở",
    "location": "395 Hòa Bình, Quận 11, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20%C4%90%E1%BB%87%20Nh%E1%BA%A5t%202%20395%20H%C3%B2a%20B%C3%ACnh%2C%20Qu%E1%BA%ADn%2011%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Quận 11. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Sài Thành 3",
    "type": "Phở",
    "location": "391 Hòa Bình, Quận 11, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20S%C3%A0i%20Th%C3%A0nh%203%20391%20H%C3%B2a%20B%C3%ACnh%2C%20Qu%E1%BA%ADn%2011%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Quận 11. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Minh Khai 4",
    "type": "Phở",
    "location": "345 Lạc Long Quân, Quận 11, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20Minh%20Khai%204%20345%20L%E1%BA%A1c%20Long%20Qu%C3%A2n%2C%20Qu%E1%BA%ADn%2011%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Quận 11. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Đồng Quê 5",
    "type": "Phở",
    "location": "327 Lạc Long Quân, Quận 11, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20%C4%90%E1%BB%93ng%20Qu%C3%AA%205%20327%20L%E1%BA%A1c%20Long%20Qu%C3%A2n%2C%20Qu%E1%BA%ADn%2011%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Quận 11. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Bà Năm",
    "type": "Bún",
    "location": "181 Hòa Bình, Quận 11, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20B%C3%A0%20N%C4%83m%20181%20H%C3%B2a%20B%C3%ACnh%2C%20Qu%E1%BA%ADn%2011%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Quận 11. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Kim Anh 2",
    "type": "Bún",
    "location": "111 Lãnh Binh Thăng, Quận 11, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20Kim%20Anh%202%20111%20L%C3%A3nh%20Binh%20Th%C4%83ng%2C%20Qu%E1%BA%ADn%2011%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Quận 11. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Ông Già 3",
    "type": "Bún",
    "location": "304 Lãnh Binh Thăng, Quận 11, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C3%94ng%20Gi%C3%A0%203%20304%20L%C3%A3nh%20Binh%20Th%C4%83ng%2C%20Qu%E1%BA%ADn%2011%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Quận 11. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Saigon Deli 4",
    "type": "Bún",
    "location": "466 Lãnh Binh Thăng, Quận 11, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20Saigon%20Deli%204%20466%20L%C3%A3nh%20Binh%20Th%C4%83ng%2C%20Qu%E1%BA%ADn%2011%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Quận 11. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Hoàn Kiếm 5",
    "type": "Bún",
    "location": "11 Lạc Long Quân, Quận 11, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20Ho%C3%A0n%20Ki%E1%BA%BFm%205%2011%20L%E1%BA%A1c%20Long%20Qu%C3%A2n%2C%20Qu%E1%BA%ADn%2011%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Quận 11. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Nắng Vàng",
    "type": "Cơm",
    "location": "397 Minh Phụng, Quận 11, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20N%E1%BA%AFng%20V%C3%A0ng%20397%20Minh%20Ph%E1%BB%A5ng%2C%20Qu%E1%BA%ADn%2011%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Quận 11. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Chú Bảy 2",
    "type": "Cơm",
    "location": "88 Ông Ích Khiêm, Quận 11, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20Ch%C3%BA%20B%E1%BA%A3y%202%2088%20%C3%94ng%20%C3%8Dch%20Khi%C3%AAm%2C%20Qu%E1%BA%ADn%2011%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Quận 11. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Sài Thành 3",
    "type": "Cơm",
    "location": "372 Minh Phụng, Quận 11, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20S%C3%A0i%20Th%C3%A0nh%203%20372%20Minh%20Ph%E1%BB%A5ng%2C%20Qu%E1%BA%ADn%2011%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Quận 11. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Đông Á 4",
    "type": "Cơm",
    "location": "429 Lãnh Binh Thăng, Quận 11, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20%C4%90%C3%B4ng%20%C3%81%204%20429%20L%C3%A3nh%20Binh%20Th%C4%83ng%2C%20Qu%E1%BA%ADn%2011%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Quận 11. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Đông Á 5",
    "type": "Cơm",
    "location": "364 Lạc Long Quân, Quận 11, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20%C4%90%C3%B4ng%20%C3%81%205%20364%20L%E1%BA%A1c%20Long%20Qu%C3%A2n%2C%20Qu%E1%BA%ADn%2011%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Quận 11. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Viet Kitchen",
    "type": "Lẩu",
    "location": "434 Lạc Long Quân, Quận 11, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20Viet%20Kitchen%20434%20L%E1%BA%A1c%20Long%20Qu%C3%A2n%2C%20Qu%E1%BA%ADn%2011%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Quận 11. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Đông Á 2",
    "type": "Lẩu",
    "location": "50 Minh Phụng, Quận 11, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20%C4%90%C3%B4ng%20%C3%81%202%2050%20Minh%20Ph%E1%BB%A5ng%2C%20Qu%E1%BA%ADn%2011%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Quận 11. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Hương Việt 3",
    "type": "Lẩu",
    "location": "68 Lạc Long Quân, Quận 11, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20H%C6%B0%C6%A1ng%20Vi%E1%BB%87t%203%2068%20L%E1%BA%A1c%20Long%20Qu%C3%A2n%2C%20Qu%E1%BA%ADn%2011%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Quận 11. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Saigon Deli 4",
    "type": "Lẩu",
    "location": "178 Lạc Long Quân, Quận 11, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20Saigon%20Deli%204%20178%20L%E1%BA%A1c%20Long%20Qu%C3%A2n%2C%20Qu%E1%BA%ADn%2011%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Quận 11. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Thái Bình 5",
    "type": "Lẩu",
    "location": "298 Ông Ích Khiêm, Quận 11, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20Th%C3%A1i%20B%C3%ACnh%205%20298%20%C3%94ng%20%C3%8Dch%20Khi%C3%AAm%2C%20Qu%E1%BA%ADn%2011%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Quận 11. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Local Taste",
    "type": "Đồ chay",
    "location": "300 Lạc Long Quân, Quận 11, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20Local%20Taste%20300%20L%E1%BA%A1c%20Long%20Qu%C3%A2n%2C%20Qu%E1%BA%ADn%2011%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Quận 11. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Hương Việt 2",
    "type": "Đồ chay",
    "location": "237 Lãnh Binh Thăng, Quận 11, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20H%C6%B0%C6%A1ng%20Vi%E1%BB%87t%202%20237%20L%C3%A3nh%20Binh%20Th%C4%83ng%2C%20Qu%E1%BA%ADn%2011%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Quận 11. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Ngọc Lan 3",
    "type": "Đồ chay",
    "location": "62 Ông Ích Khiêm, Quận 11, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20Ng%E1%BB%8Dc%20Lan%203%2062%20%C3%94ng%20%C3%8Dch%20Khi%C3%AAm%2C%20Qu%E1%BA%ADn%2011%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Quận 11. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Sông Trăng 4",
    "type": "Đồ chay",
    "location": "27 Lạc Long Quân, Quận 11, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20S%C3%B4ng%20Tr%C4%83ng%204%2027%20L%E1%BA%A1c%20Long%20Qu%C3%A2n%2C%20Qu%E1%BA%ADn%2011%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Quận 11. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Local Taste 5",
    "type": "Đồ chay",
    "location": "412 Minh Phụng, Quận 11, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20Local%20Taste%205%20412%20Minh%20Ph%E1%BB%A5ng%2C%20Qu%E1%BA%ADn%2011%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Quận 11. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Đồng Quê",
    "type": "Bánh mì",
    "location": "146 Ông Ích Khiêm, Quận 11, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20%C4%90%E1%BB%93ng%20Qu%C3%AA%20146%20%C3%94ng%20%C3%8Dch%20Khi%C3%AAm%2C%20Qu%E1%BA%ADn%2011%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Quận 11. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Sông Trăng 2",
    "type": "Bánh mì",
    "location": "320 Ông Ích Khiêm, Quận 11, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20S%C3%B4ng%20Tr%C4%83ng%202%20320%20%C3%94ng%20%C3%8Dch%20Khi%C3%AAm%2C%20Qu%E1%BA%ADn%2011%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Quận 11. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Đồng Quê 3",
    "type": "Bánh mì",
    "location": "268 Lãnh Binh Thăng, Quận 11, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20%C4%90%E1%BB%93ng%20Qu%C3%AA%203%20268%20L%C3%A3nh%20Binh%20Th%C4%83ng%2C%20Qu%E1%BA%ADn%2011%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Quận 11. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Thanh Đa 4",
    "type": "Bánh mì",
    "location": "424 Lạc Long Quân, Quận 11, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20Thanh%20%C4%90a%204%20424%20L%E1%BA%A1c%20Long%20Qu%C3%A2n%2C%20Qu%E1%BA%ADn%2011%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Quận 11. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Local Taste 5",
    "type": "Bánh mì",
    "location": "468 Minh Phụng, Quận 11, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20Local%20Taste%205%20468%20Minh%20Ph%E1%BB%A5ng%2C%20Qu%E1%BA%ADn%2011%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Quận 11. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Ông Già",
    "type": "Ăn vặt",
    "location": "294 Lãnh Binh Thăng, Quận 11, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20%C3%94ng%20Gi%C3%A0%20294%20L%C3%A3nh%20Binh%20Th%C4%83ng%2C%20Qu%E1%BA%ADn%2011%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Quận 11. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Cô Ba 2",
    "type": "Ăn vặt",
    "location": "326 Lạc Long Quân, Quận 11, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20C%C3%B4%20Ba%202%20326%20L%E1%BA%A1c%20Long%20Qu%C3%A2n%2C%20Qu%E1%BA%ADn%2011%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Quận 11. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Ngọc Lan 3",
    "type": "Ăn vặt",
    "location": "147 Hòa Bình, Quận 11, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20Ng%E1%BB%8Dc%20Lan%203%20147%20H%C3%B2a%20B%C3%ACnh%2C%20Qu%E1%BA%ADn%2011%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Quận 11. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Dì Liên 4",
    "type": "Ăn vặt",
    "location": "89 Lãnh Binh Thăng, Quận 11, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20D%C3%AC%20Li%C3%AAn%204%2089%20L%C3%A3nh%20Binh%20Th%C4%83ng%2C%20Qu%E1%BA%ADn%2011%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Quận 11. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Đệ Nhất 5",
    "type": "Ăn vặt",
    "location": "225 Hòa Bình, Quận 11, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20%C4%90%E1%BB%87%20Nh%E1%BA%A5t%205%20225%20H%C3%B2a%20B%C3%ACnh%2C%20Qu%E1%BA%ADn%2011%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Quận 11. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Hào Hùng",
    "type": "Bánh cuốn",
    "location": "110 Hòa Bình, Quận 11, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20H%C3%A0o%20H%C3%B9ng%20110%20H%C3%B2a%20B%C3%ACnh%2C%20Qu%E1%BA%ADn%2011%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Quận 11. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Đông Á 2",
    "type": "Bánh cuốn",
    "location": "146 Lãnh Binh Thăng, Quận 11, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20%C4%90%C3%B4ng%20%C3%81%202%20146%20L%C3%A3nh%20Binh%20Th%C4%83ng%2C%20Qu%E1%BA%ADn%2011%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Quận 11. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Thanh Xuân 3",
    "type": "Bánh cuốn",
    "location": "121 Ông Ích Khiêm, Quận 11, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20Thanh%20Xu%C3%A2n%203%20121%20%C3%94ng%20%C3%8Dch%20Khi%C3%AAm%2C%20Qu%E1%BA%ADn%2011%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Quận 11. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Hồng Phát 4",
    "type": "Bánh cuốn",
    "location": "144 Ông Ích Khiêm, Quận 11, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20H%E1%BB%93ng%20Ph%C3%A1t%204%20144%20%C3%94ng%20%C3%8Dch%20Khi%C3%AAm%2C%20Qu%E1%BA%ADn%2011%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Quận 11. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Minh Khai 5",
    "type": "Bánh cuốn",
    "location": "279 Lạc Long Quân, Quận 11, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20Minh%20Khai%205%20279%20L%E1%BA%A1c%20Long%20Qu%C3%A2n%2C%20Qu%E1%BA%ADn%2011%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Quận 11. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Thái Bình",
    "type": "Bún đậu",
    "location": "319 Lạc Long Quân, Quận 11, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20Th%C3%A1i%20B%C3%ACnh%20319%20L%E1%BA%A1c%20Long%20Qu%C3%A2n%2C%20Qu%E1%BA%ADn%2011%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Quận 11. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Đệ Nhất 2",
    "type": "Bún đậu",
    "location": "95 Ông Ích Khiêm, Quận 11, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20%C4%90%E1%BB%87%20Nh%E1%BA%A5t%202%2095%20%C3%94ng%20%C3%8Dch%20Khi%C3%AAm%2C%20Qu%E1%BA%ADn%2011%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Quận 11. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Đồng Quê 3",
    "type": "Bún đậu",
    "location": "310 Lạc Long Quân, Quận 11, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20%C4%90%E1%BB%93ng%20Qu%C3%AA%203%20310%20L%E1%BA%A1c%20Long%20Qu%C3%A2n%2C%20Qu%E1%BA%ADn%2011%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Quận 11. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Anh Tư 4",
    "type": "Bún đậu",
    "location": "293 Lạc Long Quân, Quận 11, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20Anh%20T%C6%B0%204%20293%20L%E1%BA%A1c%20Long%20Qu%C3%A2n%2C%20Qu%E1%BA%ADn%2011%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Quận 11. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Cô Ba 5",
    "type": "Bún đậu",
    "location": "492 Lạc Long Quân, Quận 11, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20C%C3%B4%20Ba%205%20492%20L%E1%BA%A1c%20Long%20Qu%C3%A2n%2C%20Qu%E1%BA%ADn%2011%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Quận 11. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Đông Á",
    "type": "Hải sản",
    "location": "149 Minh Phụng, Quận 11, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20%C4%90%C3%B4ng%20%C3%81%20149%20Minh%20Ph%E1%BB%A5ng%2C%20Qu%E1%BA%ADn%2011%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Quận 11. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Hào Hùng 2",
    "type": "Hải sản",
    "location": "145 Minh Phụng, Quận 11, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20H%C3%A0o%20H%C3%B9ng%202%20145%20Minh%20Ph%E1%BB%A5ng%2C%20Qu%E1%BA%ADn%2011%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Quận 11. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Gia Đình 3",
    "type": "Hải sản",
    "location": "352 Lạc Long Quân, Quận 11, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20Gia%20%C4%90%C3%ACnh%203%20352%20L%E1%BA%A1c%20Long%20Qu%C3%A2n%2C%20Qu%E1%BA%ADn%2011%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Quận 11. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Thanh Xuân 4",
    "type": "Hải sản",
    "location": "216 Minh Phụng, Quận 11, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20Thanh%20Xu%C3%A2n%204%20216%20Minh%20Ph%E1%BB%A5ng%2C%20Qu%E1%BA%ADn%2011%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Quận 11. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Mưa Hồng 5",
    "type": "Hải sản",
    "location": "106 Minh Phụng, Quận 11, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20M%C6%B0a%20H%E1%BB%93ng%205%20106%20Minh%20Ph%E1%BB%A5ng%2C%20Qu%E1%BA%ADn%2011%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Quận 11. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Viet Kitchen",
    "type": "Ốc",
    "location": "154 Lạc Long Quân, Quận 11, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20Viet%20Kitchen%20154%20L%E1%BA%A1c%20Long%20Qu%C3%A2n%2C%20Qu%E1%BA%ADn%2011%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Quận 11. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Hương Việt 2",
    "type": "Ốc",
    "location": "386 Ông Ích Khiêm, Quận 11, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20H%C6%B0%C6%A1ng%20Vi%E1%BB%87t%202%20386%20%C3%94ng%20%C3%8Dch%20Khi%C3%AAm%2C%20Qu%E1%BA%ADn%2011%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Quận 11. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Thanh Xuân 3",
    "type": "Ốc",
    "location": "127 Minh Phụng, Quận 11, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20Thanh%20Xu%C3%A2n%203%20127%20Minh%20Ph%E1%BB%A5ng%2C%20Qu%E1%BA%ADn%2011%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Quận 11. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Bến Thành 4",
    "type": "Ốc",
    "location": "61 Ông Ích Khiêm, Quận 11, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20B%E1%BA%BFn%20Th%C3%A0nh%204%2061%20%C3%94ng%20%C3%8Dch%20Khi%C3%AAm%2C%20Qu%E1%BA%ADn%2011%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Quận 11. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Vĩnh Lộc 5",
    "type": "Ốc",
    "location": "379 Hòa Bình, Quận 11, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20V%C4%A9nh%20L%E1%BB%99c%205%20379%20H%C3%B2a%20B%C3%ACnh%2C%20Qu%E1%BA%ADn%2011%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Quận 11. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Thanh Xuân",
    "type": "Mì",
    "location": "290 Ông Ích Khiêm, Quận 11, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20Thanh%20Xu%C3%A2n%20290%20%C3%94ng%20%C3%8Dch%20Khi%C3%AAm%2C%20Qu%E1%BA%ADn%2011%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Quận 11. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Đệ Nhất 2",
    "type": "Mì",
    "location": "175 Minh Phụng, Quận 11, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20%C4%90%E1%BB%87%20Nh%E1%BA%A5t%202%20175%20Minh%20Ph%E1%BB%A5ng%2C%20Qu%E1%BA%ADn%2011%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Quận 11. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Đồng Quê 3",
    "type": "Mì",
    "location": "442 Minh Phụng, Quận 11, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20%C4%90%E1%BB%93ng%20Qu%C3%AA%203%20442%20Minh%20Ph%E1%BB%A5ng%2C%20Qu%E1%BA%ADn%2011%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Quận 11. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Sông Trăng 4",
    "type": "Mì",
    "location": "316 Ông Ích Khiêm, Quận 11, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20S%C3%B4ng%20Tr%C4%83ng%204%20316%20%C3%94ng%20%C3%8Dch%20Khi%C3%AAm%2C%20Qu%E1%BA%ADn%2011%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Quận 11. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Kim Anh 5",
    "type": "Mì",
    "location": "224 Lãnh Binh Thăng, Quận 11, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20Kim%20Anh%205%20224%20L%C3%A3nh%20Binh%20Th%C4%83ng%2C%20Qu%E1%BA%ADn%2011%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Quận 11. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Minh Khai",
    "type": "Hủ tiếu",
    "location": "327 Lạc Long Quân, Quận 11, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20Minh%20Khai%20327%20L%E1%BA%A1c%20Long%20Qu%C3%A2n%2C%20Qu%E1%BA%ADn%2011%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Quận 11. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Hương Việt 2",
    "type": "Hủ tiếu",
    "location": "194 Minh Phụng, Quận 11, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20H%C6%B0%C6%A1ng%20Vi%E1%BB%87t%202%20194%20Minh%20Ph%E1%BB%A5ng%2C%20Qu%E1%BA%ADn%2011%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Quận 11. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Ngọc Lan 3",
    "type": "Hủ tiếu",
    "location": "22 Lãnh Binh Thăng, Quận 11, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20Ng%E1%BB%8Dc%20Lan%203%2022%20L%C3%A3nh%20Binh%20Th%C4%83ng%2C%20Qu%E1%BA%ADn%2011%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Quận 11. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Anh Tư 4",
    "type": "Hủ tiếu",
    "location": "225 Lãnh Binh Thăng, Quận 11, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20Anh%20T%C6%B0%204%20225%20L%C3%A3nh%20Binh%20Th%C4%83ng%2C%20Qu%E1%BA%ADn%2011%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Quận 11. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Cô Ba 5",
    "type": "Hủ tiếu",
    "location": "325 Minh Phụng, Quận 11, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20C%C3%B4%20Ba%205%20325%20Minh%20Ph%E1%BB%A5ng%2C%20Qu%E1%BA%ADn%2011%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Quận 11. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Dì Liên",
    "type": "Đồ nướng",
    "location": "281 Hòa Bình, Quận 11, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20D%C3%AC%20Li%C3%AAn%20281%20H%C3%B2a%20B%C3%ACnh%2C%20Qu%E1%BA%ADn%2011%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Quận 11. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Thanh Xuân 2",
    "type": "Đồ nướng",
    "location": "171 Lãnh Binh Thăng, Quận 11, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20Thanh%20Xu%C3%A2n%202%20171%20L%C3%A3nh%20Binh%20Th%C4%83ng%2C%20Qu%E1%BA%ADn%2011%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Quận 11. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Nắng Vàng 3",
    "type": "Đồ nướng",
    "location": "370 Ông Ích Khiêm, Quận 11, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20N%E1%BA%AFng%20V%C3%A0ng%203%20370%20%C3%94ng%20%C3%8Dch%20Khi%C3%AAm%2C%20Qu%E1%BA%ADn%2011%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Quận 11. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Nắng Vàng 4",
    "type": "Đồ nướng",
    "location": "78 Minh Phụng, Quận 11, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20N%E1%BA%AFng%20V%C3%A0ng%204%2078%20Minh%20Ph%E1%BB%A5ng%2C%20Qu%E1%BA%ADn%2011%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Quận 11. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Minh Khai 5",
    "type": "Đồ nướng",
    "location": "17 Minh Phụng, Quận 11, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20Minh%20Khai%205%2017%20Minh%20Ph%E1%BB%A5ng%2C%20Qu%E1%BA%ADn%2011%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Quận 11. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Local Taste",
    "type": "Nước & Cafe",
    "location": "213 Minh Phụng, Quận 11, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20Local%20Taste%20213%20Minh%20Ph%E1%BB%A5ng%2C%20Qu%E1%BA%ADn%2011%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Quận 11. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Phố Hội 2",
    "type": "Nước & Cafe",
    "location": "7 Minh Phụng, Quận 11, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20Ph%E1%BB%91%20H%E1%BB%99i%202%207%20Minh%20Ph%E1%BB%A5ng%2C%20Qu%E1%BA%ADn%2011%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Quận 11. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Nắng Vàng 3",
    "type": "Nước & Cafe",
    "location": "415 Lãnh Binh Thăng, Quận 11, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20N%E1%BA%AFng%20V%C3%A0ng%203%20415%20L%C3%A3nh%20Binh%20Th%C4%83ng%2C%20Qu%E1%BA%ADn%2011%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Quận 11. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Sài Thành 4",
    "type": "Nước & Cafe",
    "location": "454 Lãnh Binh Thăng, Quận 11, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20S%C3%A0i%20Th%C3%A0nh%204%20454%20L%C3%A3nh%20Binh%20Th%C4%83ng%2C%20Qu%E1%BA%ADn%2011%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Quận 11. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Gia Đình 5",
    "type": "Nước & Cafe",
    "location": "151 Lãnh Binh Thăng, Quận 11, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20Gia%20%C4%90%C3%ACnh%205%20151%20L%C3%A3nh%20Binh%20Th%C4%83ng%2C%20Qu%E1%BA%ADn%2011%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Quận 11. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Sài Thành",
    "type": "Chè",
    "location": "498 Ông Ích Khiêm, Quận 11, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20S%C3%A0i%20Th%C3%A0nh%20498%20%C3%94ng%20%C3%8Dch%20Khi%C3%AAm%2C%20Qu%E1%BA%ADn%2011%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Quận 11. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Thái Bình 2",
    "type": "Chè",
    "location": "444 Ông Ích Khiêm, Quận 11, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20Th%C3%A1i%20B%C3%ACnh%202%20444%20%C3%94ng%20%C3%8Dch%20Khi%C3%AAm%2C%20Qu%E1%BA%ADn%2011%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Quận 11. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Ông Già 3",
    "type": "Chè",
    "location": "323 Lạc Long Quân, Quận 11, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20%C3%94ng%20Gi%C3%A0%203%20323%20L%E1%BA%A1c%20Long%20Qu%C3%A2n%2C%20Qu%E1%BA%ADn%2011%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Quận 11. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Chú Bảy 4",
    "type": "Chè",
    "location": "15 Lạc Long Quân, Quận 11, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20Ch%C3%BA%20B%E1%BA%A3y%204%2015%20L%E1%BA%A1c%20Long%20Qu%C3%A2n%2C%20Qu%E1%BA%ADn%2011%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Quận 11. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Anh Tư 5",
    "type": "Chè",
    "location": "356 Lạc Long Quân, Quận 11, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20Anh%20T%C6%B0%205%20356%20L%E1%BA%A1c%20Long%20Qu%C3%A2n%2C%20Qu%E1%BA%ADn%2011%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Quận 11. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Sông Trăng",
    "type": "Bánh xèo",
    "location": "298 Minh Phụng, Quận 11, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20S%C3%B4ng%20Tr%C4%83ng%20298%20Minh%20Ph%E1%BB%A5ng%2C%20Qu%E1%BA%ADn%2011%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Quận 11. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Hương Việt 2",
    "type": "Bánh xèo",
    "location": "162 Minh Phụng, Quận 11, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20H%C6%B0%C6%A1ng%20Vi%E1%BB%87t%202%20162%20Minh%20Ph%E1%BB%A5ng%2C%20Qu%E1%BA%ADn%2011%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Quận 11. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Xưa & Nay 3",
    "type": "Bánh xèo",
    "location": "486 Lạc Long Quân, Quận 11, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20X%C6%B0a%20%26%20Nay%203%20486%20L%E1%BA%A1c%20Long%20Qu%C3%A2n%2C%20Qu%E1%BA%ADn%2011%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Quận 11. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Đồng Quê 4",
    "type": "Bánh xèo",
    "location": "307 Lãnh Binh Thăng, Quận 11, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20%C4%90%E1%BB%93ng%20Qu%C3%AA%204%20307%20L%C3%A3nh%20Binh%20Th%C4%83ng%2C%20Qu%E1%BA%ADn%2011%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Quận 11. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Đông Á 5",
    "type": "Bánh xèo",
    "location": "304 Minh Phụng, Quận 11, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20%C4%90%C3%B4ng%20%C3%81%205%20304%20Minh%20Ph%E1%BB%A5ng%2C%20Qu%E1%BA%ADn%2011%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Quận 11. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Xưa & Nay",
    "type": "Khác",
    "location": "264 Lạc Long Quân, Quận 11, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20X%C6%B0a%20%26%20Nay%20264%20L%E1%BA%A1c%20Long%20Qu%C3%A2n%2C%20Qu%E1%BA%ADn%2011%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Quận 11. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Sông Trăng 2",
    "type": "Khác",
    "location": "368 Minh Phụng, Quận 11, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20S%C3%B4ng%20Tr%C4%83ng%202%20368%20Minh%20Ph%E1%BB%A5ng%2C%20Qu%E1%BA%ADn%2011%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Quận 11. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Hương Việt 3",
    "type": "Khác",
    "location": "114 Hòa Bình, Quận 11, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20H%C6%B0%C6%A1ng%20Vi%E1%BB%87t%203%20114%20H%C3%B2a%20B%C3%ACnh%2C%20Qu%E1%BA%ADn%2011%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Quận 11. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Ngọc Lan 4",
    "type": "Khác",
    "location": "80 Lãnh Binh Thăng, Quận 11, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20Ng%E1%BB%8Dc%20Lan%204%2080%20L%C3%A3nh%20Binh%20Th%C4%83ng%2C%20Qu%E1%BA%ADn%2011%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Quận 11. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Bà Năm 5",
    "type": "Khác",
    "location": "307 Minh Phụng, Quận 11, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20B%C3%A0%20N%C4%83m%205%20307%20Minh%20Ph%E1%BB%A5ng%2C%20Qu%E1%BA%ADn%2011%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Quận 11. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Bến Thành",
    "type": "Phở",
    "location": "361 Hà Huy Giáp, Quận 12, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20B%E1%BA%BFn%20Th%C3%A0nh%20361%20H%C3%A0%20Huy%20Gi%C3%A1p%2C%20Qu%E1%BA%ADn%2012%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Quận 12. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Vĩnh Lộc 2",
    "type": "Phở",
    "location": "476 Lê Văn Khương, Quận 12, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20V%C4%A9nh%20L%E1%BB%99c%202%20476%20L%C3%AA%20V%C4%83n%20Kh%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%2012%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Quận 12. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Ông Già 3",
    "type": "Phở",
    "location": "112 Hà Huy Giáp, Quận 12, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20%C3%94ng%20Gi%C3%A0%203%20112%20H%C3%A0%20Huy%20Gi%C3%A1p%2C%20Qu%E1%BA%ADn%2012%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Quận 12. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Ngọc Lan 4",
    "type": "Phở",
    "location": "118 Hà Huy Giáp, Quận 12, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20Ng%E1%BB%8Dc%20Lan%204%20118%20H%C3%A0%20Huy%20Gi%C3%A1p%2C%20Qu%E1%BA%ADn%2012%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Quận 12. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Hoàn Kiếm 5",
    "type": "Phở",
    "location": "126 Lê Văn Khương, Quận 12, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20Ho%C3%A0n%20Ki%E1%BA%BFm%205%20126%20L%C3%AA%20V%C4%83n%20Kh%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%2012%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Quận 12. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Kim Anh",
    "type": "Bún",
    "location": "107 Lê Văn Khương, Quận 12, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20Kim%20Anh%20107%20L%C3%AA%20V%C4%83n%20Kh%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%2012%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Quận 12. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Sài Thành 2",
    "type": "Bún",
    "location": "467 Hà Huy Giáp, Quận 12, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20S%C3%A0i%20Th%C3%A0nh%202%20467%20H%C3%A0%20Huy%20Gi%C3%A1p%2C%20Qu%E1%BA%ADn%2012%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Quận 12. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Đệ Nhất 3",
    "type": "Bún",
    "location": "379 Hà Huy Giáp, Quận 12, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%90%E1%BB%87%20Nh%E1%BA%A5t%203%20379%20H%C3%A0%20Huy%20Gi%C3%A1p%2C%20Qu%E1%BA%ADn%2012%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Quận 12. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Cô Ba 4",
    "type": "Bún",
    "location": "143 Hà Huy Giáp, Quận 12, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20C%C3%B4%20Ba%204%20143%20H%C3%A0%20Huy%20Gi%C3%A1p%2C%20Qu%E1%BA%ADn%2012%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Quận 12. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Hương Việt 5",
    "type": "Bún",
    "location": "476 Lê Văn Khương, Quận 12, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20H%C6%B0%C6%A1ng%20Vi%E1%BB%87t%205%20476%20L%C3%AA%20V%C4%83n%20Kh%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%2012%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Quận 12. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Hồng Phát",
    "type": "Cơm",
    "location": "132 Hà Huy Giáp, Quận 12, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20H%E1%BB%93ng%20Ph%C3%A1t%20132%20H%C3%A0%20Huy%20Gi%C3%A1p%2C%20Qu%E1%BA%ADn%2012%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Quận 12. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Nam Hải 2",
    "type": "Cơm",
    "location": "119 Tô Ký, Quận 12, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20Nam%20H%E1%BA%A3i%202%20119%20T%C3%B4%20K%C3%BD%2C%20Qu%E1%BA%ADn%2012%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Quận 12. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Nam Hải 3",
    "type": "Cơm",
    "location": "456 Lê Văn Khương, Quận 12, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20Nam%20H%E1%BA%A3i%203%20456%20L%C3%AA%20V%C4%83n%20Kh%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%2012%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Quận 12. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Hoàn Kiếm 4",
    "type": "Cơm",
    "location": "230 Lê Văn Khương, Quận 12, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20Ho%C3%A0n%20Ki%E1%BA%BFm%204%20230%20L%C3%AA%20V%C4%83n%20Kh%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%2012%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Quận 12. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Đông Á 5",
    "type": "Cơm",
    "location": "142 Nguyễn Ánh Thủ, Quận 12, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20%C4%90%C3%B4ng%20%C3%81%205%20142%20Nguy%E1%BB%85n%20%C3%81nh%20Th%E1%BB%A7%2C%20Qu%E1%BA%ADn%2012%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Quận 12. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Minh Khai",
    "type": "Lẩu",
    "location": "341 Tô Ký, Quận 12, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20Minh%20Khai%20341%20T%C3%B4%20K%C3%BD%2C%20Qu%E1%BA%ADn%2012%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Quận 12. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Bà Năm 2",
    "type": "Lẩu",
    "location": "171 Lê Văn Khương, Quận 12, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20B%C3%A0%20N%C4%83m%202%20171%20L%C3%AA%20V%C4%83n%20Kh%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%2012%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Quận 12. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Cô Ba 3",
    "type": "Lẩu",
    "location": "57 Quang Trung, Quận 12, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20C%C3%B4%20Ba%203%2057%20Quang%20Trung%2C%20Qu%E1%BA%ADn%2012%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Quận 12. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Đệ Nhất 4",
    "type": "Lẩu",
    "location": "173 Hà Huy Giáp, Quận 12, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20%C4%90%E1%BB%87%20Nh%E1%BA%A5t%204%20173%20H%C3%A0%20Huy%20Gi%C3%A1p%2C%20Qu%E1%BA%ADn%2012%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Quận 12. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Đồng Quê 5",
    "type": "Lẩu",
    "location": "324 Tô Ký, Quận 12, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20%C4%90%E1%BB%93ng%20Qu%C3%AA%205%20324%20T%C3%B4%20K%C3%BD%2C%20Qu%E1%BA%ADn%2012%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Quận 12. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Nam Hải",
    "type": "Đồ chay",
    "location": "94 Nguyễn Ánh Thủ, Quận 12, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20Nam%20H%E1%BA%A3i%2094%20Nguy%E1%BB%85n%20%C3%81nh%20Th%E1%BB%A7%2C%20Qu%E1%BA%ADn%2012%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Quận 12. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Sài Thành 2",
    "type": "Đồ chay",
    "location": "393 Lê Văn Khương, Quận 12, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20S%C3%A0i%20Th%C3%A0nh%202%20393%20L%C3%AA%20V%C4%83n%20Kh%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%2012%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Quận 12. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Hoàn Kiếm 3",
    "type": "Đồ chay",
    "location": "419 Hà Huy Giáp, Quận 12, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20Ho%C3%A0n%20Ki%E1%BA%BFm%203%20419%20H%C3%A0%20Huy%20Gi%C3%A1p%2C%20Qu%E1%BA%ADn%2012%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Quận 12. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Bến Thành 4",
    "type": "Đồ chay",
    "location": "490 Lê Văn Khương, Quận 12, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20B%E1%BA%BFn%20Th%C3%A0nh%204%20490%20L%C3%AA%20V%C4%83n%20Kh%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%2012%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Quận 12. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Thanh Đa 5",
    "type": "Đồ chay",
    "location": "10 Tô Ký, Quận 12, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20Thanh%20%C4%90a%205%2010%20T%C3%B4%20K%C3%BD%2C%20Qu%E1%BA%ADn%2012%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Quận 12. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Saigon Deli",
    "type": "Bánh mì",
    "location": "184 Hà Huy Giáp, Quận 12, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20Saigon%20Deli%20184%20H%C3%A0%20Huy%20Gi%C3%A1p%2C%20Qu%E1%BA%ADn%2012%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Quận 12. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Minh Khai 2",
    "type": "Bánh mì",
    "location": "317 Tô Ký, Quận 12, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20Minh%20Khai%202%20317%20T%C3%B4%20K%C3%BD%2C%20Qu%E1%BA%ADn%2012%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Quận 12. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Dì Liên 3",
    "type": "Bánh mì",
    "location": "85 Tô Ký, Quận 12, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20D%C3%AC%20Li%C3%AAn%203%2085%20T%C3%B4%20K%C3%BD%2C%20Qu%E1%BA%ADn%2012%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Quận 12. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Sông Trăng 4",
    "type": "Bánh mì",
    "location": "274 Quang Trung, Quận 12, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20S%C3%B4ng%20Tr%C4%83ng%204%20274%20Quang%20Trung%2C%20Qu%E1%BA%ADn%2012%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Quận 12. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Sài Thành 5",
    "type": "Bánh mì",
    "location": "499 Lê Văn Khương, Quận 12, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20S%C3%A0i%20Th%C3%A0nh%205%20499%20L%C3%AA%20V%C4%83n%20Kh%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%2012%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Quận 12. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Saigon Deli",
    "type": "Ăn vặt",
    "location": "496 Hà Huy Giáp, Quận 12, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20Saigon%20Deli%20496%20H%C3%A0%20Huy%20Gi%C3%A1p%2C%20Qu%E1%BA%ADn%2012%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Quận 12. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Saigon Deli 2",
    "type": "Ăn vặt",
    "location": "169 Hà Huy Giáp, Quận 12, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20Saigon%20Deli%202%20169%20H%C3%A0%20Huy%20Gi%C3%A1p%2C%20Qu%E1%BA%ADn%2012%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Quận 12. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Xưa & Nay 3",
    "type": "Ăn vặt",
    "location": "95 Quang Trung, Quận 12, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20X%C6%B0a%20%26%20Nay%203%2095%20Quang%20Trung%2C%20Qu%E1%BA%ADn%2012%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Quận 12. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Bà Năm 4",
    "type": "Ăn vặt",
    "location": "300 Lê Văn Khương, Quận 12, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20B%C3%A0%20N%C4%83m%204%20300%20L%C3%AA%20V%C4%83n%20Kh%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%2012%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Quận 12. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Local Taste 5",
    "type": "Ăn vặt",
    "location": "8 Nguyễn Ánh Thủ, Quận 12, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20Local%20Taste%205%208%20Nguy%E1%BB%85n%20%C3%81nh%20Th%E1%BB%A7%2C%20Qu%E1%BA%ADn%2012%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Quận 12. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Thái Bình",
    "type": "Bánh cuốn",
    "location": "246 Hà Huy Giáp, Quận 12, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20Th%C3%A1i%20B%C3%ACnh%20246%20H%C3%A0%20Huy%20Gi%C3%A1p%2C%20Qu%E1%BA%ADn%2012%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Quận 12. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Nam Hải 2",
    "type": "Bánh cuốn",
    "location": "451 Tô Ký, Quận 12, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20Nam%20H%E1%BA%A3i%202%20451%20T%C3%B4%20K%C3%BD%2C%20Qu%E1%BA%ADn%2012%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Quận 12. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Hoàn Kiếm 3",
    "type": "Bánh cuốn",
    "location": "361 Hà Huy Giáp, Quận 12, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20Ho%C3%A0n%20Ki%E1%BA%BFm%203%20361%20H%C3%A0%20Huy%20Gi%C3%A1p%2C%20Qu%E1%BA%ADn%2012%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Quận 12. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Hoàn Kiếm 4",
    "type": "Bánh cuốn",
    "location": "172 Nguyễn Ánh Thủ, Quận 12, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20Ho%C3%A0n%20Ki%E1%BA%BFm%204%20172%20Nguy%E1%BB%85n%20%C3%81nh%20Th%E1%BB%A7%2C%20Qu%E1%BA%ADn%2012%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Quận 12. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Đệ Nhất 5",
    "type": "Bánh cuốn",
    "location": "87 Lê Văn Khương, Quận 12, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20%C4%90%E1%BB%87%20Nh%E1%BA%A5t%205%2087%20L%C3%AA%20V%C4%83n%20Kh%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%2012%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Quận 12. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Ngọc Lan",
    "type": "Bún đậu",
    "location": "374 Nguyễn Ánh Thủ, Quận 12, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20Ng%E1%BB%8Dc%20Lan%20374%20Nguy%E1%BB%85n%20%C3%81nh%20Th%E1%BB%A7%2C%20Qu%E1%BA%ADn%2012%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Quận 12. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Anh Tư 2",
    "type": "Bún đậu",
    "location": "254 Nguyễn Ánh Thủ, Quận 12, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20Anh%20T%C6%B0%202%20254%20Nguy%E1%BB%85n%20%C3%81nh%20Th%E1%BB%A7%2C%20Qu%E1%BA%ADn%2012%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Quận 12. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Kim Anh 3",
    "type": "Bún đậu",
    "location": "375 Quang Trung, Quận 12, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20Kim%20Anh%203%20375%20Quang%20Trung%2C%20Qu%E1%BA%ADn%2012%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Quận 12. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Mưa Hồng 4",
    "type": "Bún đậu",
    "location": "404 Nguyễn Ánh Thủ, Quận 12, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20M%C6%B0a%20H%E1%BB%93ng%204%20404%20Nguy%E1%BB%85n%20%C3%81nh%20Th%E1%BB%A7%2C%20Qu%E1%BA%ADn%2012%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Quận 12. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Hồng Phát 5",
    "type": "Bún đậu",
    "location": "375 Lê Văn Khương, Quận 12, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20H%E1%BB%93ng%20Ph%C3%A1t%205%20375%20L%C3%AA%20V%C4%83n%20Kh%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%2012%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Quận 12. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Gia Đình",
    "type": "Hải sản",
    "location": "222 Lê Văn Khương, Quận 12, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20Gia%20%C4%90%C3%ACnh%20222%20L%C3%AA%20V%C4%83n%20Kh%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%2012%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Quận 12. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Xưa & Nay 2",
    "type": "Hải sản",
    "location": "346 Tô Ký, Quận 12, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20X%C6%B0a%20%26%20Nay%202%20346%20T%C3%B4%20K%C3%BD%2C%20Qu%E1%BA%ADn%2012%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Quận 12. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Bà Năm 3",
    "type": "Hải sản",
    "location": "35 Hà Huy Giáp, Quận 12, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20B%C3%A0%20N%C4%83m%203%2035%20H%C3%A0%20Huy%20Gi%C3%A1p%2C%20Qu%E1%BA%ADn%2012%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Quận 12. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Hương Việt 4",
    "type": "Hải sản",
    "location": "54 Quang Trung, Quận 12, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20H%C6%B0%C6%A1ng%20Vi%E1%BB%87t%204%2054%20Quang%20Trung%2C%20Qu%E1%BA%ADn%2012%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Quận 12. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Bà Năm 5",
    "type": "Hải sản",
    "location": "423 Hà Huy Giáp, Quận 12, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20B%C3%A0%20N%C4%83m%205%20423%20H%C3%A0%20Huy%20Gi%C3%A1p%2C%20Qu%E1%BA%ADn%2012%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Quận 12. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Ngọc Lan",
    "type": "Ốc",
    "location": "64 Tô Ký, Quận 12, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20Ng%E1%BB%8Dc%20Lan%2064%20T%C3%B4%20K%C3%BD%2C%20Qu%E1%BA%ADn%2012%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Quận 12. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Bà Năm 2",
    "type": "Ốc",
    "location": "266 Nguyễn Ánh Thủ, Quận 12, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20B%C3%A0%20N%C4%83m%202%20266%20Nguy%E1%BB%85n%20%C3%81nh%20Th%E1%BB%A7%2C%20Qu%E1%BA%ADn%2012%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Quận 12. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Anh Tư 3",
    "type": "Ốc",
    "location": "459 Nguyễn Ánh Thủ, Quận 12, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20Anh%20T%C6%B0%203%20459%20Nguy%E1%BB%85n%20%C3%81nh%20Th%E1%BB%A7%2C%20Qu%E1%BA%ADn%2012%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Quận 12. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Vĩnh Lộc 4",
    "type": "Ốc",
    "location": "223 Hà Huy Giáp, Quận 12, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20V%C4%A9nh%20L%E1%BB%99c%204%20223%20H%C3%A0%20Huy%20Gi%C3%A1p%2C%20Qu%E1%BA%ADn%2012%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Quận 12. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Viet Kitchen 5",
    "type": "Ốc",
    "location": "223 Nguyễn Ánh Thủ, Quận 12, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20Viet%20Kitchen%205%20223%20Nguy%E1%BB%85n%20%C3%81nh%20Th%E1%BB%A7%2C%20Qu%E1%BA%ADn%2012%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Quận 12. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Vĩnh Lộc",
    "type": "Mì",
    "location": "76 Lê Văn Khương, Quận 12, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20V%C4%A9nh%20L%E1%BB%99c%2076%20L%C3%AA%20V%C4%83n%20Kh%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%2012%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Quận 12. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Đệ Nhất 2",
    "type": "Mì",
    "location": "261 Nguyễn Ánh Thủ, Quận 12, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20%C4%90%E1%BB%87%20Nh%E1%BA%A5t%202%20261%20Nguy%E1%BB%85n%20%C3%81nh%20Th%E1%BB%A7%2C%20Qu%E1%BA%ADn%2012%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Quận 12. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Đông Á 3",
    "type": "Mì",
    "location": "224 Tô Ký, Quận 12, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20%C4%90%C3%B4ng%20%C3%81%203%20224%20T%C3%B4%20K%C3%BD%2C%20Qu%E1%BA%ADn%2012%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Quận 12. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Ông Già 4",
    "type": "Mì",
    "location": "400 Quang Trung, Quận 12, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20%C3%94ng%20Gi%C3%A0%204%20400%20Quang%20Trung%2C%20Qu%E1%BA%ADn%2012%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Quận 12. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Ngọc Lan 5",
    "type": "Mì",
    "location": "197 Hà Huy Giáp, Quận 12, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20Ng%E1%BB%8Dc%20Lan%205%20197%20H%C3%A0%20Huy%20Gi%C3%A1p%2C%20Qu%E1%BA%ADn%2012%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Quận 12. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Gia Đình",
    "type": "Hủ tiếu",
    "location": "283 Lê Văn Khương, Quận 12, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20Gia%20%C4%90%C3%ACnh%20283%20L%C3%AA%20V%C4%83n%20Kh%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%2012%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Quận 12. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Thái Bình 2",
    "type": "Hủ tiếu",
    "location": "252 Lê Văn Khương, Quận 12, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20Th%C3%A1i%20B%C3%ACnh%202%20252%20L%C3%AA%20V%C4%83n%20Kh%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%2012%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Quận 12. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Bà Năm 3",
    "type": "Hủ tiếu",
    "location": "286 Quang Trung, Quận 12, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20B%C3%A0%20N%C4%83m%203%20286%20Quang%20Trung%2C%20Qu%E1%BA%ADn%2012%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Quận 12. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Dì Liên 4",
    "type": "Hủ tiếu",
    "location": "367 Lê Văn Khương, Quận 12, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20D%C3%AC%20Li%C3%AAn%204%20367%20L%C3%AA%20V%C4%83n%20Kh%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%2012%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Quận 12. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Ông Già 5",
    "type": "Hủ tiếu",
    "location": "400 Lê Văn Khương, Quận 12, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20%C3%94ng%20Gi%C3%A0%205%20400%20L%C3%AA%20V%C4%83n%20Kh%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%2012%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Quận 12. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Nắng Vàng",
    "type": "Đồ nướng",
    "location": "2 Tô Ký, Quận 12, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20N%E1%BA%AFng%20V%C3%A0ng%202%20T%C3%B4%20K%C3%BD%2C%20Qu%E1%BA%ADn%2012%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Quận 12. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Thái Bình 2",
    "type": "Đồ nướng",
    "location": "10 Lê Văn Khương, Quận 12, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20Th%C3%A1i%20B%C3%ACnh%202%2010%20L%C3%AA%20V%C4%83n%20Kh%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%2012%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Quận 12. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Hồng Phát 3",
    "type": "Đồ nướng",
    "location": "230 Hà Huy Giáp, Quận 12, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20H%E1%BB%93ng%20Ph%C3%A1t%203%20230%20H%C3%A0%20Huy%20Gi%C3%A1p%2C%20Qu%E1%BA%ADn%2012%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Quận 12. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Bến Thành 4",
    "type": "Đồ nướng",
    "location": "265 Nguyễn Ánh Thủ, Quận 12, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20B%E1%BA%BFn%20Th%C3%A0nh%204%20265%20Nguy%E1%BB%85n%20%C3%81nh%20Th%E1%BB%A7%2C%20Qu%E1%BA%ADn%2012%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Quận 12. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Chú Bảy 5",
    "type": "Đồ nướng",
    "location": "208 Quang Trung, Quận 12, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20Ch%C3%BA%20B%E1%BA%A3y%205%20208%20Quang%20Trung%2C%20Qu%E1%BA%ADn%2012%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Quận 12. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Nắng Vàng",
    "type": "Nước & Cafe",
    "location": "241 Nguyễn Ánh Thủ, Quận 12, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20N%E1%BA%AFng%20V%C3%A0ng%20241%20Nguy%E1%BB%85n%20%C3%81nh%20Th%E1%BB%A7%2C%20Qu%E1%BA%ADn%2012%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Quận 12. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Xưa & Nay 2",
    "type": "Nước & Cafe",
    "location": "431 Quang Trung, Quận 12, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20X%C6%B0a%20%26%20Nay%202%20431%20Quang%20Trung%2C%20Qu%E1%BA%ADn%2012%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Quận 12. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Dì Liên 3",
    "type": "Nước & Cafe",
    "location": "331 Hà Huy Giáp, Quận 12, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20D%C3%AC%20Li%C3%AAn%203%20331%20H%C3%A0%20Huy%20Gi%C3%A1p%2C%20Qu%E1%BA%ADn%2012%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Quận 12. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Thanh Xuân 4",
    "type": "Nước & Cafe",
    "location": "293 Nguyễn Ánh Thủ, Quận 12, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20Thanh%20Xu%C3%A2n%204%20293%20Nguy%E1%BB%85n%20%C3%81nh%20Th%E1%BB%A7%2C%20Qu%E1%BA%ADn%2012%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Quận 12. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Đệ Nhất 5",
    "type": "Nước & Cafe",
    "location": "472 Hà Huy Giáp, Quận 12, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20%C4%90%E1%BB%87%20Nh%E1%BA%A5t%205%20472%20H%C3%A0%20Huy%20Gi%C3%A1p%2C%20Qu%E1%BA%ADn%2012%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Quận 12. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Hoàn Kiếm",
    "type": "Chè",
    "location": "314 Quang Trung, Quận 12, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20Ho%C3%A0n%20Ki%E1%BA%BFm%20314%20Quang%20Trung%2C%20Qu%E1%BA%ADn%2012%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Quận 12. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Đồng Quê 2",
    "type": "Chè",
    "location": "334 Hà Huy Giáp, Quận 12, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20%C4%90%E1%BB%93ng%20Qu%C3%AA%202%20334%20H%C3%A0%20Huy%20Gi%C3%A1p%2C%20Qu%E1%BA%ADn%2012%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Quận 12. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Thanh Xuân 3",
    "type": "Chè",
    "location": "332 Quang Trung, Quận 12, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20Thanh%20Xu%C3%A2n%203%20332%20Quang%20Trung%2C%20Qu%E1%BA%ADn%2012%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Quận 12. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Mưa Hồng 4",
    "type": "Chè",
    "location": "197 Nguyễn Ánh Thủ, Quận 12, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20M%C6%B0a%20H%E1%BB%93ng%204%20197%20Nguy%E1%BB%85n%20%C3%81nh%20Th%E1%BB%A7%2C%20Qu%E1%BA%ADn%2012%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Quận 12. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Hào Hùng 5",
    "type": "Chè",
    "location": "268 Nguyễn Ánh Thủ, Quận 12, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20H%C3%A0o%20H%C3%B9ng%205%20268%20Nguy%E1%BB%85n%20%C3%81nh%20Th%E1%BB%A7%2C%20Qu%E1%BA%ADn%2012%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Quận 12. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Đệ Nhất",
    "type": "Bánh xèo",
    "location": "414 Lê Văn Khương, Quận 12, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20%C4%90%E1%BB%87%20Nh%E1%BA%A5t%20414%20L%C3%AA%20V%C4%83n%20Kh%C6%B0%C6%A1ng%2C%20Qu%E1%BA%ADn%2012%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Quận 12. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Đông Á 2",
    "type": "Bánh xèo",
    "location": "135 Quang Trung, Quận 12, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20%C4%90%C3%B4ng%20%C3%81%202%20135%20Quang%20Trung%2C%20Qu%E1%BA%ADn%2012%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Quận 12. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Viet Kitchen 3",
    "type": "Bánh xèo",
    "location": "200 Hà Huy Giáp, Quận 12, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20Viet%20Kitchen%203%20200%20H%C3%A0%20Huy%20Gi%C3%A1p%2C%20Qu%E1%BA%ADn%2012%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Quận 12. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Bến Thành 4",
    "type": "Bánh xèo",
    "location": "498 Nguyễn Ánh Thủ, Quận 12, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20B%E1%BA%BFn%20Th%C3%A0nh%204%20498%20Nguy%E1%BB%85n%20%C3%81nh%20Th%E1%BB%A7%2C%20Qu%E1%BA%ADn%2012%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Quận 12. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Nắng Vàng 5",
    "type": "Bánh xèo",
    "location": "352 Hà Huy Giáp, Quận 12, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20N%E1%BA%AFng%20V%C3%A0ng%205%20352%20H%C3%A0%20Huy%20Gi%C3%A1p%2C%20Qu%E1%BA%ADn%2012%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Quận 12. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Bến Thành",
    "type": "Khác",
    "location": "417 Quang Trung, Quận 12, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20B%E1%BA%BFn%20Th%C3%A0nh%20417%20Quang%20Trung%2C%20Qu%E1%BA%ADn%2012%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Quận 12. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Bà Năm 2",
    "type": "Khác",
    "location": "264 Quang Trung, Quận 12, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20B%C3%A0%20N%C4%83m%202%20264%20Quang%20Trung%2C%20Qu%E1%BA%ADn%2012%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Quận 12. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Saigon Deli 3",
    "type": "Khác",
    "location": "437 Nguyễn Ánh Thủ, Quận 12, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20Saigon%20Deli%203%20437%20Nguy%E1%BB%85n%20%C3%81nh%20Th%E1%BB%A7%2C%20Qu%E1%BA%ADn%2012%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Quận 12. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Sông Trăng 4",
    "type": "Khác",
    "location": "350 Tô Ký, Quận 12, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20S%C3%B4ng%20Tr%C4%83ng%204%20350%20T%C3%B4%20K%C3%BD%2C%20Qu%E1%BA%ADn%2012%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Quận 12. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Thanh Xuân 5",
    "type": "Khác",
    "location": "422 Tô Ký, Quận 12, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20Thanh%20Xu%C3%A2n%205%20422%20T%C3%B4%20K%C3%BD%2C%20Qu%E1%BA%ADn%2012%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Quận 12. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Xưa & Nay",
    "type": "Phở",
    "location": "1 Lê Quang Định, Bình Thạnh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20X%C6%B0a%20%26%20Nay%201%20L%C3%AA%20Quang%20%C4%90%E1%BB%8Bnh%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Bình Thạnh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Dì Liên 2",
    "type": "Phở",
    "location": "76 Phan Văn Trị, Bình Thạnh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20D%C3%AC%20Li%C3%AAn%202%2076%20Phan%20V%C4%83n%20Tr%E1%BB%8B%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Bình Thạnh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Ngọc Lan 3",
    "type": "Phở",
    "location": "92 Bạch Đằng, Bình Thạnh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20Ng%E1%BB%8Dc%20Lan%203%2092%20B%E1%BA%A1ch%20%C4%90%E1%BA%B1ng%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Bình Thạnh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Local Taste 4",
    "type": "Phở",
    "location": "367 Bạch Đằng, Bình Thạnh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20Local%20Taste%204%20367%20B%E1%BA%A1ch%20%C4%90%E1%BA%B1ng%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Bình Thạnh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Đồng Quê 5",
    "type": "Phở",
    "location": "9 Lê Quang Định, Bình Thạnh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20%C4%90%E1%BB%93ng%20Qu%C3%AA%205%209%20L%C3%AA%20Quang%20%C4%90%E1%BB%8Bnh%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Bình Thạnh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Hồng Phát",
    "type": "Bún",
    "location": "169 Bạch Đằng, Bình Thạnh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20H%E1%BB%93ng%20Ph%C3%A1t%20169%20B%E1%BA%A1ch%20%C4%90%E1%BA%B1ng%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Bình Thạnh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Local Taste 2",
    "type": "Bún",
    "location": "394 Bạch Đằng, Bình Thạnh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20Local%20Taste%202%20394%20B%E1%BA%A1ch%20%C4%90%E1%BA%B1ng%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Bình Thạnh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Cô Ba 3",
    "type": "Bún",
    "location": "104 Lê Quang Định, Bình Thạnh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20C%C3%B4%20Ba%203%20104%20L%C3%AA%20Quang%20%C4%90%E1%BB%8Bnh%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Bình Thạnh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Kim Anh 4",
    "type": "Bún",
    "location": "316 Nguyễn Gia Trí, Bình Thạnh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20Kim%20Anh%204%20316%20Nguy%E1%BB%85n%20Gia%20Tr%C3%AD%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Bình Thạnh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Anh Tư 5",
    "type": "Bún",
    "location": "157 Phan Văn Trị, Bình Thạnh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20Anh%20T%C6%B0%205%20157%20Phan%20V%C4%83n%20Tr%E1%BB%8B%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Bình Thạnh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Thanh Xuân",
    "type": "Cơm",
    "location": "215 Lê Quang Định, Bình Thạnh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20Thanh%20Xu%C3%A2n%20215%20L%C3%AA%20Quang%20%C4%90%E1%BB%8Bnh%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Bình Thạnh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Nắng Vàng 2",
    "type": "Cơm",
    "location": "489 Lê Quang Định, Bình Thạnh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20N%E1%BA%AFng%20V%C3%A0ng%202%20489%20L%C3%AA%20Quang%20%C4%90%E1%BB%8Bnh%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Bình Thạnh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Chú Bảy 3",
    "type": "Cơm",
    "location": "301 Phan Văn Trị, Bình Thạnh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20Ch%C3%BA%20B%E1%BA%A3y%203%20301%20Phan%20V%C4%83n%20Tr%E1%BB%8B%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Bình Thạnh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Bà Năm 4",
    "type": "Cơm",
    "location": "455 Bạch Đằng, Bình Thạnh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20B%C3%A0%20N%C4%83m%204%20455%20B%E1%BA%A1ch%20%C4%90%E1%BA%B1ng%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Bình Thạnh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Minh Khai 5",
    "type": "Cơm",
    "location": "146 Xô Viết Nghệ Tĩnh, Bình Thạnh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20Minh%20Khai%205%20146%20X%C3%B4%20Vi%E1%BA%BFt%20Ngh%E1%BB%87%20T%C4%A9nh%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Bình Thạnh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Đông Á",
    "type": "Lẩu",
    "location": "260 Lê Quang Định, Bình Thạnh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20%C4%90%C3%B4ng%20%C3%81%20260%20L%C3%AA%20Quang%20%C4%90%E1%BB%8Bnh%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Bình Thạnh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Gia Đình 2",
    "type": "Lẩu",
    "location": "132 Nguyễn Gia Trí, Bình Thạnh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20Gia%20%C4%90%C3%ACnh%202%20132%20Nguy%E1%BB%85n%20Gia%20Tr%C3%AD%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Bình Thạnh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Bà Năm 3",
    "type": "Lẩu",
    "location": "311 Lê Quang Định, Bình Thạnh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20B%C3%A0%20N%C4%83m%203%20311%20L%C3%AA%20Quang%20%C4%90%E1%BB%8Bnh%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Bình Thạnh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Sài Thành 4",
    "type": "Lẩu",
    "location": "164 Xô Viết Nghệ Tĩnh, Bình Thạnh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20S%C3%A0i%20Th%C3%A0nh%204%20164%20X%C3%B4%20Vi%E1%BA%BFt%20Ngh%E1%BB%87%20T%C4%A9nh%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Bình Thạnh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Đông Á 5",
    "type": "Lẩu",
    "location": "68 Phan Văn Trị, Bình Thạnh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20%C4%90%C3%B4ng%20%C3%81%205%2068%20Phan%20V%C4%83n%20Tr%E1%BB%8B%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Bình Thạnh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Thanh Xuân",
    "type": "Đồ chay",
    "location": "390 Phan Văn Trị, Bình Thạnh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20Thanh%20Xu%C3%A2n%20390%20Phan%20V%C4%83n%20Tr%E1%BB%8B%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Bình Thạnh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Mưa Hồng 2",
    "type": "Đồ chay",
    "location": "335 Lê Quang Định, Bình Thạnh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20M%C6%B0a%20H%E1%BB%93ng%202%20335%20L%C3%AA%20Quang%20%C4%90%E1%BB%8Bnh%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Bình Thạnh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Mưa Hồng 3",
    "type": "Đồ chay",
    "location": "105 Lê Quang Định, Bình Thạnh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20M%C6%B0a%20H%E1%BB%93ng%203%20105%20L%C3%AA%20Quang%20%C4%90%E1%BB%8Bnh%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Bình Thạnh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Ngọc Lan 4",
    "type": "Đồ chay",
    "location": "159 Phan Văn Trị, Bình Thạnh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20Ng%E1%BB%8Dc%20Lan%204%20159%20Phan%20V%C4%83n%20Tr%E1%BB%8B%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Bình Thạnh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Đệ Nhất 5",
    "type": "Đồ chay",
    "location": "374 Nguyễn Gia Trí, Bình Thạnh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20%C4%90%E1%BB%87%20Nh%E1%BA%A5t%205%20374%20Nguy%E1%BB%85n%20Gia%20Tr%C3%AD%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Bình Thạnh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Sài Thành",
    "type": "Bánh mì",
    "location": "466 Nguyễn Gia Trí, Bình Thạnh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20S%C3%A0i%20Th%C3%A0nh%20466%20Nguy%E1%BB%85n%20Gia%20Tr%C3%AD%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Bình Thạnh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Anh Tư 2",
    "type": "Bánh mì",
    "location": "7 Phan Văn Trị, Bình Thạnh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20Anh%20T%C6%B0%202%207%20Phan%20V%C4%83n%20Tr%E1%BB%8B%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Bình Thạnh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Bến Thành 3",
    "type": "Bánh mì",
    "location": "471 Nguyễn Gia Trí, Bình Thạnh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20B%E1%BA%BFn%20Th%C3%A0nh%203%20471%20Nguy%E1%BB%85n%20Gia%20Tr%C3%AD%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Bình Thạnh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Mưa Hồng 4",
    "type": "Bánh mì",
    "location": "258 Bạch Đằng, Bình Thạnh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20M%C6%B0a%20H%E1%BB%93ng%204%20258%20B%E1%BA%A1ch%20%C4%90%E1%BA%B1ng%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Bình Thạnh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Vĩnh Lộc 5",
    "type": "Bánh mì",
    "location": "16 Nguyễn Gia Trí, Bình Thạnh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20V%C4%A9nh%20L%E1%BB%99c%205%2016%20Nguy%E1%BB%85n%20Gia%20Tr%C3%AD%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Bình Thạnh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Anh Tư",
    "type": "Ăn vặt",
    "location": "478 Nguyễn Gia Trí, Bình Thạnh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20Anh%20T%C6%B0%20478%20Nguy%E1%BB%85n%20Gia%20Tr%C3%AD%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Bình Thạnh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Thái Bình 2",
    "type": "Ăn vặt",
    "location": "64 Nguyễn Gia Trí, Bình Thạnh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20Th%C3%A1i%20B%C3%ACnh%202%2064%20Nguy%E1%BB%85n%20Gia%20Tr%C3%AD%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Bình Thạnh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Anh Tư 3",
    "type": "Ăn vặt",
    "location": "448 Xô Viết Nghệ Tĩnh, Bình Thạnh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20Anh%20T%C6%B0%203%20448%20X%C3%B4%20Vi%E1%BA%BFt%20Ngh%E1%BB%87%20T%C4%A9nh%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Bình Thạnh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Dì Liên 4",
    "type": "Ăn vặt",
    "location": "496 Xô Viết Nghệ Tĩnh, Bình Thạnh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20D%C3%AC%20Li%C3%AAn%204%20496%20X%C3%B4%20Vi%E1%BA%BFt%20Ngh%E1%BB%87%20T%C4%A9nh%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Bình Thạnh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Sông Trăng 5",
    "type": "Ăn vặt",
    "location": "413 Bạch Đằng, Bình Thạnh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20S%C3%B4ng%20Tr%C4%83ng%205%20413%20B%E1%BA%A1ch%20%C4%90%E1%BA%B1ng%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Bình Thạnh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Ông Già",
    "type": "Bánh cuốn",
    "location": "497 Phan Văn Trị, Bình Thạnh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20%C3%94ng%20Gi%C3%A0%20497%20Phan%20V%C4%83n%20Tr%E1%BB%8B%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Bình Thạnh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Thái Bình 2",
    "type": "Bánh cuốn",
    "location": "485 Bạch Đằng, Bình Thạnh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20Th%C3%A1i%20B%C3%ACnh%202%20485%20B%E1%BA%A1ch%20%C4%90%E1%BA%B1ng%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Bình Thạnh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Saigon Deli 3",
    "type": "Bánh cuốn",
    "location": "406 Phan Văn Trị, Bình Thạnh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20Saigon%20Deli%203%20406%20Phan%20V%C4%83n%20Tr%E1%BB%8B%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Bình Thạnh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Kim Anh 4",
    "type": "Bánh cuốn",
    "location": "144 Bạch Đằng, Bình Thạnh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20Kim%20Anh%204%20144%20B%E1%BA%A1ch%20%C4%90%E1%BA%B1ng%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Bình Thạnh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Cô Ba 5",
    "type": "Bánh cuốn",
    "location": "283 Phan Văn Trị, Bình Thạnh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20C%C3%B4%20Ba%205%20283%20Phan%20V%C4%83n%20Tr%E1%BB%8B%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Bình Thạnh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Cô Ba",
    "type": "Bún đậu",
    "location": "374 Nguyễn Gia Trí, Bình Thạnh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20C%C3%B4%20Ba%20374%20Nguy%E1%BB%85n%20Gia%20Tr%C3%AD%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Bình Thạnh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Hương Việt 2",
    "type": "Bún đậu",
    "location": "54 Xô Viết Nghệ Tĩnh, Bình Thạnh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20H%C6%B0%C6%A1ng%20Vi%E1%BB%87t%202%2054%20X%C3%B4%20Vi%E1%BA%BFt%20Ngh%E1%BB%87%20T%C4%A9nh%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Bình Thạnh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Anh Tư 3",
    "type": "Bún đậu",
    "location": "431 Lê Quang Định, Bình Thạnh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20Anh%20T%C6%B0%203%20431%20L%C3%AA%20Quang%20%C4%90%E1%BB%8Bnh%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Bình Thạnh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Sông Trăng 4",
    "type": "Bún đậu",
    "location": "362 Nguyễn Gia Trí, Bình Thạnh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20S%C3%B4ng%20Tr%C4%83ng%204%20362%20Nguy%E1%BB%85n%20Gia%20Tr%C3%AD%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Bình Thạnh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Đồng Quê 5",
    "type": "Bún đậu",
    "location": "19 Xô Viết Nghệ Tĩnh, Bình Thạnh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20%C4%90%E1%BB%93ng%20Qu%C3%AA%205%2019%20X%C3%B4%20Vi%E1%BA%BFt%20Ngh%E1%BB%87%20T%C4%A9nh%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Bình Thạnh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Nam Hải",
    "type": "Hải sản",
    "location": "266 Phan Văn Trị, Bình Thạnh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20Nam%20H%E1%BA%A3i%20266%20Phan%20V%C4%83n%20Tr%E1%BB%8B%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Bình Thạnh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Minh Khai 2",
    "type": "Hải sản",
    "location": "96 Xô Viết Nghệ Tĩnh, Bình Thạnh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20Minh%20Khai%202%2096%20X%C3%B4%20Vi%E1%BA%BFt%20Ngh%E1%BB%87%20T%C4%A9nh%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Bình Thạnh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Thanh Xuân 3",
    "type": "Hải sản",
    "location": "161 Lê Quang Định, Bình Thạnh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20Thanh%20Xu%C3%A2n%203%20161%20L%C3%AA%20Quang%20%C4%90%E1%BB%8Bnh%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Bình Thạnh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Gia Đình 4",
    "type": "Hải sản",
    "location": "400 Nguyễn Gia Trí, Bình Thạnh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20Gia%20%C4%90%C3%ACnh%204%20400%20Nguy%E1%BB%85n%20Gia%20Tr%C3%AD%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Bình Thạnh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Thanh Xuân 5",
    "type": "Hải sản",
    "location": "41 Lê Quang Định, Bình Thạnh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20Thanh%20Xu%C3%A2n%205%2041%20L%C3%AA%20Quang%20%C4%90%E1%BB%8Bnh%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Bình Thạnh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Hương Việt",
    "type": "Ốc",
    "location": "80 Lê Quang Định, Bình Thạnh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20H%C6%B0%C6%A1ng%20Vi%E1%BB%87t%2080%20L%C3%AA%20Quang%20%C4%90%E1%BB%8Bnh%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Bình Thạnh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Viet Kitchen 2",
    "type": "Ốc",
    "location": "16 Phan Văn Trị, Bình Thạnh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20Viet%20Kitchen%202%2016%20Phan%20V%C4%83n%20Tr%E1%BB%8B%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Bình Thạnh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Minh Khai 3",
    "type": "Ốc",
    "location": "142 Bạch Đằng, Bình Thạnh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20Minh%20Khai%203%20142%20B%E1%BA%A1ch%20%C4%90%E1%BA%B1ng%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Bình Thạnh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Cô Ba 4",
    "type": "Ốc",
    "location": "473 Bạch Đằng, Bình Thạnh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20C%C3%B4%20Ba%204%20473%20B%E1%BA%A1ch%20%C4%90%E1%BA%B1ng%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Bình Thạnh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Viet Kitchen 5",
    "type": "Ốc",
    "location": "469 Bạch Đằng, Bình Thạnh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20Viet%20Kitchen%205%20469%20B%E1%BA%A1ch%20%C4%90%E1%BA%B1ng%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Bình Thạnh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Nam Hải",
    "type": "Mì",
    "location": "426 Nguyễn Gia Trí, Bình Thạnh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20Nam%20H%E1%BA%A3i%20426%20Nguy%E1%BB%85n%20Gia%20Tr%C3%AD%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Bình Thạnh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Hào Hùng 2",
    "type": "Mì",
    "location": "291 Phan Văn Trị, Bình Thạnh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20H%C3%A0o%20H%C3%B9ng%202%20291%20Phan%20V%C4%83n%20Tr%E1%BB%8B%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Bình Thạnh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Đông Á 3",
    "type": "Mì",
    "location": "199 Xô Viết Nghệ Tĩnh, Bình Thạnh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20%C4%90%C3%B4ng%20%C3%81%203%20199%20X%C3%B4%20Vi%E1%BA%BFt%20Ngh%E1%BB%87%20T%C4%A9nh%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Bình Thạnh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Thái Bình 4",
    "type": "Mì",
    "location": "333 Lê Quang Định, Bình Thạnh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20Th%C3%A1i%20B%C3%ACnh%204%20333%20L%C3%AA%20Quang%20%C4%90%E1%BB%8Bnh%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Bình Thạnh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Nắng Vàng 5",
    "type": "Mì",
    "location": "393 Xô Viết Nghệ Tĩnh, Bình Thạnh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20N%E1%BA%AFng%20V%C3%A0ng%205%20393%20X%C3%B4%20Vi%E1%BA%BFt%20Ngh%E1%BB%87%20T%C4%A9nh%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Bình Thạnh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Thái Bình",
    "type": "Hủ tiếu",
    "location": "444 Bạch Đằng, Bình Thạnh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20Th%C3%A1i%20B%C3%ACnh%20444%20B%E1%BA%A1ch%20%C4%90%E1%BA%B1ng%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Bình Thạnh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Anh Tư 2",
    "type": "Hủ tiếu",
    "location": "7 Xô Viết Nghệ Tĩnh, Bình Thạnh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20Anh%20T%C6%B0%202%207%20X%C3%B4%20Vi%E1%BA%BFt%20Ngh%E1%BB%87%20T%C4%A9nh%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Bình Thạnh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Dì Liên 3",
    "type": "Hủ tiếu",
    "location": "369 Nguyễn Gia Trí, Bình Thạnh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20D%C3%AC%20Li%C3%AAn%203%20369%20Nguy%E1%BB%85n%20Gia%20Tr%C3%AD%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Bình Thạnh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Sài Thành 4",
    "type": "Hủ tiếu",
    "location": "309 Lê Quang Định, Bình Thạnh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20S%C3%A0i%20Th%C3%A0nh%204%20309%20L%C3%AA%20Quang%20%C4%90%E1%BB%8Bnh%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Bình Thạnh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Cô Ba 5",
    "type": "Hủ tiếu",
    "location": "38 Lê Quang Định, Bình Thạnh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20C%C3%B4%20Ba%205%2038%20L%C3%AA%20Quang%20%C4%90%E1%BB%8Bnh%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Bình Thạnh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Minh Khai",
    "type": "Đồ nướng",
    "location": "453 Lê Quang Định, Bình Thạnh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20Minh%20Khai%20453%20L%C3%AA%20Quang%20%C4%90%E1%BB%8Bnh%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Bình Thạnh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Đệ Nhất 2",
    "type": "Đồ nướng",
    "location": "420 Nguyễn Gia Trí, Bình Thạnh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20%C4%90%E1%BB%87%20Nh%E1%BA%A5t%202%20420%20Nguy%E1%BB%85n%20Gia%20Tr%C3%AD%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Bình Thạnh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Đệ Nhất 3",
    "type": "Đồ nướng",
    "location": "9 Nguyễn Gia Trí, Bình Thạnh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20%C4%90%E1%BB%87%20Nh%E1%BA%A5t%203%209%20Nguy%E1%BB%85n%20Gia%20Tr%C3%AD%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Bình Thạnh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Sài Thành 4",
    "type": "Đồ nướng",
    "location": "289 Nguyễn Gia Trí, Bình Thạnh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20S%C3%A0i%20Th%C3%A0nh%204%20289%20Nguy%E1%BB%85n%20Gia%20Tr%C3%AD%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Bình Thạnh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Viet Kitchen 5",
    "type": "Đồ nướng",
    "location": "409 Lê Quang Định, Bình Thạnh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20Viet%20Kitchen%205%20409%20L%C3%AA%20Quang%20%C4%90%E1%BB%8Bnh%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Bình Thạnh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Minh Khai",
    "type": "Nước & Cafe",
    "location": "297 Nguyễn Gia Trí, Bình Thạnh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20Minh%20Khai%20297%20Nguy%E1%BB%85n%20Gia%20Tr%C3%AD%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Bình Thạnh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Hoàn Kiếm 2",
    "type": "Nước & Cafe",
    "location": "11 Xô Viết Nghệ Tĩnh, Bình Thạnh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20Ho%C3%A0n%20Ki%E1%BA%BFm%202%2011%20X%C3%B4%20Vi%E1%BA%BFt%20Ngh%E1%BB%87%20T%C4%A9nh%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Bình Thạnh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Cô Ba 3",
    "type": "Nước & Cafe",
    "location": "316 Lê Quang Định, Bình Thạnh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20C%C3%B4%20Ba%203%20316%20L%C3%AA%20Quang%20%C4%90%E1%BB%8Bnh%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Bình Thạnh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Dì Liên 4",
    "type": "Nước & Cafe",
    "location": "331 Phan Văn Trị, Bình Thạnh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20D%C3%AC%20Li%C3%AAn%204%20331%20Phan%20V%C4%83n%20Tr%E1%BB%8B%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Bình Thạnh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Bà Năm 5",
    "type": "Nước & Cafe",
    "location": "451 Nguyễn Gia Trí, Bình Thạnh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20B%C3%A0%20N%C4%83m%205%20451%20Nguy%E1%BB%85n%20Gia%20Tr%C3%AD%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Bình Thạnh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Thanh Xuân",
    "type": "Chè",
    "location": "30 Phan Văn Trị, Bình Thạnh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20Thanh%20Xu%C3%A2n%2030%20Phan%20V%C4%83n%20Tr%E1%BB%8B%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Bình Thạnh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Hồng Phát 2",
    "type": "Chè",
    "location": "321 Bạch Đằng, Bình Thạnh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20H%E1%BB%93ng%20Ph%C3%A1t%202%20321%20B%E1%BA%A1ch%20%C4%90%E1%BA%B1ng%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Bình Thạnh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Đồng Quê 3",
    "type": "Chè",
    "location": "302 Nguyễn Gia Trí, Bình Thạnh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20%C4%90%E1%BB%93ng%20Qu%C3%AA%203%20302%20Nguy%E1%BB%85n%20Gia%20Tr%C3%AD%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Bình Thạnh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Local Taste 4",
    "type": "Chè",
    "location": "208 Nguyễn Gia Trí, Bình Thạnh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20Local%20Taste%204%20208%20Nguy%E1%BB%85n%20Gia%20Tr%C3%AD%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Bình Thạnh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Phố Hội 5",
    "type": "Chè",
    "location": "171 Phan Văn Trị, Bình Thạnh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20Ph%E1%BB%91%20H%E1%BB%99i%205%20171%20Phan%20V%C4%83n%20Tr%E1%BB%8B%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Bình Thạnh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Đồng Quê",
    "type": "Bánh xèo",
    "location": "199 Xô Viết Nghệ Tĩnh, Bình Thạnh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20%C4%90%E1%BB%93ng%20Qu%C3%AA%20199%20X%C3%B4%20Vi%E1%BA%BFt%20Ngh%E1%BB%87%20T%C4%A9nh%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Bình Thạnh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Cô Ba 2",
    "type": "Bánh xèo",
    "location": "139 Bạch Đằng, Bình Thạnh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20C%C3%B4%20Ba%202%20139%20B%E1%BA%A1ch%20%C4%90%E1%BA%B1ng%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Bình Thạnh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Thái Bình 3",
    "type": "Bánh xèo",
    "location": "346 Xô Viết Nghệ Tĩnh, Bình Thạnh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20Th%C3%A1i%20B%C3%ACnh%203%20346%20X%C3%B4%20Vi%E1%BA%BFt%20Ngh%E1%BB%87%20T%C4%A9nh%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Bình Thạnh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Hương Việt 4",
    "type": "Bánh xèo",
    "location": "101 Lê Quang Định, Bình Thạnh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20H%C6%B0%C6%A1ng%20Vi%E1%BB%87t%204%20101%20L%C3%AA%20Quang%20%C4%90%E1%BB%8Bnh%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Bình Thạnh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Phố Hội 5",
    "type": "Bánh xèo",
    "location": "156 Bạch Đằng, Bình Thạnh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20Ph%E1%BB%91%20H%E1%BB%99i%205%20156%20B%E1%BA%A1ch%20%C4%90%E1%BA%B1ng%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Bình Thạnh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Bà Năm",
    "type": "Khác",
    "location": "151 Bạch Đằng, Bình Thạnh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20B%C3%A0%20N%C4%83m%20151%20B%E1%BA%A1ch%20%C4%90%E1%BA%B1ng%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Bình Thạnh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Nắng Vàng 2",
    "type": "Khác",
    "location": "381 Bạch Đằng, Bình Thạnh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20N%E1%BA%AFng%20V%C3%A0ng%202%20381%20B%E1%BA%A1ch%20%C4%90%E1%BA%B1ng%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Bình Thạnh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Nắng Vàng 3",
    "type": "Khác",
    "location": "188 Nguyễn Gia Trí, Bình Thạnh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20N%E1%BA%AFng%20V%C3%A0ng%203%20188%20Nguy%E1%BB%85n%20Gia%20Tr%C3%AD%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Bình Thạnh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Đồng Quê 4",
    "type": "Khác",
    "location": "446 Nguyễn Gia Trí, Bình Thạnh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20%C4%90%E1%BB%93ng%20Qu%C3%AA%204%20446%20Nguy%E1%BB%85n%20Gia%20Tr%C3%AD%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Bình Thạnh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Mưa Hồng 5",
    "type": "Khác",
    "location": "205 Phan Văn Trị, Bình Thạnh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20M%C6%B0a%20H%E1%BB%93ng%205%20205%20Phan%20V%C4%83n%20Tr%E1%BB%8B%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Bình Thạnh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Bà Năm",
    "type": "Phở",
    "location": "14 Phan Văn Trị, Gò Vấp, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20B%C3%A0%20N%C4%83m%2014%20Phan%20V%C4%83n%20Tr%E1%BB%8B%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Gò Vấp. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Kim Anh 2",
    "type": "Phở",
    "location": "142 Nguyễn Oanh, Gò Vấp, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20Kim%20Anh%202%20142%20Nguy%E1%BB%85n%20Oanh%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Gò Vấp. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Hồng Phát 3",
    "type": "Phở",
    "location": "175 Lê Đức Thọ, Gò Vấp, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20H%E1%BB%93ng%20Ph%C3%A1t%203%20175%20L%C3%AA%20%C4%90%E1%BB%A9c%20Th%E1%BB%8D%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Gò Vấp. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Viet Kitchen 4",
    "type": "Phở",
    "location": "213 Quang Trung, Gò Vấp, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20Viet%20Kitchen%204%20213%20Quang%20Trung%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Gò Vấp. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Thanh Xuân 5",
    "type": "Phở",
    "location": "397 Phan Văn Trị, Gò Vấp, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20Thanh%20Xu%C3%A2n%205%20397%20Phan%20V%C4%83n%20Tr%E1%BB%8B%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Gò Vấp. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Ông Già",
    "type": "Bún",
    "location": "79 Thống Nhất, Gò Vấp, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C3%94ng%20Gi%C3%A0%2079%20Th%E1%BB%91ng%20Nh%E1%BA%A5t%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Gò Vấp. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Thái Bình 2",
    "type": "Bún",
    "location": "360 Nguyễn Oanh, Gò Vấp, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20Th%C3%A1i%20B%C3%ACnh%202%20360%20Nguy%E1%BB%85n%20Oanh%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Gò Vấp. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Ngọc Lan 3",
    "type": "Bún",
    "location": "226 Quang Trung, Gò Vấp, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20Ng%E1%BB%8Dc%20Lan%203%20226%20Quang%20Trung%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Gò Vấp. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Xưa & Nay 4",
    "type": "Bún",
    "location": "246 Nguyễn Oanh, Gò Vấp, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20X%C6%B0a%20%26%20Nay%204%20246%20Nguy%E1%BB%85n%20Oanh%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Gò Vấp. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Viet Kitchen 5",
    "type": "Bún",
    "location": "331 Quang Trung, Gò Vấp, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20Viet%20Kitchen%205%20331%20Quang%20Trung%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Gò Vấp. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Hồng Phát",
    "type": "Cơm",
    "location": "213 Lê Đức Thọ, Gò Vấp, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20H%E1%BB%93ng%20Ph%C3%A1t%20213%20L%C3%AA%20%C4%90%E1%BB%A9c%20Th%E1%BB%8D%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Gò Vấp. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Viet Kitchen 2",
    "type": "Cơm",
    "location": "498 Phan Văn Trị, Gò Vấp, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20Viet%20Kitchen%202%20498%20Phan%20V%C4%83n%20Tr%E1%BB%8B%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Gò Vấp. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Saigon Deli 3",
    "type": "Cơm",
    "location": "421 Phan Văn Trị, Gò Vấp, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20Saigon%20Deli%203%20421%20Phan%20V%C4%83n%20Tr%E1%BB%8B%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Gò Vấp. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Hồng Phát 4",
    "type": "Cơm",
    "location": "295 Quang Trung, Gò Vấp, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20H%E1%BB%93ng%20Ph%C3%A1t%204%20295%20Quang%20Trung%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Gò Vấp. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Dì Liên 5",
    "type": "Cơm",
    "location": "139 Lê Đức Thọ, Gò Vấp, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20D%C3%AC%20Li%C3%AAn%205%20139%20L%C3%AA%20%C4%90%E1%BB%A9c%20Th%E1%BB%8D%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Gò Vấp. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Xưa & Nay",
    "type": "Lẩu",
    "location": "305 Nguyễn Oanh, Gò Vấp, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20X%C6%B0a%20%26%20Nay%20305%20Nguy%E1%BB%85n%20Oanh%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Gò Vấp. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Mưa Hồng 2",
    "type": "Lẩu",
    "location": "432 Lê Đức Thọ, Gò Vấp, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20M%C6%B0a%20H%E1%BB%93ng%202%20432%20L%C3%AA%20%C4%90%E1%BB%A9c%20Th%E1%BB%8D%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Gò Vấp. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Kim Anh 3",
    "type": "Lẩu",
    "location": "222 Quang Trung, Gò Vấp, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20Kim%20Anh%203%20222%20Quang%20Trung%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Gò Vấp. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Chú Bảy 4",
    "type": "Lẩu",
    "location": "146 Quang Trung, Gò Vấp, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20Ch%C3%BA%20B%E1%BA%A3y%204%20146%20Quang%20Trung%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Gò Vấp. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Đông Á 5",
    "type": "Lẩu",
    "location": "282 Thống Nhất, Gò Vấp, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20%C4%90%C3%B4ng%20%C3%81%205%20282%20Th%E1%BB%91ng%20Nh%E1%BA%A5t%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Gò Vấp. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Minh Khai",
    "type": "Đồ chay",
    "location": "425 Quang Trung, Gò Vấp, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20Minh%20Khai%20425%20Quang%20Trung%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Gò Vấp. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Anh Tư 2",
    "type": "Đồ chay",
    "location": "385 Nguyễn Oanh, Gò Vấp, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20Anh%20T%C6%B0%202%20385%20Nguy%E1%BB%85n%20Oanh%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Gò Vấp. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Mưa Hồng 3",
    "type": "Đồ chay",
    "location": "485 Phan Văn Trị, Gò Vấp, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20M%C6%B0a%20H%E1%BB%93ng%203%20485%20Phan%20V%C4%83n%20Tr%E1%BB%8B%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Gò Vấp. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Mưa Hồng 4",
    "type": "Đồ chay",
    "location": "53 Thống Nhất, Gò Vấp, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20M%C6%B0a%20H%E1%BB%93ng%204%2053%20Th%E1%BB%91ng%20Nh%E1%BA%A5t%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Gò Vấp. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Nắng Vàng 5",
    "type": "Đồ chay",
    "location": "121 Lê Đức Thọ, Gò Vấp, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20N%E1%BA%AFng%20V%C3%A0ng%205%20121%20L%C3%AA%20%C4%90%E1%BB%A9c%20Th%E1%BB%8D%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Gò Vấp. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Gia Đình",
    "type": "Bánh mì",
    "location": "366 Quang Trung, Gò Vấp, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20Gia%20%C4%90%C3%ACnh%20366%20Quang%20Trung%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Gò Vấp. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Nam Hải 2",
    "type": "Bánh mì",
    "location": "480 Nguyễn Oanh, Gò Vấp, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20Nam%20H%E1%BA%A3i%202%20480%20Nguy%E1%BB%85n%20Oanh%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Gò Vấp. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Bến Thành 3",
    "type": "Bánh mì",
    "location": "116 Nguyễn Oanh, Gò Vấp, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20B%E1%BA%BFn%20Th%C3%A0nh%203%20116%20Nguy%E1%BB%85n%20Oanh%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Gò Vấp. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Dì Liên 4",
    "type": "Bánh mì",
    "location": "298 Lê Đức Thọ, Gò Vấp, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20D%C3%AC%20Li%C3%AAn%204%20298%20L%C3%AA%20%C4%90%E1%BB%A9c%20Th%E1%BB%8D%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Gò Vấp. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Hoàn Kiếm 5",
    "type": "Bánh mì",
    "location": "100 Nguyễn Oanh, Gò Vấp, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20Ho%C3%A0n%20Ki%E1%BA%BFm%205%20100%20Nguy%E1%BB%85n%20Oanh%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Gò Vấp. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Đồng Quê",
    "type": "Ăn vặt",
    "location": "339 Quang Trung, Gò Vấp, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20%C4%90%E1%BB%93ng%20Qu%C3%AA%20339%20Quang%20Trung%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Gò Vấp. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Đông Á 2",
    "type": "Ăn vặt",
    "location": "326 Phan Văn Trị, Gò Vấp, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20%C4%90%C3%B4ng%20%C3%81%202%20326%20Phan%20V%C4%83n%20Tr%E1%BB%8B%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Gò Vấp. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Saigon Deli 3",
    "type": "Ăn vặt",
    "location": "410 Quang Trung, Gò Vấp, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20Saigon%20Deli%203%20410%20Quang%20Trung%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Gò Vấp. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Ngọc Lan 4",
    "type": "Ăn vặt",
    "location": "111 Lê Đức Thọ, Gò Vấp, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20Ng%E1%BB%8Dc%20Lan%204%20111%20L%C3%AA%20%C4%90%E1%BB%A9c%20Th%E1%BB%8D%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Gò Vấp. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Kim Anh 5",
    "type": "Ăn vặt",
    "location": "175 Thống Nhất, Gò Vấp, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20Kim%20Anh%205%20175%20Th%E1%BB%91ng%20Nh%E1%BA%A5t%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Gò Vấp. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Nắng Vàng",
    "type": "Bánh cuốn",
    "location": "347 Quang Trung, Gò Vấp, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20N%E1%BA%AFng%20V%C3%A0ng%20347%20Quang%20Trung%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Gò Vấp. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Thái Bình 2",
    "type": "Bánh cuốn",
    "location": "427 Quang Trung, Gò Vấp, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20Th%C3%A1i%20B%C3%ACnh%202%20427%20Quang%20Trung%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Gò Vấp. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Viet Kitchen 3",
    "type": "Bánh cuốn",
    "location": "46 Quang Trung, Gò Vấp, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20Viet%20Kitchen%203%2046%20Quang%20Trung%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Gò Vấp. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Ngọc Lan 4",
    "type": "Bánh cuốn",
    "location": "268 Lê Đức Thọ, Gò Vấp, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20Ng%E1%BB%8Dc%20Lan%204%20268%20L%C3%AA%20%C4%90%E1%BB%A9c%20Th%E1%BB%8D%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Gò Vấp. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Xưa & Nay 5",
    "type": "Bánh cuốn",
    "location": "224 Quang Trung, Gò Vấp, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20X%C6%B0a%20%26%20Nay%205%20224%20Quang%20Trung%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Gò Vấp. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Thanh Đa",
    "type": "Bún đậu",
    "location": "425 Nguyễn Oanh, Gò Vấp, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20Thanh%20%C4%90a%20425%20Nguy%E1%BB%85n%20Oanh%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Gò Vấp. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Sài Thành 2",
    "type": "Bún đậu",
    "location": "229 Phan Văn Trị, Gò Vấp, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20S%C3%A0i%20Th%C3%A0nh%202%20229%20Phan%20V%C4%83n%20Tr%E1%BB%8B%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Gò Vấp. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Gia Đình 3",
    "type": "Bún đậu",
    "location": "66 Thống Nhất, Gò Vấp, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20Gia%20%C4%90%C3%ACnh%203%2066%20Th%E1%BB%91ng%20Nh%E1%BA%A5t%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Gò Vấp. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Dì Liên 4",
    "type": "Bún đậu",
    "location": "393 Nguyễn Oanh, Gò Vấp, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20D%C3%AC%20Li%C3%AAn%204%20393%20Nguy%E1%BB%85n%20Oanh%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Gò Vấp. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Thanh Xuân 5",
    "type": "Bún đậu",
    "location": "166 Lê Đức Thọ, Gò Vấp, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20Thanh%20Xu%C3%A2n%205%20166%20L%C3%AA%20%C4%90%E1%BB%A9c%20Th%E1%BB%8D%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Gò Vấp. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Dì Liên",
    "type": "Hải sản",
    "location": "17 Lê Đức Thọ, Gò Vấp, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20D%C3%AC%20Li%C3%AAn%2017%20L%C3%AA%20%C4%90%E1%BB%A9c%20Th%E1%BB%8D%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Gò Vấp. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Xưa & Nay 2",
    "type": "Hải sản",
    "location": "388 Lê Đức Thọ, Gò Vấp, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20X%C6%B0a%20%26%20Nay%202%20388%20L%C3%AA%20%C4%90%E1%BB%A9c%20Th%E1%BB%8D%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Gò Vấp. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Bến Thành 3",
    "type": "Hải sản",
    "location": "490 Lê Đức Thọ, Gò Vấp, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20B%E1%BA%BFn%20Th%C3%A0nh%203%20490%20L%C3%AA%20%C4%90%E1%BB%A9c%20Th%E1%BB%8D%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Gò Vấp. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Local Taste 4",
    "type": "Hải sản",
    "location": "97 Phan Văn Trị, Gò Vấp, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20Local%20Taste%204%2097%20Phan%20V%C4%83n%20Tr%E1%BB%8B%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Gò Vấp. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Saigon Deli 5",
    "type": "Hải sản",
    "location": "106 Lê Đức Thọ, Gò Vấp, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20Saigon%20Deli%205%20106%20L%C3%AA%20%C4%90%E1%BB%A9c%20Th%E1%BB%8D%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Gò Vấp. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Dì Liên",
    "type": "Ốc",
    "location": "133 Nguyễn Oanh, Gò Vấp, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20D%C3%AC%20Li%C3%AAn%20133%20Nguy%E1%BB%85n%20Oanh%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Gò Vấp. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Mưa Hồng 2",
    "type": "Ốc",
    "location": "281 Quang Trung, Gò Vấp, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20M%C6%B0a%20H%E1%BB%93ng%202%20281%20Quang%20Trung%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Gò Vấp. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Xưa & Nay 3",
    "type": "Ốc",
    "location": "410 Quang Trung, Gò Vấp, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20X%C6%B0a%20%26%20Nay%203%20410%20Quang%20Trung%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Gò Vấp. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Hào Hùng 4",
    "type": "Ốc",
    "location": "102 Phan Văn Trị, Gò Vấp, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20H%C3%A0o%20H%C3%B9ng%204%20102%20Phan%20V%C4%83n%20Tr%E1%BB%8B%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Gò Vấp. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Gia Đình 5",
    "type": "Ốc",
    "location": "111 Lê Đức Thọ, Gò Vấp, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20Gia%20%C4%90%C3%ACnh%205%20111%20L%C3%AA%20%C4%90%E1%BB%A9c%20Th%E1%BB%8D%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Gò Vấp. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Nắng Vàng",
    "type": "Mì",
    "location": "9 Quang Trung, Gò Vấp, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20N%E1%BA%AFng%20V%C3%A0ng%209%20Quang%20Trung%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Gò Vấp. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Đông Á 2",
    "type": "Mì",
    "location": "364 Lê Đức Thọ, Gò Vấp, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20%C4%90%C3%B4ng%20%C3%81%202%20364%20L%C3%AA%20%C4%90%E1%BB%A9c%20Th%E1%BB%8D%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Gò Vấp. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Ông Già 3",
    "type": "Mì",
    "location": "389 Lê Đức Thọ, Gò Vấp, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20%C3%94ng%20Gi%C3%A0%203%20389%20L%C3%AA%20%C4%90%E1%BB%A9c%20Th%E1%BB%8D%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Gò Vấp. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Hoàn Kiếm 4",
    "type": "Mì",
    "location": "431 Quang Trung, Gò Vấp, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20Ho%C3%A0n%20Ki%E1%BA%BFm%204%20431%20Quang%20Trung%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Gò Vấp. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Cô Ba 5",
    "type": "Mì",
    "location": "33 Quang Trung, Gò Vấp, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20C%C3%B4%20Ba%205%2033%20Quang%20Trung%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Gò Vấp. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Đệ Nhất",
    "type": "Hủ tiếu",
    "location": "476 Phan Văn Trị, Gò Vấp, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20%C4%90%E1%BB%87%20Nh%E1%BA%A5t%20476%20Phan%20V%C4%83n%20Tr%E1%BB%8B%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Gò Vấp. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Bến Thành 2",
    "type": "Hủ tiếu",
    "location": "198 Thống Nhất, Gò Vấp, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20B%E1%BA%BFn%20Th%C3%A0nh%202%20198%20Th%E1%BB%91ng%20Nh%E1%BA%A5t%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Gò Vấp. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Dì Liên 3",
    "type": "Hủ tiếu",
    "location": "265 Quang Trung, Gò Vấp, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20D%C3%AC%20Li%C3%AAn%203%20265%20Quang%20Trung%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Gò Vấp. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Đệ Nhất 4",
    "type": "Hủ tiếu",
    "location": "463 Phan Văn Trị, Gò Vấp, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20%C4%90%E1%BB%87%20Nh%E1%BA%A5t%204%20463%20Phan%20V%C4%83n%20Tr%E1%BB%8B%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Gò Vấp. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Sài Thành 5",
    "type": "Hủ tiếu",
    "location": "67 Phan Văn Trị, Gò Vấp, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20S%C3%A0i%20Th%C3%A0nh%205%2067%20Phan%20V%C4%83n%20Tr%E1%BB%8B%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Gò Vấp. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Ông Già",
    "type": "Đồ nướng",
    "location": "324 Quang Trung, Gò Vấp, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20%C3%94ng%20Gi%C3%A0%20324%20Quang%20Trung%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Gò Vấp. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Local Taste 2",
    "type": "Đồ nướng",
    "location": "184 Phan Văn Trị, Gò Vấp, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20Local%20Taste%202%20184%20Phan%20V%C4%83n%20Tr%E1%BB%8B%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Gò Vấp. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Local Taste 3",
    "type": "Đồ nướng",
    "location": "34 Thống Nhất, Gò Vấp, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20Local%20Taste%203%2034%20Th%E1%BB%91ng%20Nh%E1%BA%A5t%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Gò Vấp. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Hào Hùng 4",
    "type": "Đồ nướng",
    "location": "179 Phan Văn Trị, Gò Vấp, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20H%C3%A0o%20H%C3%B9ng%204%20179%20Phan%20V%C4%83n%20Tr%E1%BB%8B%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Gò Vấp. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Hồng Phát 5",
    "type": "Đồ nướng",
    "location": "432 Lê Đức Thọ, Gò Vấp, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20H%E1%BB%93ng%20Ph%C3%A1t%205%20432%20L%C3%AA%20%C4%90%E1%BB%A9c%20Th%E1%BB%8D%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Gò Vấp. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Hoàn Kiếm",
    "type": "Nước & Cafe",
    "location": "388 Lê Đức Thọ, Gò Vấp, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20Ho%C3%A0n%20Ki%E1%BA%BFm%20388%20L%C3%AA%20%C4%90%E1%BB%A9c%20Th%E1%BB%8D%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Gò Vấp. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Hương Việt 2",
    "type": "Nước & Cafe",
    "location": "408 Lê Đức Thọ, Gò Vấp, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20H%C6%B0%C6%A1ng%20Vi%E1%BB%87t%202%20408%20L%C3%AA%20%C4%90%E1%BB%A9c%20Th%E1%BB%8D%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Gò Vấp. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Minh Khai 3",
    "type": "Nước & Cafe",
    "location": "479 Nguyễn Oanh, Gò Vấp, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20Minh%20Khai%203%20479%20Nguy%E1%BB%85n%20Oanh%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Gò Vấp. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Ngọc Lan 4",
    "type": "Nước & Cafe",
    "location": "102 Thống Nhất, Gò Vấp, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20Ng%E1%BB%8Dc%20Lan%204%20102%20Th%E1%BB%91ng%20Nh%E1%BA%A5t%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Gò Vấp. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Local Taste 5",
    "type": "Nước & Cafe",
    "location": "497 Quang Trung, Gò Vấp, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20Local%20Taste%205%20497%20Quang%20Trung%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Gò Vấp. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Hoàn Kiếm",
    "type": "Chè",
    "location": "364 Nguyễn Oanh, Gò Vấp, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20Ho%C3%A0n%20Ki%E1%BA%BFm%20364%20Nguy%E1%BB%85n%20Oanh%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Gò Vấp. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Cô Ba 2",
    "type": "Chè",
    "location": "256 Lê Đức Thọ, Gò Vấp, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20C%C3%B4%20Ba%202%20256%20L%C3%AA%20%C4%90%E1%BB%A9c%20Th%E1%BB%8D%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Gò Vấp. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Vĩnh Lộc 3",
    "type": "Chè",
    "location": "189 Thống Nhất, Gò Vấp, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20V%C4%A9nh%20L%E1%BB%99c%203%20189%20Th%E1%BB%91ng%20Nh%E1%BA%A5t%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Gò Vấp. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Viet Kitchen 4",
    "type": "Chè",
    "location": "309 Phan Văn Trị, Gò Vấp, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20Viet%20Kitchen%204%20309%20Phan%20V%C4%83n%20Tr%E1%BB%8B%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Gò Vấp. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Minh Khai 5",
    "type": "Chè",
    "location": "449 Thống Nhất, Gò Vấp, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20Minh%20Khai%205%20449%20Th%E1%BB%91ng%20Nh%E1%BA%A5t%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Gò Vấp. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Minh Khai",
    "type": "Bánh xèo",
    "location": "347 Lê Đức Thọ, Gò Vấp, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20Minh%20Khai%20347%20L%C3%AA%20%C4%90%E1%BB%A9c%20Th%E1%BB%8D%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Gò Vấp. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Hương Việt 2",
    "type": "Bánh xèo",
    "location": "115 Phan Văn Trị, Gò Vấp, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20H%C6%B0%C6%A1ng%20Vi%E1%BB%87t%202%20115%20Phan%20V%C4%83n%20Tr%E1%BB%8B%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Gò Vấp. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Saigon Deli 3",
    "type": "Bánh xèo",
    "location": "160 Lê Đức Thọ, Gò Vấp, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20Saigon%20Deli%203%20160%20L%C3%AA%20%C4%90%E1%BB%A9c%20Th%E1%BB%8D%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Gò Vấp. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Bến Thành 4",
    "type": "Bánh xèo",
    "location": "400 Lê Đức Thọ, Gò Vấp, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20B%E1%BA%BFn%20Th%C3%A0nh%204%20400%20L%C3%AA%20%C4%90%E1%BB%A9c%20Th%E1%BB%8D%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Gò Vấp. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Hoàn Kiếm 5",
    "type": "Bánh xèo",
    "location": "119 Lê Đức Thọ, Gò Vấp, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20Ho%C3%A0n%20Ki%E1%BA%BFm%205%20119%20L%C3%AA%20%C4%90%E1%BB%A9c%20Th%E1%BB%8D%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Gò Vấp. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Mưa Hồng",
    "type": "Khác",
    "location": "104 Phan Văn Trị, Gò Vấp, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20M%C6%B0a%20H%E1%BB%93ng%20104%20Phan%20V%C4%83n%20Tr%E1%BB%8B%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Gò Vấp. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Thanh Xuân 2",
    "type": "Khác",
    "location": "284 Lê Đức Thọ, Gò Vấp, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20Thanh%20Xu%C3%A2n%202%20284%20L%C3%AA%20%C4%90%E1%BB%A9c%20Th%E1%BB%8D%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Gò Vấp. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Hồng Phát 3",
    "type": "Khác",
    "location": "471 Nguyễn Oanh, Gò Vấp, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20H%E1%BB%93ng%20Ph%C3%A1t%203%20471%20Nguy%E1%BB%85n%20Oanh%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Gò Vấp. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Đệ Nhất 4",
    "type": "Khác",
    "location": "340 Quang Trung, Gò Vấp, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20%C4%90%E1%BB%87%20Nh%E1%BA%A5t%204%20340%20Quang%20Trung%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Gò Vấp. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Đệ Nhất 5",
    "type": "Khác",
    "location": "63 Nguyễn Oanh, Gò Vấp, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20%C4%90%E1%BB%87%20Nh%E1%BA%A5t%205%2063%20Nguy%E1%BB%85n%20Oanh%2C%20G%C3%B2%20V%E1%BA%A5p%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Gò Vấp. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Bà Năm",
    "type": "Phở",
    "location": "175 Thích Quảng Đức, Phú Nhuận, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20B%C3%A0%20N%C4%83m%20175%20Th%C3%ADch%20Qu%E1%BA%A3ng%20%C4%90%E1%BB%A9c%2C%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Phú Nhuận. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Gia Đình 2",
    "type": "Phở",
    "location": "454 Huỳnh Văn Bánh, Phú Nhuận, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20Gia%20%C4%90%C3%ACnh%202%20454%20Hu%E1%BB%B3nh%20V%C4%83n%20B%C3%A1nh%2C%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Phú Nhuận. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Ngọc Lan 3",
    "type": "Phở",
    "location": "447 Nguyễn Kiệm, Phú Nhuận, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20Ng%E1%BB%8Dc%20Lan%203%20447%20Nguy%E1%BB%85n%20Ki%E1%BB%87m%2C%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Phú Nhuận. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Chú Bảy 4",
    "type": "Phở",
    "location": "294 Phan Xích Long, Phú Nhuận, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20Ch%C3%BA%20B%E1%BA%A3y%204%20294%20Phan%20X%C3%ADch%20Long%2C%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Phú Nhuận. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Minh Khai 5",
    "type": "Phở",
    "location": "490 Huỳnh Văn Bánh, Phú Nhuận, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20Minh%20Khai%205%20490%20Hu%E1%BB%B3nh%20V%C4%83n%20B%C3%A1nh%2C%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Phú Nhuận. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Bến Thành",
    "type": "Bún",
    "location": "354 Phan Đình Phùng, Phú Nhuận, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20B%E1%BA%BFn%20Th%C3%A0nh%20354%20Phan%20%C4%90%C3%ACnh%20Ph%C3%B9ng%2C%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Phú Nhuận. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Viet Kitchen 2",
    "type": "Bún",
    "location": "139 Nguyễn Kiệm, Phú Nhuận, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20Viet%20Kitchen%202%20139%20Nguy%E1%BB%85n%20Ki%E1%BB%87m%2C%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Phú Nhuận. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Đồng Quê 3",
    "type": "Bún",
    "location": "441 Phan Xích Long, Phú Nhuận, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%90%E1%BB%93ng%20Qu%C3%AA%203%20441%20Phan%20X%C3%ADch%20Long%2C%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Phú Nhuận. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Bà Năm 4",
    "type": "Bún",
    "location": "343 Phan Đình Phùng, Phú Nhuận, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20B%C3%A0%20N%C4%83m%204%20343%20Phan%20%C4%90%C3%ACnh%20Ph%C3%B9ng%2C%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Phú Nhuận. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Sông Trăng 5",
    "type": "Bún",
    "location": "285 Thích Quảng Đức, Phú Nhuận, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20S%C3%B4ng%20Tr%C4%83ng%205%20285%20Th%C3%ADch%20Qu%E1%BA%A3ng%20%C4%90%E1%BB%A9c%2C%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Phú Nhuận. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Phố Hội",
    "type": "Cơm",
    "location": "15 Nguyễn Kiệm, Phú Nhuận, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20Ph%E1%BB%91%20H%E1%BB%99i%2015%20Nguy%E1%BB%85n%20Ki%E1%BB%87m%2C%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Phú Nhuận. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Mưa Hồng 2",
    "type": "Cơm",
    "location": "358 Nguyễn Kiệm, Phú Nhuận, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20M%C6%B0a%20H%E1%BB%93ng%202%20358%20Nguy%E1%BB%85n%20Ki%E1%BB%87m%2C%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Phú Nhuận. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Hương Việt 3",
    "type": "Cơm",
    "location": "385 Huỳnh Văn Bánh, Phú Nhuận, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20H%C6%B0%C6%A1ng%20Vi%E1%BB%87t%203%20385%20Hu%E1%BB%B3nh%20V%C4%83n%20B%C3%A1nh%2C%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Phú Nhuận. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Hương Việt 4",
    "type": "Cơm",
    "location": "391 Phan Đình Phùng, Phú Nhuận, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20H%C6%B0%C6%A1ng%20Vi%E1%BB%87t%204%20391%20Phan%20%C4%90%C3%ACnh%20Ph%C3%B9ng%2C%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Phú Nhuận. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Sài Thành 5",
    "type": "Cơm",
    "location": "326 Phan Đình Phùng, Phú Nhuận, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20S%C3%A0i%20Th%C3%A0nh%205%20326%20Phan%20%C4%90%C3%ACnh%20Ph%C3%B9ng%2C%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Phú Nhuận. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Phố Hội",
    "type": "Lẩu",
    "location": "102 Phan Đình Phùng, Phú Nhuận, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20Ph%E1%BB%91%20H%E1%BB%99i%20102%20Phan%20%C4%90%C3%ACnh%20Ph%C3%B9ng%2C%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Phú Nhuận. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Ngọc Lan 2",
    "type": "Lẩu",
    "location": "201 Huỳnh Văn Bánh, Phú Nhuận, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20Ng%E1%BB%8Dc%20Lan%202%20201%20Hu%E1%BB%B3nh%20V%C4%83n%20B%C3%A1nh%2C%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Phú Nhuận. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Viet Kitchen 3",
    "type": "Lẩu",
    "location": "257 Phan Xích Long, Phú Nhuận, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20Viet%20Kitchen%203%20257%20Phan%20X%C3%ADch%20Long%2C%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Phú Nhuận. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Hồng Phát 4",
    "type": "Lẩu",
    "location": "84 Thích Quảng Đức, Phú Nhuận, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20H%E1%BB%93ng%20Ph%C3%A1t%204%2084%20Th%C3%ADch%20Qu%E1%BA%A3ng%20%C4%90%E1%BB%A9c%2C%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Phú Nhuận. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Hoàn Kiếm 5",
    "type": "Lẩu",
    "location": "336 Phan Đình Phùng, Phú Nhuận, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20Ho%C3%A0n%20Ki%E1%BA%BFm%205%20336%20Phan%20%C4%90%C3%ACnh%20Ph%C3%B9ng%2C%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Phú Nhuận. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Viet Kitchen",
    "type": "Đồ chay",
    "location": "394 Phan Xích Long, Phú Nhuận, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20Viet%20Kitchen%20394%20Phan%20X%C3%ADch%20Long%2C%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Phú Nhuận. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Sông Trăng 2",
    "type": "Đồ chay",
    "location": "167 Huỳnh Văn Bánh, Phú Nhuận, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20S%C3%B4ng%20Tr%C4%83ng%202%20167%20Hu%E1%BB%B3nh%20V%C4%83n%20B%C3%A1nh%2C%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Phú Nhuận. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Ông Già 3",
    "type": "Đồ chay",
    "location": "316 Nguyễn Kiệm, Phú Nhuận, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20%C3%94ng%20Gi%C3%A0%203%20316%20Nguy%E1%BB%85n%20Ki%E1%BB%87m%2C%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Phú Nhuận. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Nam Hải 4",
    "type": "Đồ chay",
    "location": "62 Phan Xích Long, Phú Nhuận, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20Nam%20H%E1%BA%A3i%204%2062%20Phan%20X%C3%ADch%20Long%2C%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Phú Nhuận. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Hương Việt 5",
    "type": "Đồ chay",
    "location": "487 Nguyễn Kiệm, Phú Nhuận, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20H%C6%B0%C6%A1ng%20Vi%E1%BB%87t%205%20487%20Nguy%E1%BB%85n%20Ki%E1%BB%87m%2C%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Phú Nhuận. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Bà Năm",
    "type": "Bánh mì",
    "location": "161 Nguyễn Kiệm, Phú Nhuận, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20B%C3%A0%20N%C4%83m%20161%20Nguy%E1%BB%85n%20Ki%E1%BB%87m%2C%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Phú Nhuận. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Viet Kitchen 2",
    "type": "Bánh mì",
    "location": "258 Thích Quảng Đức, Phú Nhuận, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20Viet%20Kitchen%202%20258%20Th%C3%ADch%20Qu%E1%BA%A3ng%20%C4%90%E1%BB%A9c%2C%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Phú Nhuận. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Ngọc Lan 3",
    "type": "Bánh mì",
    "location": "8 Thích Quảng Đức, Phú Nhuận, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20Ng%E1%BB%8Dc%20Lan%203%208%20Th%C3%ADch%20Qu%E1%BA%A3ng%20%C4%90%E1%BB%A9c%2C%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Phú Nhuận. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Sông Trăng 4",
    "type": "Bánh mì",
    "location": "53 Huỳnh Văn Bánh, Phú Nhuận, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20S%C3%B4ng%20Tr%C4%83ng%204%2053%20Hu%E1%BB%B3nh%20V%C4%83n%20B%C3%A1nh%2C%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Phú Nhuận. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Anh Tư 5",
    "type": "Bánh mì",
    "location": "191 Huỳnh Văn Bánh, Phú Nhuận, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20Anh%20T%C6%B0%205%20191%20Hu%E1%BB%B3nh%20V%C4%83n%20B%C3%A1nh%2C%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Phú Nhuận. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Saigon Deli",
    "type": "Ăn vặt",
    "location": "7 Phan Xích Long, Phú Nhuận, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20Saigon%20Deli%207%20Phan%20X%C3%ADch%20Long%2C%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Phú Nhuận. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Hồng Phát 2",
    "type": "Ăn vặt",
    "location": "22 Thích Quảng Đức, Phú Nhuận, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20H%E1%BB%93ng%20Ph%C3%A1t%202%2022%20Th%C3%ADch%20Qu%E1%BA%A3ng%20%C4%90%E1%BB%A9c%2C%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Phú Nhuận. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Đồng Quê 3",
    "type": "Ăn vặt",
    "location": "142 Huỳnh Văn Bánh, Phú Nhuận, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20%C4%90%E1%BB%93ng%20Qu%C3%AA%203%20142%20Hu%E1%BB%B3nh%20V%C4%83n%20B%C3%A1nh%2C%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Phú Nhuận. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Xưa & Nay 4",
    "type": "Ăn vặt",
    "location": "331 Huỳnh Văn Bánh, Phú Nhuận, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20X%C6%B0a%20%26%20Nay%204%20331%20Hu%E1%BB%B3nh%20V%C4%83n%20B%C3%A1nh%2C%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Phú Nhuận. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Hương Việt 5",
    "type": "Ăn vặt",
    "location": "14 Huỳnh Văn Bánh, Phú Nhuận, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20H%C6%B0%C6%A1ng%20Vi%E1%BB%87t%205%2014%20Hu%E1%BB%B3nh%20V%C4%83n%20B%C3%A1nh%2C%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Phú Nhuận. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Hoàn Kiếm",
    "type": "Bánh cuốn",
    "location": "250 Thích Quảng Đức, Phú Nhuận, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20Ho%C3%A0n%20Ki%E1%BA%BFm%20250%20Th%C3%ADch%20Qu%E1%BA%A3ng%20%C4%90%E1%BB%A9c%2C%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Phú Nhuận. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Sông Trăng 2",
    "type": "Bánh cuốn",
    "location": "256 Phan Xích Long, Phú Nhuận, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20S%C3%B4ng%20Tr%C4%83ng%202%20256%20Phan%20X%C3%ADch%20Long%2C%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Phú Nhuận. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Kim Anh 3",
    "type": "Bánh cuốn",
    "location": "340 Phan Đình Phùng, Phú Nhuận, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20Kim%20Anh%203%20340%20Phan%20%C4%90%C3%ACnh%20Ph%C3%B9ng%2C%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Phú Nhuận. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Dì Liên 4",
    "type": "Bánh cuốn",
    "location": "486 Nguyễn Kiệm, Phú Nhuận, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20D%C3%AC%20Li%C3%AAn%204%20486%20Nguy%E1%BB%85n%20Ki%E1%BB%87m%2C%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Phú Nhuận. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Sài Thành 5",
    "type": "Bánh cuốn",
    "location": "133 Nguyễn Kiệm, Phú Nhuận, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20S%C3%A0i%20Th%C3%A0nh%205%20133%20Nguy%E1%BB%85n%20Ki%E1%BB%87m%2C%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Phú Nhuận. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Nắng Vàng",
    "type": "Bún đậu",
    "location": "109 Phan Xích Long, Phú Nhuận, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20N%E1%BA%AFng%20V%C3%A0ng%20109%20Phan%20X%C3%ADch%20Long%2C%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Phú Nhuận. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Vĩnh Lộc 2",
    "type": "Bún đậu",
    "location": "140 Phan Đình Phùng, Phú Nhuận, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20V%C4%A9nh%20L%E1%BB%99c%202%20140%20Phan%20%C4%90%C3%ACnh%20Ph%C3%B9ng%2C%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Phú Nhuận. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Chú Bảy 3",
    "type": "Bún đậu",
    "location": "310 Huỳnh Văn Bánh, Phú Nhuận, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20Ch%C3%BA%20B%E1%BA%A3y%203%20310%20Hu%E1%BB%B3nh%20V%C4%83n%20B%C3%A1nh%2C%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Phú Nhuận. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Saigon Deli 4",
    "type": "Bún đậu",
    "location": "296 Thích Quảng Đức, Phú Nhuận, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20Saigon%20Deli%204%20296%20Th%C3%ADch%20Qu%E1%BA%A3ng%20%C4%90%E1%BB%A9c%2C%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Phú Nhuận. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Đệ Nhất 5",
    "type": "Bún đậu",
    "location": "423 Phan Xích Long, Phú Nhuận, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20%C4%90%E1%BB%87%20Nh%E1%BA%A5t%205%20423%20Phan%20X%C3%ADch%20Long%2C%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Phú Nhuận. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Hào Hùng",
    "type": "Hải sản",
    "location": "169 Phan Xích Long, Phú Nhuận, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20H%C3%A0o%20H%C3%B9ng%20169%20Phan%20X%C3%ADch%20Long%2C%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Phú Nhuận. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Sông Trăng 2",
    "type": "Hải sản",
    "location": "307 Phan Xích Long, Phú Nhuận, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20S%C3%B4ng%20Tr%C4%83ng%202%20307%20Phan%20X%C3%ADch%20Long%2C%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Phú Nhuận. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Ngọc Lan 3",
    "type": "Hải sản",
    "location": "184 Thích Quảng Đức, Phú Nhuận, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20Ng%E1%BB%8Dc%20Lan%203%20184%20Th%C3%ADch%20Qu%E1%BA%A3ng%20%C4%90%E1%BB%A9c%2C%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Phú Nhuận. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Bến Thành 4",
    "type": "Hải sản",
    "location": "355 Nguyễn Kiệm, Phú Nhuận, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20B%E1%BA%BFn%20Th%C3%A0nh%204%20355%20Nguy%E1%BB%85n%20Ki%E1%BB%87m%2C%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Phú Nhuận. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Hoàn Kiếm 5",
    "type": "Hải sản",
    "location": "271 Phan Xích Long, Phú Nhuận, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20Ho%C3%A0n%20Ki%E1%BA%BFm%205%20271%20Phan%20X%C3%ADch%20Long%2C%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Phú Nhuận. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Thái Bình",
    "type": "Ốc",
    "location": "172 Phan Đình Phùng, Phú Nhuận, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20Th%C3%A1i%20B%C3%ACnh%20172%20Phan%20%C4%90%C3%ACnh%20Ph%C3%B9ng%2C%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Phú Nhuận. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Dì Liên 2",
    "type": "Ốc",
    "location": "470 Thích Quảng Đức, Phú Nhuận, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20D%C3%AC%20Li%C3%AAn%202%20470%20Th%C3%ADch%20Qu%E1%BA%A3ng%20%C4%90%E1%BB%A9c%2C%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Phú Nhuận. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Anh Tư 3",
    "type": "Ốc",
    "location": "37 Thích Quảng Đức, Phú Nhuận, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20Anh%20T%C6%B0%203%2037%20Th%C3%ADch%20Qu%E1%BA%A3ng%20%C4%90%E1%BB%A9c%2C%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Phú Nhuận. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Bến Thành 4",
    "type": "Ốc",
    "location": "475 Phan Xích Long, Phú Nhuận, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20B%E1%BA%BFn%20Th%C3%A0nh%204%20475%20Phan%20X%C3%ADch%20Long%2C%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Phú Nhuận. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Viet Kitchen 5",
    "type": "Ốc",
    "location": "426 Huỳnh Văn Bánh, Phú Nhuận, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20Viet%20Kitchen%205%20426%20Hu%E1%BB%B3nh%20V%C4%83n%20B%C3%A1nh%2C%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Phú Nhuận. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Thái Bình",
    "type": "Mì",
    "location": "336 Phan Xích Long, Phú Nhuận, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20Th%C3%A1i%20B%C3%ACnh%20336%20Phan%20X%C3%ADch%20Long%2C%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Phú Nhuận. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Thanh Xuân 2",
    "type": "Mì",
    "location": "269 Thích Quảng Đức, Phú Nhuận, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20Thanh%20Xu%C3%A2n%202%20269%20Th%C3%ADch%20Qu%E1%BA%A3ng%20%C4%90%E1%BB%A9c%2C%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Phú Nhuận. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Bến Thành 3",
    "type": "Mì",
    "location": "330 Phan Xích Long, Phú Nhuận, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20B%E1%BA%BFn%20Th%C3%A0nh%203%20330%20Phan%20X%C3%ADch%20Long%2C%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Phú Nhuận. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Chú Bảy 4",
    "type": "Mì",
    "location": "102 Nguyễn Kiệm, Phú Nhuận, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20Ch%C3%BA%20B%E1%BA%A3y%204%20102%20Nguy%E1%BB%85n%20Ki%E1%BB%87m%2C%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Phú Nhuận. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Sông Trăng 5",
    "type": "Mì",
    "location": "55 Huỳnh Văn Bánh, Phú Nhuận, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20S%C3%B4ng%20Tr%C4%83ng%205%2055%20Hu%E1%BB%B3nh%20V%C4%83n%20B%C3%A1nh%2C%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Phú Nhuận. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Viet Kitchen",
    "type": "Hủ tiếu",
    "location": "188 Nguyễn Kiệm, Phú Nhuận, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20Viet%20Kitchen%20188%20Nguy%E1%BB%85n%20Ki%E1%BB%87m%2C%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Phú Nhuận. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Ngọc Lan 2",
    "type": "Hủ tiếu",
    "location": "407 Phan Đình Phùng, Phú Nhuận, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20Ng%E1%BB%8Dc%20Lan%202%20407%20Phan%20%C4%90%C3%ACnh%20Ph%C3%B9ng%2C%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Phú Nhuận. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Hương Việt 3",
    "type": "Hủ tiếu",
    "location": "219 Phan Xích Long, Phú Nhuận, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20H%C6%B0%C6%A1ng%20Vi%E1%BB%87t%203%20219%20Phan%20X%C3%ADch%20Long%2C%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Phú Nhuận. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Thái Bình 4",
    "type": "Hủ tiếu",
    "location": "448 Phan Đình Phùng, Phú Nhuận, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20Th%C3%A1i%20B%C3%ACnh%204%20448%20Phan%20%C4%90%C3%ACnh%20Ph%C3%B9ng%2C%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Phú Nhuận. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Vĩnh Lộc 5",
    "type": "Hủ tiếu",
    "location": "393 Nguyễn Kiệm, Phú Nhuận, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20V%C4%A9nh%20L%E1%BB%99c%205%20393%20Nguy%E1%BB%85n%20Ki%E1%BB%87m%2C%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Phú Nhuận. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Thanh Đa",
    "type": "Đồ nướng",
    "location": "486 Phan Đình Phùng, Phú Nhuận, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20Thanh%20%C4%90a%20486%20Phan%20%C4%90%C3%ACnh%20Ph%C3%B9ng%2C%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Phú Nhuận. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Chú Bảy 2",
    "type": "Đồ nướng",
    "location": "321 Phan Đình Phùng, Phú Nhuận, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20Ch%C3%BA%20B%E1%BA%A3y%202%20321%20Phan%20%C4%90%C3%ACnh%20Ph%C3%B9ng%2C%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Phú Nhuận. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Bến Thành 3",
    "type": "Đồ nướng",
    "location": "260 Huỳnh Văn Bánh, Phú Nhuận, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20B%E1%BA%BFn%20Th%C3%A0nh%203%20260%20Hu%E1%BB%B3nh%20V%C4%83n%20B%C3%A1nh%2C%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Phú Nhuận. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Ngọc Lan 4",
    "type": "Đồ nướng",
    "location": "423 Thích Quảng Đức, Phú Nhuận, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20Ng%E1%BB%8Dc%20Lan%204%20423%20Th%C3%ADch%20Qu%E1%BA%A3ng%20%C4%90%E1%BB%A9c%2C%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Phú Nhuận. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Ngọc Lan 5",
    "type": "Đồ nướng",
    "location": "385 Phan Đình Phùng, Phú Nhuận, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20Ng%E1%BB%8Dc%20Lan%205%20385%20Phan%20%C4%90%C3%ACnh%20Ph%C3%B9ng%2C%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Phú Nhuận. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Minh Khai",
    "type": "Nước & Cafe",
    "location": "124 Phan Đình Phùng, Phú Nhuận, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20Minh%20Khai%20124%20Phan%20%C4%90%C3%ACnh%20Ph%C3%B9ng%2C%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Phú Nhuận. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Ông Già 2",
    "type": "Nước & Cafe",
    "location": "136 Phan Đình Phùng, Phú Nhuận, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20%C3%94ng%20Gi%C3%A0%202%20136%20Phan%20%C4%90%C3%ACnh%20Ph%C3%B9ng%2C%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Phú Nhuận. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Đồng Quê 3",
    "type": "Nước & Cafe",
    "location": "105 Huỳnh Văn Bánh, Phú Nhuận, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20%C4%90%E1%BB%93ng%20Qu%C3%AA%203%20105%20Hu%E1%BB%B3nh%20V%C4%83n%20B%C3%A1nh%2C%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Phú Nhuận. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Nam Hải 4",
    "type": "Nước & Cafe",
    "location": "15 Huỳnh Văn Bánh, Phú Nhuận, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20Nam%20H%E1%BA%A3i%204%2015%20Hu%E1%BB%B3nh%20V%C4%83n%20B%C3%A1nh%2C%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Phú Nhuận. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Vĩnh Lộc 5",
    "type": "Nước & Cafe",
    "location": "111 Phan Xích Long, Phú Nhuận, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20V%C4%A9nh%20L%E1%BB%99c%205%20111%20Phan%20X%C3%ADch%20Long%2C%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Phú Nhuận. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Thái Bình",
    "type": "Chè",
    "location": "475 Thích Quảng Đức, Phú Nhuận, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20Th%C3%A1i%20B%C3%ACnh%20475%20Th%C3%ADch%20Qu%E1%BA%A3ng%20%C4%90%E1%BB%A9c%2C%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Phú Nhuận. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Thanh Đa 2",
    "type": "Chè",
    "location": "395 Phan Đình Phùng, Phú Nhuận, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20Thanh%20%C4%90a%202%20395%20Phan%20%C4%90%C3%ACnh%20Ph%C3%B9ng%2C%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Phú Nhuận. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Đệ Nhất 3",
    "type": "Chè",
    "location": "217 Nguyễn Kiệm, Phú Nhuận, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20%C4%90%E1%BB%87%20Nh%E1%BA%A5t%203%20217%20Nguy%E1%BB%85n%20Ki%E1%BB%87m%2C%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Phú Nhuận. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Đồng Quê 4",
    "type": "Chè",
    "location": "470 Nguyễn Kiệm, Phú Nhuận, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20%C4%90%E1%BB%93ng%20Qu%C3%AA%204%20470%20Nguy%E1%BB%85n%20Ki%E1%BB%87m%2C%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Phú Nhuận. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Viet Kitchen 5",
    "type": "Chè",
    "location": "254 Thích Quảng Đức, Phú Nhuận, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20Viet%20Kitchen%205%20254%20Th%C3%ADch%20Qu%E1%BA%A3ng%20%C4%90%E1%BB%A9c%2C%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Phú Nhuận. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Chú Bảy",
    "type": "Bánh xèo",
    "location": "246 Huỳnh Văn Bánh, Phú Nhuận, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20Ch%C3%BA%20B%E1%BA%A3y%20246%20Hu%E1%BB%B3nh%20V%C4%83n%20B%C3%A1nh%2C%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Phú Nhuận. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Thái Bình 2",
    "type": "Bánh xèo",
    "location": "350 Phan Xích Long, Phú Nhuận, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20Th%C3%A1i%20B%C3%ACnh%202%20350%20Phan%20X%C3%ADch%20Long%2C%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Phú Nhuận. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Viet Kitchen 3",
    "type": "Bánh xèo",
    "location": "67 Thích Quảng Đức, Phú Nhuận, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20Viet%20Kitchen%203%2067%20Th%C3%ADch%20Qu%E1%BA%A3ng%20%C4%90%E1%BB%A9c%2C%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Phú Nhuận. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Hương Việt 4",
    "type": "Bánh xèo",
    "location": "409 Phan Đình Phùng, Phú Nhuận, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20H%C6%B0%C6%A1ng%20Vi%E1%BB%87t%204%20409%20Phan%20%C4%90%C3%ACnh%20Ph%C3%B9ng%2C%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Phú Nhuận. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Vĩnh Lộc 5",
    "type": "Bánh xèo",
    "location": "289 Huỳnh Văn Bánh, Phú Nhuận, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20V%C4%A9nh%20L%E1%BB%99c%205%20289%20Hu%E1%BB%B3nh%20V%C4%83n%20B%C3%A1nh%2C%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Phú Nhuận. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Nắng Vàng",
    "type": "Khác",
    "location": "149 Huỳnh Văn Bánh, Phú Nhuận, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20N%E1%BA%AFng%20V%C3%A0ng%20149%20Hu%E1%BB%B3nh%20V%C4%83n%20B%C3%A1nh%2C%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Phú Nhuận. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Minh Khai 2",
    "type": "Khác",
    "location": "488 Huỳnh Văn Bánh, Phú Nhuận, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20Minh%20Khai%202%20488%20Hu%E1%BB%B3nh%20V%C4%83n%20B%C3%A1nh%2C%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Phú Nhuận. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Thanh Đa 3",
    "type": "Khác",
    "location": "315 Phan Đình Phùng, Phú Nhuận, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20Thanh%20%C4%90a%203%20315%20Phan%20%C4%90%C3%ACnh%20Ph%C3%B9ng%2C%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Phú Nhuận. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Nam Hải 4",
    "type": "Khác",
    "location": "44 Huỳnh Văn Bánh, Phú Nhuận, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20Nam%20H%E1%BA%A3i%204%2044%20Hu%E1%BB%B3nh%20V%C4%83n%20B%C3%A1nh%2C%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Phú Nhuận. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Saigon Deli 5",
    "type": "Khác",
    "location": "107 Phan Xích Long, Phú Nhuận, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20Saigon%20Deli%205%20107%20Phan%20X%C3%ADch%20Long%2C%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Phú Nhuận. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Hào Hùng",
    "type": "Phở",
    "location": "31 Lê Văn Sỹ, Tân Bình, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20H%C3%A0o%20H%C3%B9ng%2031%20L%C3%AA%20V%C4%83n%20S%E1%BB%B9%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Tân Bình. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Hào Hùng 2",
    "type": "Phở",
    "location": "89 Lê Văn Sỹ, Tân Bình, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20H%C3%A0o%20H%C3%B9ng%202%2089%20L%C3%AA%20V%C4%83n%20S%E1%BB%B9%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Tân Bình. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Chú Bảy 3",
    "type": "Phở",
    "location": "152 Út Tịch, Tân Bình, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20Ch%C3%BA%20B%E1%BA%A3y%203%20152%20%C3%9At%20T%E1%BB%8Bch%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Tân Bình. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Đông Á 4",
    "type": "Phở",
    "location": "364 Trường Chinh, Tân Bình, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20%C4%90%C3%B4ng%20%C3%81%204%20364%20Tr%C6%B0%E1%BB%9Dng%20Chinh%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Tân Bình. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Thanh Xuân 5",
    "type": "Phở",
    "location": "250 Trường Chinh, Tân Bình, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20Thanh%20Xu%C3%A2n%205%20250%20Tr%C6%B0%E1%BB%9Dng%20Chinh%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Tân Bình. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Phố Hội",
    "type": "Bún",
    "location": "428 Hoàng Văn Thụ, Tân Bình, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20Ph%E1%BB%91%20H%E1%BB%99i%20428%20Ho%C3%A0ng%20V%C4%83n%20Th%E1%BB%A5%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Tân Bình. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Ngọc Lan 2",
    "type": "Bún",
    "location": "213 Cộng Hòa, Tân Bình, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20Ng%E1%BB%8Dc%20Lan%202%20213%20C%E1%BB%99ng%20H%C3%B2a%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Tân Bình. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Phố Hội 3",
    "type": "Bún",
    "location": "246 Hoàng Văn Thụ, Tân Bình, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20Ph%E1%BB%91%20H%E1%BB%99i%203%20246%20Ho%C3%A0ng%20V%C4%83n%20Th%E1%BB%A5%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Tân Bình. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Anh Tư 4",
    "type": "Bún",
    "location": "143 Hoàng Văn Thụ, Tân Bình, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20Anh%20T%C6%B0%204%20143%20Ho%C3%A0ng%20V%C4%83n%20Th%E1%BB%A5%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Tân Bình. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Phố Hội 5",
    "type": "Bún",
    "location": "438 Trường Chinh, Tân Bình, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20Ph%E1%BB%91%20H%E1%BB%99i%205%20438%20Tr%C6%B0%E1%BB%9Dng%20Chinh%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Tân Bình. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Đồng Quê",
    "type": "Cơm",
    "location": "421 Hoàng Văn Thụ, Tân Bình, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20%C4%90%E1%BB%93ng%20Qu%C3%AA%20421%20Ho%C3%A0ng%20V%C4%83n%20Th%E1%BB%A5%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Tân Bình. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Thanh Xuân 2",
    "type": "Cơm",
    "location": "343 Hoàng Văn Thụ, Tân Bình, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20Thanh%20Xu%C3%A2n%202%20343%20Ho%C3%A0ng%20V%C4%83n%20Th%E1%BB%A5%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Tân Bình. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Kim Anh 3",
    "type": "Cơm",
    "location": "213 Hoàng Văn Thụ, Tân Bình, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20Kim%20Anh%203%20213%20Ho%C3%A0ng%20V%C4%83n%20Th%E1%BB%A5%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Tân Bình. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Hồng Phát 4",
    "type": "Cơm",
    "location": "357 Lê Văn Sỹ, Tân Bình, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20H%E1%BB%93ng%20Ph%C3%A1t%204%20357%20L%C3%AA%20V%C4%83n%20S%E1%BB%B9%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Tân Bình. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Minh Khai 5",
    "type": "Cơm",
    "location": "217 Cộng Hòa, Tân Bình, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20Minh%20Khai%205%20217%20C%E1%BB%99ng%20H%C3%B2a%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Tân Bình. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Anh Tư",
    "type": "Lẩu",
    "location": "397 Hoàng Văn Thụ, Tân Bình, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20Anh%20T%C6%B0%20397%20Ho%C3%A0ng%20V%C4%83n%20Th%E1%BB%A5%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Tân Bình. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Saigon Deli 2",
    "type": "Lẩu",
    "location": "187 Lê Văn Sỹ, Tân Bình, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20Saigon%20Deli%202%20187%20L%C3%AA%20V%C4%83n%20S%E1%BB%B9%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Tân Bình. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Nắng Vàng 3",
    "type": "Lẩu",
    "location": "50 Lê Văn Sỹ, Tân Bình, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20N%E1%BA%AFng%20V%C3%A0ng%203%2050%20L%C3%AA%20V%C4%83n%20S%E1%BB%B9%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Tân Bình. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Đông Á 4",
    "type": "Lẩu",
    "location": "162 Trường Chinh, Tân Bình, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20%C4%90%C3%B4ng%20%C3%81%204%20162%20Tr%C6%B0%E1%BB%9Dng%20Chinh%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Tân Bình. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Ông Già 5",
    "type": "Lẩu",
    "location": "356 Trường Chinh, Tân Bình, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20%C3%94ng%20Gi%C3%A0%205%20356%20Tr%C6%B0%E1%BB%9Dng%20Chinh%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Tân Bình. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Anh Tư",
    "type": "Đồ chay",
    "location": "72 Út Tịch, Tân Bình, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20Anh%20T%C6%B0%2072%20%C3%9At%20T%E1%BB%8Bch%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Tân Bình. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Thanh Đa 2",
    "type": "Đồ chay",
    "location": "231 Cộng Hòa, Tân Bình, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20Thanh%20%C4%90a%202%20231%20C%E1%BB%99ng%20H%C3%B2a%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Tân Bình. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Thanh Đa 3",
    "type": "Đồ chay",
    "location": "456 Trường Chinh, Tân Bình, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20Thanh%20%C4%90a%203%20456%20Tr%C6%B0%E1%BB%9Dng%20Chinh%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Tân Bình. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Chú Bảy 4",
    "type": "Đồ chay",
    "location": "65 Cộng Hòa, Tân Bình, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20Ch%C3%BA%20B%E1%BA%A3y%204%2065%20C%E1%BB%99ng%20H%C3%B2a%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Tân Bình. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Phố Hội 5",
    "type": "Đồ chay",
    "location": "223 Cộng Hòa, Tân Bình, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20Ph%E1%BB%91%20H%E1%BB%99i%205%20223%20C%E1%BB%99ng%20H%C3%B2a%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Tân Bình. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Nam Hải",
    "type": "Bánh mì",
    "location": "58 Hoàng Văn Thụ, Tân Bình, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20Nam%20H%E1%BA%A3i%2058%20Ho%C3%A0ng%20V%C4%83n%20Th%E1%BB%A5%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Tân Bình. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Sài Thành 2",
    "type": "Bánh mì",
    "location": "422 Cộng Hòa, Tân Bình, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20S%C3%A0i%20Th%C3%A0nh%202%20422%20C%E1%BB%99ng%20H%C3%B2a%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Tân Bình. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Saigon Deli 3",
    "type": "Bánh mì",
    "location": "133 Hoàng Văn Thụ, Tân Bình, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20Saigon%20Deli%203%20133%20Ho%C3%A0ng%20V%C4%83n%20Th%E1%BB%A5%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Tân Bình. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Thái Bình 4",
    "type": "Bánh mì",
    "location": "379 Út Tịch, Tân Bình, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20Th%C3%A1i%20B%C3%ACnh%204%20379%20%C3%9At%20T%E1%BB%8Bch%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Tân Bình. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Cô Ba 5",
    "type": "Bánh mì",
    "location": "389 Lê Văn Sỹ, Tân Bình, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20C%C3%B4%20Ba%205%20389%20L%C3%AA%20V%C4%83n%20S%E1%BB%B9%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Tân Bình. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Sông Trăng",
    "type": "Ăn vặt",
    "location": "377 Trường Chinh, Tân Bình, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20S%C3%B4ng%20Tr%C4%83ng%20377%20Tr%C6%B0%E1%BB%9Dng%20Chinh%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Tân Bình. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Xưa & Nay 2",
    "type": "Ăn vặt",
    "location": "364 Hoàng Văn Thụ, Tân Bình, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20X%C6%B0a%20%26%20Nay%202%20364%20Ho%C3%A0ng%20V%C4%83n%20Th%E1%BB%A5%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Tân Bình. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Kim Anh 3",
    "type": "Ăn vặt",
    "location": "29 Trường Chinh, Tân Bình, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20Kim%20Anh%203%2029%20Tr%C6%B0%E1%BB%9Dng%20Chinh%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Tân Bình. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Vĩnh Lộc 4",
    "type": "Ăn vặt",
    "location": "473 Trường Chinh, Tân Bình, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20V%C4%A9nh%20L%E1%BB%99c%204%20473%20Tr%C6%B0%E1%BB%9Dng%20Chinh%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Tân Bình. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Viet Kitchen 5",
    "type": "Ăn vặt",
    "location": "303 Cộng Hòa, Tân Bình, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20Viet%20Kitchen%205%20303%20C%E1%BB%99ng%20H%C3%B2a%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Tân Bình. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Hào Hùng",
    "type": "Bánh cuốn",
    "location": "201 Lê Văn Sỹ, Tân Bình, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20H%C3%A0o%20H%C3%B9ng%20201%20L%C3%AA%20V%C4%83n%20S%E1%BB%B9%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Tân Bình. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Cô Ba 2",
    "type": "Bánh cuốn",
    "location": "225 Lê Văn Sỹ, Tân Bình, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20C%C3%B4%20Ba%202%20225%20L%C3%AA%20V%C4%83n%20S%E1%BB%B9%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Tân Bình. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Đông Á 3",
    "type": "Bánh cuốn",
    "location": "459 Út Tịch, Tân Bình, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20%C4%90%C3%B4ng%20%C3%81%203%20459%20%C3%9At%20T%E1%BB%8Bch%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Tân Bình. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Local Taste 4",
    "type": "Bánh cuốn",
    "location": "60 Trường Chinh, Tân Bình, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20Local%20Taste%204%2060%20Tr%C6%B0%E1%BB%9Dng%20Chinh%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Tân Bình. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Hào Hùng 5",
    "type": "Bánh cuốn",
    "location": "377 Hoàng Văn Thụ, Tân Bình, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20H%C3%A0o%20H%C3%B9ng%205%20377%20Ho%C3%A0ng%20V%C4%83n%20Th%E1%BB%A5%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Tân Bình. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Nắng Vàng",
    "type": "Bún đậu",
    "location": "457 Cộng Hòa, Tân Bình, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20N%E1%BA%AFng%20V%C3%A0ng%20457%20C%E1%BB%99ng%20H%C3%B2a%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Tân Bình. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Hoàn Kiếm 2",
    "type": "Bún đậu",
    "location": "120 Cộng Hòa, Tân Bình, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20Ho%C3%A0n%20Ki%E1%BA%BFm%202%20120%20C%E1%BB%99ng%20H%C3%B2a%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Tân Bình. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Kim Anh 3",
    "type": "Bún đậu",
    "location": "463 Trường Chinh, Tân Bình, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20Kim%20Anh%203%20463%20Tr%C6%B0%E1%BB%9Dng%20Chinh%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Tân Bình. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Nắng Vàng 4",
    "type": "Bún đậu",
    "location": "86 Út Tịch, Tân Bình, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20N%E1%BA%AFng%20V%C3%A0ng%204%2086%20%C3%9At%20T%E1%BB%8Bch%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Tân Bình. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Viet Kitchen 5",
    "type": "Bún đậu",
    "location": "113 Cộng Hòa, Tân Bình, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20Viet%20Kitchen%205%20113%20C%E1%BB%99ng%20H%C3%B2a%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Tân Bình. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Sài Thành",
    "type": "Hải sản",
    "location": "399 Hoàng Văn Thụ, Tân Bình, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20S%C3%A0i%20Th%C3%A0nh%20399%20Ho%C3%A0ng%20V%C4%83n%20Th%E1%BB%A5%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Tân Bình. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Thái Bình 2",
    "type": "Hải sản",
    "location": "489 Cộng Hòa, Tân Bình, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20Th%C3%A1i%20B%C3%ACnh%202%20489%20C%E1%BB%99ng%20H%C3%B2a%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Tân Bình. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Hồng Phát 3",
    "type": "Hải sản",
    "location": "272 Lê Văn Sỹ, Tân Bình, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20H%E1%BB%93ng%20Ph%C3%A1t%203%20272%20L%C3%AA%20V%C4%83n%20S%E1%BB%B9%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Tân Bình. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Đệ Nhất 4",
    "type": "Hải sản",
    "location": "326 Hoàng Văn Thụ, Tân Bình, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20%C4%90%E1%BB%87%20Nh%E1%BA%A5t%204%20326%20Ho%C3%A0ng%20V%C4%83n%20Th%E1%BB%A5%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Tân Bình. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Sài Thành 5",
    "type": "Hải sản",
    "location": "379 Út Tịch, Tân Bình, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20S%C3%A0i%20Th%C3%A0nh%205%20379%20%C3%9At%20T%E1%BB%8Bch%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Tân Bình. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Thanh Đa",
    "type": "Ốc",
    "location": "35 Út Tịch, Tân Bình, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20Thanh%20%C4%90a%2035%20%C3%9At%20T%E1%BB%8Bch%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Tân Bình. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Phố Hội 2",
    "type": "Ốc",
    "location": "337 Út Tịch, Tân Bình, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20Ph%E1%BB%91%20H%E1%BB%99i%202%20337%20%C3%9At%20T%E1%BB%8Bch%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Tân Bình. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Hào Hùng 3",
    "type": "Ốc",
    "location": "168 Lê Văn Sỹ, Tân Bình, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20H%C3%A0o%20H%C3%B9ng%203%20168%20L%C3%AA%20V%C4%83n%20S%E1%BB%B9%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Tân Bình. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Thái Bình 4",
    "type": "Ốc",
    "location": "64 Lê Văn Sỹ, Tân Bình, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20Th%C3%A1i%20B%C3%ACnh%204%2064%20L%C3%AA%20V%C4%83n%20S%E1%BB%B9%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Tân Bình. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Thái Bình 5",
    "type": "Ốc",
    "location": "375 Trường Chinh, Tân Bình, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20Th%C3%A1i%20B%C3%ACnh%205%20375%20Tr%C6%B0%E1%BB%9Dng%20Chinh%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Tân Bình. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Phố Hội",
    "type": "Mì",
    "location": "464 Hoàng Văn Thụ, Tân Bình, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20Ph%E1%BB%91%20H%E1%BB%99i%20464%20Ho%C3%A0ng%20V%C4%83n%20Th%E1%BB%A5%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Tân Bình. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Đông Á 2",
    "type": "Mì",
    "location": "15 Trường Chinh, Tân Bình, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20%C4%90%C3%B4ng%20%C3%81%202%2015%20Tr%C6%B0%E1%BB%9Dng%20Chinh%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Tân Bình. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Dì Liên 3",
    "type": "Mì",
    "location": "169 Trường Chinh, Tân Bình, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20D%C3%AC%20Li%C3%AAn%203%20169%20Tr%C6%B0%E1%BB%9Dng%20Chinh%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Tân Bình. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Hào Hùng 4",
    "type": "Mì",
    "location": "145 Út Tịch, Tân Bình, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20H%C3%A0o%20H%C3%B9ng%204%20145%20%C3%9At%20T%E1%BB%8Bch%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Tân Bình. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Đông Á 5",
    "type": "Mì",
    "location": "429 Lê Văn Sỹ, Tân Bình, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20%C4%90%C3%B4ng%20%C3%81%205%20429%20L%C3%AA%20V%C4%83n%20S%E1%BB%B9%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Tân Bình. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Xưa & Nay",
    "type": "Hủ tiếu",
    "location": "307 Út Tịch, Tân Bình, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20X%C6%B0a%20%26%20Nay%20307%20%C3%9At%20T%E1%BB%8Bch%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Tân Bình. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Hồng Phát 2",
    "type": "Hủ tiếu",
    "location": "232 Út Tịch, Tân Bình, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20H%E1%BB%93ng%20Ph%C3%A1t%202%20232%20%C3%9At%20T%E1%BB%8Bch%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Tân Bình. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Thanh Đa 3",
    "type": "Hủ tiếu",
    "location": "412 Cộng Hòa, Tân Bình, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20Thanh%20%C4%90a%203%20412%20C%E1%BB%99ng%20H%C3%B2a%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Tân Bình. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Dì Liên 4",
    "type": "Hủ tiếu",
    "location": "485 Trường Chinh, Tân Bình, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20D%C3%AC%20Li%C3%AAn%204%20485%20Tr%C6%B0%E1%BB%9Dng%20Chinh%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Tân Bình. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Thanh Xuân 5",
    "type": "Hủ tiếu",
    "location": "105 Cộng Hòa, Tân Bình, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20Thanh%20Xu%C3%A2n%205%20105%20C%E1%BB%99ng%20H%C3%B2a%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Tân Bình. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Mưa Hồng",
    "type": "Đồ nướng",
    "location": "464 Út Tịch, Tân Bình, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20M%C6%B0a%20H%E1%BB%93ng%20464%20%C3%9At%20T%E1%BB%8Bch%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Tân Bình. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Ông Già 2",
    "type": "Đồ nướng",
    "location": "121 Út Tịch, Tân Bình, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20%C3%94ng%20Gi%C3%A0%202%20121%20%C3%9At%20T%E1%BB%8Bch%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Tân Bình. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Minh Khai 3",
    "type": "Đồ nướng",
    "location": "305 Út Tịch, Tân Bình, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20Minh%20Khai%203%20305%20%C3%9At%20T%E1%BB%8Bch%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Tân Bình. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Local Taste 4",
    "type": "Đồ nướng",
    "location": "145 Hoàng Văn Thụ, Tân Bình, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20Local%20Taste%204%20145%20Ho%C3%A0ng%20V%C4%83n%20Th%E1%BB%A5%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Tân Bình. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Hào Hùng 5",
    "type": "Đồ nướng",
    "location": "49 Út Tịch, Tân Bình, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20H%C3%A0o%20H%C3%B9ng%205%2049%20%C3%9At%20T%E1%BB%8Bch%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Tân Bình. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Nắng Vàng",
    "type": "Nước & Cafe",
    "location": "303 Lê Văn Sỹ, Tân Bình, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20N%E1%BA%AFng%20V%C3%A0ng%20303%20L%C3%AA%20V%C4%83n%20S%E1%BB%B9%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Tân Bình. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Nam Hải 2",
    "type": "Nước & Cafe",
    "location": "184 Cộng Hòa, Tân Bình, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20Nam%20H%E1%BA%A3i%202%20184%20C%E1%BB%99ng%20H%C3%B2a%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Tân Bình. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Đệ Nhất 3",
    "type": "Nước & Cafe",
    "location": "29 Lê Văn Sỹ, Tân Bình, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20%C4%90%E1%BB%87%20Nh%E1%BA%A5t%203%2029%20L%C3%AA%20V%C4%83n%20S%E1%BB%B9%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Tân Bình. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Minh Khai 4",
    "type": "Nước & Cafe",
    "location": "363 Hoàng Văn Thụ, Tân Bình, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20Minh%20Khai%204%20363%20Ho%C3%A0ng%20V%C4%83n%20Th%E1%BB%A5%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Tân Bình. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Hương Việt 5",
    "type": "Nước & Cafe",
    "location": "430 Út Tịch, Tân Bình, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20H%C6%B0%C6%A1ng%20Vi%E1%BB%87t%205%20430%20%C3%9At%20T%E1%BB%8Bch%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Tân Bình. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Cô Ba",
    "type": "Chè",
    "location": "84 Hoàng Văn Thụ, Tân Bình, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20C%C3%B4%20Ba%2084%20Ho%C3%A0ng%20V%C4%83n%20Th%E1%BB%A5%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Tân Bình. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Dì Liên 2",
    "type": "Chè",
    "location": "285 Cộng Hòa, Tân Bình, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20D%C3%AC%20Li%C3%AAn%202%20285%20C%E1%BB%99ng%20H%C3%B2a%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Tân Bình. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Local Taste 3",
    "type": "Chè",
    "location": "350 Cộng Hòa, Tân Bình, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20Local%20Taste%203%20350%20C%E1%BB%99ng%20H%C3%B2a%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Tân Bình. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Local Taste 4",
    "type": "Chè",
    "location": "479 Cộng Hòa, Tân Bình, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20Local%20Taste%204%20479%20C%E1%BB%99ng%20H%C3%B2a%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Tân Bình. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Đệ Nhất 5",
    "type": "Chè",
    "location": "299 Út Tịch, Tân Bình, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20%C4%90%E1%BB%87%20Nh%E1%BA%A5t%205%20299%20%C3%9At%20T%E1%BB%8Bch%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Tân Bình. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Anh Tư",
    "type": "Bánh xèo",
    "location": "199 Trường Chinh, Tân Bình, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20Anh%20T%C6%B0%20199%20Tr%C6%B0%E1%BB%9Dng%20Chinh%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Tân Bình. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Hào Hùng 2",
    "type": "Bánh xèo",
    "location": "405 Trường Chinh, Tân Bình, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20H%C3%A0o%20H%C3%B9ng%202%20405%20Tr%C6%B0%E1%BB%9Dng%20Chinh%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Tân Bình. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Nam Hải 3",
    "type": "Bánh xèo",
    "location": "231 Hoàng Văn Thụ, Tân Bình, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20Nam%20H%E1%BA%A3i%203%20231%20Ho%C3%A0ng%20V%C4%83n%20Th%E1%BB%A5%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Tân Bình. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Vĩnh Lộc 4",
    "type": "Bánh xèo",
    "location": "88 Út Tịch, Tân Bình, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20V%C4%A9nh%20L%E1%BB%99c%204%2088%20%C3%9At%20T%E1%BB%8Bch%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Tân Bình. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Đồng Quê 5",
    "type": "Bánh xèo",
    "location": "195 Trường Chinh, Tân Bình, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20%C4%90%E1%BB%93ng%20Qu%C3%AA%205%20195%20Tr%C6%B0%E1%BB%9Dng%20Chinh%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Tân Bình. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Nắng Vàng",
    "type": "Khác",
    "location": "397 Lê Văn Sỹ, Tân Bình, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20N%E1%BA%AFng%20V%C3%A0ng%20397%20L%C3%AA%20V%C4%83n%20S%E1%BB%B9%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Tân Bình. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Đệ Nhất 2",
    "type": "Khác",
    "location": "381 Hoàng Văn Thụ, Tân Bình, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20%C4%90%E1%BB%87%20Nh%E1%BA%A5t%202%20381%20Ho%C3%A0ng%20V%C4%83n%20Th%E1%BB%A5%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Tân Bình. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Đệ Nhất 3",
    "type": "Khác",
    "location": "171 Cộng Hòa, Tân Bình, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20%C4%90%E1%BB%87%20Nh%E1%BA%A5t%203%20171%20C%E1%BB%99ng%20H%C3%B2a%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Tân Bình. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Anh Tư 4",
    "type": "Khác",
    "location": "215 Cộng Hòa, Tân Bình, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20Anh%20T%C6%B0%204%20215%20C%E1%BB%99ng%20H%C3%B2a%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Tân Bình. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Kim Anh 5",
    "type": "Khác",
    "location": "300 Lê Văn Sỹ, Tân Bình, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20Kim%20Anh%205%20300%20L%C3%AA%20V%C4%83n%20S%E1%BB%B9%2C%20T%C3%A2n%20B%C3%ACnh%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Tân Bình. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Đệ Nhất",
    "type": "Phở",
    "location": "435 Vườn Lài, Tân Phú, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20%C4%90%E1%BB%87%20Nh%E1%BA%A5t%20435%20V%C6%B0%E1%BB%9Dn%20L%C3%A0i%2C%20T%C3%A2n%20Ph%C3%BA%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Tân Phú. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Đệ Nhất 2",
    "type": "Phở",
    "location": "110 Lũy Bán Bích, Tân Phú, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20%C4%90%E1%BB%87%20Nh%E1%BA%A5t%202%20110%20L%C5%A9y%20B%C3%A1n%20B%C3%ADch%2C%20T%C3%A2n%20Ph%C3%BA%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Tân Phú. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Cô Ba 3",
    "type": "Phở",
    "location": "23 Tân Sơn Nhì, Tân Phú, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20C%C3%B4%20Ba%203%2023%20T%C3%A2n%20S%C6%A1n%20Nh%C3%AC%2C%20T%C3%A2n%20Ph%C3%BA%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Tân Phú. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Ngọc Lan 4",
    "type": "Phở",
    "location": "442 Thạch Lam, Tân Phú, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20Ng%E1%BB%8Dc%20Lan%204%20442%20Th%E1%BA%A1ch%20Lam%2C%20T%C3%A2n%20Ph%C3%BA%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Tân Phú. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Ngọc Lan 5",
    "type": "Phở",
    "location": "146 Lũy Bán Bích, Tân Phú, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20Ng%E1%BB%8Dc%20Lan%205%20146%20L%C5%A9y%20B%C3%A1n%20B%C3%ADch%2C%20T%C3%A2n%20Ph%C3%BA%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Tân Phú. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Bến Thành",
    "type": "Bún",
    "location": "82 Vườn Lài, Tân Phú, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20B%E1%BA%BFn%20Th%C3%A0nh%2082%20V%C6%B0%E1%BB%9Dn%20L%C3%A0i%2C%20T%C3%A2n%20Ph%C3%BA%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Tân Phú. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Hương Việt 2",
    "type": "Bún",
    "location": "447 Tân Sơn Nhì, Tân Phú, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20H%C6%B0%C6%A1ng%20Vi%E1%BB%87t%202%20447%20T%C3%A2n%20S%C6%A1n%20Nh%C3%AC%2C%20T%C3%A2n%20Ph%C3%BA%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Tân Phú. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Ông Già 3",
    "type": "Bún",
    "location": "265 Thạch Lam, Tân Phú, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C3%94ng%20Gi%C3%A0%203%20265%20Th%E1%BA%A1ch%20Lam%2C%20T%C3%A2n%20Ph%C3%BA%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Tân Phú. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Sài Thành 4",
    "type": "Bún",
    "location": "49 Độc Lập, Tân Phú, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20S%C3%A0i%20Th%C3%A0nh%204%2049%20%C4%90%E1%BB%99c%20L%E1%BA%ADp%2C%20T%C3%A2n%20Ph%C3%BA%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Tân Phú. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Saigon Deli 5",
    "type": "Bún",
    "location": "154 Vườn Lài, Tân Phú, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20Saigon%20Deli%205%20154%20V%C6%B0%E1%BB%9Dn%20L%C3%A0i%2C%20T%C3%A2n%20Ph%C3%BA%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Tân Phú. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Nam Hải",
    "type": "Cơm",
    "location": "478 Thạch Lam, Tân Phú, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20Nam%20H%E1%BA%A3i%20478%20Th%E1%BA%A1ch%20Lam%2C%20T%C3%A2n%20Ph%C3%BA%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Tân Phú. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Đệ Nhất 2",
    "type": "Cơm",
    "location": "286 Độc Lập, Tân Phú, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20%C4%90%E1%BB%87%20Nh%E1%BA%A5t%202%20286%20%C4%90%E1%BB%99c%20L%E1%BA%ADp%2C%20T%C3%A2n%20Ph%C3%BA%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Tân Phú. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Hương Việt 3",
    "type": "Cơm",
    "location": "494 Độc Lập, Tân Phú, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20H%C6%B0%C6%A1ng%20Vi%E1%BB%87t%203%20494%20%C4%90%E1%BB%99c%20L%E1%BA%ADp%2C%20T%C3%A2n%20Ph%C3%BA%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Tân Phú. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Bến Thành 4",
    "type": "Cơm",
    "location": "334 Tân Sơn Nhì, Tân Phú, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20B%E1%BA%BFn%20Th%C3%A0nh%204%20334%20T%C3%A2n%20S%C6%A1n%20Nh%C3%AC%2C%20T%C3%A2n%20Ph%C3%BA%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Tân Phú. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Xưa & Nay 5",
    "type": "Cơm",
    "location": "400 Độc Lập, Tân Phú, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20X%C6%B0a%20%26%20Nay%205%20400%20%C4%90%E1%BB%99c%20L%E1%BA%ADp%2C%20T%C3%A2n%20Ph%C3%BA%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Tân Phú. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Hào Hùng",
    "type": "Lẩu",
    "location": "238 Độc Lập, Tân Phú, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20H%C3%A0o%20H%C3%B9ng%20238%20%C4%90%E1%BB%99c%20L%E1%BA%ADp%2C%20T%C3%A2n%20Ph%C3%BA%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Tân Phú. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Mưa Hồng 2",
    "type": "Lẩu",
    "location": "471 Độc Lập, Tân Phú, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20M%C6%B0a%20H%E1%BB%93ng%202%20471%20%C4%90%E1%BB%99c%20L%E1%BA%ADp%2C%20T%C3%A2n%20Ph%C3%BA%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Tân Phú. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Đồng Quê 3",
    "type": "Lẩu",
    "location": "12 Vườn Lài, Tân Phú, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20%C4%90%E1%BB%93ng%20Qu%C3%AA%203%2012%20V%C6%B0%E1%BB%9Dn%20L%C3%A0i%2C%20T%C3%A2n%20Ph%C3%BA%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Tân Phú. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Gia Đình 4",
    "type": "Lẩu",
    "location": "94 Lũy Bán Bích, Tân Phú, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20Gia%20%C4%90%C3%ACnh%204%2094%20L%C5%A9y%20B%C3%A1n%20B%C3%ADch%2C%20T%C3%A2n%20Ph%C3%BA%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Tân Phú. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Sông Trăng 5",
    "type": "Lẩu",
    "location": "211 Độc Lập, Tân Phú, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20S%C3%B4ng%20Tr%C4%83ng%205%20211%20%C4%90%E1%BB%99c%20L%E1%BA%ADp%2C%20T%C3%A2n%20Ph%C3%BA%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Tân Phú. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Ngọc Lan",
    "type": "Đồ chay",
    "location": "310 Vườn Lài, Tân Phú, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20Ng%E1%BB%8Dc%20Lan%20310%20V%C6%B0%E1%BB%9Dn%20L%C3%A0i%2C%20T%C3%A2n%20Ph%C3%BA%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Tân Phú. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Saigon Deli 2",
    "type": "Đồ chay",
    "location": "488 Vườn Lài, Tân Phú, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20Saigon%20Deli%202%20488%20V%C6%B0%E1%BB%9Dn%20L%C3%A0i%2C%20T%C3%A2n%20Ph%C3%BA%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Tân Phú. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Bến Thành 3",
    "type": "Đồ chay",
    "location": "427 Vườn Lài, Tân Phú, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20B%E1%BA%BFn%20Th%C3%A0nh%203%20427%20V%C6%B0%E1%BB%9Dn%20L%C3%A0i%2C%20T%C3%A2n%20Ph%C3%BA%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Tân Phú. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Ngọc Lan 4",
    "type": "Đồ chay",
    "location": "117 Độc Lập, Tân Phú, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20Ng%E1%BB%8Dc%20Lan%204%20117%20%C4%90%E1%BB%99c%20L%E1%BA%ADp%2C%20T%C3%A2n%20Ph%C3%BA%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Tân Phú. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Phố Hội 5",
    "type": "Đồ chay",
    "location": "190 Lũy Bán Bích, Tân Phú, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20Ph%E1%BB%91%20H%E1%BB%99i%205%20190%20L%C5%A9y%20B%C3%A1n%20B%C3%ADch%2C%20T%C3%A2n%20Ph%C3%BA%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Tân Phú. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Hoàn Kiếm",
    "type": "Bánh mì",
    "location": "247 Vườn Lài, Tân Phú, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20Ho%C3%A0n%20Ki%E1%BA%BFm%20247%20V%C6%B0%E1%BB%9Dn%20L%C3%A0i%2C%20T%C3%A2n%20Ph%C3%BA%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Tân Phú. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Xưa & Nay 2",
    "type": "Bánh mì",
    "location": "407 Tân Sơn Nhì, Tân Phú, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20X%C6%B0a%20%26%20Nay%202%20407%20T%C3%A2n%20S%C6%A1n%20Nh%C3%AC%2C%20T%C3%A2n%20Ph%C3%BA%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Tân Phú. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Đệ Nhất 3",
    "type": "Bánh mì",
    "location": "457 Độc Lập, Tân Phú, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20%C4%90%E1%BB%87%20Nh%E1%BA%A5t%203%20457%20%C4%90%E1%BB%99c%20L%E1%BA%ADp%2C%20T%C3%A2n%20Ph%C3%BA%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Tân Phú. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Hoàn Kiếm 4",
    "type": "Bánh mì",
    "location": "218 Vườn Lài, Tân Phú, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20Ho%C3%A0n%20Ki%E1%BA%BFm%204%20218%20V%C6%B0%E1%BB%9Dn%20L%C3%A0i%2C%20T%C3%A2n%20Ph%C3%BA%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Tân Phú. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Vĩnh Lộc 5",
    "type": "Bánh mì",
    "location": "113 Thạch Lam, Tân Phú, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20V%C4%A9nh%20L%E1%BB%99c%205%20113%20Th%E1%BA%A1ch%20Lam%2C%20T%C3%A2n%20Ph%C3%BA%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Tân Phú. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Sài Thành",
    "type": "Ăn vặt",
    "location": "396 Tân Sơn Nhì, Tân Phú, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20S%C3%A0i%20Th%C3%A0nh%20396%20T%C3%A2n%20S%C6%A1n%20Nh%C3%AC%2C%20T%C3%A2n%20Ph%C3%BA%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Tân Phú. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Vĩnh Lộc 2",
    "type": "Ăn vặt",
    "location": "73 Độc Lập, Tân Phú, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20V%C4%A9nh%20L%E1%BB%99c%202%2073%20%C4%90%E1%BB%99c%20L%E1%BA%ADp%2C%20T%C3%A2n%20Ph%C3%BA%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Tân Phú. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Vĩnh Lộc 3",
    "type": "Ăn vặt",
    "location": "69 Lũy Bán Bích, Tân Phú, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20V%C4%A9nh%20L%E1%BB%99c%203%2069%20L%C5%A9y%20B%C3%A1n%20B%C3%ADch%2C%20T%C3%A2n%20Ph%C3%BA%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Tân Phú. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Local Taste 4",
    "type": "Ăn vặt",
    "location": "106 Tân Sơn Nhì, Tân Phú, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20Local%20Taste%204%20106%20T%C3%A2n%20S%C6%A1n%20Nh%C3%AC%2C%20T%C3%A2n%20Ph%C3%BA%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Tân Phú. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Thanh Xuân 5",
    "type": "Ăn vặt",
    "location": "481 Tân Sơn Nhì, Tân Phú, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20Thanh%20Xu%C3%A2n%205%20481%20T%C3%A2n%20S%C6%A1n%20Nh%C3%AC%2C%20T%C3%A2n%20Ph%C3%BA%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Tân Phú. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Đồng Quê",
    "type": "Bánh cuốn",
    "location": "458 Thạch Lam, Tân Phú, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20%C4%90%E1%BB%93ng%20Qu%C3%AA%20458%20Th%E1%BA%A1ch%20Lam%2C%20T%C3%A2n%20Ph%C3%BA%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Tân Phú. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Thái Bình 2",
    "type": "Bánh cuốn",
    "location": "271 Lũy Bán Bích, Tân Phú, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20Th%C3%A1i%20B%C3%ACnh%202%20271%20L%C5%A9y%20B%C3%A1n%20B%C3%ADch%2C%20T%C3%A2n%20Ph%C3%BA%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Tân Phú. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Hương Việt 3",
    "type": "Bánh cuốn",
    "location": "172 Lũy Bán Bích, Tân Phú, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20H%C6%B0%C6%A1ng%20Vi%E1%BB%87t%203%20172%20L%C5%A9y%20B%C3%A1n%20B%C3%ADch%2C%20T%C3%A2n%20Ph%C3%BA%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Tân Phú. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Hương Việt 4",
    "type": "Bánh cuốn",
    "location": "445 Lũy Bán Bích, Tân Phú, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20H%C6%B0%C6%A1ng%20Vi%E1%BB%87t%204%20445%20L%C5%A9y%20B%C3%A1n%20B%C3%ADch%2C%20T%C3%A2n%20Ph%C3%BA%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Tân Phú. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Đông Á 5",
    "type": "Bánh cuốn",
    "location": "416 Độc Lập, Tân Phú, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20%C4%90%C3%B4ng%20%C3%81%205%20416%20%C4%90%E1%BB%99c%20L%E1%BA%ADp%2C%20T%C3%A2n%20Ph%C3%BA%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Tân Phú. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Minh Khai",
    "type": "Bún đậu",
    "location": "10 Thạch Lam, Tân Phú, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20Minh%20Khai%2010%20Th%E1%BA%A1ch%20Lam%2C%20T%C3%A2n%20Ph%C3%BA%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Tân Phú. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Bến Thành 2",
    "type": "Bún đậu",
    "location": "178 Lũy Bán Bích, Tân Phú, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20B%E1%BA%BFn%20Th%C3%A0nh%202%20178%20L%C5%A9y%20B%C3%A1n%20B%C3%ADch%2C%20T%C3%A2n%20Ph%C3%BA%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Tân Phú. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Xưa & Nay 3",
    "type": "Bún đậu",
    "location": "148 Tân Sơn Nhì, Tân Phú, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20X%C6%B0a%20%26%20Nay%203%20148%20T%C3%A2n%20S%C6%A1n%20Nh%C3%AC%2C%20T%C3%A2n%20Ph%C3%BA%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Tân Phú. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Kim Anh 4",
    "type": "Bún đậu",
    "location": "30 Thạch Lam, Tân Phú, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20Kim%20Anh%204%2030%20Th%E1%BA%A1ch%20Lam%2C%20T%C3%A2n%20Ph%C3%BA%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Tân Phú. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Vĩnh Lộc 5",
    "type": "Bún đậu",
    "location": "134 Tân Sơn Nhì, Tân Phú, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20V%C4%A9nh%20L%E1%BB%99c%205%20134%20T%C3%A2n%20S%C6%A1n%20Nh%C3%AC%2C%20T%C3%A2n%20Ph%C3%BA%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Tân Phú. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Chú Bảy",
    "type": "Hải sản",
    "location": "349 Độc Lập, Tân Phú, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20Ch%C3%BA%20B%E1%BA%A3y%20349%20%C4%90%E1%BB%99c%20L%E1%BA%ADp%2C%20T%C3%A2n%20Ph%C3%BA%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Tân Phú. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Minh Khai 2",
    "type": "Hải sản",
    "location": "134 Lũy Bán Bích, Tân Phú, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20Minh%20Khai%202%20134%20L%C5%A9y%20B%C3%A1n%20B%C3%ADch%2C%20T%C3%A2n%20Ph%C3%BA%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Tân Phú. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Đông Á 3",
    "type": "Hải sản",
    "location": "366 Độc Lập, Tân Phú, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20%C4%90%C3%B4ng%20%C3%81%203%20366%20%C4%90%E1%BB%99c%20L%E1%BA%ADp%2C%20T%C3%A2n%20Ph%C3%BA%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Tân Phú. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Vĩnh Lộc 4",
    "type": "Hải sản",
    "location": "418 Tân Sơn Nhì, Tân Phú, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20V%C4%A9nh%20L%E1%BB%99c%204%20418%20T%C3%A2n%20S%C6%A1n%20Nh%C3%AC%2C%20T%C3%A2n%20Ph%C3%BA%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Tân Phú. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Bến Thành 5",
    "type": "Hải sản",
    "location": "320 Tân Sơn Nhì, Tân Phú, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20B%E1%BA%BFn%20Th%C3%A0nh%205%20320%20T%C3%A2n%20S%C6%A1n%20Nh%C3%AC%2C%20T%C3%A2n%20Ph%C3%BA%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Tân Phú. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Anh Tư",
    "type": "Ốc",
    "location": "199 Thạch Lam, Tân Phú, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20Anh%20T%C6%B0%20199%20Th%E1%BA%A1ch%20Lam%2C%20T%C3%A2n%20Ph%C3%BA%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Tân Phú. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Sài Thành 2",
    "type": "Ốc",
    "location": "430 Thạch Lam, Tân Phú, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20S%C3%A0i%20Th%C3%A0nh%202%20430%20Th%E1%BA%A1ch%20Lam%2C%20T%C3%A2n%20Ph%C3%BA%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Tân Phú. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Kim Anh 3",
    "type": "Ốc",
    "location": "132 Vườn Lài, Tân Phú, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20Kim%20Anh%203%20132%20V%C6%B0%E1%BB%9Dn%20L%C3%A0i%2C%20T%C3%A2n%20Ph%C3%BA%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Tân Phú. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Đồng Quê 4",
    "type": "Ốc",
    "location": "274 Độc Lập, Tân Phú, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20%C4%90%E1%BB%93ng%20Qu%C3%AA%204%20274%20%C4%90%E1%BB%99c%20L%E1%BA%ADp%2C%20T%C3%A2n%20Ph%C3%BA%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Tân Phú. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Bà Năm 5",
    "type": "Ốc",
    "location": "227 Lũy Bán Bích, Tân Phú, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20B%C3%A0%20N%C4%83m%205%20227%20L%C5%A9y%20B%C3%A1n%20B%C3%ADch%2C%20T%C3%A2n%20Ph%C3%BA%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Tân Phú. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Minh Khai",
    "type": "Mì",
    "location": "4 Lũy Bán Bích, Tân Phú, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20Minh%20Khai%204%20L%C5%A9y%20B%C3%A1n%20B%C3%ADch%2C%20T%C3%A2n%20Ph%C3%BA%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Tân Phú. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Nắng Vàng 2",
    "type": "Mì",
    "location": "494 Tân Sơn Nhì, Tân Phú, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20N%E1%BA%AFng%20V%C3%A0ng%202%20494%20T%C3%A2n%20S%C6%A1n%20Nh%C3%AC%2C%20T%C3%A2n%20Ph%C3%BA%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Tân Phú. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Sông Trăng 3",
    "type": "Mì",
    "location": "140 Độc Lập, Tân Phú, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20S%C3%B4ng%20Tr%C4%83ng%203%20140%20%C4%90%E1%BB%99c%20L%E1%BA%ADp%2C%20T%C3%A2n%20Ph%C3%BA%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Tân Phú. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Ông Già 4",
    "type": "Mì",
    "location": "173 Độc Lập, Tân Phú, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20%C3%94ng%20Gi%C3%A0%204%20173%20%C4%90%E1%BB%99c%20L%E1%BA%ADp%2C%20T%C3%A2n%20Ph%C3%BA%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Tân Phú. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Anh Tư 5",
    "type": "Mì",
    "location": "59 Vườn Lài, Tân Phú, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20Anh%20T%C6%B0%205%2059%20V%C6%B0%E1%BB%9Dn%20L%C3%A0i%2C%20T%C3%A2n%20Ph%C3%BA%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Tân Phú. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Đệ Nhất",
    "type": "Hủ tiếu",
    "location": "442 Độc Lập, Tân Phú, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20%C4%90%E1%BB%87%20Nh%E1%BA%A5t%20442%20%C4%90%E1%BB%99c%20L%E1%BA%ADp%2C%20T%C3%A2n%20Ph%C3%BA%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Tân Phú. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Hồng Phát 2",
    "type": "Hủ tiếu",
    "location": "276 Tân Sơn Nhì, Tân Phú, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20H%E1%BB%93ng%20Ph%C3%A1t%202%20276%20T%C3%A2n%20S%C6%A1n%20Nh%C3%AC%2C%20T%C3%A2n%20Ph%C3%BA%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Tân Phú. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Nam Hải 3",
    "type": "Hủ tiếu",
    "location": "385 Vườn Lài, Tân Phú, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20Nam%20H%E1%BA%A3i%203%20385%20V%C6%B0%E1%BB%9Dn%20L%C3%A0i%2C%20T%C3%A2n%20Ph%C3%BA%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Tân Phú. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Dì Liên 4",
    "type": "Hủ tiếu",
    "location": "248 Lũy Bán Bích, Tân Phú, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20D%C3%AC%20Li%C3%AAn%204%20248%20L%C5%A9y%20B%C3%A1n%20B%C3%ADch%2C%20T%C3%A2n%20Ph%C3%BA%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Tân Phú. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Hồng Phát 5",
    "type": "Hủ tiếu",
    "location": "69 Độc Lập, Tân Phú, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20H%E1%BB%93ng%20Ph%C3%A1t%205%2069%20%C4%90%E1%BB%99c%20L%E1%BA%ADp%2C%20T%C3%A2n%20Ph%C3%BA%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Tân Phú. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Gia Đình",
    "type": "Đồ nướng",
    "location": "205 Độc Lập, Tân Phú, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20Gia%20%C4%90%C3%ACnh%20205%20%C4%90%E1%BB%99c%20L%E1%BA%ADp%2C%20T%C3%A2n%20Ph%C3%BA%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Tân Phú. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Ông Già 2",
    "type": "Đồ nướng",
    "location": "119 Thạch Lam, Tân Phú, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20%C3%94ng%20Gi%C3%A0%202%20119%20Th%E1%BA%A1ch%20Lam%2C%20T%C3%A2n%20Ph%C3%BA%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Tân Phú. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Đồng Quê 3",
    "type": "Đồ nướng",
    "location": "376 Thạch Lam, Tân Phú, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20%C4%90%E1%BB%93ng%20Qu%C3%AA%203%20376%20Th%E1%BA%A1ch%20Lam%2C%20T%C3%A2n%20Ph%C3%BA%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Tân Phú. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Chú Bảy 4",
    "type": "Đồ nướng",
    "location": "471 Độc Lập, Tân Phú, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20Ch%C3%BA%20B%E1%BA%A3y%204%20471%20%C4%90%E1%BB%99c%20L%E1%BA%ADp%2C%20T%C3%A2n%20Ph%C3%BA%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Tân Phú. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Cô Ba 5",
    "type": "Đồ nướng",
    "location": "140 Độc Lập, Tân Phú, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20C%C3%B4%20Ba%205%20140%20%C4%90%E1%BB%99c%20L%E1%BA%ADp%2C%20T%C3%A2n%20Ph%C3%BA%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Tân Phú. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Dì Liên",
    "type": "Nước & Cafe",
    "location": "97 Tân Sơn Nhì, Tân Phú, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20D%C3%AC%20Li%C3%AAn%2097%20T%C3%A2n%20S%C6%A1n%20Nh%C3%AC%2C%20T%C3%A2n%20Ph%C3%BA%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Tân Phú. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Cô Ba 2",
    "type": "Nước & Cafe",
    "location": "94 Tân Sơn Nhì, Tân Phú, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20C%C3%B4%20Ba%202%2094%20T%C3%A2n%20S%C6%A1n%20Nh%C3%AC%2C%20T%C3%A2n%20Ph%C3%BA%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Tân Phú. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Saigon Deli 3",
    "type": "Nước & Cafe",
    "location": "323 Vườn Lài, Tân Phú, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20Saigon%20Deli%203%20323%20V%C6%B0%E1%BB%9Dn%20L%C3%A0i%2C%20T%C3%A2n%20Ph%C3%BA%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Tân Phú. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Bà Năm 4",
    "type": "Nước & Cafe",
    "location": "28 Vườn Lài, Tân Phú, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20B%C3%A0%20N%C4%83m%204%2028%20V%C6%B0%E1%BB%9Dn%20L%C3%A0i%2C%20T%C3%A2n%20Ph%C3%BA%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Tân Phú. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Sài Thành 5",
    "type": "Nước & Cafe",
    "location": "149 Vườn Lài, Tân Phú, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20S%C3%A0i%20Th%C3%A0nh%205%20149%20V%C6%B0%E1%BB%9Dn%20L%C3%A0i%2C%20T%C3%A2n%20Ph%C3%BA%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Tân Phú. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Đồng Quê",
    "type": "Chè",
    "location": "228 Độc Lập, Tân Phú, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20%C4%90%E1%BB%93ng%20Qu%C3%AA%20228%20%C4%90%E1%BB%99c%20L%E1%BA%ADp%2C%20T%C3%A2n%20Ph%C3%BA%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Tân Phú. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Hào Hùng 2",
    "type": "Chè",
    "location": "370 Lũy Bán Bích, Tân Phú, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20H%C3%A0o%20H%C3%B9ng%202%20370%20L%C5%A9y%20B%C3%A1n%20B%C3%ADch%2C%20T%C3%A2n%20Ph%C3%BA%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Tân Phú. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Cô Ba 3",
    "type": "Chè",
    "location": "384 Thạch Lam, Tân Phú, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20C%C3%B4%20Ba%203%20384%20Th%E1%BA%A1ch%20Lam%2C%20T%C3%A2n%20Ph%C3%BA%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Tân Phú. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Hoàn Kiếm 4",
    "type": "Chè",
    "location": "456 Độc Lập, Tân Phú, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20Ho%C3%A0n%20Ki%E1%BA%BFm%204%20456%20%C4%90%E1%BB%99c%20L%E1%BA%ADp%2C%20T%C3%A2n%20Ph%C3%BA%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Tân Phú. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Sông Trăng 5",
    "type": "Chè",
    "location": "326 Độc Lập, Tân Phú, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20S%C3%B4ng%20Tr%C4%83ng%205%20326%20%C4%90%E1%BB%99c%20L%E1%BA%ADp%2C%20T%C3%A2n%20Ph%C3%BA%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Tân Phú. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Nắng Vàng",
    "type": "Bánh xèo",
    "location": "471 Lũy Bán Bích, Tân Phú, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20N%E1%BA%AFng%20V%C3%A0ng%20471%20L%C5%A9y%20B%C3%A1n%20B%C3%ADch%2C%20T%C3%A2n%20Ph%C3%BA%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Tân Phú. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Anh Tư 2",
    "type": "Bánh xèo",
    "location": "186 Tân Sơn Nhì, Tân Phú, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20Anh%20T%C6%B0%202%20186%20T%C3%A2n%20S%C6%A1n%20Nh%C3%AC%2C%20T%C3%A2n%20Ph%C3%BA%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Tân Phú. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Ngọc Lan 3",
    "type": "Bánh xèo",
    "location": "33 Độc Lập, Tân Phú, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20Ng%E1%BB%8Dc%20Lan%203%2033%20%C4%90%E1%BB%99c%20L%E1%BA%ADp%2C%20T%C3%A2n%20Ph%C3%BA%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Tân Phú. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Hoàn Kiếm 4",
    "type": "Bánh xèo",
    "location": "70 Thạch Lam, Tân Phú, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20Ho%C3%A0n%20Ki%E1%BA%BFm%204%2070%20Th%E1%BA%A1ch%20Lam%2C%20T%C3%A2n%20Ph%C3%BA%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Tân Phú. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Kim Anh 5",
    "type": "Bánh xèo",
    "location": "459 Độc Lập, Tân Phú, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20Kim%20Anh%205%20459%20%C4%90%E1%BB%99c%20L%E1%BA%ADp%2C%20T%C3%A2n%20Ph%C3%BA%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Tân Phú. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Nắng Vàng",
    "type": "Khác",
    "location": "338 Vườn Lài, Tân Phú, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20N%E1%BA%AFng%20V%C3%A0ng%20338%20V%C6%B0%E1%BB%9Dn%20L%C3%A0i%2C%20T%C3%A2n%20Ph%C3%BA%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Tân Phú. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Sông Trăng 2",
    "type": "Khác",
    "location": "80 Lũy Bán Bích, Tân Phú, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20S%C3%B4ng%20Tr%C4%83ng%202%2080%20L%C5%A9y%20B%C3%A1n%20B%C3%ADch%2C%20T%C3%A2n%20Ph%C3%BA%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Tân Phú. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Ngọc Lan 3",
    "type": "Khác",
    "location": "473 Thạch Lam, Tân Phú, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20Ng%E1%BB%8Dc%20Lan%203%20473%20Th%E1%BA%A1ch%20Lam%2C%20T%C3%A2n%20Ph%C3%BA%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Tân Phú. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Đồng Quê 4",
    "type": "Khác",
    "location": "463 Thạch Lam, Tân Phú, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20%C4%90%E1%BB%93ng%20Qu%C3%AA%204%20463%20Th%E1%BA%A1ch%20Lam%2C%20T%C3%A2n%20Ph%C3%BA%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Tân Phú. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Thái Bình 5",
    "type": "Khác",
    "location": "302 Lũy Bán Bích, Tân Phú, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20Th%C3%A1i%20B%C3%ACnh%205%20302%20L%C5%A9y%20B%C3%A1n%20B%C3%ADch%2C%20T%C3%A2n%20Ph%C3%BA%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Tân Phú. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Cô Ba",
    "type": "Phở",
    "location": "66 Đường số 7, Bình Tân, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20C%C3%B4%20Ba%2066%20%C4%90%C6%B0%E1%BB%9Dng%20s%E1%BB%91%207%2C%20B%C3%ACnh%20T%C3%A2n%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Bình Tân. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Ngọc Lan 2",
    "type": "Phở",
    "location": "14 Tân Kỳ Tân Quý, Bình Tân, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20Ng%E1%BB%8Dc%20Lan%202%2014%20T%C3%A2n%20K%E1%BB%B3%20T%C3%A2n%20Qu%C3%BD%2C%20B%C3%ACnh%20T%C3%A2n%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Bình Tân. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Đồng Quê 3",
    "type": "Phở",
    "location": "176 Kinh Dương Vương, Bình Tân, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20%C4%90%E1%BB%93ng%20Qu%C3%AA%203%20176%20Kinh%20D%C6%B0%C6%A1ng%20V%C6%B0%C6%A1ng%2C%20B%C3%ACnh%20T%C3%A2n%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Bình Tân. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Đông Á 4",
    "type": "Phở",
    "location": "72 Kinh Dương Vương, Bình Tân, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20%C4%90%C3%B4ng%20%C3%81%204%2072%20Kinh%20D%C6%B0%C6%A1ng%20V%C6%B0%C6%A1ng%2C%20B%C3%ACnh%20T%C3%A2n%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Bình Tân. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Cô Ba 5",
    "type": "Phở",
    "location": "202 Đường số 7, Bình Tân, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20C%C3%B4%20Ba%205%20202%20%C4%90%C6%B0%E1%BB%9Dng%20s%E1%BB%91%207%2C%20B%C3%ACnh%20T%C3%A2n%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Bình Tân. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Viet Kitchen",
    "type": "Bún",
    "location": "102 Tên Lửa, Bình Tân, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20Viet%20Kitchen%20102%20T%C3%AAn%20L%E1%BB%ADa%2C%20B%C3%ACnh%20T%C3%A2n%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Bình Tân. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Sài Thành 2",
    "type": "Bún",
    "location": "72 Đường số 7, Bình Tân, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20S%C3%A0i%20Th%C3%A0nh%202%2072%20%C4%90%C6%B0%E1%BB%9Dng%20s%E1%BB%91%207%2C%20B%C3%ACnh%20T%C3%A2n%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Bình Tân. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Xưa & Nay 3",
    "type": "Bún",
    "location": "190 Đường số 7, Bình Tân, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20X%C6%B0a%20%26%20Nay%203%20190%20%C4%90%C6%B0%E1%BB%9Dng%20s%E1%BB%91%207%2C%20B%C3%ACnh%20T%C3%A2n%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Bình Tân. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Dì Liên 4",
    "type": "Bún",
    "location": "465 Mã Lò, Bình Tân, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20D%C3%AC%20Li%C3%AAn%204%20465%20M%C3%A3%20L%C3%B2%2C%20B%C3%ACnh%20T%C3%A2n%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Bình Tân. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Local Taste 5",
    "type": "Bún",
    "location": "429 Kinh Dương Vương, Bình Tân, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20Local%20Taste%205%20429%20Kinh%20D%C6%B0%C6%A1ng%20V%C6%B0%C6%A1ng%2C%20B%C3%ACnh%20T%C3%A2n%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Bình Tân. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Kim Anh",
    "type": "Cơm",
    "location": "187 Đường số 7, Bình Tân, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20Kim%20Anh%20187%20%C4%90%C6%B0%E1%BB%9Dng%20s%E1%BB%91%207%2C%20B%C3%ACnh%20T%C3%A2n%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Bình Tân. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Gia Đình 2",
    "type": "Cơm",
    "location": "470 Tên Lửa, Bình Tân, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20Gia%20%C4%90%C3%ACnh%202%20470%20T%C3%AAn%20L%E1%BB%ADa%2C%20B%C3%ACnh%20T%C3%A2n%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Bình Tân. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Gia Đình 3",
    "type": "Cơm",
    "location": "312 Kinh Dương Vương, Bình Tân, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20Gia%20%C4%90%C3%ACnh%203%20312%20Kinh%20D%C6%B0%C6%A1ng%20V%C6%B0%C6%A1ng%2C%20B%C3%ACnh%20T%C3%A2n%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Bình Tân. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Đồng Quê 4",
    "type": "Cơm",
    "location": "196 Tân Kỳ Tân Quý, Bình Tân, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20%C4%90%E1%BB%93ng%20Qu%C3%AA%204%20196%20T%C3%A2n%20K%E1%BB%B3%20T%C3%A2n%20Qu%C3%BD%2C%20B%C3%ACnh%20T%C3%A2n%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Bình Tân. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Chú Bảy 5",
    "type": "Cơm",
    "location": "278 Tên Lửa, Bình Tân, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20Ch%C3%BA%20B%E1%BA%A3y%205%20278%20T%C3%AAn%20L%E1%BB%ADa%2C%20B%C3%ACnh%20T%C3%A2n%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Bình Tân. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Thái Bình",
    "type": "Lẩu",
    "location": "5 Tân Kỳ Tân Quý, Bình Tân, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20Th%C3%A1i%20B%C3%ACnh%205%20T%C3%A2n%20K%E1%BB%B3%20T%C3%A2n%20Qu%C3%BD%2C%20B%C3%ACnh%20T%C3%A2n%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Bình Tân. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Ông Già 2",
    "type": "Lẩu",
    "location": "458 Tên Lửa, Bình Tân, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20%C3%94ng%20Gi%C3%A0%202%20458%20T%C3%AAn%20L%E1%BB%ADa%2C%20B%C3%ACnh%20T%C3%A2n%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Bình Tân. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Hồng Phát 3",
    "type": "Lẩu",
    "location": "419 Đường số 7, Bình Tân, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20H%E1%BB%93ng%20Ph%C3%A1t%203%20419%20%C4%90%C6%B0%E1%BB%9Dng%20s%E1%BB%91%207%2C%20B%C3%ACnh%20T%C3%A2n%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Bình Tân. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Viet Kitchen 4",
    "type": "Lẩu",
    "location": "91 Tân Kỳ Tân Quý, Bình Tân, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20Viet%20Kitchen%204%2091%20T%C3%A2n%20K%E1%BB%B3%20T%C3%A2n%20Qu%C3%BD%2C%20B%C3%ACnh%20T%C3%A2n%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Bình Tân. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Cô Ba 5",
    "type": "Lẩu",
    "location": "19 Mã Lò, Bình Tân, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20C%C3%B4%20Ba%205%2019%20M%C3%A3%20L%C3%B2%2C%20B%C3%ACnh%20T%C3%A2n%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Bình Tân. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Anh Tư",
    "type": "Đồ chay",
    "location": "384 Mã Lò, Bình Tân, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20Anh%20T%C6%B0%20384%20M%C3%A3%20L%C3%B2%2C%20B%C3%ACnh%20T%C3%A2n%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Bình Tân. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Anh Tư 2",
    "type": "Đồ chay",
    "location": "92 Mã Lò, Bình Tân, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20Anh%20T%C6%B0%202%2092%20M%C3%A3%20L%C3%B2%2C%20B%C3%ACnh%20T%C3%A2n%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Bình Tân. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Đệ Nhất 3",
    "type": "Đồ chay",
    "location": "98 Tân Kỳ Tân Quý, Bình Tân, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20%C4%90%E1%BB%87%20Nh%E1%BA%A5t%203%2098%20T%C3%A2n%20K%E1%BB%B3%20T%C3%A2n%20Qu%C3%BD%2C%20B%C3%ACnh%20T%C3%A2n%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Bình Tân. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Sài Thành 4",
    "type": "Đồ chay",
    "location": "446 Đường số 7, Bình Tân, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20S%C3%A0i%20Th%C3%A0nh%204%20446%20%C4%90%C6%B0%E1%BB%9Dng%20s%E1%BB%91%207%2C%20B%C3%ACnh%20T%C3%A2n%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Bình Tân. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Phố Hội 5",
    "type": "Đồ chay",
    "location": "74 Tên Lửa, Bình Tân, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20Ph%E1%BB%91%20H%E1%BB%99i%205%2074%20T%C3%AAn%20L%E1%BB%ADa%2C%20B%C3%ACnh%20T%C3%A2n%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Bình Tân. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Anh Tư",
    "type": "Bánh mì",
    "location": "52 Tên Lửa, Bình Tân, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20Anh%20T%C6%B0%2052%20T%C3%AAn%20L%E1%BB%ADa%2C%20B%C3%ACnh%20T%C3%A2n%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Bình Tân. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Hương Việt 2",
    "type": "Bánh mì",
    "location": "436 Đường số 7, Bình Tân, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20H%C6%B0%C6%A1ng%20Vi%E1%BB%87t%202%20436%20%C4%90%C6%B0%E1%BB%9Dng%20s%E1%BB%91%207%2C%20B%C3%ACnh%20T%C3%A2n%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Bình Tân. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Nam Hải 3",
    "type": "Bánh mì",
    "location": "459 Tên Lửa, Bình Tân, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20Nam%20H%E1%BA%A3i%203%20459%20T%C3%AAn%20L%E1%BB%ADa%2C%20B%C3%ACnh%20T%C3%A2n%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Bình Tân. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Hương Việt 4",
    "type": "Bánh mì",
    "location": "132 Kinh Dương Vương, Bình Tân, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20H%C6%B0%C6%A1ng%20Vi%E1%BB%87t%204%20132%20Kinh%20D%C6%B0%C6%A1ng%20V%C6%B0%C6%A1ng%2C%20B%C3%ACnh%20T%C3%A2n%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Bình Tân. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Hào Hùng 5",
    "type": "Bánh mì",
    "location": "105 Đường số 7, Bình Tân, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20H%C3%A0o%20H%C3%B9ng%205%20105%20%C4%90%C6%B0%E1%BB%9Dng%20s%E1%BB%91%207%2C%20B%C3%ACnh%20T%C3%A2n%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Bình Tân. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Ngọc Lan",
    "type": "Ăn vặt",
    "location": "151 Kinh Dương Vương, Bình Tân, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20Ng%E1%BB%8Dc%20Lan%20151%20Kinh%20D%C6%B0%C6%A1ng%20V%C6%B0%C6%A1ng%2C%20B%C3%ACnh%20T%C3%A2n%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Bình Tân. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Bến Thành 2",
    "type": "Ăn vặt",
    "location": "288 Tân Kỳ Tân Quý, Bình Tân, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20B%E1%BA%BFn%20Th%C3%A0nh%202%20288%20T%C3%A2n%20K%E1%BB%B3%20T%C3%A2n%20Qu%C3%BD%2C%20B%C3%ACnh%20T%C3%A2n%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Bình Tân. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Phố Hội 3",
    "type": "Ăn vặt",
    "location": "47 Đường số 7, Bình Tân, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20Ph%E1%BB%91%20H%E1%BB%99i%203%2047%20%C4%90%C6%B0%E1%BB%9Dng%20s%E1%BB%91%207%2C%20B%C3%ACnh%20T%C3%A2n%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Bình Tân. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Nam Hải 4",
    "type": "Ăn vặt",
    "location": "452 Tân Kỳ Tân Quý, Bình Tân, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20Nam%20H%E1%BA%A3i%204%20452%20T%C3%A2n%20K%E1%BB%B3%20T%C3%A2n%20Qu%C3%BD%2C%20B%C3%ACnh%20T%C3%A2n%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Bình Tân. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Xưa & Nay 5",
    "type": "Ăn vặt",
    "location": "20 Tân Kỳ Tân Quý, Bình Tân, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20X%C6%B0a%20%26%20Nay%205%2020%20T%C3%A2n%20K%E1%BB%B3%20T%C3%A2n%20Qu%C3%BD%2C%20B%C3%ACnh%20T%C3%A2n%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Bình Tân. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Mưa Hồng",
    "type": "Bánh cuốn",
    "location": "313 Kinh Dương Vương, Bình Tân, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20M%C6%B0a%20H%E1%BB%93ng%20313%20Kinh%20D%C6%B0%C6%A1ng%20V%C6%B0%C6%A1ng%2C%20B%C3%ACnh%20T%C3%A2n%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Bình Tân. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Local Taste 2",
    "type": "Bánh cuốn",
    "location": "318 Kinh Dương Vương, Bình Tân, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20Local%20Taste%202%20318%20Kinh%20D%C6%B0%C6%A1ng%20V%C6%B0%C6%A1ng%2C%20B%C3%ACnh%20T%C3%A2n%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Bình Tân. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Mưa Hồng 3",
    "type": "Bánh cuốn",
    "location": "395 Tên Lửa, Bình Tân, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20M%C6%B0a%20H%E1%BB%93ng%203%20395%20T%C3%AAn%20L%E1%BB%ADa%2C%20B%C3%ACnh%20T%C3%A2n%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Bình Tân. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Dì Liên 4",
    "type": "Bánh cuốn",
    "location": "405 Tân Kỳ Tân Quý, Bình Tân, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20D%C3%AC%20Li%C3%AAn%204%20405%20T%C3%A2n%20K%E1%BB%B3%20T%C3%A2n%20Qu%C3%BD%2C%20B%C3%ACnh%20T%C3%A2n%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Bình Tân. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Chú Bảy 5",
    "type": "Bánh cuốn",
    "location": "396 Mã Lò, Bình Tân, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20Ch%C3%BA%20B%E1%BA%A3y%205%20396%20M%C3%A3%20L%C3%B2%2C%20B%C3%ACnh%20T%C3%A2n%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Bình Tân. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Bến Thành",
    "type": "Bún đậu",
    "location": "307 Tân Kỳ Tân Quý, Bình Tân, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20B%E1%BA%BFn%20Th%C3%A0nh%20307%20T%C3%A2n%20K%E1%BB%B3%20T%C3%A2n%20Qu%C3%BD%2C%20B%C3%ACnh%20T%C3%A2n%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Bình Tân. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Hồng Phát 2",
    "type": "Bún đậu",
    "location": "428 Mã Lò, Bình Tân, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20H%E1%BB%93ng%20Ph%C3%A1t%202%20428%20M%C3%A3%20L%C3%B2%2C%20B%C3%ACnh%20T%C3%A2n%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Bình Tân. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Dì Liên 3",
    "type": "Bún đậu",
    "location": "395 Đường số 7, Bình Tân, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20D%C3%AC%20Li%C3%AAn%203%20395%20%C4%90%C6%B0%E1%BB%9Dng%20s%E1%BB%91%207%2C%20B%C3%ACnh%20T%C3%A2n%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Bình Tân. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Local Taste 4",
    "type": "Bún đậu",
    "location": "457 Tên Lửa, Bình Tân, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20Local%20Taste%204%20457%20T%C3%AAn%20L%E1%BB%ADa%2C%20B%C3%ACnh%20T%C3%A2n%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Bình Tân. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Sài Thành 5",
    "type": "Bún đậu",
    "location": "209 Mã Lò, Bình Tân, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20S%C3%A0i%20Th%C3%A0nh%205%20209%20M%C3%A3%20L%C3%B2%2C%20B%C3%ACnh%20T%C3%A2n%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Bình Tân. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Local Taste",
    "type": "Hải sản",
    "location": "444 Tân Kỳ Tân Quý, Bình Tân, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20Local%20Taste%20444%20T%C3%A2n%20K%E1%BB%B3%20T%C3%A2n%20Qu%C3%BD%2C%20B%C3%ACnh%20T%C3%A2n%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Bình Tân. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Nắng Vàng 2",
    "type": "Hải sản",
    "location": "280 Đường số 7, Bình Tân, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20N%E1%BA%AFng%20V%C3%A0ng%202%20280%20%C4%90%C6%B0%E1%BB%9Dng%20s%E1%BB%91%207%2C%20B%C3%ACnh%20T%C3%A2n%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Bình Tân. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Bà Năm 3",
    "type": "Hải sản",
    "location": "57 Đường số 7, Bình Tân, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20B%C3%A0%20N%C4%83m%203%2057%20%C4%90%C6%B0%E1%BB%9Dng%20s%E1%BB%91%207%2C%20B%C3%ACnh%20T%C3%A2n%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Bình Tân. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Đồng Quê 4",
    "type": "Hải sản",
    "location": "254 Tên Lửa, Bình Tân, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20%C4%90%E1%BB%93ng%20Qu%C3%AA%204%20254%20T%C3%AAn%20L%E1%BB%ADa%2C%20B%C3%ACnh%20T%C3%A2n%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Bình Tân. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Cô Ba 5",
    "type": "Hải sản",
    "location": "161 Kinh Dương Vương, Bình Tân, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20C%C3%B4%20Ba%205%20161%20Kinh%20D%C6%B0%C6%A1ng%20V%C6%B0%C6%A1ng%2C%20B%C3%ACnh%20T%C3%A2n%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Bình Tân. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Hương Việt",
    "type": "Ốc",
    "location": "97 Kinh Dương Vương, Bình Tân, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20H%C6%B0%C6%A1ng%20Vi%E1%BB%87t%2097%20Kinh%20D%C6%B0%C6%A1ng%20V%C6%B0%C6%A1ng%2C%20B%C3%ACnh%20T%C3%A2n%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Bình Tân. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Gia Đình 2",
    "type": "Ốc",
    "location": "325 Tân Kỳ Tân Quý, Bình Tân, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20Gia%20%C4%90%C3%ACnh%202%20325%20T%C3%A2n%20K%E1%BB%B3%20T%C3%A2n%20Qu%C3%BD%2C%20B%C3%ACnh%20T%C3%A2n%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Bình Tân. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Đông Á 3",
    "type": "Ốc",
    "location": "420 Tân Kỳ Tân Quý, Bình Tân, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20%C4%90%C3%B4ng%20%C3%81%203%20420%20T%C3%A2n%20K%E1%BB%B3%20T%C3%A2n%20Qu%C3%BD%2C%20B%C3%ACnh%20T%C3%A2n%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Bình Tân. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Anh Tư 4",
    "type": "Ốc",
    "location": "150 Kinh Dương Vương, Bình Tân, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20Anh%20T%C6%B0%204%20150%20Kinh%20D%C6%B0%C6%A1ng%20V%C6%B0%C6%A1ng%2C%20B%C3%ACnh%20T%C3%A2n%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Bình Tân. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Đồng Quê 5",
    "type": "Ốc",
    "location": "389 Kinh Dương Vương, Bình Tân, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20%C4%90%E1%BB%93ng%20Qu%C3%AA%205%20389%20Kinh%20D%C6%B0%C6%A1ng%20V%C6%B0%C6%A1ng%2C%20B%C3%ACnh%20T%C3%A2n%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Bình Tân. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Hương Việt",
    "type": "Mì",
    "location": "118 Tân Kỳ Tân Quý, Bình Tân, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20H%C6%B0%C6%A1ng%20Vi%E1%BB%87t%20118%20T%C3%A2n%20K%E1%BB%B3%20T%C3%A2n%20Qu%C3%BD%2C%20B%C3%ACnh%20T%C3%A2n%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Bình Tân. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Nắng Vàng 2",
    "type": "Mì",
    "location": "236 Tân Kỳ Tân Quý, Bình Tân, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20N%E1%BA%AFng%20V%C3%A0ng%202%20236%20T%C3%A2n%20K%E1%BB%B3%20T%C3%A2n%20Qu%C3%BD%2C%20B%C3%ACnh%20T%C3%A2n%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Bình Tân. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Thanh Xuân 3",
    "type": "Mì",
    "location": "213 Kinh Dương Vương, Bình Tân, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20Thanh%20Xu%C3%A2n%203%20213%20Kinh%20D%C6%B0%C6%A1ng%20V%C6%B0%C6%A1ng%2C%20B%C3%ACnh%20T%C3%A2n%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Bình Tân. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Thanh Xuân 4",
    "type": "Mì",
    "location": "171 Tên Lửa, Bình Tân, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20Thanh%20Xu%C3%A2n%204%20171%20T%C3%AAn%20L%E1%BB%ADa%2C%20B%C3%ACnh%20T%C3%A2n%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Bình Tân. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Thanh Đa 5",
    "type": "Mì",
    "location": "318 Mã Lò, Bình Tân, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20Thanh%20%C4%90a%205%20318%20M%C3%A3%20L%C3%B2%2C%20B%C3%ACnh%20T%C3%A2n%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Bình Tân. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Cô Ba",
    "type": "Hủ tiếu",
    "location": "8 Kinh Dương Vương, Bình Tân, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20C%C3%B4%20Ba%208%20Kinh%20D%C6%B0%C6%A1ng%20V%C6%B0%C6%A1ng%2C%20B%C3%ACnh%20T%C3%A2n%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Bình Tân. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Phố Hội 2",
    "type": "Hủ tiếu",
    "location": "455 Kinh Dương Vương, Bình Tân, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20Ph%E1%BB%91%20H%E1%BB%99i%202%20455%20Kinh%20D%C6%B0%C6%A1ng%20V%C6%B0%C6%A1ng%2C%20B%C3%ACnh%20T%C3%A2n%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Bình Tân. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Xưa & Nay 3",
    "type": "Hủ tiếu",
    "location": "435 Kinh Dương Vương, Bình Tân, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20X%C6%B0a%20%26%20Nay%203%20435%20Kinh%20D%C6%B0%C6%A1ng%20V%C6%B0%C6%A1ng%2C%20B%C3%ACnh%20T%C3%A2n%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Bình Tân. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Cô Ba 4",
    "type": "Hủ tiếu",
    "location": "151 Tân Kỳ Tân Quý, Bình Tân, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20C%C3%B4%20Ba%204%20151%20T%C3%A2n%20K%E1%BB%B3%20T%C3%A2n%20Qu%C3%BD%2C%20B%C3%ACnh%20T%C3%A2n%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Bình Tân. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Nam Hải 5",
    "type": "Hủ tiếu",
    "location": "366 Mã Lò, Bình Tân, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20Nam%20H%E1%BA%A3i%205%20366%20M%C3%A3%20L%C3%B2%2C%20B%C3%ACnh%20T%C3%A2n%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Bình Tân. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Bà Năm",
    "type": "Đồ nướng",
    "location": "379 Đường số 7, Bình Tân, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20B%C3%A0%20N%C4%83m%20379%20%C4%90%C6%B0%E1%BB%9Dng%20s%E1%BB%91%207%2C%20B%C3%ACnh%20T%C3%A2n%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Bình Tân. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Hồng Phát 2",
    "type": "Đồ nướng",
    "location": "495 Đường số 7, Bình Tân, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20H%E1%BB%93ng%20Ph%C3%A1t%202%20495%20%C4%90%C6%B0%E1%BB%9Dng%20s%E1%BB%91%207%2C%20B%C3%ACnh%20T%C3%A2n%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Bình Tân. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Mưa Hồng 3",
    "type": "Đồ nướng",
    "location": "406 Tân Kỳ Tân Quý, Bình Tân, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20M%C6%B0a%20H%E1%BB%93ng%203%20406%20T%C3%A2n%20K%E1%BB%B3%20T%C3%A2n%20Qu%C3%BD%2C%20B%C3%ACnh%20T%C3%A2n%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Bình Tân. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Bà Năm 4",
    "type": "Đồ nướng",
    "location": "390 Mã Lò, Bình Tân, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20B%C3%A0%20N%C4%83m%204%20390%20M%C3%A3%20L%C3%B2%2C%20B%C3%ACnh%20T%C3%A2n%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Bình Tân. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Saigon Deli 5",
    "type": "Đồ nướng",
    "location": "487 Đường số 7, Bình Tân, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20Saigon%20Deli%205%20487%20%C4%90%C6%B0%E1%BB%9Dng%20s%E1%BB%91%207%2C%20B%C3%ACnh%20T%C3%A2n%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Bình Tân. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Đông Á",
    "type": "Nước & Cafe",
    "location": "339 Mã Lò, Bình Tân, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20%C4%90%C3%B4ng%20%C3%81%20339%20M%C3%A3%20L%C3%B2%2C%20B%C3%ACnh%20T%C3%A2n%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Bình Tân. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Kim Anh 2",
    "type": "Nước & Cafe",
    "location": "242 Mã Lò, Bình Tân, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20Kim%20Anh%202%20242%20M%C3%A3%20L%C3%B2%2C%20B%C3%ACnh%20T%C3%A2n%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Bình Tân. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Hương Việt 3",
    "type": "Nước & Cafe",
    "location": "173 Tên Lửa, Bình Tân, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20H%C6%B0%C6%A1ng%20Vi%E1%BB%87t%203%20173%20T%C3%AAn%20L%E1%BB%ADa%2C%20B%C3%ACnh%20T%C3%A2n%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Bình Tân. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Minh Khai 4",
    "type": "Nước & Cafe",
    "location": "314 Đường số 7, Bình Tân, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20Minh%20Khai%204%20314%20%C4%90%C6%B0%E1%BB%9Dng%20s%E1%BB%91%207%2C%20B%C3%ACnh%20T%C3%A2n%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Bình Tân. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Hào Hùng 5",
    "type": "Nước & Cafe",
    "location": "109 Kinh Dương Vương, Bình Tân, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20H%C3%A0o%20H%C3%B9ng%205%20109%20Kinh%20D%C6%B0%C6%A1ng%20V%C6%B0%C6%A1ng%2C%20B%C3%ACnh%20T%C3%A2n%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Bình Tân. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Hào Hùng",
    "type": "Chè",
    "location": "445 Tên Lửa, Bình Tân, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20H%C3%A0o%20H%C3%B9ng%20445%20T%C3%AAn%20L%E1%BB%ADa%2C%20B%C3%ACnh%20T%C3%A2n%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Bình Tân. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Nắng Vàng 2",
    "type": "Chè",
    "location": "105 Tân Kỳ Tân Quý, Bình Tân, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20N%E1%BA%AFng%20V%C3%A0ng%202%20105%20T%C3%A2n%20K%E1%BB%B3%20T%C3%A2n%20Qu%C3%BD%2C%20B%C3%ACnh%20T%C3%A2n%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Bình Tân. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Anh Tư 3",
    "type": "Chè",
    "location": "94 Đường số 7, Bình Tân, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20Anh%20T%C6%B0%203%2094%20%C4%90%C6%B0%E1%BB%9Dng%20s%E1%BB%91%207%2C%20B%C3%ACnh%20T%C3%A2n%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Bình Tân. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Thanh Xuân 4",
    "type": "Chè",
    "location": "147 Tân Kỳ Tân Quý, Bình Tân, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20Thanh%20Xu%C3%A2n%204%20147%20T%C3%A2n%20K%E1%BB%B3%20T%C3%A2n%20Qu%C3%BD%2C%20B%C3%ACnh%20T%C3%A2n%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Bình Tân. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Sông Trăng 5",
    "type": "Chè",
    "location": "488 Kinh Dương Vương, Bình Tân, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20S%C3%B4ng%20Tr%C4%83ng%205%20488%20Kinh%20D%C6%B0%C6%A1ng%20V%C6%B0%C6%A1ng%2C%20B%C3%ACnh%20T%C3%A2n%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Bình Tân. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Vĩnh Lộc",
    "type": "Bánh xèo",
    "location": "464 Tân Kỳ Tân Quý, Bình Tân, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20V%C4%A9nh%20L%E1%BB%99c%20464%20T%C3%A2n%20K%E1%BB%B3%20T%C3%A2n%20Qu%C3%BD%2C%20B%C3%ACnh%20T%C3%A2n%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Bình Tân. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Bà Năm 2",
    "type": "Bánh xèo",
    "location": "153 Tên Lửa, Bình Tân, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20B%C3%A0%20N%C4%83m%202%20153%20T%C3%AAn%20L%E1%BB%ADa%2C%20B%C3%ACnh%20T%C3%A2n%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Bình Tân. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Đệ Nhất 3",
    "type": "Bánh xèo",
    "location": "191 Tân Kỳ Tân Quý, Bình Tân, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20%C4%90%E1%BB%87%20Nh%E1%BA%A5t%203%20191%20T%C3%A2n%20K%E1%BB%B3%20T%C3%A2n%20Qu%C3%BD%2C%20B%C3%ACnh%20T%C3%A2n%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Bình Tân. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Đệ Nhất 4",
    "type": "Bánh xèo",
    "location": "32 Tân Kỳ Tân Quý, Bình Tân, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20%C4%90%E1%BB%87%20Nh%E1%BA%A5t%204%2032%20T%C3%A2n%20K%E1%BB%B3%20T%C3%A2n%20Qu%C3%BD%2C%20B%C3%ACnh%20T%C3%A2n%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Bình Tân. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Bến Thành 5",
    "type": "Bánh xèo",
    "location": "331 Tên Lửa, Bình Tân, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20B%E1%BA%BFn%20Th%C3%A0nh%205%20331%20T%C3%AAn%20L%E1%BB%ADa%2C%20B%C3%ACnh%20T%C3%A2n%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Bình Tân. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Đệ Nhất",
    "type": "Khác",
    "location": "53 Kinh Dương Vương, Bình Tân, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20%C4%90%E1%BB%87%20Nh%E1%BA%A5t%2053%20Kinh%20D%C6%B0%C6%A1ng%20V%C6%B0%C6%A1ng%2C%20B%C3%ACnh%20T%C3%A2n%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Bình Tân. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Gia Đình 2",
    "type": "Khác",
    "location": "37 Tân Kỳ Tân Quý, Bình Tân, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20Gia%20%C4%90%C3%ACnh%202%2037%20T%C3%A2n%20K%E1%BB%B3%20T%C3%A2n%20Qu%C3%BD%2C%20B%C3%ACnh%20T%C3%A2n%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Bình Tân. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Đệ Nhất 3",
    "type": "Khác",
    "location": "462 Tên Lửa, Bình Tân, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20%C4%90%E1%BB%87%20Nh%E1%BA%A5t%203%20462%20T%C3%AAn%20L%E1%BB%ADa%2C%20B%C3%ACnh%20T%C3%A2n%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Bình Tân. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Sông Trăng 4",
    "type": "Khác",
    "location": "480 Đường số 7, Bình Tân, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20S%C3%B4ng%20Tr%C4%83ng%204%20480%20%C4%90%C6%B0%E1%BB%9Dng%20s%E1%BB%91%207%2C%20B%C3%ACnh%20T%C3%A2n%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Bình Tân. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Chú Bảy 5",
    "type": "Khác",
    "location": "165 Tên Lửa, Bình Tân, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20Ch%C3%BA%20B%E1%BA%A3y%205%20165%20T%C3%AAn%20L%E1%BB%ADa%2C%20B%C3%ACnh%20T%C3%A2n%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Bình Tân. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Mưa Hồng",
    "type": "Phở",
    "location": "448 Đặng Văn Bi, Thủ Đức, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20M%C6%B0a%20H%E1%BB%93ng%20448%20%C4%90%E1%BA%B7ng%20V%C4%83n%20Bi%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Thủ Đức. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Sài Thành 2",
    "type": "Phở",
    "location": "483 Võ Văn Ngân, Thủ Đức, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20S%C3%A0i%20Th%C3%A0nh%202%20483%20V%C3%B5%20V%C4%83n%20Ng%C3%A2n%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Thủ Đức. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Ông Già 3",
    "type": "Phở",
    "location": "417 Đặng Văn Bi, Thủ Đức, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20%C3%94ng%20Gi%C3%A0%203%20417%20%C4%90%E1%BA%B7ng%20V%C4%83n%20Bi%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Thủ Đức. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Anh Tư 4",
    "type": "Phở",
    "location": "399 Kha Vạn Cân, Thủ Đức, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20Anh%20T%C6%B0%204%20399%20Kha%20V%E1%BA%A1n%20C%C3%A2n%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Thủ Đức. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Cô Ba 5",
    "type": "Phở",
    "location": "27 Đặng Văn Bi, Thủ Đức, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20C%C3%B4%20Ba%205%2027%20%C4%90%E1%BA%B7ng%20V%C4%83n%20Bi%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Thủ Đức. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Phố Hội",
    "type": "Bún",
    "location": "234 Đặng Văn Bi, Thủ Đức, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20Ph%E1%BB%91%20H%E1%BB%99i%20234%20%C4%90%E1%BA%B7ng%20V%C4%83n%20Bi%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Thủ Đức. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Sông Trăng 2",
    "type": "Bún",
    "location": "331 Tô Ngọc Vân, Thủ Đức, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20S%C3%B4ng%20Tr%C4%83ng%202%20331%20T%C3%B4%20Ng%E1%BB%8Dc%20V%C3%A2n%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Thủ Đức. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Xưa & Nay 3",
    "type": "Bún",
    "location": "322 Võ Văn Ngân, Thủ Đức, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20X%C6%B0a%20%26%20Nay%203%20322%20V%C3%B5%20V%C4%83n%20Ng%C3%A2n%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Thủ Đức. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Bến Thành 4",
    "type": "Bún",
    "location": "199 Phạm Văn Đồng, Thủ Đức, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20B%E1%BA%BFn%20Th%C3%A0nh%204%20199%20Ph%E1%BA%A1m%20V%C4%83n%20%C4%90%E1%BB%93ng%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Thủ Đức. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Sông Trăng 5",
    "type": "Bún",
    "location": "104 Võ Văn Ngân, Thủ Đức, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20S%C3%B4ng%20Tr%C4%83ng%205%20104%20V%C3%B5%20V%C4%83n%20Ng%C3%A2n%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Thủ Đức. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Bà Năm",
    "type": "Cơm",
    "location": "475 Đặng Văn Bi, Thủ Đức, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20B%C3%A0%20N%C4%83m%20475%20%C4%90%E1%BA%B7ng%20V%C4%83n%20Bi%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Thủ Đức. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Cô Ba 2",
    "type": "Cơm",
    "location": "454 Đặng Văn Bi, Thủ Đức, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20C%C3%B4%20Ba%202%20454%20%C4%90%E1%BA%B7ng%20V%C4%83n%20Bi%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Thủ Đức. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Kim Anh 3",
    "type": "Cơm",
    "location": "159 Tô Ngọc Vân, Thủ Đức, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20Kim%20Anh%203%20159%20T%C3%B4%20Ng%E1%BB%8Dc%20V%C3%A2n%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Thủ Đức. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Cô Ba 4",
    "type": "Cơm",
    "location": "190 Kha Vạn Cân, Thủ Đức, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20C%C3%B4%20Ba%204%20190%20Kha%20V%E1%BA%A1n%20C%C3%A2n%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Thủ Đức. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Sông Trăng 5",
    "type": "Cơm",
    "location": "260 Tô Ngọc Vân, Thủ Đức, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20S%C3%B4ng%20Tr%C4%83ng%205%20260%20T%C3%B4%20Ng%E1%BB%8Dc%20V%C3%A2n%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Thủ Đức. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Gia Đình",
    "type": "Lẩu",
    "location": "312 Phạm Văn Đồng, Thủ Đức, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20Gia%20%C4%90%C3%ACnh%20312%20Ph%E1%BA%A1m%20V%C4%83n%20%C4%90%E1%BB%93ng%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Thủ Đức. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Chú Bảy 2",
    "type": "Lẩu",
    "location": "351 Đặng Văn Bi, Thủ Đức, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20Ch%C3%BA%20B%E1%BA%A3y%202%20351%20%C4%90%E1%BA%B7ng%20V%C4%83n%20Bi%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Thủ Đức. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Phố Hội 3",
    "type": "Lẩu",
    "location": "31 Võ Văn Ngân, Thủ Đức, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20Ph%E1%BB%91%20H%E1%BB%99i%203%2031%20V%C3%B5%20V%C4%83n%20Ng%C3%A2n%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Thủ Đức. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Ngọc Lan 4",
    "type": "Lẩu",
    "location": "382 Võ Văn Ngân, Thủ Đức, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20Ng%E1%BB%8Dc%20Lan%204%20382%20V%C3%B5%20V%C4%83n%20Ng%C3%A2n%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Thủ Đức. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Bà Năm 5",
    "type": "Lẩu",
    "location": "440 Phạm Văn Đồng, Thủ Đức, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20B%C3%A0%20N%C4%83m%205%20440%20Ph%E1%BA%A1m%20V%C4%83n%20%C4%90%E1%BB%93ng%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Thủ Đức. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Mưa Hồng",
    "type": "Đồ chay",
    "location": "272 Kha Vạn Cân, Thủ Đức, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20M%C6%B0a%20H%E1%BB%93ng%20272%20Kha%20V%E1%BA%A1n%20C%C3%A2n%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Thủ Đức. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Thanh Xuân 2",
    "type": "Đồ chay",
    "location": "27 Phạm Văn Đồng, Thủ Đức, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20Thanh%20Xu%C3%A2n%202%2027%20Ph%E1%BA%A1m%20V%C4%83n%20%C4%90%E1%BB%93ng%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Thủ Đức. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Hồng Phát 3",
    "type": "Đồ chay",
    "location": "159 Kha Vạn Cân, Thủ Đức, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20H%E1%BB%93ng%20Ph%C3%A1t%203%20159%20Kha%20V%E1%BA%A1n%20C%C3%A2n%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Thủ Đức. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Mưa Hồng 4",
    "type": "Đồ chay",
    "location": "500 Kha Vạn Cân, Thủ Đức, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20M%C6%B0a%20H%E1%BB%93ng%204%20500%20Kha%20V%E1%BA%A1n%20C%C3%A2n%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Thủ Đức. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Sông Trăng 5",
    "type": "Đồ chay",
    "location": "216 Tô Ngọc Vân, Thủ Đức, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20S%C3%B4ng%20Tr%C4%83ng%205%20216%20T%C3%B4%20Ng%E1%BB%8Dc%20V%C3%A2n%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Thủ Đức. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Xưa & Nay",
    "type": "Bánh mì",
    "location": "185 Võ Văn Ngân, Thủ Đức, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20X%C6%B0a%20%26%20Nay%20185%20V%C3%B5%20V%C4%83n%20Ng%C3%A2n%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Thủ Đức. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Sài Thành 2",
    "type": "Bánh mì",
    "location": "419 Đặng Văn Bi, Thủ Đức, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20S%C3%A0i%20Th%C3%A0nh%202%20419%20%C4%90%E1%BA%B7ng%20V%C4%83n%20Bi%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Thủ Đức. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Dì Liên 3",
    "type": "Bánh mì",
    "location": "69 Tô Ngọc Vân, Thủ Đức, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20D%C3%AC%20Li%C3%AAn%203%2069%20T%C3%B4%20Ng%E1%BB%8Dc%20V%C3%A2n%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Thủ Đức. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Vĩnh Lộc 4",
    "type": "Bánh mì",
    "location": "343 Võ Văn Ngân, Thủ Đức, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20V%C4%A9nh%20L%E1%BB%99c%204%20343%20V%C3%B5%20V%C4%83n%20Ng%C3%A2n%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Thủ Đức. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Ông Già 5",
    "type": "Bánh mì",
    "location": "310 Võ Văn Ngân, Thủ Đức, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20%C3%94ng%20Gi%C3%A0%205%20310%20V%C3%B5%20V%C4%83n%20Ng%C3%A2n%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Thủ Đức. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Ngọc Lan",
    "type": "Ăn vặt",
    "location": "500 Võ Văn Ngân, Thủ Đức, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20Ng%E1%BB%8Dc%20Lan%20500%20V%C3%B5%20V%C4%83n%20Ng%C3%A2n%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Thủ Đức. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Bến Thành 2",
    "type": "Ăn vặt",
    "location": "186 Phạm Văn Đồng, Thủ Đức, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20B%E1%BA%BFn%20Th%C3%A0nh%202%20186%20Ph%E1%BA%A1m%20V%C4%83n%20%C4%90%E1%BB%93ng%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Thủ Đức. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Thanh Đa 3",
    "type": "Ăn vặt",
    "location": "141 Võ Văn Ngân, Thủ Đức, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20Thanh%20%C4%90a%203%20141%20V%C3%B5%20V%C4%83n%20Ng%C3%A2n%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Thủ Đức. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Đồng Quê 4",
    "type": "Ăn vặt",
    "location": "170 Kha Vạn Cân, Thủ Đức, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20%C4%90%E1%BB%93ng%20Qu%C3%AA%204%20170%20Kha%20V%E1%BA%A1n%20C%C3%A2n%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Thủ Đức. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Vĩnh Lộc 5",
    "type": "Ăn vặt",
    "location": "174 Đặng Văn Bi, Thủ Đức, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20V%C4%A9nh%20L%E1%BB%99c%205%20174%20%C4%90%E1%BA%B7ng%20V%C4%83n%20Bi%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Thủ Đức. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Mưa Hồng",
    "type": "Bánh cuốn",
    "location": "246 Kha Vạn Cân, Thủ Đức, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20M%C6%B0a%20H%E1%BB%93ng%20246%20Kha%20V%E1%BA%A1n%20C%C3%A2n%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Thủ Đức. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Vĩnh Lộc 2",
    "type": "Bánh cuốn",
    "location": "49 Tô Ngọc Vân, Thủ Đức, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20V%C4%A9nh%20L%E1%BB%99c%202%2049%20T%C3%B4%20Ng%E1%BB%8Dc%20V%C3%A2n%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Thủ Đức. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Hương Việt 3",
    "type": "Bánh cuốn",
    "location": "359 Kha Vạn Cân, Thủ Đức, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20H%C6%B0%C6%A1ng%20Vi%E1%BB%87t%203%20359%20Kha%20V%E1%BA%A1n%20C%C3%A2n%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Thủ Đức. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Sông Trăng 4",
    "type": "Bánh cuốn",
    "location": "472 Tô Ngọc Vân, Thủ Đức, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20S%C3%B4ng%20Tr%C4%83ng%204%20472%20T%C3%B4%20Ng%E1%BB%8Dc%20V%C3%A2n%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Thủ Đức. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Nam Hải 5",
    "type": "Bánh cuốn",
    "location": "99 Đặng Văn Bi, Thủ Đức, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20Nam%20H%E1%BA%A3i%205%2099%20%C4%90%E1%BA%B7ng%20V%C4%83n%20Bi%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Thủ Đức. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Viet Kitchen",
    "type": "Bún đậu",
    "location": "165 Đặng Văn Bi, Thủ Đức, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20Viet%20Kitchen%20165%20%C4%90%E1%BA%B7ng%20V%C4%83n%20Bi%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Thủ Đức. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Thanh Đa 2",
    "type": "Bún đậu",
    "location": "99 Kha Vạn Cân, Thủ Đức, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20Thanh%20%C4%90a%202%2099%20Kha%20V%E1%BA%A1n%20C%C3%A2n%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Thủ Đức. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Saigon Deli 3",
    "type": "Bún đậu",
    "location": "446 Kha Vạn Cân, Thủ Đức, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20Saigon%20Deli%203%20446%20Kha%20V%E1%BA%A1n%20C%C3%A2n%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Thủ Đức. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Viet Kitchen 4",
    "type": "Bún đậu",
    "location": "7 Võ Văn Ngân, Thủ Đức, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20Viet%20Kitchen%204%207%20V%C3%B5%20V%C4%83n%20Ng%C3%A2n%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Thủ Đức. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Local Taste 5",
    "type": "Bún đậu",
    "location": "437 Đặng Văn Bi, Thủ Đức, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20Local%20Taste%205%20437%20%C4%90%E1%BA%B7ng%20V%C4%83n%20Bi%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Thủ Đức. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Hoàn Kiếm",
    "type": "Hải sản",
    "location": "300 Võ Văn Ngân, Thủ Đức, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20Ho%C3%A0n%20Ki%E1%BA%BFm%20300%20V%C3%B5%20V%C4%83n%20Ng%C3%A2n%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Thủ Đức. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Thái Bình 2",
    "type": "Hải sản",
    "location": "244 Đặng Văn Bi, Thủ Đức, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20Th%C3%A1i%20B%C3%ACnh%202%20244%20%C4%90%E1%BA%B7ng%20V%C4%83n%20Bi%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Thủ Đức. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Xưa & Nay 3",
    "type": "Hải sản",
    "location": "110 Võ Văn Ngân, Thủ Đức, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20X%C6%B0a%20%26%20Nay%203%20110%20V%C3%B5%20V%C4%83n%20Ng%C3%A2n%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Thủ Đức. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Saigon Deli 4",
    "type": "Hải sản",
    "location": "285 Đặng Văn Bi, Thủ Đức, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20Saigon%20Deli%204%20285%20%C4%90%E1%BA%B7ng%20V%C4%83n%20Bi%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Thủ Đức. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Bà Năm 5",
    "type": "Hải sản",
    "location": "106 Kha Vạn Cân, Thủ Đức, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20B%C3%A0%20N%C4%83m%205%20106%20Kha%20V%E1%BA%A1n%20C%C3%A2n%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Thủ Đức. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Mưa Hồng",
    "type": "Ốc",
    "location": "68 Kha Vạn Cân, Thủ Đức, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20M%C6%B0a%20H%E1%BB%93ng%2068%20Kha%20V%E1%BA%A1n%20C%C3%A2n%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Thủ Đức. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Đệ Nhất 2",
    "type": "Ốc",
    "location": "230 Phạm Văn Đồng, Thủ Đức, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20%C4%90%E1%BB%87%20Nh%E1%BA%A5t%202%20230%20Ph%E1%BA%A1m%20V%C4%83n%20%C4%90%E1%BB%93ng%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Thủ Đức. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Chú Bảy 3",
    "type": "Ốc",
    "location": "290 Tô Ngọc Vân, Thủ Đức, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20Ch%C3%BA%20B%E1%BA%A3y%203%20290%20T%C3%B4%20Ng%E1%BB%8Dc%20V%C3%A2n%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Thủ Đức. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Sông Trăng 4",
    "type": "Ốc",
    "location": "349 Kha Vạn Cân, Thủ Đức, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20S%C3%B4ng%20Tr%C4%83ng%204%20349%20Kha%20V%E1%BA%A1n%20C%C3%A2n%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Thủ Đức. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Vĩnh Lộc 5",
    "type": "Ốc",
    "location": "374 Tô Ngọc Vân, Thủ Đức, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20V%C4%A9nh%20L%E1%BB%99c%205%20374%20T%C3%B4%20Ng%E1%BB%8Dc%20V%C3%A2n%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Thủ Đức. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Đông Á",
    "type": "Mì",
    "location": "214 Phạm Văn Đồng, Thủ Đức, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20%C4%90%C3%B4ng%20%C3%81%20214%20Ph%E1%BA%A1m%20V%C4%83n%20%C4%90%E1%BB%93ng%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Thủ Đức. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Bến Thành 2",
    "type": "Mì",
    "location": "269 Kha Vạn Cân, Thủ Đức, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20B%E1%BA%BFn%20Th%C3%A0nh%202%20269%20Kha%20V%E1%BA%A1n%20C%C3%A2n%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Thủ Đức. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Cô Ba 3",
    "type": "Mì",
    "location": "261 Phạm Văn Đồng, Thủ Đức, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20C%C3%B4%20Ba%203%20261%20Ph%E1%BA%A1m%20V%C4%83n%20%C4%90%E1%BB%93ng%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Thủ Đức. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Cô Ba 4",
    "type": "Mì",
    "location": "399 Đặng Văn Bi, Thủ Đức, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20C%C3%B4%20Ba%204%20399%20%C4%90%E1%BA%B7ng%20V%C4%83n%20Bi%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Thủ Đức. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Đệ Nhất 5",
    "type": "Mì",
    "location": "270 Phạm Văn Đồng, Thủ Đức, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20%C4%90%E1%BB%87%20Nh%E1%BA%A5t%205%20270%20Ph%E1%BA%A1m%20V%C4%83n%20%C4%90%E1%BB%93ng%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Thủ Đức. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Anh Tư",
    "type": "Hủ tiếu",
    "location": "213 Phạm Văn Đồng, Thủ Đức, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20Anh%20T%C6%B0%20213%20Ph%E1%BA%A1m%20V%C4%83n%20%C4%90%E1%BB%93ng%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Thủ Đức. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Phố Hội 2",
    "type": "Hủ tiếu",
    "location": "132 Phạm Văn Đồng, Thủ Đức, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20Ph%E1%BB%91%20H%E1%BB%99i%202%20132%20Ph%E1%BA%A1m%20V%C4%83n%20%C4%90%E1%BB%93ng%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Thủ Đức. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Nắng Vàng 3",
    "type": "Hủ tiếu",
    "location": "357 Phạm Văn Đồng, Thủ Đức, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20N%E1%BA%AFng%20V%C3%A0ng%203%20357%20Ph%E1%BA%A1m%20V%C4%83n%20%C4%90%E1%BB%93ng%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Thủ Đức. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Hào Hùng 4",
    "type": "Hủ tiếu",
    "location": "64 Võ Văn Ngân, Thủ Đức, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20H%C3%A0o%20H%C3%B9ng%204%2064%20V%C3%B5%20V%C4%83n%20Ng%C3%A2n%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Thủ Đức. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Bà Năm 5",
    "type": "Hủ tiếu",
    "location": "372 Kha Vạn Cân, Thủ Đức, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20B%C3%A0%20N%C4%83m%205%20372%20Kha%20V%E1%BA%A1n%20C%C3%A2n%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Thủ Đức. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Vĩnh Lộc",
    "type": "Đồ nướng",
    "location": "194 Đặng Văn Bi, Thủ Đức, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20V%C4%A9nh%20L%E1%BB%99c%20194%20%C4%90%E1%BA%B7ng%20V%C4%83n%20Bi%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Thủ Đức. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Chú Bảy 2",
    "type": "Đồ nướng",
    "location": "163 Kha Vạn Cân, Thủ Đức, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20Ch%C3%BA%20B%E1%BA%A3y%202%20163%20Kha%20V%E1%BA%A1n%20C%C3%A2n%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Thủ Đức. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Bến Thành 3",
    "type": "Đồ nướng",
    "location": "330 Đặng Văn Bi, Thủ Đức, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20B%E1%BA%BFn%20Th%C3%A0nh%203%20330%20%C4%90%E1%BA%B7ng%20V%C4%83n%20Bi%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Thủ Đức. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Nắng Vàng 4",
    "type": "Đồ nướng",
    "location": "9 Võ Văn Ngân, Thủ Đức, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20N%E1%BA%AFng%20V%C3%A0ng%204%209%20V%C3%B5%20V%C4%83n%20Ng%C3%A2n%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Thủ Đức. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Cô Ba 5",
    "type": "Đồ nướng",
    "location": "182 Võ Văn Ngân, Thủ Đức, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20C%C3%B4%20Ba%205%20182%20V%C3%B5%20V%C4%83n%20Ng%C3%A2n%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Thủ Đức. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Xưa & Nay",
    "type": "Nước & Cafe",
    "location": "159 Đặng Văn Bi, Thủ Đức, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20X%C6%B0a%20%26%20Nay%20159%20%C4%90%E1%BA%B7ng%20V%C4%83n%20Bi%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Thủ Đức. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Viet Kitchen 2",
    "type": "Nước & Cafe",
    "location": "129 Kha Vạn Cân, Thủ Đức, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20Viet%20Kitchen%202%20129%20Kha%20V%E1%BA%A1n%20C%C3%A2n%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Thủ Đức. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Phố Hội 3",
    "type": "Nước & Cafe",
    "location": "76 Võ Văn Ngân, Thủ Đức, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20Ph%E1%BB%91%20H%E1%BB%99i%203%2076%20V%C3%B5%20V%C4%83n%20Ng%C3%A2n%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Thủ Đức. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Phố Hội 4",
    "type": "Nước & Cafe",
    "location": "231 Tô Ngọc Vân, Thủ Đức, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20Ph%E1%BB%91%20H%E1%BB%99i%204%20231%20T%C3%B4%20Ng%E1%BB%8Dc%20V%C3%A2n%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Thủ Đức. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Thanh Đa 5",
    "type": "Nước & Cafe",
    "location": "269 Đặng Văn Bi, Thủ Đức, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20Thanh%20%C4%90a%205%20269%20%C4%90%E1%BA%B7ng%20V%C4%83n%20Bi%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Thủ Đức. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Vĩnh Lộc",
    "type": "Chè",
    "location": "317 Phạm Văn Đồng, Thủ Đức, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20V%C4%A9nh%20L%E1%BB%99c%20317%20Ph%E1%BA%A1m%20V%C4%83n%20%C4%90%E1%BB%93ng%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Thủ Đức. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Hương Việt 2",
    "type": "Chè",
    "location": "146 Đặng Văn Bi, Thủ Đức, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20H%C6%B0%C6%A1ng%20Vi%E1%BB%87t%202%20146%20%C4%90%E1%BA%B7ng%20V%C4%83n%20Bi%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Thủ Đức. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Xưa & Nay 3",
    "type": "Chè",
    "location": "138 Kha Vạn Cân, Thủ Đức, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20X%C6%B0a%20%26%20Nay%203%20138%20Kha%20V%E1%BA%A1n%20C%C3%A2n%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Thủ Đức. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Nam Hải 4",
    "type": "Chè",
    "location": "301 Võ Văn Ngân, Thủ Đức, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20Nam%20H%E1%BA%A3i%204%20301%20V%C3%B5%20V%C4%83n%20Ng%C3%A2n%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Thủ Đức. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Ngọc Lan 5",
    "type": "Chè",
    "location": "101 Phạm Văn Đồng, Thủ Đức, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20Ng%E1%BB%8Dc%20Lan%205%20101%20Ph%E1%BA%A1m%20V%C4%83n%20%C4%90%E1%BB%93ng%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Thủ Đức. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Đồng Quê",
    "type": "Bánh xèo",
    "location": "313 Kha Vạn Cân, Thủ Đức, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20%C4%90%E1%BB%93ng%20Qu%C3%AA%20313%20Kha%20V%E1%BA%A1n%20C%C3%A2n%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Thủ Đức. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Đệ Nhất 2",
    "type": "Bánh xèo",
    "location": "482 Võ Văn Ngân, Thủ Đức, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20%C4%90%E1%BB%87%20Nh%E1%BA%A5t%202%20482%20V%C3%B5%20V%C4%83n%20Ng%C3%A2n%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Thủ Đức. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Hào Hùng 3",
    "type": "Bánh xèo",
    "location": "446 Kha Vạn Cân, Thủ Đức, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20H%C3%A0o%20H%C3%B9ng%203%20446%20Kha%20V%E1%BA%A1n%20C%C3%A2n%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Thủ Đức. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Thanh Xuân 4",
    "type": "Bánh xèo",
    "location": "181 Đặng Văn Bi, Thủ Đức, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20Thanh%20Xu%C3%A2n%204%20181%20%C4%90%E1%BA%B7ng%20V%C4%83n%20Bi%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Thủ Đức. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Gia Đình 5",
    "type": "Bánh xèo",
    "location": "120 Tô Ngọc Vân, Thủ Đức, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20Gia%20%C4%90%C3%ACnh%205%20120%20T%C3%B4%20Ng%E1%BB%8Dc%20V%C3%A2n%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Thủ Đức. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Phố Hội",
    "type": "Khác",
    "location": "475 Tô Ngọc Vân, Thủ Đức, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20Ph%E1%BB%91%20H%E1%BB%99i%20475%20T%C3%B4%20Ng%E1%BB%8Dc%20V%C3%A2n%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Thủ Đức. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Bà Năm 2",
    "type": "Khác",
    "location": "498 Tô Ngọc Vân, Thủ Đức, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20B%C3%A0%20N%C4%83m%202%20498%20T%C3%B4%20Ng%E1%BB%8Dc%20V%C3%A2n%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Thủ Đức. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Viet Kitchen 3",
    "type": "Khác",
    "location": "127 Đặng Văn Bi, Thủ Đức, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20Viet%20Kitchen%203%20127%20%C4%90%E1%BA%B7ng%20V%C4%83n%20Bi%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Thủ Đức. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Bến Thành 4",
    "type": "Khác",
    "location": "152 Tô Ngọc Vân, Thủ Đức, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20B%E1%BA%BFn%20Th%C3%A0nh%204%20152%20T%C3%B4%20Ng%E1%BB%8Dc%20V%C3%A2n%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Thủ Đức. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Thái Bình 5",
    "type": "Khác",
    "location": "350 Tô Ngọc Vân, Thủ Đức, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20Th%C3%A1i%20B%C3%ACnh%205%20350%20T%C3%B4%20Ng%E1%BB%8Dc%20V%C3%A2n%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Thủ Đức. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Xưa & Nay",
    "type": "Phở",
    "location": "204 Nguyễn Ảnh Thủ, Hóc Môn, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20X%C6%B0a%20%26%20Nay%20204%20Nguy%E1%BB%85n%20%E1%BA%A2nh%20Th%E1%BB%A7%2C%20H%C3%B3c%20M%C3%B4n%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Hóc Môn. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Gia Đình 2",
    "type": "Phở",
    "location": "415 Lê Lợi, Hóc Môn, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20Gia%20%C4%90%C3%ACnh%202%20415%20L%C3%AA%20L%E1%BB%A3i%2C%20H%C3%B3c%20M%C3%B4n%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Hóc Môn. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Phố Hội 3",
    "type": "Phở",
    "location": "136 Nguyễn Ảnh Thủ, Hóc Môn, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20Ph%E1%BB%91%20H%E1%BB%99i%203%20136%20Nguy%E1%BB%85n%20%E1%BA%A2nh%20Th%E1%BB%A7%2C%20H%C3%B3c%20M%C3%B4n%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Hóc Môn. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Viet Kitchen 4",
    "type": "Phở",
    "location": "164 Song Hành, Hóc Môn, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20Viet%20Kitchen%204%20164%20Song%20H%C3%A0nh%2C%20H%C3%B3c%20M%C3%B4n%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Hóc Môn. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Gia Đình 5",
    "type": "Phở",
    "location": "247 Trưng Nữ Vương, Hóc Môn, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20Gia%20%C4%90%C3%ACnh%205%20247%20Tr%C6%B0ng%20N%E1%BB%AF%20V%C6%B0%C6%A1ng%2C%20H%C3%B3c%20M%C3%B4n%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Hóc Môn. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Chú Bảy",
    "type": "Bún",
    "location": "13 Trưng Nữ Vương, Hóc Môn, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20Ch%C3%BA%20B%E1%BA%A3y%2013%20Tr%C6%B0ng%20N%E1%BB%AF%20V%C6%B0%C6%A1ng%2C%20H%C3%B3c%20M%C3%B4n%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Hóc Môn. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Viet Kitchen 2",
    "type": "Bún",
    "location": "27 Lê Lợi, Hóc Môn, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20Viet%20Kitchen%202%2027%20L%C3%AA%20L%E1%BB%A3i%2C%20H%C3%B3c%20M%C3%B4n%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Hóc Môn. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Ngọc Lan 3",
    "type": "Bún",
    "location": "159 Song Hành, Hóc Môn, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20Ng%E1%BB%8Dc%20Lan%203%20159%20Song%20H%C3%A0nh%2C%20H%C3%B3c%20M%C3%B4n%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Hóc Môn. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Mưa Hồng 4",
    "type": "Bún",
    "location": "385 Lý Thường Kiệt, Hóc Môn, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20M%C6%B0a%20H%E1%BB%93ng%204%20385%20L%C3%BD%20Th%C6%B0%E1%BB%9Dng%20Ki%E1%BB%87t%2C%20H%C3%B3c%20M%C3%B4n%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Hóc Môn. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Kim Anh 5",
    "type": "Bún",
    "location": "377 Song Hành, Hóc Môn, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20Kim%20Anh%205%20377%20Song%20H%C3%A0nh%2C%20H%C3%B3c%20M%C3%B4n%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Hóc Môn. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Đồng Quê",
    "type": "Cơm",
    "location": "257 Nguyễn Ảnh Thủ, Hóc Môn, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20%C4%90%E1%BB%93ng%20Qu%C3%AA%20257%20Nguy%E1%BB%85n%20%E1%BA%A2nh%20Th%E1%BB%A7%2C%20H%C3%B3c%20M%C3%B4n%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Hóc Môn. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Dì Liên 2",
    "type": "Cơm",
    "location": "451 Trưng Nữ Vương, Hóc Môn, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20D%C3%AC%20Li%C3%AAn%202%20451%20Tr%C6%B0ng%20N%E1%BB%AF%20V%C6%B0%C6%A1ng%2C%20H%C3%B3c%20M%C3%B4n%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Hóc Môn. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Gia Đình 3",
    "type": "Cơm",
    "location": "40 Song Hành, Hóc Môn, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20Gia%20%C4%90%C3%ACnh%203%2040%20Song%20H%C3%A0nh%2C%20H%C3%B3c%20M%C3%B4n%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Hóc Môn. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Hương Việt 4",
    "type": "Cơm",
    "location": "339 Lê Lợi, Hóc Môn, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20H%C6%B0%C6%A1ng%20Vi%E1%BB%87t%204%20339%20L%C3%AA%20L%E1%BB%A3i%2C%20H%C3%B3c%20M%C3%B4n%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Hóc Môn. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Mưa Hồng 5",
    "type": "Cơm",
    "location": "290 Nguyễn Ảnh Thủ, Hóc Môn, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20M%C6%B0a%20H%E1%BB%93ng%205%20290%20Nguy%E1%BB%85n%20%E1%BA%A2nh%20Th%E1%BB%A7%2C%20H%C3%B3c%20M%C3%B4n%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Hóc Môn. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Đệ Nhất",
    "type": "Lẩu",
    "location": "294 Song Hành, Hóc Môn, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20%C4%90%E1%BB%87%20Nh%E1%BA%A5t%20294%20Song%20H%C3%A0nh%2C%20H%C3%B3c%20M%C3%B4n%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Hóc Môn. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Ngọc Lan 2",
    "type": "Lẩu",
    "location": "346 Lê Lợi, Hóc Môn, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20Ng%E1%BB%8Dc%20Lan%202%20346%20L%C3%AA%20L%E1%BB%A3i%2C%20H%C3%B3c%20M%C3%B4n%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Hóc Môn. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Đệ Nhất 3",
    "type": "Lẩu",
    "location": "398 Lý Thường Kiệt, Hóc Môn, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20%C4%90%E1%BB%87%20Nh%E1%BA%A5t%203%20398%20L%C3%BD%20Th%C6%B0%E1%BB%9Dng%20Ki%E1%BB%87t%2C%20H%C3%B3c%20M%C3%B4n%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Hóc Môn. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Đệ Nhất 4",
    "type": "Lẩu",
    "location": "471 Lê Lợi, Hóc Môn, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20%C4%90%E1%BB%87%20Nh%E1%BA%A5t%204%20471%20L%C3%AA%20L%E1%BB%A3i%2C%20H%C3%B3c%20M%C3%B4n%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Hóc Môn. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Local Taste 5",
    "type": "Lẩu",
    "location": "233 Nguyễn Ảnh Thủ, Hóc Môn, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20Local%20Taste%205%20233%20Nguy%E1%BB%85n%20%E1%BA%A2nh%20Th%E1%BB%A7%2C%20H%C3%B3c%20M%C3%B4n%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Hóc Môn. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Saigon Deli",
    "type": "Đồ chay",
    "location": "473 Song Hành, Hóc Môn, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20Saigon%20Deli%20473%20Song%20H%C3%A0nh%2C%20H%C3%B3c%20M%C3%B4n%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Hóc Môn. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Hào Hùng 2",
    "type": "Đồ chay",
    "location": "190 Song Hành, Hóc Môn, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20H%C3%A0o%20H%C3%B9ng%202%20190%20Song%20H%C3%A0nh%2C%20H%C3%B3c%20M%C3%B4n%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Hóc Môn. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Kim Anh 3",
    "type": "Đồ chay",
    "location": "453 Song Hành, Hóc Môn, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20Kim%20Anh%203%20453%20Song%20H%C3%A0nh%2C%20H%C3%B3c%20M%C3%B4n%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Hóc Môn. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Anh Tư 4",
    "type": "Đồ chay",
    "location": "202 Nguyễn Ảnh Thủ, Hóc Môn, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20Anh%20T%C6%B0%204%20202%20Nguy%E1%BB%85n%20%E1%BA%A2nh%20Th%E1%BB%A7%2C%20H%C3%B3c%20M%C3%B4n%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Hóc Môn. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Viet Kitchen 5",
    "type": "Đồ chay",
    "location": "303 Lê Lợi, Hóc Môn, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20Viet%20Kitchen%205%20303%20L%C3%AA%20L%E1%BB%A3i%2C%20H%C3%B3c%20M%C3%B4n%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Hóc Môn. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Thái Bình",
    "type": "Bánh mì",
    "location": "175 Nguyễn Ảnh Thủ, Hóc Môn, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20Th%C3%A1i%20B%C3%ACnh%20175%20Nguy%E1%BB%85n%20%E1%BA%A2nh%20Th%E1%BB%A7%2C%20H%C3%B3c%20M%C3%B4n%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Hóc Môn. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Xưa & Nay 2",
    "type": "Bánh mì",
    "location": "474 Lý Thường Kiệt, Hóc Môn, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20X%C6%B0a%20%26%20Nay%202%20474%20L%C3%BD%20Th%C6%B0%E1%BB%9Dng%20Ki%E1%BB%87t%2C%20H%C3%B3c%20M%C3%B4n%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Hóc Môn. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Nắng Vàng 3",
    "type": "Bánh mì",
    "location": "287 Lê Lợi, Hóc Môn, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20N%E1%BA%AFng%20V%C3%A0ng%203%20287%20L%C3%AA%20L%E1%BB%A3i%2C%20H%C3%B3c%20M%C3%B4n%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Hóc Môn. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Bến Thành 4",
    "type": "Bánh mì",
    "location": "11 Lý Thường Kiệt, Hóc Môn, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20B%E1%BA%BFn%20Th%C3%A0nh%204%2011%20L%C3%BD%20Th%C6%B0%E1%BB%9Dng%20Ki%E1%BB%87t%2C%20H%C3%B3c%20M%C3%B4n%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Hóc Môn. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Nam Hải 5",
    "type": "Bánh mì",
    "location": "204 Trưng Nữ Vương, Hóc Môn, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20Nam%20H%E1%BA%A3i%205%20204%20Tr%C6%B0ng%20N%E1%BB%AF%20V%C6%B0%C6%A1ng%2C%20H%C3%B3c%20M%C3%B4n%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Hóc Môn. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Nam Hải",
    "type": "Ăn vặt",
    "location": "90 Song Hành, Hóc Môn, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20Nam%20H%E1%BA%A3i%2090%20Song%20H%C3%A0nh%2C%20H%C3%B3c%20M%C3%B4n%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Hóc Môn. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Hoàn Kiếm 2",
    "type": "Ăn vặt",
    "location": "447 Lê Lợi, Hóc Môn, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20Ho%C3%A0n%20Ki%E1%BA%BFm%202%20447%20L%C3%AA%20L%E1%BB%A3i%2C%20H%C3%B3c%20M%C3%B4n%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Hóc Môn. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Nắng Vàng 3",
    "type": "Ăn vặt",
    "location": "76 Lê Lợi, Hóc Môn, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20N%E1%BA%AFng%20V%C3%A0ng%203%2076%20L%C3%AA%20L%E1%BB%A3i%2C%20H%C3%B3c%20M%C3%B4n%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Hóc Môn. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Kim Anh 4",
    "type": "Ăn vặt",
    "location": "239 Song Hành, Hóc Môn, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20Kim%20Anh%204%20239%20Song%20H%C3%A0nh%2C%20H%C3%B3c%20M%C3%B4n%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Hóc Môn. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Nam Hải 5",
    "type": "Ăn vặt",
    "location": "402 Nguyễn Ảnh Thủ, Hóc Môn, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20Nam%20H%E1%BA%A3i%205%20402%20Nguy%E1%BB%85n%20%E1%BA%A2nh%20Th%E1%BB%A7%2C%20H%C3%B3c%20M%C3%B4n%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Hóc Môn. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Mưa Hồng",
    "type": "Bánh cuốn",
    "location": "91 Lê Lợi, Hóc Môn, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20M%C6%B0a%20H%E1%BB%93ng%2091%20L%C3%AA%20L%E1%BB%A3i%2C%20H%C3%B3c%20M%C3%B4n%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Hóc Môn. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Chú Bảy 2",
    "type": "Bánh cuốn",
    "location": "170 Song Hành, Hóc Môn, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20Ch%C3%BA%20B%E1%BA%A3y%202%20170%20Song%20H%C3%A0nh%2C%20H%C3%B3c%20M%C3%B4n%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Hóc Môn. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Ngọc Lan 3",
    "type": "Bánh cuốn",
    "location": "254 Song Hành, Hóc Môn, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20Ng%E1%BB%8Dc%20Lan%203%20254%20Song%20H%C3%A0nh%2C%20H%C3%B3c%20M%C3%B4n%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Hóc Môn. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Vĩnh Lộc 4",
    "type": "Bánh cuốn",
    "location": "439 Lê Lợi, Hóc Môn, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20V%C4%A9nh%20L%E1%BB%99c%204%20439%20L%C3%AA%20L%E1%BB%A3i%2C%20H%C3%B3c%20M%C3%B4n%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Hóc Môn. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Gia Đình 5",
    "type": "Bánh cuốn",
    "location": "151 Nguyễn Ảnh Thủ, Hóc Môn, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20Gia%20%C4%90%C3%ACnh%205%20151%20Nguy%E1%BB%85n%20%E1%BA%A2nh%20Th%E1%BB%A7%2C%20H%C3%B3c%20M%C3%B4n%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Hóc Môn. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Ông Già",
    "type": "Bún đậu",
    "location": "317 Trưng Nữ Vương, Hóc Môn, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20%C3%94ng%20Gi%C3%A0%20317%20Tr%C6%B0ng%20N%E1%BB%AF%20V%C6%B0%C6%A1ng%2C%20H%C3%B3c%20M%C3%B4n%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Hóc Môn. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Thanh Đa 2",
    "type": "Bún đậu",
    "location": "481 Trưng Nữ Vương, Hóc Môn, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20Thanh%20%C4%90a%202%20481%20Tr%C6%B0ng%20N%E1%BB%AF%20V%C6%B0%C6%A1ng%2C%20H%C3%B3c%20M%C3%B4n%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Hóc Môn. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Nam Hải 3",
    "type": "Bún đậu",
    "location": "499 Trưng Nữ Vương, Hóc Môn, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20Nam%20H%E1%BA%A3i%203%20499%20Tr%C6%B0ng%20N%E1%BB%AF%20V%C6%B0%C6%A1ng%2C%20H%C3%B3c%20M%C3%B4n%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Hóc Môn. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Mưa Hồng 4",
    "type": "Bún đậu",
    "location": "157 Song Hành, Hóc Môn, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20M%C6%B0a%20H%E1%BB%93ng%204%20157%20Song%20H%C3%A0nh%2C%20H%C3%B3c%20M%C3%B4n%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Hóc Môn. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Phố Hội 5",
    "type": "Bún đậu",
    "location": "406 Lý Thường Kiệt, Hóc Môn, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20Ph%E1%BB%91%20H%E1%BB%99i%205%20406%20L%C3%BD%20Th%C6%B0%E1%BB%9Dng%20Ki%E1%BB%87t%2C%20H%C3%B3c%20M%C3%B4n%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Hóc Môn. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Thái Bình",
    "type": "Hải sản",
    "location": "476 Trưng Nữ Vương, Hóc Môn, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20Th%C3%A1i%20B%C3%ACnh%20476%20Tr%C6%B0ng%20N%E1%BB%AF%20V%C6%B0%C6%A1ng%2C%20H%C3%B3c%20M%C3%B4n%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Hóc Môn. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Sông Trăng 2",
    "type": "Hải sản",
    "location": "357 Lý Thường Kiệt, Hóc Môn, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20S%C3%B4ng%20Tr%C4%83ng%202%20357%20L%C3%BD%20Th%C6%B0%E1%BB%9Dng%20Ki%E1%BB%87t%2C%20H%C3%B3c%20M%C3%B4n%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Hóc Môn. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Bà Năm 3",
    "type": "Hải sản",
    "location": "418 Trưng Nữ Vương, Hóc Môn, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20B%C3%A0%20N%C4%83m%203%20418%20Tr%C6%B0ng%20N%E1%BB%AF%20V%C6%B0%C6%A1ng%2C%20H%C3%B3c%20M%C3%B4n%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Hóc Môn. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Xưa & Nay 4",
    "type": "Hải sản",
    "location": "81 Song Hành, Hóc Môn, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20X%C6%B0a%20%26%20Nay%204%2081%20Song%20H%C3%A0nh%2C%20H%C3%B3c%20M%C3%B4n%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Hóc Môn. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Đệ Nhất 5",
    "type": "Hải sản",
    "location": "135 Trưng Nữ Vương, Hóc Môn, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20%C4%90%E1%BB%87%20Nh%E1%BA%A5t%205%20135%20Tr%C6%B0ng%20N%E1%BB%AF%20V%C6%B0%C6%A1ng%2C%20H%C3%B3c%20M%C3%B4n%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Hóc Môn. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Hồng Phát",
    "type": "Ốc",
    "location": "400 Nguyễn Ảnh Thủ, Hóc Môn, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20H%E1%BB%93ng%20Ph%C3%A1t%20400%20Nguy%E1%BB%85n%20%E1%BA%A2nh%20Th%E1%BB%A7%2C%20H%C3%B3c%20M%C3%B4n%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Hóc Môn. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Viet Kitchen 2",
    "type": "Ốc",
    "location": "319 Lê Lợi, Hóc Môn, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20Viet%20Kitchen%202%20319%20L%C3%AA%20L%E1%BB%A3i%2C%20H%C3%B3c%20M%C3%B4n%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Hóc Môn. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Cô Ba 3",
    "type": "Ốc",
    "location": "368 Nguyễn Ảnh Thủ, Hóc Môn, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20C%C3%B4%20Ba%203%20368%20Nguy%E1%BB%85n%20%E1%BA%A2nh%20Th%E1%BB%A7%2C%20H%C3%B3c%20M%C3%B4n%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Hóc Môn. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Hồng Phát 4",
    "type": "Ốc",
    "location": "180 Lý Thường Kiệt, Hóc Môn, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20H%E1%BB%93ng%20Ph%C3%A1t%204%20180%20L%C3%BD%20Th%C6%B0%E1%BB%9Dng%20Ki%E1%BB%87t%2C%20H%C3%B3c%20M%C3%B4n%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Hóc Môn. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Dì Liên 5",
    "type": "Ốc",
    "location": "238 Nguyễn Ảnh Thủ, Hóc Môn, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20D%C3%AC%20Li%C3%AAn%205%20238%20Nguy%E1%BB%85n%20%E1%BA%A2nh%20Th%E1%BB%A7%2C%20H%C3%B3c%20M%C3%B4n%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Hóc Môn. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Local Taste",
    "type": "Mì",
    "location": "270 Lê Lợi, Hóc Môn, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20Local%20Taste%20270%20L%C3%AA%20L%E1%BB%A3i%2C%20H%C3%B3c%20M%C3%B4n%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Hóc Môn. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Đông Á 2",
    "type": "Mì",
    "location": "341 Song Hành, Hóc Môn, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20%C4%90%C3%B4ng%20%C3%81%202%20341%20Song%20H%C3%A0nh%2C%20H%C3%B3c%20M%C3%B4n%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Hóc Môn. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Đệ Nhất 3",
    "type": "Mì",
    "location": "99 Lê Lợi, Hóc Môn, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20%C4%90%E1%BB%87%20Nh%E1%BA%A5t%203%2099%20L%C3%AA%20L%E1%BB%A3i%2C%20H%C3%B3c%20M%C3%B4n%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Hóc Môn. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Thanh Xuân 4",
    "type": "Mì",
    "location": "75 Lý Thường Kiệt, Hóc Môn, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20Thanh%20Xu%C3%A2n%204%2075%20L%C3%BD%20Th%C6%B0%E1%BB%9Dng%20Ki%E1%BB%87t%2C%20H%C3%B3c%20M%C3%B4n%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Hóc Môn. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Phố Hội 5",
    "type": "Mì",
    "location": "305 Lê Lợi, Hóc Môn, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20Ph%E1%BB%91%20H%E1%BB%99i%205%20305%20L%C3%AA%20L%E1%BB%A3i%2C%20H%C3%B3c%20M%C3%B4n%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Hóc Môn. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Phố Hội",
    "type": "Hủ tiếu",
    "location": "278 Song Hành, Hóc Môn, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20Ph%E1%BB%91%20H%E1%BB%99i%20278%20Song%20H%C3%A0nh%2C%20H%C3%B3c%20M%C3%B4n%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Hóc Môn. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Xưa & Nay 2",
    "type": "Hủ tiếu",
    "location": "181 Lý Thường Kiệt, Hóc Môn, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20X%C6%B0a%20%26%20Nay%202%20181%20L%C3%BD%20Th%C6%B0%E1%BB%9Dng%20Ki%E1%BB%87t%2C%20H%C3%B3c%20M%C3%B4n%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Hóc Môn. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Hoàn Kiếm 3",
    "type": "Hủ tiếu",
    "location": "6 Lý Thường Kiệt, Hóc Môn, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20Ho%C3%A0n%20Ki%E1%BA%BFm%203%206%20L%C3%BD%20Th%C6%B0%E1%BB%9Dng%20Ki%E1%BB%87t%2C%20H%C3%B3c%20M%C3%B4n%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Hóc Môn. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Viet Kitchen 4",
    "type": "Hủ tiếu",
    "location": "146 Nguyễn Ảnh Thủ, Hóc Môn, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20Viet%20Kitchen%204%20146%20Nguy%E1%BB%85n%20%E1%BA%A2nh%20Th%E1%BB%A7%2C%20H%C3%B3c%20M%C3%B4n%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Hóc Môn. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Viet Kitchen 5",
    "type": "Hủ tiếu",
    "location": "135 Song Hành, Hóc Môn, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20Viet%20Kitchen%205%20135%20Song%20H%C3%A0nh%2C%20H%C3%B3c%20M%C3%B4n%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Hóc Môn. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Cô Ba",
    "type": "Đồ nướng",
    "location": "379 Lê Lợi, Hóc Môn, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20C%C3%B4%20Ba%20379%20L%C3%AA%20L%E1%BB%A3i%2C%20H%C3%B3c%20M%C3%B4n%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Hóc Môn. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Hoàn Kiếm 2",
    "type": "Đồ nướng",
    "location": "452 Song Hành, Hóc Môn, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20Ho%C3%A0n%20Ki%E1%BA%BFm%202%20452%20Song%20H%C3%A0nh%2C%20H%C3%B3c%20M%C3%B4n%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Hóc Môn. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Local Taste 3",
    "type": "Đồ nướng",
    "location": "10 Nguyễn Ảnh Thủ, Hóc Môn, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20Local%20Taste%203%2010%20Nguy%E1%BB%85n%20%E1%BA%A2nh%20Th%E1%BB%A7%2C%20H%C3%B3c%20M%C3%B4n%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Hóc Môn. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Viet Kitchen 4",
    "type": "Đồ nướng",
    "location": "192 Song Hành, Hóc Môn, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20Viet%20Kitchen%204%20192%20Song%20H%C3%A0nh%2C%20H%C3%B3c%20M%C3%B4n%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Hóc Môn. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Phố Hội 5",
    "type": "Đồ nướng",
    "location": "300 Lê Lợi, Hóc Môn, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20Ph%E1%BB%91%20H%E1%BB%99i%205%20300%20L%C3%AA%20L%E1%BB%A3i%2C%20H%C3%B3c%20M%C3%B4n%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Hóc Môn. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Local Taste",
    "type": "Nước & Cafe",
    "location": "263 Trưng Nữ Vương, Hóc Môn, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20Local%20Taste%20263%20Tr%C6%B0ng%20N%E1%BB%AF%20V%C6%B0%C6%A1ng%2C%20H%C3%B3c%20M%C3%B4n%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Hóc Môn. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Kim Anh 2",
    "type": "Nước & Cafe",
    "location": "417 Nguyễn Ảnh Thủ, Hóc Môn, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20Kim%20Anh%202%20417%20Nguy%E1%BB%85n%20%E1%BA%A2nh%20Th%E1%BB%A7%2C%20H%C3%B3c%20M%C3%B4n%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Hóc Môn. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Chú Bảy 3",
    "type": "Nước & Cafe",
    "location": "385 Song Hành, Hóc Môn, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20Ch%C3%BA%20B%E1%BA%A3y%203%20385%20Song%20H%C3%A0nh%2C%20H%C3%B3c%20M%C3%B4n%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Hóc Môn. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Anh Tư 4",
    "type": "Nước & Cafe",
    "location": "431 Nguyễn Ảnh Thủ, Hóc Môn, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20Anh%20T%C6%B0%204%20431%20Nguy%E1%BB%85n%20%E1%BA%A2nh%20Th%E1%BB%A7%2C%20H%C3%B3c%20M%C3%B4n%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Hóc Môn. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Hồng Phát 5",
    "type": "Nước & Cafe",
    "location": "416 Lê Lợi, Hóc Môn, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20H%E1%BB%93ng%20Ph%C3%A1t%205%20416%20L%C3%AA%20L%E1%BB%A3i%2C%20H%C3%B3c%20M%C3%B4n%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Hóc Môn. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Minh Khai",
    "type": "Chè",
    "location": "123 Lê Lợi, Hóc Môn, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20Minh%20Khai%20123%20L%C3%AA%20L%E1%BB%A3i%2C%20H%C3%B3c%20M%C3%B4n%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Hóc Môn. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Hồng Phát 2",
    "type": "Chè",
    "location": "356 Song Hành, Hóc Môn, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20H%E1%BB%93ng%20Ph%C3%A1t%202%20356%20Song%20H%C3%A0nh%2C%20H%C3%B3c%20M%C3%B4n%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Hóc Môn. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Nắng Vàng 3",
    "type": "Chè",
    "location": "266 Trưng Nữ Vương, Hóc Môn, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20N%E1%BA%AFng%20V%C3%A0ng%203%20266%20Tr%C6%B0ng%20N%E1%BB%AF%20V%C6%B0%C6%A1ng%2C%20H%C3%B3c%20M%C3%B4n%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Hóc Môn. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Bà Năm 4",
    "type": "Chè",
    "location": "186 Trưng Nữ Vương, Hóc Môn, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20B%C3%A0%20N%C4%83m%204%20186%20Tr%C6%B0ng%20N%E1%BB%AF%20V%C6%B0%C6%A1ng%2C%20H%C3%B3c%20M%C3%B4n%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Hóc Môn. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Nam Hải 5",
    "type": "Chè",
    "location": "35 Song Hành, Hóc Môn, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20Nam%20H%E1%BA%A3i%205%2035%20Song%20H%C3%A0nh%2C%20H%C3%B3c%20M%C3%B4n%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Hóc Môn. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Hào Hùng",
    "type": "Bánh xèo",
    "location": "304 Nguyễn Ảnh Thủ, Hóc Môn, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20H%C3%A0o%20H%C3%B9ng%20304%20Nguy%E1%BB%85n%20%E1%BA%A2nh%20Th%E1%BB%A7%2C%20H%C3%B3c%20M%C3%B4n%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Hóc Môn. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Hồng Phát 2",
    "type": "Bánh xèo",
    "location": "377 Nguyễn Ảnh Thủ, Hóc Môn, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20H%E1%BB%93ng%20Ph%C3%A1t%202%20377%20Nguy%E1%BB%85n%20%E1%BA%A2nh%20Th%E1%BB%A7%2C%20H%C3%B3c%20M%C3%B4n%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Hóc Môn. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Ông Già 3",
    "type": "Bánh xèo",
    "location": "404 Trưng Nữ Vương, Hóc Môn, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20%C3%94ng%20Gi%C3%A0%203%20404%20Tr%C6%B0ng%20N%E1%BB%AF%20V%C6%B0%C6%A1ng%2C%20H%C3%B3c%20M%C3%B4n%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Hóc Môn. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Bà Năm 4",
    "type": "Bánh xèo",
    "location": "488 Nguyễn Ảnh Thủ, Hóc Môn, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20B%C3%A0%20N%C4%83m%204%20488%20Nguy%E1%BB%85n%20%E1%BA%A2nh%20Th%E1%BB%A7%2C%20H%C3%B3c%20M%C3%B4n%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Hóc Môn. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Hào Hùng 5",
    "type": "Bánh xèo",
    "location": "65 Song Hành, Hóc Môn, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20H%C3%A0o%20H%C3%B9ng%205%2065%20Song%20H%C3%A0nh%2C%20H%C3%B3c%20M%C3%B4n%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Hóc Môn. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Cô Ba",
    "type": "Khác",
    "location": "139 Lê Lợi, Hóc Môn, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20C%C3%B4%20Ba%20139%20L%C3%AA%20L%E1%BB%A3i%2C%20H%C3%B3c%20M%C3%B4n%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Hóc Môn. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Phố Hội 2",
    "type": "Khác",
    "location": "178 Lê Lợi, Hóc Môn, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20Ph%E1%BB%91%20H%E1%BB%99i%202%20178%20L%C3%AA%20L%E1%BB%A3i%2C%20H%C3%B3c%20M%C3%B4n%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Hóc Môn. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Đệ Nhất 3",
    "type": "Khác",
    "location": "427 Trưng Nữ Vương, Hóc Môn, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20%C4%90%E1%BB%87%20Nh%E1%BA%A5t%203%20427%20Tr%C6%B0ng%20N%E1%BB%AF%20V%C6%B0%C6%A1ng%2C%20H%C3%B3c%20M%C3%B4n%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Hóc Môn. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Hồng Phát 4",
    "type": "Khác",
    "location": "49 Lê Lợi, Hóc Môn, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20H%E1%BB%93ng%20Ph%C3%A1t%204%2049%20L%C3%AA%20L%E1%BB%A3i%2C%20H%C3%B3c%20M%C3%B4n%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Hóc Môn. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Hồng Phát 5",
    "type": "Khác",
    "location": "141 Trưng Nữ Vương, Hóc Môn, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20H%E1%BB%93ng%20Ph%C3%A1t%205%20141%20Tr%C6%B0ng%20N%E1%BB%AF%20V%C6%B0%C6%A1ng%2C%20H%C3%B3c%20M%C3%B4n%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Hóc Môn. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Cô Ba",
    "type": "Phở",
    "location": "84 Nguyễn Văn Khạ, Củ Chi, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20C%C3%B4%20Ba%2084%20Nguy%E1%BB%85n%20V%C4%83n%20Kh%E1%BA%A1%2C%20C%E1%BB%A7%20Chi%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Củ Chi. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Minh Khai 2",
    "type": "Phở",
    "location": "26 Tỉnh Lộ 8, Củ Chi, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20Minh%20Khai%202%2026%20T%E1%BB%89nh%20L%E1%BB%99%208%2C%20C%E1%BB%A7%20Chi%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Củ Chi. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Xưa & Nay 3",
    "type": "Phở",
    "location": "51 Tỉnh Lộ 8, Củ Chi, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20X%C6%B0a%20%26%20Nay%203%2051%20T%E1%BB%89nh%20L%E1%BB%99%208%2C%20C%E1%BB%A7%20Chi%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Củ Chi. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Hào Hùng 4",
    "type": "Phở",
    "location": "498 Hà Duy Phiên, Củ Chi, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20H%C3%A0o%20H%C3%B9ng%204%20498%20H%C3%A0%20Duy%20Phi%C3%AAn%2C%20C%E1%BB%A7%20Chi%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Củ Chi. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Hương Việt 5",
    "type": "Phở",
    "location": "271 Nguyễn Văn Khạ, Củ Chi, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20H%C6%B0%C6%A1ng%20Vi%E1%BB%87t%205%20271%20Nguy%E1%BB%85n%20V%C4%83n%20Kh%E1%BA%A1%2C%20C%E1%BB%A7%20Chi%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Củ Chi. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Vĩnh Lộc",
    "type": "Bún",
    "location": "218 Hà Duy Phiên, Củ Chi, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20V%C4%A9nh%20L%E1%BB%99c%20218%20H%C3%A0%20Duy%20Phi%C3%AAn%2C%20C%E1%BB%A7%20Chi%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Củ Chi. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Local Taste 2",
    "type": "Bún",
    "location": "192 Quốc Lộ 22, Củ Chi, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20Local%20Taste%202%20192%20Qu%E1%BB%91c%20L%E1%BB%99%2022%2C%20C%E1%BB%A7%20Chi%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Củ Chi. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Hương Việt 3",
    "type": "Bún",
    "location": "467 Tỉnh Lộ 8, Củ Chi, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20H%C6%B0%C6%A1ng%20Vi%E1%BB%87t%203%20467%20T%E1%BB%89nh%20L%E1%BB%99%208%2C%20C%E1%BB%A7%20Chi%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Củ Chi. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Hồng Phát 4",
    "type": "Bún",
    "location": "484 Liêu Bình Hương, Củ Chi, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20H%E1%BB%93ng%20Ph%C3%A1t%204%20484%20Li%C3%AAu%20B%C3%ACnh%20H%C6%B0%C6%A1ng%2C%20C%E1%BB%A7%20Chi%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Củ Chi. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Ngọc Lan 5",
    "type": "Bún",
    "location": "217 Liêu Bình Hương, Củ Chi, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20Ng%E1%BB%8Dc%20Lan%205%20217%20Li%C3%AAu%20B%C3%ACnh%20H%C6%B0%C6%A1ng%2C%20C%E1%BB%A7%20Chi%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Củ Chi. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Local Taste",
    "type": "Cơm",
    "location": "275 Nguyễn Văn Khạ, Củ Chi, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20Local%20Taste%20275%20Nguy%E1%BB%85n%20V%C4%83n%20Kh%E1%BA%A1%2C%20C%E1%BB%A7%20Chi%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Củ Chi. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Xưa & Nay 2",
    "type": "Cơm",
    "location": "61 Hà Duy Phiên, Củ Chi, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20X%C6%B0a%20%26%20Nay%202%2061%20H%C3%A0%20Duy%20Phi%C3%AAn%2C%20C%E1%BB%A7%20Chi%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Củ Chi. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Thái Bình 3",
    "type": "Cơm",
    "location": "444 Tỉnh Lộ 8, Củ Chi, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20Th%C3%A1i%20B%C3%ACnh%203%20444%20T%E1%BB%89nh%20L%E1%BB%99%208%2C%20C%E1%BB%A7%20Chi%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Củ Chi. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Gia Đình 4",
    "type": "Cơm",
    "location": "72 Tỉnh Lộ 8, Củ Chi, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20Gia%20%C4%90%C3%ACnh%204%2072%20T%E1%BB%89nh%20L%E1%BB%99%208%2C%20C%E1%BB%A7%20Chi%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Củ Chi. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Gia Đình 5",
    "type": "Cơm",
    "location": "20 Tỉnh Lộ 8, Củ Chi, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20Gia%20%C4%90%C3%ACnh%205%2020%20T%E1%BB%89nh%20L%E1%BB%99%208%2C%20C%E1%BB%A7%20Chi%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Củ Chi. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Đông Á",
    "type": "Lẩu",
    "location": "74 Liêu Bình Hương, Củ Chi, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20%C4%90%C3%B4ng%20%C3%81%2074%20Li%C3%AAu%20B%C3%ACnh%20H%C6%B0%C6%A1ng%2C%20C%E1%BB%A7%20Chi%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Củ Chi. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Kim Anh 2",
    "type": "Lẩu",
    "location": "289 Liêu Bình Hương, Củ Chi, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20Kim%20Anh%202%20289%20Li%C3%AAu%20B%C3%ACnh%20H%C6%B0%C6%A1ng%2C%20C%E1%BB%A7%20Chi%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Củ Chi. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Viet Kitchen 3",
    "type": "Lẩu",
    "location": "429 Quốc Lộ 22, Củ Chi, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20Viet%20Kitchen%203%20429%20Qu%E1%BB%91c%20L%E1%BB%99%2022%2C%20C%E1%BB%A7%20Chi%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Củ Chi. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Chú Bảy 4",
    "type": "Lẩu",
    "location": "326 Liêu Bình Hương, Củ Chi, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20Ch%C3%BA%20B%E1%BA%A3y%204%20326%20Li%C3%AAu%20B%C3%ACnh%20H%C6%B0%C6%A1ng%2C%20C%E1%BB%A7%20Chi%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Củ Chi. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Ông Già 5",
    "type": "Lẩu",
    "location": "437 Nguyễn Văn Khạ, Củ Chi, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20%C3%94ng%20Gi%C3%A0%205%20437%20Nguy%E1%BB%85n%20V%C4%83n%20Kh%E1%BA%A1%2C%20C%E1%BB%A7%20Chi%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Củ Chi. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Đồng Quê",
    "type": "Đồ chay",
    "location": "119 Nguyễn Văn Khạ, Củ Chi, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20%C4%90%E1%BB%93ng%20Qu%C3%AA%20119%20Nguy%E1%BB%85n%20V%C4%83n%20Kh%E1%BA%A1%2C%20C%E1%BB%A7%20Chi%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Củ Chi. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Chú Bảy 2",
    "type": "Đồ chay",
    "location": "96 Quốc Lộ 22, Củ Chi, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20Ch%C3%BA%20B%E1%BA%A3y%202%2096%20Qu%E1%BB%91c%20L%E1%BB%99%2022%2C%20C%E1%BB%A7%20Chi%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Củ Chi. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Dì Liên 3",
    "type": "Đồ chay",
    "location": "292 Quốc Lộ 22, Củ Chi, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20D%C3%AC%20Li%C3%AAn%203%20292%20Qu%E1%BB%91c%20L%E1%BB%99%2022%2C%20C%E1%BB%A7%20Chi%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Củ Chi. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Sài Thành 4",
    "type": "Đồ chay",
    "location": "387 Liêu Bình Hương, Củ Chi, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20S%C3%A0i%20Th%C3%A0nh%204%20387%20Li%C3%AAu%20B%C3%ACnh%20H%C6%B0%C6%A1ng%2C%20C%E1%BB%A7%20Chi%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Củ Chi. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Ngọc Lan 5",
    "type": "Đồ chay",
    "location": "9 Nguyễn Văn Khạ, Củ Chi, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20Ng%E1%BB%8Dc%20Lan%205%209%20Nguy%E1%BB%85n%20V%C4%83n%20Kh%E1%BA%A1%2C%20C%E1%BB%A7%20Chi%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Củ Chi. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Vĩnh Lộc",
    "type": "Bánh mì",
    "location": "497 Tỉnh Lộ 8, Củ Chi, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20V%C4%A9nh%20L%E1%BB%99c%20497%20T%E1%BB%89nh%20L%E1%BB%99%208%2C%20C%E1%BB%A7%20Chi%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Củ Chi. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Đông Á 2",
    "type": "Bánh mì",
    "location": "52 Hà Duy Phiên, Củ Chi, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20%C4%90%C3%B4ng%20%C3%81%202%2052%20H%C3%A0%20Duy%20Phi%C3%AAn%2C%20C%E1%BB%A7%20Chi%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Củ Chi. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Thái Bình 3",
    "type": "Bánh mì",
    "location": "262 Quốc Lộ 22, Củ Chi, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20Th%C3%A1i%20B%C3%ACnh%203%20262%20Qu%E1%BB%91c%20L%E1%BB%99%2022%2C%20C%E1%BB%A7%20Chi%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Củ Chi. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Viet Kitchen 4",
    "type": "Bánh mì",
    "location": "237 Nguyễn Văn Khạ, Củ Chi, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20Viet%20Kitchen%204%20237%20Nguy%E1%BB%85n%20V%C4%83n%20Kh%E1%BA%A1%2C%20C%E1%BB%A7%20Chi%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Củ Chi. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Local Taste 5",
    "type": "Bánh mì",
    "location": "76 Nguyễn Văn Khạ, Củ Chi, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20Local%20Taste%205%2076%20Nguy%E1%BB%85n%20V%C4%83n%20Kh%E1%BA%A1%2C%20C%E1%BB%A7%20Chi%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Củ Chi. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Nắng Vàng",
    "type": "Ăn vặt",
    "location": "149 Nguyễn Văn Khạ, Củ Chi, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20N%E1%BA%AFng%20V%C3%A0ng%20149%20Nguy%E1%BB%85n%20V%C4%83n%20Kh%E1%BA%A1%2C%20C%E1%BB%A7%20Chi%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Củ Chi. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Viet Kitchen 2",
    "type": "Ăn vặt",
    "location": "151 Nguyễn Văn Khạ, Củ Chi, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20Viet%20Kitchen%202%20151%20Nguy%E1%BB%85n%20V%C4%83n%20Kh%E1%BA%A1%2C%20C%E1%BB%A7%20Chi%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Củ Chi. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Saigon Deli 3",
    "type": "Ăn vặt",
    "location": "276 Tỉnh Lộ 8, Củ Chi, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20Saigon%20Deli%203%20276%20T%E1%BB%89nh%20L%E1%BB%99%208%2C%20C%E1%BB%A7%20Chi%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Củ Chi. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Phố Hội 4",
    "type": "Ăn vặt",
    "location": "451 Tỉnh Lộ 8, Củ Chi, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20Ph%E1%BB%91%20H%E1%BB%99i%204%20451%20T%E1%BB%89nh%20L%E1%BB%99%208%2C%20C%E1%BB%A7%20Chi%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Củ Chi. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Kim Anh 5",
    "type": "Ăn vặt",
    "location": "391 Nguyễn Văn Khạ, Củ Chi, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20Kim%20Anh%205%20391%20Nguy%E1%BB%85n%20V%C4%83n%20Kh%E1%BA%A1%2C%20C%E1%BB%A7%20Chi%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Củ Chi. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Anh Tư",
    "type": "Bánh cuốn",
    "location": "398 Nguyễn Văn Khạ, Củ Chi, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20Anh%20T%C6%B0%20398%20Nguy%E1%BB%85n%20V%C4%83n%20Kh%E1%BA%A1%2C%20C%E1%BB%A7%20Chi%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Củ Chi. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Đệ Nhất 2",
    "type": "Bánh cuốn",
    "location": "85 Nguyễn Văn Khạ, Củ Chi, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20%C4%90%E1%BB%87%20Nh%E1%BA%A5t%202%2085%20Nguy%E1%BB%85n%20V%C4%83n%20Kh%E1%BA%A1%2C%20C%E1%BB%A7%20Chi%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Củ Chi. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Hoàn Kiếm 3",
    "type": "Bánh cuốn",
    "location": "109 Liêu Bình Hương, Củ Chi, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20Ho%C3%A0n%20Ki%E1%BA%BFm%203%20109%20Li%C3%AAu%20B%C3%ACnh%20H%C6%B0%C6%A1ng%2C%20C%E1%BB%A7%20Chi%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Củ Chi. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Đông Á 4",
    "type": "Bánh cuốn",
    "location": "470 Tỉnh Lộ 8, Củ Chi, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20%C4%90%C3%B4ng%20%C3%81%204%20470%20T%E1%BB%89nh%20L%E1%BB%99%208%2C%20C%E1%BB%A7%20Chi%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Củ Chi. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Hương Việt 5",
    "type": "Bánh cuốn",
    "location": "246 Tỉnh Lộ 8, Củ Chi, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20H%C6%B0%C6%A1ng%20Vi%E1%BB%87t%205%20246%20T%E1%BB%89nh%20L%E1%BB%99%208%2C%20C%E1%BB%A7%20Chi%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Củ Chi. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Dì Liên",
    "type": "Bún đậu",
    "location": "28 Nguyễn Văn Khạ, Củ Chi, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20D%C3%AC%20Li%C3%AAn%2028%20Nguy%E1%BB%85n%20V%C4%83n%20Kh%E1%BA%A1%2C%20C%E1%BB%A7%20Chi%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Củ Chi. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Nắng Vàng 2",
    "type": "Bún đậu",
    "location": "465 Nguyễn Văn Khạ, Củ Chi, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20N%E1%BA%AFng%20V%C3%A0ng%202%20465%20Nguy%E1%BB%85n%20V%C4%83n%20Kh%E1%BA%A1%2C%20C%E1%BB%A7%20Chi%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Củ Chi. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Nắng Vàng 3",
    "type": "Bún đậu",
    "location": "303 Tỉnh Lộ 8, Củ Chi, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20N%E1%BA%AFng%20V%C3%A0ng%203%20303%20T%E1%BB%89nh%20L%E1%BB%99%208%2C%20C%E1%BB%A7%20Chi%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Củ Chi. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Xưa & Nay 4",
    "type": "Bún đậu",
    "location": "428 Liêu Bình Hương, Củ Chi, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20X%C6%B0a%20%26%20Nay%204%20428%20Li%C3%AAu%20B%C3%ACnh%20H%C6%B0%C6%A1ng%2C%20C%E1%BB%A7%20Chi%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Củ Chi. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Đông Á 5",
    "type": "Bún đậu",
    "location": "280 Quốc Lộ 22, Củ Chi, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20%C4%90%C3%B4ng%20%C3%81%205%20280%20Qu%E1%BB%91c%20L%E1%BB%99%2022%2C%20C%E1%BB%A7%20Chi%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Củ Chi. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Thanh Đa",
    "type": "Hải sản",
    "location": "403 Hà Duy Phiên, Củ Chi, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20Thanh%20%C4%90a%20403%20H%C3%A0%20Duy%20Phi%C3%AAn%2C%20C%E1%BB%A7%20Chi%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Củ Chi. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Anh Tư 2",
    "type": "Hải sản",
    "location": "360 Nguyễn Văn Khạ, Củ Chi, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20Anh%20T%C6%B0%202%20360%20Nguy%E1%BB%85n%20V%C4%83n%20Kh%E1%BA%A1%2C%20C%E1%BB%A7%20Chi%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Củ Chi. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Phố Hội 3",
    "type": "Hải sản",
    "location": "239 Tỉnh Lộ 8, Củ Chi, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20Ph%E1%BB%91%20H%E1%BB%99i%203%20239%20T%E1%BB%89nh%20L%E1%BB%99%208%2C%20C%E1%BB%A7%20Chi%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Củ Chi. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Hương Việt 4",
    "type": "Hải sản",
    "location": "475 Tỉnh Lộ 8, Củ Chi, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20H%C6%B0%C6%A1ng%20Vi%E1%BB%87t%204%20475%20T%E1%BB%89nh%20L%E1%BB%99%208%2C%20C%E1%BB%A7%20Chi%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Củ Chi. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Đông Á 5",
    "type": "Hải sản",
    "location": "305 Tỉnh Lộ 8, Củ Chi, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20%C4%90%C3%B4ng%20%C3%81%205%20305%20T%E1%BB%89nh%20L%E1%BB%99%208%2C%20C%E1%BB%A7%20Chi%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Củ Chi. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Nắng Vàng",
    "type": "Ốc",
    "location": "462 Nguyễn Văn Khạ, Củ Chi, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20N%E1%BA%AFng%20V%C3%A0ng%20462%20Nguy%E1%BB%85n%20V%C4%83n%20Kh%E1%BA%A1%2C%20C%E1%BB%A7%20Chi%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Củ Chi. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Hoàn Kiếm 2",
    "type": "Ốc",
    "location": "475 Quốc Lộ 22, Củ Chi, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20Ho%C3%A0n%20Ki%E1%BA%BFm%202%20475%20Qu%E1%BB%91c%20L%E1%BB%99%2022%2C%20C%E1%BB%A7%20Chi%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Củ Chi. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Xưa & Nay 3",
    "type": "Ốc",
    "location": "479 Liêu Bình Hương, Củ Chi, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20X%C6%B0a%20%26%20Nay%203%20479%20Li%C3%AAu%20B%C3%ACnh%20H%C6%B0%C6%A1ng%2C%20C%E1%BB%A7%20Chi%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Củ Chi. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Minh Khai 4",
    "type": "Ốc",
    "location": "273 Nguyễn Văn Khạ, Củ Chi, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20Minh%20Khai%204%20273%20Nguy%E1%BB%85n%20V%C4%83n%20Kh%E1%BA%A1%2C%20C%E1%BB%A7%20Chi%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Củ Chi. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Ông Già 5",
    "type": "Ốc",
    "location": "158 Liêu Bình Hương, Củ Chi, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20%C3%94ng%20Gi%C3%A0%205%20158%20Li%C3%AAu%20B%C3%ACnh%20H%C6%B0%C6%A1ng%2C%20C%E1%BB%A7%20Chi%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Củ Chi. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Đệ Nhất",
    "type": "Mì",
    "location": "51 Nguyễn Văn Khạ, Củ Chi, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20%C4%90%E1%BB%87%20Nh%E1%BA%A5t%2051%20Nguy%E1%BB%85n%20V%C4%83n%20Kh%E1%BA%A1%2C%20C%E1%BB%A7%20Chi%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Củ Chi. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Vĩnh Lộc 2",
    "type": "Mì",
    "location": "87 Hà Duy Phiên, Củ Chi, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20V%C4%A9nh%20L%E1%BB%99c%202%2087%20H%C3%A0%20Duy%20Phi%C3%AAn%2C%20C%E1%BB%A7%20Chi%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Củ Chi. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Hoàn Kiếm 3",
    "type": "Mì",
    "location": "223 Quốc Lộ 22, Củ Chi, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20Ho%C3%A0n%20Ki%E1%BA%BFm%203%20223%20Qu%E1%BB%91c%20L%E1%BB%99%2022%2C%20C%E1%BB%A7%20Chi%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Củ Chi. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Nam Hải 4",
    "type": "Mì",
    "location": "348 Quốc Lộ 22, Củ Chi, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20Nam%20H%E1%BA%A3i%204%20348%20Qu%E1%BB%91c%20L%E1%BB%99%2022%2C%20C%E1%BB%A7%20Chi%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Củ Chi. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Thanh Đa 5",
    "type": "Mì",
    "location": "153 Quốc Lộ 22, Củ Chi, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20Thanh%20%C4%90a%205%20153%20Qu%E1%BB%91c%20L%E1%BB%99%2022%2C%20C%E1%BB%A7%20Chi%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Củ Chi. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Hồng Phát",
    "type": "Hủ tiếu",
    "location": "119 Nguyễn Văn Khạ, Củ Chi, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20H%E1%BB%93ng%20Ph%C3%A1t%20119%20Nguy%E1%BB%85n%20V%C4%83n%20Kh%E1%BA%A1%2C%20C%E1%BB%A7%20Chi%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Củ Chi. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Xưa & Nay 2",
    "type": "Hủ tiếu",
    "location": "489 Tỉnh Lộ 8, Củ Chi, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20X%C6%B0a%20%26%20Nay%202%20489%20T%E1%BB%89nh%20L%E1%BB%99%208%2C%20C%E1%BB%A7%20Chi%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Củ Chi. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Hào Hùng 3",
    "type": "Hủ tiếu",
    "location": "36 Liêu Bình Hương, Củ Chi, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20H%C3%A0o%20H%C3%B9ng%203%2036%20Li%C3%AAu%20B%C3%ACnh%20H%C6%B0%C6%A1ng%2C%20C%E1%BB%A7%20Chi%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Củ Chi. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Dì Liên 4",
    "type": "Hủ tiếu",
    "location": "388 Quốc Lộ 22, Củ Chi, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20D%C3%AC%20Li%C3%AAn%204%20388%20Qu%E1%BB%91c%20L%E1%BB%99%2022%2C%20C%E1%BB%A7%20Chi%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Củ Chi. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Kim Anh 5",
    "type": "Hủ tiếu",
    "location": "410 Hà Duy Phiên, Củ Chi, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20Kim%20Anh%205%20410%20H%C3%A0%20Duy%20Phi%C3%AAn%2C%20C%E1%BB%A7%20Chi%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Củ Chi. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Sài Thành",
    "type": "Đồ nướng",
    "location": "247 Hà Duy Phiên, Củ Chi, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20S%C3%A0i%20Th%C3%A0nh%20247%20H%C3%A0%20Duy%20Phi%C3%AAn%2C%20C%E1%BB%A7%20Chi%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Củ Chi. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Gia Đình 2",
    "type": "Đồ nướng",
    "location": "435 Nguyễn Văn Khạ, Củ Chi, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20Gia%20%C4%90%C3%ACnh%202%20435%20Nguy%E1%BB%85n%20V%C4%83n%20Kh%E1%BA%A1%2C%20C%E1%BB%A7%20Chi%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Củ Chi. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Saigon Deli 3",
    "type": "Đồ nướng",
    "location": "225 Quốc Lộ 22, Củ Chi, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20Saigon%20Deli%203%20225%20Qu%E1%BB%91c%20L%E1%BB%99%2022%2C%20C%E1%BB%A7%20Chi%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Củ Chi. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Hương Việt 4",
    "type": "Đồ nướng",
    "location": "194 Liêu Bình Hương, Củ Chi, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20H%C6%B0%C6%A1ng%20Vi%E1%BB%87t%204%20194%20Li%C3%AAu%20B%C3%ACnh%20H%C6%B0%C6%A1ng%2C%20C%E1%BB%A7%20Chi%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Củ Chi. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Bà Năm 5",
    "type": "Đồ nướng",
    "location": "277 Nguyễn Văn Khạ, Củ Chi, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20B%C3%A0%20N%C4%83m%205%20277%20Nguy%E1%BB%85n%20V%C4%83n%20Kh%E1%BA%A1%2C%20C%E1%BB%A7%20Chi%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Củ Chi. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Đông Á",
    "type": "Nước & Cafe",
    "location": "460 Quốc Lộ 22, Củ Chi, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20%C4%90%C3%B4ng%20%C3%81%20460%20Qu%E1%BB%91c%20L%E1%BB%99%2022%2C%20C%E1%BB%A7%20Chi%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Củ Chi. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Saigon Deli 2",
    "type": "Nước & Cafe",
    "location": "414 Hà Duy Phiên, Củ Chi, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20Saigon%20Deli%202%20414%20H%C3%A0%20Duy%20Phi%C3%AAn%2C%20C%E1%BB%A7%20Chi%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Củ Chi. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Nam Hải 3",
    "type": "Nước & Cafe",
    "location": "487 Liêu Bình Hương, Củ Chi, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20Nam%20H%E1%BA%A3i%203%20487%20Li%C3%AAu%20B%C3%ACnh%20H%C6%B0%C6%A1ng%2C%20C%E1%BB%A7%20Chi%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Củ Chi. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Ông Già 4",
    "type": "Nước & Cafe",
    "location": "100 Quốc Lộ 22, Củ Chi, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20%C3%94ng%20Gi%C3%A0%204%20100%20Qu%E1%BB%91c%20L%E1%BB%99%2022%2C%20C%E1%BB%A7%20Chi%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Củ Chi. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Cô Ba 5",
    "type": "Nước & Cafe",
    "location": "275 Quốc Lộ 22, Củ Chi, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20C%C3%B4%20Ba%205%20275%20Qu%E1%BB%91c%20L%E1%BB%99%2022%2C%20C%E1%BB%A7%20Chi%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Củ Chi. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Đệ Nhất",
    "type": "Chè",
    "location": "42 Nguyễn Văn Khạ, Củ Chi, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20%C4%90%E1%BB%87%20Nh%E1%BA%A5t%2042%20Nguy%E1%BB%85n%20V%C4%83n%20Kh%E1%BA%A1%2C%20C%E1%BB%A7%20Chi%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Củ Chi. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Chú Bảy 2",
    "type": "Chè",
    "location": "264 Nguyễn Văn Khạ, Củ Chi, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20Ch%C3%BA%20B%E1%BA%A3y%202%20264%20Nguy%E1%BB%85n%20V%C4%83n%20Kh%E1%BA%A1%2C%20C%E1%BB%A7%20Chi%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Củ Chi. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Ông Già 3",
    "type": "Chè",
    "location": "358 Hà Duy Phiên, Củ Chi, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20%C3%94ng%20Gi%C3%A0%203%20358%20H%C3%A0%20Duy%20Phi%C3%AAn%2C%20C%E1%BB%A7%20Chi%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Củ Chi. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Dì Liên 4",
    "type": "Chè",
    "location": "376 Quốc Lộ 22, Củ Chi, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20D%C3%AC%20Li%C3%AAn%204%20376%20Qu%E1%BB%91c%20L%E1%BB%99%2022%2C%20C%E1%BB%A7%20Chi%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Củ Chi. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Saigon Deli 5",
    "type": "Chè",
    "location": "258 Hà Duy Phiên, Củ Chi, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20Saigon%20Deli%205%20258%20H%C3%A0%20Duy%20Phi%C3%AAn%2C%20C%E1%BB%A7%20Chi%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Củ Chi. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Cô Ba",
    "type": "Bánh xèo",
    "location": "268 Tỉnh Lộ 8, Củ Chi, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20C%C3%B4%20Ba%20268%20T%E1%BB%89nh%20L%E1%BB%99%208%2C%20C%E1%BB%A7%20Chi%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Củ Chi. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Anh Tư 2",
    "type": "Bánh xèo",
    "location": "337 Quốc Lộ 22, Củ Chi, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20Anh%20T%C6%B0%202%20337%20Qu%E1%BB%91c%20L%E1%BB%99%2022%2C%20C%E1%BB%A7%20Chi%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Củ Chi. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Gia Đình 3",
    "type": "Bánh xèo",
    "location": "494 Tỉnh Lộ 8, Củ Chi, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20Gia%20%C4%90%C3%ACnh%203%20494%20T%E1%BB%89nh%20L%E1%BB%99%208%2C%20C%E1%BB%A7%20Chi%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Củ Chi. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Hương Việt 4",
    "type": "Bánh xèo",
    "location": "256 Liêu Bình Hương, Củ Chi, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20H%C6%B0%C6%A1ng%20Vi%E1%BB%87t%204%20256%20Li%C3%AAu%20B%C3%ACnh%20H%C6%B0%C6%A1ng%2C%20C%E1%BB%A7%20Chi%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Củ Chi. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Hồng Phát 5",
    "type": "Bánh xèo",
    "location": "75 Tỉnh Lộ 8, Củ Chi, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20H%E1%BB%93ng%20Ph%C3%A1t%205%2075%20T%E1%BB%89nh%20L%E1%BB%99%208%2C%20C%E1%BB%A7%20Chi%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Củ Chi. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Đông Á",
    "type": "Khác",
    "location": "468 Quốc Lộ 22, Củ Chi, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20%C4%90%C3%B4ng%20%C3%81%20468%20Qu%E1%BB%91c%20L%E1%BB%99%2022%2C%20C%E1%BB%A7%20Chi%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Củ Chi. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Hương Việt 2",
    "type": "Khác",
    "location": "240 Tỉnh Lộ 8, Củ Chi, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20H%C6%B0%C6%A1ng%20Vi%E1%BB%87t%202%20240%20T%E1%BB%89nh%20L%E1%BB%99%208%2C%20C%E1%BB%A7%20Chi%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Củ Chi. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Thanh Xuân 3",
    "type": "Khác",
    "location": "362 Nguyễn Văn Khạ, Củ Chi, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20Thanh%20Xu%C3%A2n%203%20362%20Nguy%E1%BB%85n%20V%C4%83n%20Kh%E1%BA%A1%2C%20C%E1%BB%A7%20Chi%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Củ Chi. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Thanh Đa 4",
    "type": "Khác",
    "location": "424 Hà Duy Phiên, Củ Chi, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20Thanh%20%C4%90a%204%20424%20H%C3%A0%20Duy%20Phi%C3%AAn%2C%20C%E1%BB%A7%20Chi%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Củ Chi. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Hào Hùng 5",
    "type": "Khác",
    "location": "291 Hà Duy Phiên, Củ Chi, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20H%C3%A0o%20H%C3%B9ng%205%20291%20H%C3%A0%20Duy%20Phi%C3%AAn%2C%20C%E1%BB%A7%20Chi%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Củ Chi. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Hồng Phát",
    "type": "Phở",
    "location": "408 Nguyễn Văn Tạo, Nhà Bè, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20H%E1%BB%93ng%20Ph%C3%A1t%20408%20Nguy%E1%BB%85n%20V%C4%83n%20T%E1%BA%A1o%2C%20Nh%C3%A0%20B%C3%A8%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Nhà Bè. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Đồng Quê 2",
    "type": "Phở",
    "location": "323 Lê Văn Lương, Nhà Bè, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20%C4%90%E1%BB%93ng%20Qu%C3%AA%202%20323%20L%C3%AA%20V%C4%83n%20L%C6%B0%C6%A1ng%2C%20Nh%C3%A0%20B%C3%A8%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Nhà Bè. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Gia Đình 3",
    "type": "Phở",
    "location": "151 Huỳnh Tấn Phát, Nhà Bè, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20Gia%20%C4%90%C3%ACnh%203%20151%20Hu%E1%BB%B3nh%20T%E1%BA%A5n%20Ph%C3%A1t%2C%20Nh%C3%A0%20B%C3%A8%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Nhà Bè. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Hào Hùng 4",
    "type": "Phở",
    "location": "268 Nguyễn Hữu Thọ, Nhà Bè, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20H%C3%A0o%20H%C3%B9ng%204%20268%20Nguy%E1%BB%85n%20H%E1%BB%AFu%20Th%E1%BB%8D%2C%20Nh%C3%A0%20B%C3%A8%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Nhà Bè. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Phố Hội 5",
    "type": "Phở",
    "location": "288 Nguyễn Hữu Thọ, Nhà Bè, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20Ph%E1%BB%91%20H%E1%BB%99i%205%20288%20Nguy%E1%BB%85n%20H%E1%BB%AFu%20Th%E1%BB%8D%2C%20Nh%C3%A0%20B%C3%A8%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Nhà Bè. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Ngọc Lan",
    "type": "Bún",
    "location": "430 Phạm Hữu Lầu, Nhà Bè, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20Ng%E1%BB%8Dc%20Lan%20430%20Ph%E1%BA%A1m%20H%E1%BB%AFu%20L%E1%BA%A7u%2C%20Nh%C3%A0%20B%C3%A8%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Nhà Bè. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Hồng Phát 2",
    "type": "Bún",
    "location": "174 Phạm Hữu Lầu, Nhà Bè, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20H%E1%BB%93ng%20Ph%C3%A1t%202%20174%20Ph%E1%BA%A1m%20H%E1%BB%AFu%20L%E1%BA%A7u%2C%20Nh%C3%A0%20B%C3%A8%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Nhà Bè. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Chú Bảy 3",
    "type": "Bún",
    "location": "424 Phạm Hữu Lầu, Nhà Bè, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20Ch%C3%BA%20B%E1%BA%A3y%203%20424%20Ph%E1%BA%A1m%20H%E1%BB%AFu%20L%E1%BA%A7u%2C%20Nh%C3%A0%20B%C3%A8%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Nhà Bè. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Kim Anh 4",
    "type": "Bún",
    "location": "202 Phạm Hữu Lầu, Nhà Bè, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20Kim%20Anh%204%20202%20Ph%E1%BA%A1m%20H%E1%BB%AFu%20L%E1%BA%A7u%2C%20Nh%C3%A0%20B%C3%A8%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Nhà Bè. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Dì Liên 5",
    "type": "Bún",
    "location": "321 Huỳnh Tấn Phát, Nhà Bè, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20D%C3%AC%20Li%C3%AAn%205%20321%20Hu%E1%BB%B3nh%20T%E1%BA%A5n%20Ph%C3%A1t%2C%20Nh%C3%A0%20B%C3%A8%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Nhà Bè. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Hồng Phát",
    "type": "Cơm",
    "location": "443 Huỳnh Tấn Phát, Nhà Bè, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20H%E1%BB%93ng%20Ph%C3%A1t%20443%20Hu%E1%BB%B3nh%20T%E1%BA%A5n%20Ph%C3%A1t%2C%20Nh%C3%A0%20B%C3%A8%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Nhà Bè. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Hoàn Kiếm 2",
    "type": "Cơm",
    "location": "216 Lê Văn Lương, Nhà Bè, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20Ho%C3%A0n%20Ki%E1%BA%BFm%202%20216%20L%C3%AA%20V%C4%83n%20L%C6%B0%C6%A1ng%2C%20Nh%C3%A0%20B%C3%A8%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Nhà Bè. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Saigon Deli 3",
    "type": "Cơm",
    "location": "285 Phạm Hữu Lầu, Nhà Bè, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20Saigon%20Deli%203%20285%20Ph%E1%BA%A1m%20H%E1%BB%AFu%20L%E1%BA%A7u%2C%20Nh%C3%A0%20B%C3%A8%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Nhà Bè. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Thái Bình 4",
    "type": "Cơm",
    "location": "465 Phạm Hữu Lầu, Nhà Bè, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20Th%C3%A1i%20B%C3%ACnh%204%20465%20Ph%E1%BA%A1m%20H%E1%BB%AFu%20L%E1%BA%A7u%2C%20Nh%C3%A0%20B%C3%A8%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Nhà Bè. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Chú Bảy 5",
    "type": "Cơm",
    "location": "422 Huỳnh Tấn Phát, Nhà Bè, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20Ch%C3%BA%20B%E1%BA%A3y%205%20422%20Hu%E1%BB%B3nh%20T%E1%BA%A5n%20Ph%C3%A1t%2C%20Nh%C3%A0%20B%C3%A8%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Nhà Bè. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Hoàn Kiếm",
    "type": "Lẩu",
    "location": "35 Phạm Hữu Lầu, Nhà Bè, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20Ho%C3%A0n%20Ki%E1%BA%BFm%2035%20Ph%E1%BA%A1m%20H%E1%BB%AFu%20L%E1%BA%A7u%2C%20Nh%C3%A0%20B%C3%A8%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Nhà Bè. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Viet Kitchen 2",
    "type": "Lẩu",
    "location": "235 Phạm Hữu Lầu, Nhà Bè, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20Viet%20Kitchen%202%20235%20Ph%E1%BA%A1m%20H%E1%BB%AFu%20L%E1%BA%A7u%2C%20Nh%C3%A0%20B%C3%A8%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Nhà Bè. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Minh Khai 3",
    "type": "Lẩu",
    "location": "359 Lê Văn Lương, Nhà Bè, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20Minh%20Khai%203%20359%20L%C3%AA%20V%C4%83n%20L%C6%B0%C6%A1ng%2C%20Nh%C3%A0%20B%C3%A8%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Nhà Bè. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Hoàn Kiếm 4",
    "type": "Lẩu",
    "location": "139 Nguyễn Văn Tạo, Nhà Bè, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20Ho%C3%A0n%20Ki%E1%BA%BFm%204%20139%20Nguy%E1%BB%85n%20V%C4%83n%20T%E1%BA%A1o%2C%20Nh%C3%A0%20B%C3%A8%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Nhà Bè. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Bến Thành 5",
    "type": "Lẩu",
    "location": "16 Huỳnh Tấn Phát, Nhà Bè, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20B%E1%BA%BFn%20Th%C3%A0nh%205%2016%20Hu%E1%BB%B3nh%20T%E1%BA%A5n%20Ph%C3%A1t%2C%20Nh%C3%A0%20B%C3%A8%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Nhà Bè. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Cô Ba",
    "type": "Đồ chay",
    "location": "184 Huỳnh Tấn Phát, Nhà Bè, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20C%C3%B4%20Ba%20184%20Hu%E1%BB%B3nh%20T%E1%BA%A5n%20Ph%C3%A1t%2C%20Nh%C3%A0%20B%C3%A8%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Nhà Bè. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Thanh Đa 2",
    "type": "Đồ chay",
    "location": "449 Nguyễn Văn Tạo, Nhà Bè, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20Thanh%20%C4%90a%202%20449%20Nguy%E1%BB%85n%20V%C4%83n%20T%E1%BA%A1o%2C%20Nh%C3%A0%20B%C3%A8%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Nhà Bè. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Đông Á 3",
    "type": "Đồ chay",
    "location": "446 Nguyễn Hữu Thọ, Nhà Bè, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20%C4%90%C3%B4ng%20%C3%81%203%20446%20Nguy%E1%BB%85n%20H%E1%BB%AFu%20Th%E1%BB%8D%2C%20Nh%C3%A0%20B%C3%A8%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Nhà Bè. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Sông Trăng 4",
    "type": "Đồ chay",
    "location": "9 Nguyễn Hữu Thọ, Nhà Bè, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20S%C3%B4ng%20Tr%C4%83ng%204%209%20Nguy%E1%BB%85n%20H%E1%BB%AFu%20Th%E1%BB%8D%2C%20Nh%C3%A0%20B%C3%A8%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Nhà Bè. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Hoàn Kiếm 5",
    "type": "Đồ chay",
    "location": "419 Lê Văn Lương, Nhà Bè, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20Ho%C3%A0n%20Ki%E1%BA%BFm%205%20419%20L%C3%AA%20V%C4%83n%20L%C6%B0%C6%A1ng%2C%20Nh%C3%A0%20B%C3%A8%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Nhà Bè. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Kim Anh",
    "type": "Bánh mì",
    "location": "5 Huỳnh Tấn Phát, Nhà Bè, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20Kim%20Anh%205%20Hu%E1%BB%B3nh%20T%E1%BA%A5n%20Ph%C3%A1t%2C%20Nh%C3%A0%20B%C3%A8%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Nhà Bè. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Hào Hùng 2",
    "type": "Bánh mì",
    "location": "57 Huỳnh Tấn Phát, Nhà Bè, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20H%C3%A0o%20H%C3%B9ng%202%2057%20Hu%E1%BB%B3nh%20T%E1%BA%A5n%20Ph%C3%A1t%2C%20Nh%C3%A0%20B%C3%A8%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Nhà Bè. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Anh Tư 3",
    "type": "Bánh mì",
    "location": "456 Nguyễn Văn Tạo, Nhà Bè, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20Anh%20T%C6%B0%203%20456%20Nguy%E1%BB%85n%20V%C4%83n%20T%E1%BA%A1o%2C%20Nh%C3%A0%20B%C3%A8%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Nhà Bè. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Anh Tư 4",
    "type": "Bánh mì",
    "location": "384 Nguyễn Văn Tạo, Nhà Bè, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20Anh%20T%C6%B0%204%20384%20Nguy%E1%BB%85n%20V%C4%83n%20T%E1%BA%A1o%2C%20Nh%C3%A0%20B%C3%A8%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Nhà Bè. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Cô Ba 5",
    "type": "Bánh mì",
    "location": "129 Huỳnh Tấn Phát, Nhà Bè, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20C%C3%B4%20Ba%205%20129%20Hu%E1%BB%B3nh%20T%E1%BA%A5n%20Ph%C3%A1t%2C%20Nh%C3%A0%20B%C3%A8%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Nhà Bè. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Mưa Hồng",
    "type": "Ăn vặt",
    "location": "158 Phạm Hữu Lầu, Nhà Bè, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20M%C6%B0a%20H%E1%BB%93ng%20158%20Ph%E1%BA%A1m%20H%E1%BB%AFu%20L%E1%BA%A7u%2C%20Nh%C3%A0%20B%C3%A8%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Nhà Bè. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Sài Thành 2",
    "type": "Ăn vặt",
    "location": "180 Huỳnh Tấn Phát, Nhà Bè, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20S%C3%A0i%20Th%C3%A0nh%202%20180%20Hu%E1%BB%B3nh%20T%E1%BA%A5n%20Ph%C3%A1t%2C%20Nh%C3%A0%20B%C3%A8%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Nhà Bè. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Nắng Vàng 3",
    "type": "Ăn vặt",
    "location": "275 Huỳnh Tấn Phát, Nhà Bè, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20N%E1%BA%AFng%20V%C3%A0ng%203%20275%20Hu%E1%BB%B3nh%20T%E1%BA%A5n%20Ph%C3%A1t%2C%20Nh%C3%A0%20B%C3%A8%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Nhà Bè. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Kim Anh 4",
    "type": "Ăn vặt",
    "location": "280 Nguyễn Hữu Thọ, Nhà Bè, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20Kim%20Anh%204%20280%20Nguy%E1%BB%85n%20H%E1%BB%AFu%20Th%E1%BB%8D%2C%20Nh%C3%A0%20B%C3%A8%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Nhà Bè. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Kim Anh 5",
    "type": "Ăn vặt",
    "location": "294 Nguyễn Hữu Thọ, Nhà Bè, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20Kim%20Anh%205%20294%20Nguy%E1%BB%85n%20H%E1%BB%AFu%20Th%E1%BB%8D%2C%20Nh%C3%A0%20B%C3%A8%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Nhà Bè. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Nam Hải",
    "type": "Bánh cuốn",
    "location": "422 Huỳnh Tấn Phát, Nhà Bè, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20Nam%20H%E1%BA%A3i%20422%20Hu%E1%BB%B3nh%20T%E1%BA%A5n%20Ph%C3%A1t%2C%20Nh%C3%A0%20B%C3%A8%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Nhà Bè. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Bà Năm 2",
    "type": "Bánh cuốn",
    "location": "417 Nguyễn Hữu Thọ, Nhà Bè, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20B%C3%A0%20N%C4%83m%202%20417%20Nguy%E1%BB%85n%20H%E1%BB%AFu%20Th%E1%BB%8D%2C%20Nh%C3%A0%20B%C3%A8%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Nhà Bè. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Minh Khai 3",
    "type": "Bánh cuốn",
    "location": "457 Lê Văn Lương, Nhà Bè, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20Minh%20Khai%203%20457%20L%C3%AA%20V%C4%83n%20L%C6%B0%C6%A1ng%2C%20Nh%C3%A0%20B%C3%A8%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Nhà Bè. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Hồng Phát 4",
    "type": "Bánh cuốn",
    "location": "40 Nguyễn Văn Tạo, Nhà Bè, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20H%E1%BB%93ng%20Ph%C3%A1t%204%2040%20Nguy%E1%BB%85n%20V%C4%83n%20T%E1%BA%A1o%2C%20Nh%C3%A0%20B%C3%A8%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Nhà Bè. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Mưa Hồng 5",
    "type": "Bánh cuốn",
    "location": "164 Huỳnh Tấn Phát, Nhà Bè, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20M%C6%B0a%20H%E1%BB%93ng%205%20164%20Hu%E1%BB%B3nh%20T%E1%BA%A5n%20Ph%C3%A1t%2C%20Nh%C3%A0%20B%C3%A8%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Nhà Bè. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Dì Liên",
    "type": "Bún đậu",
    "location": "69 Phạm Hữu Lầu, Nhà Bè, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20D%C3%AC%20Li%C3%AAn%2069%20Ph%E1%BA%A1m%20H%E1%BB%AFu%20L%E1%BA%A7u%2C%20Nh%C3%A0%20B%C3%A8%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Nhà Bè. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Đông Á 2",
    "type": "Bún đậu",
    "location": "68 Phạm Hữu Lầu, Nhà Bè, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20%C4%90%C3%B4ng%20%C3%81%202%2068%20Ph%E1%BA%A1m%20H%E1%BB%AFu%20L%E1%BA%A7u%2C%20Nh%C3%A0%20B%C3%A8%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Nhà Bè. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Viet Kitchen 3",
    "type": "Bún đậu",
    "location": "277 Huỳnh Tấn Phát, Nhà Bè, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20Viet%20Kitchen%203%20277%20Hu%E1%BB%B3nh%20T%E1%BA%A5n%20Ph%C3%A1t%2C%20Nh%C3%A0%20B%C3%A8%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Nhà Bè. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Gia Đình 4",
    "type": "Bún đậu",
    "location": "132 Phạm Hữu Lầu, Nhà Bè, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20Gia%20%C4%90%C3%ACnh%204%20132%20Ph%E1%BA%A1m%20H%E1%BB%AFu%20L%E1%BA%A7u%2C%20Nh%C3%A0%20B%C3%A8%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Nhà Bè. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Sài Thành 5",
    "type": "Bún đậu",
    "location": "221 Lê Văn Lương, Nhà Bè, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20S%C3%A0i%20Th%C3%A0nh%205%20221%20L%C3%AA%20V%C4%83n%20L%C6%B0%C6%A1ng%2C%20Nh%C3%A0%20B%C3%A8%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Nhà Bè. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Thái Bình",
    "type": "Hải sản",
    "location": "334 Huỳnh Tấn Phát, Nhà Bè, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20Th%C3%A1i%20B%C3%ACnh%20334%20Hu%E1%BB%B3nh%20T%E1%BA%A5n%20Ph%C3%A1t%2C%20Nh%C3%A0%20B%C3%A8%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Nhà Bè. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Sông Trăng 2",
    "type": "Hải sản",
    "location": "490 Nguyễn Hữu Thọ, Nhà Bè, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20S%C3%B4ng%20Tr%C4%83ng%202%20490%20Nguy%E1%BB%85n%20H%E1%BB%AFu%20Th%E1%BB%8D%2C%20Nh%C3%A0%20B%C3%A8%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Nhà Bè. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Kim Anh 3",
    "type": "Hải sản",
    "location": "418 Huỳnh Tấn Phát, Nhà Bè, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20Kim%20Anh%203%20418%20Hu%E1%BB%B3nh%20T%E1%BA%A5n%20Ph%C3%A1t%2C%20Nh%C3%A0%20B%C3%A8%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Nhà Bè. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Đệ Nhất 4",
    "type": "Hải sản",
    "location": "74 Lê Văn Lương, Nhà Bè, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20%C4%90%E1%BB%87%20Nh%E1%BA%A5t%204%2074%20L%C3%AA%20V%C4%83n%20L%C6%B0%C6%A1ng%2C%20Nh%C3%A0%20B%C3%A8%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Nhà Bè. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Cô Ba 5",
    "type": "Hải sản",
    "location": "445 Huỳnh Tấn Phát, Nhà Bè, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20C%C3%B4%20Ba%205%20445%20Hu%E1%BB%B3nh%20T%E1%BA%A5n%20Ph%C3%A1t%2C%20Nh%C3%A0%20B%C3%A8%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Nhà Bè. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Thanh Xuân",
    "type": "Ốc",
    "location": "76 Lê Văn Lương, Nhà Bè, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20Thanh%20Xu%C3%A2n%2076%20L%C3%AA%20V%C4%83n%20L%C6%B0%C6%A1ng%2C%20Nh%C3%A0%20B%C3%A8%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Nhà Bè. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Ông Già 2",
    "type": "Ốc",
    "location": "57 Phạm Hữu Lầu, Nhà Bè, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20%C3%94ng%20Gi%C3%A0%202%2057%20Ph%E1%BA%A1m%20H%E1%BB%AFu%20L%E1%BA%A7u%2C%20Nh%C3%A0%20B%C3%A8%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Nhà Bè. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Thanh Xuân 3",
    "type": "Ốc",
    "location": "215 Nguyễn Văn Tạo, Nhà Bè, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20Thanh%20Xu%C3%A2n%203%20215%20Nguy%E1%BB%85n%20V%C4%83n%20T%E1%BA%A1o%2C%20Nh%C3%A0%20B%C3%A8%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Nhà Bè. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Đông Á 4",
    "type": "Ốc",
    "location": "56 Nguyễn Văn Tạo, Nhà Bè, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20%C4%90%C3%B4ng%20%C3%81%204%2056%20Nguy%E1%BB%85n%20V%C4%83n%20T%E1%BA%A1o%2C%20Nh%C3%A0%20B%C3%A8%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Nhà Bè. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Hoàn Kiếm 5",
    "type": "Ốc",
    "location": "72 Lê Văn Lương, Nhà Bè, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20Ho%C3%A0n%20Ki%E1%BA%BFm%205%2072%20L%C3%AA%20V%C4%83n%20L%C6%B0%C6%A1ng%2C%20Nh%C3%A0%20B%C3%A8%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Nhà Bè. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Minh Khai",
    "type": "Mì",
    "location": "368 Nguyễn Văn Tạo, Nhà Bè, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20Minh%20Khai%20368%20Nguy%E1%BB%85n%20V%C4%83n%20T%E1%BA%A1o%2C%20Nh%C3%A0%20B%C3%A8%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Nhà Bè. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Đông Á 2",
    "type": "Mì",
    "location": "420 Lê Văn Lương, Nhà Bè, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20%C4%90%C3%B4ng%20%C3%81%202%20420%20L%C3%AA%20V%C4%83n%20L%C6%B0%C6%A1ng%2C%20Nh%C3%A0%20B%C3%A8%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Nhà Bè. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Bà Năm 3",
    "type": "Mì",
    "location": "42 Nguyễn Văn Tạo, Nhà Bè, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20B%C3%A0%20N%C4%83m%203%2042%20Nguy%E1%BB%85n%20V%C4%83n%20T%E1%BA%A1o%2C%20Nh%C3%A0%20B%C3%A8%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Nhà Bè. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Ông Già 4",
    "type": "Mì",
    "location": "55 Nguyễn Hữu Thọ, Nhà Bè, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20%C3%94ng%20Gi%C3%A0%204%2055%20Nguy%E1%BB%85n%20H%E1%BB%AFu%20Th%E1%BB%8D%2C%20Nh%C3%A0%20B%C3%A8%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Nhà Bè. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Đệ Nhất 5",
    "type": "Mì",
    "location": "382 Lê Văn Lương, Nhà Bè, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20%C4%90%E1%BB%87%20Nh%E1%BA%A5t%205%20382%20L%C3%AA%20V%C4%83n%20L%C6%B0%C6%A1ng%2C%20Nh%C3%A0%20B%C3%A8%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Nhà Bè. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Thanh Đa",
    "type": "Hủ tiếu",
    "location": "396 Huỳnh Tấn Phát, Nhà Bè, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20Thanh%20%C4%90a%20396%20Hu%E1%BB%B3nh%20T%E1%BA%A5n%20Ph%C3%A1t%2C%20Nh%C3%A0%20B%C3%A8%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Nhà Bè. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Dì Liên 2",
    "type": "Hủ tiếu",
    "location": "269 Nguyễn Hữu Thọ, Nhà Bè, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20D%C3%AC%20Li%C3%AAn%202%20269%20Nguy%E1%BB%85n%20H%E1%BB%AFu%20Th%E1%BB%8D%2C%20Nh%C3%A0%20B%C3%A8%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Nhà Bè. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Sài Thành 3",
    "type": "Hủ tiếu",
    "location": "30 Huỳnh Tấn Phát, Nhà Bè, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20S%C3%A0i%20Th%C3%A0nh%203%2030%20Hu%E1%BB%B3nh%20T%E1%BA%A5n%20Ph%C3%A1t%2C%20Nh%C3%A0%20B%C3%A8%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Nhà Bè. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Mưa Hồng 4",
    "type": "Hủ tiếu",
    "location": "56 Nguyễn Hữu Thọ, Nhà Bè, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20M%C6%B0a%20H%E1%BB%93ng%204%2056%20Nguy%E1%BB%85n%20H%E1%BB%AFu%20Th%E1%BB%8D%2C%20Nh%C3%A0%20B%C3%A8%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Nhà Bè. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Phố Hội 5",
    "type": "Hủ tiếu",
    "location": "401 Nguyễn Hữu Thọ, Nhà Bè, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20Ph%E1%BB%91%20H%E1%BB%99i%205%20401%20Nguy%E1%BB%85n%20H%E1%BB%AFu%20Th%E1%BB%8D%2C%20Nh%C3%A0%20B%C3%A8%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Nhà Bè. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Gia Đình",
    "type": "Đồ nướng",
    "location": "105 Huỳnh Tấn Phát, Nhà Bè, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20Gia%20%C4%90%C3%ACnh%20105%20Hu%E1%BB%B3nh%20T%E1%BA%A5n%20Ph%C3%A1t%2C%20Nh%C3%A0%20B%C3%A8%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Nhà Bè. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Nắng Vàng 2",
    "type": "Đồ nướng",
    "location": "428 Nguyễn Văn Tạo, Nhà Bè, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20N%E1%BA%AFng%20V%C3%A0ng%202%20428%20Nguy%E1%BB%85n%20V%C4%83n%20T%E1%BA%A1o%2C%20Nh%C3%A0%20B%C3%A8%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Nhà Bè. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Thanh Đa 3",
    "type": "Đồ nướng",
    "location": "141 Nguyễn Văn Tạo, Nhà Bè, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20Thanh%20%C4%90a%203%20141%20Nguy%E1%BB%85n%20V%C4%83n%20T%E1%BA%A1o%2C%20Nh%C3%A0%20B%C3%A8%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Nhà Bè. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Minh Khai 4",
    "type": "Đồ nướng",
    "location": "182 Nguyễn Hữu Thọ, Nhà Bè, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20Minh%20Khai%204%20182%20Nguy%E1%BB%85n%20H%E1%BB%AFu%20Th%E1%BB%8D%2C%20Nh%C3%A0%20B%C3%A8%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Nhà Bè. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Nắng Vàng 5",
    "type": "Đồ nướng",
    "location": "151 Huỳnh Tấn Phát, Nhà Bè, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20N%E1%BA%AFng%20V%C3%A0ng%205%20151%20Hu%E1%BB%B3nh%20T%E1%BA%A5n%20Ph%C3%A1t%2C%20Nh%C3%A0%20B%C3%A8%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Nhà Bè. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Minh Khai",
    "type": "Nước & Cafe",
    "location": "198 Phạm Hữu Lầu, Nhà Bè, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20Minh%20Khai%20198%20Ph%E1%BA%A1m%20H%E1%BB%AFu%20L%E1%BA%A7u%2C%20Nh%C3%A0%20B%C3%A8%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Nhà Bè. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Ông Già 2",
    "type": "Nước & Cafe",
    "location": "228 Huỳnh Tấn Phát, Nhà Bè, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20%C3%94ng%20Gi%C3%A0%202%20228%20Hu%E1%BB%B3nh%20T%E1%BA%A5n%20Ph%C3%A1t%2C%20Nh%C3%A0%20B%C3%A8%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Nhà Bè. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Xưa & Nay 3",
    "type": "Nước & Cafe",
    "location": "265 Phạm Hữu Lầu, Nhà Bè, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20X%C6%B0a%20%26%20Nay%203%20265%20Ph%E1%BA%A1m%20H%E1%BB%AFu%20L%E1%BA%A7u%2C%20Nh%C3%A0%20B%C3%A8%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Nhà Bè. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Sài Thành 4",
    "type": "Nước & Cafe",
    "location": "162 Phạm Hữu Lầu, Nhà Bè, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20S%C3%A0i%20Th%C3%A0nh%204%20162%20Ph%E1%BA%A1m%20H%E1%BB%AFu%20L%E1%BA%A7u%2C%20Nh%C3%A0%20B%C3%A8%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Nhà Bè. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Nam Hải 5",
    "type": "Nước & Cafe",
    "location": "286 Phạm Hữu Lầu, Nhà Bè, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20Nam%20H%E1%BA%A3i%205%20286%20Ph%E1%BA%A1m%20H%E1%BB%AFu%20L%E1%BA%A7u%2C%20Nh%C3%A0%20B%C3%A8%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Nhà Bè. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Đồng Quê",
    "type": "Chè",
    "location": "364 Phạm Hữu Lầu, Nhà Bè, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20%C4%90%E1%BB%93ng%20Qu%C3%AA%20364%20Ph%E1%BA%A1m%20H%E1%BB%AFu%20L%E1%BA%A7u%2C%20Nh%C3%A0%20B%C3%A8%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Nhà Bè. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Cô Ba 2",
    "type": "Chè",
    "location": "256 Lê Văn Lương, Nhà Bè, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20C%C3%B4%20Ba%202%20256%20L%C3%AA%20V%C4%83n%20L%C6%B0%C6%A1ng%2C%20Nh%C3%A0%20B%C3%A8%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Nhà Bè. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Local Taste 3",
    "type": "Chè",
    "location": "108 Huỳnh Tấn Phát, Nhà Bè, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20Local%20Taste%203%20108%20Hu%E1%BB%B3nh%20T%E1%BA%A5n%20Ph%C3%A1t%2C%20Nh%C3%A0%20B%C3%A8%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Nhà Bè. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Thanh Xuân 4",
    "type": "Chè",
    "location": "85 Lê Văn Lương, Nhà Bè, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20Thanh%20Xu%C3%A2n%204%2085%20L%C3%AA%20V%C4%83n%20L%C6%B0%C6%A1ng%2C%20Nh%C3%A0%20B%C3%A8%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Nhà Bè. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Gia Đình 5",
    "type": "Chè",
    "location": "314 Nguyễn Văn Tạo, Nhà Bè, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20Gia%20%C4%90%C3%ACnh%205%20314%20Nguy%E1%BB%85n%20V%C4%83n%20T%E1%BA%A1o%2C%20Nh%C3%A0%20B%C3%A8%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Nhà Bè. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Viet Kitchen",
    "type": "Bánh xèo",
    "location": "171 Lê Văn Lương, Nhà Bè, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20Viet%20Kitchen%20171%20L%C3%AA%20V%C4%83n%20L%C6%B0%C6%A1ng%2C%20Nh%C3%A0%20B%C3%A8%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Nhà Bè. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Chú Bảy 2",
    "type": "Bánh xèo",
    "location": "39 Nguyễn Văn Tạo, Nhà Bè, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20Ch%C3%BA%20B%E1%BA%A3y%202%2039%20Nguy%E1%BB%85n%20V%C4%83n%20T%E1%BA%A1o%2C%20Nh%C3%A0%20B%C3%A8%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Nhà Bè. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Sài Thành 3",
    "type": "Bánh xèo",
    "location": "228 Lê Văn Lương, Nhà Bè, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20S%C3%A0i%20Th%C3%A0nh%203%20228%20L%C3%AA%20V%C4%83n%20L%C6%B0%C6%A1ng%2C%20Nh%C3%A0%20B%C3%A8%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Nhà Bè. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Ông Già 4",
    "type": "Bánh xèo",
    "location": "429 Huỳnh Tấn Phát, Nhà Bè, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20%C3%94ng%20Gi%C3%A0%204%20429%20Hu%E1%BB%B3nh%20T%E1%BA%A5n%20Ph%C3%A1t%2C%20Nh%C3%A0%20B%C3%A8%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Nhà Bè. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Bến Thành 5",
    "type": "Bánh xèo",
    "location": "166 Nguyễn Văn Tạo, Nhà Bè, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20B%E1%BA%BFn%20Th%C3%A0nh%205%20166%20Nguy%E1%BB%85n%20V%C4%83n%20T%E1%BA%A1o%2C%20Nh%C3%A0%20B%C3%A8%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Nhà Bè. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Phố Hội",
    "type": "Khác",
    "location": "353 Nguyễn Văn Tạo, Nhà Bè, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20Ph%E1%BB%91%20H%E1%BB%99i%20353%20Nguy%E1%BB%85n%20V%C4%83n%20T%E1%BA%A1o%2C%20Nh%C3%A0%20B%C3%A8%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Nhà Bè. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Dì Liên 2",
    "type": "Khác",
    "location": "225 Lê Văn Lương, Nhà Bè, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20D%C3%AC%20Li%C3%AAn%202%20225%20L%C3%AA%20V%C4%83n%20L%C6%B0%C6%A1ng%2C%20Nh%C3%A0%20B%C3%A8%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Nhà Bè. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Hương Việt 3",
    "type": "Khác",
    "location": "448 Nguyễn Văn Tạo, Nhà Bè, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20H%C6%B0%C6%A1ng%20Vi%E1%BB%87t%203%20448%20Nguy%E1%BB%85n%20V%C4%83n%20T%E1%BA%A1o%2C%20Nh%C3%A0%20B%C3%A8%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Nhà Bè. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Nắng Vàng 4",
    "type": "Khác",
    "location": "153 Lê Văn Lương, Nhà Bè, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20N%E1%BA%AFng%20V%C3%A0ng%204%20153%20L%C3%AA%20V%C4%83n%20L%C6%B0%C6%A1ng%2C%20Nh%C3%A0%20B%C3%A8%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Nhà Bè. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Anh Tư 5",
    "type": "Khác",
    "location": "386 Lê Văn Lương, Nhà Bè, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20Anh%20T%C6%B0%205%20386%20L%C3%AA%20V%C4%83n%20L%C6%B0%C6%A1ng%2C%20Nh%C3%A0%20B%C3%A8%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Nhà Bè. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Minh Khai",
    "type": "Phở",
    "location": "12 Quốc Lộ 1A, Bình Chánh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20Minh%20Khai%2012%20Qu%E1%BB%91c%20L%E1%BB%99%201A%2C%20B%C3%ACnh%20Ch%C3%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Bình Chánh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Gia Đình 2",
    "type": "Phở",
    "location": "385 Trần Đại Nghĩa, Bình Chánh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20Gia%20%C4%90%C3%ACnh%202%20385%20Tr%E1%BA%A7n%20%C4%90%E1%BA%A1i%20Ngh%C4%A9a%2C%20B%C3%ACnh%20Ch%C3%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Bình Chánh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Kim Anh 3",
    "type": "Phở",
    "location": "44 Trần Đại Nghĩa, Bình Chánh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20Kim%20Anh%203%2044%20Tr%E1%BA%A7n%20%C4%90%E1%BA%A1i%20Ngh%C4%A9a%2C%20B%C3%ACnh%20Ch%C3%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Bình Chánh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Sông Trăng 4",
    "type": "Phở",
    "location": "127 Vĩnh Lộc, Bình Chánh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20S%C3%B4ng%20Tr%C4%83ng%204%20127%20V%C4%A9nh%20L%E1%BB%99c%2C%20B%C3%ACnh%20Ch%C3%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Bình Chánh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Thái Bình 5",
    "type": "Phở",
    "location": "130 Vĩnh Lộc, Bình Chánh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20Th%C3%A1i%20B%C3%ACnh%205%20130%20V%C4%A9nh%20L%E1%BB%99c%2C%20B%C3%ACnh%20Ch%C3%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Bình Chánh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Thái Bình",
    "type": "Bún",
    "location": "391 Trần Đại Nghĩa, Bình Chánh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20Th%C3%A1i%20B%C3%ACnh%20391%20Tr%E1%BA%A7n%20%C4%90%E1%BA%A1i%20Ngh%C4%A9a%2C%20B%C3%ACnh%20Ch%C3%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Bình Chánh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Viet Kitchen 2",
    "type": "Bún",
    "location": "101 Nguyễn Hữu Trí, Bình Chánh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20Viet%20Kitchen%202%20101%20Nguy%E1%BB%85n%20H%E1%BB%AFu%20Tr%C3%AD%2C%20B%C3%ACnh%20Ch%C3%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Bình Chánh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Đệ Nhất 3",
    "type": "Bún",
    "location": "306 Quách Điêu, Bình Chánh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%90%E1%BB%87%20Nh%E1%BA%A5t%203%20306%20Qu%C3%A1ch%20%C4%90i%C3%AAu%2C%20B%C3%ACnh%20Ch%C3%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Bình Chánh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Hương Việt 4",
    "type": "Bún",
    "location": "150 Nguyễn Hữu Trí, Bình Chánh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20H%C6%B0%C6%A1ng%20Vi%E1%BB%87t%204%20150%20Nguy%E1%BB%85n%20H%E1%BB%AFu%20Tr%C3%AD%2C%20B%C3%ACnh%20Ch%C3%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Bình Chánh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Thanh Đa 5",
    "type": "Bún",
    "location": "288 Nguyễn Hữu Trí, Bình Chánh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20Thanh%20%C4%90a%205%20288%20Nguy%E1%BB%85n%20H%E1%BB%AFu%20Tr%C3%AD%2C%20B%C3%ACnh%20Ch%C3%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Bình Chánh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Chú Bảy",
    "type": "Cơm",
    "location": "459 Trần Đại Nghĩa, Bình Chánh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20Ch%C3%BA%20B%E1%BA%A3y%20459%20Tr%E1%BA%A7n%20%C4%90%E1%BA%A1i%20Ngh%C4%A9a%2C%20B%C3%ACnh%20Ch%C3%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Bình Chánh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Dì Liên 2",
    "type": "Cơm",
    "location": "426 Quách Điêu, Bình Chánh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20D%C3%AC%20Li%C3%AAn%202%20426%20Qu%C3%A1ch%20%C4%90i%C3%AAu%2C%20B%C3%ACnh%20Ch%C3%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Bình Chánh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Bến Thành 3",
    "type": "Cơm",
    "location": "465 Trần Đại Nghĩa, Bình Chánh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20B%E1%BA%BFn%20Th%C3%A0nh%203%20465%20Tr%E1%BA%A7n%20%C4%90%E1%BA%A1i%20Ngh%C4%A9a%2C%20B%C3%ACnh%20Ch%C3%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Bình Chánh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Local Taste 4",
    "type": "Cơm",
    "location": "344 Nguyễn Hữu Trí, Bình Chánh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20Local%20Taste%204%20344%20Nguy%E1%BB%85n%20H%E1%BB%AFu%20Tr%C3%AD%2C%20B%C3%ACnh%20Ch%C3%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Bình Chánh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Nắng Vàng 5",
    "type": "Cơm",
    "location": "89 Quách Điêu, Bình Chánh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20N%E1%BA%AFng%20V%C3%A0ng%205%2089%20Qu%C3%A1ch%20%C4%90i%C3%AAu%2C%20B%C3%ACnh%20Ch%C3%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Bình Chánh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Đông Á",
    "type": "Lẩu",
    "location": "434 Nguyễn Hữu Trí, Bình Chánh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20%C4%90%C3%B4ng%20%C3%81%20434%20Nguy%E1%BB%85n%20H%E1%BB%AFu%20Tr%C3%AD%2C%20B%C3%ACnh%20Ch%C3%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Bình Chánh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Xưa & Nay 2",
    "type": "Lẩu",
    "location": "492 Quách Điêu, Bình Chánh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20X%C6%B0a%20%26%20Nay%202%20492%20Qu%C3%A1ch%20%C4%90i%C3%AAu%2C%20B%C3%ACnh%20Ch%C3%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Bình Chánh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Đồng Quê 3",
    "type": "Lẩu",
    "location": "142 Quốc Lộ 1A, Bình Chánh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20%C4%90%E1%BB%93ng%20Qu%C3%AA%203%20142%20Qu%E1%BB%91c%20L%E1%BB%99%201A%2C%20B%C3%ACnh%20Ch%C3%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Bình Chánh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Nắng Vàng 4",
    "type": "Lẩu",
    "location": "272 Nguyễn Hữu Trí, Bình Chánh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20N%E1%BA%AFng%20V%C3%A0ng%204%20272%20Nguy%E1%BB%85n%20H%E1%BB%AFu%20Tr%C3%AD%2C%20B%C3%ACnh%20Ch%C3%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Bình Chánh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Thanh Xuân 5",
    "type": "Lẩu",
    "location": "371 Quốc Lộ 1A, Bình Chánh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20Thanh%20Xu%C3%A2n%205%20371%20Qu%E1%BB%91c%20L%E1%BB%99%201A%2C%20B%C3%ACnh%20Ch%C3%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Bình Chánh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Dì Liên",
    "type": "Đồ chay",
    "location": "382 Quách Điêu, Bình Chánh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20D%C3%AC%20Li%C3%AAn%20382%20Qu%C3%A1ch%20%C4%90i%C3%AAu%2C%20B%C3%ACnh%20Ch%C3%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Bình Chánh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Bến Thành 2",
    "type": "Đồ chay",
    "location": "77 Quách Điêu, Bình Chánh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20B%E1%BA%BFn%20Th%C3%A0nh%202%2077%20Qu%C3%A1ch%20%C4%90i%C3%AAu%2C%20B%C3%ACnh%20Ch%C3%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Bình Chánh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Anh Tư 3",
    "type": "Đồ chay",
    "location": "386 Nguyễn Hữu Trí, Bình Chánh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20Anh%20T%C6%B0%203%20386%20Nguy%E1%BB%85n%20H%E1%BB%AFu%20Tr%C3%AD%2C%20B%C3%ACnh%20Ch%C3%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Bình Chánh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Ông Già 4",
    "type": "Đồ chay",
    "location": "180 Quốc Lộ 1A, Bình Chánh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20%C3%94ng%20Gi%C3%A0%204%20180%20Qu%E1%BB%91c%20L%E1%BB%99%201A%2C%20B%C3%ACnh%20Ch%C3%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Bình Chánh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Local Taste 5",
    "type": "Đồ chay",
    "location": "257 Quách Điêu, Bình Chánh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20Local%20Taste%205%20257%20Qu%C3%A1ch%20%C4%90i%C3%AAu%2C%20B%C3%ACnh%20Ch%C3%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Bình Chánh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Saigon Deli",
    "type": "Bánh mì",
    "location": "210 Quốc Lộ 1A, Bình Chánh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20Saigon%20Deli%20210%20Qu%E1%BB%91c%20L%E1%BB%99%201A%2C%20B%C3%ACnh%20Ch%C3%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Bình Chánh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Cô Ba 2",
    "type": "Bánh mì",
    "location": "447 Quách Điêu, Bình Chánh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20C%C3%B4%20Ba%202%20447%20Qu%C3%A1ch%20%C4%90i%C3%AAu%2C%20B%C3%ACnh%20Ch%C3%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Bình Chánh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Ngọc Lan 3",
    "type": "Bánh mì",
    "location": "488 Quốc Lộ 1A, Bình Chánh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20Ng%E1%BB%8Dc%20Lan%203%20488%20Qu%E1%BB%91c%20L%E1%BB%99%201A%2C%20B%C3%ACnh%20Ch%C3%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Bình Chánh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Hoàn Kiếm 4",
    "type": "Bánh mì",
    "location": "486 Trần Đại Nghĩa, Bình Chánh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20Ho%C3%A0n%20Ki%E1%BA%BFm%204%20486%20Tr%E1%BA%A7n%20%C4%90%E1%BA%A1i%20Ngh%C4%A9a%2C%20B%C3%ACnh%20Ch%C3%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Bình Chánh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Đệ Nhất 5",
    "type": "Bánh mì",
    "location": "408 Vĩnh Lộc, Bình Chánh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20%C4%90%E1%BB%87%20Nh%E1%BA%A5t%205%20408%20V%C4%A9nh%20L%E1%BB%99c%2C%20B%C3%ACnh%20Ch%C3%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Bình Chánh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Bến Thành",
    "type": "Ăn vặt",
    "location": "231 Trần Đại Nghĩa, Bình Chánh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20B%E1%BA%BFn%20Th%C3%A0nh%20231%20Tr%E1%BA%A7n%20%C4%90%E1%BA%A1i%20Ngh%C4%A9a%2C%20B%C3%ACnh%20Ch%C3%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Bình Chánh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Cô Ba 2",
    "type": "Ăn vặt",
    "location": "321 Trần Đại Nghĩa, Bình Chánh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20C%C3%B4%20Ba%202%20321%20Tr%E1%BA%A7n%20%C4%90%E1%BA%A1i%20Ngh%C4%A9a%2C%20B%C3%ACnh%20Ch%C3%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Bình Chánh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Mưa Hồng 3",
    "type": "Ăn vặt",
    "location": "428 Quốc Lộ 1A, Bình Chánh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20M%C6%B0a%20H%E1%BB%93ng%203%20428%20Qu%E1%BB%91c%20L%E1%BB%99%201A%2C%20B%C3%ACnh%20Ch%C3%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Bình Chánh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Thái Bình 4",
    "type": "Ăn vặt",
    "location": "403 Nguyễn Hữu Trí, Bình Chánh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20Th%C3%A1i%20B%C3%ACnh%204%20403%20Nguy%E1%BB%85n%20H%E1%BB%AFu%20Tr%C3%AD%2C%20B%C3%ACnh%20Ch%C3%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Bình Chánh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Bến Thành 5",
    "type": "Ăn vặt",
    "location": "158 Quách Điêu, Bình Chánh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20B%E1%BA%BFn%20Th%C3%A0nh%205%20158%20Qu%C3%A1ch%20%C4%90i%C3%AAu%2C%20B%C3%ACnh%20Ch%C3%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Bình Chánh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Gia Đình",
    "type": "Bánh cuốn",
    "location": "134 Trần Đại Nghĩa, Bình Chánh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20Gia%20%C4%90%C3%ACnh%20134%20Tr%E1%BA%A7n%20%C4%90%E1%BA%A1i%20Ngh%C4%A9a%2C%20B%C3%ACnh%20Ch%C3%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Bình Chánh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Đông Á 2",
    "type": "Bánh cuốn",
    "location": "11 Vĩnh Lộc, Bình Chánh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20%C4%90%C3%B4ng%20%C3%81%202%2011%20V%C4%A9nh%20L%E1%BB%99c%2C%20B%C3%ACnh%20Ch%C3%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Bình Chánh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Ngọc Lan 3",
    "type": "Bánh cuốn",
    "location": "184 Quách Điêu, Bình Chánh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20Ng%E1%BB%8Dc%20Lan%203%20184%20Qu%C3%A1ch%20%C4%90i%C3%AAu%2C%20B%C3%ACnh%20Ch%C3%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Bình Chánh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Gia Đình 4",
    "type": "Bánh cuốn",
    "location": "69 Quốc Lộ 1A, Bình Chánh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20Gia%20%C4%90%C3%ACnh%204%2069%20Qu%E1%BB%91c%20L%E1%BB%99%201A%2C%20B%C3%ACnh%20Ch%C3%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Bình Chánh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Anh Tư 5",
    "type": "Bánh cuốn",
    "location": "76 Trần Đại Nghĩa, Bình Chánh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20Anh%20T%C6%B0%205%2076%20Tr%E1%BA%A7n%20%C4%90%E1%BA%A1i%20Ngh%C4%A9a%2C%20B%C3%ACnh%20Ch%C3%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Bình Chánh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Thanh Đa",
    "type": "Bún đậu",
    "location": "444 Vĩnh Lộc, Bình Chánh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20Thanh%20%C4%90a%20444%20V%C4%A9nh%20L%E1%BB%99c%2C%20B%C3%ACnh%20Ch%C3%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Bình Chánh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Anh Tư 2",
    "type": "Bún đậu",
    "location": "325 Trần Đại Nghĩa, Bình Chánh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20Anh%20T%C6%B0%202%20325%20Tr%E1%BA%A7n%20%C4%90%E1%BA%A1i%20Ngh%C4%A9a%2C%20B%C3%ACnh%20Ch%C3%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Bình Chánh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Kim Anh 3",
    "type": "Bún đậu",
    "location": "362 Quốc Lộ 1A, Bình Chánh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20Kim%20Anh%203%20362%20Qu%E1%BB%91c%20L%E1%BB%99%201A%2C%20B%C3%ACnh%20Ch%C3%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Bình Chánh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Đệ Nhất 4",
    "type": "Bún đậu",
    "location": "160 Quách Điêu, Bình Chánh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20%C4%90%E1%BB%87%20Nh%E1%BA%A5t%204%20160%20Qu%C3%A1ch%20%C4%90i%C3%AAu%2C%20B%C3%ACnh%20Ch%C3%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Bình Chánh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Dì Liên 5",
    "type": "Bún đậu",
    "location": "238 Trần Đại Nghĩa, Bình Chánh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20D%C3%AC%20Li%C3%AAn%205%20238%20Tr%E1%BA%A7n%20%C4%90%E1%BA%A1i%20Ngh%C4%A9a%2C%20B%C3%ACnh%20Ch%C3%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Bình Chánh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Minh Khai",
    "type": "Hải sản",
    "location": "5 Quách Điêu, Bình Chánh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20Minh%20Khai%205%20Qu%C3%A1ch%20%C4%90i%C3%AAu%2C%20B%C3%ACnh%20Ch%C3%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Bình Chánh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Mưa Hồng 2",
    "type": "Hải sản",
    "location": "339 Nguyễn Hữu Trí, Bình Chánh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20M%C6%B0a%20H%E1%BB%93ng%202%20339%20Nguy%E1%BB%85n%20H%E1%BB%AFu%20Tr%C3%AD%2C%20B%C3%ACnh%20Ch%C3%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Bình Chánh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Nắng Vàng 3",
    "type": "Hải sản",
    "location": "496 Nguyễn Hữu Trí, Bình Chánh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20N%E1%BA%AFng%20V%C3%A0ng%203%20496%20Nguy%E1%BB%85n%20H%E1%BB%AFu%20Tr%C3%AD%2C%20B%C3%ACnh%20Ch%C3%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Bình Chánh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Thanh Đa 4",
    "type": "Hải sản",
    "location": "274 Vĩnh Lộc, Bình Chánh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20Thanh%20%C4%90a%204%20274%20V%C4%A9nh%20L%E1%BB%99c%2C%20B%C3%ACnh%20Ch%C3%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Bình Chánh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Chú Bảy 5",
    "type": "Hải sản",
    "location": "466 Quốc Lộ 1A, Bình Chánh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20Ch%C3%BA%20B%E1%BA%A3y%205%20466%20Qu%E1%BB%91c%20L%E1%BB%99%201A%2C%20B%C3%ACnh%20Ch%C3%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Bình Chánh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Thanh Đa",
    "type": "Ốc",
    "location": "8 Quách Điêu, Bình Chánh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20Thanh%20%C4%90a%208%20Qu%C3%A1ch%20%C4%90i%C3%AAu%2C%20B%C3%ACnh%20Ch%C3%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Bình Chánh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Thanh Xuân 2",
    "type": "Ốc",
    "location": "233 Quách Điêu, Bình Chánh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20Thanh%20Xu%C3%A2n%202%20233%20Qu%C3%A1ch%20%C4%90i%C3%AAu%2C%20B%C3%ACnh%20Ch%C3%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Bình Chánh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Chú Bảy 3",
    "type": "Ốc",
    "location": "451 Vĩnh Lộc, Bình Chánh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20Ch%C3%BA%20B%E1%BA%A3y%203%20451%20V%C4%A9nh%20L%E1%BB%99c%2C%20B%C3%ACnh%20Ch%C3%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Bình Chánh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Anh Tư 4",
    "type": "Ốc",
    "location": "8 Vĩnh Lộc, Bình Chánh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20Anh%20T%C6%B0%204%208%20V%C4%A9nh%20L%E1%BB%99c%2C%20B%C3%ACnh%20Ch%C3%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Bình Chánh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Ngọc Lan 5",
    "type": "Ốc",
    "location": "373 Nguyễn Hữu Trí, Bình Chánh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20Ng%E1%BB%8Dc%20Lan%205%20373%20Nguy%E1%BB%85n%20H%E1%BB%AFu%20Tr%C3%AD%2C%20B%C3%ACnh%20Ch%C3%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Bình Chánh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Xưa & Nay",
    "type": "Mì",
    "location": "497 Nguyễn Hữu Trí, Bình Chánh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20X%C6%B0a%20%26%20Nay%20497%20Nguy%E1%BB%85n%20H%E1%BB%AFu%20Tr%C3%AD%2C%20B%C3%ACnh%20Ch%C3%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Bình Chánh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Nắng Vàng 2",
    "type": "Mì",
    "location": "133 Trần Đại Nghĩa, Bình Chánh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20N%E1%BA%AFng%20V%C3%A0ng%202%20133%20Tr%E1%BA%A7n%20%C4%90%E1%BA%A1i%20Ngh%C4%A9a%2C%20B%C3%ACnh%20Ch%C3%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Bình Chánh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Local Taste 3",
    "type": "Mì",
    "location": "1 Trần Đại Nghĩa, Bình Chánh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20Local%20Taste%203%201%20Tr%E1%BA%A7n%20%C4%90%E1%BA%A1i%20Ngh%C4%A9a%2C%20B%C3%ACnh%20Ch%C3%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Bình Chánh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Mưa Hồng 4",
    "type": "Mì",
    "location": "63 Nguyễn Hữu Trí, Bình Chánh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20M%C6%B0a%20H%E1%BB%93ng%204%2063%20Nguy%E1%BB%85n%20H%E1%BB%AFu%20Tr%C3%AD%2C%20B%C3%ACnh%20Ch%C3%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Bình Chánh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Ông Già 5",
    "type": "Mì",
    "location": "296 Vĩnh Lộc, Bình Chánh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20%C3%94ng%20Gi%C3%A0%205%20296%20V%C4%A9nh%20L%E1%BB%99c%2C%20B%C3%ACnh%20Ch%C3%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Bình Chánh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Đông Á",
    "type": "Hủ tiếu",
    "location": "212 Quốc Lộ 1A, Bình Chánh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20%C4%90%C3%B4ng%20%C3%81%20212%20Qu%E1%BB%91c%20L%E1%BB%99%201A%2C%20B%C3%ACnh%20Ch%C3%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Bình Chánh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Hoàn Kiếm 2",
    "type": "Hủ tiếu",
    "location": "56 Trần Đại Nghĩa, Bình Chánh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20Ho%C3%A0n%20Ki%E1%BA%BFm%202%2056%20Tr%E1%BA%A7n%20%C4%90%E1%BA%A1i%20Ngh%C4%A9a%2C%20B%C3%ACnh%20Ch%C3%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Bình Chánh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Kim Anh 3",
    "type": "Hủ tiếu",
    "location": "410 Trần Đại Nghĩa, Bình Chánh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20Kim%20Anh%203%20410%20Tr%E1%BA%A7n%20%C4%90%E1%BA%A1i%20Ngh%C4%A9a%2C%20B%C3%ACnh%20Ch%C3%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Bình Chánh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Thái Bình 4",
    "type": "Hủ tiếu",
    "location": "316 Vĩnh Lộc, Bình Chánh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20Th%C3%A1i%20B%C3%ACnh%204%20316%20V%C4%A9nh%20L%E1%BB%99c%2C%20B%C3%ACnh%20Ch%C3%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Bình Chánh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Cô Ba 5",
    "type": "Hủ tiếu",
    "location": "399 Nguyễn Hữu Trí, Bình Chánh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20C%C3%B4%20Ba%205%20399%20Nguy%E1%BB%85n%20H%E1%BB%AFu%20Tr%C3%AD%2C%20B%C3%ACnh%20Ch%C3%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Bình Chánh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Mưa Hồng",
    "type": "Đồ nướng",
    "location": "486 Trần Đại Nghĩa, Bình Chánh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20M%C6%B0a%20H%E1%BB%93ng%20486%20Tr%E1%BA%A7n%20%C4%90%E1%BA%A1i%20Ngh%C4%A9a%2C%20B%C3%ACnh%20Ch%C3%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Bình Chánh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Anh Tư 2",
    "type": "Đồ nướng",
    "location": "86 Quốc Lộ 1A, Bình Chánh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20Anh%20T%C6%B0%202%2086%20Qu%E1%BB%91c%20L%E1%BB%99%201A%2C%20B%C3%ACnh%20Ch%C3%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Bình Chánh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Sông Trăng 3",
    "type": "Đồ nướng",
    "location": "458 Nguyễn Hữu Trí, Bình Chánh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20S%C3%B4ng%20Tr%C4%83ng%203%20458%20Nguy%E1%BB%85n%20H%E1%BB%AFu%20Tr%C3%AD%2C%20B%C3%ACnh%20Ch%C3%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Bình Chánh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Vĩnh Lộc 4",
    "type": "Đồ nướng",
    "location": "97 Quách Điêu, Bình Chánh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20V%C4%A9nh%20L%E1%BB%99c%204%2097%20Qu%C3%A1ch%20%C4%90i%C3%AAu%2C%20B%C3%ACnh%20Ch%C3%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Bình Chánh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Viet Kitchen 5",
    "type": "Đồ nướng",
    "location": "213 Quốc Lộ 1A, Bình Chánh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20Viet%20Kitchen%205%20213%20Qu%E1%BB%91c%20L%E1%BB%99%201A%2C%20B%C3%ACnh%20Ch%C3%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Bình Chánh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Minh Khai",
    "type": "Nước & Cafe",
    "location": "461 Quốc Lộ 1A, Bình Chánh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20Minh%20Khai%20461%20Qu%E1%BB%91c%20L%E1%BB%99%201A%2C%20B%C3%ACnh%20Ch%C3%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Bình Chánh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Nam Hải 2",
    "type": "Nước & Cafe",
    "location": "288 Trần Đại Nghĩa, Bình Chánh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20Nam%20H%E1%BA%A3i%202%20288%20Tr%E1%BA%A7n%20%C4%90%E1%BA%A1i%20Ngh%C4%A9a%2C%20B%C3%ACnh%20Ch%C3%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Bình Chánh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Đông Á 3",
    "type": "Nước & Cafe",
    "location": "121 Vĩnh Lộc, Bình Chánh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20%C4%90%C3%B4ng%20%C3%81%203%20121%20V%C4%A9nh%20L%E1%BB%99c%2C%20B%C3%ACnh%20Ch%C3%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Bình Chánh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Xưa & Nay 4",
    "type": "Nước & Cafe",
    "location": "417 Quốc Lộ 1A, Bình Chánh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20X%C6%B0a%20%26%20Nay%204%20417%20Qu%E1%BB%91c%20L%E1%BB%99%201A%2C%20B%C3%ACnh%20Ch%C3%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Bình Chánh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Thái Bình 5",
    "type": "Nước & Cafe",
    "location": "12 Quách Điêu, Bình Chánh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20Th%C3%A1i%20B%C3%ACnh%205%2012%20Qu%C3%A1ch%20%C4%90i%C3%AAu%2C%20B%C3%ACnh%20Ch%C3%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Bình Chánh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Phố Hội",
    "type": "Chè",
    "location": "157 Nguyễn Hữu Trí, Bình Chánh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20Ph%E1%BB%91%20H%E1%BB%99i%20157%20Nguy%E1%BB%85n%20H%E1%BB%AFu%20Tr%C3%AD%2C%20B%C3%ACnh%20Ch%C3%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Bình Chánh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Xưa & Nay 2",
    "type": "Chè",
    "location": "150 Quách Điêu, Bình Chánh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20X%C6%B0a%20%26%20Nay%202%20150%20Qu%C3%A1ch%20%C4%90i%C3%AAu%2C%20B%C3%ACnh%20Ch%C3%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Bình Chánh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Mưa Hồng 3",
    "type": "Chè",
    "location": "500 Vĩnh Lộc, Bình Chánh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20M%C6%B0a%20H%E1%BB%93ng%203%20500%20V%C4%A9nh%20L%E1%BB%99c%2C%20B%C3%ACnh%20Ch%C3%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Bình Chánh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Dì Liên 4",
    "type": "Chè",
    "location": "131 Trần Đại Nghĩa, Bình Chánh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20D%C3%AC%20Li%C3%AAn%204%20131%20Tr%E1%BA%A7n%20%C4%90%E1%BA%A1i%20Ngh%C4%A9a%2C%20B%C3%ACnh%20Ch%C3%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Bình Chánh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Hoàn Kiếm 5",
    "type": "Chè",
    "location": "294 Quốc Lộ 1A, Bình Chánh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20Ho%C3%A0n%20Ki%E1%BA%BFm%205%20294%20Qu%E1%BB%91c%20L%E1%BB%99%201A%2C%20B%C3%ACnh%20Ch%C3%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Bình Chánh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Hồng Phát",
    "type": "Bánh xèo",
    "location": "390 Vĩnh Lộc, Bình Chánh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20H%E1%BB%93ng%20Ph%C3%A1t%20390%20V%C4%A9nh%20L%E1%BB%99c%2C%20B%C3%ACnh%20Ch%C3%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Bình Chánh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Mưa Hồng 2",
    "type": "Bánh xèo",
    "location": "264 Vĩnh Lộc, Bình Chánh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20M%C6%B0a%20H%E1%BB%93ng%202%20264%20V%C4%A9nh%20L%E1%BB%99c%2C%20B%C3%ACnh%20Ch%C3%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Bình Chánh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Bến Thành 3",
    "type": "Bánh xèo",
    "location": "20 Nguyễn Hữu Trí, Bình Chánh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20B%E1%BA%BFn%20Th%C3%A0nh%203%2020%20Nguy%E1%BB%85n%20H%E1%BB%AFu%20Tr%C3%AD%2C%20B%C3%ACnh%20Ch%C3%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Bình Chánh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Phố Hội 4",
    "type": "Bánh xèo",
    "location": "477 Trần Đại Nghĩa, Bình Chánh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20Ph%E1%BB%91%20H%E1%BB%99i%204%20477%20Tr%E1%BA%A7n%20%C4%90%E1%BA%A1i%20Ngh%C4%A9a%2C%20B%C3%ACnh%20Ch%C3%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Bình Chánh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Gia Đình 5",
    "type": "Bánh xèo",
    "location": "87 Trần Đại Nghĩa, Bình Chánh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20Gia%20%C4%90%C3%ACnh%205%2087%20Tr%E1%BA%A7n%20%C4%90%E1%BA%A1i%20Ngh%C4%A9a%2C%20B%C3%ACnh%20Ch%C3%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Bình Chánh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Đồng Quê",
    "type": "Khác",
    "location": "235 Quách Điêu, Bình Chánh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20%C4%90%E1%BB%93ng%20Qu%C3%AA%20235%20Qu%C3%A1ch%20%C4%90i%C3%AAu%2C%20B%C3%ACnh%20Ch%C3%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Bình Chánh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Thanh Xuân 2",
    "type": "Khác",
    "location": "244 Vĩnh Lộc, Bình Chánh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20Thanh%20Xu%C3%A2n%202%20244%20V%C4%A9nh%20L%E1%BB%99c%2C%20B%C3%ACnh%20Ch%C3%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Bình Chánh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Saigon Deli 3",
    "type": "Khác",
    "location": "34 Vĩnh Lộc, Bình Chánh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20Saigon%20Deli%203%2034%20V%C4%A9nh%20L%E1%BB%99c%2C%20B%C3%ACnh%20Ch%C3%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Bình Chánh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Sông Trăng 4",
    "type": "Khác",
    "location": "354 Quách Điêu, Bình Chánh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20S%C3%B4ng%20Tr%C4%83ng%204%20354%20Qu%C3%A1ch%20%C4%90i%C3%AAu%2C%20B%C3%ACnh%20Ch%C3%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Bình Chánh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Đồng Quê 5",
    "type": "Khác",
    "location": "189 Quách Điêu, Bình Chánh, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20%C4%90%E1%BB%93ng%20Qu%C3%AA%205%20189%20Qu%C3%A1ch%20%C4%90i%C3%AAu%2C%20B%C3%ACnh%20Ch%C3%A1nh%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Bình Chánh. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Đông Á",
    "type": "Phở",
    "location": "80 Duyên Hải, Cần Giờ, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20%C4%90%C3%B4ng%20%C3%81%2080%20Duy%C3%AAn%20H%E1%BA%A3i%2C%20C%E1%BA%A7n%20Gi%E1%BB%9D%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Cần Giờ. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Thanh Đa 2",
    "type": "Phở",
    "location": "471 Trần Quang Đạo, Cần Giờ, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20Thanh%20%C4%90a%202%20471%20Tr%E1%BA%A7n%20Quang%20%C4%90%E1%BA%A1o%2C%20C%E1%BA%A7n%20Gi%E1%BB%9D%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Cần Giờ. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Gia Đình 3",
    "type": "Phở",
    "location": "109 Tắc Xuất, Cần Giờ, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20Gia%20%C4%90%C3%ACnh%203%20109%20T%E1%BA%AFc%20Xu%E1%BA%A5t%2C%20C%E1%BA%A7n%20Gi%E1%BB%9D%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Cần Giờ. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Viet Kitchen 4",
    "type": "Phở",
    "location": "159 Lương Văn Nho, Cần Giờ, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20Viet%20Kitchen%204%20159%20L%C6%B0%C6%A1ng%20V%C4%83n%20Nho%2C%20C%E1%BA%A7n%20Gi%E1%BB%9D%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Cần Giờ. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Phở Mưa Hồng 5",
    "type": "Phở",
    "location": "294 Lương Văn Nho, Cần Giờ, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ph%E1%BB%9F%20M%C6%B0a%20H%E1%BB%93ng%205%20294%20L%C6%B0%C6%A1ng%20V%C4%83n%20Nho%2C%20C%E1%BA%A7n%20Gi%E1%BB%9D%2C%20TP.%20HCM",
    "notes": "Một quán phở cực kỳ tâm đắc tại Cần Giờ. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Đồng Quê",
    "type": "Bún",
    "location": "307 Thạnh Thới, Cần Giờ, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%90%E1%BB%93ng%20Qu%C3%AA%20307%20Th%E1%BA%A1nh%20Th%E1%BB%9Bi%2C%20C%E1%BA%A7n%20Gi%E1%BB%9D%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Cần Giờ. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Viet Kitchen 2",
    "type": "Bún",
    "location": "350 Duyên Hải, Cần Giờ, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20Viet%20Kitchen%202%20350%20Duy%C3%AAn%20H%E1%BA%A3i%2C%20C%E1%BA%A7n%20Gi%E1%BB%9D%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Cần Giờ. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Đồng Quê 3",
    "type": "Bún",
    "location": "357 Lương Văn Nho, Cần Giờ, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%90%E1%BB%93ng%20Qu%C3%AA%203%20357%20L%C6%B0%C6%A1ng%20V%C4%83n%20Nho%2C%20C%E1%BA%A7n%20Gi%E1%BB%9D%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Cần Giờ. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Nắng Vàng 4",
    "type": "Bún",
    "location": "335 Duyên Hải, Cần Giờ, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20N%E1%BA%AFng%20V%C3%A0ng%204%20335%20Duy%C3%AAn%20H%E1%BA%A3i%2C%20C%E1%BA%A7n%20Gi%E1%BB%9D%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Cần Giờ. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún Đệ Nhất 5",
    "type": "Bún",
    "location": "226 Duyên Hải, Cần Giờ, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%90%E1%BB%87%20Nh%E1%BA%A5t%205%20226%20Duy%C3%AAn%20H%E1%BA%A3i%2C%20C%E1%BA%A7n%20Gi%E1%BB%9D%2C%20TP.%20HCM",
    "notes": "Một quán bún cực kỳ tâm đắc tại Cần Giờ. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Hào Hùng",
    "type": "Cơm",
    "location": "497 Tắc Xuất, Cần Giờ, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20H%C3%A0o%20H%C3%B9ng%20497%20T%E1%BA%AFc%20Xu%E1%BA%A5t%2C%20C%E1%BA%A7n%20Gi%E1%BB%9D%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Cần Giờ. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Thanh Đa 2",
    "type": "Cơm",
    "location": "142 Tắc Xuất, Cần Giờ, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20Thanh%20%C4%90a%202%20142%20T%E1%BA%AFc%20Xu%E1%BA%A5t%2C%20C%E1%BA%A7n%20Gi%E1%BB%9D%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Cần Giờ. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Xưa & Nay 3",
    "type": "Cơm",
    "location": "452 Lương Văn Nho, Cần Giờ, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20X%C6%B0a%20%26%20Nay%203%20452%20L%C6%B0%C6%A1ng%20V%C4%83n%20Nho%2C%20C%E1%BA%A7n%20Gi%E1%BB%9D%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Cần Giờ. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Bến Thành 4",
    "type": "Cơm",
    "location": "151 Trần Quang Đạo, Cần Giờ, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20B%E1%BA%BFn%20Th%C3%A0nh%204%20151%20Tr%E1%BA%A7n%20Quang%20%C4%90%E1%BA%A1o%2C%20C%E1%BA%A7n%20Gi%E1%BB%9D%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Cần Giờ. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cơm Hào Hùng 5",
    "type": "Cơm",
    "location": "193 Tắc Xuất, Cần Giờ, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=C%C6%A1m%20H%C3%A0o%20H%C3%B9ng%205%20193%20T%E1%BA%AFc%20Xu%E1%BA%A5t%2C%20C%E1%BA%A7n%20Gi%E1%BB%9D%2C%20TP.%20HCM",
    "notes": "Một quán cơm cực kỳ tâm đắc tại Cần Giờ. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Nắng Vàng",
    "type": "Lẩu",
    "location": "477 Duyên Hải, Cần Giờ, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20N%E1%BA%AFng%20V%C3%A0ng%20477%20Duy%C3%AAn%20H%E1%BA%A3i%2C%20C%E1%BA%A7n%20Gi%E1%BB%9D%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Cần Giờ. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Thanh Đa 2",
    "type": "Lẩu",
    "location": "199 Tắc Xuất, Cần Giờ, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20Thanh%20%C4%90a%202%20199%20T%E1%BA%AFc%20Xu%E1%BA%A5t%2C%20C%E1%BA%A7n%20Gi%E1%BB%9D%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Cần Giờ. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Mưa Hồng 3",
    "type": "Lẩu",
    "location": "435 Duyên Hải, Cần Giờ, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20M%C6%B0a%20H%E1%BB%93ng%203%20435%20Duy%C3%AAn%20H%E1%BA%A3i%2C%20C%E1%BA%A7n%20Gi%E1%BB%9D%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Cần Giờ. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Sài Thành 4",
    "type": "Lẩu",
    "location": "163 Lương Văn Nho, Cần Giờ, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20S%C3%A0i%20Th%C3%A0nh%204%20163%20L%C6%B0%C6%A1ng%20V%C4%83n%20Nho%2C%20C%E1%BA%A7n%20Gi%E1%BB%9D%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Cần Giờ. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Lẩu Hồng Phát 5",
    "type": "Lẩu",
    "location": "276 Lương Văn Nho, Cần Giờ, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=L%E1%BA%A9u%20H%E1%BB%93ng%20Ph%C3%A1t%205%20276%20L%C6%B0%C6%A1ng%20V%C4%83n%20Nho%2C%20C%E1%BA%A7n%20Gi%E1%BB%9D%2C%20TP.%20HCM",
    "notes": "Một quán lẩu cực kỳ tâm đắc tại Cần Giờ. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Hương Việt",
    "type": "Đồ chay",
    "location": "14 Lương Văn Nho, Cần Giờ, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20H%C6%B0%C6%A1ng%20Vi%E1%BB%87t%2014%20L%C6%B0%C6%A1ng%20V%C4%83n%20Nho%2C%20C%E1%BA%A7n%20Gi%E1%BB%9D%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Cần Giờ. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Chú Bảy 2",
    "type": "Đồ chay",
    "location": "447 Tắc Xuất, Cần Giờ, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20Ch%C3%BA%20B%E1%BA%A3y%202%20447%20T%E1%BA%AFc%20Xu%E1%BA%A5t%2C%20C%E1%BA%A7n%20Gi%E1%BB%9D%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Cần Giờ. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Anh Tư 3",
    "type": "Đồ chay",
    "location": "89 Thạnh Thới, Cần Giờ, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20Anh%20T%C6%B0%203%2089%20Th%E1%BA%A1nh%20Th%E1%BB%9Bi%2C%20C%E1%BA%A7n%20Gi%E1%BB%9D%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Cần Giờ. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Bà Năm 4",
    "type": "Đồ chay",
    "location": "120 Thạnh Thới, Cần Giờ, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20B%C3%A0%20N%C4%83m%204%20120%20Th%E1%BA%A1nh%20Th%E1%BB%9Bi%2C%20C%E1%BA%A7n%20Gi%E1%BB%9D%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Cần Giờ. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chay Thanh Xuân 5",
    "type": "Đồ chay",
    "location": "165 Tắc Xuất, Cần Giờ, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Chay%20Thanh%20Xu%C3%A2n%205%20165%20T%E1%BA%AFc%20Xu%E1%BA%A5t%2C%20C%E1%BA%A7n%20Gi%E1%BB%9D%2C%20TP.%20HCM",
    "notes": "Một quán đồ chay cực kỳ tâm đắc tại Cần Giờ. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Minh Khai",
    "type": "Bánh mì",
    "location": "300 Duyên Hải, Cần Giờ, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20Minh%20Khai%20300%20Duy%C3%AAn%20H%E1%BA%A3i%2C%20C%E1%BA%A7n%20Gi%E1%BB%9D%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Cần Giờ. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Phố Hội 2",
    "type": "Bánh mì",
    "location": "119 Duyên Hải, Cần Giờ, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20Ph%E1%BB%91%20H%E1%BB%99i%202%20119%20Duy%C3%AAn%20H%E1%BA%A3i%2C%20C%E1%BA%A7n%20Gi%E1%BB%9D%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Cần Giờ. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Minh Khai 3",
    "type": "Bánh mì",
    "location": "146 Tắc Xuất, Cần Giờ, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20Minh%20Khai%203%20146%20T%E1%BA%AFc%20Xu%E1%BA%A5t%2C%20C%E1%BA%A7n%20Gi%E1%BB%9D%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Cần Giờ. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Bà Năm 4",
    "type": "Bánh mì",
    "location": "294 Duyên Hải, Cần Giờ, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20B%C3%A0%20N%C4%83m%204%20294%20Duy%C3%AAn%20H%E1%BA%A3i%2C%20C%E1%BA%A7n%20Gi%E1%BB%9D%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Cần Giờ. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh mì Phố Hội 5",
    "type": "Bánh mì",
    "location": "188 Duyên Hải, Cần Giờ, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20m%C3%AC%20Ph%E1%BB%91%20H%E1%BB%99i%205%20188%20Duy%C3%AAn%20H%E1%BA%A3i%2C%20C%E1%BA%A7n%20Gi%E1%BB%9D%2C%20TP.%20HCM",
    "notes": "Một quán bánh mì cực kỳ tâm đắc tại Cần Giờ. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Đệ Nhất",
    "type": "Ăn vặt",
    "location": "63 Thạnh Thới, Cần Giờ, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20%C4%90%E1%BB%87%20Nh%E1%BA%A5t%2063%20Th%E1%BA%A1nh%20Th%E1%BB%9Bi%2C%20C%E1%BA%A7n%20Gi%E1%BB%9D%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Cần Giờ. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Kim Anh 2",
    "type": "Ăn vặt",
    "location": "20 Lương Văn Nho, Cần Giờ, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20Kim%20Anh%202%2020%20L%C6%B0%C6%A1ng%20V%C4%83n%20Nho%2C%20C%E1%BA%A7n%20Gi%E1%BB%9D%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Cần Giờ. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Đồng Quê 3",
    "type": "Ăn vặt",
    "location": "497 Tắc Xuất, Cần Giờ, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20%C4%90%E1%BB%93ng%20Qu%C3%AA%203%20497%20T%E1%BA%AFc%20Xu%E1%BA%A5t%2C%20C%E1%BA%A7n%20Gi%E1%BB%9D%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Cần Giờ. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Vĩnh Lộc 4",
    "type": "Ăn vặt",
    "location": "284 Duyên Hải, Cần Giờ, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20V%C4%A9nh%20L%E1%BB%99c%204%20284%20Duy%C3%AAn%20H%E1%BA%A3i%2C%20C%E1%BA%A7n%20Gi%E1%BB%9D%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Cần Giờ. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ăn vặt Thanh Đa 5",
    "type": "Ăn vặt",
    "location": "428 Lương Văn Nho, Cần Giờ, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%C4%82n%20v%E1%BA%B7t%20Thanh%20%C4%90a%205%20428%20L%C6%B0%C6%A1ng%20V%C4%83n%20Nho%2C%20C%E1%BA%A7n%20Gi%E1%BB%9D%2C%20TP.%20HCM",
    "notes": "Một quán ăn vặt cực kỳ tâm đắc tại Cần Giờ. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Vĩnh Lộc",
    "type": "Bánh cuốn",
    "location": "117 Lương Văn Nho, Cần Giờ, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20V%C4%A9nh%20L%E1%BB%99c%20117%20L%C6%B0%C6%A1ng%20V%C4%83n%20Nho%2C%20C%E1%BA%A7n%20Gi%E1%BB%9D%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Cần Giờ. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Thanh Xuân 2",
    "type": "Bánh cuốn",
    "location": "226 Tắc Xuất, Cần Giờ, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20Thanh%20Xu%C3%A2n%202%20226%20T%E1%BA%AFc%20Xu%E1%BA%A5t%2C%20C%E1%BA%A7n%20Gi%E1%BB%9D%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Cần Giờ. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Hoàn Kiếm 3",
    "type": "Bánh cuốn",
    "location": "450 Thạnh Thới, Cần Giờ, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20Ho%C3%A0n%20Ki%E1%BA%BFm%203%20450%20Th%E1%BA%A1nh%20Th%E1%BB%9Bi%2C%20C%E1%BA%A7n%20Gi%E1%BB%9D%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Cần Giờ. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Cô Ba 4",
    "type": "Bánh cuốn",
    "location": "260 Trần Quang Đạo, Cần Giờ, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20C%C3%B4%20Ba%204%20260%20Tr%E1%BA%A7n%20Quang%20%C4%90%E1%BA%A1o%2C%20C%E1%BA%A7n%20Gi%E1%BB%9D%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Cần Giờ. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh cuốn Bà Năm 5",
    "type": "Bánh cuốn",
    "location": "496 Tắc Xuất, Cần Giờ, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20cu%E1%BB%91n%20B%C3%A0%20N%C4%83m%205%20496%20T%E1%BA%AFc%20Xu%E1%BA%A5t%2C%20C%E1%BA%A7n%20Gi%E1%BB%9D%2C%20TP.%20HCM",
    "notes": "Một quán bánh cuốn cực kỳ tâm đắc tại Cần Giờ. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Kim Anh",
    "type": "Bún đậu",
    "location": "296 Trần Quang Đạo, Cần Giờ, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20Kim%20Anh%20296%20Tr%E1%BA%A7n%20Quang%20%C4%90%E1%BA%A1o%2C%20C%E1%BA%A7n%20Gi%E1%BB%9D%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Cần Giờ. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Nam Hải 2",
    "type": "Bún đậu",
    "location": "142 Tắc Xuất, Cần Giờ, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20Nam%20H%E1%BA%A3i%202%20142%20T%E1%BA%AFc%20Xu%E1%BA%A5t%2C%20C%E1%BA%A7n%20Gi%E1%BB%9D%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Cần Giờ. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Local Taste 3",
    "type": "Bún đậu",
    "location": "236 Trần Quang Đạo, Cần Giờ, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20Local%20Taste%203%20236%20Tr%E1%BA%A7n%20Quang%20%C4%90%E1%BA%A1o%2C%20C%E1%BA%A7n%20Gi%E1%BB%9D%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Cần Giờ. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Thanh Xuân 4",
    "type": "Bún đậu",
    "location": "222 Duyên Hải, Cần Giờ, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20Thanh%20Xu%C3%A2n%204%20222%20Duy%C3%AAn%20H%E1%BA%A3i%2C%20C%E1%BA%A7n%20Gi%E1%BB%9D%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Cần Giờ. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bún đậu Nắng Vàng 5",
    "type": "Bún đậu",
    "location": "5 Lương Văn Nho, Cần Giờ, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%BAn%20%C4%91%E1%BA%ADu%20N%E1%BA%AFng%20V%C3%A0ng%205%205%20L%C6%B0%C6%A1ng%20V%C4%83n%20Nho%2C%20C%E1%BA%A7n%20Gi%E1%BB%9D%2C%20TP.%20HCM",
    "notes": "Một quán bún đậu cực kỳ tâm đắc tại Cần Giờ. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Thanh Đa",
    "type": "Hải sản",
    "location": "112 Trần Quang Đạo, Cần Giờ, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20Thanh%20%C4%90a%20112%20Tr%E1%BA%A7n%20Quang%20%C4%90%E1%BA%A1o%2C%20C%E1%BA%A7n%20Gi%E1%BB%9D%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Cần Giờ. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Sài Thành 2",
    "type": "Hải sản",
    "location": "479 Tắc Xuất, Cần Giờ, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20S%C3%A0i%20Th%C3%A0nh%202%20479%20T%E1%BA%AFc%20Xu%E1%BA%A5t%2C%20C%E1%BA%A7n%20Gi%E1%BB%9D%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Cần Giờ. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Mưa Hồng 3",
    "type": "Hải sản",
    "location": "337 Lương Văn Nho, Cần Giờ, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20M%C6%B0a%20H%E1%BB%93ng%203%20337%20L%C6%B0%C6%A1ng%20V%C4%83n%20Nho%2C%20C%E1%BA%A7n%20Gi%E1%BB%9D%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Cần Giờ. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Cô Ba 4",
    "type": "Hải sản",
    "location": "247 Thạnh Thới, Cần Giờ, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20C%C3%B4%20Ba%204%20247%20Th%E1%BA%A1nh%20Th%E1%BB%9Bi%2C%20C%E1%BA%A7n%20Gi%E1%BB%9D%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Cần Giờ. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hải sản Kim Anh 5",
    "type": "Hải sản",
    "location": "158 Lương Văn Nho, Cần Giờ, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BA%A3i%20s%E1%BA%A3n%20Kim%20Anh%205%20158%20L%C6%B0%C6%A1ng%20V%C4%83n%20Nho%2C%20C%E1%BA%A7n%20Gi%E1%BB%9D%2C%20TP.%20HCM",
    "notes": "Một quán hải sản cực kỳ tâm đắc tại Cần Giờ. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Viet Kitchen",
    "type": "Ốc",
    "location": "35 Tắc Xuất, Cần Giờ, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20Viet%20Kitchen%2035%20T%E1%BA%AFc%20Xu%E1%BA%A5t%2C%20C%E1%BA%A7n%20Gi%E1%BB%9D%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Cần Giờ. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Hồng Phát 2",
    "type": "Ốc",
    "location": "245 Tắc Xuất, Cần Giờ, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20H%E1%BB%93ng%20Ph%C3%A1t%202%20245%20T%E1%BA%AFc%20Xu%E1%BA%A5t%2C%20C%E1%BA%A7n%20Gi%E1%BB%9D%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Cần Giờ. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Đồng Quê 3",
    "type": "Ốc",
    "location": "342 Lương Văn Nho, Cần Giờ, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20%C4%90%E1%BB%93ng%20Qu%C3%AA%203%20342%20L%C6%B0%C6%A1ng%20V%C4%83n%20Nho%2C%20C%E1%BA%A7n%20Gi%E1%BB%9D%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Cần Giờ. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Đệ Nhất 4",
    "type": "Ốc",
    "location": "21 Thạnh Thới, Cần Giờ, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20%C4%90%E1%BB%87%20Nh%E1%BA%A5t%204%2021%20Th%E1%BA%A1nh%20Th%E1%BB%9Bi%2C%20C%E1%BA%A7n%20Gi%E1%BB%9D%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Cần Giờ. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Ốc Bến Thành 5",
    "type": "Ốc",
    "location": "331 Trần Quang Đạo, Cần Giờ, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=%E1%BB%90c%20B%E1%BA%BFn%20Th%C3%A0nh%205%20331%20Tr%E1%BA%A7n%20Quang%20%C4%90%E1%BA%A1o%2C%20C%E1%BA%A7n%20Gi%E1%BB%9D%2C%20TP.%20HCM",
    "notes": "Một quán ốc cực kỳ tâm đắc tại Cần Giờ. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Hoàn Kiếm",
    "type": "Mì",
    "location": "226 Duyên Hải, Cần Giờ, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20Ho%C3%A0n%20Ki%E1%BA%BFm%20226%20Duy%C3%AAn%20H%E1%BA%A3i%2C%20C%E1%BA%A7n%20Gi%E1%BB%9D%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Cần Giờ. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Ngọc Lan 2",
    "type": "Mì",
    "location": "15 Trần Quang Đạo, Cần Giờ, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20Ng%E1%BB%8Dc%20Lan%202%2015%20Tr%E1%BA%A7n%20Quang%20%C4%90%E1%BA%A1o%2C%20C%E1%BA%A7n%20Gi%E1%BB%9D%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Cần Giờ. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Đệ Nhất 3",
    "type": "Mì",
    "location": "124 Trần Quang Đạo, Cần Giờ, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20%C4%90%E1%BB%87%20Nh%E1%BA%A5t%203%20124%20Tr%E1%BA%A7n%20Quang%20%C4%90%E1%BA%A1o%2C%20C%E1%BA%A7n%20Gi%E1%BB%9D%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Cần Giờ. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Viet Kitchen 4",
    "type": "Mì",
    "location": "9 Trần Quang Đạo, Cần Giờ, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20Viet%20Kitchen%204%209%20Tr%E1%BA%A7n%20Quang%20%C4%90%E1%BA%A1o%2C%20C%E1%BA%A7n%20Gi%E1%BB%9D%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Cần Giờ. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Mì Bà Năm 5",
    "type": "Mì",
    "location": "208 Thạnh Thới, Cần Giờ, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=M%C3%AC%20B%C3%A0%20N%C4%83m%205%20208%20Th%E1%BA%A1nh%20Th%E1%BB%9Bi%2C%20C%E1%BA%A7n%20Gi%E1%BB%9D%2C%20TP.%20HCM",
    "notes": "Một quán mì cực kỳ tâm đắc tại Cần Giờ. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Hương Việt",
    "type": "Hủ tiếu",
    "location": "112 Trần Quang Đạo, Cần Giờ, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20H%C6%B0%C6%A1ng%20Vi%E1%BB%87t%20112%20Tr%E1%BA%A7n%20Quang%20%C4%90%E1%BA%A1o%2C%20C%E1%BA%A7n%20Gi%E1%BB%9D%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Cần Giờ. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Vĩnh Lộc 2",
    "type": "Hủ tiếu",
    "location": "425 Lương Văn Nho, Cần Giờ, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20V%C4%A9nh%20L%E1%BB%99c%202%20425%20L%C6%B0%C6%A1ng%20V%C4%83n%20Nho%2C%20C%E1%BA%A7n%20Gi%E1%BB%9D%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Cần Giờ. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Local Taste 3",
    "type": "Hủ tiếu",
    "location": "458 Thạnh Thới, Cần Giờ, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20Local%20Taste%203%20458%20Th%E1%BA%A1nh%20Th%E1%BB%9Bi%2C%20C%E1%BA%A7n%20Gi%E1%BB%9D%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Cần Giờ. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Vĩnh Lộc 4",
    "type": "Hủ tiếu",
    "location": "485 Duyên Hải, Cần Giờ, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20V%C4%A9nh%20L%E1%BB%99c%204%20485%20Duy%C3%AAn%20H%E1%BA%A3i%2C%20C%E1%BA%A7n%20Gi%E1%BB%9D%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Cần Giờ. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Hủ tiếu Hoàn Kiếm 5",
    "type": "Hủ tiếu",
    "location": "252 Tắc Xuất, Cần Giờ, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=H%E1%BB%A7%20ti%E1%BA%BFu%20Ho%C3%A0n%20Ki%E1%BA%BFm%205%20252%20T%E1%BA%AFc%20Xu%E1%BA%A5t%2C%20C%E1%BA%A7n%20Gi%E1%BB%9D%2C%20TP.%20HCM",
    "notes": "Một quán hủ tiếu cực kỳ tâm đắc tại Cần Giờ. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Hào Hùng",
    "type": "Đồ nướng",
    "location": "301 Lương Văn Nho, Cần Giờ, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20H%C3%A0o%20H%C3%B9ng%20301%20L%C6%B0%C6%A1ng%20V%C4%83n%20Nho%2C%20C%E1%BA%A7n%20Gi%E1%BB%9D%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Cần Giờ. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Ông Già 2",
    "type": "Đồ nướng",
    "location": "221 Duyên Hải, Cần Giờ, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20%C3%94ng%20Gi%C3%A0%202%20221%20Duy%C3%AAn%20H%E1%BA%A3i%2C%20C%E1%BA%A7n%20Gi%E1%BB%9D%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Cần Giờ. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Xưa & Nay 3",
    "type": "Đồ nướng",
    "location": "471 Tắc Xuất, Cần Giờ, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20X%C6%B0a%20%26%20Nay%203%20471%20T%E1%BA%AFc%20Xu%E1%BA%A5t%2C%20C%E1%BA%A7n%20Gi%E1%BB%9D%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Cần Giờ. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Cô Ba 4",
    "type": "Đồ nướng",
    "location": "160 Lương Văn Nho, Cần Giờ, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20C%C3%B4%20Ba%204%20160%20L%C6%B0%C6%A1ng%20V%C4%83n%20Nho%2C%20C%E1%BA%A7n%20Gi%E1%BB%9D%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Cần Giờ. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Nướng Saigon Deli 5",
    "type": "Đồ nướng",
    "location": "108 Trần Quang Đạo, Cần Giờ, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=N%C6%B0%E1%BB%9Bng%20Saigon%20Deli%205%20108%20Tr%E1%BA%A7n%20Quang%20%C4%90%E1%BA%A1o%2C%20C%E1%BA%A7n%20Gi%E1%BB%9D%2C%20TP.%20HCM",
    "notes": "Một quán đồ nướng cực kỳ tâm đắc tại Cần Giờ. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Anh Tư",
    "type": "Nước & Cafe",
    "location": "43 Duyên Hải, Cần Giờ, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20Anh%20T%C6%B0%2043%20Duy%C3%AAn%20H%E1%BA%A3i%2C%20C%E1%BA%A7n%20Gi%E1%BB%9D%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Cần Giờ. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Hoàn Kiếm 2",
    "type": "Nước & Cafe",
    "location": "258 Duyên Hải, Cần Giờ, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20Ho%C3%A0n%20Ki%E1%BA%BFm%202%20258%20Duy%C3%AAn%20H%E1%BA%A3i%2C%20C%E1%BA%A7n%20Gi%E1%BB%9D%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Cần Giờ. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Chú Bảy 3",
    "type": "Nước & Cafe",
    "location": "155 Tắc Xuất, Cần Giờ, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20Ch%C3%BA%20B%E1%BA%A3y%203%20155%20T%E1%BA%AFc%20Xu%E1%BA%A5t%2C%20C%E1%BA%A7n%20Gi%E1%BB%9D%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Cần Giờ. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Anh Tư 4",
    "type": "Nước & Cafe",
    "location": "249 Tắc Xuất, Cần Giờ, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20Anh%20T%C6%B0%204%20249%20T%E1%BA%AFc%20Xu%E1%BA%A5t%2C%20C%E1%BA%A7n%20Gi%E1%BB%9D%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Cần Giờ. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Cafe Phố Hội 5",
    "type": "Nước & Cafe",
    "location": "492 Lương Văn Nho, Cần Giờ, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Cafe%20Ph%E1%BB%91%20H%E1%BB%99i%205%20492%20L%C6%B0%C6%A1ng%20V%C4%83n%20Nho%2C%20C%E1%BA%A7n%20Gi%E1%BB%9D%2C%20TP.%20HCM",
    "notes": "Một quán nước & cafe cực kỳ tâm đắc tại Cần Giờ. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Sài Thành",
    "type": "Chè",
    "location": "268 Trần Quang Đạo, Cần Giờ, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20S%C3%A0i%20Th%C3%A0nh%20268%20Tr%E1%BA%A7n%20Quang%20%C4%90%E1%BA%A1o%2C%20C%E1%BA%A7n%20Gi%E1%BB%9D%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Cần Giờ. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Kim Anh 2",
    "type": "Chè",
    "location": "449 Lương Văn Nho, Cần Giờ, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20Kim%20Anh%202%20449%20L%C6%B0%C6%A1ng%20V%C4%83n%20Nho%2C%20C%E1%BA%A7n%20Gi%E1%BB%9D%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Cần Giờ. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Thái Bình 3",
    "type": "Chè",
    "location": "335 Thạnh Thới, Cần Giờ, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20Th%C3%A1i%20B%C3%ACnh%203%20335%20Th%E1%BA%A1nh%20Th%E1%BB%9Bi%2C%20C%E1%BA%A7n%20Gi%E1%BB%9D%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Cần Giờ. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Sông Trăng 4",
    "type": "Chè",
    "location": "316 Tắc Xuất, Cần Giờ, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20S%C3%B4ng%20Tr%C4%83ng%204%20316%20T%E1%BA%AFc%20Xu%E1%BA%A5t%2C%20C%E1%BA%A7n%20Gi%E1%BB%9D%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Cần Giờ. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Chè Minh Khai 5",
    "type": "Chè",
    "location": "455 Tắc Xuất, Cần Giờ, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Ch%C3%A8%20Minh%20Khai%205%20455%20T%E1%BA%AFc%20Xu%E1%BA%A5t%2C%20C%E1%BA%A7n%20Gi%E1%BB%9D%2C%20TP.%20HCM",
    "notes": "Một quán chè cực kỳ tâm đắc tại Cần Giờ. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Đệ Nhất",
    "type": "Bánh xèo",
    "location": "206 Duyên Hải, Cần Giờ, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20%C4%90%E1%BB%87%20Nh%E1%BA%A5t%20206%20Duy%C3%AAn%20H%E1%BA%A3i%2C%20C%E1%BA%A7n%20Gi%E1%BB%9D%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Cần Giờ. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Nắng Vàng 2",
    "type": "Bánh xèo",
    "location": "45 Thạnh Thới, Cần Giờ, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20N%E1%BA%AFng%20V%C3%A0ng%202%2045%20Th%E1%BA%A1nh%20Th%E1%BB%9Bi%2C%20C%E1%BA%A7n%20Gi%E1%BB%9D%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Cần Giờ. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Bà Năm 3",
    "type": "Bánh xèo",
    "location": "189 Tắc Xuất, Cần Giờ, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20B%C3%A0%20N%C4%83m%203%20189%20T%E1%BA%AFc%20Xu%E1%BA%A5t%2C%20C%E1%BA%A7n%20Gi%E1%BB%9D%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Cần Giờ. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Đệ Nhất 4",
    "type": "Bánh xèo",
    "location": "246 Trần Quang Đạo, Cần Giờ, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20%C4%90%E1%BB%87%20Nh%E1%BA%A5t%204%20246%20Tr%E1%BA%A7n%20Quang%20%C4%90%E1%BA%A1o%2C%20C%E1%BA%A7n%20Gi%E1%BB%9D%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Cần Giờ. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Bánh xèo Sông Trăng 5",
    "type": "Bánh xèo",
    "location": "434 Thạnh Thới, Cần Giờ, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=B%C3%A1nh%20x%C3%A8o%20S%C3%B4ng%20Tr%C4%83ng%205%20434%20Th%E1%BA%A1nh%20Th%E1%BB%9Bi%2C%20C%E1%BA%A7n%20Gi%E1%BB%9D%2C%20TP.%20HCM",
    "notes": "Một quán bánh xèo cực kỳ tâm đắc tại Cần Giờ. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Vĩnh Lộc",
    "type": "Khác",
    "location": "192 Lương Văn Nho, Cần Giờ, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20V%C4%A9nh%20L%E1%BB%99c%20192%20L%C6%B0%C6%A1ng%20V%C4%83n%20Nho%2C%20C%E1%BA%A7n%20Gi%E1%BB%9D%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Cần Giờ. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Anh Tư 2",
    "type": "Khác",
    "location": "167 Tắc Xuất, Cần Giờ, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20Anh%20T%C6%B0%202%20167%20T%E1%BA%AFc%20Xu%E1%BA%A5t%2C%20C%E1%BA%A7n%20Gi%E1%BB%9D%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Cần Giờ. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Mưa Hồng 3",
    "type": "Khác",
    "location": "182 Lương Văn Nho, Cần Giờ, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20M%C6%B0a%20H%E1%BB%93ng%203%20182%20L%C6%B0%C6%A1ng%20V%C4%83n%20Nho%2C%20C%E1%BA%A7n%20Gi%E1%BB%9D%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Cần Giờ. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Hào Hùng 4",
    "type": "Khác",
    "location": "300 Tắc Xuất, Cần Giờ, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20H%C3%A0o%20H%C3%B9ng%204%20300%20T%E1%BA%AFc%20Xu%E1%BA%A5t%2C%20C%E1%BA%A7n%20Gi%E1%BB%9D%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Cần Giờ. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  },
  {
    "name": "Quán Saigon Deli 5",
    "type": "Khác",
    "location": "158 Thạnh Thới, Cần Giờ, TP. HCM",
    "googleMapsUrl": "https://www.google.com/maps/search/?api=1&query=Qu%C3%A1n%20Saigon%20Deli%205%20158%20Th%E1%BA%A1nh%20Th%E1%BB%9Bi%2C%20C%E1%BA%A7n%20Gi%E1%BB%9D%2C%20TP.%20HCM",
    "notes": "Một quán khác cực kỳ tâm đắc tại Cần Giờ. Đồ ăn tươi ngon, phục vụ chu đáo.",
    "mealTimes": [
      "Trưa",
      "Tối"
    ]
  }
];
