import React from 'react';
import { Phone, MapPin, ArrowRight } from 'lucide-react';
import { tourData, images } from '../data/tourData';
import ScrollReveal from './common/ScrollReveal';

const FacebookIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

export default function LocationSection() {
  const { contact } = tourData;

  return (
    <section id="location" className="relative py-16 sm:py-20 lg:py-24 text-white overflow-hidden flex items-center">
      <div className="absolute inset-0 z-0">
        <img
          src={images.flowerHill}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950/90 via-forest-950/75 to-forest-950/50" />
      </div>

      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none z-20 pointer-events-none">
        <svg viewBox="0 0 1440 96" fill="none" className="relative block w-full h-10 sm:h-16 lg:h-20 text-[#e9eee3]" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,0 L1440,0 L1440,24 C1120,78 780,18 420,62 C220,88 90,38 0,26 Z" fill="currentColor" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none z-20 pointer-events-none">
        <svg viewBox="0 0 1440 96" fill="none" className="relative block w-full h-10 sm:h-16 lg:h-20 text-[#F8F6F0]" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,96 L1440,96 L1440,72 C1120,18 780,78 420,34 C220,8 90,58 0,70 Z" fill="currentColor" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30 w-full py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          <ScrollReveal direction="left" duration={700} className="lg:col-span-6 flex flex-col items-start max-w-xl">
            <h2 className="font-serif italic font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.15] mb-6 drop-shadow-md">
              {contact.heading}
            </h2>

            <div className="space-y-4 w-full mb-8 text-sm sm:text-base">
              <div>
                <span className="block text-xs uppercase tracking-wider text-amber-300 font-bold mb-1">Địa chỉ</span>
                <p className="text-cream-100 font-medium leading-relaxed">{tourData.location}.</p>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider text-amber-300 font-bold mb-1">Điện thoại</span>
                <a href={tourData.telLink} className="text-cream-100 font-medium hover:text-amber-300 transition-colors">
                  {tourData.hotline}
                </a>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider text-amber-300 font-bold mb-1">Facebook</span>
                <a href={tourData.facebookLink} target="_blank" rel="noopener noreferrer" className="text-cream-100 font-medium hover:text-amber-300 transition-colors">
                  Mhome Homestay Đà Lạt
                </a>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={tourData.telLink}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber-400 hover:bg-amber-300 text-forest-950 font-bold text-sm shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4" />
                <span>{contact.callLabel}</span>
              </a>
              <a
                href={tourData.facebookLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/50 text-white font-bold text-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5"
              >
                <FacebookIcon />
                <span>{contact.facebookLabel}</span>
              </a>
              <a
                href={tourData.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-forest-600 hover:bg-forest-500 text-white font-bold text-sm shadow-lg transition-all duration-300 hover:-translate-y-0.5 group"
              >
                <MapPin className="w-4 h-4" />
                <span>{contact.mapLabel}</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" duration={750} delay={150} className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden border-4 border-white/80 shadow-elevated bg-white aspect-[4/3]">
              <iframe
                title="Bản đồ Mhome Homestay Đà Lạt"
                src={tourData.googleMapsEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
