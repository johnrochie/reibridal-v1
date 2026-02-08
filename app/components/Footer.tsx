'use client';

import { Star, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-8 py-8 mb-12 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-4 h-4 fill-[#c4a96b] text-[#c4a96b]" />
              ))}
            </div>
            <span className="text-sm text-gray-600">4.9 · 200+ reviews</span>
          </div>
          <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-[#c4a96b] transition-colors">
            <Instagram className="w-4 h-4" />
            <span className="text-sm">@reibridal</span>
          </a>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          <a href="#" className="flex items-center gap-3">
            <img src="/logo.jpg" alt="Rei Bridal" className="h-10 w-10 object-contain" />
            <div className="text-lg font-light text-gray-900 tracking-wide">
              REI <span className="text-[#c4a96b]">BRIDAL</span>
            </div>
          </a>
          <nav className="flex flex-wrap justify-center gap-8">
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors text-sm tracking-wide uppercase">
              About
            </a>
            <a href="#styles" className="text-gray-600 hover:text-gray-900 transition-colors text-sm tracking-wide uppercase">
              Styles
            </a>
            <a href="#designers" className="text-gray-600 hover:text-gray-900 transition-colors text-sm tracking-wide uppercase">
              Designers
            </a>
            <a href="#accessories" className="text-gray-600 hover:text-gray-900 transition-colors text-sm tracking-wide uppercase">
              Accessories
            </a>
            <a href="#stories" className="text-gray-600 hover:text-gray-900 transition-colors text-sm tracking-wide uppercase">
              Love Stories
            </a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors text-sm tracking-wide uppercase">
              Contact
            </a>
          </nav>
        </div>
        <div className="pt-8 border-t border-gray-100 text-center md:text-left">
          <p className="text-sm text-gray-500 font-light">
            © {new Date().getFullYear()} Rei Bridal. Dublin, Ireland. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
