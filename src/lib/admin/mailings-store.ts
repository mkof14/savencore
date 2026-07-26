import { randomUUID } from "node:crypto";

import {
  getEmailTemplate,
  renderEmailTemplateHtml,
} from "@/content/admin/email-templates";
import {
  appendJsonLinesFile,
  readJsonFile,
  writeJsonFile,
} from "@/lib/admin/json-store";
import { trySendSmtpMail, isSmtpConfigured } from "@/lib/admin/smtp";

const MAILINGS_FILE = "mailings.json";
const OUTBOX_FILE = "outbox.jsonl";

export type MailingStatus =
  | "draft"
  | "scheduled"
  | "sent"
  | "sent_simulated"
  | "failed";

export type MailingRecord = {
  id: string;
  templateId: string;
  subject: string;
  recipients: string[];
  status: MailingStatus;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  scheduledFor?: string;
  sentAt?: string;
  note?: string;
};

type MailingsFile = {
  mailings: MailingRecord[];
};

function isMailing(value: unknown): value is MailingRecord {
  if (!value || typeof value !== "object") return false;
  const row = value as MailingRecord;
  return (
    typeof row.id === "string" &&
    typeof row.templateId === "string" &&
    typeof row.subject === "string" &&
    Array.isArray(row.recipients) &&
    typeof row.status === "string" &&
    typeof row.createdAt === "string" &&
    typeof row.updatedAt === "string" &&
    typeof row.createdBy === "string"
  );
}

function parseEmails(raw: string | string[]): string[] {
  const text = Array.isArray(raw) ? raw.join(",") : raw;
  const emails = text
    .split(/[\s,;]+/)
    .map((e) => e.trim().toLowerCase())
    .filter((e) => e.includes("@"));
  return [...new Set(emails)];
}

async function readAll(): Promise<MailingRecord[]> {
  const data = await readJsonFile<MailingsFile>(MAILINGS_FILE, {
    mailings: [],
  });
  return (data.mailings ?? []).filter(isMailing);
}

async function writeAll(
  mailings: MailingRecord[],
): Promise<{ ok: true } | { ok: false; error: string }> {
  const result = await writeJsonFile(MAILINGS_FILE, { mailings });
  if (!result.ok) return { ok: false, error: result.error };
  return { ok: true };
}

export async function listMailings(): Promise<MailingRecord[]> {
  return (await readAll()).sort((a, b) =>
    b.updatedAt.localeCompare(a.updatedAt),
  );
}

export async function getMailing(id: string): Promise<MailingRecord | null> {
  return (await readAll()).find((row) => row.id === id) ?? null;
}

export async function createMailing(input: {
  templateId: string;
  recipients: string | string[];
  createdBy: string;
  subject?: string;
  scheduledFor?: string;
}): Promise<
  | { ok: true; mailing: MailingRecord }
  | { ok: false; error: string }
> {
  const template = getEmailTemplate(input.templateId);
  if (!template) {
    return { ok: false, error: "Unknown email template." };
  }
  const recipients = parseEmails(input.recipients);
  if (!recipients.length) {
    return { ok: false, error: "Add at least one recipient email." };
  }
  const now = new Date().toISOString();
  const mailing: MailingRecord = {
    id: randomUUID(),
    templateId: template.id,
    subject: (input.subject?.trim() || template.subject).slice(0, 200),
    recipients,
    status: input.scheduledFor ? "scheduled" : "draft",
    createdAt: now,
    updatedAt: now,
    createdBy: input.createdBy.trim().toLowerCase(),
  };
  if (input.scheduledFor) {
    mailing.scheduledFor = input.scheduledFor;
  }
  const rows = await readAll();
  rows.push(mailing);
  const write = await writeAll(rows);
  if (!write.ok) return write;
  return { ok: true, mailing };
}

export async function previewMailingHtml(
  mailingId: string,
): Promise<{ ok: true; html: string; subject: string } | { ok: false; error: string }> {
  const mailing = await getMailing(mailingId);
  if (!mailing) return { ok: false, error: "Mailing not found." };
  const template = getEmailTemplate(mailing.templateId);
  if (!template) return { ok: false, error: "Template missing." };
  return {
    ok: true,
    subject: mailing.subject,
    html: renderEmailTemplateHtml({ ...template, subject: mailing.subject }),
  };
}

export async function sendMailing(input: {
  id: string;
  actorEmail: string;
}): Promise<
  | {
      ok: true;
      mailing: MailingRecord;
      mode: "smtp" | "simulated";
      message: string;
    }
  | { ok: false; error: string }
> {
  const rows = await readAll();
  const idx = rows.findIndex((row) => row.id === input.id);
  if (idx < 0) return { ok: false, error: "Mailing not found." };
  const mailing = rows[idx];
  if (!mailing) return { ok: false, error: "Mailing not found." };
  const template = getEmailTemplate(mailing.templateId);
  if (!template) return { ok: false, error: "Template missing." };

  const html = renderEmailTemplateHtml({
    ...template,
    subject: mailing.subject,
  });
  const now = new Date().toISOString();

  if (isSmtpConfigured()) {
    const smtp = await trySendSmtpMail({
      to: mailing.recipients,
      subject: mailing.subject,
      html,
    });
    if (!smtp.ok) {
      const failed: MailingRecord = {
        ...mailing,
        status: "failed",
        updatedAt: now,
        note: smtp.error,
      };
      rows[idx] = failed;
      await writeAll(rows);
      return { ok: false, error: smtp.error };
    }
    const sent: MailingRecord = {
      ...mailing,
      status: "sent",
      sentAt: now,
      updatedAt: now,
      note: `SMTP delivery attempted to ${mailing.recipients.length} recipient(s).`,
    };
    rows[idx] = sent;
    await writeAll(rows);
    await appendJsonLinesFile(OUTBOX_FILE, {
      at: now,
      mode: "smtp",
      mailingId: mailing.id,
      subject: mailing.subject,
      recipients: mailing.recipients,
      actor: input.actorEmail,
    });
    return {
      ok: true,
      mailing: sent,
      mode: "smtp",
      message: "Message handed to SMTP. Delivery depends on the mail server.",
    };
  }

  const simulated: MailingRecord = {
    ...mailing,
    status: "sent_simulated",
    sentAt: now,
    updatedAt: now,
    note: "Simulated send — SMTP_* not configured. Outbox copy stored. Status: In Development.",
  };
  rows[idx] = simulated;
  const write = await writeAll(rows);
  if (!write.ok) return write;
  await appendJsonLinesFile(OUTBOX_FILE, {
    at: now,
    mode: "simulated",
    mailingId: mailing.id,
    subject: mailing.subject,
    recipients: mailing.recipients,
    actor: input.actorEmail,
    html,
  });
  return {
    ok: true,
    mailing: simulated,
    mode: "simulated",
    message:
      "Recorded as simulated send (In Development). Configure SMTP_* for real delivery.",
  };
}
