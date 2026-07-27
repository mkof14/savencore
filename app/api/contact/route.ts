import { NextResponse } from "next/server";

import { escapeHtml } from "@/content/admin/email-templates/brand";
import { isSmtpConfigured, trySendSmtpMail } from "@/lib/admin/smtp";

export const runtime = "nodejs";

const CONTACT_ADDRESS = "info@savencore.com";
const MAX_FIELD_LENGTH = 4000;

function clean(value: unknown, maxLength: number): string {
  return String(value ?? "")
    .trim()
    .slice(0, maxLength);
}

/**
 * Optional direct-send channel for the Contact form (D-0173 / D-0194).
 * When SMTP_* is unset, or a send attempt fails, the client falls back to
 * mailto so the message still reaches info@savencore.com honestly.
 */
export async function POST(request: Request) {
  if (!isSmtpConfigured()) {
    return NextResponse.json({ ok: false, fallback: "mailto" as const });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }

  const record = body as Record<string, unknown>;
  const name = clean(record.name, 120);
  const email = clean(record.email, 200);
  const subject = clean(record.subject, 160);
  const message = clean(record.message, MAX_FIELD_LENGTH);

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Missing required fields." },
      { status: 400 },
    );
  }

  const html = `
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    ${subject ? `<p><strong>Subject:</strong> ${escapeHtml(subject)}</p>` : ""}
    <p style="white-space:pre-wrap;">${escapeHtml(message)}</p>
  `;

  const result = await trySendSmtpMail({
    to: [CONTACT_ADDRESS],
    subject: subject || `SAVEN Core contact from ${name}`,
    html,
  });

  if (!result.ok) {
    return NextResponse.json({
      ok: false,
      fallback: "mailto" as const,
      error: result.error,
    });
  }

  return NextResponse.json({ ok: true });
}
