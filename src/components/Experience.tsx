import { experience } from "@/data/experience";
import { cn } from "@/lib/utils";
import { Chip, Container, SectionHeading } from "./primitives";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-line py-24 md:py-32">
      <Container>
        <SectionHeading lead="Where I've" highlight="worked." />

        <ol className="mt-14 md:mt-20">
          {experience.map((role, i) => (
            <li
              key={role.company}
              data-aos="fade-up"
              data-aos-delay={i * 120}
              className="grid gap-3 md:grid-cols-12 md:gap-10"
            >
              <p
                className={cn(
                  "pl-7 text-sm md:col-span-3 md:pl-0 md:pt-2 md:text-right",
                  role.current ? "font-medium text-accent-ink" : "text-muted",
                )}
              >
                {role.period}
              </p>

              <div className="relative border-l border-line pb-14 pl-7 md:col-span-9 md:pl-10 [li:last-child_&]:pb-0">
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute -left-[6px] top-2.5 size-[11px] rounded-full border-2 border-bg",
                    role.current ? "bg-accent" : "bg-fg",
                  )}
                />
                <h3 className="font-display text-3xl font-bold uppercase leading-none md:text-4xl">
                  {role.title}
                </h3>
                <p className="mt-2 text-[15px]">
                  <span className="font-medium">{role.company}</span>
                  <span className="text-muted"> · {role.meta}</span>
                </p>
                <p className="mt-4 max-w-[60ch] leading-relaxed text-muted">{role.summary}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {role.skills.map((skill) => (
                    <li key={skill}>
                      <Chip>{skill}</Chip>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
