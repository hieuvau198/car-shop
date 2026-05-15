import React from 'react';

// --- MOCK DATA (Dữ liệu giả lập thay cho Database) ---
const bestSellers = [
  { id: 1, name: 'RX 350 Premium', price: 'Từ 3.430.000.000 VNĐ', img: 'https://www.lexus.com.vn/content/dam/lexus-v3-blueprint/models/suv/rx/rx-350/my23/exterior/base/tala15l-awzgt/background-thumbnails/bg02/21hi2/my23-rx-base-bg02-21hi2-223-graphite-black-glass-flake.png' },
  { id: 2, name: 'ES 250 F SPORT', price: 'Từ 2.710.000.000 VNĐ', img: 'https://images.unsplash.com/photo-1619682817481-e994891cd1f5?auto=format&fit=crop&q=80&w=800' },
  { id: 3, name: 'LX 600 VIP', price: 'Từ 9.610.000.000 VNĐ', img: 'https://xedoisong.vn/uploads/20221031/xedoisong_lexus_lx_600_vip_tai_vms_2022_1_nexx.jpg' },
];

const newProducts = [
  { id: 4, name: 'GX 550 Luxury', price: 'Từ 6.200.000.000 VNĐ', img: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800' },
  { id: 5, name: 'LM 500h', price: 'Từ 7.290.000.000 VNĐ', img: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800' },
];

export default function App() {
  return (
    <div className="bg-[#f8f9fa] text-gray-900 font-sans min-h-screen">
      
      {/* 1. HERO SECTION (Trang bìa) */}
      <section className="relative w-full h-screen">
        {/* Ảnh nền */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=1920')" }}
        >
          {/* Lớp phủ màu đen để làm nổi bật chữ */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Navbar (Thanh điều hướng trong suốt) */}
        <nav className="absolute top-0 w-full z-50 px-8 py-6 flex justify-between items-center text-white bg-gradient-to-b from-black/80 to-transparent text-sm tracking-wide">
          <div className="text-2xl font-bold tracking-widest uppercase">CAR BRAND</div>
          <ul className="hidden md:flex gap-8">
            <li className="hover:text-gray-300 cursor-pointer transition">Mẫu xe</li>
            <li className="hover:text-gray-300 cursor-pointer transition">Điện hóa</li>
            <li className="hover:text-gray-300 cursor-pointer transition">Dịch vụ & Hỗ trợ</li>
            <li className="hover:text-gray-300 cursor-pointer transition">Khám phá</li>
          </ul>
        </nav>

        {/* Nội dung chữ ở giữa màn hình */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-light mb-4 tracking-wide">
            GX 550 Hoàn Toàn Mới
          </h1>
          <p className="text-lg md:text-xl font-light mb-10 tracking-wider">
            Đẳng cấp trên mọi địa hình
          </p>
          <button className="border border-white px-10 py-3 uppercase tracking-widest text-sm hover:bg-white hover:text-black transition duration-300">
            Tìm hiểu thêm
          </button>
        </div>
      </section>

      {/* 2. BEST SELLERS SECTION */}
      <section className="max-w-7xl mx-auto py-24 px-6">
        <h2 className="text-3xl font-light text-center mb-16 uppercase tracking-widest text-gray-800">
          Mẫu xe bán chạy
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {bestSellers.map((car) => (
            <div key={car.id} className="group cursor-pointer">
              <div className="overflow-hidden mb-6 aspect-[4/3] bg-gray-200">
                <img 
                  src={car.img} 
                  alt={car.name} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700 ease-in-out"
                />
              </div>
              <h3 className="text-xl font-medium mb-2">{car.name}</h3>
              <p className="text-gray-500 font-light mb-4">{car.price}</p>
              <button className="text-sm uppercase tracking-widest border-b border-black pb-1 hover:text-gray-500 hover:border-gray-500 transition">
                Khám phá
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 3. NEW PRODUCTS SECTION */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-light text-center mb-16 uppercase tracking-widest text-gray-800">
            Sản phẩm mới
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {newProducts.map((car) => (
              <div key={car.id} className="group cursor-pointer flex flex-col md:flex-row gap-6 items-center bg-gray-50/50 p-6 rounded-lg hover:shadow-lg transition duration-300">
                <div className="w-full md:w-1/2 overflow-hidden aspect-video bg-gray-200">
                  <img 
                    src={car.img} 
                    alt={car.name} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700 ease-in-out"
                  />
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                  <span className="text-xs text-red-700 font-bold tracking-widest uppercase mb-2">Mới ra mắt</span>
                  <h3 className="text-2xl font-medium mb-2">{car.name}</h3>
                  <p className="text-gray-500 font-light mb-6">{car.price}</p>
                  <button className="w-fit text-sm uppercase tracking-widest border border-black px-6 py-2 hover:bg-black hover:text-white transition">
                    Xem chi tiết
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MOTIVATION SECTION */}
      <section className="bg-[#111] text-white py-32 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase mb-8 text-gray-400">
            Triết lý của chúng tôi
          </h2>
          <p className="text-3xl md:text-5xl font-light leading-snug mb-12">
            "Kiến tạo trải nghiệm sang trọng tuyệt mỹ, khơi dậy mọi giác quan và vượt lên trên sự mong đợi."
          </p>
          <div className="w-24 h-[1px] bg-white mx-auto opacity-30"></div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-gray-400 text-sm py-12 text-center">
        <p>&copy; {new Date().getFullYear()} Bản quyền giao diện minh họa. Không sử dụng thương mại.</p>
      </footer>
    </div>
  );
}