"use client"
import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Search, 
  User, 
  Menu, 
  X, 
  ArrowRight, 
  Star, 
  Instagram, 
  Facebook, 
  Twitter,
  ChevronRight,
  Filter
} from 'lucide-react';

// Định nghĩa kiểu dữ liệu cho Sản phẩm
interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  tag: string;
}

const PRODUCTS: Product[] = [
  { id: 1, name: "Oversize T-Shirt White", price: 350000, category: "Áo", image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&q=80", tag: "New" },
  { id: 2, name: "Wide-Leg Cargo Pants", price: 590000, category: "Quần", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&q=80", tag: "Hot" },
  { id: 3, name: "Streetwear Hoodie Black", price: 750000, category: "Áo khoác", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80", tag: "" },
  { id: 4, name: "Denim Jacket Vintage", price: 890000, category: "Áo khoác", image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=800&q=80", tag: "Sale" },
  { id: 5, name: "Basic Beanie Grey", price: 150000, category: "Phụ kiện", image: "https://images.unsplash.com/photo-1576871333019-225dd976c41c?w=800&q=80", tag: "" },
  { id: 6, name: "Graphic Tee 'Vibe'", price: 390000, category: "Áo", image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&q=80", tag: "New" },
];

type TabType = 'home' | 'shop';

export default function App() {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product): void => {
    setCart([...cart, product]);
    setIsCartOpen(true);
  };

  const removeFromCart = (index: number): void => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  // Định dạng tiền tệ VNĐ
  const formatPrice = (price: number): string => {
    return (price / 1000).toFixed(3) + 'đ';
  };

  // Components
  const Navbar: React.FC = () => (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50 px-4 md:px-12 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          <button onClick={() => setIsMobileMenuOpen(true)} className="md:hidden">
            <Menu size={24} />
          </button>
          <div 
            onClick={() => setActiveTab('home')}
            className="text-2xl font-black tracking-tighter cursor-pointer"
          >
            YOUNG&VIBE
          </div>
          <ul className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-widest">
            <li onClick={() => setActiveTab('home')} className={`cursor-pointer transition-colors ${activeTab === 'home' ? 'text-black border-b-2 border-black' : 'text-gray-400 hover:text-black'}`}>Trang chủ</li>
            <li onClick={() => setActiveTab('shop')} className={`cursor-pointer transition-colors ${activeTab === 'shop' ? 'text-black border-b-2 border-black' : 'text-gray-400 hover:text-black'}`}>Cửa hàng</li>
            <li className="text-red-500 cursor-pointer hover:underline underline-offset-4">Giảm giá</li>
          </ul>
        </div>

        <div className="flex items-center gap-6">
          <Search size={20} className="hidden sm:block cursor-pointer hover:text-gray-500" />
          <User size={20} className="cursor-pointer hover:text-gray-500" />
          <div 
            className="relative cursor-pointer group"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingBag size={22} />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {cart.length}
              </span>
            )}
          </div>
        </div>
      </div>
    </nav>
  );

  const Hero: React.FC = () => (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1523381235208-2599a311100d?q=80&w=2070" 
          alt="Hero" 
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      <div className="relative z-10 text-center px-4">
        <span className="text-white font-bold uppercase tracking-[0.3em] mb-4 block animate-bounce">New Season 2024</span>
        <h1 className="text-6xl md:text-9xl font-black text-white italic tracking-tighter mb-8 drop-shadow-2xl">
          URBAN <br /> CULTURE.
        </h1>
        <button 
          onClick={() => setActiveTab('shop')}
          className="bg-white text-black px-12 py-5 font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all transform hover:scale-110 flex items-center gap-3 mx-auto shadow-xl"
        >
          Mua ngay <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );

  const Shop: React.FC = () => (
    <div className="max-w-7xl mx-auto px-4 py-24 pt-32">
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-4xl font-black italic uppercase">Tất cả sản phẩm</h2>
        <div className="flex items-center gap-2 font-bold cursor-pointer border border-black px-4 py-2 hover:bg-black hover:text-white transition-colors">
          <Filter size={18} /> Lọc
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {PRODUCTS.map((product) => (
          <div key={product.id} className="group cursor-pointer">
            <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-4 shadow-sm">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {product.tag && (
                <span className="absolute top-4 left-4 bg-black text-white px-3 py-1 text-[10px] font-black uppercase tracking-widest">
                  {product.tag}
                </span>
              )}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  addToCart(product);
                }}
                className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur text-black font-bold py-3 translate-y-20 group-hover:translate-y-0 transition-transform duration-300 uppercase text-xs"
              >
                Thêm vào giỏ
              </button>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">{product.category}</p>
                <h3 className="font-bold text-lg group-hover:underline underline-offset-4">{product.name}</h3>
              </div>
              <p className="font-black text-lg">{formatPrice(product.price)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const Cart: React.FC = () => (
    <>
      <div 
        className={`fixed inset-0 bg-black/60 z-[60] transition-opacity duration-300 ${isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsCartOpen(false)}
      ></div>
      <div className={`fixed right-0 top-0 h-full w-full max-w-md bg-white z-[70] transition-transform duration-500 ease-out shadow-2xl p-8 flex flex-col ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl font-black uppercase italic">Giỏ hàng</h2>
          <X size={24} className="cursor-pointer" onClick={() => setIsCartOpen(false)} />
        </div>

        <div className="flex-grow overflow-y-auto space-y-6 pr-2">
          {cart.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-400 font-medium">Giỏ hàng của bạn đang trống.</p>
              <button 
                onClick={() => {setIsCartOpen(false); setActiveTab('shop')}}
                className="mt-4 text-black font-black underline underline-offset-4"
              >
                TIẾP TỤC MUA SẮM
              </button>
            </div>
          ) : (
            cart.map((item, idx) => (
              <div key={idx} className="flex gap-4 group">
                <div className="w-20 h-24 bg-gray-100 overflow-hidden flex-shrink-0">
                  <img src={item.image} className="w-full h-full object-cover" alt="" />
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between font-bold">
                    <h4>{item.name}</h4>
                    <button onClick={() => removeFromCart(idx)}><X size={14} /></button>
                  </div>
                  <p className="text-sm text-gray-500 mt-1 italic">{item.category}</p>
                  <p className="font-black mt-2">{formatPrice(item.price)}</p>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="border-t border-gray-100 pt-8 mt-4">
            <div className="flex justify-between items-center mb-6">
              <span className="font-bold text-gray-500">TỔNG CỘNG:</span>
              <span className="text-2xl font-black">{formatPrice(totalPrice)}</span>
            </div>
            <button className="w-full bg-black text-white font-black py-5 uppercase tracking-widest hover:bg-gray-800 transition-colors">
              THANH TOÁN NGAY
            </button>
          </div>
        )}
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-white font-sans text-black overflow-x-hidden">
      <Navbar />
      <Cart />
      
      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black z-[100] transition-transform duration-500 flex flex-col p-8 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex justify-between items-center mb-16 text-white">
          <span className="text-xl font-black">YOUNG&VIBE</span>
          <X size={32} onClick={() => setIsMobileMenuOpen(false)} />
        </div>
        <ul className="space-y-8 text-4xl font-black text-white uppercase italic">
          <li onClick={() => {setActiveTab('home'); setIsMobileMenuOpen(false)}}>Trang chủ</li>
          <li onClick={() => {setActiveTab('shop'); setIsMobileMenuOpen(false)}}>Cửa hàng</li>
          <li className="text-red-500">Sale</li>
          <li className="text-gray-500 text-2xl mt-12 lowercase opacity-50">contact@youngvibe.com</li>
        </ul>
      </div>

      <main>
        {activeTab === 'home' ? (
          <>
            <Hero />
            
            {/* Ticker (Dòng chữ chạy) */}
            <div className="bg-black text-white py-4 overflow-hidden border-y border-white/20">
              <div className="flex whitespace-nowrap animate-marquee italic font-black text-2xl uppercase tracking-tighter">
                {[1,2,3,4,5].map(i => (
                  <span key={i} className="mx-10 flex items-center gap-4">
                    New Drops every Friday <Star size={20} fill="white" /> LIMITED EDITION <Star size={20} fill="white" /> STREET VIBE CULTURE
                  </span>
                ))}
              </div>
            </div>

            {/* Trending Section */}
            <section className="py-24 max-w-7xl mx-auto px-4">
              <div className="flex justify-between items-end mb-12">
                <div>
                  <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase mb-4">Trending <br /> Now</h2>
                  <div className="h-1 w-20 bg-black"></div>
                </div>
                <button 
                  onClick={() => setActiveTab('shop')}
                  className="font-bold flex items-center gap-2 hover:underline underline-offset-8"
                >
                  Xem toàn bộ <ChevronRight size={20} />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {PRODUCTS.slice(0, 3).map((product) => (
                  <div key={product.id} className="group relative overflow-hidden aspect-[3/4] shadow-xl">
                    <img 
                      src={product.image} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                      alt=""
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-300 w-full">
                      <h3 className="text-white text-2xl font-black mb-2 uppercase italic">{product.name}</h3>
                      <button 
                        onClick={() => addToCart(product)}
                        className="bg-white text-black px-6 py-2 font-black text-sm uppercase"
                      >
                        Mua ngay
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </>
        ) : (
          <Shop />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 pt-20 pb-10 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <h3 className="text-xl font-black mb-6 italic uppercase tracking-tighter">YOUNG&VIBE</h3>
              <p className="text-sm text-gray-500 font-medium leading-relaxed">
                Đưa văn hóa đường phố vào tủ đồ của bạn. Chúng tôi cung cấp những thiết kế độc bản cho thế hệ trẻ tự do.
              </p>
            </div>
            <div>
              <h4 className="font-black uppercase mb-6 text-sm tracking-widest text-black">Sản phẩm</h4>
              <ul className="space-y-4 text-sm font-bold text-gray-500">
                <li className="hover:text-black cursor-pointer">Áo phông</li>
                <li className="hover:text-black cursor-pointer">Hoodies</li>
                <li className="hover:text-black cursor-pointer">Quần Jeans</li>
                <li className="hover:text-black cursor-pointer">Phụ kiện</li>
              </ul>
            </div>
            <div>
              <h4 className="font-black uppercase mb-6 text-sm tracking-widest text-black">Hỗ trợ</h4>
              <ul className="space-y-4 text-sm font-bold text-gray-500">
                <li className="hover:text-black cursor-pointer">Chính sách đổi trả</li>
                <li className="hover:text-black cursor-pointer">Theo dõi đơn hàng</li>
                <li className="hover:text-black cursor-pointer">Size Guide</li>
                <li className="hover:text-black cursor-pointer">Cửa hàng</li>
              </ul>
            </div>
            <div>
              <h4 className="font-black uppercase mb-6 text-sm tracking-widest text-black">Nhận tin</h4>
              <div className="flex">
                <input 
                  type="text" 
                  placeholder="Email của bạn" 
                  className="bg-transparent border-b-2 border-black py-2 w-full focus:outline-none font-bold text-sm"
                />
                <button className="border-b-2 border-black pb-2 px-2 hover:translate-x-2 transition-transform">
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-200 pt-10 gap-4">
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">© 2024 YOUNG&VIBE STREETWEAR. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-6">
               <Instagram size={18} className="text-gray-400 hover:text-black cursor-pointer" />
               <Facebook size={18} className="text-gray-400 hover:text-black cursor-pointer" />
               <Twitter size={18} className="text-gray-400 hover:text-black cursor-pointer" />
            </div>
          </div>
        </div>
      </footer>

      {/* Animation Styles */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
}