'use client';

import { Sparkles } from 'lucide-react';
import Image from 'next/image';
import ScrollReveal from './ScrollReveal';
import SectionHeader from './SectionHeader';

const accessories = [
  {
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=600&q=85",
    title: 'Bridal Veils',
    desc: 'Elegant tulle and lace',
  },
  {
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=600&q=85",
    title: 'Jewelry',
    desc: 'Headpieces & earrings',
  },
  {
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=600&q=85",
    title: 'Bridal Shoes',
    desc: 'Comfort meets style',
  },
  {
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=85",
    title: 'Finishing Touches',
    desc: 'Belts, sashes & more',
  },
];

export default function Accessories() {
  return (
    <section id="accessories" className="py-28 lg:py-36 bg-[#faf9f7]">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="The Details"
          title="Bridal"
          titleAccent="Accessories"
          subtitle="Every finishing touch to complete your look."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {accessories.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 80}>
              <div className="group bg-white overflow-hidden border border-gray-100 rounded-lg hover:border-[#c4a96b]/30 hover:shadow-xl transition-all duration-500">
                <div className="aspect-square overflow-hidden relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Sparkles className="w-4 h-4 text-[#c4a96b]" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-light text-gray-900 tracking-wide group-hover:text-[#c4a96b] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 font-light mt-1">{item.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
