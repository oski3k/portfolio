import { useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

export const useMagneticEffect = () => {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 300 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

      if (distance < 100) {
        x.set(distanceX * 0.3);
        y.set(distanceY * 0.3);
      } else {
        x.set(0);
        y.set(0);
      }
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    const element = ref.current;
    if (element) {
      element.addEventListener("mousemove", handleMouseMove as EventListener);
      element.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (element) {
        element.removeEventListener(
          "mousemove",
          handleMouseMove as EventListener
        );
        element.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [x, y]);

  return { ref, springX, springY };
};
