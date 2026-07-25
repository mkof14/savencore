"use client";

import { useEffect, useState } from "react";

import type { Locale } from "@/config/locales";
import { getUi } from "@/i18n/ui";

type ThemeMode = "light" | "dark";

type ThemeSwitchProps = {
  locale: Locale;
};

function readTheme(): ThemeMode {
  if (typeof document === "undefined") {
    return "light";
  }
  const attr = document.documentElement.getAttribute("data-theme");
  return attr === "dark" ? "dark" : "light";
}

/** Footer theme control — light/dark preference on the document root. */
export function ThemeSwitch({ locale }: ThemeSwitchProps) {
  const ui = getUi(locale);
  const [theme, setTheme] = useState<ThemeMode>("light");

  useEffect(() => {
    const stored = window.localStorage.getItem("savencore-theme");
    const initial =
      stored === "dark" || stored === "light" ? stored : readTheme();
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  const toggle = () => {
    const next: ThemeMode = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    window.localStorage.setItem("savencore-theme", next);
  };

  return (
    <button
      type="button"
      className="site-footer__theme"
      onClick={toggle}
      aria-pressed={theme === "dark"}
    >
      <span className="site-footer__theme-label">{ui.footer.theme}</span>
      <span className="site-footer__theme-value">
        {theme === "dark" ? ui.footer.themeDark : ui.footer.themeLight}
      </span>
    </button>
  );
}
