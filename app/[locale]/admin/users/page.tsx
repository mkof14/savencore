import { notFound } from "next/navigation";

import { roleHasPermission } from "@/admin/permissions";
import { requireAdminRole } from "@/admin/require-role";
import { canPerform } from "@/admin/roles";
import { UsersRolesClient } from "@/components/admin/UsersRolesClient";
import { isLocale, type Locale } from "@/config/locales";
import { getUi } from "@/i18n/ui";
import { listOperators } from "@/lib/admin/operators-store";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function AdminUsersPage({ params }: PageProps) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale: Locale = localeParam;
  const ui = getUi(locale);
  const gate = await requireAdminRole("admin");
  if (
    !gate.ok ||
    !canPerform(gate.role, "users") ||
    !(await roleHasPermission(gate.role, "manage_users"))
  ) {
    notFound();
  }

  const operators = await listOperators();

  return (
    <div>
      <p className="admin-page__eyebrow">{ui.admin.eyebrow}</p>
      <h1 className="admin-page__title">{ui.admin.usersTitle}</h1>
      <p className="admin-page__lead">{ui.admin.usersLead}</p>
      <p className="admin-note">{ui.admin.usersNote}</p>
      <UsersRolesClient
        operators={operators}
        assignableRoles={["admin", "editor", "marketer", "viewer"]}
        labels={{
          email: ui.admin.colEmail,
          role: ui.admin.colRole,
          source: ui.admin.colSource,
          assign: ui.admin.usersAssign,
          remove: ui.admin.usersRemove,
          error: ui.admin.actionFailed,
        }}
      />
    </div>
  );
}
