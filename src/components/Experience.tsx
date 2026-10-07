import type { CSSProperties } from "react";

import { experience } from "@/data/experience";
import { cn } from "@/lib/utils";
import { Container, MonoList, SectionHeader } from "./primitives";
import TimelineAxis from "./TimelineAxis";

export default function Experience() {
  return (
    <section id="experience" className="overflow-x-clip py-24 md:py-32">
      <Container>
        <SectionHeader label="Experience" lead="The path" highlight="so far." />

        <div className="mt-16">
          <TimelineAxis>
            <ol className="space-y-16 md:space-y-0">
              {experience.map((role, i) => {
                const right = i % 2 === 0;
                return (
                  <li key={role.company} className={cn("relative md:grid md:grid-cols-2", i > 0 && "md:-mt-24")}>
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute top-6 hidden font-mono text-[11px] tracking-[0.2em] text-faint md:block",
                        right ? "right-[calc(50%+24px)]" : "left-[calc(50%+24px)]",
                      )}
                    >
                      {role.year}
                    </span>

                    <article
                      data-aos={right ? "fade-left" : "fade-right"}
                      style={{ "--c": role.color } as CSSProperties}
                      className={cn(
                        "panel relative ml-10 rounded-2xl rounded-l-md border-l-2 border-l-[var(--c)] p-5 md:ml-0 md:p-6",
                        "bg-[linear-gradient(135deg,color-mix(in_srgb,var(--c)_9%,transparent),transparent_55%)]",
                        right ? "md:col-start-2 md:ml-14" : "md:col-start-1 md:mr-14",
                      )}
                    >
                      <span
                        aria-hidden="true"
                        className={cn(
                          // Connector from the axis to the card edge.
                          "absolute -left-[31px] top-7 h-px w-[29px] bg-[var(--c)] opacity-60 md:w-14",
                          right ? "md:-left-[58px]" : "md:-right-[58px] md:left-auto",
                        )}
                      />
                      <header className="flex flex-wrap items-start justify-between gap-x-6 gap-y-1 border-b border-line pb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-fg">{role.title}</h3>
                          <p className="mt-0.5 font-mono text-[12px] tracking-[0.06em] text-[var(--c)]">
                            {role.company}
                          </p>
                        </div>
                        <p className="pt-1 font-mono text-[11px] tracking-[0.08em] text-faint">
                          {role.period}
                          {role.current && (
                            <span className="ml-2 inline-block size-[6px] translate-y-[-1px] rounded-full bg-live live-dot" />
                          )}
                        </p>
                      </header>
                      <ul className="mt-4 space-y-2 text-[15px] leading-relaxed text-fg/80">
                        {role.points.map((point) => (
                          <li key={point} className="flex gap-3">
                            <span aria-hidden="true" className="text-faint">
                              -
                            </span>
                            {point}
                          </li>
                        ))}
                      </ul>
                      <MonoList items={role.stack} className="mt-5" />
                      <p className="mt-2 font-mono text-[10.5px] uppercase tracking-[0.18em] text-faint/80">
                        {role.location}
                      </p>
                    </article>
                  </li>
                );
              })}
            </ol>
          </TimelineAxis>
        </div>
      </Container>
    </section>
  );
}
