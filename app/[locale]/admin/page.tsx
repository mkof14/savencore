import Link from "next/link";
import { notFound } from "next/navigation";

import { canPerform, roleLabel } from "@/admin/roles";
import { requireAdminRole } from "@/admin/require-role";
import { isLocale, type Locale } from "@/config/locales";
import { getUi } from "@/i18n/ui";
import { localizePath } from "@/navigation/locale-path";
import { EMAIL_TEMPLATES } from "@/content/admin/email-templates";
import { listMediaItems } from "@/lib/admin/media-store";
import { getSiteHealthSnapshot } from "@/lib/admin/site-health";
import { LOCALES } from "@/config/locales";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function AdminDashboardPage({ params }: PageProps) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) {
    notFound();
  }
  const locale: Locale = localeParam;
  const ui = getUi(locale);
  const gate = await requireAdminRole("viewer");
  if (!gate.ok) {
    notFound();
  }

  const health = getSiteHealthSnapshot();
  const mediaCount = (await listMediaItems()).length;

  const cards = [
    {
      href: localizePath(locale, "/admin/email-templates/"),
      title: ui.admin.navEmailTemplates,
      text: ui.admin.dashEmailText.replace(
        "{count}",
        String(EMAIL_TEMPLATES.length),
      ),
      show: canPerform(gate.role, "email_templates"),
    },
    {
      href: localizePath(locale, "/admin/media/"),
      title: ui.admin.navMedia,
      text: ui.admin.dashMediaText.replace("{count}", String(mediaCount)),
      show: canPerform(gate.role, "media_view"),
    },
    {
      href: localizePath(locale, "/admin/marketing/"),
      title: ui.admin.navMarketing,
      text: ui.admin.dashMarketingText,
      show: canPerform(gate.role, "marketing"),
    },
    {
      href: localizePath(locale, "/admin/monitoring/"),
      title: ui.admin.navMonitoring,
      text: ui.admin.dashMonitoringText.replace(
        "{routes}",
        String(health.publishedRouteCount),
      ),
      show: canPerform(gate.role, "monitoring"),
    },
  ].filter((card) => card.show);

  return (
    <div>
      <p className="admin-page__eyebrow">{ui.admin.eyebrow}</p>
      <h1 className="admin-page__title">{ui.admin.dashboardTitle}</h1>
      <p className="admin-page__lead">{ui.admin.dashboardLead}</p>

      <p className="admin-note">
        {ui.admin.dashboardRoleNote
          .replace("{role}", roleLabel(gate.role))
          .replace("{locales}", String(LOCALES.length))}
      </p>

      <div className="admin-grid admin-grid--cards">
        {cards.map((card) => (
          <article key={card.href} className="admin-card">
            <h2 className="admin-card__title">{card.title}</h2>
            <p className="admin-card__text">{card.text}</p>
            <Link href={card.href} className="admin-card__link">
              {ui.admin.openSection}
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
