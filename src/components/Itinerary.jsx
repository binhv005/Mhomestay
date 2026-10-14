import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { tourData, images } from '../data/tourData';
import ScrollReveal from './common/ScrollReveal';

// Section "Dịch vụ" + "Lý do lựa chọn" (giữ tên file để không đổi cấu trúc dự án)
export default function Itinerary() {
  const { services } = tourData;

  return (
    <section id="itinerary" className="pt-14 sm:pt-18 md:pt-20 pb-12 md:pb-16 bg-white text-forest-950 relative overflow-hidden">
      {/* Ảnh nền nhẹ ở bên phải */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[58%] z-0 pointer-events-none select-none">
        <img
          src={images.blueHouse}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="w-full h-full object-cover opacity-20 lg:opacity-100"
        />
        <div className="absolute inset-0 hidden lg:block bg-[linear-gradient(to_right,#fff_0%,rgba(255,255,255,0)_12%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col max-w-2xl">
            <ScrollReveal direction="up" duration={600} className="mb-6 sm:mb-8">
              <h2 className="font-script font-bold text-3xl sm:text-4xl md:text-5xl text-amber-600 leading-tight">
                {services.heading}
              </h2>
            </ScrollReveal>

            <div className="space-y-5">
              {services.items.map((item, idx) => (
                <ScrollReveal
                  key={item.title}
                  direction="up"
                  delay={idx * 60}
                  duration={500}
                  className="flex items-start gap-3 group"
                >
                  <span className="font-mono font-bold text-amber-600 text-lg shrink-0 select-none">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-forest-900 group-hover:text-amber-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-forest-800/85 leading-relaxed">{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
          <div className="hidden lg:block lg:col-span-5 min-h-[320px]" aria-hidden="true" />
        </div>

        {/* Lý do lựa chọn */}
        <ScrollReveal direction="up" delay={150} duration={600} className="mt-12 sm:mt-14">
          <h3 className="font-script font-bold text-3xl sm:text-4xl text-amber-600 leading-tight mb-5">
            {services.reasonsHeading}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {services.reasons.map((item) => (
              <div
                key={item.title}
                className="p-4 rounded-2xl bg-white/90 hover:bg-white border border-forest-100 shadow-sm transition-all"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <CheckCircle2 className="w-4 h-4 text-forest-600 shrink-0" />
                  <span className="text-sm font-bold text-forest-900">{item.title}</span>
                </div>
                <p className="text-sm text-forest-800/85 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
