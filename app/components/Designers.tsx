'use client';

import Image from 'next/image';
import ScrollReveal from './ScrollReveal';
import SectionHeader from './SectionHeader';

const designers = [
  'Alexandra Grecco',
  'Love Story London',
  'A La Robe',
  'Bon Bride',
  'Katherine Tash',
  'Ingrid Olic',
  'Mikado',
];

const designerImages = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=85",
  "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=800&q=85",
];

export default function Designers() {
  return (
    <section id="designers" className="py-28 lg:py-36 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Our Edit"
          title="Bridal"
          titleAccent="Designers"
          subtitle="Curated collections from the world's most sought-after bridal houses."
        />

        {/* Editorial hero images */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <ScrollReveal delay={0}>
            <div className="group relative aspect-[4/5] overflow-hidden rounded-lg">
              <Image
                src={designerImages[0]}
                alt="Modern bridal collection"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="text-[10px] tracking-[0.3em] uppercase text-white/90">Contemporary</span>
                <h3 className="text-2xl font-light text-white mt-2">Modern Collection</h3>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="group relative aspect-[4/5] overflow-hidden rounded-lg">
              <Image
                src={designerImages[1]}
                alt="Romantic bridal collection"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="text-[10px] tracking-[0.3em] uppercase text-white/90">Dreamy</span>
                <h3 className="text-2xl font-light text-white mt-2">Romantic Collection</h3>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Designer brand grid - sophisticated typography */}
        <ScrollReveal delay={150}>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 lg:gap-8">
            {designers.map((name) => (
              <div
                key={name}
                className="group p-6 lg:p-8 text-center border border-gray-100 rounded-lg hover:border-[#c4a96b]/30 hover:bg-[#faf9f7]/50 transition-all duration-300"
              >
                <h3 className="text-sm lg:text-base font-light text-gray-700 group-hover:text-[#c4a96b] transition-colors tracking-wide leading-tight">
                  {name}
                </h3>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
