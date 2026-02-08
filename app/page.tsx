import Hero from './components/Hero';
import Navigation from './components/Navigation';
import ExperienceBanner from './components/ExperienceBanner';
import About from './components/About';
import Styles from './components/Styles';
import Designers from './components/Designers';
import Accessories from './components/Accessories';
import LoveStories from './components/LoveStories';
import Contact from './components/Contact';
import Location from './components/Location';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-white">
      <Navigation />
      <Hero />

      <ExperienceBanner />
      <About />
      <Styles />
      <Designers />
      <Accessories />
      <LoveStories />
      <Contact />
      <Location />
      <Footer />
    </div>
  );
}
