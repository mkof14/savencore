"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";

import type { Locale } from "@/config/locales";
import {
  getNavEntryLabel,
  getPrimaryNavLabel,
} from "@/i18n/nav-label";
import { getUi } from "@/i18n/ui";
import { isPathActive, localizePath } from "@/navigation/locale-path";
import { isNavGroup } from "@/navigation/navigation-types";
import {
  primaryNavigation,
  utilityNavigation,
} from "@/navigation/site-navigation";

import { LanguageSelector } from "./LanguageSelector";

type MobileNavigationProps = {
  locale: Locale;
};

/**
 * Focus behavior:
 * - Opening moves focus into the panel close control.
 * - Escape or Close returns focus to the menu toggle.
 * - Body scroll is locked only while open and always restored on close/unmount.
 */
export function MobileNavigation({ locale }: MobileNavigationProps) {
  const pathname = usePathname() ?? `/${locale}/`;
  const [open, setOpen] = useState(false);
  const [pathForMenu, setPathForMenu] = useState(pathname);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelId = useId();
  const ui = getUi(locale);

  if (pathname !== pathForMenu) {
    setPathForMenu(pathname);
    if (open) {
      setOpen(false);
    }
  }

  const closeMenu = useCallback(() => {
    setOpen(false);
  }, []);

  useEffect(() => {
    if (!open) {
      document.body.style.removeProperty("overflow");
      return;
    }

    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        toggleRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.removeProperty("overflow");
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <button
        ref={toggleRef}
        type="button"
        className="mobile-nav-toggle"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen(true)}
      >
        {ui.menu}
      </button>

      <div
        id={panelId}
        className="mobile-nav"
        hidden={!open}
        role="dialog"
        aria-modal="true"
        aria-label={ui.menu}
      >
        <div className="mobile-nav__top">
          <p className="mobile-nav__title">SAVEN Core</p>
          <button
            ref={closeRef}
            type="button"
            className="mobile-nav-toggle"
            onClick={() => {
              closeMenu();
              toggleRef.current?.focus();
            }}
          >
            {ui.close}
          </button>
        </div>

        <nav aria-label={ui.nav.home}>
          <ul className="mobile-nav__list">
            {primaryNavigation.map((item) => {
              const href = localizePath(locale, item.href);
              const active = isPathActive(pathname, locale, item.href);
              const itemLabel = getPrimaryNavLabel(locale, item.id, item.label);

              return (
                <li key={item.id}>
                  <Link
                    href={href}
                    className="mobile-nav__link"
                    aria-current={active ? "page" : undefined}
                    onClick={closeMenu}
                  >
                    {itemLabel}
                  </Link>
                  {isNavGroup(item) ? (
                    <ul className="mobile-nav__children">
                      {item.children.map((child) => {
                        const childHref = localizePath(locale, child.href);
                        const childActive = isPathActive(
                          pathname,
                          locale,
                          child.href,
                        );

                        return (
                          <li key={child.id}>
                            <Link
                              href={childHref}
                              className="mobile-nav__child-link"
                              aria-current={childActive ? "page" : undefined}
                              onClick={closeMenu}
                            >
                              {getNavEntryLabel(locale, child.id, child.label)}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </nav>

        <div>
          <p className="mobile-nav__section-title">{ui.language}</p>
          <LanguageSelector locale={locale} idPrefix="mobile-language" />
        </div>

        {utilityNavigation.length > 0 ? (
          <nav aria-label="Utility">
            <ul className="mobile-nav__list">
              {utilityNavigation.map((item) => {
                const href = localizePath(locale, item.href);
                const active = isPathActive(pathname, locale, item.href);

                return (
                  <li key={item.id}>
                    <Link
                      href={href}
                      className="mobile-nav__link"
                      aria-current={active ? "page" : undefined}
                      onClick={closeMenu}
                    >
                      {getNavEntryLabel(locale, item.id, item.label)}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        ) : null}
      </div>
    </>
  );
}
