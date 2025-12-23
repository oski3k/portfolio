import React, { useState } from "react";
import { Mail, Github, Linkedin, X, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "./ui/Section";
import { EMAIL, SOCIAL_LINKS } from "../constants";
import TextReveal from "./ui/TextReveal";
import { useLanguage } from "../contexts/LanguageContext";

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [showNotification, setShowNotification] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(EMAIL);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000);
  };

  return (
    <Section id='contact' className='pb-32 pt-32 relative'>
      <div className='container mx-auto px-6 text-center'>
        <div className='max-w-2xl mx-auto'>
          <TextReveal>
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
              {t.contact.title1} <br />
              <span className='text-accent bg-clip-text text-transparent bg-gradient-to-r from-accent to-purple-500'>
                {t.contact.title2}
              </span>
            </h2>
          </TextReveal>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='text-slate-400 mb-10 text-lg'
          >
            {t.contact.subtitle}
          </motion.p>

          <div className='flex justify-center gap-8 mb-12'>
            {[
              { icon: Github, href: SOCIAL_LINKS.GITHUB },
              {
                icon: Linkedin,
                href: SOCIAL_LINKS.LINKEDIN,
              },
              { icon: X, href: SOCIAL_LINKS.X },
              { icon: Mail, href: `mailto:${EMAIL}` },
            ].map((Item, idx) => (
              <motion.a
                key={idx}
                href={Item.href}
                target={Item.href.startsWith("mailto") ? undefined : "_blank"}
                rel='noopener noreferrer'
                onClick={(e) => {
                  if (Item.href.startsWith("mailto")) {
                    handleCopyEmail(e);
                  }
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + idx * 0.1 }}
                whileHover={{ y: -5, scale: 1.1 }}
                className='group relative p-4 rounded-full bg-slate-900 border border-slate-800 hover:border-accent transition-all duration-300'
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: idx * 0.2,
                  }}
                  className='absolute inset-0 bg-accent/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity'
                />
                <Item.icon className='w-6 h-6 text-slate-400 group-hover:text-white relative z-10' />
              </motion.a>
            ))}
          </div>
        </div>

        <div className='border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm'>
          <p>
            © {new Date().getFullYear()} Oski3K. {t.contact.copyright}
          </p>
          <div className='flex gap-6 mt-4 md:mt-0'>
            <a href='#' className='hover:text-slate-300'>
              {t.contact.privacyPolicy}
            </a>
            <a href='#' className='hover:text-slate-300'>
              {t.contact.termsOfService}
            </a>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className='fixed bottom-8 right-8 z-50 bg-slate-900 border border-slate-800 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3'
          >
            <div className='bg-green-500/20 p-2 rounded-full'>
              <Check className='w-5 h-5 text-green-500' />
            </div>
            <div>
              <h4 className='font-bold text-sm'>{t.contact.emailCopied}</h4>
              <p className='text-xs text-slate-400'>{t.contact.readyToPaste}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
};

export default Contact;
