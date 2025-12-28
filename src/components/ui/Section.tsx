import React from "react";
import FadeIn from "./FadeIn";

interface SectionProps {
  children: React.ReactNode;
  id: string;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ children, id, className = "" }) => {
  return (
    <section id={id} className={`py-20 md:py-32 relative ${className}`}>
      <FadeIn>{children}</FadeIn>
    </section>
  );
};

export default Section;
