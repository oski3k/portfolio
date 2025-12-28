import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import React from "react";
import { createPortal } from "react-dom";
import { useLanguage } from "../../../contexts/LanguageContext";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

import { useLockBodyScroll } from "../../../hooks/useLockBodyScroll";

const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  useLockBodyScroll(isOpen);

  React.useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  const particles = React.useMemo(() => {
    return [...Array(12)].map((_, i) => ({
      id: i,
      x: Math.random() * 400 - 200,
      y: Math.random() * 400 - 200,
      targetX: Math.random() * 400 - 200,
      targetY: Math.random() * 400 - 200,
      scale: Math.random() * 0.5 + 0.5,
      duration: 10 + Math.random() * 10,
      size: Math.random() * 60 + 20,
    }));
  }, []);

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998]"
            onClick={onClose}
          />

          <div className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-full max-w-lg pointer-events-auto"
            >
              <div className="bg-slate-900/90 backdrop-blur-xl text-white p-8 rounded-3xl shadow-2xl border border-green-500/20 overflow-hidden relative">
                <div className="absolute inset-0 overflow-hidden rounded-3xl">
                  {particles.map((particle) => (
                    <motion.div
                      key={particle.id}
                      className="absolute bg-green-500/10 rounded-full"
                      initial={{
                        x: particle.x,
                        y: particle.y,
                        scale: 0,
                      }}
                      animate={{
                        x: particle.targetX,
                        y: particle.targetY,
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                      }}
                      style={{
                        width: particle.size,
                        height: particle.size,
                      }}
                    />
                  ))}
                </div>

                <div className="relative z-10 flex flex-col items-center text-center">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.2,
                    }}
                    className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-green-500/10 backdrop-blur-md border border-green-500/20"
                  >
                    <Check
                      className="w-10 h-10 text-green-400"
                      strokeWidth={3}
                    />
                  </motion.div>

                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-3xl font-bold mb-3 text-white"
                  >
                    {t.contact.successTitle}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-slate-300 text-lg mb-8"
                  >
                    {t.contact.successMessage}
                  </motion.p>

                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onClose}
                    className="px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold rounded-xl shadow-lg shadow-green-600/20 hover:shadow-green-600/40 transition-all border border-green-500/20"
                  >
                    {t.contact.close}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default SuccessModal;
