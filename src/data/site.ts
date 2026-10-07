export const site = {
  name: "Aman Singh",
  role: "Full Stack Developer",
  // Add your email to turn every "Get in touch" button into a mailto link.
  // While it is empty those buttons open LinkedIn instead.
  email: "",
  // Optional: link to a PDF resume (for example "/aman-singh-resume.pdf" in /public).
  resumeUrl: "",
  socials: {
    github: "https://github.com/aman091299",
    linkedin: "https://www.linkedin.com/in/aman-singh-12a16b236/",
    x: "https://twitter.com/aman091299",
    instagram: "https://www.instagram.com/aman091299/",
  },
};

export const contactHref = site.email ? `mailto:${site.email}` : site.socials.linkedin;

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
];
