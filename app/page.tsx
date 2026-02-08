import { Mail, Phone, MapPin, Sparkles, Heart, Star, Crown, Waves } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      {/* Creative Navigation - Floating */}
      <nav className="fixed top-0 left-0 right-0 z-50 py-6">
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <div className="flex items-center gap-4 bg-[#0a1628]/95 backdrop-blur-sm px-6 py-3 rounded-full border border-[#d4af37]/20">
            <img src="/logo.jpg" alt="Rei Bridal" className="h-10 w-10 object-contain" />
            <div className="text-lg font-light tracking-wider text-[#f5f5f5]">
              <span style={{ color: '#d4af37' }}>REI</span> BRIDAL
            </div>
          </div>
          <div className="hidden md:flex space-x-8 bg-[#0a1628]/95 backdrop-blur-sm px-6 py-3 rounded-full border border-[#d4af37]/20">
            <a href="#about" className="text-[#f5f5f5]/80 hover:text-[#d4af37] transition-colors font-light tracking-wide">
              About
            </a>
            <a href="#collections" className="text-[#f5f5f5]/80 hover:text-[#d4af37] transition-colors font-light tracking-wide">
              Collections
            </a>
            <a href="#services" className="text-[#f5f5f5]/80 hover:text-[#d4af37] transition-colors font-light tracking-wide">
              Services
            </a>
            <a href="#contact" className="text-[#d4af37] tracking-wide font-light">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Creative Hero - Split Layout */}
      <section className="min-h-screen flex items-center relative overflow-hidden" style={{ background: '#0a1628' }}>
        {/* Background decoration circles */}
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full opacity-10" style={{ background: '#d4af37' }}></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 rounded-full opacity-5" style={{ background: '#d4af37' }}></div>
        <div className="absolute top-1/3 left-1/4 w-32 h-32 rounded-full opacity-5"></div>

        <div className="max-w-7xl mx-auto px-8 w-full grid md:grid-cols-2 gap-16 items-center pt-24">
          {/* Left side - Text */}
          <div className="relative z-10">
            <div className="mb-8">
              <Crown className="w-16 h-16 text-[#d4af37] mb-6" />
            </div>
            <h1 className="text-7xl md:text-9xl font-light mb-8 leading-tight text-[#f5f5f5]">
              Where
              <br />
              Dreams
              <span className="block font-serif italic font-normal text-6xl md:text-8xl mt-4" style={{ color: '#d4af37' }}>
                Become
              </span>
              Reality
            </h1>
            <p className="text-xl leading-relaxed mb-12 max-w-xl" style={{ color: '#9caab8' }}>
              Your personal bridal boutique crafting unforgettable wedding experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="bg-[#d4af37] text-[#0a1628] px-8 py-4 font-light tracking-widest uppercase hover:bg-[#c9a227] transition-all duration-300 flex items-center gap-2"
              >
                Start Your Journey
                <Star className="w-4 h-4" />
              </a>
              <a
                href="#collections"
                className="border border-[#d4af37]/30 text-[#f5f5f5] px-8 py-4 font-light tracking-widest uppercase hover:border-[#d4af37] hover:text-[#d4af37] transition-all duration-300"
              >
                Explore Collections
              </a>
            </div>
          </div>

          {/* Right side - Creative design elements */}
          <div className="relative">
            <div className="w-full aspect-square bg-gradient-to-br from-[#0f1f3a] to-[#0a1628] rounded-full flex items-center justify-center relative">
              <img src="/logo.jpg" alt="Rei Bridal" className="w-48 h-48 object-contain absolute"/>
              <Waves className="w-32 h-32 text-[#d4af37]/20 absolute top-10 left-10 rotate-45" />
              <Heart className="w-24 h-24 text-[#d4af37]/15 absolute bottom-10 right-10" />
              <Crown className="w-20 h-20 text-[#d4af37]/10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>
          </div>
        </div>
      </section>

      {/* Creative About - Overlapping Cards */}
      <section id="about" className="py-32 relative overflow-hidden" style={{ background: '#0f1f3a' }}>
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-[#d4af37]"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 rounded-full bg-[#d4af37]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-8xl font-light mb-8 tracking-widest text-[#f5f5f5]">
              The <span className="font-serif italic font-normal" style={{ color: '#d4af37' }}>
                Story
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="p-8 border relative overflow-hidden" style={{ background: '#0a1628', borderColor: '#1e3a5f' }}>
              <div className="absolute top-0 right-0 w-20 h-20 bg-[#d4af37]/10 rounded-bl-full"></div>
              <Star className="w-8 h-8 text-[#d4af37] mb-6" />
              <p className="text-base leading-relaxed" style={{ color: '#9caab8' }}>
                Welcome to Rei Bridal, where every detail of your wedding journey is crafted with love and precision.
              </p>
            </div>

            <div className="p-8 border relative overflow-hidden md:transform md:translate-y-12" style={{ background: '#0a1628', borderColor: '#1e3a5f' }}>
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-[#d4af37]/10 rounded-tr-full"></div>
              <Crown className="w-8 h-8 text-[#d4af37] mb-6" />
              <p className="text-base leading-relaxed" style={{ color: '#9caab8' }}>
                Dedicated to helping you find the perfect gown that reflects your unique style.
              </p>
            </div>

            <div className="p-8 border relative overflow-hidden" style={{ background: '#0a1628', borderColor: '#1e3a5f' }}>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#d4af37]/5 rounded-full"></div>
              <Heart className="w-8 h-8 text-[#d4af37] mb-6" />
              <p className="text-base leading-relaxed" style={{ color: '#9caab8' }}>
                From intimate ceremonies to grand celebrations, I make your wedding dreams come true.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Collections - Diagonal Layout */}
      <section id="collections" className="py-32" style={{ background: '#0a1628' }}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-8xl font-light mb-8 tracking-widest text-[#f5f5f5]">
              Bespoke
              <span className="block font-serif italic font-normal text-5xl md:text-7xl mt-4" style={{ color: '#d4af37' }}>
                Collections
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-16">
            <div className="space-y-8">
              <div className="group p-10 border hover:scale-105 transition-all duration-500 relative overflow-hidden" style={{ background: '#0f1f3a', borderColor: '#1e3a5f' }}>
                <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/0 to-[#d4af37]/5 group-hover:from-[#d4af37]/5"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 border-2 rounded-full flex items-center justify-center mb-8 group-hover:border-[#d4af37]/50 transition-all" style={{ borderColor: '#d4af37' }}>
                    <Heart className="w-8 h-8 text-[#d4af37]" />
                  </div>
                  <h3 className="text-3xl font-light mb-6 tracking-wider text-[#f5f5f5]">
                    Classic
                    <span className="block font-serif italic font-normal text-2xl mt-2" style={{ color: '#d4af37' }}>Elegance</span>
                  </h3>
                  <p className="leading-relaxed mb-8 text-[#9caab8]">
                    Traditional ballgowns and timeless silhouettes that never go out of style
                  </p>
                  <a href="#contact" className="inline-flex items-center gap-2 font-light tracking-wide text-sm uppercase" style={{ color: '#d4af37' }}>
                    View Collection
                    <Star className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-8 md:pt-16">
              <div className="group p-10 border hover:scale-105 transition-all duration-500 relative overflow-hidden" style={{ background: '#0f1f3a', borderColor: '#1e3a5f' }}>
                <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/0 to-[#d4af37]/5 group-hover:from-[#d4af37]/5"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 border-2 rounded-full flex items-center justify-center mb-8 group-hover:border-[#d4af37]/50 transition-all" style={{ borderColor: '#d4af37' }}>
                    <Crown className="w-8 h-8 text-[#d4af37]" />
                  </div>
                  <h3 className="text-3xl font-light mb-6 tracking-wider text-[#f5f5f5]">
                    Modern
                    <span className="block font-serif italic font-normal text-2xl mt-2" style={{ color: '#d4af37' }}>Romance</span>
                  </h3>
                  <p className="leading-relaxed mb-8 text-[#9caab8]">
                    Contemporary designs with romantic touches for the modern bride
                  </p>
                  <a href="#contact" className="inline-flex items-center gap-2 font-light tracking-wide text-sm uppercase" style={{ color: '#d4af37' }}>
                    View Collection
                    <Star className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="group p-10 border hover:scale-105 transition-all duration-500 relative overflow-hidden" style={{ background: '#0f1f3a', borderColor: '#1e3a5f' }}>
                <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/0 to-[#d4af37]/5 group-hover:from-[#d4af37]/5"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 border-2 rounded-full flex items-center justify-center mb-8 group-hover:border-[#d4af37]/50 transition-all" style={{ borderColor: '#d4af37' }}>
                    <Sparkles className="w-8 h-8 text-[#d4af37]" />
                  </div>
                  <h3 className="text-3xl font-light mb-6 tracking-wider text-[#f5f5f5]">
                    Bohemian
                    <span className="block font-serif italic font-normal text-2xl mt-2" style={{ color: '#d4af37' }}>Chic</span>
                  </h3>
                  <p className="leading-relaxed mb-8 text-[#9caab8]">
                    Free-spirited designs for the unconventional bride who dances to their own rhythm
                  </p>
                  <a href="#contact" className="inline-flex items-center gap-2 font-light tracking-wide text-sm uppercase" style={{ color: '#d4af37' }}>
                    View Collection
                    <Star className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Services - Grid with overlays */}
      <section id="services" className="py-32" style={{ background: '#0f1f3a' }}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-8xl font-light mb-8 tracking-widest text-[#f5f5f5]">
              Complete
              <span className="block font-serif italic font-normal text-5xl md:text-7xl mt-4" style={{ color: '#d4af37' }}>
                Services
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="group relative p-8 border hover:-translate-y-2 transition-all duration-500" style={{ background: '#0a1628', borderColor: '#1e3a5f' }}>
              <div className="absolute inset-0 bg-[#d4af37]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 border-2 rounded-full flex items-center justify-center mb-6 group-hover:border-[#d4af37]/40 transition-all" style={{ borderColor: '#d4af37' }}>
                  <Heart className="w-8 h-8 text-[#d4af37]" />
                </div>
                <h3 className="text-lg font-light mb-3 tracking-widest uppercase text-[#f5f5f5]">Gowns</h3>
                <p className="text-sm text-[#9caab8]">Find your perfect dress</p>
              </div>
            </div>

            <div className="group relative p-8 border hover:-translate-y-2 transition-all duration-500" style={{ background: '#0a1628', borderColor: '#1e3a5f' }}>
              <div className="absolute inset-0 bg-[#d4af37]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 border-2 rounded-full flex items-center justify-center mb-6 group-hover:border-[#d4af37]/40 transition-all" style={{ borderColor: '#d4af37' }}>
                  <Star className="w-8 h-8 text-[#d4af37]" />
                </div>
                <h3 className="text-lg font-light mb-3 tracking-widest uppercase text-[#f5f5f5]">Alterations</h3>
                <p className="text-sm text-[#9caab8]">Perfect fit guaranteed</p>
              </div>
            </div>

            <div className="group relative p-8 border hover:-translate-y-2 transition-all duration-500" style={{ background: '#0a1628', borderColor: '#1e3a5f' }}>
              <div className="absolute inset-0 bg-[#d4af37]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 border-2 rounded-full flex items-center justify-center mb-6 group-hover:border-[#d4af37]/40 transition-all" style={{ borderColor: '#d4af37' }}>
                  <Sparkles className="w-8 h-8 text-[#d4af37]" />
                </div>
                <h3 className="text-lg font-light mb-3 tracking-widest uppercase text-[#f5f5f5]">Styling</h3>
                <p className="text-sm text-[#9caab8]">Complete wedding styling</p>
              </div>
            </div>

            <div className="group relative p-8 border hover:-translate-y-2 transition-all duration-500" style={{ background: '#0a1628', borderColor: '#1e3a5f' }}>
              <div className="absolute inset-0 bg-[#d4af37]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 border-2 rounded-full flex items-center justify-center mb-6 group-hover:border-[#d4af37]/40 transition-all" style={{ borderColor: '#d4af37' }}>
                  <Crown className="w-8 h-8 text-[#d4af37]" />
                </div>
                <h3 className="text-lg font-light mb-3 tracking-widest uppercase text-[#f5f5f5]">Planning</h3>
                <p className="text-sm text-[#9caab8]">Full event coordination</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Contact - Floating layout */}
      <section id="contact" className="py-32 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0a1628 0%, #0f1f3a 100%)' }}>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-[#d4af37]"></div>
        </div>

        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-8xl font-light mb-8 tracking-widest text-[#f5f5f5]">
              Let's
              <span className="block font-serif italic font-normal text-5xl md:text-7xl mt-4" style={{ color: '#d4af37' }}>
                Begin
              </span>
            </h2>
            <p className="text-xl text-[#9caab8]">Schedule your complimentary consultation</p>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-10">
              <div className="flex items-start gap-6 group">
                <div className="w-16 h-16 border-2 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#d4af37]/10 transition-all" style={{ borderColor: '#d4af37' }}>
                  <Mail className="w-6 h-6 text-[#d4af37]" />
                </div>
                <div>
                  <h4 className="text-sm font-light mb-2 tracking-widest uppercase text-[#f5f5f5]">Email</h4>
                  <p className="text-[#9caab8] font-light">hello@reibridal.com</p>
                  <p className="text-sm text-[#6b7c8f] mt-1">We respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-16 h-16 border-2 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#d4af37]/10 transition-all" style={{ borderColor: '#d4af37' }}>
                  <Phone className="w-6 h-6 text-[#d4af37]" />
                </div>
                <div>
                  <h4 className="text-sm font-light mb-2 tracking-widest uppercase text-[#f5f5f5]">Phone</h4>
                  <p className="text-[#9caab8] font-light">+353 (0) XX XXX XXXX</p>
                  <p className="text-sm text-[#6b7c8f] mt-1">Mon-Sat, 10am-7pm</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-16 h-16 border-2 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#d4af37]/10 transition-all" style={{ borderColor: '#d4af37' }}>
                  <MapPin className="w-6 h-6 text-[#d4af37]" />
                </div>
                <div>
                  <h4 className="text-sm font-light mb-2 tracking-widest uppercase text-[#f5f5f5]">Location</h4>
                  <p className="text-[#9caab8] font-light">12 Smith Street</p>
                  <p className="text-sm text-[#6b7c8f] mt-1">By appointment only</p>
                </div>
              </div>
            </div>

            <div className="p-10 border relative overflow-hidden" style={{ background: '#0a1628', borderColor: '#1e3a5f' }}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4af37]/5 rounded-bl-full"></div>
              <div className="relative z-10">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-light mb-3 tracking-widest uppercase text-[#f5f5f5]">Your Name</label>
                    <input
                      type="text"
                      className="w-full px-5 py-4 bg-[#0f1f3a] border text-[#f5f5f5]/90 focus:ring-1 focus:border-[#d4af37]/30 outline-none transition-all font-light"
                      style={{ borderColor: '#1e3a5f' }}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-light mb-3 tracking-widest uppercase text-[#f5f5f5]">Email</label>
                    <input
                      type="email"
                      className="w-full px-5 py-4 bg-[#0f1f3a] border text-[#f5f5f5]/90 focus:ring-1 focus:border-[#d4af37]/30 outline-none transition-all font-light"
                      style={{ borderColor: '#1e3a5f' }}
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-light mb-3 tracking-widest uppercase text-[#f5f5f5]">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-5 py-4 bg-[#0f1f3a] border text-[#f5f5f5]/90 focus:ring-1 focus:border-[#d4af37]/30 outline-none transition-all resize-none font-light"
                      style={{ borderColor: '#1e3a5f' }}
                      placeholder="Tell me about your dream wedding..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#d4af37] text-[#0a1628] py-5 font-light tracking-widest uppercase hover:bg-[#c9a227] transition-all duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Footer - Floating glass */}
      <footer className="py-16 relative" style={{ background: '#0a1628' }}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4 bg-[#0f1f3a]/50 px-6 py-4 rounded-3xl border border-[#d4af37]/20">
              <img src="/logo.jpg" alt="Rei Bridal" className="h-12 w-12 object-contain" />
              <div className="text-xl font-light tracking-wider text-[#f5f5f5]">
                <span style={{ color: '#d4af37' }}>REI</span> BRIDAL
              </div>
            </div>

            <div className="text-center md:text-left">
              <p className="mb-2 font-light tracking-wide text-sm" style={{ color: '#6b7c8f' }}>
                Luxury Bridal Boutique
              </p>
              <p className="text-sm font-light" style={{ color: '#4a5a6a' }}>
                © 2026 Rei Bridal. All rights reserved.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <a href="#contact" className="w-12 h-12 border-2 rounded-full flex items-center justify-center hover:bg-[#d4af37]/10 transition-all" style={{ borderColor: '#d4af37' }}>
                <Mail className="w-5 h-5 text-[#d4af37]" />
              </a>
              <a href="#contact" className="w-12 h-12 border-2 rounded-full flex items-center justify-center hover:bg-[#d4af37]/10 transition-all" style={{ borderColor: '#d4af37' }}>
                <Phone className="w-5 h-5 text-[#d4af37]" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
