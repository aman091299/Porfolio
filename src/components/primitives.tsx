import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

export function Container({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("mx-auto w-full max-w-[1240px] px-5 md:px-10", className)} {...props} />;
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5 font-display text-lg font-bold tracking-tight", className)}>
      <span aria-hidden="true" className="size-3 rotate-45 rounded-[3px] bg-accent shadow-[0_0_14px_var(--accent)]" />
      AMAN SINGH
    </span>
  );
}

export function SectionHeader({
  label,
  lead,
  highlight,
  sub,
  center,
  className,
}: {
  label: string;
  lead: string;
  highlight: string;
  sub?: string;
  center?: boolean;
  className?: string;
}) {
  return (
    <div className={cn(center && "mx-auto text-center", className)}>
      <p className={cn("label flex items-center gap-3 text-accent-ink", center && "justify-center")} data-aos="fade">
        <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
        {label}
      </p>
      <h2
        data-aos="fade-up"
        className={cn(
          "glow mt-4 text-balance font-display text-[clamp(2.4rem,5vw,4.25rem)] font-bold leading-[1.04] tracking-[-0.035em]",
          center ? "mx-auto max-w-[20ch]" : "max-w-[18ch]",
        )}
      >
        {lead} <span className="text-accent-ink">{highlight}</span>
      </h2>
      {sub && (
        <p
          data-aos="fade-up"
          className={cn("mt-4 max-w-[52ch] text-[17px] leading-relaxed text-muted", center && "mx-auto")}
        >
          {sub}
        </p>
      )}
    </div>
  );
}

export function MonoList({ items, className }: { items: string[]; className?: string }) {
  return (
    <p className={cn("font-mono text-[11px] uppercase leading-relaxed tracking-[0.14em] text-faint", className)}>
      {items.join("  ·  ")}
    </p>
  );
}

export function Tag({ className, ...props }: ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-line bg-panel-2/70 px-2 py-0.5 text-[12px] text-muted",
        className,
      )}
      {...props}
    />
  );
}
