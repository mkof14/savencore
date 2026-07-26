import { notFound } from "next/navigation";

import { roleHasPermission } from "@/admin/permissions";
import { requireAdminRole } from "@/admin/require-role";
import { canPerform } from "@/admin/roles";
import { NotificationsClient } from "@/components/admin/NotificationsClient";
import { isLocale, type Locale } from "@/config/locales";
import { getUi } from "@/i18n/ui";
import { listNotifications } from "@/lib/admin/notifications-store";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function AdminNotificationsPage({ params }: PageProps) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale: Locale = localeParam;
  const ui = getUi(locale);
  const gate = await requireAdminRole("viewer");
  if (!gate.ok || !canPerform(gate.role, "notifications")) {
    notFound();
  }

  const notifications = await listNotifications(gate.email);
  const canCreate = await roleHasPermission(
    gate.role,
    "manage_notifications",
  );

  return (
    <div>
      <p className="admin-page__eyebrow">{ui.admin.eyebrow}</p>
      <h1 className="admin-page__title">{ui.admin.notificationsTitle}</h1>
      <p className="admin-page__lead">{ui.admin.notificationsLead}</p>
      <NotificationsClient
        notifications={notifications}
        canCreate={canCreate}
        labels={{
          title: ui.admin.notificationsFieldTitle,
          body: ui.admin.notificationsFieldBody,
          create: ui.admin.notificationsCreate,
          markRead: ui.admin.notificationsMarkRead,
          unread: ui.admin.notificationsUnread,
          empty: ui.admin.notificationsEmpty,
          error: ui.admin.actionFailed,
        }}
      />
    </div>
  );
}
