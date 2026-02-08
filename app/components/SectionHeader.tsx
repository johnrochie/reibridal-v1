'use client';

import ScrollReveal from './ScrollReveal';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  titleAccent?: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export default function SectionHeader({
  eyebrow,
  title,
  titleAccent,
  subtitle,
  align = 'center',
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center max-w-2xl mx-auto' : '';

  return (
    <ScrollReveal className={`mb-16 lg:mb-20 ${alignClass}`}>
      {eyebrow && (
        <span className="block text-[10px] sm:text-xs font-medium tracking-[0.3em] uppercase text-[#c4a96b] mb-4">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-gray-900 leading-[1.1]">
        {title}
        {titleAccent && (
          <span className="block mt-2 font-serif italic text-2xl sm:text-3xl md:text-4xl" style={{ color: '#c4a96b' }}>
            {titleAccent}
          </span>
        )}
      </h2>
      {subtitle && (
        <p className={`mt-5 text-lg text-gray-600 font-light ${align === 'center' ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </ScrollReveal>
  );
}
