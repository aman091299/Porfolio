import type { StaticImageData } from "next/image";

import devTinder from "@/assets/projects/devtinder.jpg";
import digitalPandas from "@/assets/projects/digital-pandas.jpg";
import netflixGpt from "@/assets/projects/netflix-gpt.jpg";
import seafoodStore from "@/assets/projects/seafood-store.jpg";
import studyNotion from "@/assets/projects/studynotion.jpg";
import youtubeClone from "@/assets/projects/youtube-clone.jpg";

export type Project = {
  title: string;
  tags: string[];
  subtitle: string;
  description: string;
  stack: string[];
  image?: StaticImageData;
  liveUrl?: string;
  codeUrl?: string;
};

export const projects: Project[] = [
  {
    title: "StudyNotion",
    tags: ["Full stack", "MERN"],
    subtitle: "Ed-tech platform for selling and taking courses",
    description:
      "Instructors publish courses and students buy and study them, with OTP sign-up, Razorpay checkout, media on Cloudinary and course progress tracking.",
    stack: ["React", "Redux Toolkit", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Razorpay"],
    image: studyNotion,
    liveUrl: "https://studynotion-frontend-ten.vercel.app/",
    codeUrl: "https://github.com/aman091299/EdTech_Website",
  },
  {
    title: "Digital Pandas",
    tags: ["Front end", "Animation"],
    subtitle: "Marketing agency website replica",
    description:
      "A rebuild of a marketing agency site with a code-themed loader, smooth scrolling and scroll-triggered animations.",
    stack: ["React", "Vite", "GSAP", "ScrollTrigger", "Lenis", "AOS"],
    image: digitalPandas,
    liveUrl: "https://digital-panda-replica-3geo.vercel.app/",
  },
  {
    title: "Netflix GPT",
    tags: ["AI", "Next.js"],
    subtitle: "Movie app with GPT-powered search",
    description:
      "A Netflix-style movie app with Firebase auth and a GPT search that suggests films from a plain-language prompt.",
    stack: ["Next.js", "OpenAI", "Firebase", "Redux Toolkit", "Tailwind CSS"],
    image: netflixGpt,
    liveUrl: "https://neflix-gpt.vercel.app",
    codeUrl: "https://github.com/aman091299/Neflix-gpt",
  },
  {
    title: "Seafood Store",
    tags: ["E-commerce", "Full stack"],
    subtitle: "Delivery storefront with its own API",
    description:
      "Category browsing, a cart, Razorpay payments and maps, backed by an Express and MongoDB API with JWT auth.",
    stack: ["Next.js", "Redux Toolkit", "Express", "MongoDB", "JWT", "Leaflet"],
    image: seafoodStore,
    liveUrl: "https://ecommerce-frontend-one-fawn.vercel.app/",
    codeUrl: "https://github.com/aman091299/Ecommerce_frontend",
  },
  {
    title: "YouTube Clone",
    tags: ["Front end", "API"],
    subtitle: "YouTube front end on the Data API",
    description: "Category filters, a watch page and search suggestions that are cached to save API calls.",
    stack: ["Next.js", "Redux Toolkit", "Tailwind CSS", "YouTube API"],
    image: youtubeClone,
    liveUrl: "https://my-youtube-mauve.vercel.app",
    codeUrl: "https://github.com/aman091299/My-youtube",
  },
  {
    title: "DevTinder",
    tags: ["Real-time", "Full stack"],
    subtitle: "Networking app for developers",
    description:
      "Browse developer profiles, send connection requests and chat in real time with your connections. Premium membership is paid through Razorpay.",
    stack: ["Next.js", "TypeScript", "Socket.io", "Express", "MongoDB", "JWT", "Razorpay"],
    image: devTinder,
    liveUrl: "https://dev-tinder-frontend-psi.vercel.app",
    codeUrl: "https://github.com/aman091299/DevTinder",
  },
];
