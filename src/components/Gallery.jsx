import React from 'react';
import { Eye } from 'lucide-react';
import { tourData } from '../data/tourData';
import ScrollReveal from './common/ScrollReveal';

const panelStyles = [
  { heightClass: 'h-[360px] sm:h-[440px] lg:h-[500px]', translateClass: 'lg:translate-y-0', radiusClass: 'rounded-2xl lg:rounded-l-3xl lg:rounded-r-md' },
  { heightClass: 'h-[320px] sm:h-[390px] lg:h-[440px]', translateClass: 'lg:translate-y-6', radiusClass: 'rounded-2xl lg:rounded-md' },
  { heightClass: 'h-[280px] sm:h-[340px] lg:h-[380px]', translateClass: 'lg:translate-y-12', radiusClass: 'rounded-2xl lg:rounded-md' },
  { heightClass: 'h-[320px] sm:h-[390px] lg:h-[440px]', translateClass: 'lg:translate-y-6', radiusClass: 'rounded-2xl lg:rounded-md' },
  { heightClass: 'h-[360px] sm:h-[440px] lg:h-[500px]', translateClass: 'lg:translate-y-0', radiusClass: 'rounded-2xl lg:rounded-r-3xl lg:rounded-l-md' },
];

export default function Gallery({ onOpenLightbox }) {
  const { gallery } = tourData;
  const panels = gallery.images.slice(0, panelStyles.length);
  const extra = gallery.images.length - panels.length;

  return (
    <section id="gallery" className="py-12 md:py-18 bg-[#e9eee3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal direction="up" duration={600} className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <h2 className="font-script font-bold text-4xl sm:text-5xl md:text-6xl text-amber-600 leading-tight mb-2">
            {gallery.heading}
          </h2>
        </ScrollReveal>

        <div className="relative pt-2 pb-6 lg:pb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-3 items-center justify-center">
            {panels.map((item, idx) => {
              const style = panelStyles[idx];
              return (
                <ScrollReveal
                  key={item.src}
                  direction="up"
                  delay={idx * 80}
                  duration={650}
                  className={`w-full ${style.translateClass}`}
                >
                  <button
                    type="button"
                    onClick={() => onOpenLightbox && onOpenLightbox(idx)}
                    aria-label={`Xem ảnh lớn: ${item.title}`}
                    className={`group relative block overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-500 bg-forest-900 border border-white/60 hover:scale-[1.03] hover:z-30 w-full ${style.heightClass} ${style.radiusClass}`}
                  >
                    <img
                      src={item.src}
                      alt={`${item.title} – Mhome Homestay Đà Lạt`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="w-11 h-11 rounded-full bg-white/90 text-forest-950 flex items-center justify-center shadow-lg">
                        <Eye className="w-5 h-5" />
                      </div>
                    </div>
                  </button>
                </ScrollReveal>
              );
            })}
          </div>

          {extra > 0 && (
            <div className="mt-8 lg:mt-14 flex justify-center">
              <button
                type="button"
                onClick={() => onOpenLightbox && onOpenLightbox(panels.length)}
                className="px-6 py-2.5 rounded-full border border-forest-600 text-forest-700 hover:bg-forest-600 hover:text-white text-sm font-bold transition-colors"
              >
                Xem thêm {extra} ảnh
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
