import { randomBytes } from "node:crypto";

import { isAdminRole, type AdminRole } from "@/admin/roles";
import { readJsonFile, writeJsonFile } from "@/lib/admin/json-store";

const INVITATIONS_FILE = "invitations.json";
const DEFAULT_TTL_MS = 7 * 24 * 60 * 60 * 1000;

export type InvitationStatus = "pending" | "accepted" | "revoked" | "expired";

export type InvitationRecord = {
  id: string;
  email: string;
  role: AdminRole;
  token: string;
  status: InvitationStatus;
  createdAt: string;
  expiresAt: string;
  createdBy: string;
  acceptedAt?: string;
};

type InvitationsFile = {
  invitations: InvitationRecord[];
};

function isInvitation(value: unknown): value is InvitationRecord {
  if (!value || typeof value !== "object") return false;
  const row = value as InvitationRecord;
  return (
    typeof row.id === "string" &&
    typeof row.email === "string" &&
    isAdminRole(row.role) &&
    typeof row.token === "string" &&
    typeof row.status === "string" &&
    typeof row.createdAt === "string" &&
    typeof row.expiresAt === "string" &&
    typeof row.createdBy === "string"
  );
}

async function readAll(): Promise<InvitationRecord[]> {
  const data = await readJsonFile<InvitationsFile>(INVITATIONS_FILE, {
    invitations: [],
  });
  return (data.invitations ?? []).filter(isInvitation);
}

async function writeAll(
  invitations: InvitationRecord[],
): Promise<{ ok: true } | { ok: false; error: string }> {
  const result = await writeJsonFile(INVITATIONS_FILE, { invitations });
  if (!result.ok) return { ok: false, error: result.error };
  return { ok: true };
}

function refreshStatus(row: InvitationRecord): InvitationRecord {
  if (row.status === "pending" && Date.parse(row.expiresAt) < Date.now()) {
    return { ...row, status: "expired" };
  }
  return row;
}

export async function listInvitations(): Promise<InvitationRecord[]> {
  const rows = (await readAll()).map(refreshStatus);
  return rows.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

export async function createInvitation(input: {
  email: string;
  role: AdminRole;
  createdBy: string;
  ttlMs?: number;
}): Promise<
  | { ok: true; invitation: InvitationRecord }
  | { ok: false; error: string }
> {
  const email = input.email.trim().toLowerCase();
  if (!email || !email.includes("@")) {
    return { ok: false, error: "Valid email required." };
  }
  if (!isAdminRole(input.role) || input.role === "super_admin") {
    return {
      ok: false,
      error: "Invite role must be admin, editor, marketer, or viewer.",
    };
  }

  const now = Date.now();
  const invitation: InvitationRecord = {
    id: randomBytes(8).toString("hex"),
    email,
    role: input.role,
    token: randomBytes(24).toString("hex"),
    status: "pending",
    createdAt: new Date(now).toISOString(),
    expiresAt: new Date(now + (input.ttlMs ?? DEFAULT_TTL_MS)).toISOString(),
    createdBy: input.createdBy.trim().toLowerCase(),
  };

  const rows = await readAll();
  rows.push(invitation);
  const write = await writeAll(rows);
  if (!write.ok) return write;
  return { ok: true, invitation };
}

export async function revokeInvitation(
  id: string,
): Promise<{ ok: true } | { ok: false; error: string }> {
  const rows = await readAll();
  const idx = rows.findIndex((row) => row.id === id);
  if (idx < 0) return { ok: false, error: "Invitation not found." };
  const current = rows[idx];
  if (!current) return { ok: false, error: "Invitation not found." };
  if (current.status !== "pending") {
    return { ok: false, error: "Only pending invitations can be revoked." };
  }
  rows[idx] = { ...current, status: "revoked" };
  return writeAll(rows);
}

export async function getInvitationByToken(
  token: string,
): Promise<InvitationRecord | null> {
  if (!token) return null;
  const rows = (await readAll()).map(refreshStatus);
  return rows.find((row) => row.token === token) ?? null;
}

export async function acceptInvitation(input: {
  token: string;
  email: string;
}): Promise<
  | { ok: true; invitation: InvitationRecord }
  | { ok: false; error: string }
> {
  const email = input.email.trim().toLowerCase();
  const rows = (await readAll()).map(refreshStatus);
  const idx = rows.findIndex((row) => row.token === input.token);
  if (idx < 0) return { ok: false, error: "Invitation not found." };
  const row = rows[idx];
  if (!row) return { ok: false, error: "Invitation not found." };
  if (row.status === "expired") {
    return { ok: false, error: "Invitation has expired." };
  }
  if (row.status === "revoked") {
    return { ok: false, error: "Invitation was revoked." };
  }
  if (row.status === "accepted") {
    return { ok: true, invitation: row };
  }
  if (row.email !== email) {
    return {
      ok: false,
      error: "Signed-in email does not match the invitation.",
    };
  }
  const accepted: InvitationRecord = {
    ...row,
    status: "accepted",
    acceptedAt: new Date().toISOString(),
  };
  rows[idx] = accepted;
  const write = await writeAll(rows);
  if (!write.ok) return write;
  return { ok: true, invitation: accepted };
}

export { inviteSignInPath, inviteAcceptPath } from "@/lib/admin/invitation-link";
