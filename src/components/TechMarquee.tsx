import { ScrollBasedVelocity } from "@/components/ui/scroll-based-velocity";
import { marqueeWords } from "@/data/skills";

export default function TechMarquee() {
  return (
    <section aria-label="Technologies I use" className="overflow-hidden border-y border-line py-6 md:py-8">
      <p className="sr-only">{marqueeWords.join(", ")}</p>
      <div aria-hidden="true">
        <ScrollBasedVelocity
          text={`${marqueeWords.join("   /   ")}   /`}
          default_velocity={1.5}
          className="whitespace-pre font-display text-5xl font-extrabold uppercase leading-[1.05] md:text-7xl"
          secondaryClassName="whitespace-pre font-display text-5xl font-extrabold uppercase leading-[1.05] text-transparent [-webkit-text-stroke:1.5px_var(--fg)] md:text-7xl"
        />
      </div>
    </section>
  );
}
