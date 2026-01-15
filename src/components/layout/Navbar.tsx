import { Menu, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import LanguageDropdown from "../ui/LanguageDropdown";
import MobileMenu from "./MobileMenu";

const Navbar: React.FC = () => {
  const { t } = useLanguage();
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
      if (window.lenis) {
        window.lenis.scrollTo(top, { duration: 1.5 });
      } else {
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
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
        <h1 className="text-2xl xl:text-3xl 2xl:text-4xl font-bold font-mono tracking-tighter z-50 relative">
          <a href="#" className="hover:text-accent transition-colors">
            Oskar <span className="text-accent">Śledź</span>
          </a>
        </h1>

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

          <LanguageDropdown />
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50 relative p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>

        <MobileMenu
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          menuItems={menuItems}
          onScrollTo={handleScrollTo}
        />
      </div>
    </nav>
  );
};

export default Navbar;
