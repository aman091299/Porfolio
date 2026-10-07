import type { IconType } from "react-icons";
import { FaAws } from "react-icons/fa";
import { PiBrain, PiChatCircleText, PiMagnifyingGlass, PiPlugs, PiRobot } from "react-icons/pi";
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

export type Skill = { name: string; icon: IconType; color?: string };

export type SkillGroup = {
  title: string;
  skills: Skill[];
};

// Brand colours are lightened where the official one disappears on a black background.
export const skillGroups: SkillGroup[] = [
  {
    title: "AI & GenAI",
    skills: [
      { name: "Agentic AI", icon: PiRobot },
      { name: "LLMs", icon: PiBrain },
      { name: "RAG", icon: PiMagnifyingGlass },
      { name: "Prompt Engineering", icon: PiChatCircleText },
      { name: "OpenAI", icon: RiOpenaiFill, color: "var(--fg)" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: SiReact, color: "#61dafb" },
      { name: "Next.js", icon: SiNextdotjs, color: "var(--fg)" },
      { name: "TypeScript", icon: SiTypescript, color: "#4f8fe0" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38bdf8" },
      { name: "HTML5", icon: SiHtml5, color: "#e96a3f" },
      { name: "CSS3", icon: SiCss, color: "#4c8ff0" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#6cc24a" },
      { name: "Express", icon: SiExpress, color: "var(--fg)" },
      { name: "PHP", icon: SiPhp, color: "#9a9ee0" },
      { name: "Python", icon: SiPython, color: "#5a9fd4" },
      { name: "REST APIs", icon: PiPlugs },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "#4db33d" },
      { name: "MySQL", icon: SiMysql, color: "#5b9bd5" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#7a9cff" },
      { name: "Firebase", icon: SiFirebase, color: "#ffca28" },
    ],
  },
  {
    title: "CMS",
    skills: [
      { name: "WordPress", icon: SiWordpress, color: "#4fa6dd" },
      { name: "Shopify", icon: SiShopify, color: "#95bf47" },
      { name: "Strapi", icon: SiStrapi, color: "#8e8bff" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: SiGit, color: "#f05032" },
      { name: "Docker", icon: SiDocker, color: "#2496ed" },
      { name: "AWS", icon: FaAws, color: "#ff9900" },
      { name: "Vercel", icon: SiVercel, color: "var(--fg)" },
      { name: "VS Code", icon: VscVscode, color: "#3aa0f0" },
    ],
  },
];
