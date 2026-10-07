"use client";

import { animate } from "framer-motion";
import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

type Stat = { value: number; suffix: string; label: string };

// Hero numbers that count up from zero when the page loads.
export default function Stats({ stats }: { stats: Stat[] }) {
  const refs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    stats.forEach((stat, i) => {
      const el = refs.current[i];
      if (!el) return;
      animate(0, stat.value, {
        duration: 1.6,
        delay: 0.5 + i * 0.12,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (v) => (el.textContent = `${Math.round(v)}${stat.suffix}`),
      });
    });
  }, [stats]);

  return (
    <dl className="flex flex-wrap items-center gap-y-4">
      {stats.map((stat, i) => (
        <div
          key={stat.label}
          className={cn("flex flex-col-reverse", i > 0 && "ml-6 border-l border-line pl-6 md:ml-8 md:pl-8")}
        >
          <dt className="label mt-1 text-[10px]">{stat.label}</dt>
          <dd
            ref={(el) => {
              refs.current[i] = el;
            }}
            className="font-display text-4xl font-bold tabular-nums tracking-tight text-accent-ink md:text-[2.75rem]"
          >
            {stat.value}
            {stat.suffix}
          </dd>
        </div>
      ))}
    </dl>
  );
}
