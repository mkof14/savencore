/**
 * Admin platform RBAC (D-0176).
 * Hierarchy: super_admin > admin > editor > marketer > viewer.
 */

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
  | "media_view"
  | "media_upload"
  | "media_actions"
  | "marketing"
  | "monitoring"
  | "admin_settings";

const PERMISSION_MINIMUM: Record<AdminPermission, AdminRole> = {
  dashboard: "viewer",
  email_templates: "viewer",
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

/**
 * Resolve role for an authenticated email.
 * - Demo credentials email → AUTH_DEMO_ROLE (default super_admin)
 * - AUTH_ADMIN_ALLOWLIST → `email:role,email2:role`
 * - Otherwise → null (signed in, no admin access)
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

  const demoEmail = (process.env.AUTH_DEMO_EMAIL ?? "").trim().toLowerCase();
  if (demoEmail && normalized === demoEmail) {
    return parseAdminRole(process.env.AUTH_DEMO_ROLE) ?? "super_admin";
  }

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
    if (rawEmail.trim().toLowerCase() === normalized) {
      return parseAdminRole(rawRole) ?? "viewer";
    }
  }

  return null;
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
