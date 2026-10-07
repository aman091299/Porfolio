"use client";

import { useEffect, useRef } from "react";

// A cyan ring that trails the cursor and grows over links and buttons.
// The system cursor stays visible; this only runs for mouse users without reduced motion.
export default function CursorRing() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ring = ringRef.current;
    const dot = dotRef.current;
    if (!ring || !dot) return;

    const target = { x: -100, y: -100 };
    const pos = { x: -100, y: -100 };
    let scale = 1;
    let targetScale = 1;
    let frame = 0;

    const onMove = (e: PointerEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      const interactive = (e.target as Element | null)?.closest?.("a, button, input, textarea, [role=button]");
      targetScale = interactive ? 1.8 : 1;
      ring.style.opacity = "1";
      dot.style.opacity = "1";
    };
    const onLeave = () => {
      ring.style.opacity = "0";
      dot.style.opacity = "0";
    };

    const loop = () => {
      pos.x += (target.x - pos.x) * 0.18;
      pos.y += (target.y - pos.y) * 0.18;
      scale += (targetScale - scale) * 0.15;
      ring.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%) scale(${scale})`;
      dot.style.transform = `translate3d(${target.x}px, ${target.y}px, 0) translate(-50%, -50%)`;
      frame = requestAnimationFrame(loop);
    };
    frame = requestAnimationFrame(loop);

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[60] size-9 rounded-full border border-accent/70 opacity-0 shadow-[0_0_18px_-4px_var(--accent)] transition-opacity duration-300"
      />
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[60] size-1.5 rounded-full bg-accent opacity-0 transition-opacity duration-300"
      />
    </>
  );
}
