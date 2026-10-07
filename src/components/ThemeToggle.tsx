"use client";

import { PiMoon, PiSun } from "react-icons/pi";

function toggleTheme() {
  const root = document.documentElement;
  const next = root.dataset.theme === "light" ? "dark" : "light";
  if (next === "light") root.dataset.theme = "light";
  else delete root.dataset.theme;
  try {
    localStorage.setItem("theme", next);
  } catch {
    // Private mode or blocked storage: the choice just won't be remembered.
  }
}

export default function ThemeToggle() {
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Switch between dark and light theme"
      className="grid size-10 place-items-center rounded-full border border-line bg-panel-2/60 text-fg transition hover:border-accent-ink active:scale-95"
    >
      <PiMoon className="size-[18px] light:hidden" />
      <PiSun className="hidden size-[18px] light:block" />
    </button>
  );
}
