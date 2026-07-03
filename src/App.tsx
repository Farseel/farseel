import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Timeline from './sections/Timeline';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';

const App: React.FC = () => {
  useEffect(() => {
    // Initialize Lenis smooth scroll with premium kinetic physics
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
      infinite: false,
    });

    // Wire Lenis into standard requestAnimationFrame loop
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-bg-primary text-text-light selection:bg-accent-green/30 selection:text-accent-secondary">
      {/* Dynamic Noise Overlay */}
      <div className="noise-overlay" />

      {/* Horizontal Scroll Progress Gauge */}
      <ScrollProgress />

      {/* Lagging Spring Cursor Particle */}
      <CustomCursor />

      {/* Layout Grid */}
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Timeline />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
