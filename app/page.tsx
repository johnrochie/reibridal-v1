import { Mail, Phone, MapPin, Sparkles, Heart, Star } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-[#0a0a0a]/95 backdrop-blur-md shadow-sm z-50 border-b border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
          <div className="text-2xl font-light tracking-widest flex items-center gap-3">
            <Heart className="w-4 h-4 text-[#d4af37]" />
            <Heart className="w-4 h-4 text-[#d4af37]" />
            <Heart className="w-4 h-4 text-[#d4af37]" />
            <span className="text-[#f5f5f5] ml-3 tracking-widest">
              REI <span className="text-[#d4af37]">BRIDAL</span>
            </span>
          </div>
          <div className="hidden md:flex space-x-12">
            <a href="#about" className="text-[#f5f5f5]/90 hover:text-[#d4af37] transition-colors font-light tracking-wide">
              About
            </a>
            <a href="#collections" className="text-[#f5f5f5]/90 hover:text-[#d4af37] transition-colors font-light tracking-wide">
              Collections
            </a>
            <a href="#services" className="text-[#f5f5f5]/90 hover:text-[#d4af37] transition-colors font-light tracking-wide">
              Services
            </a>
            <a href="#contact" className="text-[#d4af37] tracking-wide font-light">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a]/80 to-[#0a0a0a] text-[#f5f5f5] pt-20">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <h1 className="text-6xl md:text-8xl font-light mb-8 leading-tight tracking-wider">
            Where Dreams
            <br />
            <span className="text-[#d4af37] font-serif italic font-normal">Meet Elegance</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400/80 mb-16 max-w-3xl mx-auto leading-relaxed font-light tracking-wide">
            Your personal bridal boutique crafting unforgettable wedding experiences.
            From finding the perfect gown to creating your dream ceremony.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
            <a
              href="#contact"
              className="bg-[#d4af37]/5 hover:bg-[#d4af37]/10 border border-[#d4af37]/20 text-[#d4af37] px-12 py-5 font-light tracking-widest uppercase transition-all duration-500 hover:shadow-[0_0_25px_rgba(212,175,55,0.15)]"
            >
              Book Appointment
            </a>
            <a
              href="#collections"
              className="border border-[#d4af37]/10 text-[#f5f5f5]/90 px-12 py-5 font-light tracking-widest uppercase hover:border-[#d4af37]/30 hover:bg-[#d4af37]/5 transition-all duration-500"
            >
              View Collections
            </a>
          </div>
        </div>
        {/* Elegant decorative elements */}
        <div className="absolute top-32 left-16 text-[#d4af37]/8">
          <Heart size={60} />
        </div>
        <div className="absolute bottom-32 right-16 text-[#d4af37]/8">
          <Sparkles size={50} />
        </div>
        <div className="absolute top-1/2 left-8 text-[#d4af37]/5">
          <Heart size={40} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-light mb-6 tracking-widest">
              About <span className="text-[#d4af37] font-serif italic font-normal">Rei</span>
            </h2>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent mx-auto my-10"></div>
            <p className="text-lg text-gray-400/70 max-w-3xl mx-auto font-light tracking-wide">
              Creating timeless elegance for your special day
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <p className="text-base text-gray-400/80 leading-loose font-light">
                Welcome to Rei Bridal, where every detail of your wedding journey is crafted with love and precision.
              </p>
              <p className="text-base text-gray-400/80 leading-loose font-light">
                I'm dedicated to helping you find the perfect gown that reflects your unique style and makes you feel like royalty on your big day.
              </p>
              <p className="text-base text-gray-400/80 leading-loose font-light">
                From intimate ceremonies to grand celebrations, my mission is to make your wedding dreams come true.
              </p>
            </div>
            <div className="bg-[#1a1a1a]/50 p-12 border border-[#d4af37]/10">
              <div className="flex items-center gap-3 mb-10">
                <Heart className="w-6 h-6 text-[#d4af37]" />
                <h3 className="text-2xl font-light text-[#c9a227] tracking-widest">
                  The Promise
                </h3>
              </div>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <Star className="w-4 h-4 text-[#d4af37] mt-1 flex-shrink-0" />
                  <span className="text-gray-400/90 font-light">Personalised gowns curated for your vision</span>
                </li>
                <li className="flex items-start gap-4">
                  <Star className="w-4 h-4 text-[#d4af37] mt-1 flex-shrink-0" />
                  <span className="text-gray-400/90 font-light">Expert alterations and fittings</span>
                </li>
                <li className="flex items-start gap-4">
                  <Star className="w-4 h-4 text-[#d4af37] mt-1 flex-shrink-0" />
                  <span className="text-gray-400/90 font-light">Styling advice from head to toe</span>
                </li>
                <li className="flex items-start gap-4">
                  <Star className="w-4 h-4 text-[#d4af37] mt-1 flex-shrink-0" />
                  <span className="text-gray-400/90 font-light">Stress-free wedding planning support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section id="collections" className="py-32 bg-[#1a1a1a]/30">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-light mb-6 tracking-widest">
              Bridal Collections
            </h2>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent mx-auto my-10"></div>
            <p className="text-lg text-gray-400/70 max-w-3xl mx-auto font-light tracking-wide">
              Timeless designs for every style and silhouette
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Collection 1 */}
            <div className="group bg-[#1a1a1a]/50 border border-[#d4af37]/5 p-10 hover:border-[#d4af37]/20 transition-all duration-500">
              <div className="w-14 h-14 bg-[#0a0a0a] border border-[#d4af37]/10 rounded-full flex items-center justify-center mb-8 group-hover:border-[#d4af37]/20 transition-all duration-500">
                <Heart className="text-[#d4af37] w-6 h-6" />
              </div>
              <h3 className="text-2xl font-light text-[#c9a227] mb-6 tracking-widest">
                Classic Elegance
              </h3>
              <p className="text-gray-400/70 leading-relaxed mb-8 font-light">
                Traditional ballgowns and timeless silhouettes that never go out of style
              </p>
              <a href="#contact" className="inline-flex items-center gap-2 text-[#d4af37]/80 hover:text-[#d4af37] transition-colors tracking-wide text-sm font-light uppercase">
                View Collection
                <Star className="w-3 h-3" />
              </a>
            </div>

            {/* Collection 2 */}
            <div className="group bg-[#1a1a1a]/50 border border-[#d4af37]/5 p-10 hover:border-[#d4af37]/20 transition-all duration-500">
              <div className="w-14 h-14 bg-[#0a0a0a] border border-[#d4af37]/10 rounded-full flex items-center justify-center mb-8 group-hover:border-[#d4af37]/20 transition-all duration-500">
                <Sparkles className="text-[#d4af37] w-6 h-6" />
              </div>
              <h3 className="text-2xl font-light text-[#c9a227] mb-6 tracking-widest">
                Modern Romance
              </h3>
              <p className="text-gray-400/70 leading-relaxed mb-8 font-light">
                Contemporary designs with romantic touches for the modern bride
              </p>
              <a href="#contact" className="inline-flex items-center gap-2 text-[#d4af37]/80 hover:text-[#d4af37] transition-colors tracking-wide text-sm font-light uppercase">
                View Collection
                <Star className="w-3 h-3" />
              </a>
            </div>

            {/* Collection 3 */}
            <div className="group bg-[#1a1a1a]/50 border border-[#d4af37]/5 p-10 hover:border-[#d4af37]/20 transition-all duration-500">
              <div className="w-14 h-14 bg-[#0a0a0a] border border-[#d4af37]/10 rounded-full flex items-center justify-center mb-8 group-hover:border-[#d4af37]/20 transition-all duration-500">
                <Star className="text-[#d4af37] w-6 h-6" />
              </div>
              <h3 className="text-2xl font-light text-[#c9a227] mb-6 tracking-widest">
                Bohemian Chic
              </h3>
              <p className="text-gray-400/70 leading-relaxed mb-8 font-light">
                Free-spirited designs for the unconventional bride who dances to their own rhythm
              </p>
              <a href="#contact" className="inline-flex items-center gap-2 text-[#d4af37]/80 hover:text-[#d4af37] transition-colors tracking-wide text-sm font-light uppercase">
                View Collection
                <Star className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-light mb-6 tracking-widest">
              Bespoke Services
            </h2>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent mx-auto my-10"></div>
            <p className="text-lg text-gray-400/70 max-w-3xl mx-auto font-light tracking-wide">
              Everything you need for your perfect wedding day
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 border border-[#d4af37]/5 hover:border-[#d4af37]/15 transition-all duration-500">
              <div className="w-14 h-14 bg-[#1a1a1a]/50 border border-[#d4af37]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="text-[#d4af37] w-6 h-6" />
              </div>
              <h3 className="text-base font-light text-[#c9a227] mb-3 tracking-widest uppercase">Gowns & Attire</h3>
              <p className="text-gray-400/70 text-sm font-light">
                Find your perfect dress
              </p>
            </div>

            <div className="text-center p-8 border border-[#d4af37]/5 hover:border-[#d4af37]/15 transition-all duration-500">
              <div className="w-14 h-14 bg-[#1a1a1a]/50 border border-[#d4af37]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="text-[#d4af37] w-6 h-6" />
              </div>
              <h3 className="text-base font-light text-[#c9a227] mb-3 tracking-widest uppercase">Alterations</h3>
              <p className="text-gray-400/70 text-sm font-light">
                Perfect fit guaranteed
              </p>
            </div>

            <div className="text-center p-8 border border-[#d4af37]/5 hover:border-[#d4af37]/15 transition-all duration-500">
              <div className="w-14 h-14 bg-[#1a1a1a]/50 border border-[#d4af37]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="text-[#d4af37] w-6 h-6" />
              </div>
              <h3 className="text-base font-light text-[#c9a227] mb-3 tracking-widest uppercase">Styling</h3>
              <p className="text-gray-400/70 text-sm font-light">
                Complete wedding styling
              </p>
            </div>

            <div className="text-center p-8 border border-[#d4af37]/5 hover:border-[#d4af37]/15 transition-all duration-500">
              <div className="w-14 h-14 bg-[#1a1a1a]/50 border border-[#d4af37]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="text-[#d4af37] w-6 h-6" />
              </div>
              <h3 className="text-base font-light text-[#c9a227] mb-3 tracking-widest uppercase">Planning</h3>
              <p className="text-gray-400/70 text-sm font-light">
                Full event coordination
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a]/30 to-[#0a0a0a]">
        <div className="max-w-5xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-light mb-6 tracking-widest">
              Let's Create
              <br />
              <span className="text-[#d4af37] font-serif italic font-normal">Your Story</span>
            </h2>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent mx-auto my-10"></div>
            <p className="text-lg text-gray-400/70 max-w-3xl mx-auto font-light tracking-wide">
              Schedule your complimentary consultation today
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-light text-[#c9a227] mb-12 tracking-widest">
                Get In Touch
              </h3>
              <div className="space-y-10">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-[#1a1a1a]/50 border border-[#d4af37]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-[#d4af37] w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-light text-[#f5f5f5]/90 mb-2 text-sm tracking-widest uppercase">Email</h4>
                    <p className="text-gray-400/80 font-light">hello@reibridal.com</p>
                    <p className="text-sm text-gray-500 font-light mt-1">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-[#1a1a1a]/50 border border-[#d4af37]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-[#d4af37] w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-light text-[#f5f5f5]/90 mb-2 text-sm tracking-widest uppercase">Phone</h4>
                    <p className="text-gray-400/80 font-light">+353 (0) XX XXX XXXX</p>
                    <p className="text-sm text-gray-500 font-light mt-1">Mon-Sat, 10am-7pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-[#1a1a1a]/50 border border-[#d4af37]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-[#d4af37] w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-light text-[#f5f5f5]/90 mb-2 text-sm tracking-widest uppercase">Location</h4>
                    <p className="text-gray-400/80 font-light">12 Smith Street</p>
                    <p className="text-sm text-gray-500 font-light mt-1">Available for consultations by appointment only</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[#1a1a1a]/50 border border-[#d4af37]/10 p-10">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-light text-[#f5f5f5]/90 mb-3 tracking-widest uppercase">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-5 py-4 bg-[#0a0a0a] border border-[#d4af37]/15 text-[#f5f5f5]/90 focus:ring-1 focus:ring-[#d4af37]/30 focus:border-[#d4af37]/30 outline-none transition-all font-light"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-light text-[#f5f5f5]/90 mb-3 tracking-widest uppercase">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-5 py-4 bg-[#0a0a0a] border border-[#d4af37]/15 text-[#f5f5f5]/90 focus:ring-1 focus:ring-[#d4af37]/30 focus:border-[#d4af37]/30 outline-none transition-all font-light"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-light text-[#f5f5f5]/90 mb-3 tracking-widest uppercase">
                    Tell Me About Your Dream Wedding
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-5 py-4 bg-[#0a0a0a] border border-[#d4af37]/15 text-[#f5f5f5]/90 focus:ring-1 focus:ring-[#d4af37]/30 focus:border-[#d4af37]/30 outline-none transition-all resize-none font-light"
                    placeholder="When is your big day? What style of dress appeals to you?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#d4af37]/10 hover:bg-[#d4af37]/15 border border-[#d4af37]/20 text-[#d4af37] py-5 font-light tracking-widest uppercase transition-all duration-500 hover:shadow-[0_0_20px_rgba(212,175,55,0.1)]"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] border-t border-[#d4af37]/10 py-16">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Heart className="w-4 h-4 text-[#d4af37]" />
            <Heart className="w-4 h-4 text-[#d4af37]" />
            <Heart className="w-4 h-4 text-[#d4af37]" />
            <span className="text-xl font-light tracking-widest text-[#f5f5f5] ml-3">
              REI <span className="text-[#d4af37]">BRIDAL</span>
            </span>
          </div>
          <p className="text-gray-500/70 mb-8 font-light tracking-wide text-sm">
            Luxury Bridal Boutique
          </p>
          <p className="text-gray-600/50 text-sm font-light">
            © 2026 Rei Bridal. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
