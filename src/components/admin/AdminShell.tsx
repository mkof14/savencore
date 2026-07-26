"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

import type { AdminRole } from "@/admin/roles";
import { canPerform, roleLabel } from "@/admin/roles";
import type { Locale } from "@/config/locales";
import { getUi } from "@/i18n/ui";
import { localizePath } from "@/navigation/locale-path";

import { adminSignOutAction } from "./admin-sign-out-action";
import "./admin.css";

type AdminShellProps = {
  locale: Locale;
  role: AdminRole;
  email: string;
  children: ReactNode;
};

type NavItem = {
  href: string;
  label: string;
  permission:
    | "dashboard"
    | "email_templates"
    | "media_view"
    | "marketing"
    | "monitoring";
};

export function AdminShell({
  locale,
  role,
  email,
  children,
}: AdminShellProps) {
  const ui = getUi(locale);
  const pathname = usePathname();
  const base = localizePath(locale, "/admin/");

  const items: NavItem[] = [
    {
      href: localizePath(locale, "/admin/"),
      label: ui.admin.navDashboard,
      permission: "dashboard",
    },
    {
      href: localizePath(locale, "/admin/email-templates/"),
      label: ui.admin.navEmailTemplates,
      permission: "email_templates",
    },
    {
      href: localizePath(locale, "/admin/media/"),
      label: ui.admin.navMedia,
      permission: "media_view",
    },
    {
      href: localizePath(locale, "/admin/marketing/"),
      label: ui.admin.navMarketing,
      permission: "marketing",
    },
    {
      href: localizePath(locale, "/admin/monitoring/"),
      label: ui.admin.navMonitoring,
      permission: "monitoring",
    },
  ];

  return (
    <div className="admin-shell">
      <aside className="admin-shell__nav" aria-label={ui.admin.navLabel}>
        <div className="admin-shell__brand">
          <div className="admin-shell__brand-name">{ui.admin.brandTitle}</div>
          <div className="admin-shell__brand-meta">
            {email}
            <br />
            {roleLabel(role)}
          </div>
          <span className="admin-shell__status">{ui.admin.statusInDevelopment}</span>
        </div>

        <ul className="admin-shell__menu">
          {items
            .filter((item) => canPerform(role, item.permission))
            .map((item) => {
              const active =
                item.href === base
                  ? pathname === item.href
                  : pathname === item.href || pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={
                      active
                        ? "admin-shell__link admin-shell__link--active"
                        : "admin-shell__link"
                    }
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
        </ul>

        <div className="admin-shell__footer-links">
          <Link
            href={localizePath(locale, "/")}
            className="admin-shell__text-link"
          >
            {ui.admin.backToSite}
          </Link>
          <form action={adminSignOutAction}>
            <input type="hidden" name="locale" value={locale} />
            <button type="submit" className="admin-shell__text-btn">
              {ui.admin.signOut}
            </button>
          </form>
        </div>
      </aside>

      <div className="admin-shell__main">{children}</div>
    </div>
  );
}
