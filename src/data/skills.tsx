import { Code2, Layout, Smartphone, Terminal } from "lucide-react";

export const getSkills = (t: any) => [
  {
    icon: <Layout className="w-6 h-6 text-cyan-400" />,
    title: t.about.skills.frontend.title,
    desc: t.about.skills.frontend.desc,
  },
  {
    icon: <Smartphone className="w-6 h-6 text-purple-400" />,
    title: t.about.skills.mobile.title,
    desc: t.about.skills.mobile.desc,
  },
  {
    icon: <Code2 className="w-6 h-6 text-emerald-400" />,
    title: t.about.skills.languages.title,
    desc: t.about.skills.languages.desc,
  },
  {
    icon: <Terminal className="w-6 h-6 text-pink-400" />,
    title: t.about.skills.tools.title,
    desc: t.about.skills.tools.desc,
  },
];
