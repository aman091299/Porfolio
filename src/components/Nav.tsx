"use client";

import { useEffect, useState } from "react";
import { PiList, PiX } from "react-icons/pi";

import { navLinks } from "@/data/site";
import { cn } from "@/lib/utils";
import { Logo } from "./primitives";
import ThemeToggle from "./ThemeToggle";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#top");

  // Highlight the section currently in the middle of the viewport.
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector<HTMLElement>(link.href))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-3 z-40 px-3 md:top-4">
      <div className="panel mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-6 rounded-2xl px-4 shadow-[0_20px_50px_-30px_rgb(0_0_0/0.8)] md:px-6">
        <a href="#top" aria-label="Aman Singh, back to top">
          <Logo />
        </a>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = active === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "relative px-3.5 py-2 text-[15px] font-medium transition-colors",
                  isActive ? "text-fg" : "text-muted hover:text-fg",
                )}
              >
                {link.label}
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute inset-x-3.5 -bottom-0.5 h-0.5 origin-left rounded-full bg-accent transition-transform duration-300",
                    isActive ? "scale-x-100" : "scale-x-0",
                  )}
                />
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-10 place-items-center rounded-full border border-line lg:hidden"
          >
            {open ? <PiX className="size-5" /> : <PiList className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="panel mx-auto mt-2 max-w-[1200px] rounded-2xl px-5 py-3 lg:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={cn(
                "block border-b border-line py-3.5 font-display text-2xl font-bold last:border-0",
                active === link.href && "text-accent-ink",
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
