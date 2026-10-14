import React from 'react';
import { ArrowRight } from 'lucide-react';
import { tourData } from '../data/tourData';
import ScrollReveal from './common/ScrollReveal';

export default function Highlights() {
  const { about } = tourData;
  const [imgLeft, imgTop, imgBottom] = about.images;

  return (
    <section id="highlights" className="relative bg-[#F8F6F0] text-forest-950 py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">

          {/* LEFT COLUMN: Giới thiệu + ảnh */}
          <div className="flex flex-col space-y-8 sm:space-y-10 lg:space-y-12">
            <ScrollReveal direction="left" duration={650} className="max-w-lg">
              <h2 className="font-script font-bold text-4xl sm:text-5xl lg:text-6xl text-amber-600 leading-tight mb-4">
                {about.heading}
              </h2>
              <div className="space-y-3">
                {about.paragraphs.map((p, i) => (
                  <p key={i} className="text-base text-forest-800/90 leading-relaxed font-normal">
                    {p}
                  </p>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={150} duration={650} className="max-w-lg">
              <div
                style={{ borderRadius: '58% 42% 52% 48% / 46% 56% 44% 54%' }}
                className="relative overflow-hidden shadow-[0_12px_32px_-8px_rgba(20,50,30,0.14)] bg-forest-900 h-[240px] sm:h-[290px] group transition-transform duration-500 hover:scale-[1.02]"
              >
                <img
                  src={imgLeft.src}
                  alt={imgLeft.alt}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="mt-5 sm:mt-6">
                <h3 className="font-script font-bold text-3xl sm:text-4xl text-amber-600 leading-tight mb-2">
                  {about.quote}
                </h3>
                <a
                  href="#spaces"
                  className="inline-flex items-center gap-2 text-forest-900 hover:text-amber-600 font-bold text-sm sm:text-base transition-colors group"
                >
                  <span>Khám phá không gian Mhome</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* RIGHT COLUMN: ảnh */}
          <div className="flex flex-col space-y-8 sm:space-y-10 lg:space-y-12">
            <ScrollReveal direction="right" duration={650} className="relative">
              <div
                style={{ borderRadius: '46% 54% 68% 32% / 38% 42% 58% 62%' }}
                className="relative overflow-hidden shadow-[0_16px_40px_-10px_rgba(20,50,30,0.16)] bg-forest-900 h-[300px] sm:h-[370px] lg:h-[410px] group transition-transform duration-500 hover:scale-[1.02]"
              >
                <img
                  src={imgTop.src}
                  alt={imgTop.alt}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={200} duration={650} className="relative">
              <div
                style={{ borderRadius: '68% 32% 44% 56% / 46% 62% 38% 54%' }}
                className="relative overflow-hidden shadow-[0_14px_35px_-8px_rgba(20,50,30,0.15)] bg-forest-900 h-[240px] sm:h-[290px] lg:h-[310px] group transition-transform duration-500 hover:scale-[1.02]"
              >
                <img
                  src={imgBottom.src}
                  alt={imgBottom.alt}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
