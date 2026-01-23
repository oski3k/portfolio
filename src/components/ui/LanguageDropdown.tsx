import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { Language } from "../../lib/i18n";

export interface LanguageOption {
  code: Language;
  name: string;
  flag: string;
}

export const languages: LanguageOption[] = [
  { code: "pl", name: "Polski", flag: "pl" },
  { code: "en", name: "English", flag: "gb" },
  { code: "de", name: "Deutsch", flag: "de" },
  { code: "fr", name: "Français", flag: "fr" },
  { code: "es", name: "Español", flag: "es" },
  { code: "it", name: "Italiano", flag: "it" },
  { code: "pt", name: "Português", flag: "pt" },
  { code: "ru", name: "Русский", flag: "ru" },
  { code: "zh", name: "中文", flag: "cn" },
  { code: "ja", name: "日本語", flag: "jp" },
  { code: "ar", name: "العربية", flag: "sa" },
  { code: "hi", name: "हिन्दी", flag: "in" },
  { code: "nl", name: "Nederlands", flag: "nl" },
];

interface LanguageDropdownProps {
  isMobile?: boolean;
}

const LanguageDropdown: React.FC<LanguageDropdownProps> = ({
  isMobile = false,
}) => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const currentLanguage =
    languages.find((lang) => lang.code === language) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (menuRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = menuRef.current;
        const isScrollingDown = e.deltaY > 0;
        const isScrollingUp = e.deltaY < 0;

        if (
          (isScrollingDown && scrollTop + clientHeight < scrollHeight) ||
          (isScrollingUp && scrollTop > 0)
        ) {
          e.stopPropagation();
        }
      }
    };

    const menuElement = menuRef.current;
    if (isOpen && menuElement) {
      menuElement.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (menuElement) {
        menuElement.removeEventListener("wheel", handleWheel);
      }
    };
  }, [isOpen]);

  const handleLanguageSelect = (code: Language) => {
    setLanguage(code);
    setIsOpen(false);
  };

  if (isMobile) {
    return (
      <div ref={dropdownRef} className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-3 px-6 py-3 bg-slate-800 rounded-full border border-slate-700 hover:border-accent/50 transition-colors w-full justify-center"
        >
          <span
            className={`fi fi-${currentLanguage.flag} text-xl rounded-full`}
          />
          <span className="text-lg font-mono font-bold text-white">
            {currentLanguage.name}
          </span>
          <ChevronDown
            className={`w-5 h-5 text-slate-400 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 mt-2 bg-slate-900/95 backdrop-blur-xl rounded-2xl border border-slate-700/50 overflow-hidden shadow-2xl z-50 max-h-[400px] overflow-y-auto"
            >
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageSelect(lang.code)}
                  className={`w-full flex items-center gap-3 px-6 py-3 hover:bg-slate-800/50 transition-colors ${
                    lang.code === language
                      ? "bg-accent/10 border-l-2 border-accent"
                      : ""
                  }`}
                >
                  <span className={`fi fi-${lang.flag} text-xl rounded-full`} />
                  <span className="text-base font-medium text-slate-200">
                    {lang.name}
                  </span>
                  {lang.code === language && (
                    <span className="ml-auto text-accent text-sm">✓</span>
                  )}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1 bg-slate-800/50 rounded-full border border-slate-700 hover:border-accent/50 transition-colors"
      >
        <span className={`fi fi-${currentLanguage.flag} rounded-full`} />
        <span className="text-xs font-mono font-bold text-slate-300">
          {currentLanguage.code.toUpperCase()}
        </span>
        <ChevronDown
          className={`w-3 h-3 text-slate-400 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-0 mt-2 bg-slate-900/95 backdrop-blur-xl rounded-2xl border border-slate-700/50 overflow-hidden shadow-2xl z-50 min-w-[200px] max-h-[400px] overflow-y-auto"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageSelect(lang.code)}
                className={`w-full flex items-center gap-3 px-4 py-2.5 hover:bg-slate-800/50 transition-colors ${
                  lang.code === language
                    ? "bg-accent/10 border-l-2 border-accent"
                    : ""
                }`}
              >
                <span className={`fi fi-${lang.flag} rounded-full`} />
                <span className="text-sm font-medium text-slate-200">
                  {lang.name}
                </span>
                {lang.code === language && (
                  <span className="ml-auto text-accent text-xs">✓</span>
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageDropdown;
