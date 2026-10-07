import { PiArrowUpRight, PiGithubLogo, PiInstagramLogo, PiLinkedinLogo, PiXLogo } from "react-icons/pi";

import { contactHref, site } from "@/data/site";
import { ButtonLink, Container } from "./primitives";

export const socialLinks = [
  { href: site.socials.github, label: "GitHub", Icon: PiGithubLogo },
  { href: site.socials.linkedin, label: "LinkedIn", Icon: PiLinkedinLogo },
  { href: site.socials.x, label: "X (Twitter)", Icon: PiXLogo },
  { href: site.socials.instagram, label: "Instagram", Icon: PiInstagramLogo },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <Container>
        <div
          data-aos="zoom-in"
          className="rounded-[28px] bg-accent px-6 py-14 text-accent-fg md:px-16 md:py-24"
        >
          <h2 className="max-w-[11ch] font-display text-[clamp(3.25rem,9vw,6rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.01em]">
            Got something to build?
          </h2>
          <p className="mt-6 max-w-[42ch] text-lg leading-relaxed text-accent-fg/80">
            Tell me about your product, project or open role, and let&apos;s talk about how I can help.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
            <ButtonLink
              href={contactHref}
              variant="dark"
              {...(site.email ? {} : { target: "_blank", rel: "noreferrer" })}
            >
              {site.email ? "Email me" : "Message me on LinkedIn"}
              <PiArrowUpRight className="size-4" />
            </ButtonLink>
            {site.resumeUrl && (
              <a
                href={site.resumeUrl}
                className="font-medium underline decoration-2 underline-offset-[6px]"
              >
                Download resume
              </a>
            )}
            <div className="flex items-center gap-1">
              {socialLinks.map(({ href, label, Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="grid size-11 place-items-center rounded-full transition hover:bg-accent-fg/10"
                >
                  <Icon className="size-[22px]" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
