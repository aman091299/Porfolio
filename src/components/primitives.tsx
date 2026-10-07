import type { ComponentProps, ReactNode } from "react";

import { cn } from "@/lib/utils";

export function Container({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("mx-auto w-full max-w-[1200px] px-5 md:px-8", className)} {...props} />;
}

export function SectionHeading({
  lead,
  highlight,
  className,
}: {
  lead: string;
  highlight: string;
  className?: string;
}) {
  return (
    <h2
      data-aos="fade-up"
      className={cn(
        "font-display text-[clamp(2.75rem,7vw,5.5rem)] font-extrabold uppercase leading-[0.92] tracking-[-0.01em] text-balance",
        className,
      )}
    >
      {lead}
      <br />
      <span className="highlight">{highlight}</span>
    </h2>
  );
}

const buttonStyles = {
  primary:
    "bg-accent text-accent-fg shadow-[inset_0_0_0_1px_rgb(0_0_0/0.08)] hover:brightness-95",
  ghost: "border border-line text-fg hover:border-fg",
  dark: "bg-accent-fg text-accent hover:opacity-90",
};

export function ButtonLink({
  variant = "primary",
  className,
  children,
  ...props
}: ComponentProps<"a"> & { variant?: keyof typeof buttonStyles; children: ReactNode }) {
  return (
    <a
      className={cn(
        "inline-flex items-center gap-2 whitespace-nowrap rounded-full px-6 py-3.5 text-[15px] font-medium transition duration-300 active:scale-[0.98]",
        buttonStyles[variant],
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}

export function Chip({ className, ...props }: ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 text-[13px] text-muted",
        className,
      )}
      {...props}
    />
  );
}
