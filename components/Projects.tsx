import React, { useState, useRef } from "react";
import Section from "./ui/Section";
import { Project } from "../types";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { ExternalLink, Github, Gamepad2, Globe } from "lucide-react";
import TextReveal from "./ui/TextReveal";
import { useLanguage } from "../contexts/LanguageContext";

const Projects: React.FC = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<"All" | "Website" | "App">("All");

  const projectData: Project[] = [
    {
      id: 1,
      title: "Motivio: Habit Tracker & Goals",
      category: "App",
      description: t.projects.motivio.description,
      tech: ["Flutter", "Dart", "Android", "Firebase"],
      image: "/motivio.png",
      githubUrl: "",
      liveUrl:
        "https://play.google.com/store/apps/details?id=com.oski3k.motivio",
    },
  ];

  const filteredProjects = projectData.filter(
    (p) => filter === "All" || p.category === filter
  );

  return (
    <Section id='projects' className='bg-dark-card/50'>
      <div className='container mx-auto px-6'>
        <div className='flex flex-col md:flex-row justify-between items-center md:items-end mb-12'>
          <div>
            <TextReveal>
              <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
                {t.projects.title}{" "}
                <span className='text-accent'>{t.projects.titleAccent}</span>
              </h2>
            </TextReveal>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='text-slate-400 max-w-md'
            >
              {t.projects.subtitle}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='flex bg-slate-900 p-1 rounded-lg border border-slate-800 mt-6 md:mt-0 mx-auto md:mx-0'
          >
            {(["All", "Website", "App"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  filter === tab
                    ? "bg-accent text-white shadow-lg"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {tab === "All"
                  ? t.projects.filterAll
                  : tab === "Website"
                  ? t.projects.filterWebsites
                  : t.projects.filterApps}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div
          layout
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8'
        >
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </Section>
  );
};

const ProjectCard: React.FC<{ project: Project; index: number }> = ({
  project,
  index,
}) => {
  const { t } = useLanguage();
  const cardRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);

  return (
    <motion.div
      ref={cardRef}
      layout
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className='group relative rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden hover:border-accent/50 transition-colors'
      style={{ perspective: 1000 }}
    >
      <div className='relative h-64 overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10 opacity-60' />
        <motion.img
          style={{ y, scale }}
          src={project.image}
          alt={project.title}
          className='w-full h-full object-cover'
        />
        <div className='absolute top-4 right-4 z-20 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 flex items-center gap-2'>
          {project.category === "App" ? (
            <Gamepad2 size={14} className='text-purple-400' />
          ) : (
            <Globe size={14} className='text-cyan-400' />
          )}
          <span className='text-xs font-medium text-white'>
            {project.category === "App"
              ? t.projects.categoryApp
              : t.projects.categoryWebsite}
          </span>
        </div>
      </div>

      <div className='p-6 relative z-20 -mt-10'>
        <motion.div
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
          className='bg-slate-900/90 backdrop-blur-xl p-6 rounded-xl border border-white/5 shadow-xl'
        >
          <h3 className='text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors'>
            {project.title}
          </h3>
          <p className='text-slate-400 text-sm mb-4 line-clamp-2'>
            {project.description}
          </p>

          <div className='flex flex-wrap gap-2 mb-6'>
            {project.tech.map((t) => (
              <span
                key={t}
                className='text-xs px-2 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700'
              >
                {t}
              </span>
            ))}
          </div>

          <div className='flex gap-4'>
            {project.githubUrl && project.githubUrl !== "#" && (
              <a
                href={project.githubUrl}
                className='flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors'
              >
                <Github size={16} /> {t.projects.code}
              </a>
            )}
            {project.liveUrl && project.liveUrl !== "#" && (
              <a
                href={project.liveUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-glow transition-colors'
              >
                <ExternalLink size={16} /> {t.projects.liveDemo}
              </a>
            )}
          </div>
        </motion.div>
      </div>

      <div className='absolute inset-0 border-2 border-transparent group-hover:border-accent/20 rounded-2xl pointer-events-none transition-colors duration-300' />
      <div className='absolute -inset-1 bg-gradient-to-r from-accent to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-10 transition duration-500 -z-10' />
    </motion.div>
  );
};

export default Projects;
