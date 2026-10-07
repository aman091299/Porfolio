import type { StaticImageData } from "next/image";

import netflixGpt from "@/assets/projects/netflix-gpt.jpg";
import seafoodStore from "@/assets/projects/seafood-store.jpg";
import studyNotion from "@/assets/projects/studynotion.jpg";
import youtubeClone from "@/assets/projects/youtube-clone.jpg";

export type Project = {
  title: string;
  description: string;
  stack: string[];
  image?: StaticImageData;
  liveUrl?: string;
  codeUrl?: string;
};

export const projects: Project[] = [
  {
    title: "StudyNotion",
    description:
      "An ed-tech platform where instructors publish courses and students buy and study them, with OTP sign-up, Razorpay checkout and course progress tracking.",
    stack: ["React", "Redux Toolkit", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Razorpay"],
    image: studyNotion,
    liveUrl: "https://studynotion-frontend-ten.vercel.app/",
    codeUrl: "https://github.com/aman091299/EdTech_Website",
  },
  {
    title: "Netflix GPT",
    description:
      "A Netflix-style movie app with Firebase auth and a GPT-powered search that suggests films from a plain-language prompt.",
    stack: ["Next.js", "OpenAI", "Firebase", "Redux Toolkit", "Tailwind CSS"],
    image: netflixGpt,
    liveUrl: "https://neflix-gpt.vercel.app",
    codeUrl: "https://github.com/aman091299/Neflix-gpt",
  },
  {
    title: "Seafood Store",
    description:
      "A seafood delivery storefront with category browsing, a cart, Razorpay payments and maps, backed by its own Express and MongoDB API.",
    stack: ["Next.js", "Redux Toolkit", "Express", "MongoDB", "JWT", "Leaflet"],
    image: seafoodStore,
    liveUrl: "https://ecommerce-frontend-one-fawn.vercel.app/",
    codeUrl: "https://github.com/aman091299/Ecommerce_frontend",
  },
  {
    title: "YouTube Clone",
    description:
      "A YouTube front end on the YouTube Data API with category filters, a watch page and cached search suggestions.",
    stack: ["Next.js", "Redux Toolkit", "Tailwind CSS", "YouTube API"],
    image: youtubeClone,
    liveUrl: "https://my-youtube-mauve.vercel.app",
    codeUrl: "https://github.com/aman091299/My-youtube",
  },
  {
    title: "DevTinder",
    description:
      "A networking app for developers. Browse profiles, send connection requests and chat in real time with your connections. Premium membership is paid through Razorpay.",
    stack: ["Next.js", "TypeScript", "Socket.io", "Express", "MongoDB", "JWT", "Razorpay"],
    liveUrl: "https://dev-tinder-frontend-psi.vercel.app",
    codeUrl: "https://github.com/aman091299/DevTinder",
  },
];
