import type { Restaurant } from '@/types';

export const SAMPLE_RESTAURANTS: Omit<Restaurant, 'id' | 'createdAt'>[] = [
  // --- PHỞ (10) ---
  {
    name: "Phở Hòa Pasteur",
    type: "Phở",
    location: "260C Pasteur, Quận 3, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Phở+Hòa+Pasteur+260C+Pasteur+Quận+3",
    notes: "Quán phở lâu đời và nổi tiếng nhất nhì Sài Gòn.",
    mealTimes: ["Sáng", "Trưa", "Tối"]
  },
  {
    name: "Phở Lệ",
    type: "Phở",
    location: "413 Nguyễn Trãi, Quận 5, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Phở+Lệ+Nguyễn+Trãi+TP.HCM",
    notes: "Hương vị phở miền Nam đậm đà, nước dùng ngọt thanh.",
    mealTimes: ["Sáng", "Trưa", "Tối", "Khuya"]
  },
  {
    name: "Phở Cao Vân",
    type: "Phở",
    location: "25 Mạc Đĩnh Chi, Quận 1, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Phở+Cao+Vân+Mạc+Đĩnh+Chi",
    notes: "Quán phở cổ truyền, nước dùng trong vắt tinh tế.",
    mealTimes: ["Sáng", "Trưa"]
  },
  {
    name: "Phở Thìn Sài Gòn",
    type: "Phở",
    location: "144 Lê Thị Hồng Gấm, Quận 1, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Phở+Thìn+Saigon+Lê+Thị+Hồng+Gấm",
    notes: "Phiên bản Phở Thìn Lò Đúc nổi tiếng tại Sài Gòn.",
    mealTimes: ["Sáng", "Trưa", "Tối"]
  },
  {
    name: "Phở Phú Vương",
    type: "Phở",
    location: "339 Lê Văn Sỹ, Tân Bình, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Phở+Phú+Vương+Lê+Văn+Sỹ",
    notes: "Nổi tiếng với thịt bò bắp hoa và nạm gân rất ngon.",
    mealTimes: ["Sáng", "Trưa", "Tối"]
  },
  {
    name: "Phở Minh",
    type: "Phở",
    location: "63/16 Pasteur, Quận 1, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Phở+Minh+Pasteur",
    notes: "Ẩm mình trong hẻm nhỏ, lưu giữ phong vị phở xưa.",
    mealTimes: ["Sáng"]
  },
  {
    name: "Phở Phượng 25",
    type: "Phở",
    location: "25 Hoàng Sa, Quận 1, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Phở+Phượng+25+Hoàng+Sa",
    notes: "Nước dùng béo ngậy, thịt bò mềm và gân bò rất thấm vị.",
    mealTimes: ["Sáng", "Trưa", "Tối"]
  },
  {
    name: "Phở Hùng",
    type: "Phở",
    location: "243 Nguyễn Trãi, Quận 1, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Phở+Hùng+Nguyễn+Trãi",
    notes: "Hệ thống phở sạch sẽ, vị thanh nhẹ, phù hợp khách du lịch.",
    mealTimes: ["Sáng", "Trưa", "Tối", "Khuya"]
  },
  {
    name: "Phở Dậu",
    type: "Phở",
    location: "Cư xá 288, Nam Kỳ Khởi Nghĩa, Quận 3, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Phở+Dậu+Nam+Kỳ+Khởi+Nghĩa",
    notes: "Phở chuẩn vị Bắc (Nam Định), không ăn kèm rau giá hay tương đen.",
    mealTimes: ["Sáng"]
  },
  {
    name: "Phở Hương Bình",
    type: "Phở",
    location: "148 Võ Thị Sáu, Quận 3, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Phở+Hương+Bình+Võ+Thị+Sáu",
    notes: "Nổi tiếng với món phở gà ta da giòn, thịt chắc.",
    mealTimes: ["Sáng", "Trưa", "Tối"]
  },

  // --- BÚN (10) ---
  {
    name: "Bún Bò Huế Đông Ba",
    type: "Bún",
    location: "110A Nguyễn Du, Quận 1, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bún+Bò+Huế+Đông+Ba+Nguyễn+Du",
    notes: "Vị bún bò chuẩn Huế, sợi bún to, nước dùng thơm mùi mắm ruốc.",
    mealTimes: ["Sáng", "Trưa", "Tối"]
  },
  {
    name: "Bún Bò Gánh",
    type: "Bún",
    location: "88 Lý Tự Trọng, Quận 1, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bún+Bò+Gánh+Lý+Tự+Trọng",
    notes: "Không gian sang trọng, bún bò và các món bánh Huế rất ngon.",
    mealTimes: ["Sáng", "Trưa", "Tối"]
  },
  {
    name: "Bún Thịt Nướng Anh Ba",
    type: "Bún",
    location: "126 Lê Quý Đôn, Quận 3, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bún+Thịt+Nướng+Anh+Ba+Saigon",
    notes: "Tô bún to, thịt nướng thơm, nem nướng giòn rụm.",
    mealTimes: ["Sáng", "Trưa", "Tối"]
  },
  {
    name: "Bún Mắm 444",
    type: "Bún",
    location: "375 Lê Quang Định, Bình Thạnh, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bún+Mắm+444+Lê+Quang+Định",
    notes: "Nước lèo đậm đà mùi mắm, tôm và heo quay cực ngon.",
    mealTimes: ["Trưa", "Chiều", "Tối"]
  },
  {
    name: "Bún Riêu Nguyễn Cảnh Chân",
    type: "Bún",
    location: "18 Nguyễn Cảnh Chân, Quận 1, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bún+Riêu+Nguyễn+Cảnh+Chân+Saigon",
    notes: "Miếng riêu cua to, nước dùng ngọt thanh vị cà rốt/cà chua.",
    mealTimes: ["Trưa", "Chiều", "Tối"]
  },
  {
    name: "Bún Chả 145 Bùi Viện",
    type: "Bún",
    location: "145 Bùi Viện, Quận 1, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bún+Chả+145+Bùi+Viện",
    notes: "Bún chả Hà Nội phục vụ theo phong cách hiện đại.",
    mealTimes: ["Trưa", "Tối"]
  },
  {
    name: "Bún Cá Quy Nhơn Lệ",
    type: "Bún",
    location: "208 Đồng Đen, Tân Bình, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bún+Cá+Quy+Nhơn+Lệ+Saigon",
    notes: "Chả cá Quy Nhơn chiên vàng tươm trong nước dùng thanh mát.",
    mealTimes: ["Sáng", "Trưa", "Tối"]
  },
  {
    name: "Bún Bò Út Hưng",
    type: "Bún",
    location: "154/7 Nguyễn Thiện Thuật, Quận 3, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bún+Bò+Út+Hưng+Nguyễn+Thiện+Thuật",
    notes: "Quán bún bò lâu đời, nước dùng đậm đà hương sả mắm ruốc.",
    mealTimes: ["Sáng", "Trưa", "Tối"]
  },
  {
    name: "Bún Mọc Thanh Mai",
    type: "Bún",
    location: "Trương Định, Quận 1, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bún+Mọc+Thanh+Mai+Quận+1",
    notes: "Nổi tiếng với các loại viên mọc giòn, dai và nước dùng trong thanh.",
    mealTimes: ["Sáng", "Trưa"]
  },
  {
    name: "Bún Kèn Dì 3",
    type: "Bún",
    location: "Trần Hưng Đạo, Quận 5, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bún+Kèn+Dì+3+Saigon",
    notes: "Món bún kèn đặc sản Phú Quốc với nước cốt dừa và cá xay.",
    mealTimes: ["Chiều", "Tối"]
  },

  // --- CƠM (10) ---
  {
    name: "Cơm Tấm Bãi Rác",
    type: "Cơm",
    location: "73 Lê Văn Linh, Quận 4, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Cơm+Tấm+Bãi+Rác+Quận+4",
    notes: "Sườn nướng mật ong cực phẩm, dù tên lạ nhưng khách cực đông.",
    mealTimes: ["Trưa", "Tối", "Khuya"]
  },
  {
    name: "Cơm Tấm Nguyễn Văn Cừ",
    type: "Cơm",
    location: "74 Nguyễn Văn Cừ, Quận 1, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Cơm+Tấm+Nguyễn+Văn+Cừ",
    notes: "Miếng sườn to đùng, nướng thơm phức, chất lượng đi đôi với giá.",
    mealTimes: ["Sáng", "Trưa"]
  },
  {
    name: "Cơm Tấm Thuận Kiều",
    type: "Cơm",
    location: "54 Thuận Kiều, Quận 11, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Cơm+Tấm+Thuận+Kiều+Quận+11",
    notes: "Thương hiệu cơm tấm lâu đời, menu đa dạng món.",
    mealTimes: ["Sáng", "Trưa", "Tối"]
  },
  {
    name: "Cơm Tấm Ba Ghiền",
    type: "Cơm",
    location: "84 Đặng Văn Ngữ, Phú Nhuận, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Cơm+Tấm+Ba+Ghiền+Đặng+Văn+Ngữ",
    notes: "Sườn cây nướng cực to, được chứng nhận Michelin Bib Gourmand.",
    mealTimes: ["Sáng", "Trưa", "Chiều"]
  },
  {
    name: "Cơm Niêu Sài Gòn",
    type: "Cơm",
    location: "27 Tú Xương, Quận 3, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Cơm+Niêu+Sài+Gòn+Tú+Xương",
    notes: "Đặc sản cơm đập ném đi ném lại vô cùng độc đáo.",
    mealTimes: ["Trưa", "Tối"]
  },
  {
    name: "Secret Garden",
    type: "Cơm",
    location: "158 Bis Pasteur, Quận 1, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Secret+Garden+Pasteur+Saigon",
    notes: "Cơm gia đình miền Nam trên sân thượng view phố.",
    mealTimes: ["Trưa", "Tối"]
  },
  {
    name: "Cơm Gà Lão Hương Thân",
    type: "Cơm",
    location: "402 Trần Phú, Quận 5, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Cơm+Gà+Xối+Mỡ+Lão+Hương+Thân",
    notes: "Đùi gà chiên giòn rụm, cơm chiên tơi ngon mắt.",
    mealTimes: ["Trưa", "Tối", "Khuya"]
  },
  {
    name: "Cơm Gà Hải Nam",
    type: "Cơm",
    location: "95-97 Âu Cơ, Tân Bình, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Cơm+Gà+Hải+Nam+Âu+Cơ",
    notes: "Gà luộc da vàng óng, cơm nấu bằng nước dùng gà thơ phức.",
    mealTimes: ["Trưa", "Tối"]
  },
  {
    name: "Cơm Gà Thượng Hải",
    type: "Cơm",
    location: "21-23 Võ Văn Tần, Quận 3, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Cơm+Gà+Thượng+Hải+Võ+Văn+Tần",
    notes: "Nhà hàng cơm gà lâu đời, gà quay da giòn rất ngon.",
    mealTimes: ["Trưa", "Tối"]
  },
  {
    name: "Cơm Tấm Phúc Lộc Thọ",
    type: "Cơm",
    location: "236 Đinh Tiên Hoàng, Quận 1, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Cơm+Tấm+Phúc+Lộc+Thọ",
    notes: "Chuỗi cơm tấm hiện đại, đồng nhất chất lượng, giá hợp lý.",
    mealTimes: ["Sáng", "Trưa", "Tối"]
  },

  // --- LẨU (10) ---
  {
    name: "Lẩu Cua Đất Mũi",
    type: "Lẩu",
    location: "769 Quang Trung, Gò Vấp, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Lẩu+Cua+Đất+Mũi+Quang+Trung",
    notes: "Cua Cà Mau tươi rói, lẩu cua gạch cực kỳ chất lượng.",
    mealTimes: ["Trưa", "Tối"]
  },
  {
    name: "Lẩu Cá Đuối Hoàng Minh Sài Gòn",
    type: "Lẩu",
    location: "54 trương định, Quận 1, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Lẩu+Cá+Đuối+Hoàng+Minh+Saigon",
    notes: "Mang phong vị lẩu cá đuối Vũng Tàu về giữa trung tâm.",
    mealTimes: ["Trưa", "Tối"]
  },
  {
    name: "Lẩu Bò Tí Chuột",
    type: "Lẩu",
    location: "1-3 Cao Bá Nhạ, Quận 1, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Lẩu+Bò+Tí+Chuột+Cao+Bá+Nhạ",
    notes: "Lẩu bò bình dân, nước dùng thanh ngọt, thịt bò tươi.",
    mealTimes: ["Trưa", "Chiều", "Tối", "Khuya"]
  },
  {
    name: "Lẩu Dê Trương Định",
    type: "Lẩu",
    location: "105 Trương Định, Quận 3, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Lẩu+Dê+Trương+Định",
    notes: "Địa chỉ ăn dê lâu đời, nhũ dê nướng chấm chao cực ngon.",
    mealTimes: ["Chiều", "Tối"]
  },
  {
    name: "Lẩu Cá Kèo Bà Huyện",
    type: "Lẩu",
    location: "18 Bà Huyện Thanh Quan, Quận 3, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Lẩu+Cá+Kèo+Bà+Huyện+Thanh+Quan",
    notes: "Đặc sản lẩu cá kèo lá giang chua cay nồng nàn.",
    mealTimes: ["Trưa", "Tối"]
  },
  {
    name: "Lẩu Bò Nhà Gỗ Sài Gòn",
    type: "Lẩu",
    location: "162 Lý Thái Tổ, Quận 3, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Lẩu+Bò+Nhà+Gỗ+Saigon",
    notes: "Phiên bản Sài Gòn của tiệm lẩu bò nổi tiếng Đà Lạt.",
    mealTimes: ["Trưa", "Tối"]
  },
  {
    name: "Lẩu bê thui Cầu Mống Sài Gòn",
    type: "Lẩu",
    location: "Phan Văn Trị, Gò Vấp, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bê+thui+Cầu+Mống+Saigon",
    notes: "Thịt bê tái chanh cuốn bánh tráng rau rừng chuẩn vị miền Trung.",
    mealTimes: ["Chiều", "Tối"]
  },
  {
    name: "Lẩu mắm Dạ Lý Sài Gòn",
    type: "Lẩu",
    location: "Cao Thắng, Quận 10, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Lẩu+mắm+Dạ+Lý+Saigon",
    notes: "Hương vị lẩu mắm đậm đà, mang phong cách Cần Thơ.",
    mealTimes: ["Trưa", "Tối"]
  },
  {
    name: "Lẩu Công Chúa",
    type: "Lẩu",
    location: "Aeon Mall Tân Phú, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Lẩu+Công+Chúa+Aeon+Tân+Phú",
    notes: "Lẩu mini phong cách Nhật Bản/Hàn Quốc, rất tiện lợi.",
    mealTimes: ["Trưa", "Tối"]
  },
  {
    name: "Haidilao Hotpot",
    type: "Lẩu",
    location: "Bitexco Financial Tower, Quận 1, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Haidilao+Saigon",
    notes: "Trải nghiệm lẩu đẳng cấp với dịch vụ chăm sóc khách hàng cực tốt.",
    mealTimes: ["Trưa", "Tối", "Khuya"]
  },

  // --- ĐỒ CHAY (10) ---
  {
    name: "Hum Vegetarian",
    type: "Đồ chay",
    location: "32 Võ Văn Tần, Quận 3, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Hum+Vegetarian+Saigon",
    notes: "Không gian thiền định, món chay sáng tạo và trình bày tuyệt đẹp.",
    mealTimes: ["Trưa", "Tối"]
  },
  {
    name: "Shamballa Vegetarian",
    type: "Đồ chay",
    location: "17 Trịnh Văn Cấn, Quận 1, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Shamballa+Vegetarian+Quận+1",
    notes: "Ẩm thực chay cao cấp phong cách Tây Tạng ấm cúng.",
    mealTimes: ["Trưa", "Tối"]
  },
  {
    name: "Quán Chay Giác Tha",
    type: "Đồ chay",
    location: "46 Trần Quang Khải, Quận 1, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Quán+Chay+Giác+Tha+Saigon",
    notes: "Menu đa dạng hàng trăm món, giá cả rất bình dân.",
    mealTimes: ["Sáng", "Trưa", "Tối"]
  },
  {
    name: "Pi Bistro",
    type: "Đồ chay",
    location: "19 Võ Văn Tần, Quận 3, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Pi+Bistro+Saigon",
    notes: "Phong cách mộc mạc, món chay đậm đà vị Á Đông.",
    mealTimes: ["Trưa", "Tối"]
  },
  {
    name: "Bông Súng Vegetarian",
    type: "Đồ chay",
    location: "86 Nguyễn Du, Quận 1, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bông+Súng+Vegetarian+Nguyễn+Du",
    notes: "Món chay gia đình đậm đà, không gian xanh mát giữa trung tâm.",
    mealTimes: ["Trưa", "Tối"]
  },
  {
    name: "Zen House Café",
    type: "Đồ chay",
    location: "60/2 Vân Côi, Tân Bình, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Zen+House+Saigon",
    notes: "Cafe và món chay trong biệt thự Pháp sang trọng.",
    mealTimes: ["Sáng", "Trưa", "Tối"]
  },
  {
    name: "Metta Vegetarian",
    type: "Đồ chay",
    location: "6 đường số 19, Thảo Điền, Quận 2, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Metta+Vegetarian+Thảo+Điền",
    notes: "Món chay phong cách Âu-Á hòa quyện, rất được khách Tây ưa chuộng.",
    mealTimes: ["Trưa", "Tối"]
  },
  {
    name: "Viễn Đông Chay",
    type: "Đồ chay",
    location: "140 Phan Xích Long, Phú Nhuận, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Viễn+Đông+Chay+Phan+Xích+Long",
    notes: "Bún bò chay và lẩu nấm là hai món phải thử tại đây.",
    mealTimes: ["Sáng", "Trưa", "Tối"]
  },
  {
    name: "Quán Chay Mandala",
    type: "Đồ chay",
    location: "110 Sương Nguyệt Ánh, Quận 1, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Chay+Mandala+Sương+Nguyệt+Ánh",
    notes: "Không gian mang hơi hướng Phật giáo, thức ăn nhẹ nhàng thanh khiết.",
    mealTimes: ["Trưa", "Tối"]
  },
  {
    name: "Hủ Tiếu Chay Cây Đề",
    type: "Đồ chay",
    location: "386 Lê Văn Sỹ, Quận 3, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Hủ+Tiếu+Chay+Cây+Đề",
    notes: "Món hủ tiếu chay Mỹ Tho nổi tiếng bậc nhất Sài Gòn.",
    mealTimes: ["Sáng", "Trưa", "Tối"]
  },

  // --- BÁNH MÌ (10) ---
  {
    name: "Bánh Mì Huỳnh Hoa",
    type: "Bánh mì",
    location: "26 Lê Thị Riêng, Quận 1, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bánh+Mì+Huỳnh+Hoa+Lê+Thị+Riêng",
    notes: "Ổ bánh mì full-topping nặng gần nửa ký, cực kỳ chất lượng.",
    mealTimes: ["Chiều", "Tối", "Khuya"]
  },
  {
    name: "Bánh Mì Hòa Mã",
    type: "Bánh mì",
    location: "53 Cao Thắng, Quận 3, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bánh+Mì+Hòa+Mã+Saigon",
    notes: "Bánh mì chảo kiểu Pháp cổ điển, ngồi vỉa hè rất thú vị.",
    mealTimes: ["Sáng"]
  },
  {
    name: "Bánh Mì Ô Thao",
    type: "Bánh mì",
    location: "150/14 Nguyễn Trãi, Quận 1, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bánh+Mì+Ô+Thao+Nguyễn+Trãi",
    notes: "Bánh mì gà xé mặn ngọt cực kỳ bắt miệng.",
    mealTimes: ["Sáng", "Trưa", "Chiều", "Tối"]
  },
  {
    name: "Bánh Mì 37 Nguyễn Trãi",
    type: "Bánh mì",
    location: "37 Nguyễn Trãi, Quận 1, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bánh+Mì+Thịt+Nướng+37+Nguyễn+Trãi",
    notes: "Xe bánh mì thịt nướng viên trứ danh, từng được báo chí nước ngoài ca ngợi.",
    mealTimes: ["Chiều"]
  },
  {
    name: "Bánh Mì Bảy Hổ",
    type: "Bánh mì",
    location: "19 Huỳnh Khương Ninh, Quận 1, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bánh+Mì+Bảy+Hổ+Saigon",
    notes: "Xe bánh mì gia truyền hơn 80 năm, pate và thịt xá xíu cực ngon.",
    mealTimes: ["Chiều", "Tối"]
  },
  {
    name: "Bánh Mì Như Lan",
    type: "Bánh mì",
    location: "50 Hàm Nghi, Quận 1, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bánh+Mì+Như+Lan+Hàm+Nghi",
    notes: "Biểu tượng bánh mì Sài Gòn xưa, menu đa dạng cả đồ ngọt.",
    mealTimes: ["Sáng", "Trưa", "Tối", "Khuya"]
  },
  {
    name: "Bánh Mì Sáu Minh",
    type: "Bánh mì",
    location: "170 Võ Văn Tần, Quận 3, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bánh+Mì+Sáu+Minh+Võ+Văn+Tần",
    notes: "Bánh mì chả lụa và giò thủ cực chất lượng, ăn một lần là nhớ.",
    mealTimes: ["Sáng", "Chiều"]
  },
  {
    name: "Bánh Mì Chảo Cô Ba Hậu",
    type: "Bánh mì",
    location: "36 Đường số 18, Quận Gò Vấp, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bánh+Mì+Chảo+Cô+Ba+Hậu",
    notes: "Chảo đầy ắp pate, trứng, súc sắc và sốt cà chua đặc biệt.",
    mealTimes: ["Sáng", "Trưa"]
  },
  {
    name: "Bánh Mì PewPew",
    type: "Bánh mì",
    location: "66 Út Tịch, Tân Bình, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bánh+Mì+PewPew+Saigon",
    notes: "Bánh mì hiện đại, đa dạng nhân kiểu mới (bò khô, gà nướng).",
    mealTimes: ["Sáng", "Trưa", "Tối"]
  },
  {
    name: "Bánh Mì Tươi Mười Cho",
    type: "Bánh mì",
    location: "Nguyễn Văn Nghi, Gò Vấp, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bánh+Mì+Mười+Cho+Gò+Vấp",
    notes: "Bánh mì mới ra lò nóng hổi, pate mềm mịn thơm lừng.",
    mealTimes: ["Chiều", "Tối", "Khuya"]
  },

  // --- ĂN VẶT (10) ---
  {
    name: "Bánh Tráng Trộn Chú Viên",
    type: "Ăn vặt",
    location: "38 Nguyễn Thượng Hiền, Quận 3, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bánh+Tráng+Trộn+Chú+Viên",
    notes: "Tiệm bánh tráng trộn nức tiếng, nước sốt bò đen thần thánh.",
    mealTimes: ["Trưa", "Chiều", "Tối"]
  },
  {
    name: "Bột Chiên Đạt Thành",
    type: "Ăn vặt",
    location: "277 Võ Văn Tần, Quận 3, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bột+Chiên+Đạt+Thành+Võ+Văn+Tần",
    notes: "Bột chiên giòn rụm bên ngoài, mềm bên trong, trứng béo ngậy.",
    mealTimes: ["Chiều", "Tối", "Khuya"]
  },
  {
    name: "Xôi Gà Bà Chiểu",
    type: "Ăn vặt",
    location: "Chợ Bà Chiểu, Bình Thạnh, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Xôi+Gà+Bà+Chiểu+TP.HCM",
    notes: "Gà chiên giòn, nước sốt mặn ngọt bọc trong lá chuối mát mắt.",
    mealTimes: ["Chiều", "Tối", "Khuya"]
  },
  {
    name: "Xôi Nhà Xác",
    type: "Ăn vặt",
    location: "409 Trần Phú, Quận 5, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Xôi+Nhà+Xác+Trần+Phú+Saigon",
    notes: "Tuy tên hơi đáng sợ nhưng xôi mặn ở đây cực ngon và rẻ.",
    mealTimes: ["Chiều", "Tối", "Khuya"]
  },
  {
    name: "Chuối Nướng Võ Văn Tần",
    type: "Ăn vặt",
    location: "378 Võ Văn Tần, Quận 3, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Chuối+Nướng+Võ+Văn+Tần+Saigon",
    notes: "Món ăn vặt đường phố nổi tiếng, cốt dừa thơm béo.",
    mealTimes: ["Trưa", "Chiều"]
  },
  {
    name: "Gỏi Cuốn Hạnh",
    type: "Ăn vặt",
    location: "420 Hòa Hảo, Quận 10, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Gỏi+Cuốn+Hạnh+Hòa+Hảo",
    notes: "Gỏi cuốn tôm thịt to tròn, tương đen chấm kèm rất vừa vị.",
    mealTimes: ["Trưa", "Chiều", "Tối"]
  },
  {
    name: "Phá Lấu Cô Thảo",
    type: "Ăn vặt",
    location: "243/29G Tôn Đản, Quận 4, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Phá+Lấu+Cô+Thảo+Tôn+Đản",
    notes: "Món phá lấu trứ danh Quận 4, nước dùng dừa béo thơm nồng.",
    mealTimes: ["Chiều", "Tối"]
  },
  {
    name: "Cá Viên Chiên Lương Hữu Khánh",
    type: "Ăn vặt",
    location: "33 Lương Hữu Khánh, Quận 1, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Cá+Viên+Chiên+Lương+Hữu+Khánh",
    notes: "Khu cá viên chiên sầm uất, tương ớt đặc trưng tự làm.",
    mealTimes: ["Chiều", "Tối"]
  },
  {
    name: "Súp Cua Hạnh",
    type: "Ăn vặt",
    location: "549 Sư Vạn Hạnh, Quận 10, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Súp+Cua+Hạnh+Sư+Vạn+Hạnh",
    notes: "Súp cua đặc sệt, nhiều óc heo và trứng bắc thảo rất béo.",
    mealTimes: ["Trưa", "Chiều", "Tối"]
  },
  {
    name: "Bánh Tráng Nướng Đà Lạt Gốc",
    type: "Ăn vặt",
    location: "Cao Thắng, Quận 3, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bánh+Tráng+Nướng+Cao+Thắng",
    notes: "Pizza Việt Nam với đủ loại nhân, nướng trên than hồng thơm nồng.",
    mealTimes: ["Chiều", "Tối"]
  },

  // --- BÁNH CUỐN (10) ---
  {
    name: "Bánh Cuốn Tây Hồ",
    type: "Bánh cuốn",
    location: "127 Đinh Tiên Hoàng, Quận 1, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bánh+Cuốn+Tây+Hồ+Đinh+Tiên+Hoàng",
    notes: "Quán bánh cuốn lâu đời, nhân thịt bằm mọc nhĩ rất thơm.",
    mealTimes: ["Sáng", "Trưa", "Tối"]
  },
  {
    name: "Bánh Cuốn Hồng Hạnh",
    type: "Bánh cuốn",
    location: "17A Nguyễn Thị Minh Khai, Quận 1, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bánh+Cuốn+Hồng+Hạnh+Saigon",
    notes: "Bánh cuốn nóng, mỏng, ăn kèm chả huế và nem chua.",
    mealTimes: ["Sáng", "Trưa", "Tối"]
  },
  {
    name: "Bánh Cuốn Thiên Hương",
    type: "Bánh cuốn",
    location: "179A đường 3/2, Quận 10, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bánh+Cuốn+Thiên+Hương+Saigon",
    notes: "Bánh cuốn trứng là món đặc trưng tại đây, nước mắm pha rất khéo.",
    mealTimes: ["Sáng", "Trưa", "Tối"]
  },
  {
    name: "Bánh Cuốn Hải Nam",
    type: "Bánh cuốn",
    location: "11A Cao Thắng, Quận 3, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bánh+Cuốn+Hải+Nam+Cao+Thắng",
    notes: "Bánh cuốn nhân tôm thịt tươi, ăn kèm với bánh tôm chiên giòn.",
    mealTimes: ["Sáng", "Trưa", "Tối"]
  },
  {
    name: "Bánh Cuốn Ý Lan",
    type: "Bánh cuốn",
    location: "Trần Quốc Thảo, Quận 3, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bánh+Cuốn+Ý+Lan+Saigon",
    notes: "Không gian lịch sự, bánh cuốn mềm mượt, phục vụ nhanh.",
    mealTimes: ["Sáng", "Trưa", "Tối"]
  },
  {
    name: "Bánh Cuốn Minh Lan",
    type: "Bánh cuốn",
    location: "Nguyễn Thượng Hiền, Quận 3, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bánh+Cuốn+Minh+Lan+Saigon",
    notes: "Bánh cuốn bình dân nhưng chất lượng rất ổn định qua nhiều năm.",
    mealTimes: ["Sáng", "Trưa"]
  },
  {
    name: "Bánh Cuốn Kim Long",
    type: "Bánh cuốn",
    location: "Nguyễn Tất Thành, Quận 4, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bánh+Cuốn+Kim+Long+Saigon",
    notes: "Món bánh cuốn nóng hổi, chả lụa ngon và giá rẻ.",
    mealTimes: ["Sáng", "Chiều"]
  },
  {
    name: "Bánh Cuốn Bà Hanh",
    type: "Bánh cuốn",
    location: "Phan Đăng Lưu, Phú Nhuận, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bánh+Cuốn+Bà+Hanh+Saigon",
    notes: "Bánh cuốn kiểu Bắc, nhân mộc nhĩ giòn sần sật.",
    mealTimes: ["Sáng", "Trưa", "Tối"]
  },
  {
    name: "Bánh Cuốn Nóng Cô Giang",
    type: "Bánh cuốn",
    location: "Cô Giang, Quận 1, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bánh+Cuốn+Cô+Giang+Saigon",
    notes: "Quán vỉa hè nhưng luôn đông khách vì bánh đổ liên tục, nóng hổi.",
    mealTimes: ["Sáng"]
  },
  {
    name: "Bánh Cuốn Thanh Trì",
    type: "Bánh cuốn",
    location: "Ký Con, Quận 1, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bánh+Cuốn+Thanh+Trì+Ký+Con",
    notes: "Bánh tráng mỏng không nhân, ăn cùng hành phi và chả quế.",
    mealTimes: ["Sáng", "Trưa"]
  },

  // --- BÚN ĐẬU (10) ---
  {
    name: "Bún Đậu Mắm Tôm A Chảnh",
    type: "Bún đậu",
    location: "359 Tô Hiến Thành, Quận 10, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bún+Đậu+A+Chảnh+Tô+Hiến+Thành",
    notes: "Giá cả sinh viên, món ăn lên nhanh và mắm tôm rất vừa miệng.",
    mealTimes: ["Trưa", "Tối"]
  },
  {
    name: "Bún Đậu Cô Khàn",
    type: "Bún đậu",
    location: "102/26 Cống Quỳnh, Quận 1, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bún+Đậu+Cô+Khàn+Saigon",
    notes: "Vị bún đậu chuẩn Hà Nội giữa lòng Sài Gòn của cựu người mẫu Trang Trần.",
    mealTimes: ["Trưa", "Tối"]
  },
  {
    name: "Bún Đậu Mạc Văn Khoa",
    type: "Bún đậu",
    location: "Phan Huy Ích, Gò Vấp, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bún+Đậu+Mạc+Văn+Khoa",
    notes: "Chuỗi bún đậu của nghệ sĩ hài Mạc Văn Khoa, mắm tôm thơm đặc trưng.",
    mealTimes: ["Trưa", "Tối"]
  },
  {
    name: "Bún Đậu Homemade",
    type: "Bún đậu",
    location: "Nguyễn Gia Trí, Bình Thạnh, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bún+Đậu+Homemade+Saigon",
    notes: "Không gian hoài cổ, đậu hũ tự làm nóng hổi, giòn tan.",
    mealTimes: ["Trưa", "Tối"]
  },
  {
    name: "Bún Đậu Lâm Bơ",
    type: "Bún đậu",
    location: "Nguyễn Trãi, Quận 1, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bún+Đậu+Lâm+Bơ+Saigon",
    notes: "Mẹt bún đậu đầy đủ với dồi sụn và chả cốm rất ngon.",
    mealTimes: ["Trưa", "Tối"]
  },
  {
    name: "Bún Đậu Kim Liên",
    type: "Bún đậu",
    location: "Hòa Hưng, Quận 10, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bún+Đậu+Kim+Liên+Saigon",
    notes: "Quán nhỏ nhưng chất lượng, nem chua rán đặc sắc.",
    mealTimes: ["Trưa", "Tối"]
  },
  {
    name: "Bún Đậu Phố Cổ",
    type: "Bún đậu",
    location: "Phan Xích Long, Phú Nhuận, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bún+Đậu+Phố+Cổ+Saigon",
    notes: "Vị mắm tôm nguyên bản, đậu hũ chiên bơ thơm lừng.",
    mealTimes: ["Trưa", "Tối"]
  },
  {
    name: "Bún Đậu Ngõ",
    type: "Bún đậu",
    location: "Cống Quỳnh, Quận 1, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bún+Đậu+Ngõ+Saigon",
    notes: "Ẩm mình trong hẻm, mang lại cảm giác ăn bún đậu đúng chất vỉa hè Hà Nội.",
    mealTimes: ["Trưa", "Tối"]
  },
  {
    name: "Bún Đậu 46",
    type: "Bún đậu",
    location: "Cao Thắng, Quận 3, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bún+Đậu+46+Saigon",
    notes: "Thịt chân giò luộc thái lát mỏng, ngọt thịt và giòn bì.",
    mealTimes: ["Trưa", "Tối"]
  },
  {
    name: "Bún Đậu Hà Nội Phố",
    type: "Bún đậu",
    location: "Lê Văn Sỹ, Quận 3, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bún+Đậu+Hà+Nội+Phố+Saigon",
    notes: "Phục vụ thân thiện, trà quất tại đây rất ngon và thanh mát.",
    mealTimes: ["Trưa", "Tối"]
  },

  // --- HẢI SẢN (10) ---
  {
    name: "Hải Sản Rạn Biển",
    type: "Hải sản",
    location: "25 Kỳ Đồng, Quận 3, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Hải+Sản+Rạn+Biển+Kỳ+Đồng",
    notes: "Nhà hàng hải sản tươi sống cao cấp, phù hợp đãi tiệc và gia đình.",
    mealTimes: ["Trưa", "Tối"]
  },
  {
    name: "Hải Sản Ngọc Sương",
    type: "Hải sản",
    location: "106 Sương Nguyệt Ánh, Quận 1, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Hải+Sản+Ngọc+Sương+Sương+Nguyệt+Ánh",
    notes: "Thương hiệu lâu đời, gỏi cá Mai là món đặc sản không thể bỏ qua.",
    mealTimes: ["Trưa", "Tối"]
  },
  {
    name: "Hải Sản Giang Ghẹ",
    type: "Hải sản",
    location: "680 Trường Chinh, Tân Bình, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Hải+Sản+Giang+Ghẹ",
    notes: "Ghẹ tươi sống bắt tại hồ, chế biến đa dạng món hấp dẫn.",
    mealTimes: ["Trưa", "Tối"]
  },
  {
    name: "Hải Sản Thành Long",
    type: "Hải sản",
    location: "Quốc lộ 13, Bình Thạnh, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Hải+Sản+Thành+Long+Saigon",
    notes: "Nhà hàng hải sản sân vườn thoáng đãng, lẩu cá đuối rất ngon.",
    mealTimes: ["Trưa", "Tối"]
  },
  {
    name: "Hải Sản 6C Cửa Bắc",
    type: "Hải sản",
    location: "Tú Xương, Quận 3, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Hải+Sản+6C+Cửa+Bắc+Saigon",
    notes: "Nổi tiếng với các món hào né và sò huyết trung hoa.",
    mealTimes: ["Chiều", "Tối"]
  },
  {
    name: "Hải Sản Dìn Ký",
    type: "Hải sản",
    location: "137C Nguyễn Trãi, Quận 1, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Hải+Sản+Dìn+Ký+Nguyễn+Trãi",
    notes: "Mở cửa 24/7, phục vụ nhiều món hải sản và cơm gia đình.",
    mealTimes: ["Sáng", "Trưa", "Tối", "Khuya"]
  },
  {
    name: "Hải Sản Biển Đông",
    type: "Hải sản",
    location: "Trần Quốc Thảo, Quận 3, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Hải+Sản+Biển+Đông+Saigon",
    notes: "Ngon bổ rẻ, phù hợp cho nhóm bạn nhậu lai rai.",
    mealTimes: ["Chiều", "Tối", "Khuya"]
  },
  {
    name: "Hải Sản Cua 1 Càng",
    type: "Hải sản",
    location: "Lê Quý Đôn, Quận 3, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Cua+1+Càng+Saigon",
    notes: "Chuyên các món về Cua Cà Mau, giá cả niêm yết rõ ràng.",
    mealTimes: ["Trưa", "Tối"]
  },
  {
    name: "Hải Sản Windy",
    type: "Hải sản",
    location: "Vĩnh Khánh, Quận 4, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Hải+Sản+Windy+Quận+4",
    notes: "Tôm hùm đất sốt cajun cực kỳ đậm đà và cay nồng.",
    mealTimes: ["Chiều", "Tối", "Khuya"]
  },
  {
    name: "Hải Sản Thủy",
    type: "Hải sản",
    location: "Phạm Văn Đồng, Gò Vấp, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Hải+Sản+Thủy+Gò+Vấp",
    notes: "Ốc và hải sản bình dân, tôm nướng muối ớt là món đỉnh.",
    mealTimes: ["Chiều", "Tối", "Khuya"]
  },

  // --- ỐC (10) ---
  {
    name: "Ốc Đào",
    type: "Ốc",
    location: "212B/C79 Nguyễn Trãi, Quận 1, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Ốc+Đào+Nguyễn+Trãi+Saigon",
    notes: "Thiên đường ốc với đủ loại cách chế biến đậm đà, vị mặn ngọt hài hòa.",
    mealTimes: ["Trưa", "Chiều", "Tối"]
  },
  {
    name: "Ốc Quang Anh",
    type: "Ốc",
    location: "189 Tô Hiến Thành, Quận 10, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Ốc+Quang+Anh+Tô+Hiến+Thành",
    notes: "Quán ốc bình dân nhưng cực kỳ tươi ngon và đông khách, phục vụ nhiệt tình.",
    mealTimes: ["Chiều", "Tối", "Khuya"]
  },
  {
    name: "Ốc Oanh",
    type: "Ốc",
    location: "534 Vĩnh Khánh, Quận 4, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Ốc+Oanh+Vĩnh+Khánh",
    notes: "Nằm trên phố ẩm thực Vĩnh Khánh, nổi tiếng với món càng ghẹ rang muối ớt.",
    mealTimes: ["Chiều", "Tối", "Khuya"]
  },
  {
    name: "Ốc Thảo",
    type: "Ốc",
    location: "Hoàng Diệu, Quận 4, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Ốc+Thảo+Quận+4",
    notes: "Quán ốc trong hẻm nhưng quy mô rất lớn, món ốc hương xào bắp bơ rất ngon.",
    mealTimes: ["Chiều", "Tối"]
  },
  {
    name: "Ốc Như",
    type: "Ốc",
    location: "650/4/29 Điện Biên Phủ, Quận 10, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Ốc+Như+Saigon",
    notes: "Quán chỉ bán buổi trưa đến chiều, nổi tiếng vì độ tươi và gia vị thấm.",
    mealTimes: ["Trưa", "Chiều"]
  },
  {
    name: "Ốc Tuyết",
    type: "Ốc",
    location: "Hẻm 256 Dương Bá Trạc, Quận 8, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Ốc+Tuyết+Quận+8",
    notes: "Giá cực rẻ nhưng chất lượng không hề thua kém các quán trung tâm.",
    mealTimes: ["Chiều", "Tối"]
  },
  {
    name: "Ốc Khánh",
    type: "Ốc",
    location: "Hẻm 25 Nguyễn Bỉnh Khiêm, Quận 1, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Ốc+Khánh+Saigon",
    notes: "Quán ốc của diễn viên Lê Khánh, không gian tinh tế và món ăn đậm đà.",
    mealTimes: ["Trưa", "Chiều", "Tối"]
  },
  {
    name: "Ốc Nhớ Sài Gòn",
    type: "Ốc",
    location: "181 Nguyễn Thị Đặng, Quận 12, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Ốc+Nhớ+Saigon",
    notes: "Nổi tiếng với món ốc len xào dừa béo ngậy và ốc tỏi nướng mỡ hành.",
    mealTimes: ["Chiều", "Tối", "Khuya"]
  },
  {
    name: "Ốc Linh",
    type: "Ốc",
    location: "Quỳnh Văn Bánh, Phú Nhuận, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Ốc+Linh+Saigon",
    notes: "Ốc móng tay xào rau muống và nghêu hấp sả là hai món 'best-seller'.",
    mealTimes: ["Chiều", "Tối"]
  },
  {
    name: "Ốc Hòa",
    type: "Ốc",
    location: "Trần Huy Liệu, Phú Nhuận, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Ốc+Hòa+Trần+Huy+Liệu",
    notes: "Quán ốc lâu đời, vị truyền thống Sài Gòn, rất đậm đà.",
    mealTimes: ["Chiều", "Tối"]
  },

  // --- MÌ (10) ---
  {
    name: "Mì Vịt Tiềm Hải Ký",
    type: "Mì",
    location: "349 Nguyễn Trãi, Quận 5, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Mì+Vịt+Tiềm+Hải+Ký+Nguyễn+Trãi",
    notes: "Thịt vịt mềm tan, nước dùng đậm mùi thảo mộc, mì sợi nhỏ dai.",
    mealTimes: ["Chiều", "Tối", "Khuya"]
  },
  {
    name: "Sủi Cao Đại Lộ",
    type: "Mì",
    location: "191 Hà Tôn Quyền, Quận 11, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Sủi+Cao+Hà+Tôn+Quyền+Saigon",
    notes: "Khu sủi cảo sầm uất nhất Sài Gòn, món sủi cảo mực trứ danh.",
    mealTimes: ["Chiều", "Tối", "Khuya"]
  },
  {
    name: "Mì Cay Sasin Nguyễn Tri Phương",
    type: "Mì",
    location: "444 Nguyễn Tri Phương, Quận 10, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Mì+Cay+Sasin+Nguyễn+Tri+Phương+Saigon",
    notes: "Chuỗi mì cay 7 cấp độ được giới trẻ vô cùng ưa chuộng, topping đa dạng.",
    mealTimes: ["Trưa", "Tối", "Khuya"]
  },
  {
    name: "Mì Trộn Tên Lửa",
    type: "Mì",
    location: "Tên Lửa, Bình Tân, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Mì+Trộn+Tên+Lửa+Saigon",
    notes: "Mì trộn muối ớt kèm xá xíu và trứng chần béo ngậy.",
    mealTimes: ["Sáng", "Trưa", "Tối"]
  },
  {
    name: "Dim Tu Tac Đông Du",
    type: "Mì",
    location: "55 Đông Du, Quận 1, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Dim+Tu+Tac+Đông+Du+Saigon",
    notes: "Các món mì kéo tay và dimsum cao cấp chuẩn vị Hoa.",
    mealTimes: ["Trưa", "Tối"]
  },
  {
    name: "Mì Quảng Sâm",
    type: "Mì",
    location: "8 Ca Văn Thỉnh, Tân Bình, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Mì+Quảng+Sâm+Tân+Bình",
    notes: "Vị mì Quảng chuẩn miền Trung với gà ta thịt chắc và bánh đa giòn.",
    mealTimes: ["Sáng", "Trưa", "Tối"]
  },
  {
    name: "Mì Gà Cá Sanh Ký",
    type: "Mì",
    location: "Lương Nhữ Học, Quận 5, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Mì+Sanh+Ký+Quận+5",
    notes: "Quán mì lâu đời của người Hoa, nước dùng thanh ngọt tự nhiên.",
    mealTimes: ["Sáng", "Trưa"]
  },
  {
    name: "Mì Sủi Cao Thiên Thiên",
    type: "Mì",
    location: "Hà Tôn Quyền, Quận 11, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Sủi+Cao+Thiên+Thiên+Saigon",
    notes: "Đối thủ của Đại Lộ trên cùng phố, viên sủi cảo cực kỳ chất lượng.",
    mealTimes: ["Chiều", "Tối", "Khuya"]
  },
  {
    name: "Mì Khô Xá Xíu Hào Sỹ Phường",
    type: "Mì",
    location: "Trần Hưng Đạo, Quận 5, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Mì+Khô+Hào+Sỹ+Phường",
    notes: "Mì khô được trộn nước sốt bí truyền, xá xíu mềm thơm lừng.",
    mealTimes: ["Chiều", "Tối"]
  },
  {
    name: "Hoàng Gia Mì Trộn",
    type: "Mì",
    location: "Nguyễn Gia Trí, Bình Thạnh, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Hoàng+Gia+Mì+Trộn+Saigon",
    notes: "Mì trộn hiện đại với sốt phô mai và thịt nướng rất lạ miệng.",
    mealTimes: ["Trưa", "Tối"]
  },

  // --- HỦ TIẾU (10) ---
  {
    name: "Hủ Tiếu Nam Vang Thành Đạt",
    type: "Hủ tiếu",
    location: "34 Cô Bắc, Quận 1, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Hủ+Tiếu+Thành+Đạt+Cô+Bắc",
    notes: "Tô hủ tiếu đầy đặn với tôm, trứng cút và thịt xá xíu, phục vụ 24/7.",
    mealTimes: ["Sáng", "Trưa", "Tối", "Khuya"]
  },
  {
    name: "Hủ Tiếu Thanh Xuân",
    type: "Hủ tiếu",
    location: "62 Tôn Thất Thiệp, Quận 1, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Hủ+Tiếu+Thanh+Xuân+Tôn+Thất+Thiệp",
    notes: "Hủ tiếu khô với nước sốt cua đặc trưng cực kỳ nổi tiếng hơn 70 năm.",
    mealTimes: ["Sáng", "Trưa"]
  },
  {
    name: "Hủ Tiếu Nam Vang Nhân Quán",
    type: "Hủ tiếu",
    location: "122D Cách Mạng Tháng 8, Quận 3, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Hủ+Tiếu+Nhân+Quán+Saigon",
    notes: "Chuỗi hủ tiếu nổi tiếng, không gian sạch sẽ, phục vụ chu đáo.",
    mealTimes: ["Sáng", "Trưa", "Tối", "Khuya"]
  },
  {
    name: "Hủ Tiếu Cá Nam Lợi",
    type: "Hủ tiếu",
    location: "43 Nguyễn Công Trứ, Quận 1, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Hủ+Tiếu+Cá+Nam+Lợi+Saigon",
    notes: "Đặc sản hủ tiếu cá kiểu Hoa, lát cá lóc tươi ngon, nước lèo ngọt thanh.",
    mealTimes: ["Sáng", "Trưa"]
  },
  {
    name: "Hủ Tiếu Mỹ Tho Thanh Tâm",
    type: "Hủ tiếu",
    location: "Trần Hưng Đạo, Quận 5, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Hủ+Tiếu+Mỹ+Tho+Thanh+Tâm",
    notes: "Sợi hủ tiếu Mỹ Tho dai giòn đặc trưng, nước lèo tôm khô rất thơm.",
    mealTimes: ["Sáng", "Trưa", "Tối"]
  },
  {
    name: "Hủ Tiếu Mực Ông Già",
    type: "Hủ tiếu",
    location: "Phan Xích Long, Phú Nhuận, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Hủ+Tiếu+Mực+Ông+Già",
    notes: "Mực tươi rói, nước lèo ngọt lịm từ mực khô nướng.",
    mealTimes: ["Sáng", "Trưa", "Tối"]
  },
  {
    name: "Hủ Tiếu Gõ Hẻm 153",
    type: "Hủ tiếu",
    location: "Hẻm 153 Nguyễn Thượng Hiền, Quận 3, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Hủ+Tiếu+Gõ+Hẻm+153",
    notes: "Trải nghiệm hủ tiếu gõ đúng chất Sài Gòn xưa.",
    mealTimes: ["Tối", "Khuya"]
  },
  {
    name: "Hủ Tiếu Sa Đéc Cô Giang",
    type: "Hủ tiếu",
    location: "Cô Giang, Quận 1, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Hủ+Tiếu+Sa+Đéc+Cô+Giang",
    notes: "Sợi bánh hủ tiếu Sa Đéc to và dai, nước sốt trộn tuyệt phẩm.",
    mealTimes: ["Sáng", "Trưa"]
  },
  {
    name: "Hủ Tiếu Bò Kho Gánh",
    type: "Hủ tiếu",
    location: "Ngô Đức Kế, Quận 1, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Hủ+Tiếu+Bò+Kho+Gánh",
    notes: "Bò kho đậm đà, thịt bò mềm với gân giòn sần sật.",
    mealTimes: ["Sáng", "Trưa", "Tối"]
  },
  {
    name: "Hủ Tiếu Nam Vang Đạt Thành",
    type: "Hủ tiếu",
    location: "Võ Văn Tần, Quận 3, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Hủ+Tiếu+Đạt+Thành+Võ+Văn+Tần",
    notes: "Giá cả hợp lý, món ăn được trình bày đẹp mắt và sạch sẽ.",
    mealTimes: ["Sáng", "Trưa", "Tối"]
  },

  // --- ĐỒ NƯỚNG (10) ---
  {
    name: "Nướng Ngói Phan Xích Long",
    type: "Đồ nướng",
    location: "21 Phan Xích Long, Phú Nhuận, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Nướng+Ngói+Phan+Xích+Long",
    notes: "Trải nghiệm nướng trên ngói gạch đỏ độc đáo, gia vị đậm đà, thịt tươi.",
    mealTimes: ["Chiều", "Tối"]
  },
  {
    name: "Gyu-Kaku Japanese BBQ",
    type: "Đồ nướng",
    location: "254 Điện Biên Phủ, Quận 3, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Gyu+Kaku+Điện+Biên+Phủ",
    notes: "Nướng kiểu Nhật Bản cao cấp, thịt bò nhập khẩu chất lượng tuyệt vời.",
    mealTimes: ["Trưa", "Tối"]
  },
  {
    name: "Nem Nướng Bé Thảo",
    type: "Đồ nướng",
    location: "123 Phan Xích Long, Phú Nhuận, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Nem+Nướng+Bé+Thảo+Phan+Xích+Long",
    notes: "Đặc sản nem nướng Nha Trang thơm ngon tại Sài Gòn, nước chấm kẹo dẻo.",
    mealTimes: ["Trưa", "Chiều", "Tối"]
  },
  {
    name: "Bò Tơ Tây Ninh Năm Sánh",
    type: "Đồ nướng",
    location: "Phạm Hùng, Quận 8, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bò+Tơ+Năm+Sánh+Saigon",
    notes: "Thịt bò tơ ngọt, mềm, nướng cùng mắm tôm chuẩn vị Tây Ninh.",
    mealTimes: ["Trưa", "Tối"]
  },
  {
    name: "Vú Heo Nướng Vĩnh Khánh",
    type: "Đồ nướng",
    location: "Vĩnh Khánh, Quận 4, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Vú+Heo+Nướng+Vĩnh+Khánh",
    notes: "Món nhậu 'quốc dân' tại Quận 4, giòn sần sật và béo ngậy.",
    mealTimes: ["Tối", "Khuya"]
  },
  {
    name: "Làng Nướng Nam Bộ",
    type: "Đồ nướng",
    location: "19B Cách Mạng Tháng 8, Quận 10, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Làng+Nướng+Nam+Bộ+Lý+Thái+Tổ",
    notes: "Phù hợp tiệc gia đình, đông người, không gian mở thoáng đãng.",
    mealTimes: ["Trưa", "Tối"]
  },
  {
    name: "King BBQ Buffet",
    type: "Đồ nướng",
    location: "Vincom Center, Quận 1, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=King+BBQ+Saigon",
    notes: "Nướng chuẩn vị Hàn Quốc với nước sốt King đặc trưng.",
    mealTimes: ["Trưa", "Tối"]
  },
  {
    name: "Bò Né Lệ Hồng",
    type: "Đồ nướng",
    location: "489/27/29 Huỳnh Văn Bánh, Phú Nhuận, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bò+Né+Lệ+Hồng+Phú+Nhuận",
    notes: "Món bò nướng trên chảo gang nóng hổi cùng trứng và pate cực béo.",
    mealTimes: ["Chiều", "Tối"]
  },
  {
    name: "Nướng BBQ Chili",
    type: "Đồ nướng",
    location: "Vĩnh Khánh, Quận 4, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Chili+BBQ+Quận+4",
    notes: "Nướng xiên que tự chọn, giá cả bình dân, không khí náo nhiệt.",
    mealTimes: ["Chiều", "Tối", "Khuya"]
  },
  {
    name: "Seoul Garden",
    type: "Đồ nướng",
    location: "Nam Kỳ Khởi Nghĩa, Quận 3, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Seoul+Garden+Saigon",
    notes: "Buffet nướng và lẩu không khói, đa dạng món ăn kèm.",
    mealTimes: ["Trưa", "Tối"]
  },

  // --- NƯỚC & CAFE (10) ---
  {
    name: "Cà Phê Vợt Phan Đình Phùng",
    type: "Nước & Cafe",
    location: "330 Phan Đình Phùng, Phú Nhuận, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Cafe+Vợt+Phan+Đình+Phùng",
    notes: "Quán cafe vợt mở 24/7 suốt hơn 60 năm qua, một biểu tượng của Sài Gòn.",
    mealTimes: ["Sáng", "Trưa", "Tối", "Khuya"]
  },
  {
    name: "The Workshop Coffee",
    type: "Nước & Cafe",
    location: "27 Ngô Đức Kế, Quận 1, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=The+Workshop+Coffee+Saigon",
    notes: "Thiên đường cho những người mê Specialty Coffee, không gian yên tĩnh làm việc.",
    mealTimes: ["Sáng", "Trưa", "Chiều"]
  },
  {
    name: "An Miên Coffee",
    type: "Nước & Cafe",
    location: "190 Nguyễn Trãi, Quận 1, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=An+Miên+Coffee+Saigon",
    notes: "Không gian xanh mát, cafe rang xay thơm nồng, giá cả vừa phải.",
    mealTimes: ["Sáng", "Trưa", "Chiều", "Tối"]
  },
  {
    name: "Trà Đào Chiêu",
    type: "Nước & Cafe",
    location: "12 Vĩnh Khánh, Quận 4, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Trà+Đào+Chiêu+Quận+4",
    notes: "Món trà đào huyền thoại thu hút giới trẻ Sài Gòn mỗi tối.",
    mealTimes: ["Chiều", "Tối", "Khuya"]
  },
  {
    name: "Cong Caphe",
    type: "Nước & Cafe",
    location: "Lý Tự Trọng, Quận 1, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Cộng+Cà+Phê+Lý+Tự+Trọng",
    notes: "Cốt dừa cà phê là linh hồn của quán, không gian phong cách bao cấp.",
    mealTimes: ["Sáng", "Trưa", "Tối"]
  },
  {
    name: "L'Usine",
    type: "Nước & Cafe",
    location: "151/5 Đồng Khởi, Quận 1, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=LUsine+Đồng+Khởi",
    notes: "Phong cách Pháp hiện đại, kết hợp shop thời trang và đồ gia dụng.",
    mealTimes: ["Sáng", "Trưa", "Tối"]
  },
  {
    name: "Cà Phê Vy",
    type: "Nước & Cafe",
    location: "Lê Thánh Tôn, Quận 1, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Cafe+Vy+Saigon",
    notes: "Quán cafe 'ngắm phố' sầm uất nhất Sài Gòn, ngồi bệt vỉa hè.",
    mealTimes: ["Sáng", "Chiều", "Tối"]
  },
  {
    name: "Phúc Long Coffee & Tea",
    type: "Nước & Cafe",
    location: "Hồ Tùng Mậu, Quận 1, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Phúc+Long+Hồ+Tùng+Mậu",
    notes: "Trà sữa và trà đào đậm vị trà, luôn đông đúc xếp hàng.",
    mealTimes: ["Sáng", "Trưa", "Tối"]
  },
  {
    name: "Nest by AIA",
    type: "Nước & Cafe",
    location: "Bitexco Building, Quận 1, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Nest+by+AIA+Saigon",
    notes: "Không gian sang trọng, view thành phố, lý tưởng để họp đối tác.",
    mealTimes: ["Sáng", "Trưa", "Chiều"]
  },
  {
    name: "Cà Phê Ba Lù",
    type: "Nước & Cafe",
    location: "Chợ Phùng Hưng, Quận 5, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Cafe+Ba+Lù+Chợ+Phùng+Hưng",
    notes: "Cà phê bơ rang muối cổ truyền trong lòng chợ người Hoa độc đáo.",
    mealTimes: ["Sáng", "Trưa"]
  },

  // --- CHÈ (10) ---
  {
    name: "Chè Thái Ý Phương",
    type: "Chè",
    location: "380 Nguyễn Tri Phương, Quận 10, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Chè+Thái+Ý+Phương+Saigon",
    notes: "Món chè Thái sầu riêng 'quốc dân' của người Sài Sòn, cực kỳ đông khách.",
    mealTimes: ["Trưa", "Chiều", "Tối", "Khuya"]
  },
  {
    name: "Chè Hiển Khánh",
    type: "Chè",
    location: "718 Nguyễn Đình Chiểu, Quận 3, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Chè+Hiển+Khánh+Nguyễn+Đình+Chiểu",
    notes: "Chè thạch trắng hương hoa lài thanh tao, không gian cổ kính như phim xưa.",
    mealTimes: ["Trưa", "Chiều"]
  },
  {
    name: "Chè Hà Trâm",
    type: "Chè",
    location: "Chợ Tân Định, Quận 1, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Chè+Hà+Trâm+Chợ+Tân+Định",
    notes: "Quán chè trong chợ nhưng cực nổi tiếng với món chè hột gà trà.",
    mealTimes: ["Chiều", "Tối"]
  },
  {
    name: "Chè Kỳ Đồng",
    type: "Chè",
    location: "16C Kỳ Đồng, Quận 3, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Chè+Kỳ+Đồng+Saigon",
    notes: "Tiệm chè hơn 30 năm, món chè thập cẩm và bánh flan rất ngon.",
    mealTimes: ["Trưa", "Chiều", "Tối"]
  },
  {
    name: "Chè Thanh Tâm",
    type: "Chè",
    location: "Bùi Hữu Nghĩa, Quận 5, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Chè+Thanh+Tâm+Quận+5",
    notes: "Chè người Hoa đa dạng: khúc bạch, cao quy linh và đậu đen.",
    mealTimes: ["Chiều", "Tối", "Khuya"]
  },
  {
    name: "Chè Campuchia Cô Huôi",
    type: "Chè",
    location: "Chợ Lê Hồng Phong, Quận 10, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Chè+Campuchia+Cô+Huôi",
    notes: "Lạ miệng với món chè bí chưng và chè hạt me đặc trưng.",
    mealTimes: ["Trưa", "Chiều"]
  },
  {
    name: "Chè Tàu Hà Ký",
    type: "Chè",
    location: "138 Châu Văn Liêm, Quận 5, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Chè+Hà+Ký+Saigon",
    notes: "Đỉnh cao chè người Hoa, món đu đủ tiềm và tuyết giáp rất bổ dưỡng.",
    mealTimes: ["Chiều", "Tối", "Khuya"]
  },
  {
    name: "Chè Mỹ",
    type: "Chè",
    location: "Nguyễn Tri Phương, Quận 10, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Chè+Mỹ+Nguyễn+Tri+Phương",
    notes: "Món chè củ năng và chè khoai môn rất được lòng thực khách.",
    mealTimes: ["Trưa", "Chiều", "Tối"]
  },
  {
    name: "Chè Bưởi Vĩnh Viễn",
    type: "Chè",
    location: "216 Vĩnh Viễn, Quận 10, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Chè+Bưởi+Vĩnh+Viễn",
    notes: "Bưởi giòn sần sật, cốt dừa béo đặc, ăn hoài không ngán.",
    mealTimes: ["Chiều", "Tối"]
  },
  {
    name: "Bánh Flan Chợ 200",
    type: "Chè",
    location: "Chợ 200, Quận 4, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bánh+Flan+Chợ+200",
    notes: "Quán sầm uất với hàng chục loại flan: trà xanh, socola, truyền thống.",
    mealTimes: ["Chiều", "Tối", "Khuya"]
  },

  // --- BÁNH XÈO (10) ---
  {
    name: "Bánh Xèo Mười Xiềm",
    type: "Bánh xèo",
    location: "190 Nam Kỳ Khởi Nghĩa, Quận 3, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bánh+Xèo+Mười+Xiềm+Quận+3",
    notes: "Bánh xèo khổng lồ với nhân tôm thịt chuẩn miền Tây nức tiếng gần xa.",
    mealTimes: ["Trưa", "Chiều", "Tối"]
  },
  {
    name: "Bánh Xèo 46A Đinh Công Tráng",
    type: "Bánh xèo",
    location: "46A Đinh Công Tráng, Quận 1, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bánh+Xèo+46A+Đinh+Công+Tráng",
    notes: "Quán bánh xèo huyền thoại, khách nước ngoài cực kỳ yêu thích, đổ bánh nhanh.",
    mealTimes: ["Trưa", "Chiều", "Tối"]
  },
  {
    name: "Bánh Xèo Ăn Là Nghiền",
    type: "Bánh xèo",
    location: "Tú Xương, Quận 3, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bánh+Xèo+Ăn+Là+Nghiền+Saigon",
    notes: "Cốt bánh mỏng, giòn tan, nước mắm pha rất vừa vị.",
    mealTimes: ["Trưa", "Chiều", "Tối"]
  },
  {
    name: "Bánh Xèo Ngọc Sơn",
    type: "Bánh xèo",
    location: "103 Ngô Quyền, Quận 5, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bánh+Xèo+Ngọc+Sơn+Quận+5",
    notes: "Quán bình dân nhưng luôn đông khách, bánh xèo nhân vịt cực lạ.",
    mealTimes: ["Chiều", "Tối"]
  },
  {
    name: "Bánh Xèo Long Huy",
    type: "Bánh xèo",
    location: "Điện Biên Phủ, Bình Thạnh, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bánh+Xèo+Long+Huy+Saigon",
    notes: "Bánh xèo miền Trung nhỏ gọn, ăn kèm rau rừng tươi mát.",
    mealTimes: ["Sáng", "Trưa", "Tối"]
  },
  {
    name: "Bánh Khọt Cô Ba Vũng Tàu",
    type: "Bánh xèo",
    location: "102 Cao Thắng, Quận 3, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bánh+Khọt+Cô+Ba+Vũng+Tàu+Saigon",
    notes: "Mang đặc sản bánh khọt Vũng Tàu về Sài Gòn với không gian sang trọng.",
    mealTimes: ["Sáng", "Trưa", "Tối"]
  },
  {
    name: "Bánh Xèo Bà Hai",
    type: "Bánh xèo",
    location: "Nguyễn Trọng Tuyển, Phú Nhuận, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bánh+Xèo+Bà+Hai+Saigon",
    notes: "Nổi tiếng với 12 loại nhân rau củ nấm dành cho người thích thanh đạm.",
    mealTimes: ["Chiều", "Tối"]
  },
  {
    name: "Bánh Khọt Đặng Dung",
    type: "Bánh xèo",
    location: "Đặng Dung, Quận 1, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bánh+Khọt+Đặng+Dung+Saigon",
    notes: "Bánh khọt tôm tươi, giòn rụm bên ngoài và mềm béo bên trong.",
    mealTimes: ["Trưa", "Chiều"]
  },
  {
    name: "Bánh Xèo Miền Tây Dì 5",
    type: "Bánh xèo",
    location: "Âu Cơ, Tân Bình, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bánh+Xèo+Dì+5+Tân+Bình",
    notes: "Giá sinh viên, ổ bánh to đầy ắp nhân giá đỗ và thịt heo sườn non.",
    mealTimes: ["Chiều", "Tối"]
  },
  {
    name: "Bánh Xèo Bình Thuận",
    type: "Bánh xèo",
    location: "Phan Xích Long, Phú Nhuận, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bánh+Xèo+Bình+Thuận+Saigon",
    notes: "Bánh xèo đổ bằng khuôn đất, không dầu mỡ, ăn cùng nước mắm đậu phộng.",
    mealTimes: ["Trưa", "Chiều", "Tối"]
  },

  // --- KHÁC (10) ---
  {
    name: "Pizza 4P's Bến Thành",
    type: "Khác",
    location: "8 Thủ Khoa Huân, Quận 1, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Pizza+4Ps+Bến+Thành",
    notes: "Món mỳ Ý cua và pizza phô mai tươi trứ danh, cần đặt chỗ trước.",
    mealTimes: ["Trưa", "Tối"]
  },
  {
    name: "Cơm Gà Xối Mỡ Lão Hương Thân",
    type: "Khác",
    location: "402 Trần Phú, Quận 5, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Cơm+Gà+Xối+Mỡ+Lão+Hương+Thân",
    notes: "Đùi gà chiên giòn rụm, cơm chiên tơi ngon mắt, nổi tiếng khu Chợ Lớn.",
    mealTimes: ["Trưa", "Tối", "Khuya"]
  },
  {
    name: "Cháo Ếch Geylang",
    type: "Khác",
    location: "35 Đông Du, Quận 1, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Cháo+Ếch+Geylang+Saigon",
    notes: "Ếch kho niêu đất đậm đà, ăn cùng cháo trắng nóng hổi chuẩn Singapore.",
    mealTimes: ["Trưa", "Tối", "Khuya"]
  },
  {
    name: "Bún Quậy Kiến Xây Sài Gòn",
    type: "Khác",
    location: "402 Điện Biên Phủ, Bình Thạnh, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bún+Quậy+Kiến+Xây+Saigon",
    notes: "Mang đặc sản bún quậy Phú Quốc về tận Sài Gòn với nước chấm tự pha.",
    mealTimes: ["Sáng", "Trưa", "Tối", "Khuya"]
  },
  {
    name: "Bún Chả Cá Đà Nẵng",
    type: "Khác",
    location: "Lê Văn Sỹ, Quận 3, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bún+Chả+Cá+Đà+Nẵng+Saigon",
    notes: "Vị nước dùng bí đỏ và dứa thơm ngọt kiểu miền Trung.",
    mealTimes: ["Sáng", "Trưa", "Tối"]
  },
  {
    name: "Gỏi Khô Bò Công Viên Lê Văn Tám",
    type: "Khác",
    location: "Vỉa hè Võ Thị Sáu, Quận 3, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Gỏi+Khô+Bò+Lê+Văn+Tám",
    notes: "Món ăn vặt vỉa hè huyền thoại, ngồi ghế súp ngắm phố phường.",
    mealTimes: ["Trưa", "Chiều"]
  },
  {
    name: "Cơm Lam Gà Nướng Tây Nguyên",
    type: "Khác",
    location: "Phan Xích Long, Phú Nhuận, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Cơm+Lam+Gà+Nướng+Saigon",
    notes: "Thưởng thức hương vị núi rừng giữa lòng Sài Gòn.",
    mealTimes: ["Trưa", "Tối"]
  },
  {
    name: "Sushi Tei",
    type: "Khác",
    location: "Lý Tự Trọng, Quận 1, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Sushi+Tei+Saigon",
    notes: "Nhà hàng Nhật Bản cao cấp với menu cực kỳ đa dạng.",
    mealTimes: ["Trưa", "Tối"]
  },
  {
    name: "Mì Ý Pasta Paradise",
    type: "Khác",
    location: "Nguyễn Đình Chiểu, Quận 3, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Pasta+Paradise+Saigon",
    notes: "Thiên đường mì Ý với hàng chục loại sốt tự chọn.",
    mealTimes: ["Trưa", "Tối"]
  },
  {
    name: "Bánh Canh Cua Út Lệ",
    type: "Khác",
    location: "204 Tô Hiến Thành, Quận 10, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bánh+Canh+Cua+Út+Lệ",
    notes: "Nước dùng sệt béo, cua tươi chắc thịt, luôn đông kín chỗ.",
    mealTimes: ["Chiều", "Tối"]
  },
  {
    name: "Phá Lấu Bò Cô Thảo",
    type: "Khác",
    location: "243/29G Tôn Đản, Quận 4, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Phá+Lấu+Cô+Thảo+Tôn+Đản",
    notes: "Chén phá lấu thơm mùi nước cốt dừa, ăn kèm bánh mì giòn rụm.",
    mealTimes: ["Chiều", "Tối"]
  }
];
