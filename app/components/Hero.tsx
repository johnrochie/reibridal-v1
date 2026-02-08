'use client';

import { Star, ChevronRight, Award, Quote } from 'lucide-react';
import Image from 'next/image';

const GOLD = '#c4a96b';

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] lg:min-h-screen flex overflow-hidden bg-white">
      {/* ——— Background: Editorial split layout ——— */}
      <div className="absolute inset-0">
        {/* Hero image/video - full bleed on mobile, offset on desktop */}
        <div className="absolute inset-0 lg:left-[42%]">
          <div className="relative w-full h-full">
            <Image
              src="https://images.unsplash.com/photo-1593245318987-66b286c24ed3?auto=format&fit=crop&w=2000&q=85"
              alt="Bride in elegant wedding dress"
              fill
              priority
              sizes="100vw"
              className="object-cover animate-[hero-zoom-in_1.2s_ease-out_forwards]"
            />
          </div>
          {/* Luxury gradient overlay - editorial feel */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent lg:from-white lg:via-white/90 lg:to-transparent"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent"
            aria-hidden
          />
        </div>
      </div>

      {/* ——— Content: Asymmetrical editorial block ——— */}
      <div className="relative z-10 flex flex-col justify-center w-full max-w-2xl px-6 sm:px-10 lg:px-16 xl:px-24 pt-24 pb-16 lg:pt-0 lg:pb-0">
        {/* Eyebrow / editorial label */}
        <div
          className="flex items-center gap-3 mb-6 opacity-0 animate-[fade-up_0.8s_ease-out_0.2s_forwards]"
          style={{ animationFillMode: 'forwards' }}
        >
          <span className="text-[10px] sm:text-xs font-medium tracking-[0.3em] uppercase text-[#c4a96b]">
            Dublin · Ireland
          </span>
          <span className="h-px w-8 bg-[#c4a96b]/40" aria-hidden />
        </div>

        {/* Main headline - magazine typography */}
        <h1 className="opacity-0 animate-[fade-up_0.9s_ease-out_0.35s_forwards]">
          <span className="block font-[350] text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-gray-900 leading-[1.05]">
            Your Wedding,
          </span>
          <span
            className="block mt-2 font-serif italic text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.1]"
            style={{ color: GOLD }}
          >
            Your Way
          </span>
        </h1>

        {/* Subheadline / value prop */}
        <p
          className="mt-6 max-w-md text-base sm:text-lg text-gray-600 font-light leading-relaxed opacity-0 animate-[fade-up_0.8s_ease-out_0.5s_forwards]"
          style={{ animationFillMode: 'forwards' }}
        >
          Discover the perfect dress from our curated collection of modern bridal designers. Private appointments in a relaxed, no-pressure salon.
        </p>

        {/* CTAs with micro-interactions */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 opacity-0 animate-[fade-up_0.8s_ease-out_0.65s_forwards]">
          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center gap-2 bg-[#c4a96b] text-white px-8 py-4 font-light tracking-[0.2em] uppercase text-sm overflow-hidden transition-all duration-300 hover:tracking-[0.25em] hover:shadow-[0_8px_30px_rgba(196,169,107,0.35)]"
          >
            <span className="relative z-10">Book Appointment</span>
            <ChevronRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            <span className="absolute inset-0 bg-gradient-to-r from-[#b8975e] to-[#c4a96b] opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden />
          </a>
          <a
            href="#collection"
            className="group inline-flex items-center justify-center gap-2 bg-white/90 backdrop-blur-sm text-gray-700 px-8 py-4 font-light tracking-[0.2em] uppercase text-sm border border-gray-200 transition-all duration-300 hover:border-[#c4a96b]/50 hover:text-[#c4a96b] hover:shadow-lg"
          >
            <span>Browse Collection</span>
            <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* ——— Social proof & trust indicators ——— */}
        <div className="mt-14 lg:mt-16 flex flex-wrap items-center gap-x-8 gap-y-4 opacity-0 animate-[fade-up_0.8s_ease-out_0.85s_forwards]">
          {/* Review badge */}
          <div className="flex items-center gap-2">
            <div className="flex -space-x-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-[#c4a96b] text-[#c4a96b]"
                  aria-hidden
                />
              ))}
            </div>
            <span className="text-sm font-medium text-gray-700">4.9</span>
            <span className="text-sm text-gray-500">
              from <strong className="text-gray-700">200+</strong> brides
            </span>
          </div>

          {/* Trust badge */}
          <div className="flex items-center gap-2 text-gray-600">
            <Award className="w-4 h-4 text-[#c4a96b] shrink-0" />
            <span className="text-sm">By appointment only</span>
          </div>

          {/* Editorial quote accent */}
          <div className="hidden sm:flex items-center gap-2 text-gray-400">
            <Quote className="w-3.5 h-3.5 text-[#c4a96b]/60" />
            <span className="text-xs tracking-widest uppercase">As featured in</span>
          </div>
        </div>

        {/* Featured in logos - minimalist */}
        <div className="mt-6 flex items-center gap-6 opacity-0 animate-[fade-up_0.8s_ease-out_1s_forwards]">
          <span className="text-[10px] sm:text-xs tracking-[0.2em] uppercase text-gray-400">
            Vogue Weddings · Brides · Harper&apos;s Bazaar
          </span>
        </div>
      </div>

      {/* ——— Decorative accent (editorial flourish) ——— */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:block w-24 h-px bg-gradient-to-l from-[#c4a96b]/30 to-transparent"
        aria-hidden
      />
    </section>
  );
}
