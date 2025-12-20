import React from "react";
import Section from "./ui/Section";
import { Smartphone, Layout, Code2, Terminal } from "lucide-react";

const skills = [
  {
    icon: <Layout className='w-6 h-6 text-cyan-400' />,
    title: "Frontend Ecosystem",
    desc: "React, Svelte, Tailwind CSS",
  },
  {
    icon: <Smartphone className='w-6 h-6 text-purple-400' />,
    title: "Mobile Engineering",
    desc: "Flutter, Kotlin, Android SDK",
  },
  {
    icon: <Code2 className='w-6 h-6 text-emerald-400' />,
    title: "Core Languages",
    desc: "TypeScript, JavaScript (ES6+), HTML5/CSS3",
  },
  {
    icon: <Terminal className='w-6 h-6 text-pink-400' />,
    title: "Dev Tools",
    desc: "Git, VS Code, Android Studio, NPM",
  },
];

const About: React.FC = () => {
  return (
    <Section id='about' className='container mx-auto px-6'>
      <div className='flex flex-col md:flex-row gap-12 items-start'>
        <div className='w-full md:w-1/2'>
          <h2 className='text-3xl md:text-4xl font-bold text-white mb-6'>
            About <span className='text-accent'>Me</span>
          </h2>
          <div className='p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl relative overflow-hidden group'>
            <div className='absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/20 transition-colors duration-500'></div>

            <p className='text-slate-300 leading-relaxed mb-6'>
              I am an ambitious IT student transforming passion into
              professional code. For the past year, I have focused on building
              scalable Web and Mobile applications that solve real-world
              problems.
            </p>
            <p className='text-slate-300 leading-relaxed'>
              I combine technical education with a practical, project-based
              approach. I am driven by 'clean code' principles and the desire to
              master new technologies quickly. My goal is to bridge the gap
              between functional logic and smooth user experience.
            </p>
          </div>
        </div>

        <div className='w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4'>
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className='p-6 rounded-xl bg-dark-card border border-slate-800 hover:border-accent/50 transition-colors group'
            >
              <div className='mb-4 p-3 bg-slate-900 rounded-lg w-fit group-hover:scale-110 transition-transform duration-300'>
                {skill.icon}
              </div>
              <h3 className='text-lg font-semibold text-white mb-2'>
                {skill.title}
              </h3>
              <p className='text-sm text-slate-400'>{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default About;
