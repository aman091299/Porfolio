import { skillGroups } from "@/data/skills";
import { Container, SectionHeader } from "./primitives";

export default function Stack() {
  return (
    <section id="stack" className="py-24 md:py-32">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <SectionHeader
              label="Stack"
              lead="What I"
              highlight="build with."
              sub="Used across client work, day jobs and my own projects."
            />
          </div>
        </div>

        <div className="panel rounded-3xl px-6 md:px-8 lg:col-span-8">
          {skillGroups.map((group, i) => (
            <div
              key={group.title}
              data-aos="fade-up"
              data-aos-delay={(i % 3) * 80}
              className="grid gap-5 border-t border-line py-6 first:border-t-0 md:grid-cols-[140px_1fr] md:gap-8"
            >
              <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent-ink md:pt-3">
                {group.title}
              </h3>
              <ul className="grid grid-cols-3 gap-x-3 gap-y-5 sm:grid-cols-5 lg:grid-cols-6">
                {group.skills.map(({ name, icon: Icon, color }) => (
                  <li key={name} className="group flex flex-col items-center gap-2 text-center">
                    <span className="grid size-12 place-items-center rounded-xl border border-line bg-panel-2/70 transition duration-300 group-hover:-translate-y-0.5 group-hover:border-accent/50">
                      <Icon aria-hidden="true" className="size-6" style={{ color: color ?? "var(--accent-ink)" }} />
                    </span>
                    <span className="text-[12px] leading-tight text-muted transition group-hover:text-fg">{name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
