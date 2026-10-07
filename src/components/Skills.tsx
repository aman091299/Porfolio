import { skillGroups } from "@/data/skills";
import { cn } from "@/lib/utils";
import { Container, SectionHeading } from "./primitives";

// Bento layout for the six groups, in order: AI, Frontend, Backend, Database, CMS, Tools.
const cells = [
  "md:col-span-2 md:row-span-2 bg-fg text-bg border-fg",
  "md:col-span-2",
  "md:col-span-1",
  "md:col-span-1",
  "md:col-span-2",
  "md:col-span-2",
];

export default function Skills() {
  return (
    <section id="skills" className="border-t border-line py-24 md:py-32">
      <Container>
        <SectionHeading lead="What I" highlight="work with." />

        <div className="mt-14 grid gap-5 md:mt-20 md:grid-cols-4">
          {skillGroups.map((group, i) => {
            const featured = i === 0;
            return (
              <div
                key={group.title}
                data-aos={featured ? "zoom-in" : "fade-up"}
                data-aos-delay={featured ? 0 : 80 + (i % 3) * 80}
                className={cn(
                  "flex flex-col justify-between gap-8 rounded-[20px] border border-line bg-card p-6 md:p-8",
                  cells[i],
                )}
              >
                <h3
                  className={cn(
                    "font-display font-extrabold uppercase leading-[0.9]",
                    featured ? "text-6xl md:text-8xl" : "text-3xl md:text-4xl",
                  )}
                >
                  {featured ? (
                    <>
                      AI &amp;
                      <br />
                      <span className="highlight">GenAI</span>
                    </>
                  ) : (
                    group.title
                  )}
                </h3>

                <ul className="flex flex-wrap gap-2">
                  {group.skills.map(({ name, icon: Icon }) => (
                    <li
                      key={name}
                      className={cn(
                        "inline-flex items-center gap-2 rounded-full border",
                        featured
                          ? "border-bg/25 px-4 py-2 text-base"
                          : "border-line px-3.5 py-1.5 text-sm",
                      )}
                    >
                      {Icon && <Icon aria-hidden="true" className="size-4 shrink-0" />}
                      {name}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
