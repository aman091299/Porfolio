import Image from "next/image";
import { PiArrowUpRight, PiGithubLogo } from "react-icons/pi";

import { projects } from "@/data/projects";
import { site } from "@/data/site";
import { Container, SectionHeader, Tag } from "./primitives";

const MAX_STACK = 3;

export default function Work() {
  return (
    <section id="work" className="py-24 md:py-32">
      <Container>
        <SectionHeader
          center
          label="Portfolio"
          lead="Featured"
          highlight="Projects"
          sub="Real projects, live on the web and on GitHub."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <article
              key={project.title}
              data-aos="fade-up"
              data-aos-delay={(i % 3) * 100}
              className="panel group flex flex-col overflow-hidden rounded-2xl transition duration-500 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_24px_60px_-30px_color-mix(in_srgb,var(--accent)_45%,transparent)]"
            >
              <div className="relative aspect-[16/9] overflow-hidden border-b border-line bg-panel-2">
                {project.image && (
                  <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    fill
                    sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-top transition duration-700 ease-out group-hover:scale-[1.04]"
                  />
                )}
              </div>

              <div className="flex flex-1 flex-col p-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent-ink">
                  {project.tags.join(" · ")}
                </p>
                <h3 className="mt-2 text-lg font-bold tracking-tight">{project.title}</h3>
                <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-muted">{project.description}</p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.stack.slice(0, MAX_STACK).map((item) => (
                    <Tag key={item} className="text-[11px]">
                      {item}
                    </Tag>
                  ))}
                  {project.stack.length > MAX_STACK && (
                    <Tag className="text-[11px]" aria-label={project.stack.slice(MAX_STACK).join(", ")}>
                      +{project.stack.length - MAX_STACK}
                    </Tag>
                  )}
                </div>

                <div className="mt-auto flex gap-5 pt-5 text-sm font-medium">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-accent-ink transition hover:opacity-80"
                    >
                      Live site
                      <PiArrowUpRight className="size-3.5" />
                    </a>
                  )}
                  {project.codeUrl && (
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-muted transition hover:text-fg"
                    >
                      <PiGithubLogo className="size-4" />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center" data-aos="fade">
          <a href={site.socials.github} target="_blank" rel="noreferrer" className="btn btn-outline">
            <PiGithubLogo className="size-[18px]" />
            All projects on GitHub
          </a>
        </p>
      </Container>
    </section>
  );
}
