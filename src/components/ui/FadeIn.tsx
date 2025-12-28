import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  fullWidth?: boolean;
  padding?: boolean;
  viewportAmount?: number;
}

const FadeIn: React.FC<FadeInProps> = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  fullWidth = true,
  viewportAmount = 0.2,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: viewportAmount });

  const directionOffset =
    direction === "up"
      ? { y: 40 }
      : direction === "down"
      ? { y: -40 }
      : direction === "left"
      ? { x: 40 }
      : { x: -40 };

  const initial = { opacity: 0, ...directionOffset };
  const animate = isInView
    ? { opacity: 1, x: 0, y: 0 }
    : { opacity: 0, ...directionOffset };

  return (
    <div ref={ref} className={`${fullWidth ? "w-full" : ""} ${className}`}>
      <motion.div
        initial={initial}
        animate={animate}
        transition={{
          duration: 0.7,
          delay: delay,
          ease: [0.21, 0.47, 0.32, 0.98], // smooth spring-like ease
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default FadeIn;
