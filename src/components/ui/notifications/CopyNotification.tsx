import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import React from "react";
import { useLanguage } from "../../../contexts/LanguageContext";

interface CopyNotificationProps {
  show: boolean;
}

const CopyNotification: React.FC<CopyNotificationProps> = ({ show }) => {
  const { t } = useLanguage();

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          className="fixed bottom-8 right-8 z-50 bg-slate-900 border border-slate-800 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3"
        >
          <motion.div
            className="bg-green-500/20 p-2 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <Check className="w-5 h-5 text-green-500" />
          </motion.div>
          <div>
            <h4 className="font-bold text-sm">{t.contact.emailCopied}</h4>
            <p className="text-xs text-slate-400">{t.contact.readyToPaste}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CopyNotification;
