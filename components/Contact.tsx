import React, { useState } from "react";
import { Mail, Github, Linkedin, X, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "./ui/Section";
import { EMAIL, SOCIAL_LINKS } from "../constants";

const Contact: React.FC = () => {
  const [showNotification, setShowNotification] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(EMAIL);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000);
  };

  return (
    <Section id='contact' className='pb-10 pt-20 relative'>
      <div className='container mx-auto px-6 text-center'>
        <div className='max-w-2xl mx-auto'>
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
            Let's Build Something <br />
            <span className='text-accent bg-clip-text text-transparent bg-gradient-to-r from-accent to-purple-500'>
              Extraordinary
            </span>
          </h2>
          <p className='text-slate-400 mb-10 text-lg'>
            I'm currently looking for new opportunities. Whether you have a
            question or just want to say hi, my inbox is always open.
          </p>

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
              <a
                key={idx}
                href={Item.href}
                target={Item.href.startsWith("mailto") ? undefined : "_blank"}
                rel='noopener noreferrer'
                onClick={(e) => {
                  if (Item.href.startsWith("mailto")) {
                    handleCopyEmail(e);
                  }
                }}
                className='group relative p-4 rounded-full bg-slate-900 border border-slate-800 hover:border-accent transition-all duration-300'
              >
                <div className='absolute inset-0 bg-accent/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity' />
                <Item.icon className='w-6 h-6 text-slate-400 group-hover:text-white relative z-10' />
              </a>
            ))}
          </div>
        </div>

        <div className='border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm'>
          <p>© {new Date().getFullYear()} Oski3K. All rights reserved.</p>
          <div className='flex gap-6 mt-4 md:mt-0'>
            <a href='#' className='hover:text-slate-300'>
              Privacy Policy
            </a>
            <a href='#' className='hover:text-slate-300'>
              Terms of Service
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
              <h4 className='font-bold text-sm'>Email Copied!</h4>
              <p className='text-xs text-slate-400'>Ready to paste</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
};

export default Contact;
