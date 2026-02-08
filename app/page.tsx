import { Mail, Phone, MapPin, Sparkles, Heart, Star, Diamond } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen font-sans" style={{ background: '#0a1628' }}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-[#0a1628]/95 backdrop-blur-sm shadow-sm z-50 border-b border-[#1e3a5f]/30">
        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img src="/logo.jpg" alt="Rei Bridal" className="h-14 w-14 object-contain" />
            <div className="text-2xl font-light tracking-wider" style={{ color: '#d4af37' }}>
              REI BRIDAL
            </div>
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
      <section className="relative min-h-screen flex items-center justify-center pt-20" style={{ background: 'linear-gradient-to-b from #0a1628 via #0f1f3a to #0a1628' }}>
        <div className="max-w-6xl mx-auto px-8 text-center">
          <div className="mb-8">
            <img src="/logo.jpg" alt="Rei Bridal" className="h-32 w-32 mx-auto object-contain mb-8" />
          </div>
          <h1 className="text-6xl md:text-8xl font-light mb-8 leading-tight tracking-wider text-[#f5f5f5]">
            Where Dreams
            <br />
            <span className="font-serif italic font-normal" style={{ color: '#d4af37' }}>
              Meet Elegance
            </span>
          </h1>
          <p className="text-lg md:text-xl mb-16 max-w-3xl mx-auto leading-relaxed font-light tracking-wide" style={{ color: '#9caab8' }}>
            Your personal bridal boutique crafting unforgettable wedding experiences.
            From finding the perfect gown to creating your dream ceremony.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
            <a
              href="#contact"
              className="border border-[#d4af37]/20 text-[#d4af37] px-12 py-5 font-light tracking-widest uppercase transition-all duration-500 hover:border-[#d4af37]/50 hover:bg-[#d4af37]/5"
            >
              Book Appointment
            </a>
            <a
              href="#collections"
              className="border border-[#1e3a5f]/30 text-[#f5f5f5]/90 px-12 py-5 font-light tracking-widest uppercase hover:border-[#d4af37]/40 hover:text-[#d4af37] transition-all duration-500"
            >
              View Collections
            </a>
          </div>
        </div>

        {/* Elegant decorative elements */}
        <div className="absolute top-32 left-16 opacity-10" style={{ color: '#d4af37' }}>
          <Star size={80} />
        </div>
        <div className="absolute bottom-32 right-16 opacity-10" style={{ color: '#d4af37' }}>
          <Diamond size={60} />
        </div>
        <div className="absolute top-1/2 left-12 opacity-5" style={{ color: '#d4af37' }}>
          <Heart size={50} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32" style={{ background: '#0a1628' }}>
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-light mb-6 tracking-widest text-[#f5f5f5]">
              About <span className="font-serif italic font-normal" style={{ color: '#d4af37' }}>Rei</span>
            </h2>
            <div className="w-32 h-px mx-auto my-10" style={{ background: 'linear-gradient(to right, transparent, rgba(212,175,55,0.4), transparent)' }}></div>
            <p className="text-lg max-w-3xl mx-auto font-light tracking-wide" style={{ color: '#9caab8' }}>
              Creating timeless elegance for your special day
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <p className="text-base leading-loose font-light" style={{ color: '#9caab8' }}>
                Welcome to Rei Bridal, where every detail of your wedding journey is crafted with love and precision.
              </p>
              <p className="text-base leading-loose font-light" style={{ color: '#9caab8' }}>
                Dedicated to helping you find the perfect gown that reflects your unique style and makes you feel like royalty on your big day.
              </p>
              <p className="text-base leading-loose font-light" style={{ color: '#9caab8' }}>
                From intimate ceremonies to grand celebrations, the mission is to make your wedding dreams come true.
              </p>
            </div>
            <div className="p-12 border border-[#1e3a5f]/40" style={{ background: '#0f1f3a' }}>
              <div className="flex items-center gap-3 mb-10">
                <Heart className="w-6 h-6" style={{ color: '#d4af37' }} />
                <h3 className="text-2xl font-light tracking-widest" style={{ color: '#d4af37' }}>
                  The Promise
                </h3>
              </div>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <Star className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: '#d4af37' }} />
                  <span className="font-light" style={{ color: '#9caab8' }}>Personalised gowns curated for your vision</span>
                </li>
                <li className="flex items-start gap-4">
                  <Star className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: '#d4af37' }} />
                  <span className="font-light" style={{ color: '#9caab8' }}>Expert alterations and fittings</span>
                </li>
                <li className="flex items-start gap-4">
                  <Star className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: '#d4af37' }} />
                  <span className="font-light" style={{ color: '#9caab8' }}>Styling advice from head to toe</span>
                </li>
                <li className="flex items-start gap-4">
                  <Star className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: '#d4af37' }} />
                  <span className="font-light" style={{ color: '#9caab8' }}>Stress-free wedding planning support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section id="collections" className="py-24" style={{ background: '#0f1f3a' }}>
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-light mb-6 tracking-widest text-[#f5f5f5]">
              Bridal Collections
            </h2>
            <div className="w-32 h-px mx-auto my-10" style={{ background: 'linear-gradient(to right, transparent, rgba(212,175,55,0.4), transparent)' }}></div>
            <p className="text-lg max-w-3xl mx-auto font-light tracking-wide" style={{ color: '#9caab8' }}>
              Timeless designs for every style and silhouette
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="group p-10 border hover:border-[#d4af37]/30 transition-all duration-500" style={{ background: '#0a1628',  }}>
              <div className="w-14 h-14 border rounded-full flex items-center justify-center mb-8 group-hover:border-[#d4af37]/40 transition-all duration-500" style={{ background: '#0f1f3a',  }}>
                <Heart className="w-6 h-6" style={{ color: '#d4af37' }} />
              </div>
              <h3 className="text-2xl font-light mb-6 tracking-widest" style={{ color: '#d4af37' }}>
                Classic Elegance
              </h3>
              <p className="leading-relaxed mb-8 font-light" style={{ color: '#9caab8' }}>
                Traditional ballgowns and timeless silhouettes that never go out of style
              </p>
              <a href="#contact" className="inline-flex items-center gap-2 tracking-wide text-sm font-light uppercase transition-colors hover:text-[#c9a227]" style={{ color: '#d4af37' }}>
                View Collection
                <Star className="w-3 h-3" />
              </a>
            </div>

            <div className="group p-10 border hover:border-[#d4af37]/30 transition-all duration-500" style={{ background: '#0a1628',  }}>
              <div className="w-14 h-14 border rounded-full flex items-center justify-center mb-8 group-hover:border-[#d4af37]/40 transition-all duration-500" style={{ background: '#0f1f3a',  }}>
                <Diamond className="w-6 h-6" style={{ color: '#d4af37' }} />
              </div>
              <h3 className="text-2xl font-light mb-6 tracking-widest" style={{ color: '#d4af37' }}>
                Modern Romance
              </h3>
              <p className="leading-relaxed mb-8 font-light" style={{ color: '#9caab8' }}>
                Contemporary designs with romantic touches for the modern bride
              </p>
              <a href="#contact" className="inline-flex items-center gap-2 tracking-wide text-sm font-light uppercase transition-colors hover:text-[#c9a227]" style={{ color: '#d4af37' }}>
                View Collection
                <Star className="w-3 h-3" />
              </a>
            </div>

            <div className="group p-10 border hover:border-[#d4af37]/30 transition-all duration-500" style={{ background: '#0a1628',  }}>
              <div className="w-14 h-14 border rounded-full flex items-center justify-center mb-8 group-hover:border-[#d4af37]/40 transition-all duration-500" style={{ background: '#0f1f3a',  }}>
                <Sparkles className="w-6 h-6" style={{ color: '#d4af37' }} />
              </div>
              <h3 className="text-2xl font-light mb-6 tracking-widest" style={{ color: '#d4af37' }}>
                Bohemian Chic
              </h3>
              <p className="leading-relaxed mb-8 font-light" style={{ color: '#9caab8' }}>
                Free-spirited designs for the unconventional bride who dances to their own rhythm
              </p>
              <a href="#contact" className="inline-flex items-center gap-2 tracking-wide text-sm font-light uppercase transition-colors hover:text-[#c9a227]" style={{ color: '#d4af37' }}>
                View Collection
                <Star className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24" style={{ background: '#0a1628' }}>
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-light mb-6 tracking-widest text-[#f5f5f5]">
              Bespoke Services
            </h2>
            <div className="w-32 h-px mx-auto my-10" style={{ background: 'linear-gradient(to right, transparent, rgba(212,175,55,0.4), transparent)' }}></div>
            <p className="text-lg max-w-3xl mx-auto font-light tracking-wide" style={{ color: '#9caab8' }}>
              Everything you need for your perfect wedding day
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 border hover:border-[#d4af37]/20 transition-all duration-500" style={{  }}>
              <div className="w-14 h-14 border rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: '#0f1f3a',  }}>
                <Heart className="w-6 h-6" style={{ color: '#d4af37' }} />
              </div>
              <h3 className="text-base font-light mb-3 tracking-widest uppercase" style={{ color: '#d4af37' }}>Gowns & Attire</h3>
              <p className="text-sm font-light" style={{ color: '#9caab8' }}>Find your perfect dress</p>
            </div>

            <div className="text-center p-8 border hover:border-[#d4af37]/20 transition-all duration-500" style={{  }}>
              <div className="w-14 h-14 border rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: '#0f1f3a',  }}>
                <Star className="w-6 h-6" style={{ color: '#d4af37' }} />
              </div>
              <h3 className="text-base font-light mb-3 tracking-widest uppercase" style={{ color: '#d4af37' }}>Alterations</h3>
              <p className="text-sm font-light" style={{ color: '#9caab8' }}>Perfect fit guaranteed</p>
            </div>

            <div className="text-center p-8 border hover:border-[#d4af37]/20 transition-all duration-500" style={{  }}>
              <div className="w-14 h-14 border rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: '#0f1f3a',  }}>
                <Sparkles className="w-6 h-6" style={{ color: '#d4af37' }} />
              </div>
              <h3 className="text-base font-light mb-3 tracking-widest uppercase" style={{ color: '#d4af37' }}>Styling</h3>
              <p className="text-sm font-light" style={{ color: '#9caab8' }}>Complete wedding styling</p>
            </div>

            <div className="text-center p-8 border hover:border-[#d4af37]/20 transition-all duration-500" style={{  }}>
              <div className="w-14 h-14 border rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: '#0f1f3a',  }}>
                <Diamond className="w-6 h-6" style={{ color: '#d4af37' }} />
              </div>
              <h3 className="text-base font-light mb-3 tracking-widest uppercase" style={{ color: '#d4af37' }}>Planning</h3>
              <p className="text-sm font-light" style={{ color: '#9caab8' }}>Full event coordination</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24" style={{ background: 'linear-gradient(to bottom, #0f1f3a, #0a1628)' }}>
        <div className="max-w-5xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-light mb-6 tracking-widest text-[#f5f5f5]">
              Let's Create
              <br />
              <span className="font-serif italic font-normal" style={{ color: '#d4af37' }}>
                Your Story
              </span>
            </h2>
            <div className="w-32 h-px mx-auto my-10" style={{ background: 'linear-gradient(to right, transparent, rgba(212,175,55,0.4), transparent)' }}></div>
            <p className="text-lg max-w-3xl mx-auto font-light tracking-wide" style={{ color: '#9caab8' }}>
              Schedule your complimentary consultation today
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-light mb-12 tracking-widest" style={{ color: '#d4af37' }}>
                Get In Touch
              </h3>
              <div className="space-y-10">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 border rounded-full flex items-center justify-center flex-shrink-0" style={{ background: '#0f1f3a',  }}>
                    <Mail className="w-5 h-5" style={{ color: '#d4af37' }} />
                  </div>
                  <div>
                    <h4 className="font-light mb-2 text-sm tracking-widest uppercase" style={{ color: '#e8e8e8' }}>Email</h4>
                    <p className="font-light" style={{ color: '#9caab8' }}>hello@reibridal.com</p>
                    <p className="text-sm font-light mt-1" style={{ color: '#6b7c8f' }}>We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 border rounded-full flex items-center justify-center flex-shrink-0" style={{ background: '#0f1f3a',  }}>
                    <Phone className="w-5 h-5" style={{ color: '#d4af37' }} />
                  </div>
                  <div>
                    <h4 className="font-light mb-2 text-sm tracking-widest uppercase" style={{ color: '#e8e8e8' }}>Phone</h4>
                    <p className="font-light" style={{ color: '#9caab8' }}>+353 (0) XX XXX XXXX</p>
                    <p className="text-sm font-light mt-1" style={{ color: '#6b7c8f' }}>Mon-Sat, 10am-7pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 border rounded-full flex items-center justify-center flex-shrink-0" style={{ background: '#0f1f3a',  }}>
                    <MapPin className="w-5 h-5" style={{ color: '#d4af37' }} />
                  </div>
                  <div>
                    <h4 className="font-light mb-2 text-sm tracking-widest uppercase" style={{ color: '#e8e8e8' }}>Location</h4>
                    <p className="font-light" style={{ color: '#9caab8' }}>12 Smith Street</p>
                    <p className="text-sm font-light mt-1" style={{ color: '#6b7c8f' }}>Available for consultations by appointment only</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-10 border" style={{ background: '#0f1f3a',  }}>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-light mb-3 tracking-widest uppercase" style={{ color: '#e8e8e8' }}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-5 py-4 bg-[#0a1628] border text-[#f5f5f5]/90 focus:ring-1 focus:border-[#d4af37]/30 outline-none transition-all font-light"
                    style={{  }}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-light mb-3 tracking-widest uppercase" style={{ color: '#e8e8e8' }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-5 py-4 bg-[#0a1628] border text-[#f5f5f5]/90 focus:ring-1 focus:border-[#d4af37]/30 outline-none transition-all font-light"
                    style={{  }}
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-light mb-3 tracking-widest uppercase" style={{ color: '#e8e8e8' }}>
                    Tell Me About Your Dream Wedding
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-5 py-4 bg-[#0a1628] border text-[#f5f5f5]/90 focus:ring-1 focus:border-[#d4af37]/30 outline-none transition-all resize-none font-light"
                    style={{  }}
                    placeholder="When is your big day? What style of dress appeals to you?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full border text-[#d4af37] py-5 font-light tracking-widest uppercase transition-all duration-500 hover:bg-[#d4af37]/5"
                  style={{  }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-[#1e3a5f]/30" style={{ background: '#0a1628' }}>
        <div className="max-w-6xl mx-auto px-8 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <img src="/logo.jpg" alt="Rei Bridal" className="h-12 w-12 object-contain" />
            <div className="text-xl font-light tracking-wider" style={{ color: '#f5f5f5' }}>
              <span style={{ color: '#d4af37' }}>REI</span> BRIDAL
            </div>
          </div>
          <p className="mb-8 font-light tracking-wide text-sm" style={{ color: '#6b7c8f' }}>
            Luxury Bridal Boutique
          </p>
          <p className="text-sm font-light" style={{ color: '#4a5a6a' }}>
            © 2026 Rei Bridal. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
