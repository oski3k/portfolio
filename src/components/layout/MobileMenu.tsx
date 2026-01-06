import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import React from "react";
import { createPortal } from "react-dom";
import { useLanguage } from "../../contexts/LanguageContext";
import { languages } from "../ui/LanguageDropdown";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  menuItems: { label: string; href: string }[];
  onScrollTo: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  menuItems,
  onScrollTo,
}) => {
  const { language, setLanguage } = useLanguage();

  if (typeof document === "undefined") return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
        when: "afterChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  };

  return createPortal(
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          key="mobile-menu"
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed inset-0 bg-dark-bg/95 backdrop-blur-xl z-[9999] flex flex-col overflow-y-auto overflow-x-hidden"
        >
          {/* Header */}
          <div className="flex justify-between items-center p-6 border-b border-white/5">
            <span className="text-2xl font-bold font-mono tracking-tighter text-white">
              oski<span className="text-accent">3k</span>
            </span>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
              aria-label="Close menu"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>

          <div className="flex-1 flex flex-col px-6 py-8">
            {/* Nav Links */}
            <AnimatePresence mode="wait">
              <motion.nav
                key={language}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="flex flex-col gap-6 mb-12"
              >
                {menuItems.map((item) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      onClose();
                      onScrollTo(e, item.href);
                    }}
                    variants={itemVariants}
                    className="text-4xl font-bold text-white hover:text-accent transition-colors tracking-tight"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </motion.nav>
            </AnimatePresence>

            {/* Language Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-auto"
            >
              <div className="grid grid-cols-3 xs:grid-cols-4 gap-3 bg-white/5 p-4 rounded-2xl border border-white/5">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`flex flex-col items-center justify-center p-3 rounded-xl transition-all duration-300 relative overflow-hidden group ${
                      language === lang.code
                        ? "bg-accent/20 border border-accent shadow-[0_0_15px_rgba(99,102,241,0.2)]"
                        : "bg-slate-800/50 border border-white/5 hover:bg-white/10"
                    }`}
                  >
                    <span
                      className={`fi fi-${lang.flag} text-2xl rounded-full mb-2 shadow-sm scale-110 group-hover:scale-125 transition-transform`}
                    />
                    <span
                      className={`text-[10px] font-medium tracking-wide text-center uppercase ${
                        language === lang.code ? "text-white" : "text-slate-400"
                      }`}
                    >
                      {lang.code}
                    </span>
                    {language === lang.code && (
                      <motion.div
                        layoutId="active-lang"
                        className="absolute inset-0 bg-accent/5 rounded-xl"
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.6,
                        }}
                      />
                    )}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default MobileMenu;
