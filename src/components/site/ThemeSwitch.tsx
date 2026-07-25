"use client";

import { useEffect, useSyncExternalStore } from "react";

import type { Locale } from "@/config/locales";
import { getUi } from "@/i18n/ui";

type ThemeMode = "light" | "dark";

type ThemeSwitchProps = {
  locale: Locale;
};

const STORAGE_KEY = "savencore-theme";
const THEME_EVENT = "savencore-theme-change";

function readStoredTheme(): ThemeMode {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "dark" || stored === "light") {
    return stored;
  }
  const attr = document.documentElement.getAttribute("data-theme");
  return attr === "dark" ? "dark" : "light";
}

function subscribe(onStoreChange: () => void) {
  const handler = () => onStoreChange();
  window.addEventListener("storage", handler);
  window.addEventListener(THEME_EVENT, handler);
  return () => {
    window.removeEventListener("storage", handler);
    window.removeEventListener(THEME_EVENT, handler);
  };
}

function applyTheme(next: ThemeMode) {
  document.documentElement.setAttribute("data-theme", next);
  window.localStorage.setItem(STORAGE_KEY, next);
  window.dispatchEvent(new Event(THEME_EVENT));
}

/** Footer theme control — light/dark preference on the document root. */
export function ThemeSwitch({ locale }: ThemeSwitchProps) {
  const ui = getUi(locale);
  const theme = useSyncExternalStore(
    subscribe,
    readStoredTheme,
    () => "light" as ThemeMode,
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <button
      type="button"
      className="site-footer__theme"
      onClick={() => applyTheme(theme === "light" ? "dark" : "light")}
      aria-pressed={theme === "dark"}
    >
      <span className="site-footer__theme-label">{ui.footer.theme}</span>
      <span className="site-footer__theme-value">
        {theme === "dark" ? ui.footer.themeDark : ui.footer.themeLight}
      </span>
    </button>
  );
}
