import Image from "next/image";
import { PiArrowUpRight, PiGithubLogo, PiLinkedinLogo } from "react-icons/pi";

import profile from "@/assets/profile.jpg";
import { KineticTextReveal } from "@/components/ui/kinetic-text-reveal";
import { site } from "@/data/site";
import { ButtonLink, Container } from "./primitives";

export default function Hero() {
  return (
    <section id="top" className="pb-20 pt-28 md:pb-28 md:pt-36">
      <Container className="grid items-center gap-12 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-7">
          <p className="hero-rise text-lg text-muted">Hi, I&apos;m {site.name}.</p>

          <h1 className="mt-4 font-display text-[clamp(3.75rem,11vw,6rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.01em]">
            <KineticTextReveal
              text="Full stack"
              splitBy="characters"
              stagger={0.035}
              distance={48}
              className="block"
            />
            <span className="hero-wipe highlight mt-2">
              <KineticTextReveal
                text="developer."
                splitBy="characters"
                stagger={0.035}
                distance={48}
                delay={0.3}
              />
            </span>
          </h1>

          <p
            className="hero-rise mt-7 max-w-[34rem] text-lg leading-relaxed text-muted"
            style={{ animationDelay: "0.5s" }}
          >
            I build web apps end to end with React, Next.js and Node.js, plus AI features.
            Currently at Atravelq.
          </p>

          <div className="hero-rise mt-9 flex flex-wrap items-center gap-3" style={{ animationDelay: "0.65s" }}>
            <ButtonLink href="#contact">
              Get in touch
              <PiArrowUpRight className="size-4" />
            </ButtonLink>
            <ButtonLink href="#work" variant="ghost">
              See my work
            </ButtonLink>
            <div className="ml-1 flex items-center gap-1">
              <a
                href={site.socials.github}
                aria-label="GitHub"
                className="grid size-11 place-items-center rounded-full text-muted transition hover:text-fg"
              >
                <PiGithubLogo className="size-[22px]" />
              </a>
              <a
                href={site.socials.linkedin}
                aria-label="LinkedIn"
                className="grid size-11 place-items-center rounded-full text-muted transition hover:text-fg"
              >
                <PiLinkedinLogo className="size-[22px]" />
              </a>
            </div>
          </div>
        </div>

        <div className="hero-rise md:col-span-5" style={{ animationDelay: "0.2s" }}>
          <div className="group relative mx-auto aspect-[4/5] max-w-[440px] overflow-hidden rounded-[28px] border border-line bg-card shadow-[0_30px_60px_-30px_rgb(var(--shadow)/0.45)]">
            <Image
              src={profile}
              alt="Portrait of Aman Singh"
              fill
              preload
              sizes="(min-width: 768px) 440px, 90vw"
              className="object-cover object-[50%_28%] grayscale transition duration-700 ease-out group-hover:scale-[1.03] group-hover:grayscale-0"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
