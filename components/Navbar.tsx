import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2, Languages } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const languages = [
    { code: "en" as const, flag: "gb", name: "English" },
    { code: "pl" as const, flag: "pl", name: "Polski" },
    { code: "de" as const, flag: "de", name: "Deutsch" },
    { code: "fr" as const, flag: "fr", name: "Français" },
    { code: "es" as const, flag: "es", name: "Español" },
  ];

  const NAV_ITEMS = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      let current = "";

      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const isAtBottom = scrollTop + windowHeight >= documentHeight - 50;

      if (isAtBottom) {
        current = sections[sections.length - 1];
      } else {
        for (let i = sections.length - 1; i >= 0; i--) {
          const section = sections[i];
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 100) {
              current = section;
              break;
            }
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [t]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        langMenuOpen &&
        !(event.target as Element).closest(".language-dropdown")
      ) {
        setLangMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [langMenuOpen]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    setIsOpen(false);

    setTimeout(() => {
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);

      if (element) {
        const offset = 80;
        const elementPosition =
          element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - offset;

        // @ts-ignore
        window.lenis?.scrollTo(offsetPosition, { duration: 2 });
      }
    }, 300);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-40 transition-all duration-300 border-b ${
        scrolled
          ? "bg-dark-bg/80 backdrop-blur-md border-slate-800 py-4"
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className='container mx-auto px-6 flex justify-between items-center'>
        <a
          href='#'
          className='flex items-center gap-2 group'
          onClick={(e) => {
            e.preventDefault();
            // @ts-ignore
            window.lenis?.scrollTo(0, { duration: 2 });
          }}
        >
          <div className='p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors'>
            <Code2 className='w-6 h-6 text-accent' />
          </div>
          <span className='text-xl font-bold font-mono tracking-tighter text-slate-100'>
            DEV<span className='text-accent'>.OSKI3K</span>
          </span>
        </a>

        <div className='hidden md:flex items-center gap-8'>
          <div className='flex items-center gap-8'>
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  const targetId = item.href.substring(1);
                  const element = document.getElementById(targetId);
                  if (element) {
                    const offset = 80;
                    const elementPosition =
                      element.getBoundingClientRect().top + window.scrollY;
                    const offsetPosition = elementPosition - offset;
                    // @ts-ignore
                    window.lenis?.scrollTo(offsetPosition, { duration: 3 });
                  }
                }}
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

          <div className='relative language-dropdown'>
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className='flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-900/50 border border-slate-800 hover:border-accent/50 transition-all group'
              aria-label='Change language'
            >
              <Languages className='w-4 h-4 text-slate-400 group-hover:text-accent transition-colors' />
              <span
                className={`fi fi-${
                  languages.find((l) => l.code === language)?.flag
                } text-sm`}
              ></span>
            </button>

            <AnimatePresence>
              {langMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className='absolute top-full right-0 mt-2 bg-slate-900 border border-slate-800 rounded-lg shadow-xl overflow-hidden z-50 min-w-[150px]'
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setLangMenuOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                        language === lang.code
                          ? "bg-accent/20 text-accent"
                          : "text-slate-300 hover:bg-slate-800 hover:text-white"
                      }`}
                    >
                      <span className={`fi fi-${lang.flag} text-sm`}></span>
                      <span className='font-medium'>{lang.name}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
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
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`text-lg font-medium ${
                    activeSection === item.href.substring(1)
                      ? "text-accent"
                      : "text-slate-300 hover:text-accent"
                  }`}
                >
                  {item.label}
                </a>
              ))}

              <div className='border-t border-slate-800 pt-4 mt-2'>
                <p className='text-xs text-slate-500 mb-3 uppercase tracking-wider'>
                  Language
                </p>
                <div className='grid grid-cols-2 gap-2'>
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsOpen(false);
                      }}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all ${
                        language === lang.code
                          ? "bg-accent/20 text-accent border border-accent/50"
                          : "bg-slate-900 text-slate-300 border border-slate-800 hover:border-accent/50"
                      }`}
                    >
                      <span className={`fi fi-${lang.flag} text-xl`}></span>
                      <span className='font-medium'>{lang.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
