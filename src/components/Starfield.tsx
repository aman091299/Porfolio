"use client";

import { useEffect, useRef } from "react";

type Star = { x: number; y: number; vx: number; vy: number; r: number; phase: number };
type Spark = { x: number; y: number; vx: number; vy: number; life: number };

const LINK_DISTANCE = 120;
const CURSOR_DISTANCE = 170;

// Drifting constellation behind the whole page: near stars link up with each other and
// with the cursor, far stars are a static layer, and the cursor leaves a short spark trail.
export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const far = document.createElement("canvas");
    const farCtx = far.getContext("2d");

    let width = 0;
    let height = 0;
    let stars: Star[] = [];
    const sparks: Spark[] = [];
    const cursor = { x: -9999, y: -9999 };
    let frame = 0;
    // Colours come from CSS variables so the field follows the light/dark theme.
    let star = "225,245,248";
    let link = "103,227,249";

    function readColors() {
      const cs = getComputedStyle(document.documentElement);
      const toRgb = (v: string, fallback: string) => v.trim().split(/\s+/).join(",") || fallback;
      star = toRgb(cs.getPropertyValue("--star"), star);
      link = toRgb(cs.getPropertyValue("--link"), link);
    }

    function paintFar() {
      if (!farCtx) return;
      farCtx.clearRect(0, 0, width, height);
      const farCount = Math.round((width * height) / 4500);
      for (let i = 0; i < farCount; i++) {
        farCtx.fillStyle = `rgba(${star},${Math.random() * 0.35 + 0.05})`;
        farCtx.beginPath();
        farCtx.arc(Math.random() * width, Math.random() * height, Math.random() * 0.7 + 0.2, 0, Math.PI * 2);
        farCtx.fill();
      }
    }

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      for (const c of [canvas!, far]) {
        c.width = width * dpr;
        c.height = height * dpr;
      }
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.round(Math.min(150, (width * height) / 10000));
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.14,
        vy: (Math.random() - 0.5) * 0.14,
        r: Math.random() * 1.1 + 0.35,
        phase: Math.random() * Math.PI * 2,
      }));

      farCtx?.setTransform(dpr, 0, 0, dpr, 0, 0);
      paintFar();
    }

    function draw(time: number) {
      ctx!.clearRect(0, 0, width, height);
      ctx!.drawImage(far, 0, 0, width, height);

      for (const s of stars) {
        if (!reduceMotion) {
          s.x += s.vx;
          s.y += s.vy;
          if (s.x < -10) s.x = width + 10;
          if (s.x > width + 10) s.x = -10;
          if (s.y < -10) s.y = height + 10;
          if (s.y > height + 10) s.y = -10;
        }
      }

      ctx!.lineWidth = 0.6;
      for (let i = 0; i < stars.length; i++) {
        const a = stars[i];
        for (let j = i + 1; j < stars.length; j++) {
          const b = stars[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < LINK_DISTANCE) {
            ctx!.strokeStyle = `rgba(${star},${(1 - d / LINK_DISTANCE) * 0.13})`;
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.stroke();
          }
        }
        const dc = Math.hypot(a.x - cursor.x, a.y - cursor.y);
        if (dc < CURSOR_DISTANCE) {
          ctx!.strokeStyle = `rgba(${link},${(1 - dc / CURSOR_DISTANCE) * 0.4})`;
          ctx!.beginPath();
          ctx!.moveTo(a.x, a.y);
          ctx!.lineTo(cursor.x, cursor.y);
          ctx!.stroke();
        }
      }

      for (const s of stars) {
        const twinkle = reduceMotion ? 0.7 : 0.45 + 0.4 * Math.sin(time * 0.0012 + s.phase);
        ctx!.fillStyle = `rgba(${star},${twinkle})`;
        ctx!.beginPath();
        ctx!.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx!.fill();
      }

      for (let i = sparks.length - 1; i >= 0; i--) {
        const p = sparks[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.015;
        p.life -= 0.025;
        if (p.life <= 0) {
          sparks.splice(i, 1);
          continue;
        }
        ctx!.fillStyle = `rgba(${link},${p.life * 0.85})`;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, 1.1 * p.life + 0.2, 0, Math.PI * 2);
        ctx!.fill();
      }
    }

    function loop(time: number) {
      draw(time);
      frame = requestAnimationFrame(loop);
    }

    function onPointerMove(e: PointerEvent) {
      cursor.x = e.clientX;
      cursor.y = e.clientY;
      if (finePointer && !reduceMotion && sparks.length < 80) {
        for (let k = 0; k < 2; k++) {
          sparks.push({
            x: e.clientX,
            y: e.clientY,
            vx: (Math.random() - 0.5) * 1.2,
            vy: (Math.random() - 0.5) * 1.2,
            life: 1,
          });
        }
      }
      if (reduceMotion) draw(performance.now());
    }

    function onPointerLeave() {
      cursor.x = -9999;
      cursor.y = -9999;
    }

    function onVisibility() {
      cancelAnimationFrame(frame);
      if (!document.hidden && !reduceMotion) frame = requestAnimationFrame(loop);
    }

    readColors();
    resize();
    if (reduceMotion) draw(0);
    else frame = requestAnimationFrame(loop);

    const themeObserver = new MutationObserver(() => {
      readColors();
      paintFar();
      if (reduceMotion) draw(0);
    });
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

    const onResize = () => {
      resize();
      if (reduceMotion) draw(0);
    };
    window.addEventListener("resize", onResize);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onPointerLeave);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(frame);
      themeObserver.disconnect();
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onPointerMove);
      document.documentElement.removeEventListener("pointerleave", onPointerLeave);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none fixed inset-0 h-full w-full" />;
}
