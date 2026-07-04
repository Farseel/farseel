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
import ScrollProgress from './components/ScrollProgress';
import SideRays from './components/SideRays';

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
    <div className="relative min-h-screen bg-bg-primary text-text-light selection:bg-accent-blue/30 selection:text-text-light">
      {/* Dynamic Noise Overlay */}
      <div className="noise-overlay" />

      {/* Global Background SideRays */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <SideRays
          speed={2.5}
          rayColor1="#1d4ed8"
          rayColor2="#38bdf8"
          intensity={2}
          spread={2}
          origin="top-right"
          tilt={0}
          saturation={1.5}
          blend={0.75}
          falloff={1.6}
          opacity={0.4}
        />
      </div>

      {/* Horizontal Scroll Progress Gauge */}
      <ScrollProgress />

      {/* Layout Grid */}
      <Navbar />
      <main className="relative z-10">
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
