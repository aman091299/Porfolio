import { PiArrowRight, PiBriefcase, PiCode, PiMapPin, PiRocketLaunch, PiSparkle } from "react-icons/pi";

import { site } from "@/data/site";
import { Container, SectionHeader, Tag } from "./primitives";

const glance = [
  { label: "Experience", value: "2+ years, full-time", Icon: PiBriefcase },
  { label: "Now", value: `${site.role} at ${site.company}`, Icon: PiRocketLaunch },
  { label: "Before", value: "Sagmetic Infotech, Mohali\nBrimo Software Solutions, Lucknow", Icon: PiCode },
  { label: "Focus", value: "Websites, mobile apps and AI features", Icon: PiSparkle },
  { label: "Based in", value: site.location, Icon: PiMapPin },
];

const expertise = ["Websites", "Mobile apps", "Full stack web apps", "REST APIs", "CMS & e-commerce", "AI features"];
const stack = ["React", "Next.js", "React Native", "Node.js", "Express", "MongoDB", "WordPress", "Shopify", "OpenAI"];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <Container className="grid items-start gap-12 lg:grid-cols-12 lg:gap-14">
        <aside className="panel order-2 rounded-3xl lg:order-1 lg:col-span-5" data-aos="fade-up">
          <p className="label border-b border-line px-6 py-4 text-accent-ink">At a glance</p>
          <dl className="divide-y divide-line">
            {glance.map(({ label, value, Icon }) => (
              <div key={label} className="flex gap-4 px-6 py-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent-ink">
                  <Icon className="size-5" />
                </span>
                <div className="flex flex-col-reverse justify-center">
                  <dd className="whitespace-pre-line text-[15px] text-fg/90">{value}</dd>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-faint">{label}</dt>
                </div>
              </div>
            ))}
          </dl>
        </aside>

        <div className="order-1 lg:order-2 lg:col-span-7">
          <SectionHeader label="About me" lead="Websites and apps." highlight="Built end to end." />

          <div className="mt-8 max-w-[62ch] space-y-5 text-[17px] leading-[1.75] text-muted" data-aos="fade-up">
            <p>
              I started as a web developer at Brimo Software Solutions in Lucknow, building React web apps,
              React Native mobile apps and Shopify stores on top of Node.js and MongoDB. At Sagmetic Infotech
              in Mohali I moved into client work with Next.js and WordPress. Today I&apos;m a senior full
              stack developer at Atravelq, and I build both websites and mobile apps.
            </p>
            <p>Next to the web stack I build AI features with LLMs, RAG and agentic workflows on OpenAI.</p>
          </div>

          <blockquote
            data-aos="fade-up"
            className="mt-7 border-l-2 border-accent bg-accent/[0.05] py-3 pl-5 pr-4 text-[17px] italic text-fg/90"
          >
            Front end, back end, CMS and AI. Whatever the product needs.
          </blockquote>

          <div className="mt-8 grid gap-6 sm:grid-cols-2" data-aos="fade-up">
            <div>
              <p className="label text-[10px]">Core expertise</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {expertise.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </div>
            <div>
              <p className="label text-[10px]">Daily stack</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {stack.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </div>
          </div>

          <a href="#contact" className="btn btn-primary mt-9" data-aos="fade-up">
            Get in touch
            <PiArrowRight className="size-4" />
          </a>
        </div>
      </Container>
    </section>
  );
}
