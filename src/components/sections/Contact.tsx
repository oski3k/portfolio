import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import React, { useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import ContactForm from "../features/contact/ContactForm";
import ContactSocial from "../features/contact/ContactSocial";
import FloatingParticles from "../features/contact/FloatingParticles";
import CopyNotification from "../ui/notifications/CopyNotification";
import ErrorModal from "../ui/notifications/ErrorModal";
import SuccessModal from "../ui/notifications/SuccessModal";
import Section from "../ui/Section";
import TextReveal from "../ui/TextReveal";

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [showCopyNotification, setShowCopyNotification] = useState(false);
  const [modalState, setModalState] = useState<{
    type: "success" | "error" | null;
    message?: string;
  }>({ type: null });

  const handleCopyEmail = () => {
    setShowCopyNotification(true);
    setTimeout(() => setShowCopyNotification(false), 2000);
  };

  const handleSuccess = () => {
    setModalState({ type: "success" });
  };

  const handleError = (message: string) => {
    setModalState({ type: "error", message });
  };

  const closeModal = () => {
    setModalState({ type: null });
  };

  return (
    <Section id="contact" className="pb-32 pt-32 relative overflow-hidden">
      <FloatingParticles />

      <motion.div
        className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm text-accent font-medium">
                {t.contact.contactBadge}
              </span>
            </motion.div>

            <TextReveal>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {t.contact.title1} <br />
                <span className="text-accent bg-clip-text text-transparent bg-gradient-to-r from-accent to-purple-500">
                  {t.contact.title2}
                </span>
              </h2>
            </TextReveal>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-slate-400 mb-10 text-lg"
            >
              {t.contact.subtitle}
            </motion.p>
          </div>

          <ContactForm onSuccess={handleSuccess} onError={handleError} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-16"
          >
            <ContactSocial onCopyEmail={handleCopyEmail} />
          </motion.div>

          <footer className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
            <p>
              © {new Date().getFullYear()} Oskar Śledź. {t.contact.copyright}
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-slate-300 transition-colors">
                {t.contact.privacyPolicy}
              </a>
              <a href="#" className="hover:text-slate-300 transition-colors">
                {t.contact.termsOfService}
              </a>
            </div>
          </footer>
        </div>
      </div>

      <CopyNotification show={showCopyNotification} />

      <SuccessModal
        isOpen={modalState.type === "success"}
        onClose={closeModal}
      />
      <ErrorModal
        isOpen={modalState.type === "error"}
        onClose={closeModal}
        message={modalState.message || ""}
      />
    </Section>
  );
};

export default Contact;
