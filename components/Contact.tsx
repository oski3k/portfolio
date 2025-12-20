import React from 'react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
import Section from './ui/Section';

const Contact: React.FC = () => {
  return (
    <Section id="contact" className="pb-10 pt-20">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Build Something <br />
            <span className="text-accent bg-clip-text text-transparent bg-gradient-to-r from-accent to-purple-500">
              Extraordinary
            </span>
          </h2>
          <p className="text-slate-400 mb-10 text-lg">
            I'm currently looking for new opportunities. Whether you have a question
            or just want to say hi, my inbox is always open.
          </p>

          <a
            href="mailto:hello@devfolio.com"
            className="inline-block px-10 py-4 bg-white text-dark-bg font-bold rounded-full hover:bg-slate-200 transition-all transform hover:scale-105 shadow-2xl mb-16"
          >
            Say Hello
          </a>

          <div className="flex justify-center gap-8 mb-12">
            {[
              { icon: Github, href: "#" },
              { icon: Linkedin, href: "#" },
              { icon: Twitter, href: "#" },
              { icon: Mail, href: "mailto:hello@example.com" }
            ].map((Item, idx) => (
              <a
                key={idx}
                href={Item.href}
                className="group relative p-4 rounded-full bg-slate-900 border border-slate-800 hover:border-accent transition-all duration-300"
              >
                <div className="absolute inset-0 bg-accent/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                <Item.icon className="w-6 h-6 text-slate-400 group-hover:text-white relative z-10" />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} AlexDev. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;