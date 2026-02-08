import { Mail, Phone, MapPin, Sparkles, Star, Crown } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-[#0a0a0a]">
      {/* Navigation - Minimal transparent over hero */}
      <nav className="fixed top-0 left-0 right-0 z-50 py-6 bg-gradient-to-b from-[#0a0a0a]/80 to-transparent">
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img src="/logo.jpg" alt="Rei Bridal" className="h-10 w-10 object-contain" />
            <div className="text-xl font-light tracking-wider text-white">
              <span className="text-[#d4af37]">REI</span> BRIDAL
            </div>
          </div>
          <div className="hidden md:flex space-x-10">
            <a href="#about" className="text-white/80 hover:text-white transition-colors font-light tracking-wide">
              About
            </a>
            <a href="#collections" className="text-white/80 hover:text-white transition-colors font-light tracking-wide">
              Collections
            </a>
            <a href="#gallery" className="text-white/80 hover:text-white transition-colors font-light tracking-wide">
              Gallery
            </a>
            <a href="#contact" className="text-[#d4af37] tracking-wide font-light">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero - Full-screen photo */}
      <section className="relative min-h-screen flex items-center">
        {/* Hero Image - Grayscale */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=80"
            alt="Bride in wedding dress"
            className="w-full h-full object-cover"
            style={{ filter: 'grayscale(100%)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 pt-32">
          <div className="max-w-3xl">
            <div className="mb-8">
              <Crown className="w-12 h-12 text-[#d4af37]" />
            </div>
            <h1 className="text-6xl md:text-8xl font-light mb-8 leading-tight text-white">
              Where
              <br />
              <span className="font-serif italic font-normal text-5xl md:text-7xl" style={{ color: '#d4af37' }}>
                Dreams
              </span>
              <br />
              Begin
            </h1>
            <p className="text-xl leading-relaxed mb-12 text-white/90 font-light">
              Your personal bridal boutique crafting unforgettable wedding experiences.
              From finding the perfect gown to creating your dream ceremony.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="bg-[#d4af37] text-black px-8 py-4 font-light tracking-widest uppercase hover:bg-[#c9a227] transition-all duration-300"
              >
                Book Appointment
              </a>
              <a
                href="#collections"
                className="border border-white/30 text-white px-8 py-4 font-light tracking-widest uppercase hover:border-white/60 hover:bg-white/10 transition-all duration-300"
              >
                Explore Collections
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About - Split photo + text */}
      <section id="about" className="py-32 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left - Photo */}
            <div className="relative">
              <div className="aspect-[3/4]">
                <img
                  src="https://images.unsplash.com/photo-1511285560982-1351cdeb9821?auto=format&fit=crop&w=1200&q=80"
                  alt="Bride portrait"
                  className="w-full h-full object-cover"
                  style={{ filter: 'grayscale(100%)' }}
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-[#d4af37]/30 hidden md:block"></div>
            </div>

            {/* Right - Text */}
            <div>
              <h2 className="text-5xl md:text-6xl font-light mb-8 tracking-widest text-white">
                The <span className="font-serif italic font-normal" style={{ color: '#d4af37' }}>Story</span>
              </h2>
              <div className="space-y-6 mb-12">
                <p className="text-lg leading-relaxed text-white/80 font-light">
                  Welcome to Rei Bridal, where every detail of your wedding journey is crafted with love and precision.
                </p>
                <p className="text-lg leading-relaxed text-white/80 font-light">
                  Dedicated to helping you find the perfect gown that reflects your unique style and makes you feel like royalty on your big day.
                </p>
                <p className="text-lg leading-relaxed text-white/80 font-light">
                  From intimate ceremonies to grand celebrations, I make your wedding dreams come true.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-light text-[#d4af37] mb-2">
                    <Crown className="w-8 h-8 mx-auto mb-2" />
                    10+
                  </div>
                  <p className="text-sm text-white/60">Years Experience</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light text-[d4af37] mb-2">
                    <Star className="w-8 h-8 mx-auto mb-2" />
                    500+
                  </div>
                  <p className="text-sm text-white/60">Happy Brides</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light text-[d4af37] mb-2">
                    <Sparkles className="w-8 h-8 mx-auto mb-2" />
                    Infinite
                  </div>
                  <p className="text-sm text-white/60">Possibilities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collections - Photo cards */}
      <section id="collections" className="py-32 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-light mb-6 tracking-widest text-white">
              Bridal <span className="font-serif italic font-normal" style={{ color: '#d4af37' }}>Collections</span>
            </h2>
            <p className="text-xl text-white/70 font-light">Timeless designs for every style</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Collection 1 */}
            <div className="group relative overflow-hidden">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1505922593614-fc8d3110dd31?auto=format&fit=crop&w=800&q=80"
                  alt="Classic Elegance"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  style={{ filter: 'grayscale(100%)' }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-2xl font-light mb-4 text-white group-hover:text-[#d4af37] transition-colors">
                  Classic <span className="block font-serif italic font-normal text-xl">Elegance</span>
                </h3>
                <p className="text-sm text-white/70 mb-6 line-clamp-2">
                  Traditional ballgowns and timeless silhouettes that never go out of style
                </p>
                <a href="#contact" className="inline-flex items-center gap-2 text-white text-sm font-light tracking-wide uppercase group-hover:text-[#d4af37] transition-colors">
                  View Collection
                  <Star className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Collection 2 */}
            <div className="group relative overflow-hidden">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=800&q=80"
                  alt="Modern Romance"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  style={{ filter: 'grayscale(100%)' }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-2xl font-light mb-4 text-white group-hover:text-[#d4af37] transition-colors">
                  Modern <span className="block font-serif italic font-normal text-xl">Romance</span>
                </h3>
                <p className="text-sm text-white/70 mb-6 line-clamp-2">
                  Contemporary designs with romantic touches for the modern bride
                </p>
                <a href="#contact" className="inline-flex items-center gap-2 text-white text-sm font-light tracking-wide uppercase group-hover:text-[#d4af37] transition-colors">
                  View Collection
                  <Star className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Collection 3 */}
            <div className="group relative overflow-hidden">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=80"
                  alt="Bohemian Chic"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  style={{ filter: 'grayscale(100%)' }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-2xl font-light mb-4 text-white group-hover:text-[#d4af37] transition-colors">
                  Bohemian <span className="block font-serif italic font-normal text-xl">Chic</span>
                </h3>
                <p className="text-sm text-white/70 mb-6 line-clamp-2">
                  Free-spirited designs for the unconventional bride who dances to their own rhythm
                </p>
                <a href="#contact" className="inline-flex items-center gap-2 text-white text-sm font-light tracking-wide uppercase group-hover:text-[#d4af37] transition-colors">
                  View Collection
                  <Star className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services - Photo cards */}
      <section id="services" className="py-32 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-light mb-6 tracking-widest text-white">
              Bespoke <span className="font-serif italic font-normal" style={{ color: '#d4af37' }}>Services</span>
            </h2>
            <p className="text-xl text-white/70 font-light">Everything you need for your perfect day</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[{
              photo: "https://images.unsplash.com/photo-1520854221256-17451cc330e7?auto=format&fit=crop&w=600&q=80",
              icon: <Star className="w-8 h-8" />,
              title: "Gowns",
              desc: "Find your perfect dress"
            }, {
              photo: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=600&q=80",
              icon: <Crown className="w-8 h-8" />,
              title: "Custom Design",
              desc: "Unique bridal creations"
            }, {
              photo: "https://images.unsplash.com/photo-1478147427282-58a87a120781?auto=format&fit=crop&w=600&q=80",
              icon: <Sparkles className="w-8 h-8" />,
              title: "Styling",
              desc: "Complete wedding styling"
            }, {
              photo: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=600&q=80",
              icon: <Star className="w-8 h-8" />,
              title: "Planning",
              desc: "Full event coordination"
            }].map((service, index) => (
              <div key={index} className="group relative overflow-hidden">
                <div className="aspect-square">
                  <img
                    src={service.photo}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    style={{ filter: 'grayscale(100%)' }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-center items-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="text-[#d4af37] mb-4">{service.icon}</div>
                  <h3 className="text-lg font-light mb-2 tracking-widest uppercase text-white">{service.title}</h3>
                  <p className="text-sm text-white/70 text-center">{service.desc}</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm p-4 opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                  <h3 className="text-white font-light tracking-widest uppercase">{service.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact - Minimal */}
      <section id="contact" className="py-32 bg-[#0d0d0d]">
        <div className="max-w-5xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-light mb-6 tracking-widest text-white">
              Get In <span className="font-serif italic font-normal" style={{ color: '#d4af37' }}>Touch</span>
            </h2>
            <p className="text-xl text-white/70 font-light">Schedule your consultation</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-10">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-light mb-2 tracking-widest uppercase text-white">Email</h4>
                  <p className="text-white/80 font-light">hello@reibridal.com</p>
                  <p className="text-sm text-white/50 mt-1">We respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-light mb-2 tracking-widest uppercase text-white">Phone</h4>
                  <p className="text-white/80 font-light">+353 (0) XX XXX XXXX</p>
                  <p className="text-sm text-white/50 mt-1">Mon-Sat, 10am-7pm</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-light mb-2 tracking-widest uppercase text-white">Location</h4>
                  <p className="text-white/80 font-light">12 Smith Street</p>
                  <p className="text-sm text-white/50 mt-1">By appointment only</p>
                </div>
              </div>
            </div>

            <div className="border border-white/10">
              <form className="space-y-6 p-8">
                <div>
                  <label className="block text-sm font-light mb-3 tracking-widest uppercase text-white">Your Name</label>
                  <input
                    type="text"
                    className="w-full px-5 py-4 bg-black/50 border border-white/20 text-white/90 focus:ring-1 focus:border-[#d4af37]/50 outline-none transition-all font-light"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-light mb-3 tracking-widest uppercase text-white">Email</label>
                  <input
                    type="email"
                    className="w-full px-5 py-4 bg-black/50 border border-white/20 text-white/90 focus:ring-1 focus:border-[#d4af37]/50 outline-none transition-all font-light"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-light mb-3 tracking-widest uppercase text-white">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-5 py-4 bg-black/50 border border-white/20 text-white/90 focus:ring-1 focus:border-[#d4af37]/50 outline-none transition-all resize-none font-light"
                    placeholder="Tell me about your dream wedding..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#d4af37] text-black py-4 font-light tracking-widest uppercase hover:bg-[#c9a227] transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Minimal */}
      <footer className="py-12 border-t border-white/10 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <img src="/logo.jpg" alt="Rei Bridal" className="h-10 w-10 object-contain" />
              <div className="text-lg font-light tracking-wider text-white">
                <span className="text-[#d4af37]">REI</span> BRIDAL
              </div>
            </div>
            <div className="text-center md:text-left">
              <p className="text-sm text-white/60 font-light">© 2026 Rei Bridal. All rights reserved.</p>
            </div>
            <div className="flex items-center gap-4">
              <a href="#contact" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white/10 transition-all">
                <Mail className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
