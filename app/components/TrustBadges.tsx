'use client';

import { Star, Instagram } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function TrustBadges() {
  return (
    <ScrollReveal className="flex flex-wrap items-center justify-center gap-8 lg:gap-16 py-12 border-y border-gray-100">
      <a
        href="#"
        className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors group"
        aria-label="View our Google Reviews"
      >
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star key={i} className="w-5 h-5 fill-[#c4a96b] text-[#c4a96b] group-hover:scale-110 transition-transform" />
          ))}
        </div>
        <div className="text-left">
          <span className="block text-sm font-medium text-gray-900">4.9 Google Reviews</span>
          <span className="text-xs text-gray-500">200+ happy brides</span>
        </div>
      </a>
      <a
        href="#"
        className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors group"
        aria-label="Follow us on Instagram"
      >
        <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-[#c4a96b]/50 transition-colors">
          <Instagram className="w-5 h-5 text-gray-600 group-hover:text-[#c4a96b] transition-colors" />
        </div>
        <div className="text-left">
          <span className="block text-sm font-medium text-gray-900">@reibridal</span>
          <span className="text-xs text-gray-500">12k followers</span>
        </div>
      </a>
      <div className="flex items-center gap-3 text-gray-600">
        <span className="text-[10px] tracking-[0.2em] uppercase text-gray-400">As featured in</span>
        <span className="text-sm text-gray-500">Vogue Weddings · Brides · Harper&apos;s Bazaar</span>
      </div>
    </ScrollReveal>
  );
}
