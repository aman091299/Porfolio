import Image from "next/image";
import {
  PiArrowRight,
  PiBrain,
  PiChatCircleDots,
  PiCheckCircleFill,
  PiDevices,
  PiGithubLogo,
  PiLinkedinLogo,
} from "react-icons/pi";

import profile from "@/assets/profile.jpg";
import { site } from "@/data/site";
import HeroName from "./HeroName";
import { Container } from "./primitives";
import Stats from "./Stats";

const highlights = [
  { label: "Builds", value: "Web & Mobile", Icon: PiDevices },
  { label: "Focus", value: "AI & GenAI", Icon: PiBrain },
];

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-center pb-24 pt-32 md:pt-28">
      <Container className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          {site.openToWork && (
            <p className="hero-rise label flex items-center gap-3 text-accent-ink">
              <span aria-hidden="true" className="live-dot size-1.5 rounded-full bg-current text-accent" />
              Open to opportunities
            </p>
          )}

          <div className="mt-6">
            <HeroName first={site.firstName} last={site.lastName} />
          </div>

          <p
            className="hero-rise mt-7 max-w-[46ch] text-lg leading-relaxed text-muted md:text-xl"
            style={{ animationDelay: "0.4s" }}
          >
            {site.tagline}
          </p>

          <div className="hero-rise mt-9 flex flex-wrap items-center gap-3" style={{ animationDelay: "0.55s" }}>
            <a href="#work" className="btn btn-primary">
              View Work
              <PiArrowRight className="size-4" />
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact
              <PiChatCircleDots className="size-[18px]" />
            </a>
            <span aria-hidden="true" className="mx-1 hidden h-6 w-px bg-line sm:block" />
            {[
              { href: site.socials.github, label: "GitHub", Icon: PiGithubLogo },
              { href: site.socials.linkedin, label: "LinkedIn", Icon: PiLinkedinLogo },
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="grid size-11 place-items-center rounded-full text-muted transition hover:bg-accent/10 hover:text-accent-ink"
              >
                <Icon className="size-[20px]" />
              </a>
            ))}
          </div>

          <div className="hero-rise mt-12" style={{ animationDelay: "0.7s" }}>
            <Stats stats={site.stats} />
          </div>
        </div>

        <div className="lg:col-span-5">
          <figure className="hero-card panel mx-auto max-w-[440px] rounded-[28px] p-4 shadow-[0_40px_90px_-40px_rgb(0_0_0/0.9),0_0_0_1px_color-mix(in_srgb,var(--accent)_8%,transparent)]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[20px] bg-accent/70">
              <Image
                src={profile}
                alt="Portrait of Aman Singh"
                fill
                preload
                sizes="(min-width: 1024px) 410px, 90vw"
                className="object-cover object-[50%_28%]"
              />
              <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              {site.openToWork && (
                <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-black/55 px-3 py-1.5 text-[13px] font-medium text-white backdrop-blur-md">
                  <PiCheckCircleFill className="size-4 text-accent" />
                  Available
                </span>
              )}
            </div>
            <figcaption className="mt-4 grid grid-cols-2 gap-4 border-t border-line px-1 pt-4">
              {highlights.map(({ label, value, Icon }) => (
                <div key={label} className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-xl bg-accent/10 text-accent-ink">
                    <Icon className="size-5" />
                  </span>
                  <span>
                    <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-faint">{label}</span>
                    <span className="block font-semibold">{value}</span>
                  </span>
                </div>
              ))}
            </figcaption>
          </figure>
        </div>
      </Container>
    </section>
  );
}
