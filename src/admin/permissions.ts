/**
 * Granular admin permissions + default role matrix (D-0178).
 * Persistable overrides live in storage/admin/permissions.json.
 */

import type { AdminRole } from "@/admin/roles";
import { ADMIN_ROLES } from "@/admin/roles";
import {
  ADMIN_PERMISSIONS,
  type GranularPermission,
  type PermissionMatrix,
} from "@/admin/permissions-types";
import { readJsonFile, writeJsonFile } from "@/lib/admin/json-store";

export {
  ADMIN_PERMISSIONS,
  type GranularPermission,
  type PermissionMatrix,
};
export { permissionLabel } from "@/admin/permission-labels";

const PERMISSIONS_FILE = "permissions.json";

export const DEFAULT_PERMISSION_MATRIX: PermissionMatrix = {
  super_admin: {
    manage_users: true,
    manage_roles: true,
    manage_templates: true,
    send_mail: true,
    manage_media: true,
    view_monitoring: true,
    manage_invitations: true,
    manage_notifications: true,
  },
  admin: {
    manage_users: true,
    manage_roles: false,
    manage_templates: true,
    send_mail: true,
    manage_media: true,
    view_monitoring: true,
    manage_invitations: true,
    manage_notifications: true,
  },
  editor: {
    manage_users: false,
    manage_roles: false,
    manage_templates: true,
    send_mail: false,
    manage_media: true,
    view_monitoring: true,
    manage_invitations: false,
    manage_notifications: false,
  },
  marketer: {
    manage_users: false,
    manage_roles: false,
    manage_templates: true,
    send_mail: true,
    manage_media: true,
    view_monitoring: true,
    manage_invitations: false,
    manage_notifications: true,
  },
  viewer: {
    manage_users: false,
    manage_roles: false,
    manage_templates: true,
    send_mail: false,
    // View-only: mutations still require editor+ via media_upload (D-0185).
    manage_media: false,
    view_monitoring: true,
    manage_invitations: false,
    manage_notifications: false,
  },
};

function normalizeMatrix(raw: unknown): PermissionMatrix {
  const base: PermissionMatrix = structuredClone(DEFAULT_PERMISSION_MATRIX);
  if (!raw || typeof raw !== "object") {
    return base;
  }
  const obj = raw as Partial<
    Record<AdminRole, Partial<Record<GranularPermission, boolean>>>
  >;
  for (const role of ADMIN_ROLES) {
    const row = obj[role];
    if (!row) continue;
    for (const perm of ADMIN_PERMISSIONS) {
      if (typeof row[perm] === "boolean") {
        base[role][perm] = row[perm];
      }
    }
  }
  // Super admin always retains full access — hard to misconfigure.
  base.super_admin = { ...DEFAULT_PERMISSION_MATRIX.super_admin };
  return base;
}

export async function getPermissionMatrix(): Promise<PermissionMatrix> {
  const stored = await readJsonFile<unknown>(PERMISSIONS_FILE, null);
  if (stored === null) {
    return structuredClone(DEFAULT_PERMISSION_MATRIX);
  }
  return normalizeMatrix(stored);
}

export async function savePermissionMatrix(
  matrix: PermissionMatrix,
): Promise<
  { ok: true; matrix: PermissionMatrix } | { ok: false; error: string }
> {
  const normalized = normalizeMatrix(matrix);
  const result = await writeJsonFile(PERMISSIONS_FILE, normalized);
  if (!result.ok) {
    return { ok: false, error: result.error };
  }
  return { ok: true, matrix: normalized };
}

export async function roleHasPermission(
  role: AdminRole | null | undefined,
  permission: GranularPermission,
): Promise<boolean> {
  if (!role) return false;
  if (role === "super_admin") return true;
  const matrix = await getPermissionMatrix();
  return Boolean(matrix[role]?.[permission]);
}
