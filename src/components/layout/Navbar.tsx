import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";

const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.contact, href: "#contact" },
  ];

  const handleScrollTo = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 100;
      // @ts-ignore
      if (window.lenis) {
        // @ts-ignore
        window.lenis.scrollTo(top, { duration: 1.5 });
      } else {
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === "pl" ? "en" : "pl");
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled || isOpen
          ? "bg-dark-bg/80 backdrop-blur-md py-4"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a
          href="#"
          className="text-2xl font-bold font-mono tracking-tighter z-50 relative"
        >
          oski<span className="text-accent">3k</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleScrollTo(e, item.href)}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors uppercase tracking-widest relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
            </a>
          ))}

          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-1 bg-slate-800/50 rounded-full border border-slate-700 hover:border-accent/50 transition-colors ml-4"
          >
            <span
              className={`fi fi-${
                language === "pl" ? "pl" : "gb"
              } rounded-full`}
            />
            <span className="text-xs font-mono font-bold text-slate-300">
              {language.toUpperCase()}
            </span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50 relative p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed inset-0 bg-dark-bg flex flex-col items-center justify-center gap-8 md:hidden"
            >
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href)}
                  className="text-3xl font-bold font-mono text-white hover:text-accent transition-colors"
                >
                  {item.label}
                </a>
              ))}

              <button
                onClick={toggleLanguage}
                className="flex items-center gap-3 px-6 py-3 bg-slate-800 rounded-full mt-8 border border-slate-700"
              >
                <span
                  className={`fi fi-${
                    language === "pl" ? "pl" : "gb"
                  } text-xl rounded-full`}
                />
                <span className="text-lg font-mono font-bold text-white">
                  {language === "pl" ? "Polski" : "English"}
                </span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
