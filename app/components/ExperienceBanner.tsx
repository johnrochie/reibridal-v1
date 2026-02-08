'use client';

import { User, Clock } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function ExperienceBanner() {
  return (
    <ScrollReveal>
      <section className="py-16 lg:py-20 bg-white border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-full bg-[#faf9f7] border border-gray-100 flex items-center justify-center shrink-0">
                <User className="w-6 h-6 text-[#c4a96b]" />
              </div>
              <div>
                <h3 className="text-sm font-medium tracking-[0.2em] uppercase text-gray-900">
                  Private Sessions
                </h3>
                <p className="text-gray-600 font-light mt-1">Just you and your people</p>
              </div>
            </div>
            <div className="hidden md:block w-px h-12 bg-gray-200" aria-hidden />
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-full bg-[#faf9f7] border border-gray-100 flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-[#c4a96b]" />
              </div>
              <div>
                <h3 className="text-sm font-medium tracking-[0.2em] uppercase text-gray-900">
                  60 Minutes
                </h3>
                <p className="text-gray-600 font-light mt-1">No rush, no pressure</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
