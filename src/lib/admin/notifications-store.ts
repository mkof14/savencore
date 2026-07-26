import { randomUUID } from "node:crypto";

import { readJsonFile, writeJsonFile } from "@/lib/admin/json-store";

const NOTIFICATIONS_FILE = "notifications.json";

export type AdminNotification = {
  id: string;
  title: string;
  body: string;
  createdAt: string;
  createdBy: string;
  /** Emails that have marked this notice read. */
  readBy: string[];
  system?: boolean;
};

type NotificationsFile = {
  notifications: AdminNotification[];
};

const SEED_NOTIFICATIONS: AdminNotification[] = [
  {
    id: "seed-welcome-admin",
    title: "Admin platform is In Development",
    body: "Roles, invitations, notifications, and mailings use a local JSON store. SMTP send is optional — without SMTP_*, mailings are recorded as simulated.",
    createdAt: "2026-07-26T00:00:00.000Z",
    createdBy: "system",
    readBy: [],
    system: true,
  },
  {
    id: "seed-brand-email",
    title: "Email templates use SAVEN brand lockup",
    body: "Template headers show the logo mark plus SAVEN (light) / CORE (gold). Preview rewrites asset URLs to the current origin.",
    createdAt: "2026-07-26T00:00:01.000Z",
    createdBy: "system",
    readBy: [],
    system: true,
  },
];

function isNotification(value: unknown): value is AdminNotification {
  if (!value || typeof value !== "object") return false;
  const row = value as AdminNotification;
  return (
    typeof row.id === "string" &&
    typeof row.title === "string" &&
    typeof row.body === "string" &&
    typeof row.createdAt === "string" &&
    typeof row.createdBy === "string" &&
    Array.isArray(row.readBy)
  );
}

async function readStored(): Promise<AdminNotification[]> {
  const data = await readJsonFile<NotificationsFile>(NOTIFICATIONS_FILE, {
    notifications: [],
  });
  return (data.notifications ?? []).filter(isNotification);
}

async function writeStored(
  notifications: AdminNotification[],
): Promise<{ ok: true } | { ok: false; error: string }> {
  const result = await writeJsonFile(NOTIFICATIONS_FILE, { notifications });
  if (!result.ok) return { ok: false, error: result.error };
  return { ok: true };
}

export async function listNotifications(
  email?: string,
): Promise<
  Array<AdminNotification & { read: boolean; unread: boolean }>
> {
  const stored = await readStored();
  const byId = new Map(stored.map((n) => [n.id, n]));
  for (const seed of SEED_NOTIFICATIONS) {
    if (!byId.has(seed.id)) {
      byId.set(seed.id, seed);
    }
  }
  const normalized = (email ?? "").trim().toLowerCase();
  return [...byId.values()]
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
    .map((n) => {
      const read = normalized ? n.readBy.includes(normalized) : false;
      return { ...n, read, unread: !read };
    });
}

export async function createNotification(input: {
  title: string;
  body: string;
  createdBy: string;
}): Promise<
  | { ok: true; notification: AdminNotification }
  | { ok: false; error: string }
> {
  const title = input.title.trim().slice(0, 160);
  const body = input.body.trim().slice(0, 2000);
  if (!title || !body) {
    return { ok: false, error: "Title and body are required." };
  }
  const notification: AdminNotification = {
    id: randomUUID(),
    title,
    body,
    createdAt: new Date().toISOString(),
    createdBy: input.createdBy.trim().toLowerCase(),
    readBy: [],
  };
  const rows = await readStored();
  rows.push(notification);
  const write = await writeStored(rows);
  if (!write.ok) return write;
  return { ok: true, notification };
}

export async function markNotificationRead(input: {
  id: string;
  email: string;
}): Promise<{ ok: true } | { ok: false; error: string }> {
  const email = input.email.trim().toLowerCase();
  const stored = await readStored();
  let row = stored.find((n) => n.id === input.id);
  if (!row) {
    const seed = SEED_NOTIFICATIONS.find((n) => n.id === input.id);
    if (!seed) return { ok: false, error: "Notification not found." };
    row = { ...seed, readBy: [...seed.readBy] };
    stored.push(row);
  }
  if (!row.readBy.includes(email)) {
    row.readBy = [...row.readBy, email];
  }
  return writeStored(stored);
}
