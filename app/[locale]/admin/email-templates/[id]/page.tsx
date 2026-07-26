import Link from "next/link";
import { notFound } from "next/navigation";

import { requireAdminRole } from "@/admin/require-role";
import {
  getEmailTemplate,
  renderEmailTemplateHtml,
} from "@/content/admin/email-templates";
import { isLocale, type Locale } from "@/config/locales";
import { getUi } from "@/i18n/ui";
import { localizePath } from "@/navigation/locale-path";

type PageProps = {
  params: Promise<{ locale: string; id: string }>;
};

export default async function EmailTemplatePreviewPage({ params }: PageProps) {
  const { locale: localeParam, id } = await params;
  if (!isLocale(localeParam)) {
    notFound();
  }
  const locale: Locale = localeParam;
  const ui = getUi(locale);
  const gate = await requireAdminRole("viewer");
  if (!gate.ok) {
    notFound();
  }

  const template = getEmailTemplate(id);
  if (!template) {
    notFound();
  }

  const html = renderEmailTemplateHtml(template);

  return (
    <div>
      <p className="admin-page__eyebrow">{ui.admin.eyebrow}</p>
      <h1 className="admin-page__title">{template.subject}</h1>
      <p className="admin-page__lead">{template.description}</p>
      <p className="admin-note">
        <span className="admin-badge">{template.status}</span>{" "}
        {ui.admin.emailPreviewNote}
      </p>
      <p style={{ marginBottom: "1rem" }}>
        <Link
          href={localizePath(locale, "/admin/email-templates/")}
          className="admin-card__link"
        >
          {ui.admin.backToTemplates}
        </Link>
      </p>
      <div className="admin-preview">
        <iframe title={template.subject} srcDoc={html} />
      </div>
    </div>
  );
}
