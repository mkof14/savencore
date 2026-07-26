import { notFound } from "next/navigation";

import {
  ADMIN_PERMISSIONS,
  getPermissionMatrix,
} from "@/admin/permissions";
import { requireAdminRole } from "@/admin/require-role";
import { ADMIN_ROLES, canPerform } from "@/admin/roles";
import { PermissionsMatrixClient } from "@/components/admin/PermissionsMatrixClient";
import { isLocale, type Locale } from "@/config/locales";
import { getUi } from "@/i18n/ui";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function AdminPermissionsPage({ params }: PageProps) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale: Locale = localeParam;
  const ui = getUi(locale);
  const gate = await requireAdminRole("viewer");
  if (!gate.ok || !canPerform(gate.role, "permissions")) {
    notFound();
  }

  const matrix = await getPermissionMatrix();

  return (
    <div>
      <p className="admin-page__eyebrow">{ui.admin.eyebrow}</p>
      <h1 className="admin-page__title">{ui.admin.permissionsTitle}</h1>
      <p className="admin-page__lead">{ui.admin.permissionsLead}</p>
      <p className="admin-note">{ui.admin.permissionsNote}</p>
      <PermissionsMatrixClient
        initialMatrix={matrix}
        roles={[...ADMIN_ROLES]}
        permissions={[...ADMIN_PERMISSIONS]}
        canEdit={gate.role === "super_admin"}
        labels={{
          save: ui.admin.permissionsSave,
          saved: ui.admin.permissionsSaved,
          error: ui.admin.actionFailed,
          readonly: ui.admin.permissionsReadonly,
        }}
      />
    </div>
  );
}
