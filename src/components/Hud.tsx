"use client";

import { motion, useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import { PiMapPin, PiTimer } from "react-icons/pi";

import { site } from "@/data/site";

const formatClock = new Intl.DateTimeFormat("en-GB", {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
  timeZone: site.timeZone,
});

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function signed(n: number) {
  return `${n >= 0 ? "+" : "-"}${Math.abs(n).toFixed(4)}`;
}

// Corner readouts (local time, time on page, cursor position) and a scroll progress bar.
// Values are written straight to the DOM so nothing re-renders every second or every mouse move.
export default function Hud() {
  const clockRef = useRef<HTMLSpanElement>(null);
  const timerRef = useRef<HTMLSpanElement>(null);
  const xRef = useRef<HTMLSpanElement>(null);
  const yRef = useRef<HTMLSpanElement>(null);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const start = Date.now();
    const tick = () => {
      if (clockRef.current) clockRef.current.textContent = formatClock.format(new Date());
      const s = Math.floor((Date.now() - start) / 1000);
      if (timerRef.current) timerRef.current.textContent = `${pad(Math.floor(s / 60))}:${pad(s % 60)}`;
    };
    tick();
    const id = window.setInterval(tick, 1000);

    const onMove = (e: PointerEvent) => {
      if (xRef.current) xRef.current.textContent = signed((e.clientX / window.innerWidth) * 2 - 1);
      if (yRef.current) yRef.current.textContent = signed(1 - (e.clientY / window.innerHeight) * 2);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.clearInterval(id);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none fixed bottom-5 left-6 z-30 hidden items-center gap-2 font-mono text-[12px] text-muted md:flex"
      >
        <PiMapPin className="size-3.5" />
        <span className="tracking-[0.18em]">{site.timeZoneLabel}</span>
        <span ref={clockRef} className="tabular-nums text-fg">
          --:--:--
        </span>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none fixed bottom-5 right-6 z-30 hidden items-center gap-6 font-mono text-[12px] text-muted md:flex"
      >
        <span className="flex items-center gap-1.5">
          <PiTimer className="size-3.5" />
          <span ref={timerRef} className="tabular-nums text-fg">
            00:00
          </span>
        </span>
        <span className="grid gap-0.5 tabular-nums">
          <span>
            X <span ref={xRef} className="text-fg">+0.0000</span>
          </span>
          <span>
            Y <span ref={yRef} className="text-fg">+0.0000</span>
          </span>
        </span>
      </div>

      {/* Scroll progress along the right edge of the window. */}
      <div aria-hidden="true" className="pointer-events-none fixed right-1 top-0 z-30 h-full w-[3px] py-3">
        <motion.div
          className="h-full origin-top rounded-full bg-accent shadow-[0_0_12px_var(--accent)]"
          style={{ scaleY: scrollYProgress }}
        />
      </div>
    </>
  );
}
