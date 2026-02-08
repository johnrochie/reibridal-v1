'use client';

import { Mail, Phone, MapPin } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const items = [
  {
    icon: Mail,
    title: 'Email Us',
    value: 'hello@reibridal.com',
  },
  {
    icon: Phone,
    title: 'Call Us',
    value: '+353 (0) XX XXX XXXX',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    value: 'Dublin, Ireland',
  },
];

export default function Location() {
  return (
    <section className="py-28 lg:py-36 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {items.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 80}>
              <div className="text-center group">
                <div className="w-16 h-16 bg-[#faf9f7] border border-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors duration-300 group-hover:border-[#c4a96b]/30 group-hover:bg-white">
                  <item.icon className="w-6 h-6 text-[#c4a96b]" />
                </div>
                <h3 className="text-sm font-medium tracking-[0.2em] uppercase text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 font-light">{item.value}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
