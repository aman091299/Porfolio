"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

// The vertical axis of the experience timeline. A lit line and a dot travel down it as you scroll.
export default function TimelineAxis({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 55%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });
  const top = useTransform(progress, (v) => `${v * 100}%`);

  return (
    <div ref={ref} className="relative">
      <div aria-hidden="true" className="absolute bottom-0 left-[11px] top-0 w-px bg-line md:left-1/2">
        <motion.div
          className="absolute inset-x-0 top-0 h-full origin-top bg-gradient-to-b from-fg/70 via-accent/70 to-accent/20"
          style={{ scaleY: progress }}
        />
        <motion.span
          className="absolute left-1/2 size-[9px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fg shadow-[0_0_12px_rgb(255_255_255/0.8)]"
          style={{ top }}
        />
      </div>
      {children}
    </div>
  );
}
