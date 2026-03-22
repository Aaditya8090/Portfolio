import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certificates } from './components/Certificates';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CursorGlow } from './components/CursorGlow';

function App() {
  const { scrollYProgress } = useScroll();
  const [isLoading, setIsLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Simulate initial loading animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Show scroll-to-top button only after scrolling down a bit
  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      if (latest > 0.05) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    });
  }, [scrollYProgress]);

  const dashOffset = useSpring(
    useTransform(scrollYProgress, [0, 1], [138, 0]),
    { stiffness: 100, damping: 30, restDelta: 0.001 }
  );

  if (isLoading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-background">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-16 h-16 border-4 border-t-primary border-r-transparent border-b-secondary border-l-transparent rounded-full"
        />
      </div>
    );
  }

  return (
    <div className="relative antialiased text-gray-200 min-h-screen">
      {/* Floating Scroll Progress / Back to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: showScrollTop ? 1 : 0, scale: showScrollTop ? 1 : 0.8 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 z-[60] w-12 h-12 rounded-full flex items-center justify-center cursor-pointer group bg-black/60 backdrop-blur-md border border-white/10 shadow-lg shadow-primary/20"
        style={{ pointerEvents: showScrollTop ? 'auto' : 'none' }}
      >
        <ArrowUp className="text-white group-hover:-translate-y-1 transition-transform duration-300 z-10" size={20} />
        <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none">
          <circle
            cx="24"
            cy="24"
            r="22"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="2"
          />
          <motion.circle
            cx="24"
            cy="24"
            r="22"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="2"
            strokeDasharray={138}
            style={{ strokeDashoffset: dashOffset }}
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#00c2ff" />
            </linearGradient>
          </defs>
        </svg>
      </motion.button>

      {/* Follow Cursor Glow Background (Hidden on mobile) */}
      <div className="hidden md:block">
        <CursorGlow />
      </div>

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Certificates />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
