import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { tourData, images } from '../data/tourData';
import ScrollReveal from './common/ScrollReveal';

export default function Hero() {
  const { hero } = tourData;

  return (
    <section id="hero" className="relative w-full min-h-[100svh] md:min-h-[680px] flex items-center justify-center overflow-hidden bg-forest-950 pt-20 pb-12">
      {/* Background photo (loaded eagerly: first screen) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={images.facade}
          alt="Mhome Homestay Đà Lạt – mặt tiền với giàn hoa giấy"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover object-[center_62%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/30 to-black/55" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center">
        <ScrollReveal direction="down" duration={750} delay={100}>
          <h1 className="flex flex-col items-center justify-center mb-4 sm:mb-6 select-none">
            <span className="font-script text-6xl min-[380px]:text-7xl sm:text-8xl md:text-9xl text-amber-300 font-bold -rotate-2 transform tracking-wide drop-shadow-[0_4px_15px_rgba(0,0,0,0.85)] leading-[1.1] block">
              {hero.title}
            </span>
            <span className="font-sans sm:font-display text-lg min-[380px]:text-xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-[0.2em] sm:tracking-[0.3em] uppercase mt-0 sm:mt-1 drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)] block">
              {hero.titleSub}
            </span>
          </h1>
        </ScrollReveal>

        <ScrollReveal direction="up" duration={700} delay={200}>
          <p className="font-script text-2xl sm:text-3xl md:text-4xl text-white font-bold mb-3 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
            {hero.subtitle}
          </p>
          <p className="text-sm sm:text-base md:text-lg text-white/95 font-medium max-w-2xl mx-auto leading-relaxed mb-8 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
            {hero.description}
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" duration={700} delay={320} className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <a
            href={tourData.telLink}
            className="px-7 py-3.5 rounded-full bg-amber-400 hover:bg-amber-300 text-forest-950 font-extrabold text-sm sm:text-base shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 whitespace-nowrap"
          >
            <Phone className="w-4 h-4" />
            <span>{hero.ctaPrimary}</span>
          </a>
          <a
            href="#spaces"
            className="px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/60 text-white font-bold text-sm sm:text-base backdrop-blur-sm transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group whitespace-nowrap"
          >
            <span>{hero.ctaSecondary}</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
