"use client";

import { useEffect, useState } from "react";
import { PiList, PiX } from "react-icons/pi";

import { navLinks } from "@/data/site";
import { ButtonLink, Container } from "./primitives";
import ThemeToggle from "./ThemeToggle";

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line bg-bg/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-6">
        <a href="#top" className="font-display text-2xl font-extrabold uppercase leading-none tracking-tight">
          Aman <span className="highlight">Singh</span>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-muted transition hover:text-fg">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <ButtonLink href="#contact" className="hidden px-5 py-2.5 text-sm md:inline-flex">
            Get in touch
          </ButtonLink>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-10 place-items-center rounded-full border border-line md:hidden"
          >
            {open ? <PiX className="size-5" /> : <PiList className="size-5" />}
          </button>
        </div>
      </Container>

      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="border-t border-line bg-bg md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 font-display text-3xl font-bold uppercase"
              >
                {link.label}
              </a>
            ))}
            <ButtonLink href="#contact" onClick={() => setOpen(false)} className="mt-3 justify-center">
              Get in touch
            </ButtonLink>
          </Container>
        </nav>
      )}
    </header>
  );
}
