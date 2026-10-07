export type Role = {
  title: string;
  company: string;
  period: string;
  meta: string;
  current?: boolean;
  summary: string;
  skills: string[];
};

export const experience: Role[] = [
  {
    title: "Full Stack Developer",
    company: "Atravelq",
    period: "Apr 2026 - Present",
    meta: "On-site",
    current: true,
    summary:
      "Building features end to end, from Express.js APIs on the server to Tailwind CSS interfaces in the browser.",
    skills: ["Express.js", "Tailwind CSS"],
  },
  {
    title: "Web Developer",
    company: "Sagmetic Infotech Pvt. Ltd",
    period: "Aug 2025 - Mar 2026",
    meta: "Mohali, India",
    summary:
      "Built client websites and web apps with Next.js and WordPress, backed by Node.js and Express, plus React Native and Kajabi work.",
    skills: ["WordPress", "Next.js", "Node.js", "React.js", "React Native", "Express", "Kajabi"],
  },
  {
    title: "Web Developer Associate",
    company: "Brimo Software Solutions",
    period: "Mar 2024 - Feb 2025",
    meta: "Lucknow, India",
    summary:
      "Worked across React web apps, React Native mobile apps and Shopify stores, with Node.js and MongoDB on the backend.",
    skills: ["React.js", "React Native", "Shopify", "Node.js", "MongoDB"],
  },
];
