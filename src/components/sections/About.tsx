import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { getSkills } from "../../data/skills";
import Section from "../ui/Section";
import TextReveal from "../ui/TextReveal";

const About: React.FC = () => {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const skills = getSkills(t);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0.2, 0.7], [0, 1]);

  return (
    <Section id="about" className="container mx-auto px-6">
      <div
        ref={sectionRef}
        className="flex flex-col md:flex-row gap-12 items-start"
      >
        <div className="w-full md:w-1/2">
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <TextReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {t.about.title}{" "}
                <span className="text-accent">{t.about.titleAccent}</span>
              </h2>
            </TextReveal>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/20 transition-colors duration-500"></div>

              <p className="text-slate-300 leading-relaxed mb-6">
                {t.about.paragraph1}
              </p>
              <p className="text-slate-300 leading-relaxed">
                {t.about.paragraph2}
              </p>
            </motion.div>
          </motion.div>

          <motion.div style={{ scale, opacity }} className="hidden md:block">
            <TextReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {t.about.title}{" "}
                <span className="text-accent">{t.about.titleAccent}</span>
              </h2>
            </TextReveal>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/20 transition-colors duration-500"></div>

              <p className="text-slate-300 leading-relaxed mb-6">
                {t.about.paragraph1}
              </p>
              <p className="text-slate-300 leading-relaxed">
                {t.about.paragraph2}
              </p>
            </motion.div>
          </motion.div>
        </div>

        <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-6 rounded-xl bg-dark-card border border-slate-800 hover:border-accent/50 transition-colors group cursor-pointer"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="mb-4 p-3 bg-slate-900 rounded-lg w-fit"
              >
                {skill.icon}
              </motion.div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {skill.title}
              </h3>
              <p className="text-sm text-slate-400">{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default About;
