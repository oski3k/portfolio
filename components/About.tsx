import React from 'react';
import Section from './ui/Section';
import { Smartphone, Monitor, Database, Globe } from 'lucide-react';

const skills = [
  { icon: <Globe className="w-6 h-6 text-cyan-400" />, title: "Web Development", desc: "React, Next.js, Tailwind, TypeScript" },
  { icon: <Smartphone className="w-6 h-6 text-purple-400" />, title: "Android Apps", desc: "Kotlin, Jetpack Compose, Flutter" },
  { icon: <Database className="w-6 h-6 text-emerald-400" />, title: "Backend", desc: "Node.js, PostgreSQL, Firebase" },
  { icon: <Monitor className="w-6 h-6 text-pink-400" />, title: "UI/UX Design", desc: "Figma, Framer Motion, Responsive Layouts" },
];

const About: React.FC = () => {
  return (
    <Section id="about" className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row gap-12 items-start">
        
        {/* Bio Card */}
        <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              About <span className="text-accent">Me</span>
            </h2>
            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/20 transition-colors duration-500"></div>
              
              <p className="text-slate-300 leading-relaxed mb-6">
                I am a passionate Full Stack Developer with a dual love for the web and mobile ecosystems. 
                With 5+ years of coding experience, I specialize in building scalable, user-centric applications 
                that look beautiful and perform flawlessly.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Whether it's optimizing a React rendering cycle or tweaking a Kotlin coroutine, 
                I thrive on the technical details that make a product feel "premium".
              </p>
            </div>
        </div>

        {/* Skills Grid */}
        <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {skills.map((skill, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-xl bg-dark-card border border-slate-800 hover:border-accent/50 transition-colors group"
            >
              <div className="mb-4 p-3 bg-slate-900 rounded-lg w-fit group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{skill.title}</h3>
              <p className="text-sm text-slate-400">{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default About;