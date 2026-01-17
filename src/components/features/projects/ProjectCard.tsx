import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink, Gamepad2, Github, Globe } from "lucide-react";
import React, { useRef } from "react";
import { useLanguage } from "../../../contexts/LanguageContext";
import { trackProjectClick } from "../../../hooks/useAnalytics";
import { Project } from "../../../types";

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
      transition={{ duration: 0.4, delay: 0 }}
      whileHover={{ y: -10 }}
      className="group relative rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden hover:border-accent/50 transition-colors"
      style={{ perspective: 1000 }}
    >
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10 opacity-60" />
        <motion.img
          style={{ y, scale }}
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 z-20 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 flex items-center gap-2">
          {project.category === "App" ? (
            <Gamepad2 size={14} className="text-purple-400" />
          ) : (
            <Globe size={14} className="text-cyan-400" />
          )}
          <span className="text-xs font-medium text-white">
            {project.category === "App"
              ? t.projects.categoryApp
              : t.projects.categoryWebsite}
          </span>
        </div>

        {project.isTesting && (
          <div className="absolute top-4 left-4 z-20 bg-yellow-500/90 backdrop-blur-md px-3 py-1 rounded-full border border-yellow-300/20 shadow-lg">
            <span className="text-xs font-bold text-black uppercasetracking-wider">
              {t.projects.testingPhase}
            </span>
          </div>
        )}
      </div>

      <div className="p-6 relative z-20 -mt-10">
        <motion.div
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
          className="bg-slate-900/90 backdrop-blur-xl p-6 rounded-xl border border-white/5 shadow-xl"
        >
          <h3 className="text-xl xl:text-2xl 2xl:text-3xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <p className="text-slate-400 text-sm xl:text-base 2xl:text-lg mb-4">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs xl:text-sm 2xl:text-base px-2 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            {project.githubUrl && project.githubUrl !== "#" && (
              <a
                href={project.githubUrl}
                onClick={() =>
                  trackProjectClick(project.title, project.githubUrl)
                }
                className="flex items-center gap-2 text-sm xl:text-base 2xl:text-lg font-medium text-slate-400 hover:text-white transition-colors"
              >
                <Github size={16} /> {t.projects.code}
              </a>
            )}
            {project.liveUrl && project.liveUrl !== "#" && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackProjectClick(project.title, project.liveUrl)
                }
                className="flex items-center gap-2 text-sm xl:text-base 2xl:text-lg font-medium text-accent hover:text-accent-glow transition-colors"
              >
                <ExternalLink size={16} /> {t.projects.liveDemo}
              </a>
            )}
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent/20 rounded-2xl pointer-events-none transition-colors duration-300" />
      <div className="absolute -inset-1 bg-gradient-to-r from-accent to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-10 transition duration-500 -z-10" />
    </motion.div>
  );
};

export default ProjectCard;
