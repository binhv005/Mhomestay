import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Itinerary from './components/Itinerary';
import Pricing from './components/Pricing';
import Gallery from './components/Gallery';
import LocationSection from './components/LocationSection';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import LightboxModal from './components/LightboxModal';

export default function App() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Always scroll to top when page reloads / mounts
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  const handleOpenLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen w-full overflow-x-clip bg-[#1f3125] text-forest-950 font-sans selection:bg-forest-700 selection:text-white">
      <Navbar />

      <main>
        {/* 1. Hero */}
        <Hero />
        {/* 2. Giới thiệu */}
        <Highlights />
        {/* 3. Không gian lưu trú */}
        <Pricing />
        {/* 4-5. Dịch vụ & lý do lựa chọn */}
        <Itinerary />
        {/* 6. Thư viện hình ảnh */}
        <Gallery onOpenLightbox={handleOpenLightbox} />
        {/* 7. Địa chỉ & liên hệ */}
        <LocationSection />
        {/* FAQ */}
        <FAQ />
        {/* 8. CTA cuối trang */}
        <FinalCTA />
      </main>

      <Footer />
      <FloatingCTA />

      <LightboxModal
        isOpen={lightboxOpen}
        initialIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
      />
    </div>
  );
}
