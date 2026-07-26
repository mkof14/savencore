import {
  isDemoOperatorEmail,
  resolveDemoOperatorCredentials,
} from "@/admin/demo-operator";
import {
  ADMIN_ROLES,
  isAdminRole,
  parseAdminRole,
  type AdminRole,
} from "@/admin/roles";
import { readJsonFile, writeJsonFile } from "@/lib/admin/json-store";

const OPERATORS_FILE = "operators.json";

export type OperatorRecord = {
  email: string;
  role: AdminRole;
  source: "demo" | "allowlist" | "assignment" | "invitation";
  updatedAt: string;
  note?: string;
};

type OperatorsFile = {
  assignments: OperatorRecord[];
};

async function readAssignments(): Promise<OperatorRecord[]> {
  const data = await readJsonFile<OperatorsFile>(OPERATORS_FILE, {
    assignments: [],
  });
  return (data.assignments ?? []).filter(
    (row) =>
      typeof row.email === "string" &&
      isAdminRole(row.role) &&
      typeof row.updatedAt === "string",
  );
}

async function writeAssignments(
  assignments: OperatorRecord[],
): Promise<{ ok: true } | { ok: false; error: string }> {
  const result = await writeJsonFile(OPERATORS_FILE, { assignments });
  if (!result.ok) return { ok: false, error: result.error };
  return { ok: true };
}

function allowlistOperators(): OperatorRecord[] {
  const allowlist = process.env.AUTH_ADMIN_ALLOWLIST ?? "";
  const now = new Date().toISOString();
  const out: OperatorRecord[] = [];
  for (const entry of allowlist.split(",")) {
    const trimmed = entry.trim();
    if (!trimmed) continue;
    const [rawEmail, rawRole] = trimmed.split(":");
    if (!rawEmail) continue;
    const email = rawEmail.trim().toLowerCase();
    const role = parseAdminRole(rawRole) ?? "viewer";
    out.push({
      email,
      role,
      source: "allowlist",
      updatedAt: now,
    });
  }
  return out;
}

/** Resolve role from persisted assignment (not demo / env allowlist). */
export async function getAssignedRoleForEmail(
  email: string | null | undefined,
): Promise<AdminRole | null> {
  if (!email) return null;
  const normalized = email.trim().toLowerCase();
  const assignments = await readAssignments();
  const hit = assignments.find((row) => row.email === normalized);
  return hit?.role ?? null;
}

export async function listOperators(): Promise<OperatorRecord[]> {
  const demo = resolveDemoOperatorCredentials();
  const map = new Map<string, OperatorRecord>();

  if (demo.configured && demo.email) {
    map.set(demo.email, {
      email: demo.email,
      role: "super_admin",
      source: "demo",
      updatedAt: new Date().toISOString(),
      note: "Credentials demo / owner operator (always super_admin)",
    });
  }

  for (const row of allowlistOperators()) {
    if (!map.has(row.email)) {
      map.set(row.email, row);
    }
  }

  for (const row of await readAssignments()) {
    if (isDemoOperatorEmail(row.email)) {
      continue;
    }
    map.set(row.email, { ...row, source: row.source || "assignment" });
  }

  return [...map.values()].sort((a, b) => a.email.localeCompare(b.email));
}

export async function assignOperatorRole(input: {
  email: string;
  role: AdminRole;
  source?: OperatorRecord["source"];
  note?: string;
}): Promise<
  | { ok: true; operator: OperatorRecord }
  | { ok: false; error: string }
> {
  const email = input.email.trim().toLowerCase();
  if (!email || !email.includes("@")) {
    return { ok: false, error: "Valid email required." };
  }
  if (!ADMIN_ROLES.includes(input.role)) {
    return { ok: false, error: "Invalid role." };
  }
  if (isDemoOperatorEmail(email)) {
    return {
      ok: false,
      error: "Demo / owner operator role is fixed as super_admin.",
    };
  }

  const operator: OperatorRecord = {
    email,
    role: input.role,
    source: input.source ?? "assignment",
    updatedAt: new Date().toISOString(),
  };
  if (input.note) {
    operator.note = input.note;
  }

  const assignments = await readAssignments();
  const next = [
    ...assignments.filter((row) => row.email !== email),
    operator,
  ];
  const write = await writeAssignments(next);
  if (!write.ok) return write;
  return { ok: true, operator };
}

export async function removeOperatorAssignment(
  email: string,
): Promise<{ ok: true } | { ok: false; error: string }> {
  const normalized = email.trim().toLowerCase();
  if (isDemoOperatorEmail(normalized)) {
    return { ok: false, error: "Cannot remove the demo / owner operator." };
  }
  const assignments = await readAssignments();
  const next = assignments.filter((row) => row.email !== normalized);
  return writeAssignments(next);
}
