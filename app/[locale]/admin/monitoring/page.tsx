import { notFound } from "next/navigation";

import { requireAdminRole } from "@/admin/require-role";
import { isLocale, type Locale } from "@/config/locales";
import { getUi } from "@/i18n/ui";
import { getSiteHealthSnapshot } from "@/lib/admin/site-health";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function AdminMonitoringPage({ params }: PageProps) {
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

  return (
    <div>
      <p className="admin-page__eyebrow">{ui.admin.eyebrow}</p>
      <h1 className="admin-page__title">{ui.admin.monitoringTitle}</h1>
      <p className="admin-page__lead">{ui.admin.monitoringLead}</p>
      <p className="admin-note">{ui.admin.monitoringNote}</p>

      <div className="admin-grid admin-grid--3" style={{ marginBottom: "1.25rem" }}>
        <article className="admin-card">
          <h2 className="admin-card__title">{ui.admin.healthVersion}</h2>
          <p className="admin-card__text">{health.packageVersion}</p>
          <p className="admin-card__meta">
            {health.commitSha
              ? health.commitSha.slice(0, 7)
              : ui.admin.healthCommitUnknown}
          </p>
        </article>
        <article className="admin-card">
          <h2 className="admin-card__title">{ui.admin.healthLocales}</h2>
          <p className="admin-card__text">{String(health.localeCount)}</p>
          <p className="admin-card__meta">{health.locales.join(", ")}</p>
        </article>
        <article className="admin-card">
          <h2 className="admin-card__title">{ui.admin.healthRoutes}</h2>
          <p className="admin-card__text">{String(health.publishedRouteCount)}</p>
          <p className="admin-card__meta">
            {health.vercelEnv ?? health.nodeEnv} · {health.statusLabel}
          </p>
        </article>
      </div>

      <div className="admin-card" style={{ marginBottom: "1.25rem" }}>
        <h2 className="admin-card__title">{ui.admin.healthNotes}</h2>
        <ul style={{ margin: "0.5rem 0 0", paddingInlineStart: "1.2rem" }}>
          {health.notes.map((note) => (
            <li key={note} className="admin-card__text" style={{ marginBottom: "0.4rem" }}>
              {note}
            </li>
          ))}
        </ul>
      </div>

      <div className="admin-card">
        <h2 className="admin-card__title">{ui.admin.healthRouteInventory}</h2>
        <p className="admin-card__meta" style={{ marginBottom: "0.75rem" }}>
          {health.siteUrl} · {health.generatedAt}
        </p>
        <ul className="admin-route-list">
          {health.publishedRoutes.map((route) => (
            <li key={route}>{route}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
