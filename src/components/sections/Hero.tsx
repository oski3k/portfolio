import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowDown,
  Code2,
  Github,
  Globe,
  Linkedin,
  Smartphone,
  Terminal,
} from "lucide-react";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import TextReveal from "../ui/TextReveal";

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const words = useMemo(() => [t.hero.role1, t.hero.role2, t.hero.role3], [t]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

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
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex flex-col justify-center items-center relative px-6 pt-20 pb-40 md:pb-0 overflow-hidden"
    >
      <motion.div
        style={{ opacity }}
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-900/10 to-transparent pointer-events-none"
      />

      <motion.div
        style={{ y }}
        className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10"
      >
        <div className="order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-2 mb-4 text-accent font-mono font-medium px-3 py-1 bg-accent/10 w-fit rounded-full border border-accent/20"
          >
            <Terminal className="w-4 h-4" />
            <span className="text-sm">{t.hero.greeting}</span>
          </motion.div>

          <div className="mb-6">
            <TextReveal delay={0.3}>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
                {t.hero.title1}
              </h1>
            </TextReveal>
            <TextReveal delay={0.5}>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400">
                  {t.hero.title2}
                </span>
              </h1>
            </TextReveal>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-xl md:text-3xl text-slate-300 h-10 mb-6 font-mono font-light"
          >
            {t.hero.iAm}{" "}
            <span className="text-accent font-semibold">{currentText}</span>
            <span className="animate-pulse text-accent">_</span>
          </motion.div>

          <TextReveal delay={0.9}>
            <p className="text-slate-400 max-w-lg mb-8 leading-relaxed text-lg">
              {t.hero.description}
            </p>
          </TextReveal>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                const projectsSection = document.getElementById("projects");
                if (projectsSection) {
                  const targetY =
                    projectsSection.getBoundingClientRect().top +
                    window.scrollY;
                  window.lenis?.scrollTo(targetY, { duration: 3 });
                }
              }}
              className="px-8 py-3 bg-accent text-white font-bold rounded-lg hover:bg-accent-glow hover:translate-y-[-2px] transition-all shadow-[0_0_25px_rgba(99,102,241,0.4)] flex items-center gap-2"
            >
              <Globe className="w-5 h-5" />
              {t.hero.viewWork}
            </a>

            <div className="flex gap-3">
              <a
                href="https://github.com/oski3k"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800/50 backdrop-blur-sm rounded-lg hover:bg-slate-700 hover:text-white text-slate-400 transition-all border border-slate-700 hover:border-accent/50"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/oskar-%C5%9Bled%C5%BA-841a7337b/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800/50 backdrop-blur-sm rounded-lg hover:bg-slate-700 hover:text-white text-slate-400 transition-all border border-slate-700 hover:border-accent/50"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 md:order-2 flex justify-center relative"
        >
          <div className="relative w-80 h-80 md:w-[520px] md:h-[520px]">
            <div className="absolute inset-0 rounded-full border border-slate-800 animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-4 rounded-full border border-slate-800 border-dashed animate-[spin_15s_linear_infinite_reverse]" />
            <div className="absolute inset-1/4 rounded-full bg-gradient-to-tr from-accent/30 to-purple-500/20 blur-3xl animate-pulse" />

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 z-20 pointer-events-none"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 bg-slate-900 p-2 rounded-full border border-slate-700 text-accent shadow-lg shadow-accent/20">
                <Smartphone className="w-5 h-5" />
              </div>
            </motion.div>

            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 z-20 pointer-events-none"
            >
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4 bg-slate-900 p-2 rounded-full border border-slate-700 text-cyan-400 shadow-lg shadow-cyan-400/20">
                <Globe className="w-5 h-5" />
              </div>
            </motion.div>

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 z-20 pointer-events-none"
            >
              <div className="absolute top-1/2 right-0 translate-x-4 -translate-y-1/2 bg-slate-900 p-2 rounded-full border border-slate-700 text-purple-400 shadow-lg shadow-purple-400/20">
                <Code2 className="w-5 h-5" />
              </div>
            </motion.div>

            <div className="absolute inset-6 rounded-full overflow-hidden border-2 border-slate-700/50 bg-slate-900 z-10 flex items-center justify-center group">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/40 z-10 pointer-events-none" />
              <img
                src="/oskar-sledz-fullstack.jpg"
                alt="Oskar - Developer Profile"
                className="w-full h-full object-cover scale-[1.02] group-hover:scale-110 transition-all duration-500"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1,
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 cursor-pointer hover:text-accent transition-colors"
      >
        <a
          href="#about"
          aria-label="Scroll down"
          onClick={(e) => {
            e.preventDefault();
            const aboutSection = document.getElementById("about");
            if (aboutSection) {
              const targetY =
                aboutSection.getBoundingClientRect().top + window.scrollY;
              window.lenis?.scrollTo(targetY, { duration: 2.5 });
            }
          }}
        >
          <ArrowDown className="w-8 h-8" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
