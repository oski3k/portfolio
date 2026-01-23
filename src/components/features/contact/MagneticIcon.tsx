import { motion } from "framer-motion";
import React from "react";
import { trackSocialClick } from "../../../hooks/useAnalytics";
import { useMagneticEffect } from "../../../hooks/useMagneticEffect";

interface MagneticIconProps {
  icon: React.ElementType;
  href: string;
  name: string;
  onClick?: (e: React.MouseEvent) => void;
  index: number;
}

const MagneticIcon: React.FC<MagneticIconProps> = ({
  icon: Icon,
  href,
  name,
  onClick,
  index,
}) => {
  const { ref, springX, springY } = useMagneticEffect();

  return (
    <motion.a
      ref={ref}
      href={href}
      target={href.startsWith("mailto") ? undefined : "_blank"}
      rel="noopener noreferrer"
      onClick={(e) => {
        if (onClick) {
          onClick(e);
        } else {
          trackSocialClick(name, href);
        }
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: 1.1 + index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{ x: springX, y: springY }}
      className="group relative p-4 rounded-full bg-slate-900 border border-slate-800 hover:border-accent transition-all duration-300"
    >
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: index * 0.2,
        }}
        className="absolute inset-0 bg-accent/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity"
      />
      <Icon className="w-6 h-6 text-slate-400 group-hover:text-white relative z-10 transition-colors" />
    </motion.a>
  );
};

export default MagneticIcon;
