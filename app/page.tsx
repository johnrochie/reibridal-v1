import { Mail, Phone, MapPin, Sparkles, Heart, Star } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-[#0a0a0a]/95 backdrop-blur-sm shadow-sm z-50 border-b border-[#2a2a2a]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tight flex items-center gap-2">
            <Heart className="w-7 h-7 text-[#d4af37]" />
            <span className="text-[#f5f5f5]">
              Rei <span className="text-[#d4af37]">Bridal</span>
            </span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-[#f5f5f5] hover:text-[#d4af37] transition-colors font-medium">
              About
            </a>
            <a href="#collections" className="text-[#f5f5f5] hover:text-[#d4af37] transition-colors font-medium">
              Collections
            </a>
            <a href="#services" className="text-[#f5f5f5] hover:text-[#d4af37] transition-colors font-medium">
              Services
            </a>
            <a href="#contact" className="text-[#d4af37] transition-colors font-semibold">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0a0a0a] via-[#111111] to-[#0a0a0a] text-[#f5f5f5] pt-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-wide">
            Where Dreams
            <br />
            <span className="text-[#d4af37] italic">Meet Elegance</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            Your personal bridal boutique crafting unforgettable wedding experiences.
            From finding the perfect gown to creating your dream ceremony.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-gradient-to-r from-[#d4af37] via-[#c9a227] to-[#b8860b] text-[#0a0a0a] px-10 py-4 rounded-none font-semibold tracking-wide uppercase hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all hover:-translate-y-1"
            >
              Book Appointment
            </a>
            <a
              href="#collections"
              className="border border border-[#d4af37] text-[#d4af37] px-10 py-4 rounded-none font-semibold hover:bg-[#d4af37] hover:text-[#0a0a0a] transition-all"
            >
              View Collections
            </a>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 text-[#d4af37]/10">
          <Heart size={100} />
        </div>
        <div className="absolute bottom-20 right-10 text-[#d4af37]/10">
          <Sparkles size={80} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-[#111]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#f5f5f5] mb-4 tracking-wide">
              About <span className="text-[#d4af37]">Rei</span>
            </h2>
            <div className="w-32 h-px bg-gradient-to-r from-[#d4af37] via-[#c9a227] to-transparent mx-auto mb-6"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Creating timeless elegance for your special day
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Welcome to Rei Bridal, where every detail of your wedding journey is crafted with love and precision.
              </p>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                I'm dedicated to helping you find the perfect gown that reflects your unique style and makes you feel like royalty on your big day.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                From intimate ceremonies to grand celebrations, my mission is to make your wedding dreams come true.
              </p>
            </div>
            <div className="bg-[#151515] p-8 border border-[#2a2a2a]">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-8 h-8 text-[#d4af37]" />
                <h3 className="text-2xl font-bold text-[#c9a227]">
                  The Promise
                </h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-[#d4af37] mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Personalised gowns curated for your vision</span>
                </li>
                <li className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-[#d4af37] mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Expert alterations and fittings</span>
                </li>
                <li className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-[#d4af37] mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Styling advice from head to toe</span>
                </li>
                <li className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-[#d4af37] mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Stress-free wedding planning support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section id="collections" className="py-24 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#f5f5f5] mb-4 tracking-wide">
              Bridal Collections
            </h2>
            <div className="w-32 h-px bg-gradient-to-r from-[#d4af37] via-[#c9a227] to-transparent mx-auto mb-6"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Timeless designs for every style and silhouette
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Collection 1 */}
            <div className="group bg-[#151515] border border-[#2a2a2a2a2a2a rounded-sm p-8 hover:border-[#d4af37]/50 transition-all">
              <div className="w-16 h-16 bg-[#0a0a0a] border border-[#2a2a2a2a2a2a rounded-full flex items-center justify-center mb-6">
                <Heart className="text-[#d4af37] w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold text-[#c9a227] mb-4 tracking-wide">
                Classic Elegance
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Traditional ballgowns and timeless silhouettes that never go out of style
              </p>
              <a href="#contact" className="inline-flex items-center gap-2 text-[#d4af37] hover:text-[#f4d03f] transition-colors font-medium">
                View Collection
                <Star className="w-4 h-4" />
              </a>
            </div>

            {/* Collection 2 */}
            <div className="group bg-[#151515] border border-[#2a2a2a2a2a2a rounded-sm p-8 hover:border-[#d4af37]/50 transition-all">
              <div className="w-16 h-16 bg-[#0a0a0a] border border-[#2a2a2a2a2a2a rounded-full flex items-center justify-center mb-6">
                <Sparkles className="text-[#d4af37] w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold text-[#c9a227] mb-4 tracking-wide">
                Modern Romance
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Contemporary designs with romantic touches for the modern bride
              </p>
              <a href="#contact" className="inline-flex items-center gap-2 text-[#d4af37] hover:text-[#f4d03f] transition-colors font-medium">
                View Collection
                <Star className="w-4 h-4" />
              </a>
            </div>

            {/* Collection 3 */}
            <div className="group bg-[#151515] border border-[#2a2a2a2a2a2a rounded-sm p-8 hover:border-[#d4af37]/50 transition-all">
              <div className="w-16 h-16 bg-[#0a0a0a] border border-[#2a2a2a2a2a2a rounded-full flex items-center justify-center mb-6">
                <Star className="text-[#d4af37] w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold text-[#c9a227] mb-4 tracking-wide">
                Bohemian Chic
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Free-spirited designs for the unconventional bride who dances to their own rhythm
              </p>
              <a href="#contact" className="inline-flex items-center gap-2 text-[#d4af37] hover:text-[#f4d03f] transition-colors font-medium">
                View Collection
                <Star className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-[#111]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#f5f5f5] mb-4 tracking-wide">
              Bespoke Services
            </h2>
            <div className="w-32 h-px bg-gradient-to-r from-[#d4af37] via-[#c9a227] to-transparent mx-auto mb-6"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Everything you need for your perfect wedding day
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 border border-[#2a2a2a2a2a2a">
              <div className="w-12 h-12 bg-[#0a0a0a] border border-[#2a2a2a2a2a2a rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-[#d4af37] w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-[#c9a227] mb-2">Gowns & Attire</h3>
              <p className="text-gray-400 text-sm">
                Find your perfect dress
              </p>
            </div>

            <div className="text-center p-6 border border-[#2a2a2a2a2a2a">
              <div className="w-12 h-12 bg-[#0a0a0a] border border-[#2a2a2a2a2a2a rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-[#d4af37] w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-[#c9a227] mb-2">Alterations</h3>
              <p className="text-gray-400 text-sm">
                Perfect fit guaranteed
              </p>
            </div>

            <div className="text-center p-6 border border-[#2a2a2a2a2a2a">
              <div className="w-12 h-12 bg-[#0a0a0a] border border-[#2a2a2a2a2a2a rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="text-[#d4af37] w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-[#c9a227] mb-2">Styling</h3>
              <p className="text-gray-400 text-sm">
                Complete wedding styling
              </p>
            </div>

            <div className="text-center p-6 border border-[#2a2a2a2a2a2a">
              <div className="w-12 h-12 bg-[#0a0a0a] border border-[#2a2a2a2a2a2a rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-[#d4af37] w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-[#c9a227] mb-2">Planning</h3>
              <p className="text-gray-400 text-sm">
                Full event coordination
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-b from-[#0a0a0a] to-[#111]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#f5f5f5] mb-4 tracking-wide">
              Let's Create
              <br />
              <span className="text-[#d4af37] italic">Your Story</span>
            </h2>
            <div className="w-32 h-px bg-gradient-to-r from-[#d4af37] via-[#c9a227] to-transparent mx-auto mb-6"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Schedule your complimentary consultation today
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold text-[#c9a227] mb-8 tracking-wide">
                Get In Touch
              </h3>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0a0a0a] border border-[#2a2a2a2a2a2a rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-[#d4af37] w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#f5f5f5] mb-1">Email</h4>
                    <p className="text-gray-400">hello@reibridal.com</p>
                    <p className="text-sm text-gray-500">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0a0a0a] border border-[#2a2a2a2a2a2a rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-[#d4af37] w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#f5f5f5] mb-1">Phone</h4>
                    <p className="text-gray-400">+353 (0) XX XXX XXXX</p>
                    <p className="text-sm text-gray-500">Mon-Sat, 10am-7pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0a0a0a] border border-[#2a2a2a2a2a2a rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-[#d4af37] w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#f5f5f5] mb-1">Location</h4>
                    <p className="text-gray-400">12 Smith Street</p>
                    <p className="text-sm text-gray-500">Available for consultations by appointment only</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[#151515] border border-[#2a2a2a] p-8">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-[#f5f5f5] mb-2 tracking-wide">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#2a2a2a] text-[#f5f5f5] rounded-sm focus:ring-2 focus:ring-[#d4af37] focus:border-[#2a2a2a2 outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-[#f5f5f5] mb-2 tracking-wide">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#2a2a2a] text-[#f5f5f5] rounded-sm focus:ring-2 focus:ring-[#d4af37] focus:border-[#2a2a2a2a outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-[#f5f5f5] mb-2 tracking-wide">
                    Tell Me About Your Dream Wedding
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#2a2a2a] text-[#f5f5f5] rounded-sm focus:ring-2 focus:ring-[#d4af37] focus:border-[#2a2a2a2a outline-none transition-all resize-none"
                    placeholder="When is your big day? What style of dress appeals to you?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#d4af37] via-[#c9a227] to-[#b8860b] text-[#0a0a0a] py-4 font-semibold tracking-wide uppercase hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all hover:-translate-y-1"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] border-t border-[#2a2a2a] py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="w-7 h-7 text-[#d4af37]" />
            <span className="text-2xl font-bold tracking-tight text-[#f5f5f5]">
              Rei <span className="text-[#d4af37]">Bridal</span>
            </span>
          </div>
          <p className="text-gray-500 mb-4">
            Luxury Bridal Boutique
          </p>
          <p className="text-gray-600 text-sm">
            © 2026 Rei Bridal. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
