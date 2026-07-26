/**
 * Server-only role resolution including persisted assignments (D-0178).
 * Do not import from client components — uses operators JSON store (node:fs).
 */

import {
  demoOperatorRole,
  isDemoOperatorEmail,
} from "@/admin/demo-operator";
import {
  parseAdminRole,
  type AdminRole,
} from "@/admin/roles";
import { getAssignedRoleForEmail } from "@/lib/admin/operators-store";

function roleFromAllowlist(normalizedEmail: string): AdminRole | null {
  const allowlist = process.env.AUTH_ADMIN_ALLOWLIST ?? "";
  for (const entry of allowlist.split(",")) {
    const trimmed = entry.trim();
    if (!trimmed) continue;
    const [rawEmail, rawRole] = trimmed.split(":");
    if (!rawEmail) continue;
    if (rawEmail.trim().toLowerCase() === normalizedEmail) {
      return parseAdminRole(rawRole) ?? "viewer";
    }
  }
  return null;
}

/**
 * Order: demo → assignment store → allowlist.
 */
export async function resolveRoleForEmailAsync(
  email: string | null | undefined,
): Promise<AdminRole | null> {
  if (!email) return null;
  const normalized = email.trim().toLowerCase();
  if (!normalized) return null;

  if (isDemoOperatorEmail(normalized)) {
    return demoOperatorRole();
  }

  const assigned = await getAssignedRoleForEmail(normalized);
  if (assigned) {
    return assigned;
  }

  return roleFromAllowlist(normalized);
}
