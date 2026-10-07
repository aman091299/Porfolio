export type Role = {
  title: string;
  company: string;
  period: string;
  // Year shown on the timeline axis next to this role.
  year: string;
  location: string;
  current?: boolean;
  // Accent for this company's card on the timeline.
  color: string;
  points: string[];
  stack: string[];
};

export const experience: Role[] = [
  {
    title: "Senior Full Stack Developer",
    company: "Atravelq",
    period: "Apr 2026 - Present",
    year: "2026",
    location: "On-site",
    current: true,
    color: "#67e3f9",
    points: [
      "Building features end to end, from Express.js APIs to Tailwind CSS interfaces",
      "Owning work across the frontend and the backend",
    ],
    stack: ["Express.js", "Tailwind CSS"],
  },
  {
    title: "Web Developer",
    company: "Sagmetic Infotech Pvt. Ltd",
    period: "Aug 2025 - Mar 2026",
    year: "2025",
    location: "Mohali, India",
    color: "#7aa2ff",
    points: [
      "Client websites and web apps in Next.js and WordPress",
      "Node.js and Express backends behind them",
      "React Native and Kajabi work for client projects",
    ],
    stack: ["WordPress", "Next.js", "Node.js", "React.js", "React Native", "Express", "Kajabi"],
  },
  {
    title: "Web Developer Associate",
    company: "Brimo Software Solutions",
    period: "Mar 2024 - Feb 2025",
    year: "2024",
    location: "Lucknow, India",
    color: "#b79cff",
    points: [
      "React web apps and React Native mobile apps",
      "Shopify storefronts for clients",
      "Node.js and MongoDB on the backend",
    ],
    stack: ["React.js", "React Native", "Shopify", "Node.js", "MongoDB"],
  },
];
