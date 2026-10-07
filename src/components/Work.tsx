import Image from "next/image";
import { PiArrowUpRight, PiGithubLogo } from "react-icons/pi";

import { projects, type Project } from "@/data/projects";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";
import { Chip, Container, SectionHeading } from "./primitives";

// Bento spans for the five projects, in order.
const spans = ["md:col-span-4", "md:col-span-2", "md:col-span-3", "md:col-span-3", "md:col-span-6"];

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap gap-5 text-[15px] font-medium">
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 underline decoration-line decoration-2 underline-offset-[6px] transition hover:decoration-fg"
        >
          Live site
          <PiArrowUpRight className="size-4" />
        </a>
      )}
      {project.codeUrl && (
        <a
          href={project.codeUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-muted transition hover:text-fg"
        >
          <PiGithubLogo className="size-[18px]" />
          Code
        </a>
      )}
    </div>
  );
}

function Stack({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li key={item}>
          <Chip>{item}</Chip>
        </li>
      ))}
    </ul>
  );
}

function ImageCard({
  project,
  sizes,
  fillHeight,
}: {
  project: Project & { image: NonNullable<Project["image"]> };
  sizes: string;
  // Let the screenshot grow to match a taller neighbour in the same row.
  fillHeight?: boolean;
}) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[20px] border border-line bg-card transition duration-300 hover:border-fg/40">
      <div
        className={cn(
          "relative aspect-[16/10] overflow-hidden border-b border-line",
          fillHeight && "md:aspect-auto md:min-h-[240px] md:flex-1",
        )}
      >
        <Image
          src={project.image}
          alt={`${project.title} screenshot`}
          fill
          sizes={sizes}
          className="object-cover object-top transition duration-700 ease-out group-hover:scale-[1.03]"
        />
      </div>
      <div className={cn("flex flex-col gap-5 p-6 md:p-8", !fillHeight && "flex-1")}>
        <div>
          <h3 className="font-display text-3xl font-bold uppercase leading-none md:text-4xl">{project.title}</h3>
          <p className="mt-3 max-w-[56ch] leading-relaxed text-muted">{project.description}</p>
        </div>
        <Stack items={project.stack} />
        <div className="mt-auto pt-1">
          <ProjectLinks project={project} />
        </div>
      </div>
    </article>
  );
}

function TextCard({ project }: { project: Project }) {
  return (
    <article className="grid h-full gap-8 rounded-[20px] border border-line bg-card p-6 transition duration-300 hover:border-fg/40 md:grid-cols-12 md:p-10">
      <h3 className="font-display text-5xl font-extrabold uppercase leading-[0.9] md:col-span-5 md:text-7xl">
        {project.title}
      </h3>
      <div className="flex flex-col gap-5 md:col-span-7">
        <p className="max-w-[60ch] text-lg leading-relaxed text-muted">{project.description}</p>
        <Stack items={project.stack} />
        <ProjectLinks project={project} />
      </div>
    </article>
  );
}

export default function Work() {
  return (
    <section id="work" className="border-t border-line py-24 md:py-32">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading lead="Selected" highlight="work." />
          <a
            href={site.socials.github}
            target="_blank"
            rel="noreferrer"
            data-aos="fade-up"
            className="inline-flex items-center gap-1.5 pb-2 font-medium underline decoration-line decoration-2 underline-offset-[6px] transition hover:decoration-fg"
          >
            All projects on GitHub
            <PiArrowUpRight className="size-4" />
          </a>
        </div>

        <div className="mt-14 grid gap-5 md:mt-20 md:grid-cols-6">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={cn("min-w-0", spans[i])}
              data-aos="fade-up"
              data-aos-delay={(i % 2) * 120}
            >
              {project.image ? (
                <ImageCard
                  project={{ ...project, image: project.image }}
                  sizes={i === 0 ? "(min-width: 768px) 760px, 100vw" : "(min-width: 768px) 560px, 100vw"}
                  fillHeight={i === 1}
                />
              ) : (
                <TextCard project={project} />
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
