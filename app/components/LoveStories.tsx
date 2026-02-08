'use client';

import { Star, Quote } from 'lucide-react';
import Image from 'next/image';
import ScrollReveal from './ScrollReveal';
import SectionHeader from './SectionHeader';

const stories = [
  {
    image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=85",
    name: 'Emma',
    quote: "I found my dress at Rei within the first hour. The private session felt so personal — no crowds, no pressure. Just me, my mum, and the perfect dress.",
    rating: 5,
  },
  {
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=85",
    name: 'Sophie',
    quote: "The stylist understood exactly what I was looking for. Relaxed, modern, not too traditional. Rei felt like the kind of place I'd bring my best friends for the whole experience.",
    rating: 5,
  },
  {
    image: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=600&q=85",
    name: 'Rachel',
    quote: "After visiting three other boutiques, Rei was a breath of fresh air. No stuffy vibes — just beautiful dresses and genuine help. Book the appointment, you won't regret it.",
    rating: 5,
  },
];

export default function LoveStories() {
  return (
    <section id="stories" className="py-28 lg:py-36 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Real Brides"
          title="Love"
          titleAccent="Stories"
          subtitle="Hear from brides who found their perfect dress at Rei."
        />

        <div className="grid md:grid-cols-3 gap-10 lg:gap-12">
          {stories.map((story, i) => (
            <ScrollReveal key={story.name} delay={i * 100}>
              <article className="group">
                <div className="aspect-[3/4] overflow-hidden rounded-lg mb-6">
                  <Image
                    src={story.image}
                    alt={`Bride ${story.name}`}
                    width={400}
                    height={533}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: story.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-[#c4a96b] text-[#c4a96b]" />
                  ))}
                </div>
                <blockquote className="text-gray-600 font-light leading-relaxed">
                  &ldquo;{story.quote}&rdquo;
                </blockquote>
                <div className="mt-4 flex items-center gap-3">
                  <Quote className="w-5 h-5 text-[#c4a96b]/40" />
                  <cite className="text-sm font-medium text-gray-900 not-italic">— {story.name}</cite>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
