'use client';

import Image from 'next/image';
import { Sparkles, User } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import SectionHeader from './SectionHeader';

export default function About() {
  return (
    <section id="about" className="py-28 lg:py-36 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Our Story"
          title="Modern"
          titleAccent="Bridal Experience"
          subtitle="For Ireland's modern, cool brides. Relaxed, approachable, unforgettable."
          align="left"
        />

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="space-y-8">
            <ScrollReveal delay={100}>
              <p className="text-lg sm:text-xl leading-relaxed text-gray-600 font-light">
                Rei Bridal is for the bride who knows what she wants — and isn&apos;t afraid to take her time finding it. No rush, no pressure. Just you, your people, and a carefully curated edit of dresses that actually speak to you.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <p className="text-lg leading-relaxed text-gray-600 font-light">
                We believe your wedding dress should feel like <em>you</em> — not a costume. Our collection features designs from Alexandra Grecco, Love Story London, A La Robe, Bon Bride, Katherine Tash, Ingrid Olic, and Mikado: designers chosen for their craftsmanship, modern sensibility, and that something special.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="flex items-start gap-4 p-6 bg-[#faf8f5] border border-gray-100 rounded-lg">
                <div className="w-12 h-12 rounded-full bg-white border border-[#c4a96b]/20 flex items-center justify-center shrink-0">
                  <User className="w-5 h-5 text-[#c4a96b]" />
                </div>
                <div>
                  <p className="text-gray-700 font-light leading-relaxed">
                    <strong className="text-gray-900 font-normal">Private styling sessions</strong> — 60 minutes just for you. Bring your besties, try on as many dresses as you like, and discover your perfect match in a relaxed, no-pressure environment.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={100} className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=800&q=85"
                alt="Rei Bridal boutique interior"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute -bottom-6 -right-6 w-40 h-40 border-2 border-[#c4a96b]/20 rounded-lg bg-white/5 -z-10" aria-hidden />
            </div>
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-white border border-gray-100 rounded-full flex items-center justify-center shadow-lg">
              <Sparkles className="w-6 h-6 text-[#c4a96b]" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
