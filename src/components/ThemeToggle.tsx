"use client";

import { PiMoon, PiSun } from "react-icons/pi";

function toggleTheme() {
  const root = document.documentElement;
  const isDark = root.dataset.theme
    ? root.dataset.theme === "dark"
    : window.matchMedia("(prefers-color-scheme: dark)").matches;
  const next = isDark ? "light" : "dark";
  root.dataset.theme = next;
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
      aria-label="Switch between light and dark theme"
      className="grid size-10 place-items-center rounded-full border border-line text-fg transition hover:border-fg active:scale-95"
    >
      <PiMoon className="size-[18px] dark:hidden" />
      <PiSun className="hidden size-[18px] dark:block" />
    </button>
  );
}
