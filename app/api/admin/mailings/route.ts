import { NextResponse } from "next/server";

import { roleHasPermission } from "@/admin/permissions";
import { requireAdminRole } from "@/admin/require-role";
import {
  createMailing,
  listMailings,
  previewMailingHtml,
  sendMailing,
} from "@/lib/admin/mailings-store";
import { isSmtpConfigured } from "@/lib/admin/smtp";
import {
  rewriteEmailHtmlForPreview,
} from "@/content/admin/email-templates/brand";

export const runtime = "nodejs";

export async function GET(request: Request) {
  const gate = await requireAdminRole("marketer");
  if (!gate.ok) {
    return NextResponse.json(
      { error: gate.reason },
      { status: gate.reason === "unauthenticated" ? 401 : 403 },
    );
  }
  if (!(await roleHasPermission(gate.role, "send_mail"))) {
    return NextResponse.json({ error: "forbidden" }, { status: 403 });
  }

  const { searchParams } = new URL(request.url);
  const previewId = searchParams.get("preview");
  if (previewId) {
    const preview = await previewMailingHtml(previewId);
    if (!preview.ok) {
      return NextResponse.json({ error: preview.error }, { status: 404 });
    }
    const host =
      request.headers.get("x-forwarded-host") ?? request.headers.get("host");
    const proto = request.headers.get("x-forwarded-proto") ?? "http";
    const origin = host ? `${proto}://${host}` : "";
    return NextResponse.json({
      subject: preview.subject,
      html: rewriteEmailHtmlForPreview(preview.html, origin),
    });
  }

  const mailings = await listMailings();
  return NextResponse.json({
    mailings,
    smtpConfigured: isSmtpConfigured(),
  });
}

export async function POST(request: Request) {
  const gate = await requireAdminRole("marketer");
  if (!gate.ok) {
    return NextResponse.json(
      { error: gate.reason },
      { status: gate.reason === "unauthenticated" ? 401 : 403 },
    );
  }
  if (!(await roleHasPermission(gate.role, "send_mail"))) {
    return NextResponse.json({ error: "forbidden" }, { status: 403 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }

  const action = (body as { action?: string }).action ?? "create";

  if (action === "send") {
    const id = String((body as { id?: string }).id ?? "");
    const result = await sendMailing({ id, actorEmail: gate.email });
    if (!result.ok) {
      return NextResponse.json({ error: result.error }, { status: 400 });
    }
    return NextResponse.json({
      mailing: result.mailing,
      mode: result.mode,
      message: result.message,
    });
  }

  const templateId = String((body as { templateId?: string }).templateId ?? "");
  const recipients = (body as { recipients?: string }).recipients ?? "";
  const subject = (body as { subject?: string }).subject;
  const scheduledFor = (body as { scheduledFor?: string }).scheduledFor;

  const result = await createMailing({
    templateId,
    recipients,
    createdBy: gate.email,
    ...(subject ? { subject } : {}),
    ...(scheduledFor ? { scheduledFor } : {}),
  });
  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: 400 });
  }
  return NextResponse.json({ mailing: result.mailing }, { status: 201 });
}
