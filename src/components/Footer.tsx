import { PiArrowUp } from "react-icons/pi";

import { navLinks, site } from "@/data/site";
import { socialLinks } from "./Contact";
import { Container } from "./primitives";

export default function Footer() {
  return (
    <footer id="site-footer" className="overflow-hidden border-t border-line pt-16">
      <Container className="grid gap-10 md:grid-cols-12">
        <p className="max-w-[34ch] text-muted md:col-span-5">
          {site.name}, {site.role.toLowerCase()} building with React, Next.js, Node.js and AI.
        </p>

        <nav aria-label="Footer" className="flex flex-col gap-3 md:col-span-3">
          {[...navLinks, { href: "#contact", label: "Contact" }].map((link) => (
            <a key={link.href} href={link.href} className="w-fit transition hover:text-accent-ink">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-3 md:col-span-4">
          {socialLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="w-fit transition hover:text-accent-ink"
            >
              {label}
            </a>
          ))}
        </div>
      </Container>

      <Container className="mt-14 flex items-center justify-between gap-6 border-t border-line py-6 text-sm text-muted">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <a href="#top" className="inline-flex items-center gap-1.5 transition hover:text-fg">
          Back to top
          <PiArrowUp className="size-4" />
        </a>
      </Container>

      <p
        aria-hidden="true"
        data-aos="fade-up"
        // The wordmark sits at the very end of the page, so trigger off the footer instead.
        data-aos-anchor="#site-footer"
        data-aos-anchor-placement="top-center"
        className="-mb-[0.14em] select-none whitespace-nowrap text-center font-display text-[20vw] font-extrabold uppercase leading-[0.8] tracking-[-0.02em]"
      >
        Aman <span className="highlight">Singh</span>
      </p>
    </footer>
  );
}
