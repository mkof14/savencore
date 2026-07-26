import { auth } from "@/auth";
import {
  roleAtLeast,
  type AdminRole,
} from "@/admin/roles";

export type AdminGate =
  | {
      ok: true;
      role: AdminRole;
      email: string;
      name: string | null | undefined;
    }
  | { ok: false; reason: "unauthenticated" | "forbidden" };

/** Server-side gate for `/[locale]/admin/` routes and admin APIs. */
export async function requireAdminRole(
  minimum: AdminRole = "viewer",
): Promise<AdminGate> {
  const session = await auth();
  const email = session?.user?.email?.trim().toLowerCase() ?? "";
  const role = session?.user?.role ?? null;

  if (!session?.user || !email) {
    return { ok: false, reason: "unauthenticated" };
  }

  if (!role || !roleAtLeast(role, minimum)) {
    return { ok: false, reason: "forbidden" };
  }

  return {
    ok: true,
    role,
    email,
    name: session.user.name,
  };
}
