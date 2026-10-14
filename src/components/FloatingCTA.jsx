import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, MapPin, ArrowUp } from 'lucide-react';
import { tourData } from '../data/tourData';

export default function FloatingCTA() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Desktop Floating Right Actions (Matches Mockup) */}
      <div className="hidden lg:flex fixed right-5 bottom-8 z-40 flex-col items-center gap-3">
        {/* Phone Button */}
        <a
          href={tourData.telLink}
          className="w-12 h-12 rounded-full bg-forest-600 hover:bg-forest-500 text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 relative group"
          aria-label="Gọi điện thoại"
        >
          <Phone className="w-5 h-5 animate-pulse" />
          <span className="absolute right-14 bg-forest-900 text-white text-xs font-bold px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap shadow-md">
            Gọi {tourData.hotlineFormatted}
          </span>
        </a>

        {/* Facebook Button */}
        <a
          href={tourData.facebookLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-forest-800 hover:bg-forest-700 text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 relative group"
          aria-label="Nhắn tin Facebook"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="absolute right-14 bg-forest-900 text-white text-xs font-bold px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap shadow-md">
            Nhắn tin Facebook
          </span>
        </a>

        {/* Floating ĐẶT TOUR Button */}
        <a
          href={tourData.googleMapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-amber-500 hover:bg-amber-400 text-forest-950 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 relative group"
          aria-label="Chỉ đường"
        >
          <MapPin className="w-5 h-5" />
          <span className="absolute right-14 bg-forest-900 text-white text-xs font-bold px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap shadow-md">
            Chỉ đường Google Maps
          </span>
        </a>

        {/* Back to Top */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-forest-800/80 hover:bg-forest-700 text-white flex items-center justify-center shadow-md hover:scale-110 transition-all duration-300 backdrop-blur-sm"
            aria-label="Lên đầu trang"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Mobile sticky contact bar */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 grid grid-cols-2 gap-px bg-forest-900 shadow-[0_-4px_16px_rgba(0,0,0,0.15)]">
        <a href={tourData.telLink} className="flex items-center justify-center gap-2 py-3 bg-forest-600 text-white font-bold text-sm">
          <Phone className="w-4 h-4" />
          <span>Gọi Mhome</span>
        </a>
        <a href={tourData.facebookLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 py-3 bg-amber-400 text-forest-950 font-bold text-sm">
          <MessageCircle className="w-4 h-4" />
          <span>Nhắn Facebook</span>
        </a>
      </div>
    </>
  );
}
