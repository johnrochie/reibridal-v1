'use client';

import { ChevronRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import SectionHeader from './SectionHeader';
import TrustBadges from './TrustBadges';

export default function Contact() {
  return (
    <section id="contact" className="py-28 lg:py-36 bg-[#faf9f7]">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader
          eyebrow="Private Sessions"
          title="Book Your"
          titleAccent="Appointment"
          subtitle="60-minute private styling session. Just you, your people, and our curated collection."
        />

        <TrustBadges />

        <ScrollReveal delay={100}>
          <div className="mt-16 bg-white p-10 md:p-16 border border-gray-100 rounded-xl shadow-sm">
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-xs font-medium tracking-[0.2em] uppercase text-gray-600 mb-3">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-5 py-4 bg-[#faf9f7] border border-gray-200 text-gray-900 focus:ring-1 focus:ring-[#c4a96b]/30 focus:border-[#c4a96b] outline-none transition-all font-light rounded"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium tracking-[0.2em] uppercase text-gray-600 mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-5 py-4 bg-[#faf9f7] border border-gray-200 text-gray-900 focus:ring-1 focus:ring-[#c4a96b]/30 focus:border-[#c4a96b] outline-none transition-all font-light rounded"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium tracking-[0.2em] uppercase text-gray-600 mb-3">
                  Phone
                </label>
                <input
                  type="tel"
                  className="w-full px-5 py-4 bg-[#faf9f7] border border-gray-200 text-gray-900 focus:ring-1 focus:ring-[#c4a96b]/30 focus:border-[#c4a96b] outline-none transition-all font-light rounded"
                  placeholder="+353 (0) XX XXX XXXX"
                />
              </div>

              <div>
                <label className="block text-xs font-medium tracking-[0.2em] uppercase text-gray-600 mb-3">
                  Tell us about your wedding
                </label>
                <textarea
                  rows={4}
                  className="w-full px-5 py-4 bg-[#faf9f7] border border-gray-200 text-gray-900 focus:ring-1 focus:ring-[#c4a96b]/30 focus:border-[#c4a96b] outline-none transition-all resize-none font-light rounded"
                  placeholder="Wedding date, style preferences, anything we should know..."
                />
              </div>

              <button
                type="submit"
                className="group w-full flex items-center justify-center gap-2 bg-[#c4a96b] text-white py-4 font-light tracking-[0.2em] uppercase text-sm rounded transition-all duration-300 hover:bg-[#b8975e] hover:shadow-[0_8px_30px_rgba(196,169,107,0.35)]"
              >
                Book Appointment
                <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </form>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
