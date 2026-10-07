import type { IconType } from "react-icons";
import { FaAws } from "react-icons/fa";
import { RiOpenaiFill } from "react-icons/ri";
import {
  SiCss,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiGit,
  SiHtml5,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiReact,
  SiShopify,
  SiStrapi,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiWordpress,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export type Skill = { name: string; icon?: IconType };

export type SkillGroup = {
  title: string;
  skills: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "AI & GenAI",
    skills: [
      { name: "Agentic AI" },
      { name: "LLMs" },
      { name: "RAG" },
      { name: "Prompt Engineering" },
      { name: "OpenAI", icon: RiOpenaiFill },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "PHP", icon: SiPhp },
      { name: "Python", icon: SiPython },
      { name: "REST APIs" },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Firebase", icon: SiFirebase },
    ],
  },
  {
    title: "CMS",
    skills: [
      { name: "WordPress", icon: SiWordpress },
      { name: "Shopify", icon: SiShopify },
      { name: "Strapi", icon: SiStrapi },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "Docker", icon: SiDocker },
      { name: "AWS", icon: FaAws },
      { name: "Vercel", icon: SiVercel },
      { name: "VS Code", icon: VscVscode },
    ],
  },
];

// Words for the scrolling band under the hero.
export const marqueeWords = [
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "TypeScript",
  "WordPress",
  "Shopify",
  "LLMs",
  "RAG",
];
