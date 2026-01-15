import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { getProjects } from "../../data/projects";
import ProjectCard from "../features/projects/ProjectCard";
import Section from "../ui/Section";
import TextReveal from "../ui/TextReveal";

const Projects: React.FC = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<"All" | "Website" | "App">("All");

  const projectData = getProjects(t);

  const filteredProjects = projectData.filter(
    (p) => filter === "All" || p.category === filter
  );

  return (
    <Section id="projects" className="bg-dark-card/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12">
          <div>
            <TextReveal>
              <h2 className="text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white mb-4">
                {t.projects.title}{" "}
                <span className="text-accent">{t.projects.titleAccent}</span>
              </h2>
            </TextReveal>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-400 xl:text-lg 2xl:text-xl max-w-md"
            >
              {t.projects.subtitle}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex bg-slate-900 p-1 rounded-lg border border-slate-800 mt-6 md:mt-0 mx-auto md:mx-0"
          >
            {(["All", "Website", "App"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-4 py-2 rounded-md text-sm xl:text-base 2xl:text-lg font-medium transition-all ${
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
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

export default Projects;
