'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#styles', label: 'Styles' },
  { href: '#designers', label: 'Designers' },
  { href: '#accessories', label: 'Accessories' },
  { href: '#stories', label: 'Love Stories' },
  { href: '#contact', label: 'Book Appointment' },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100/80 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="flex items-center gap-3">
            <img src="/logo.jpg" alt="Rei Bridal" className="h-12 w-12 object-contain" />
            <div className="text-xl font-light text-gray-900 tracking-wide">
              REI <span className="text-[#c4a96b]">BRIDAL</span>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-light text-sm tracking-wide uppercase transition-colors hover:text-gray-900 ${
                  link.label === 'Book Appointment' ? 'text-[#c4a96b]' : 'text-gray-600'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-gray-900"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
          aria-hidden
        />
        <div
          className={`absolute top-[73px] left-0 right-0 bg-white border-b border-gray-100 shadow-xl transition-transform duration-300 ${
            mobileOpen ? 'translate-y-0' : '-translate-y-4'
          }`}
        >
          <div className="py-6 px-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block py-4 font-light text-sm tracking-wide uppercase transition-colors ${
                  link.label === 'Book Appointment'
                    ? 'text-[#c4a96b]' 
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
