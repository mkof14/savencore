import type { GranularPermission } from "@/admin/permissions-types";

export function permissionLabel(permission: GranularPermission): string {
  switch (permission) {
    case "manage_users":
      return "Manage users";
    case "manage_roles":
      return "Manage roles";
    case "manage_templates":
      return "Manage templates";
    case "send_mail":
      return "Send mail";
    case "manage_media":
      return "Manage media";
    case "view_monitoring":
      return "View monitoring";
    case "manage_invitations":
      return "Manage invitations";
    case "manage_notifications":
      return "Manage notifications";
    default: {
      const _exhaustive: never = permission;
      return _exhaustive;
    }
  }
}
