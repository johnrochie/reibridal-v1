import { Mail, Phone, MapPin, Sparkles, Star, Heart, HeartHandshake, Image as ImageIcon } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="/logo.jpg" alt="Rei Bridal" className="h-12 w-12 object-contain" />
            <div className="text-xl font-light text-gray-900 tracking-wide">
              REI <span className="text-[#c4a96b]">BRIDAL</span>
            </div>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-700 hover:text-gray-900 transition-colors font-light text-sm tracking-wide uppercase">
              About
            </a>
            <a href="#styles" className="text-gray-700 hover:text-gray-900 transition-colors font-light text-sm tracking-wide uppercase">
              Styles
            </a>
            <a href="#collection" className="text-gray-700 hover:text-gray-900 transition-colors font-light text-sm tracking-wide uppercase">
              Collection
            </a>
            <a href="#contact" className="text-[#c4a96b] font-light text-sm tracking-wide uppercase">
              Book Appointment
            </a>
          </div>
        </div>
      </nav>

      {/* Hero - with background image */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Hero Photo */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1593245318987-66b286c24ed3?auto=format&fit=crop&w=2000&q=80"
            alt="Bride"
            className="w-full h-full object-cover"
          />
          {/* Light tint overlay */}
          <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>
          {/* Subtle gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-white/60"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="mb-8">
            <Star className="w-10 h-10 text-[#c4a96b] mx-auto drop-shadow-lg" />
          </div>
          <h1 className="text-6xl md:text-8xl font-light mb-6 leading-tight text-gray-900 drop-shadow-lg">
            Your Wedding,
            <br />
            <span className="font-serif italic text-5xl md:text-7xl mt-2" style={{ color: '#c4a96b' }}>
              Your Way
            </span>
          </h1>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-gray-700 font-light leading-relaxed drop-shadow">
            Discover the perfect wedding dress from our thoughtfully curated collection of modern bridal designers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-[#c4a96b] text-white px-10 py-4 font-light tracking-widest uppercase hover:bg-[#b8975e] transition-all duration-300 shadow-lg"
            >
              Book Appointment
            </a>
            <a
              href="#collection"
              className="bg-white text-gray-700 px-10 py-4 font-light tracking-widest uppercase hover:bg-gray-50 transition-all duration-300 border border-gray-200"
            >
              Browse Collection
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-light mb-8 tracking-wide text-gray-900">
                Modern
                <span className="block font-serif italic text-3xl md:text-4xl mt-2" style={{ color: '#c4a96b' }}>
                  Bridal Experience
                </span>
              </h2>
              <p className="text-lg leading-relaxed mb-6 text-gray-600 font-light">
                Located in Ireland, Rei Bridal offers a relaxed, modern bridal experience for couples seeking contemporary wedding dresses and personalized styling.
              </p>
              <p className="text-lg leading-relaxed mb-6 text-gray-600 font-light">
                Our curated collection features designs from world-renowned bridal houses, all selected for their quality, craftsmanship, and unique aesthetic.
              </p>
              <p className="text-lg leading-relaxed text-gray-600 font-light">
                Book a private appointment with our stylist and discover your perfect dress in a relaxed, no-pressure environment.
              </p>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=800&q=80"
                alt="Bridal boutique"
                className="w-full h-auto object-cover rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-[#c4a96b]/20 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Styles - with images */}
      <section id="styles" className="py-24 bg-[#faf8f5]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-wide text-gray-900">
              Wedding
              <span className="block font-serif italic text-3xl md:text-4xl mt-2" style={{ color: '#c4a96b' }}>
                Styles
              </span>
            </h2>
            <p className="text-lg text-gray-600 font-light">Find your perfect aesthetic</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                photo: "https://images.unsplash.com/photo-1505922593614-fc8d3110dd31?auto=format&fit=crop&w=600&q=80",
                title: 'Classic',
                desc: 'Timeless elegance',
                icon: <Star className="w-8 h-8 text-[#c4a96b]" />
              },
              {
                photo: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=600&q=80",
                title: 'Romantic',
                desc: 'Soft and dreamy',
                icon: <Heart className="w-8 h-8 text-[#c4a96b]" />
              },
              {
                photo: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80",
                title: 'Bohemian',
                desc: 'Free spirited',
                icon: <Sparkles className="w-8 h-8 text-[#c4a96b]" />
              },
              {
                photo: "https://images.unsplash.com/photo-1520854221256-17451cc330e7?auto=format&fit=crop&w=600&q=80",
                title: 'Minimalist',
                desc: 'Clean modern vibe',
                icon: <Star className="w-8 h-8 text-[#c4a96b]" />
              },
              {
                photo: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=600&q=80",
                title: 'Modern',
                desc: 'Contemporary chic',
                icon: <Sparkles className="w-8 h-8 text-[#c4a96b]" />
              },
              {
                photo: "https://images.unsplash.com/photo-1478147427282-58a87a120781?auto=format&fit=crop&w=600&q=80",
                title: 'Glamour',
                desc: 'Make a statement',
                icon: <Heart className="w-8 h-8 text-[#c4a96b]" />
              }
            ].map((style, i) => (
              <div key={i} className="group bg-white overflow-hidden border border-gray-100 hover:border-[#c4a96b]/30 hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={style.photo}
                    alt={style.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    {style.icon}
                    <h3 className="text-2xl font-light text-gray-900">{style.title}</h3>
                  </div>
                  <p className="text-gray-600 font-light">{style.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collection Showcase */}
      <section id="collection" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-wide text-gray-900">
              Featured
              <span className="block font-serif italic text-3xl md:text-4xl mt-2" style={{ color: '#c4a96b' }}>
                Designers
              </span>
            </h2>
            <p className="text-lg text-gray-600 font-light">Curated bridal collections</p>
          </div>

          {/* Designer collage */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative group overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80"
                alt="Designer showcase"
                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-2xl font-light">Modern Collection</h3>
                  <p className="text-sm font-light mt-1">Contemporary designers</p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=800&q=80"
                alt="Designer showcase"
                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-2xl font-light">Romantic Collection</h3>
                  <p className="text-sm font-light mt-1">Dreamy silhouettes</p>
                </div>
              </div>
            </div>
          </div>

          {/* Designer list */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            {['Alexandra Grecco', 'Loeffler Randall', 'Love Story London', 'A La Robe', 'Bon Bride', 'Katherine Tash', 'Ingrid Olic', 'Mikado'].map((designer, i) => (
              <div key={i} className="group p-4 text-center border border-gray-100 hover:border-[#c4a96b]/30 hover:bg-[#faf8f5]/50 transition-all duration-300">
                <h3 className="text-base font-light text-gray-700 group-hover:text-[#c4a96b] transition-colors tracking-wide">
                  {designer}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-gradient-to-br from-[#faf8f5] to-[#f5f0e8]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-wide text-gray-900">
              Book Your
              <span className="block font-serif italic text-3xl md:text-4xl mt-2" style={{ color: '#c4a96b' }}>
                Appointment
              </span>
            </h2>
            <p className="text-lg text-gray-600 font-light">Schedule your private styling session</p>
          </div>

          <div className="bg-white p-10 md:p-16 border border-gray-100 rounded-lg shadow-sm">
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-light mb-3 tracking-wide uppercase text-gray-700">Name</label>
                  <input
                    type="text"
                    className="w-full px-5 py-4 bg-[#faf8f5] border border-gray-200 text-gray-900 focus:ring-1 focus:ring-[#c4a96b]/20 focus:border-[#c4a96b] outline-none transition-all font-light"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-light mb-3 tracking-wide uppercase text-gray-700">Email</label>
                  <input
                    type="email"
                    className="w-full px-5 py-4 bg-[#faf8f5] border border-gray-200 text-gray-900 focus:ring-1 focus:ring-[#c4a96b]/20 focus:border-[#c4a96b] outline-none transition-all font-light"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-light mb-3 tracking-wide uppercase text-gray-700">Phone</label>
                <input
                  type="tel"
                  className="w-full px-5 py-4 bg-[#faf8f5] border border-gray-200 text-gray-900 focus:ring-1 focus:ring-[#c4a96b]/20 focus:border-[#c4a96b] outline-none transition-all font-light"
                  placeholder="+353 (0) XX XXX XXXX"
                />
              </div>

              <div>
                <label className="block text-sm font-light mb-3 tracking-wide uppercase text-gray-700">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-5 py-4 bg-[#faf8f5] border border-gray-200 text-gray-900 focus:ring-1 focus:ring-[#c4a96b]/20 focus:border-[#c4a96b] outline-none transition-all resize-none font-light"
                  placeholder="Tell us about your wedding..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#c4a96b] text-white py-4 font-light tracking-widest uppercase hover:bg-[#b8975e] transition-all duration-300"
              >
                Book Appointment
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#faf8f5] border border-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-6 h-6 text-[#c4a96b]" />
              </div>
              <h3 className="text-lg font-light mb-3 tracking-wide uppercase text-gray-900">Email Us</h3>
              <p className="text-gray-600 font-light">hello@reibridal.com</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#faf8f5] border border-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-6 h-6 text-[#c4a96b]" />
              </div>
              <h3 className="text-lg font-light mb-3 tracking-wide uppercase text-gray-900">Call Us</h3>
              <p className="text-gray-600 font-light">+353 (0) XX XXX XXXX</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#faf8f5] border border-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-6 h-6 text-[#c4a96b]" />
              </div>
              <h3 className="text-lg font-light mb-3 tracking-wide uppercase text-gray-900">Visit Us</h3>
              <p className="text-gray-600 font-light">Dublin, Ireland</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            <div className="flex items-center gap-3">
              <img src="/logo.jpg" alt="Rei Bridal" className="h-10 w-10 object-contain" />
              <div className="text-lg font-light text-gray-900 tracking-wide">
                REI <span className="text-[#c4a96b]">BRIDAL</span>
              </div>
            </div>
            <div className="flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors text-sm tracking-wide uppercase">About</a>
              <a href="#styles" className="text-gray-600 hover:text-gray-900 transition-colors text-sm tracking-wide uppercase">Styles</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors text-sm tracking-wide uppercase">Contact</a>
            </div>
          </div>
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-500 font-light">© 2026 Rei Bridal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
