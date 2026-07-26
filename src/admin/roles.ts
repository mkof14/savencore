/**
 * Admin platform RBAC (D-0176 / D-0177 / D-0178).
 * Hierarchy: super_admin > admin > editor > marketer > viewer.
 *
 * Client-safe: no node:fs. Persisted role assignments are resolved in
 * `resolveRoleForEmailAsync` (server / Auth.js jwt callback).
 */

import {
  demoOperatorRole,
  isDemoOperatorEmail,
} from "@/admin/demo-operator";

export const ADMIN_ROLES = [
  "super_admin",
  "admin",
  "editor",
  "marketer",
  "viewer",
] as const;

export type AdminRole = (typeof ADMIN_ROLES)[number];

const ROLE_RANK: Record<AdminRole, number> = {
  super_admin: 100,
  admin: 80,
  editor: 60,
  marketer: 40,
  viewer: 20,
};

export function isAdminRole(value: unknown): value is AdminRole {
  return (
    typeof value === "string" &&
    (ADMIN_ROLES as readonly string[]).includes(value)
  );
}

export function parseAdminRole(value: string | undefined | null): AdminRole | null {
  if (!value) {
    return null;
  }
  const normalized = value.trim().toLowerCase();
  return isAdminRole(normalized) ? normalized : null;
}

/** True when `role` meets or exceeds `minimum` in the hierarchy. */
export function roleAtLeast(
  role: AdminRole | null | undefined,
  minimum: AdminRole,
): boolean {
  if (!role) {
    return false;
  }
  return ROLE_RANK[role] >= ROLE_RANK[minimum];
}

export type AdminPermission =
  | "dashboard"
  | "email_templates"
  | "mailings"
  | "invitations"
  | "users"
  | "permissions"
  | "notifications"
  | "media_view"
  | "media_upload"
  | "media_actions"
  | "marketing"
  | "monitoring"
  | "admin_settings";

const PERMISSION_MINIMUM: Record<AdminPermission, AdminRole> = {
  dashboard: "viewer",
  email_templates: "viewer",
  mailings: "marketer",
  invitations: "admin",
  users: "admin",
  permissions: "super_admin",
  notifications: "viewer",
  media_view: "viewer",
  media_actions: "viewer",
  media_upload: "editor",
  marketing: "marketer",
  monitoring: "viewer",
  admin_settings: "admin",
};

export function canPerform(
  role: AdminRole | null | undefined,
  permission: AdminPermission,
): boolean {
  return roleAtLeast(role, PERMISSION_MINIMUM[permission]);
}

function roleFromAllowlist(normalizedEmail: string): AdminRole | null {
  const allowlist = process.env.AUTH_ADMIN_ALLOWLIST ?? "";
  for (const entry of allowlist.split(",")) {
    const trimmed = entry.trim();
    if (!trimmed) {
      continue;
    }
    const [rawEmail, rawRole] = trimmed.split(":");
    if (!rawEmail) {
      continue;
    }
    if (rawEmail.trim().toLowerCase() === normalizedEmail) {
      return parseAdminRole(rawRole) ?? "viewer";
    }
  }
  return null;
}

/**
 * Sync role resolve: demo operator + AUTH_ADMIN_ALLOWLIST.
 * For persisted assignments use `resolveRoleForEmailAsync` from
 * `@/admin/resolve-role-server` (server-only).
 */
export function resolveRoleForEmail(
  email: string | null | undefined,
): AdminRole | null {
  if (!email) {
    return null;
  }
  const normalized = email.trim().toLowerCase();
  if (!normalized) {
    return null;
  }

  if (isDemoOperatorEmail(normalized)) {
    return demoOperatorRole();
  }

  return roleFromAllowlist(normalized);
}

export function roleLabel(role: AdminRole): string {
  switch (role) {
    case "super_admin":
      return "Super admin";
    case "admin":
      return "Admin";
    case "editor":
      return "Editor";
    case "marketer":
      return "Marketer";
    case "viewer":
      return "Viewer";
    default: {
      const _exhaustive: never = role;
      return _exhaustive;
    }
  }
}
