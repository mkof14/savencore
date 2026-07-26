import Link from "next/link";
import { notFound } from "next/navigation";

import { requireAdminRole } from "@/admin/require-role";
import { EMAIL_TEMPLATES } from "@/content/admin/email-templates";
import { isLocale, type Locale } from "@/config/locales";
import { getUi } from "@/i18n/ui";
import { localizePath } from "@/navigation/locale-path";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function EmailTemplatesPage({ params }: PageProps) {
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

  return (
    <div>
      <p className="admin-page__eyebrow">{ui.admin.eyebrow}</p>
      <h1 className="admin-page__title">{ui.admin.emailTitle}</h1>
      <p className="admin-page__lead">{ui.admin.emailLead}</p>
      <p className="admin-note">{ui.admin.emailNote}</p>

      <div className="admin-table-wrap">
        <table className="admin-table">
          <thead>
            <tr>
              <th>{ui.admin.colName}</th>
              <th>{ui.admin.colCategory}</th>
              <th>{ui.admin.colStatus}</th>
              <th>{ui.admin.colActions}</th>
            </tr>
          </thead>
          <tbody>
            {EMAIL_TEMPLATES.map((template) => (
              <tr key={template.id}>
                <td>
                  <strong>{template.subject}</strong>
                  <div className="admin-card__meta">{template.description}</div>
                </td>
                <td>
                  <span className="admin-badge">{template.category}</span>
                </td>
                <td>
                  <span className="admin-badge">{template.status}</span>
                </td>
                <td>
                  <Link
                    href={localizePath(
                      locale,
                      `/admin/email-templates/${template.id}/`,
                    )}
                    className="admin-btn admin-btn--primary"
                    style={{ display: "inline-flex", textDecoration: "none" }}
                  >
                    {ui.admin.actionPreview}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
