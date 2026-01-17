import type { Translations } from "../lib/i18n";
import { Project } from "../types";

export const getProjects = (t: Translations): Project[] => [
  {
    id: 1,
    title: "Motivio: Habit Tracker & Goals",
    category: "App",
    description: t.projects.motivio.description,
    tech: ["Flutter", "Dart", "Android", "Firebase"],
    image: "/motivio.png",
    githubUrl: "",
    liveUrl: "https://play.google.com/store/apps/details?id=com.oski3k.motivio",
  },
  {
    id: 2,
    title: "BodyLog AI: Body Tracker",
    category: "App",
    description: t.projects.bodylog.description,
    tech: ["Flutter", "Dart", "Android", "Firebase", "AI"],
    image: "/bodylog.jpg",
    isTesting: true,
    githubUrl: "",
    liveUrl: "",
  },
];
