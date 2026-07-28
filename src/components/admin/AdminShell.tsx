"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

import type { AdminPermission, AdminRole } from "@/admin/roles";
import { canPerform, roleLabel } from "@/admin/roles";
import { ThemeSwitch } from "@/components/site/ThemeSwitch";
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
  permission: AdminPermission;
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
      href: localizePath(locale, "/admin/mailings/"),
      label: ui.admin.navMailings,
      permission: "mailings",
    },
    {
      href: localizePath(locale, "/admin/invitations/"),
      label: ui.admin.navInvitations,
      permission: "invitations",
    },
    {
      href: localizePath(locale, "/admin/users/"),
      label: ui.admin.navUsers,
      permission: "users",
    },
    {
      href: localizePath(locale, "/admin/permissions/"),
      label: ui.admin.navPermissions,
      permission: "permissions",
    },
    {
      href: localizePath(locale, "/admin/notifications/"),
      label: ui.admin.navNotifications,
      permission: "notifications",
    },
    {
      href: localizePath(locale, "/admin/media/"),
      label: ui.admin.navMedia,
      permission: "media_view",
    },
    {
      href: localizePath(locale, "/admin/monitoring/"),
      label: ui.admin.navMonitoring,
      permission: "monitoring",
    },
    {
      href: localizePath(locale, "/admin/marketing/"),
      label: ui.admin.navMarketing,
      permission: "marketing",
    },
  ];

  return (
    <div className="admin-shell">
      <aside className="admin-shell__nav" aria-label={ui.admin.navLabel}>
        <div className="admin-shell__brand">
          <div className="admin-shell__brand-heading" dir="ltr" lang="en">
            <Image
              src="/brand/saven-logo-mark.webp"
              alt=""
              width={36}
              height={48}
              className="admin-shell__brand-mark"
              priority
              draggable={false}
            />
            <div className="admin-shell__brand-copy">
              <div className="admin-shell__brand-lockup">
                <span className="admin-shell__brand-saven">SAVEN</span>{" "}
                <span className="admin-shell__brand-core">CORE</span>
              </div>
              <div className="admin-shell__brand-eyebrow">{ui.admin.eyebrow}</div>
              <div className="admin-shell__brand-name">{ui.admin.brandTitle}</div>
            </div>
          </div>
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
          <ThemeSwitch locale={locale} placement="admin" />
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
