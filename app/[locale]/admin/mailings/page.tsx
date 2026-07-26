import { notFound } from "next/navigation";

import { roleHasPermission } from "@/admin/permissions";
import { requireAdminRole } from "@/admin/require-role";
import { canPerform } from "@/admin/roles";
import { MailingsClient } from "@/components/admin/MailingsClient";
import { EMAIL_TEMPLATES } from "@/content/admin/email-templates";
import { isLocale, type Locale } from "@/config/locales";
import { getUi } from "@/i18n/ui";
import { listMailings } from "@/lib/admin/mailings-store";
import { isSmtpConfigured } from "@/lib/admin/smtp";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function AdminMailingsPage({ params }: PageProps) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale: Locale = localeParam;
  const ui = getUi(locale);
  const gate = await requireAdminRole("marketer");
  if (
    !gate.ok ||
    !canPerform(gate.role, "mailings") ||
    !(await roleHasPermission(gate.role, "send_mail"))
  ) {
    notFound();
  }

  const mailings = await listMailings();

  return (
    <div>
      <p className="admin-page__eyebrow">{ui.admin.eyebrow}</p>
      <h1 className="admin-page__title">{ui.admin.mailingsTitle}</h1>
      <p className="admin-page__lead">{ui.admin.mailingsLead}</p>
      <MailingsClient
        mailings={mailings}
        templates={EMAIL_TEMPLATES.map((t) => ({
          id: t.id,
          subject: t.subject,
        }))}
        smtpConfigured={isSmtpConfigured()}
        labels={{
          template: ui.admin.mailingsTemplate,
          recipients: ui.admin.mailingsRecipients,
          recipientsHint: ui.admin.mailingsRecipientsHint,
          create: ui.admin.mailingsCreate,
          send: ui.admin.mailingsSend,
          preview: ui.admin.actionPreview,
          status: ui.admin.colStatus,
          smtpOn: ui.admin.mailingsSmtpOn,
          smtpOff: ui.admin.mailingsSmtpOff,
          empty: ui.admin.mailingsEmpty,
          error: ui.admin.actionFailed,
          close: ui.admin.close,
        }}
      />
    </div>
  );
}
