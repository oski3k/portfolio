import React, { useState } from 'react';
import Section from './ui/Section';
import { Project } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Gamepad2, Globe } from 'lucide-react';

const projectData: Project[] = [
  {
    id: 1,
    title: "Neon Nexus Dashboard",
    category: "Website",
    description: "A high-performance SaaS analytics dashboard with real-time data visualization.",
    tech: ["React", "TypeScript", "D3.js"],
    image: "https://picsum.photos/seed/nexus/600/400",
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 2,
    title: "Cyber Drift Racer",
    category: "Game",
    description: "A fast-paced endless runner game built for Android using Unity and C#.",
    tech: ["Unity", "C#", "Android"],
    image: "https://picsum.photos/seed/racer/600/400",
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 3,
    title: "EcoSphere Commerce",
    category: "Website",
    description: "Sustainable e-commerce platform featuring 3D product previews.",
    tech: ["Next.js", "Three.js", "Stripe"],
    image: "https://picsum.photos/seed/eco/600/400",
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 4,
    title: "Pixel Quest RPG",
    category: "Game",
    description: "Retro-style 2D RPG with turn-based combat system.",
    tech: ["Godot", "GDScript", "Pixel Art"],
    image: "https://picsum.photos/seed/pixel/600/400",
    githubUrl: "#",
    liveUrl: "#"
  }
];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Website' | 'Game'>('All');

  const filteredProjects = projectData.filter(
    (p) => filter === 'All' || p.category === filter
  );

  return (
    <Section id="projects" className="bg-dark-card/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured <span className="text-accent">Projects</span>
            </h2>
            <p className="text-slate-400 max-w-md">
              A collection of my best work across web and mobile platforms.
            </p>
          </div>
          
          {/* Filter Tabs */}
          <div className="flex bg-slate-900 p-1 rounded-lg border border-slate-800 mt-6 md:mt-0">
            {(['All', 'Website', 'Game'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  filter === tab
                    ? 'bg-accent text-white shadow-lg'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {tab === 'All' ? 'All Work' : tab + 's'}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </Section>
  );
};

// Extracted Card Component for cleaner code
const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="group relative rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden hover:border-accent/50 transition-colors"
      style={{ perspective: 1000 }}
    >
      {/* 3D Tilt Wrapper equivalent via CSS transforms on hover */}
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10 opacity-60" />
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        <div className="absolute top-4 right-4 z-20 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 flex items-center gap-2">
            {project.category === 'Game' ? <Gamepad2 size={14} className="text-purple-400"/> : <Globe size={14} className="text-cyan-400"/>}
            <span className="text-xs font-medium text-white">{project.category}</span>
        </div>
      </div>

      <div className="p-6 relative z-20 -mt-10">
        <div className="bg-slate-900/90 backdrop-blur-xl p-6 rounded-xl border border-white/5 shadow-xl group-hover:translate-y-[-5px] transition-transform duration-300">
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
            {project.title}
            </h3>
            <p className="text-slate-400 text-sm mb-4 line-clamp-2">
            {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t) => (
                <span key={t} className="text-xs px-2 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
                {t}
                </span>
            ))}
            </div>

            <div className="flex gap-4">
            <a
                href={project.githubUrl}
                className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors"
            >
                <Github size={16} /> Code
            </a>
            <a
                href={project.liveUrl}
                className="flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-glow transition-colors"
            >
                <ExternalLink size={16} /> Live Demo
            </a>
            </div>
        </div>
      </div>
      
      {/* Glow Effect */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent/20 rounded-2xl pointer-events-none transition-colors duration-300" />
      <div className="absolute -inset-1 bg-gradient-to-r from-accent to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-10 transition duration-500 -z-10" />
    </motion.div>
  );
};

export default Projects;