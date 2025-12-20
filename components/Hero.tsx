import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  Github,
  Linkedin,
  Terminal,
  Smartphone,
  Globe,
  Code2,
} from "lucide-react";

const words = [
  "a Web Developer.",
  "an Android Developer.",
  "a Full Stack Coder.",
];

const Hero: React.FC = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const word = words[currentWordIndex];

    const timer = setTimeout(() => {
      if (!isDeleting && currentText === word) {
        setTimeout(() => setIsDeleting(true), 2000);
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
    <section className='min-h-screen flex flex-col justify-center items-center relative px-6 pt-20 overflow-hidden'>
      <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-900/10 to-transparent pointer-events-none' />

      <div className='max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10'>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className='order-2 md:order-1'
        >
          <div className='flex items-center gap-2 mb-4 text-accent font-mono font-medium px-3 py-1 bg-accent/10 w-fit rounded-full border border-accent/20'>
            <Terminal className='w-4 h-4' />
            <span className='text-sm'>HELLO WORLD, I'M OSKAR</span>
          </div>

          <h1 className='text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight'>
            Building <br />
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400'>
              Digital Experiences
            </span>
          </h1>

          <div className='text-xl md:text-3xl text-slate-300 h-10 mb-6 font-mono font-light'>
            I am{" "}
            <span className='text-accent font-semibold'>{currentText}</span>
            <span className='animate-pulse text-accent'>_</span>
          </div>

          <p className='text-slate-400 max-w-lg mb-8 leading-relaxed text-lg'>
            I specialize in creating <strong>modern websites</strong> and native{" "}
            <strong>Android applications</strong>. I combine the flexibility of{" "}
            <span className='text-slate-200'>React</span> with the performance
            of <span className='text-slate-200'>Kotlin</span> to deliver
            products that look great and run smoothly.
          </p>

          <div className='flex flex-wrap gap-4'>
            <a
              href='#projects'
              className='px-8 py-3 bg-accent text-white font-bold rounded-lg hover:bg-accent-glow hover:translate-y-[-2px] transition-all shadow-[0_0_25px_rgba(99,102,241,0.4)] flex items-center gap-2'
            >
              <Globe className='w-5 h-5' />
              View My Work
            </a>

            <div className='flex gap-3'>
              <a
                href='https://github.com/oski3k'
                target='_blank'
                rel='noopener noreferrer'
                className='p-3 bg-slate-800/50 backdrop-blur-sm rounded-lg hover:bg-slate-700 hover:text-white text-slate-400 transition-all border border-slate-700 hover:border-accent/50'
                aria-label='GitHub Profile'
              >
                <Github className='w-5 h-5' />
              </a>
              <a
                href='https://www.linkedin.com/in/oskar-%C5%9Bled%C5%BA-841a7337b/'
                target='_blank'
                rel='noopener noreferrer'
                className='p-3 bg-slate-800/50 backdrop-blur-sm rounded-lg hover:bg-slate-700 hover:text-white text-slate-400 transition-all border border-slate-700 hover:border-accent/50'
                aria-label='LinkedIn Profile'
              >
                <Linkedin className='w-5 h-5' />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='order-1 md:order-2 flex justify-center relative'
        >
          <div className='relative w-72 h-72 md:w-[450px] md:h-[450px]'>
            <div className='absolute inset-0 rounded-full border border-slate-800 animate-[spin_10s_linear_infinite]' />
            <div className='absolute inset-4 rounded-full border border-slate-800 border-dashed animate-[spin_15s_linear_infinite_reverse]' />
            <div className='absolute inset-1/4 rounded-full bg-gradient-to-tr from-accent/30 to-purple-500/20 blur-3xl animate-pulse' />

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className='absolute inset-0 z-20 pointer-events-none'
            >
              <div className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 bg-slate-900 p-2 rounded-full border border-slate-700 text-accent shadow-lg shadow-accent/20'>
                <Smartphone className='w-5 h-5' />
              </div>
            </motion.div>

            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className='absolute inset-0 z-20 pointer-events-none'
            >
              <div className='absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4 bg-slate-900 p-2 rounded-full border border-slate-700 text-cyan-400 shadow-lg shadow-cyan-400/20'>
                <Globe className='w-5 h-5' />
              </div>
            </motion.div>

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className='absolute inset-0 z-20 pointer-events-none'
            >
              <div className='absolute top-1/2 right-0 translate-x-4 -translate-y-1/2 bg-slate-900 p-2 rounded-full border border-slate-700 text-purple-400 shadow-lg shadow-purple-400/20'>
                <Code2 className='w-5 h-5' />
              </div>
            </motion.div>

            <div className='absolute inset-6 rounded-full overflow-hidden border-2 border-slate-700/50 bg-slate-900 z-10 flex items-center justify-center group'>
              <img
                src='/avatar.png'
                alt='Oskar - Developer Profile'
                className='w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500'
              />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1,
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className='absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 cursor-pointer hover:text-accent transition-colors'
      >
        <a href='#about' aria-label='Scroll down'>
          <ArrowDown className='w-8 h-8' />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
