import { notFound } from "next/navigation";

import { roleHasPermission } from "@/admin/permissions";
import { requireAdminRole } from "@/admin/require-role";
import { canPerform } from "@/admin/roles";
import { InvitationsClient } from "@/components/admin/InvitationsClient";
import { isLocale, type Locale } from "@/config/locales";
import { getUi } from "@/i18n/ui";
import { listInvitations } from "@/lib/admin/invitations-store";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function AdminInvitationsPage({ params }: PageProps) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale: Locale = localeParam;
  const ui = getUi(locale);
  const gate = await requireAdminRole("admin");
  if (
    !gate.ok ||
    !canPerform(gate.role, "invitations") ||
    !(await roleHasPermission(gate.role, "manage_invitations"))
  ) {
    notFound();
  }

  const invitations = await listInvitations();

  return (
    <div>
      <p className="admin-page__eyebrow">{ui.admin.eyebrow}</p>
      <h1 className="admin-page__title">{ui.admin.invitationsTitle}</h1>
      <p className="admin-page__lead">{ui.admin.invitationsLead}</p>
      <p className="admin-note">{ui.admin.invitationsNote}</p>
      <InvitationsClient
        locale={locale}
        invitations={invitations}
        assignableRoles={["admin", "editor", "marketer", "viewer"]}
        labels={{
          email: ui.admin.colEmail,
          role: ui.admin.colRole,
          status: ui.admin.colStatus,
          create: ui.admin.invitationsCreate,
          revoke: ui.admin.invitationsRevoke,
          copyLink: ui.admin.invitationsCopyLink,
          copied: ui.admin.actionCopied,
          error: ui.admin.actionFailed,
          expires: ui.admin.invitationsExpires,
        }}
      />
    </div>
  );
}
