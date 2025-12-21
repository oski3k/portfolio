import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { motion, useScroll, useSpring } from "framer-motion";
import Lenis from "lenis";

import { ArrowUp } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { AnimatePresence } from "framer-motion";

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [showScrollTop, setShowScrollTop] = useState(false);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenisRef.current = lenis;
    // @ts-ignore
    window.lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    lenis.on("scroll", handleScroll);

    return () => {
      lenis.destroy();
      // @ts-ignore
      delete window.lenis;
    };
  }, []);

  const scrollToTop = () => {
    lenisRef.current?.scrollTo(0, { duration: 1.5 });
  };

  return (
    <div className='bg-dark-bg min-h-screen text-slate-200 selection:bg-accent selection:text-white'>
      <motion.div
        className='fixed top-0 left-0 right-0 h-1 bg-accent origin-left z-50'
        style={{ scaleX }}
      />

      <Navbar />

      <main className='relative z-10'>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <div className='fixed inset-0 pointer-events-none z-0 overflow-hidden'>
        <div className='absolute top-0 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[128px] animate-blob mix-blend-screen opacity-30'></div>
        <div className='absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] animate-blob animation-delay-2000 mix-blend-screen opacity-30'></div>
      </div>

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className='fixed bottom-8 right-8 z-50 p-3 bg-accent text-white rounded-full shadow-lg hover:bg-accent-glow transition-colors'
            aria-label='Scroll to top'
          >
            <ArrowUp className='w-6 h-6' />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
