import { SITE_NAME, SITE_TAGLINE, SITE_URL } from "@/config/site";

/** Brand accent matching site `--color-accent` (gold). */
export const EMAIL_GOLD = "#d4a84b";
export const EMAIL_NAVY = "#0b1220";
export const EMAIL_NAVY_INK = "#f4f6f8";
export const EMAIL_MUTED = "#c5ced9";

/**
 * Email-safe logo path (PNG). Absolute production URL for real sends;
 * preview rewrites host to the current origin so local iframes load the asset.
 */
export const EMAIL_LOGO_PATH = "/brand/saven-logo-mark.png";

export const EMAIL_BRAND = {
  name: SITE_NAME,
  tagline: SITE_TAGLINE,
  siteUrl: SITE_URL,
  contactEmail: "info@savencore.com",
  copyright: "© 2026 SAVEN Core. All rights reserved.",
  logoPath: EMAIL_LOGO_PATH,
  logoUrl: `${SITE_URL}${EMAIL_LOGO_PATH}`,
  gold: EMAIL_GOLD,
  navy: EMAIL_NAVY,
} as const;

/** SAVEN (light) + CORE (gold) lockup — matches BrandName / logo wordmark. */
export function brandLockupHtml(): string {
  return `<span style="font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;font-size:22px;font-weight:700;letter-spacing:0.06em;line-height:1.2;text-transform:uppercase;">
  <span style="color:${EMAIL_NAVY_INK};">SAVEN</span>&nbsp;<span style="color:${EMAIL_GOLD};">CORE</span>
</span>`;
}

/**
 * Rewrite absolute production asset URLs to the current origin so admin
 * preview iframes load logo/assets locally (and on preview deploys).
 */
export function rewriteEmailHtmlForPreview(
  html: string,
  origin: string,
): string {
  const base = origin.replace(/\/$/, "");
  if (!base) {
    return html;
  }
  const production = SITE_URL.replace(/\/$/, "");
  let out = html;
  if (production && production !== base) {
    out = out.split(production).join(base);
  }
  // Also normalize any leftover absolute logo to current origin.
  out = out.replace(
    /src="https?:\/\/[^"]+\/brand\/saven-logo-mark\.(png|webp)"/gi,
    `src="${base}${EMAIL_LOGO_PATH}"`,
  );
  return out;
}

/** Shared SAVEN-branded HTML email chrome (straight corners, no neon). */
export function wrapEmailHtml(options: {
  preheader: string;
  title: string;
  bodyHtml: string;
}): string {
  const { preheader, title, bodyHtml } = options;
  const { tagline, siteUrl, contactEmail, copyright, logoUrl } = EMAIL_BRAND;
  const siteHost = siteUrl.replace(/^https?:\/\//, "");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(title)}</title>
  <!--[if !mso]><!-->
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <!--<![endif]-->
</head>
<body style="margin:0;padding:0;background:#e8ecf1;color:${EMAIL_NAVY};font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">${escapeHtml(preheader)}</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#e8ecf1;padding:36px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border:1px solid #cfd6e0;">
          <tr>
            <td style="padding:0;background:${EMAIL_NAVY};">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="height:3px;background:${EMAIL_GOLD};font-size:0;line-height:0;">&nbsp;</td>
                </tr>
              </table>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:28px 28px 24px;">
                    <table role="presentation" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="vertical-align:middle;padding:0 14px 0 0;">
                          <img src="${logoUrl}" alt="SAVEN Core" width="48" height="48" style="display:block;width:48px;height:48px;border:0;outline:none;" />
                        </td>
                        <td style="vertical-align:middle;">
                          ${brandLockupHtml()}
                          <div style="margin-top:8px;font-size:13px;line-height:1.45;color:${EMAIL_MUTED};letter-spacing:0.01em;">${escapeHtml(tagline)}</div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:32px 28px 28px;font-size:16px;line-height:1.6;color:${EMAIL_NAVY};">
              ${bodyHtml}
            </td>
          </tr>
          <tr>
            <td style="padding:0 28px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="height:1px;background:#e1e6ee;font-size:0;line-height:0;">&nbsp;</td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:22px 28px 28px;background:#f7f8fa;font-size:13px;line-height:1.55;color:#5a6573;">
              <div style="margin:0 0 6px;">
                <a href="${siteUrl}" style="color:${EMAIL_NAVY};text-decoration:underline;">${escapeHtml(siteHost)}</a>
              </div>
              <div style="margin:0 0 6px;">
                <a href="mailto:${contactEmail}" style="color:${EMAIL_NAVY};text-decoration:underline;">${contactEmail}</a>
              </div>
              <div style="margin-top:14px;color:#7a8491;">${escapeHtml(copyright)}</div>
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
  return `<p style="margin:28px 0 20px;"><a href="${escapeHtml(href)}" style="display:inline-block;padding:13px 20px;background:${EMAIL_NAVY};color:${EMAIL_NAVY_INK};text-decoration:none;font-weight:600;font-size:14px;border:0;border-bottom:3px solid ${EMAIL_GOLD};">${escapeHtml(label)}</a></p>`;
}
