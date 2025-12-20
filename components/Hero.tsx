import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Terminal } from 'lucide-react';

const words = ["Web Applications.", "Android Apps.", "Interactive Experiences."];

const Hero: React.FC = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const word = words[currentWordIndex];

    const timer = setTimeout(() => {
      if (!isDeleting && currentText === word) {
        setTimeout(() => setIsDeleting(true), 2000); // Pause at end
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      } else {
        setCurrentText(
          word.substring(0, currentText.length + (isDeleting ? -1 : 1))
        );
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex]);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative px-6 pt-20">
      <div className="max-w-5xl w-full mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 md:order-1"
        >
          <div className="flex items-center gap-2 mb-4 text-accent font-mono font-medium">
            <Terminal className="w-5 h-5" />
            <span>HELLO WORLD, I'M ALEX</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
            Full Stack <br />
            <span className="text-slate-500">Developer</span>
          </h1>

          <div className="text-xl md:text-2xl text-slate-400 h-8 mb-8 font-mono">
            Building <span className="text-accent">{currentText}</span>
            <span className="animate-pulse">|</span>
          </div>

          <p className="text-slate-400 max-w-lg mb-8 leading-relaxed">
            I craft high-performance websites and intuitive Android applications. 
            Blending creative design with robust engineering to solve real-world problems.
          </p>

          <div className="flex gap-4">
            <a 
              href="#projects" 
              className="px-8 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent-glow hover:scale-105 transition-all shadow-[0_0_20px_rgba(99,102,241,0.3)]"
            >
              View Work
            </a>
            <div className="flex gap-3">
              <a href="#" className="p-3 bg-slate-800 rounded-lg hover:bg-slate-700 hover:text-accent transition-colors border border-slate-700">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 bg-slate-800 rounded-lg hover:bg-slate-700 hover:text-accent transition-colors border border-slate-700">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Hero Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 md:order-2 flex justify-center relative"
        >
           <div className="relative w-64 h-64 md:w-96 md:h-96">
              {/* Abstract decorative circles */}
              <div className="absolute inset-0 rounded-full border border-slate-800 animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-slate-800 border-dashed animate-[spin_15s_linear_infinite_reverse]" />
              <div className="absolute inset-1/4 rounded-full bg-gradient-to-tr from-accent/20 to-purple-500/20 blur-2xl animate-pulse" />
              
              {/* Profile Image Placeholder */}
              <div className="absolute inset-4 rounded-full overflow-hidden border-2 border-slate-700/50 bg-slate-900 z-10 flex items-center justify-center">
                 <img 
                    src="https://picsum.photos/seed/developer/800/800" 
                    alt="Developer Profile"
                    className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                 />
              </div>
           </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500"
      >
        <ArrowDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
};

export default Hero;