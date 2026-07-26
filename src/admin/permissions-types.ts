import type { AdminRole } from "@/admin/roles";

export const ADMIN_PERMISSIONS = [
  "manage_users",
  "manage_roles",
  "manage_templates",
  "send_mail",
  "manage_media",
  "view_monitoring",
  "manage_invitations",
  "manage_notifications",
] as const;

export type GranularPermission = (typeof ADMIN_PERMISSIONS)[number];

export type PermissionMatrix = Record<
  AdminRole,
  Record<GranularPermission, boolean>
>;
