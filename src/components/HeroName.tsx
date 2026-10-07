import { KineticTextReveal } from "@/components/ui/kinetic-text-reveal";

const shared = {
  splitBy: "characters" as const,
  stagger: 0.045,
  distance: 36,
  transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
  // Letters rise from below with a blur, so they don't need clipping; this keeps the glow and the "g" whole.
  maskClassName: "overflow-visible",
};

export default function HeroName({ first, last }: { first: string; last: string }) {
  return (
    <h1 className="glow font-display text-[clamp(4rem,9.5vw,8rem)] font-bold leading-[0.95] tracking-[-0.045em]">
      <KineticTextReveal text={first} {...shared} className="block" />
      <KineticTextReveal text={last} {...shared} delay={0.18} className="block text-accent-ink" />
    </h1>
  );
}
