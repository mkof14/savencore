"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";

import type { Locale } from "@/config/locales";
import { isPathActive, localizePath } from "@/navigation/locale-path";
import { isNavGroup } from "@/navigation/navigation-types";
import {
  primaryNavigation,
  utilityNavigation,
} from "@/navigation/site-navigation";

type DesktopNavigationProps = {
  locale: Locale;
};

export function DesktopNavigation({ locale }: DesktopNavigationProps) {
  const pathname = usePathname() ?? `/${locale}/`;
  const [openGroupId, setOpenGroupId] = useState<string | null>(null);
  const [pathForMenus, setPathForMenus] = useState(pathname);
  const navRef = useRef<HTMLElement>(null);
  const baseId = useId();

  if (pathname !== pathForMenus) {
    setPathForMenus(pathname);
    if (openGroupId !== null) {
      setOpenGroupId(null);
    }
  }

  const closeMenus = useCallback(() => {
    setOpenGroupId(null);
  }, []);

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      if (!navRef.current?.contains(event.target as Node)) {
        closeMenus();
      }
    };

    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenus();
      }
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [closeMenus]);

  const onTriggerKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    groupId: string,
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setOpenGroupId((current) => (current === groupId ? null : groupId));
    }
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setOpenGroupId(groupId);
    }
    if (event.key === "Escape") {
      closeMenus();
    }
  };

  return (
    <>
      <nav ref={navRef} className="desktop-nav" aria-label="Primary">
        {primaryNavigation.map((item) => {
          if (!isNavGroup(item)) {
            const href = localizePath(locale, item.href);
            const active = isPathActive(pathname, locale, item.href);

            return (
              <Link
                key={item.id}
                href={href}
                className={`desktop-nav__link${active ? " is-active" : ""}`}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          }

          const groupActive =
            isPathActive(pathname, locale, item.href) ||
            item.children.some((child) =>
              isPathActive(pathname, locale, child.href),
            );
          const isOpen = openGroupId === item.id;
          const panelId = `${baseId}-${item.id}-panel`;
          const widePanel = item.children.length > 6;

          return (
            <div
              key={item.id}
              className="desktop-nav__item"
              onMouseEnter={() => setOpenGroupId(item.id)}
              onMouseLeave={closeMenus}
            >
              <button
                type="button"
                className={`desktop-nav__trigger${groupActive ? " is-active" : ""}`}
                aria-expanded={isOpen}
                aria-controls={panelId}
                aria-haspopup="true"
                aria-current={groupActive ? "page" : undefined}
                onClick={() =>
                  setOpenGroupId((current) =>
                    current === item.id ? null : item.id,
                  )
                }
                onKeyDown={(event) => onTriggerKeyDown(event, item.id)}
              >
                {item.label}
              </button>
              <div
                id={panelId}
                className={`desktop-nav__panel${widePanel ? " desktop-nav__panel--wide" : ""}`}
                hidden={!isOpen}
              >
                {item.children.map((child) => {
                  const href = localizePath(locale, child.href);
                  const active = isPathActive(pathname, locale, child.href);

                  return (
                    <Link
                      key={child.id}
                      href={href}
                      className="desktop-nav__panel-link"
                      aria-current={active ? "page" : undefined}
                      onClick={closeMenus}
                    >
                      {child.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </nav>

      {utilityNavigation.length > 0 ? (
        <nav className="utility-nav" aria-label="Utility">
          {utilityNavigation.map((item) => {
            const href = localizePath(locale, item.href);
            const active = isPathActive(pathname, locale, item.href);

            return (
              <Link
                key={item.id}
                href={href}
                className="utility-nav__link"
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      ) : null}
    </>
  );
}
