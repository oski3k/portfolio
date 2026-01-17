export interface Project {
  id: number;
  title: string;
  description: string;
  category: "Website" | "App";
  tech: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
  isTesting?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
}

export * from "./contact";
