import React from 'react';
import { ArrowRight } from 'lucide-react';
import { tourData } from '../data/tourData';
import ScrollReveal from './common/ScrollReveal';

// Section "Khám phá không gian Mhome" (giữ tên file để không đổi cấu trúc dự án)
export default function Pricing() {
  const { spaces } = tourData;

  return (
    <section id="spaces" className="py-12 md:py-16 bg-[#e9eee3] relative overflow-hidden">
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-forest-100/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal direction="up" duration={600} className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
          <h2 className="font-script font-bold text-4xl sm:text-5xl md:text-6xl text-amber-600 leading-tight mb-3">
            {spaces.heading}
          </h2>
          <p className="text-base sm:text-lg text-forest-800/85">{spaces.description}</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {spaces.items.map((item, idx) => (
            <ScrollReveal
              key={item.src}
              direction={idx === 0 ? 'left' : 'right'}
              duration={700}
              className="bg-white rounded-3xl overflow-hidden border border-forest-100 shadow-soft hover:shadow-card transition-shadow duration-300 group"
            >
              <div className="aspect-square sm:aspect-[4/3] overflow-hidden bg-forest-900">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-xl font-sans font-extrabold text-forest-950 tracking-tight mb-1.5">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-forest-800/85 leading-relaxed">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal direction="up" delay={150} duration={600} className="mt-8 flex justify-center">
          <a
            href={tourData.telLink}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-forest-600 hover:bg-forest-700 text-white font-bold text-sm tracking-wide shadow-md hover:shadow-lg transition-all duration-300 group"
          >
            <span>{spaces.cta}</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
