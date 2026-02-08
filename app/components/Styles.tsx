'use client';

import { Star, Heart, Sparkles } from 'lucide-react';
import Image from 'next/image';
import ScrollReveal from './ScrollReveal';
import SectionHeader from './SectionHeader';

const styles = [
  {
    photo: "https://images.unsplash.com/photo-1505922593614-fc8d3110dd31?auto=format&fit=crop&w=600&q=85",
    title: 'Classic',
    desc: 'Timeless elegance',
    icon: Star,
  },
  {
    photo: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=600&q=85",
    title: 'Romantic',
    desc: 'Soft and dreamy',
    icon: Heart,
  },
  {
    photo: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=85",
    title: 'Bohemian',
    desc: 'Free spirited',
    icon: Sparkles,
  },
  {
    photo: "https://images.unsplash.com/photo-1520854221256-17451cc330e7?auto=format&fit=crop&w=600&q=85",
    title: 'Minimalist',
    desc: 'Clean modern vibe',
    icon: Star,
  },
  {
    photo: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=600&q=85",
    title: 'Modern',
    desc: 'Contemporary chic',
    icon: Sparkles,
  },
  {
    photo: "https://images.unsplash.com/photo-1478147427282-58a87a120781?auto=format&fit=crop&w=600&q=85",
    title: 'Glamour',
    desc: 'Make a statement',
    icon: Heart,
  },
];

export default function Styles() {
  return (
    <section id="styles" className="py-28 lg:py-36 bg-[#faf9f7]">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Find Your Look"
          title="Wedding"
          titleAccent="Styles"
          subtitle="Every bride has a vision. Discover yours."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {styles.map((style, i) => (
            <ScrollReveal key={style.title} delay={i * 80}>
              <div className="group bg-white overflow-hidden border border-gray-100 rounded-lg hover:border-[#c4a96b]/30 hover:shadow-xl transition-all duration-500">
                <div className="aspect-[4/5] overflow-hidden">
                  <Image
                    src={style.photo}
                    alt={style.title}
                    width={600}
                    height={750}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <style.icon className="w-6 h-6 text-[#c4a96b]" />
                    <h3 className="text-xl font-light text-gray-900 tracking-wide">{style.title}</h3>
                  </div>
                  <p className="text-gray-600 font-light">{style.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
