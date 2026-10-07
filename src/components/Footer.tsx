import { PiArrowUp } from "react-icons/pi";

import { projects } from "@/data/projects";
import { navLinks, site } from "@/data/site";
import { socialLinks } from "./Contact";
import { Container, Logo } from "./primitives";

function Column({ title, links }: { title: string; links: { href: string; label: string; external?: boolean }[] }) {
  return (
    <div>
      <p className="label text-[10px] text-fg">{title}</p>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
              className="text-sm text-muted transition hover:text-accent-ink"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const liveProjects = projects.filter((p) => p.liveUrl).slice(0, 5);

  return (
    <footer className="border-t border-line pb-24 pt-16 md:pb-20">
      <Container>
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-4 max-w-[36ch] text-sm leading-relaxed text-muted">{site.tagline}</p>
            <div className="mt-6 flex gap-2">
              {socialLinks.map(({ href, label, Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="grid size-10 place-items-center rounded-full border border-line text-muted transition hover:border-accent hover:text-accent-ink"
                >
                  <Icon className="size-[18px]" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-7">
            <Column title="Navigation" links={navLinks} />
            <Column
              title="Projects"
              links={liveProjects.map((p) => ({ href: p.liveUrl!, label: p.title, external: true }))}
            />
            <Column
              title="Connect"
              links={socialLinks.map((s) => ({ href: s.href, label: s.label, external: true }))}
            />
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6 text-sm text-faint">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <a href="#top" className="inline-flex items-center gap-1.5 transition hover:text-accent-ink">
            Back to top
            <PiArrowUp className="size-4" />
          </a>
        </div>
      </Container>
    </footer>
  );
}
