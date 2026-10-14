import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { tourData, images } from '../data/tourData';

// Màu thanh điều hướng theo section đang nằm dưới nó
const NAV_THEMES = {
  hero: { bg: 'rgba(0,0,0,0)', text: 'light', shadow: false },
  highlights: { bg: 'rgba(248,246,240,0.92)', text: 'dark', shadow: true },
  spaces: { bg: 'rgba(233,238,227,0.92)', text: 'dark', shadow: true },
  itinerary: { bg: 'rgba(248,246,240,0.92)', text: 'dark', shadow: true },
  gallery: { bg: 'rgba(233,238,227,0.92)', text: 'dark', shadow: true },
  location: { bg: 'rgba(31,49,37,0.88)', text: 'light', shadow: true },
  faq: { bg: 'rgba(248,246,240,0.92)', text: 'dark', shadow: true },
  cta: { bg: 'rgba(31,49,37,0.88)', text: 'light', shadow: true },
  footer: { bg: 'rgba(31,49,37,0.95)', text: 'light', shadow: true },
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const probe = 40;
      let current = 'hero';
      Object.keys(NAV_THEMES).forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const r = el.getBoundingClientRect();
        if (r.top <= probe && r.bottom > probe) current = id;
      });
      setActiveId(current);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const theme = NAV_THEMES[activeId] || NAV_THEMES.highlights;
  const light = theme.text === 'light';
  const linkColor = light ? 'text-white hover:text-amber-300' : 'text-forest-900 hover:text-amber-600';
  const heroTop = activeId === 'hero';

  const navLinks = [
    { label: "Giới thiệu", href: "#highlights" },
    { label: "Không gian", href: "#spaces" },
    { label: "Dịch vụ", href: "#itinerary" },
    { label: "Hình ảnh", href: "#gallery" },
    { label: "Liên hệ", href: "#location" },
    { label: "FAQ", href: "#faq" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-screen max-w-full z-50 transition-all duration-300 ${
        heroTop ? '' : 'backdrop-blur-md'
      } ${theme.shadow ? 'shadow-sm' : ''} ${
        isScrolled ? 'py-2' : 'py-2.5 sm:py-3'
      }`}
      style={{ left: 0, right: 0, backgroundColor: mobileMenuOpen && heroTop ? 'rgba(31,49,37,0.92)' : theme.bg }}
    >
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="flex items-center justify-between flex-nowrap gap-3 w-full">
          
          {/* Logo Brand */}
          <a href="#hero" className="flex items-center group shrink-0" aria-label="Mhome Homestay Đà Lạt">
            <div
              className={`rounded-full overflow-hidden border-2 border-amber-500/80 shadow-sm transition-all duration-300 group-hover:scale-105 flex items-center justify-center shrink-0 bg-white ${
                isScrolled
                  ? 'w-11 h-11 sm:w-12 sm:h-12'
                  : 'w-13 h-13 sm:w-15 sm:h-15 md:w-16 md:h-16'
              }`}
            >
              <img
                src={images.logo}
                alt="Logo Mhome Homestay Đà Lạt"
                className="w-full h-full object-cover"
              />
            </div>
          </a>

          {/* Desktop Nav Links (Single line, no wrap) */}
          <nav className="hidden lg:flex items-center gap-3.5 xl:gap-6 shrink-0 flex-nowrap">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`${linkColor} text-xs xl:text-sm font-semibold transition-colors duration-200 py-1 relative group whitespace-nowrap ${heroTop ? 'drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]' : ''}`}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA Action Button */}
          <div className="hidden lg:flex items-center shrink-0">
            <a
              href={tourData.telLink}
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-forest-950 font-extrabold px-5 py-2.5 rounded-full text-xs xl:text-sm transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105 active:scale-95 flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              <span>Đặt phòng ngay</span>
            </a>
          </div>

          {/* Mobile Right Controls: Đặt Tour Button + Hamburger Menu */}
          <div className="flex lg:hidden items-center gap-2 shrink-0">
            <a
              href={tourData.telLink}
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-forest-950 font-bold px-3.5 py-1.5 rounded-full text-xs shadow-sm active:scale-95 flex items-center gap-1.5 whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Đặt phòng</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`${light || mobileMenuOpen ? 'text-white hover:bg-white/10' : 'text-forest-950 hover:bg-forest-50'} p-1.5 rounded-lg transition-colors focus:outline-none shrink-0`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-cream-300 px-4 mt-2 pt-3 pb-6 transition-all animate-fadeIn shadow-lg">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-forest-900 hover:text-amber-600 text-sm font-semibold py-2 px-3 rounded-lg hover:bg-cream-100 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-cream-200">
              <a
                href={tourData.telLink}
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full bg-gradient-to-r from-amber-500 to-amber-600 text-forest-950 font-bold py-3 rounded-xl text-center text-sm shadow-md hover:from-amber-400 hover:to-amber-500 transition-colors"
              >
                ĐẶT PHÒNG NGAY
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
