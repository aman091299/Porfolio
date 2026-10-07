import {
  PiEnvelopeSimple,
  PiFileText,
  PiGithubLogo,
  PiInstagramLogo,
  PiLinkedinLogo,
  PiMapPin,
  PiXLogo,
} from "react-icons/pi";

import { site } from "@/data/site";
import ContactForm from "./ContactForm";
import { Container, SectionHeader } from "./primitives";

export const socialLinks = [
  { href: site.socials.github, label: "GitHub", Icon: PiGithubLogo },
  { href: site.socials.linkedin, label: "LinkedIn", Icon: PiLinkedinLogo },
  { href: site.socials.x, label: "X (Twitter)", Icon: PiXLogo },
  { href: site.socials.instagram, label: "Instagram", Icon: PiInstagramLogo },
];

const details = [
  ...(site.email ? [{ label: "Email", value: site.email, href: `mailto:${site.email}`, Icon: PiEnvelopeSimple }] : []),
  { label: "LinkedIn", value: "aman-singh-12a16b236", href: site.socials.linkedin, Icon: PiLinkedinLogo },
  { label: "GitHub", value: "github.com/aman091299", href: site.socials.github, Icon: PiGithubLogo },
  ...(site.resumeUrl ? [{ label: "Resume", value: "Download PDF", href: site.resumeUrl, Icon: PiFileText }] : []),
  { label: "Location", value: site.location, Icon: PiMapPin },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <Container>
        <SectionHeader
          center
          label="Contact"
          lead="Let's build"
          highlight="together."
          sub="Got a product to build, a role to fill, or a question about React, Node.js or LLMs? Send me a message."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-12">
          <div className="space-y-3 lg:col-span-4" data-aos="fade-up">
            {details.map(({ label, value, href, Icon }) => {
              const inner = (
                <>
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent-ink">
                    <Icon className="size-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-faint">{label}</span>
                    <span className="block truncate text-[15px] font-medium">{value}</span>
                  </span>
                </>
              );
              return href ? (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="panel flex items-center gap-4 rounded-2xl p-4 transition hover:border-accent/50"
                >
                  {inner}
                </a>
              ) : (
                <div key={label} className="panel flex items-center gap-4 rounded-2xl p-4">
                  {inner}
                </div>
              );
            })}

            <div className="flex gap-2 pt-3">
              {socialLinks.map(({ href, label, Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="grid size-11 place-items-center rounded-full border border-line text-muted transition hover:border-accent hover:text-accent-ink"
                >
                  <Icon className="size-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8" data-aos="fade-up" data-aos-delay="120">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
