import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";
import { NAV_ITEMS } from "../constants";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      let current = "";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-40 transition-all duration-300 border-b ${
        scrolled
          ? "bg-dark-bg/80 backdrop-blur-md border-slate-800 py-4"
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className='container mx-auto px-6 flex justify-between items-center'>
        <a href='#' className='flex items-center gap-2 group'>
          <div className='p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors'>
            <Code2 className='w-6 h-6 text-accent' />
          </div>
          <span className='text-xl font-bold font-mono tracking-tighter text-slate-100'>
            DEV<span className='text-accent'>.OSKI3K</span>
          </span>
        </a>

        <div className='hidden md:flex items-center gap-8'>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-sm font-medium transition-colors relative group ${
                activeSection === item.href.substring(1)
                  ? "text-accent"
                  : "text-slate-400 hover:text-accent"
              }`}
            >
              {item.label}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ${
                  activeSection === item.href.substring(1)
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              ></span>
            </a>
          ))}
        </div>

        <button
          className='md:hidden text-slate-300 hover:text-white'
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className='md:hidden bg-dark-bg/95 backdrop-blur-xl border-b border-slate-800 overflow-hidden'
          >
            <div className='flex flex-col p-6 gap-4'>
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium ${
                    activeSection === item.href.substring(1)
                      ? "text-accent"
                      : "text-slate-300 hover:text-accent"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
