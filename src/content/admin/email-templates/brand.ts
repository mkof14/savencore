import { SITE_NAME, SITE_TAGLINE, SITE_URL } from "@/config/site";

export const EMAIL_BRAND = {
  name: SITE_NAME,
  tagline: SITE_TAGLINE,
  siteUrl: SITE_URL,
  contactEmail: "info@savencore.com",
  copyright: "© 2026 SAVEN Core. All rights reserved.",
  logoUrl: `${SITE_URL}/brand/saven-logo-mark.webp`,
} as const;

/** Shared SAVEN-branded HTML email chrome (straight corners, no neon). */
export function wrapEmailHtml(options: {
  preheader: string;
  title: string;
  bodyHtml: string;
}): string {
  const { preheader, title, bodyHtml } = options;
  const { name, tagline, siteUrl, contactEmail, copyright, logoUrl } =
    EMAIL_BRAND;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(title)}</title>
</head>
<body style="margin:0;padding:0;background:#f4f6f8;color:#0b1220;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">${escapeHtml(preheader)}</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6f8;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border:1px solid #d8dee6;">
          <tr>
            <td style="padding:28px 28px 20px;border-bottom:1px solid #e6ebf0;background:#0b1220;">
              <img src="${logoUrl}" alt="${escapeHtml(name)}" width="40" height="40" style="display:block;margin:0 0 12px;" />
              <div style="font-size:20px;font-weight:600;letter-spacing:-0.02em;color:#f4f6f8;">${escapeHtml(name)}</div>
              <div style="margin-top:6px;font-size:13px;line-height:1.45;color:#c5ced9;">${escapeHtml(tagline)}</div>
            </td>
          </tr>
          <tr>
            <td style="padding:28px;font-size:16px;line-height:1.55;color:#0b1220;">
              ${bodyHtml}
            </td>
          </tr>
          <tr>
            <td style="padding:20px 28px 28px;border-top:1px solid #e6ebf0;background:#fafbfc;font-size:13px;line-height:1.5;color:#5a6573;">
              <div><a href="${siteUrl}" style="color:#0b1220;text-decoration:underline;">${escapeHtml(siteUrl.replace(/^https?:\/\//, ""))}</a></div>
              <div style="margin-top:6px;"><a href="mailto:${contactEmail}" style="color:#0b1220;text-decoration:underline;">${contactEmail}</a></div>
              <div style="margin-top:12px;">${escapeHtml(copyright)}</div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export function paragraph(text: string): string {
  return `<p style="margin:0 0 16px;">${escapeHtml(text)}</p>`;
}

export function button(label: string, href: string): string {
  return `<p style="margin:24px 0;"><a href="${escapeHtml(href)}" style="display:inline-block;padding:12px 18px;background:#0b1220;color:#f4f6f8;text-decoration:none;font-weight:600;font-size:14px;border:0;">${escapeHtml(label)}</a></p>`;
}
