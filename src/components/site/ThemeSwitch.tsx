"use client";

import { useEffect, useSyncExternalStore } from "react";

import type { Locale } from "@/config/locales";
import { getUi } from "@/i18n/ui";

type ThemeMode = "light" | "dark";

type ThemeSwitchProps = {
  locale: Locale;
  /** Visual placement — header utilities vs footer chrome. */
  placement?: "header" | "footer";
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

function SunIcon() {
  return (
    <svg
      className="theme-toggle__icon theme-toggle__icon--sun"
      viewBox="0 0 24 24"
      width="20"
      height="20"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="12" cy="12" r="4" fill="currentColor" />
      <g stroke="currentColor" strokeWidth="1.75" strokeLinecap="square">
        <path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.05 5.05l1.55 1.55M17.4 17.4l1.55 1.55M5.05 18.95l1.55-1.55M17.4 6.6l1.55-1.55" />
      </g>
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      className="theme-toggle__icon theme-toggle__icon--moon"
      viewBox="0 0 24 24"
      width="20"
      height="20"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="currentColor"
        d="M16.4 13.8A6.8 6.8 0 0 1 10.2 3.8a7.4 7.4 0 1 0 8.8 10.6 6.4 6.4 0 0 1-2.6-.6z"
      />
    </svg>
  );
}

/** Light/dark control — sun (light) / moon (dark) icons (D-0155). */
export function ThemeSwitch({
  locale,
  placement = "footer",
}: ThemeSwitchProps) {
  const ui = getUi(locale);
  const theme = useSyncExternalStore(
    subscribe,
    readStoredTheme,
    () => "light" as ThemeMode,
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const nextIsDark = theme === "light";
  const label = nextIsDark ? ui.footer.themeToDark : ui.footer.themeToLight;

  return (
    <button
      type="button"
      className={`theme-toggle theme-toggle--${placement}`}
      onClick={() => applyTheme(theme === "light" ? "dark" : "light")}
      aria-pressed={theme === "dark"}
      aria-label={label}
      title={label}
    >
      {theme === "dark" ? <MoonIcon /> : <SunIcon />}
      <span className="theme-toggle__sr">{label}</span>
    </button>
  );
}
