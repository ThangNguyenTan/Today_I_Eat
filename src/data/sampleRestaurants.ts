import type { Restaurant } from '@/types';

export const SAMPLE_RESTAURANTS: Omit<Restaurant, 'id' | 'createdAt'>[] = [
  // --- PHỞ ---
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

  // --- CƠM ---
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

  // --- BÚN & MÌ ---
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
    name: "Hủ Tiếu Nam Vang Thành Đạt",
    type: "Hủ tiếu",
    location: "34 Cô Bắc, Quận 1, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Hủ+Tiếu+Thành+Đạt+Cô+Bắc",
    notes: "Tô hủ tiếu đầy đặn với tôm, trứng cút và thịt xá xíu.",
    mealTimes: ["Sáng", "Trưa", "Tối", "Khuya"]
  },
  {
    name: "Hủ Tiếu Thanh Xuân",
    type: "Hủ tiếu",
    location: "62 Tôn Thất Thiệp, Quận 1, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Hủ+Tiếu+Thanh+Xuân+Tôn+Thất+Thiệp",
    notes: "Hủ tiếu khô với nước sốt đặc trưng cực kỳ nổi tiếng.",
    mealTimes: ["Sáng", "Trưa"]
  },
  {
    name: "Mì Vịt Tiềm Hải Ký",
    type: "Mì",
    location: "349 Nguyễn Trãi, Quận 5, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Mì+Vịt+Tiềm+Hải+Ký+Nguyễn+Trãi",
    notes: "Thịt vịt mềm tan, nước dùng đậm mùi thảo mộc.",
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

  // --- BÚN ĐẬU & MÓN CUỐN ---
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
    notes: "Vị bún đậu chuẩn Hà Nội giữa lòng Sài Gòn.",
    mealTimes: ["Trưa", "Tối"]
  },
  {
    name: "Bánh Xèo Mười Xiềm",
    type: "Bánh xèo",
    location: "190 Nam Kỳ Khởi Nghĩa, Quận 3, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bánh+Xèo+Mười+Xiềm+Quận+3",
    notes: "Bánh xèo khổng lồ với nhân tôm thịt chuẩn miền Tây.",
    mealTimes: ["Trưa", "Chiều", "Tối"]
  },
  {
    name: "Bánh Xèo 46A",
    type: "Bánh xèo",
    location: "46A Đinh Công Tráng, Quận 1, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bánh+Xèo+46A+Đinh+Công+Tráng",
    notes: "Quán bánh xèo huyền thoại, khách nước ngoài rất yêu thích.",
    mealTimes: ["Trưa", "Chiều", "Tối"]
  },
  {
    name: "Bún Thịt Nướng Anh Ba",
    type: "Bún",
    location: "126 Lê Quý Đôn, Quận 3, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bún+Thịt+Nướng+Anh+Ba+Saigon",
    notes: "Tô bún to, thịt nướng thơm, nem nướng giòn rụm.",
    mealTimes: ["Sáng", "Trưa", "Tối"]
  },

  // --- HẢI SẢN & ỐC ---
  {
    name: "Ốc Đào",
    type: "Ốc",
    location: "212B/C79 Nguyễn Trãi, Quận 1, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Ốc+Đào+Nguyễn+Trãi+Saigon",
    notes: "Thiên đường ốc với đủ loại cách chế biến đậm đà.",
    mealTimes: ["Trưa", "Chiều", "Tối"]
  },
  {
    name: "Ốc Quang Anh",
    type: "Ốc",
    location: "189 Tô Hiến Thành, Quận 10, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Ốc+Quang+Anh+Tô+Hiến+Thành",
    notes: "Quán ốc bình dân nhưng cực kỳ tươi ngon và đông khách.",
    mealTimes: ["Chiều", "Tối", "Khuya"]
  },
  {
    name: "Lẩu Cua Đất Mũi",
    type: "Lẩu",
    location: "769 Quang Trung, Gò Vấp, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Lẩu+Cua+Đất+Mũi+Quang+Trung",
    notes: "Cua Cà Mau tươi rói, lẩu cua gạch cực kỳ chất lượng.",
    mealTimes: ["Trưa", "Tối"]
  },
  {
    name: "Hải Sản Rạn Biển",
    type: "Hải sản",
    location: "25 Kỳ Đồng, Quận 3, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Hải+Sản+Rạn+Biển+Kỳ+Đồng",
    notes: "Nhà hàng hải sản tươi sống cao cấp, phù hợp đãi tiệc.",
    mealTimes: ["Trưa", "Tối"]
  },
  {
    name: "Ốc Oanh",
    type: "Ốc",
    location: "534 Vĩnh Khánh, Quận 4, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Ốc+Oanh+Vĩnh+Khánh",
    notes: "Nằm trên phố ẩm thực Vĩnh Khánh, nổi tiếng với chân gà quái thú.",
    mealTimes: ["Chiều", "Tối", "Khuya"]
  },

  // --- LẨU & NƯỚNG ---
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
    name: "Nướng Ngói Phan Xích Long",
    type: "Đồ nướng",
    location: "21 Phan Xích Long, Phú Nhuận, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Nướng+Ngói+Phan+Xích+Long",
    notes: "Trải nghiệm nướng trên ngói gạch đỏ độc đáo, gia vị đậm đà.",
    mealTimes: ["Chiều", "Tối"]
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
    name: "Gyu-Kaku Japanese BBQ",
    type: "Đồ nướng",
    location: "254 Điện Biên Phủ, Quận 3, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Gyu+Kaku+Điện+Biên+Phủ",
    notes: "Nướng kiểu Nhật Bản cao cấp, thịt bò nhập khẩu.",
    mealTimes: ["Trưa", "Tối"]
  },

  // --- ĂN VẶT & MÓN NHẸ ---
  {
    name: "Bánh Mì Huỳnh Hoa",
    type: "Bánh mì",
    location: "26 Lê Thị Riêng, Quận 1, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bánh+Mì+Huỳnh+Hoa+Lê+Thị+Riêng",
    notes: "Ổ bánh mì full-topping nặng gần nửa ký, cực kỳ chất lượng.",
    mealTimes: ["Chiều", "Tối", "Khuya"]
  },
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
    notes: "Gà chiên giòn, nước sốt mặn ngọt bọc trong lá sen/lá chuối.",
    mealTimes: ["Chiều", "Tối", "Khuya"]
  },
  {
    name: "Chè Thái Ý Phương",
    type: "Chè",
    location: "380 Nguyễn Tri Phương, Quận 10, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Chè+Thái+Ý+Phương+Saigon",
    notes: "Món chè Thái sầu riêng 'quốc dân' của người Sài Gòn.",
    mealTimes: ["Trưa", "Chiều", "Tối", "Khuya"]
  },
  {
    name: "Bánh Mì Hòa Mã",
    type: "Bánh mì",
    location: "53 Cao Thắng, Quận 3, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bánh+Mì+Hòa+Mã+Saigon",
    notes: "Bánh mì chảo kiểu Pháp cổ điển, ngồi vỉa hè rất thú vị.",
    mealTimes: ["Sáng"]
  },

  // --- ĐỒ CHAY ---
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
    notes: "Phòng cách mộc mạc, món chay đậm đà vị Á Đông.",
    mealTimes: ["Trưa", "Tối"]
  },

  // --- NƯỚC & CAFE ---
  {
    name: "Cà Phê Vợt Phan Đình Phùng",
    type: "Nước & Cafe",
    location: "330 Phan Đình Phùng, Phú Nhuận, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Cafe+Vợt+Phan+Đình+Phùng",
    notes: "Quán cafe vợt mở 24/7 suốt hơn 60 năm qua.",
    mealTimes: ["Sáng", "Trưa", "Tối", "Khuya"]
  },
  {
    name: "The Workshop Coffee",
    type: "Nước & Cafe",
    location: "27 Ngô Đức Kế, Quận 1, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=The+Workshop+Coffee+Saigon",
    notes: "Thiên đường cho những người mê Specialty Coffee.",
    mealTimes: ["Sáng", "Trưa", "Chiều"]
  },
  {
    name: "An Miên Coffee",
    type: "Nước & Cafe",
    location: "190 Nguyễn Trãi, Quận 1, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=An+Miên+Coffee+Saigon",
    notes: "Không gian xanh mát, cafe rang xay thơm nồng.",
    mealTimes: ["Sáng", "Trưa", "Chiều", "Tối"]
  },
  {
    name: "Trà Đào Chiêu",
    type: "Nước & Cafe",
    location: "12 Vĩnh Khánh, Quận 4, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Trà+Đào+Chiêu+Quận+4",
    notes: "Món trà đào huyền thoại thu hút giới trẻ Sài Gòn.",
    mealTimes: ["Chiều", "Tối", "Khuya"]
  },

  // --- CÁC QUÁN ĂN NỔI TIẾNG KHÁC TẠI HCMC ---
  {
    name: "Pizza 4P's Bến Thành",
    type: "Khác",
    location: "8 Thủ Khoa Huân, Quận 1, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Pizza+4Ps+Bến+Thành",
    notes: "Món mỳ Ý cua và pizza phô mai tươi trứ danh.",
    mealTimes: ["Trưa", "Tối"]
  },
  {
    name: "Dim Tu Tac Đông Du",
    type: "Mì",
    location: "55 Đông Du, Quận 1, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Dim+Tu+Tac+Đông+Du+Saigon",
    notes: "Dimsum cao cấp, phục vụ chuyên nghiệp, chuẩn vị Hoa.",
    mealTimes: ["Trưa", "Tối"]
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
    name: "Hủ Tiếu Nam Vang Nhân Quán",
    type: "Hủ tiếu",
    location: "122D Cách Mạng Tháng 8, Quận 3, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Hủ+Tiếu+Nhân+Quán+Saigon",
    notes: "Chuỗi hủ tiếu nổi tiếng, phục vụ chu đáo, sạch sẽ.",
    mealTimes: ["Sáng", "Trưa", "Tối", "Khuya"]
  },
  {
    name: "Bánh Canh Cua Út Lệ",
    type: "Bún",
    location: "204 Tô Hiến Thành, Quận 10, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bánh+Canh+Cua+Út+Lệ+Tô+Hiến+Thành",
    notes: "Tô bánh canh sệt, nhiều gạch cua tươi và giò heo.",
    mealTimes: ["Chiều", "Tối"]
  },
  {
    name: "Cơm Gà Xối Mỡ Lão Hương Thân",
    type: "Cơm",
    location: "402 Trần Phú, Quận 5, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Cơm+Gà+Xối+Mỡ+Lão+Hương+Thân",
    notes: "Đùi gà chiên giòn rụm, cơm chiên tơi ngon mắt.",
    mealTimes: ["Trưa", "Tối", "Khuya"]
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
    name: "Bò Kho Út Hưng",
    type: "Bún",
    location: "154/7 Nguyễn Thiện Thuật, Quận 3, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bò+Kho+Út+Hưng+TP.HCM",
    notes: "Bò kho bánh mì đúng điệu Sài Gòn xưa.",
    mealTimes: ["Sáng", "Trưa", "Tối"]
  },
  {
    name: "Cháo Ếch Geylang",
    type: "Bún",
    location: "35 Đông Du, Quận 1, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Cháo+Ếch+Geylang+Saigon",
    notes: "Ếch kho niêu đất đậm đà, ăn cùng cháo trắng nóng hổi.",
    mealTimes: ["Trưa", "Tối", "Khuya"]
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
    name: "Mì Cay Sasin Nguyễn Tri Phương",
    type: "Mì",
    location: "444 Nguyễn Tri Phương, Quận 10, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Mì+Cay+Sasin+Nguyễn+Tri+Phương+Saigon",
    notes: "Chuỗi mì cay 7 cấp độ được giới trẻ vô cùng ưa chuộng.",
    mealTimes: ["Trưa", "Tối", "Khuya"]
  },
  {
    name: "Bún Quậy Kiến Xây Sài Gòn",
    type: "Bún",
    location: "402 Điện Biên Phủ, Bình Thạnh, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bún+Quậy+Kiến+Xây+Saigon",
    notes: "Mang đặc sản bún quậy Phú Quốc về tận Sài Gòn.",
    mealTimes: ["Sáng", "Trưa", "Tối", "Khuya"]
  },
  {
    name: "Bánh Cuốn Tây Hồ",
    type: "Bánh cuốn",
    location: "127 Đinh Tiên Hoàng, Quận 1, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bánh+Cuốn+Tây+Hồ+Đinh+Tiên+Hoàng",
    notes: "Quán bánh cuốn lâu đời, nhân thịt bằm mộc nhĩ rất thơm.",
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
    name: "Bánh Canh Ghẹ Muối Ớt Xanh Sài Gòn",
    type: "Bún",
    location: "484 Nguyễn Tri Phương, Quận 10, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bánh+Canh+Ghẹ+Muối+Ớt+Xanh+Saigon",
    notes: "Vị cay nồng của muối ớt xanh hòa quyện với thịt ghẹ tươi.",
    mealTimes: ["Trưa", "Tối"]
  },
  {
    name: "Phở Chua Lạng Sơn Sài Gòn",
    type: "Phở",
    location: "242/55 Nguyễn Thiện Thuật, Quận 3, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Phở+Chua+Nguyễn+Thiện+Thuật",
    notes: "Món phở chua lạ miệng với nhiều loại topping hấp dẫn.",
    mealTimes: ["Trưa", "Tối"]
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
    name: "Bánh Mì Ô Thao",
    type: "Bánh mì",
    location: "150/14 Nguyễn Trãi, Quận 1, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bánh+Mì+Ô+Thao+Nguyễn+Trãi",
    notes: "Bánh mì gà xé mặn ngọt cực kỳ bắt miệng.",
    mealTimes: ["Sáng", "Trưa", "Chiều", "Tối"]
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
    name: "Bún Chả 145 Bùi Viện",
    type: "Bún",
    location: "145 Bùi Viện, Quận 1, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bún+Chả+145+Bùi+Viện",
    notes: "Bún chả Hà Nội phục vụ theo phong cách hiện đại.",
    mealTimes: ["Trưa", "Tối"]
  },
  {
    name: "Lẩu Bê thui Cầu Mống Sài Gòn",
    type: "Lẩu",
    location: " Phan Văn Trị, Gò Vấp, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bê+thui+Cầu+Mống+Saigon",
    notes: "Thịt bê tái chanh cuốn bánh tráng rau rừng chuẩn vị miền Trung.",
    mealTimes: ["Chiều", "Tối"]
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
    name: "Gỏi Cuốn Hạnh",
    type: "Ăn vặt",
    location: "420 Hòa Hảo, Quận 10, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Gỏi+Cuốn+Hạnh+Hòa+Hảo",
    notes: "Gỏi cuốn tôm thịt to tròn, tương đen chấm kèm rất vừa vị.",
    mealTimes: ["Trưa", "Chiều", "Tối"]
  },
  {
    name: "Nem Nướng Bé Thảo",
    type: "Đồ nướng",
    location: "123 Phan Xích Long, Phú Nhuận, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Nem+Nướng+Bé+Thảo+Phan+Xích+Long",
    notes: "Đặc sản nem nướng Nha Trang thơm ngon tại Sài Gòn.",
    mealTimes: ["Trưa", "Chiều", "Tối"]
  },
  {
    name: "Bún Quậy Sài Gòn",
    type: "Bún",
    location: "311 Phan Xích Long, Phú Nhuận, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bún+Quậy+Saigon+Phan+Xích+Long",
    notes: "Nước dùng nóng tự pha mắm theo khẩu vị riêng.",
    mealTimes: ["Sáng", "Trưa", "Tối", "Khuya"]
  },
  {
    name: "Lẩu mắm Dạ Lý Sài Gòn",
    type: "Lẩu",
    location: " Cao Thắng, Quận 10, TP. HCM",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Lẩu+mắm+Dạ+Lý+Saigon",
    notes: "Hương vị lẩu mắm đậm đà, mang phong cách Cần Thơ.",
    mealTimes: ["Trưa", "Tối"]
  }
];
