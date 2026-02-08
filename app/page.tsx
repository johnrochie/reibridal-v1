import { Mail, Phone, MapPin, Sparkles, Heart, Star, Flower2 } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const logoColors = {
    primary: '#d4a5a5',
    secondary: '#e8c4c4',
    accent: '#b8868b',
    light: '#faf5f6',
    text: '#2d2d2d',
    muted: '#6b6b6b'
  };

  return (
    <div className="min-h-screen font-sans bg-[#faf5f6]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50 border-b border-[#e8c4c4]/20">
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img src="/logo.jpg" alt="Rei Bridal" className="h-14 w-14 object-contain" />
            <div className="text-2xl font-light tracking-wider text-[#2d2d2d]">
              REI <span className="text-[#b8868b]">BRIDAL</span>
            </div>
          </div>
          <div className="hidden md:flex space-x-10">
            <a href="#about" className="text-[#2d2d2d]/80 hover:text-[#b8868b] transition-colors font-light tracking-wide">
              About
            </a>
            <a href="#collections" className="text-[#2d2d2d]/80 hover:text-[#b8868b] transition-colors font-light tracking-wide">
              Collections
            </a>
            <a href="#services" className="text-[#2d2d2d]/80 hover:text-[#b8868b] transition-colors font-light tracking-wide">
              Services
            </a>
            <a href="#contact" className="text-[#b8868b] tracking-wide font-light">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#faf5f6] via-[#f8e1e3]/30 to-[#faf5f6] pt-20">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <div className="mb-8">
            <img src="/logo.jpg" alt="Rei Bridal" className="h-32 w-32 mx-auto object-contain mb-8" />
          </div>
          <h1 className="text-6xl md:text-8xl font-light mb-6 leading-tight tracking-wider text-[#2d2d2d]">
            Where Dreams
            <br />
            <span className="text-[#b8868b] font-serif italic font-normal">Meet Elegance</span>
          </h1>
          <p className="text-lg md:text-xl text-[#6b6b6b]/90 mb-12 max-w-3xl mx-auto leading-relaxed font-light tracking-wide">
            Your personal bridal boutique crafting unforgettable wedding experiences.
            From finding the perfect gown to creating your dream ceremony.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center mb-16">
            <a
              href="#contact"
              className="bg-gradient-to-r from-[#d4a5a5]/10 to-[#e8c4c4]/10 border border-[#b8868b]/20 text-[#b8868b] px-10 py-4 font-light tracking-widest uppercase transition-all duration-500 hover:shadow-[0_0_20px_rgba(184,134,139,0.2)] hover:border-[#b8868b]/40"
            >
              Book Appointment
            </a>
            <a
              href="#collections"
              className="border border-[#e8c4c4]/30 text-[#2d2d2d]/90 px-10 py-4 font-light tracking-widest uppercase hover:border-[#b8868b]/40 hover:bg-[#b8868b]/5 transition-all duration-500"
            >
              View Collections
            </a>
          </div>
        </div>

        {/* Elegant decorative elements */}
        <div className="absolute top-32 left-16 text-[#e8c4c4]/20">
          <Flower2 size={60} />
        </div>
        <div className="absolute bottom-32 right-16 text-[#e8c4c4]/20">
          <Sparkles size={50} />
        </div>
        <div className="absolute top-1/2 left-12 text-[#d4a5a5]/10">
          <Heart size={40} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-light mb-6 tracking-widest text-[#2d2d2d]">
              About <span className="text-[#b8868b] font-serif italic font-normal">Rei</span>
            </h2>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#b8868b]/40 to-transparent mx-auto my-10"></div>
            <p className="text-lg text-[#6b6b6b]/80 max-w-3xl mx-auto font-light tracking-wide">
              Creating timeless elegance for your special day
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <p className="text-base text-[#6b6b6b]/90 leading-loose font-light">
                Welcome to Rei Bridal, where every detail of your wedding journey is crafted with love and precision.
              </p>
              <p className="text-base text-[#6b6b6b]/90 leading-loose font-light">
                I'm dedicated to helping you find the perfect gown that reflects your unique style and makes you feel like royalty on your big day.
              </p>
              <p className="text-base text-[#6b6b6b]/90 leading-loose font-light">
                From intimate ceremonies to grand celebrations, my mission is to make your wedding dreams come true.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#f8e1e3]/20 to-[#faf5f6] p-12 border border-[#b8868b]/10">
              <div className="flex items-center gap-3 mb-10">
                <Heart className="w-6 h-6 text-[#b8868b]" />
                <h3 className="text-2xl font-light text-[#b8868b] tracking-widest">
                  The Promise
                </h3>
              </div>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <Star className="w-4 h-4 text-[#b8868b] mt-1 flex-shrink-0" />
                  <span className="text-[#6b6b6b]/90 font-light">Personalised gowns curated for your vision</span>
                </li>
                <li className="flex items-start gap-4">
                  <Star className="w-4 h-4 text-[#b8868b] mt-1 flex-shrink-0" />
                  <span className="text-[#6b6b6b]/90 font-light">Expert alterations and fittings</span>
                </li>
                <li className="flex items-start gap-4">
                  <Star className="w-4 h-4 text-[#b8868b] mt-1 flex-shrink-0" />
                  <span className="text-[#6b6b6b]/90 font-light">Styling advice from head to toe</span>
                </li>
                <li className="flex items-start gap-4">
                  <Star className="w-4 h-4 text-[#b8868b] mt-1 flex-shrink-0" />
                  <span className="text-[#6b6b6b]/90 font-light">Stress-free wedding planning support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section id="collections" className="py-24 bg-[#faf5f6]">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-light mb-6 tracking-widest text-[#2d2d2d]">
              Bridal Collections
            </h2>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#b8868b]/40 to-transparent mx-auto my-10"></div>
            <p className="text-lg text-[#6b6b6b]/80 max-w-3xl mx-auto font-light tracking-wide">
              Timeless designs for every style and silhouette
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="group bg-white border border-[#b8868b]/10 p-10 hover:border-[#b8868b]/30 transition-all duration-500">
              <div className="w-14 h-14 bg-gradient-to-br from-[#f8e1e3]/30 to-white border border-[#b8868b]/15 rounded-full flex items-center justify-center mb-8 group-hover:border-[#b8868b]/30 transition-all duration-500">
                <Heart className="text-[#b8868b] w-6 h-6" />
              </div>
              <h3 className="text-2xl font-light text-[#b8868b] mb-6 tracking-widest">
                Classic Elegance
              </h3>
              <p className="text-[#6b6b6b]/80 leading-relaxed mb-8 font-light">
                Traditional ballgowns and timeless silhouettes that never go out of style
              </p>
              <a href="#contact" className="inline-flex items-center gap-2 text-[#b8868b]/80 hover:text-[#b8868b] transition-colors tracking-wide text-sm font-light uppercase">
                View Collection
                <Star className="w-3 h-3" />
              </a>
            </div>

            <div className="group bg-white border border-[#b8868b]/10 p-10 hover:border-[#b8868b]/30 transition-all duration-500">
              <div className="w-14 h-14 bg-gradient-to-br from-[#f8e1e3]/30 to-white border border-[#b8868b]/15 rounded-full flex items-center justify-center mb-8 group-hover:border-[#b8868b]/30 transition-all duration-500">
                <Sparkles className="text-[#b8868b] w-6 h-6" />
              </div>
              <h3 className="text-2xl font-light text-[#b8868b] mb-6 tracking-widest">
                Modern Romance
              </h3>
              <p className="text-[#6b6b6b]/80 leading-relaxed mb-8 font-light">
                Contemporary designs with romantic touches for the modern bride
              </p>
              <a href="#contact" className="inline-flex items-center gap-2 text-[#b8868b]/80 hover:text-[#b8868b] transition-colors tracking-wide text-sm font-light uppercase">
                View Collection
                <Star className="w-3 h-3" />
              </a>
            </div>

            <div className="group bg-white border border-[#b8868b]/10 p-10 hover:border-[#b8868b]/30 transition-all duration-500">
              <div className="w-14 h-14 bg-gradient-to-br from-[#f8e1e3]/30 to-white border border-[#b8868b]/15 rounded-full flex items-center justify-center mb-8 group-hover:border-[#b8868b]/30 transition-all duration-500">
                <Flower2 className="text-[#b8868b] w-6 h-6" />
              </div>
              <h3 className="text-2xl font-light text-[#b8868b] mb-6 tracking-widest">
                Bohemian Chic
              </h3>
              <p className="text-[#6b6b6b]/80 leading-relaxed mb-8 font-light">
                Free-spirited designs for the unconventional bride who dances to their own rhythm
              </p>
              <a href="#contact" className="inline-flex items-center gap-2 text-[#b8868b]/80 hover:text-[#b8868b] transition-colors tracking-wide text-sm font-light uppercase">
                View Collection
                <Star className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-light mb-6 tracking-widest text-[#2d2d2d]">
              Bespoke Services
            </h2>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#b8868b]/40 to-transparent mx-auto my-10"></div>
            <p className="text-lg text-[#6b6b6b]/80 max-w-3xl mx-auto font-light tracking-wide">
              Everything you need for your perfect wedding day
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 border border-[#b8868b]/10 hover:border-[#b8868b]/20 transition-all duration-500 bg-[#faf5f6]/50">
              <div className="w-14 h-14 bg-gradient-to-br from-[#f8e1e3]/30 to-white border border-[#b8868b]/15 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="text-[#b8868b] w-6 h-6" />
              </div>
              <h3 className="text-base font-light text-[#b8868b] mb-3 tracking-widest uppercase">Gowns & Attire</h3>
              <p className="text-[#6b6b6b]/80 text-sm font-light">
                Find your perfect dress
              </p>
            </div>

            <div className="text-center p-8 border border-[#b8868b]/10 hover:border-[#b8868b]/20 transition-all duration-500 bg-[#faf5f6]/50">
              <div className="w-14 h-14 bg-gradient-to-br from-[#f8e1e3]/30 to-white border border-[#b8868b]/15 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="text-[#b8868b] w-6 h-6" />
              </div>
              <h3 className="text-base font-light text-[#b8868b] mb-3 tracking-widest uppercase">Alterations</h3>
              <p className="text-[#6b6b6b]/80 text-sm font-light">
                Perfect fit guaranteed
              </p>
            </div>

            <div className="text-center p-8 border border-[#b8868b]/10 hover:border-[#b8868b]/20 transition-all duration-500 bg-[#faf5f6]/50">
              <div className="w-14 h-14 bg-gradient-to-br from-[#f8e1e3]/30 to-white border border-[#b8868b]/15 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="text-[#b8868b] w-6 h-6" />
              </div>
              <h3 className="text-base font-light text-[#b8868b] mb-3 tracking-widest uppercase">Styling</h3>
              <p className="text-[#6b6b6b]/80 text-sm font-light">
                Complete wedding styling
              </p>
            </div>

            <div className="text-center p-8 border border-[#b8868b]/10 hover:border-[#b8868b]/20 transition-all duration-500 bg-[#faf5f6]/50">
              <div className="w-14 h-14 bg-gradient-to-br from-[#f8e1e3]/30 to-white border border-[#b8868b]/15 rounded-full flex items-center justify-center mx-auto mb-6">
                <Flower2 className="text-[#b8868b] w-6 h-6" />
              </div>
              <h3 className="text-base font-light text-[#b8868b] mb-3 tracking-widest uppercase">Planning</h3>
              <p className="text-[#6b6b6b]/80 text-sm font-light">
                Full event coordination
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-b from-[#faf5f6] via-[#f8e1e3]/20 to-[#faf5f6]">
        <div className="max-w-5xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-light mb-6 tracking-widest text-[#2d2d2d]">
              Let's Create
              <br />
              <span className="text-[#b8868b] font-serif italic font-normal">Your Story</span>
            </h2>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#b8868b]/40 to-transparent mx-auto my-10"></div>
            <p className="text-lg text-[#6b6b6b]/80 max-w-3xl mx-auto font-light tracking-wide">
              Schedule your complimentary consultation today
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-light text-[#b8868b] mb-12 tracking-widest">
                Get In Touch
              </h3>
              <div className="space-y-10">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#f8e1e3]/30 to-white border border-[#b8868b]/15 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-[#b8868b] w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-light text-[#2d2d2d]/90 mb-2 text-sm tracking-widest uppercase">Email</h4>
                    <p className="text-[#6b6b6b]/90 font-light">hello@reibridal.com</p>
                    <p className="text-sm text-[#6b6b6b]/60 font-light mt-1">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#f8e1e3]/30 to-white border border-[#b8868b]/15 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-[#b8868b] w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-light text-[#2d2d2d]/90 mb-2 text-sm tracking-widest uppercase">Phone</h4>
                    <p className="text-[#6b6b6b]/90 font-light">+353 (0) XX XXX XXXX</p>
                    <p className="text-sm text-[#6b6b6b]/60 font-light mt-1">Mon-Sat, 10am-7pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#f8e1e3]/30 to-white border border-[#b8868b]/15 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-[#b8868b] w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-light text-[#2d2d2d]/90 mb-2 text-sm tracking-widest uppercase">Location</h4>
                    <p className="text-[#6b6b6b]/90 font-light">12 Smith Street</p>
                    <p className="text-sm text-[#6b6b6b]/60 font-light mt-1">Available for consultations by appointment only</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white border border-[#b8868b]/10 p-10">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-light text-[#2d2d2d]/90 mb-3 tracking-widest uppercase">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-5 py-4 bg-[#faf5f6] border border-[#b8868b]/15 text-[#2d2d2d]/90 focus:ring-1 focus:ring-[#b8868b]/30 focus:border-[#b8868b]/30 outline-none transition-all font-light"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-light text-[#2d2d2d]/90 mb-3 tracking-widest uppercase">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-5 py-4 bg-[#faf5f6] border border-[#b8868b]/15 text-[#2d2d2d]/90 focus:ring-1 focus:ring-[#b8868b]/30 focus:border-[#b8868b]/30 outline-none transition-all font-light"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-light text-[#2d2d2d]/90 mb-3 tracking-widest uppercase">
                    Tell Me About Your Dream Wedding
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-5 py-4 bg-[#faf5f6] border border-[#b8868b]/15 text-[#2d2d2d]/90 focus:ring-1 focus:ring-[#b8868b]/30 focus:border-[#b8868b]/30 outline-none transition-all resize-none font-light"
                    placeholder="When is your big day? What style of dress appeals to you?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#b8868b]/10 to-[#e8c4c4]/10 border border-[#b8868b]/20 text-[#b8868b] py-5 font-light tracking-widest uppercase transition-all duration-500 hover:shadow-[0_0_15px_rgba(184,134,139,0.15)] hover:border-[#b8868b]/30"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#f8e1e3]/30 border-t border-[#b8868b]/10 py-16">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <img src="/logo.jpg" alt="Rei Bridal" className="h-12 w-12 object-contain" />
            <div className="text-xl font-light tracking-widest text-[#2d2d2d]">
              REI <span className="text-[#b8868b]">BRIDAL</span>
            </div>
          </div>
          <p className="text-[#6b6b6b]/70 mb-8 font-light tracking-wide text-sm">
            Luxury Bridal Boutique
          </p>
          <p className="text-[#6b6b6b]/50 text-sm font-light">
            © 2026 Rei Bridal. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
