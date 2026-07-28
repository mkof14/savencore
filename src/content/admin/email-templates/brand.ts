import { SITE_NAME, SITE_TAGLINE, SITE_URL } from "@/config/site";

/**
 * Email palette aligned to site tokens (D-0207 / D-0211 / D-0214):
 * off-white chrome, soft charcoal gray-blue header, gold accent — no neon, no cream template.
 */
export const EMAIL_GOLD = "#d4a84b";
export const EMAIL_NAVY = "#1c1f26";
export const EMAIL_NAVY_INK = "#eef3f7";
export const EMAIL_MUTED = "#c5c9d1";
export const EMAIL_BODY = "#3a3f4a";
export const EMAIL_INK = "#1a1d24";
export const EMAIL_PAGE = "#e6e6e9";
export const EMAIL_SURFACE = "#eeeeef";
export const EMAIL_BORDER = "#d4d4d8";
/** Soft gray-blue quote band (site soft-blue family; not warm cream). */
export const EMAIL_QUOTE_BG = "#e4e8ec";
export const EMAIL_FOOTER_BG = "#eeeeef";
export const EMAIL_LINK = "#1e3a5f";
export const EMAIL_FONT =
  "Arial, Helvetica, 'Helvetica Neue', sans-serif";

/**
 * Email-safe logo path (PNG). Absolute production URL for real sends;
 * preview rewrites host to the current origin so local iframes load the asset.
 */
export const EMAIL_LOGO_PATH = "/brand/saven-logo-mark.png";
export const EMAIL_NETWORK_PATH = "/email/header-network.png";

function assetUrl(path: string): string {
  return `${SITE_URL}${path}`;
}

export const EMAIL_BRAND = {
  name: SITE_NAME,
  tagline: SITE_TAGLINE,
  siteUrl: SITE_URL,
  contactEmail: "info@savencore.com",
  copyright: "© 2026 SAVEN Core. All rights reserved.",
  logoPath: EMAIL_LOGO_PATH,
  logoUrl: assetUrl(EMAIL_LOGO_PATH),
  networkUrl: assetUrl(EMAIL_NETWORK_PATH),
  gold: EMAIL_GOLD,
  navy: EMAIL_NAVY,
} as const;

/** SAVEN (light) + CORE (gold) lockup — matches BrandName / logo wordmark. */
export function brandLockupHtml(options?: {
  fontSize?: number;
  letterSpacing?: string;
}): string {
  const fontSize = options?.fontSize ?? 22;
  const letterSpacing = options?.letterSpacing ?? "0.06em";
  return `<span style="font-family:${EMAIL_FONT};font-size:${fontSize}px;font-weight:700;letter-spacing:${letterSpacing};line-height:1.2;text-transform:uppercase;">
  <span style="color:${EMAIL_NAVY_INK};">SAVEN</span>&nbsp;<span style="color:${EMAIL_GOLD};">CORE</span>
</span>`;
}

function brandLockupFooterHtml(): string {
  return `<span style="font-family:${EMAIL_FONT};font-size:15px;font-weight:700;letter-spacing:0.05em;line-height:1.2;text-transform:uppercase;">
  <span style="color:${EMAIL_NAVY};">SAVEN</span>&nbsp;<span style="color:${EMAIL_GOLD};">CORE</span>
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
  // Normalize brand + email decorative assets to current origin.
  out = out.replace(
    /src="https?:\/\/[^"]+(\/(?:brand|email)\/[^"]+\.(?:png|webp|jpg|jpeg|gif))"/gi,
    (_match, path: string) => `src="${base}${path}"`,
  );
  return out;
}

type FeaturePillar = {
  title: string;
  body: string;
  iconPath: string;
};

/**
 * Shared feature pillars — approved positioning language only.
 * Fourth pillar avoids “Built for Scale” overclaim; uses continuity / foundation framing.
 */
const FEATURE_PILLARS: readonly FeaturePillar[] = [
  {
    title: "Human-Centered",
    body: "Designed around real people, real needs, and real moments of care.",
    iconPath: "/email/icon-human.png",
  },
  {
    title: "Responsible Technology",
    body: "Privacy, safety, and human oversight guide how we build.",
    iconPath: "/email/icon-responsible.png",
  },
  {
    title: "Physical-World Assistance",
    body: "AI and robotics as tools for support in real environments.",
    iconPath: "/email/icon-physical.png",
  },
  {
    title: "Built for Continuity",
    body: "A long-horizon foundation — from human understanding to physical assistance.",
    iconPath: "/email/icon-continuity.png",
  },
] as const;

/** Approved mission / positioning quote (Master Spec) — not invented claims. */
const MISSION_QUOTE =
  "Intelligent systems built to support human life. From human understanding to physical assistance.";

function featureCell(pillar: FeaturePillar): string {
  const icon = assetUrl(pillar.iconPath);
  return `<td width="50%" valign="top" style="width:50%;padding:14px 12px;text-align:center;">
  <img src="${icon}" alt="" width="36" height="36" style="display:block;margin:0 auto 12px;width:36px;height:36px;border:0;outline:none;" />
  <div style="font-family:${EMAIL_FONT};font-size:13px;font-weight:700;letter-spacing:0.02em;line-height:1.35;color:${EMAIL_INK};margin:0 0 6px;">${escapeHtml(pillar.title)}</div>
  <div style="font-family:${EMAIL_FONT};font-size:12px;line-height:1.5;color:${EMAIL_BODY};margin:0;">${escapeHtml(pillar.body)}</div>
</td>`;
}

function featuresBlockHtml(): string {
  const [a, b, c, d] = FEATURE_PILLARS;
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:4px 0 0;background:${EMAIL_SURFACE};border:1px solid ${EMAIL_BORDER};">
  <tr>
    ${featureCell(a!)}
    ${featureCell(b!)}
  </tr>
  <tr>
    <td colspan="2" style="padding:0 16px;">
      <div style="height:1px;line-height:1px;font-size:1px;background:${EMAIL_BORDER};">&nbsp;</div>
    </td>
  </tr>
  <tr>
    ${featureCell(c!)}
    ${featureCell(d!)}
  </tr>
</table>`;
}

function quoteBlockHtml(): string {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:28px 0 0;">
  <tr>
    <td style="background:${EMAIL_QUOTE_BG};border-left:3px solid ${EMAIL_GOLD};padding:22px 22px 22px 20px;">
      <table role="presentation" cellpadding="0" cellspacing="0">
        <tr>
          <td valign="top" style="padding:0 12px 0 0;font-family:Georgia,'Times New Roman',serif;font-size:32px;line-height:0.85;color:${EMAIL_GOLD};">&ldquo;</td>
          <td valign="top" style="font-family:${EMAIL_FONT};font-size:14px;line-height:1.6;color:${EMAIL_BODY};font-style:italic;">
            ${escapeHtml(MISSION_QUOTE)}
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>`;
}

function contactRowHtml(): string {
  const { contactEmail } = EMAIL_BRAND;
  const envelope = assetUrl("/email/icon-envelope-white.png");
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:28px 0 0;">
  <tr>
    <td align="center">
      <table role="presentation" cellpadding="0" cellspacing="0" style="background:${EMAIL_SURFACE};border:1px solid ${EMAIL_BORDER};">
        <tr>
          <td valign="middle" style="padding:12px 10px 12px 12px;">
            <table role="presentation" cellpadding="0" cellspacing="0">
              <tr>
                <td align="center" valign="middle" width="34" height="34" style="width:34px;height:34px;background:${EMAIL_NAVY};text-align:center;">
                  <img src="${envelope}" alt="" width="16" height="16" style="display:block;margin:0 auto;width:16px;height:16px;border:0;outline:none;" />
                </td>
              </tr>
            </table>
          </td>
          <td valign="middle" style="padding:12px 16px 12px 4px;font-family:${EMAIL_FONT};font-size:13px;line-height:1.5;color:${EMAIL_BODY};">
            Questions are welcome at <a href="mailto:${contactEmail}" style="color:${EMAIL_LINK};text-decoration:underline;">${contactEmail}</a>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>`;
}

function footerHtml(): string {
  const { tagline, siteUrl, contactEmail, copyright, logoUrl } = EMAIL_BRAND;
  const siteHost = siteUrl.replace(/^https?:\/\//, "");

  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0">
  <tr>
    <td style="height:2px;line-height:2px;font-size:2px;background:${EMAIL_GOLD};">&nbsp;</td>
  </tr>
  <tr>
    <td style="background:${EMAIL_FOOTER_BG};padding:26px 28px 18px;border-top:1px solid ${EMAIL_BORDER};">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td align="center" style="padding:0 0 16px;">
            <table role="presentation" cellpadding="0" cellspacing="0">
              <tr>
                <td valign="middle" style="padding:0 12px 0 0;">
                  <img src="${logoUrl}" alt="SAVEN Core" width="40" height="40" style="display:block;width:40px;height:40px;border:0;outline:none;" />
                </td>
                <td valign="middle" style="text-align:left;">
                  ${brandLockupFooterHtml()}
                  <div style="margin-top:5px;font-family:${EMAIL_FONT};font-size:11px;line-height:1.45;color:#6a7380;letter-spacing:0.01em;">${escapeHtml(tagline)}</div>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td align="center" style="padding:0 0 14px;font-family:${EMAIL_FONT};font-size:12px;line-height:1.6;color:${EMAIL_BODY};">
            <a href="${siteUrl}" style="color:${EMAIL_NAVY};text-decoration:none;font-weight:600;">${escapeHtml(siteHost)}</a>
            <span style="color:${EMAIL_BORDER};padding:0 8px;">·</span>
            <a href="mailto:${contactEmail}" style="color:${EMAIL_NAVY};text-decoration:none;font-weight:600;">${contactEmail}</a>
          </td>
        </tr>
        <tr>
          <td align="center" style="padding:4px 0 0;font-family:${EMAIL_FONT};font-size:11px;line-height:1.45;color:#8a93a0;">
            ${escapeHtml(copyright)}
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>`;
}

function headerHtml(): string {
  const { tagline, logoUrl, networkUrl } = EMAIL_BRAND;
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${EMAIL_NAVY};">
  <tr>
    <td style="padding:30px 26px 24px;background:${EMAIL_NAVY};">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td valign="middle" style="padding:0 12px 0 0;">
            <table role="presentation" cellpadding="0" cellspacing="0">
              <tr>
                <td style="vertical-align:middle;padding:0 14px 0 0;">
                  <img src="${logoUrl}" alt="SAVEN Core" width="52" height="52" style="display:block;width:52px;height:52px;border:0;outline:none;" />
                </td>
                <td style="vertical-align:middle;">
                  ${brandLockupHtml()}
                  <div style="margin-top:8px;font-family:${EMAIL_FONT};font-size:12px;line-height:1.45;color:${EMAIL_MUTED};letter-spacing:0.01em;">${escapeHtml(tagline)}</div>
                </td>
              </tr>
            </table>
          </td>
          <td valign="middle" align="right" width="132" style="width:132px;padding:0;">
            <img src="${networkUrl}" alt="" width="132" height="56" style="display:block;width:132px;height:56px;border:0;outline:none;opacity:0.72;" />
          </td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
    <td style="height:3px;line-height:3px;font-size:3px;background:${EMAIL_GOLD};">&nbsp;</td>
  </tr>
</table>`;
}

/** Shared SAVEN-branded HTML email chrome (straight corners, no neon). */
export function wrapEmailHtml(options: {
  preheader: string;
  title: string;
  bodyHtml: string;
}): string {
  const { preheader, title, bodyHtml } = options;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="color-scheme" content="light" />
  <meta name="supported-color-schemes" content="light" />
  <title>${escapeHtml(title)}</title>
  <style type="text/css">
    body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    img { -ms-interpolation-mode: bicubic; border: 0; outline: none; text-decoration: none; }
    @media only screen and (max-width: 620px) {
      .email-shell { width: 100% !important; }
      .email-pad { padding-left: 18px !important; padding-right: 18px !important; }
    }
  </style>
</head>
<body style="margin:0;padding:0;background:${EMAIL_PAGE};color:${EMAIL_INK};font-family:${EMAIL_FONT};">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">${escapeHtml(preheader)}</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${EMAIL_PAGE};padding:28px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" class="email-shell" width="100%" cellpadding="0" cellspacing="0" style="max-width:640px;background:${EMAIL_SURFACE};border:1px solid ${EMAIL_BORDER};">
          <tr>
            <td style="padding:0;">
              ${headerHtml()}
            </td>
          </tr>
          <tr>
            <td class="email-pad" style="padding:36px 32px 12px;font-family:${EMAIL_FONT};font-size:16px;line-height:1.65;color:${EMAIL_BODY};text-align:center;background:${EMAIL_SURFACE};">
              ${bodyHtml}
            </td>
          </tr>
          <tr>
            <td class="email-pad" style="padding:12px 24px 8px;background:${EMAIL_SURFACE};">
              ${featuresBlockHtml()}
            </td>
          </tr>
          <tr>
            <td class="email-pad" style="padding:4px 32px 8px;background:${EMAIL_SURFACE};">
              ${quoteBlockHtml()}
            </td>
          </tr>
          <tr>
            <td class="email-pad" style="padding:4px 32px 32px;background:${EMAIL_SURFACE};">
              ${contactRowHtml()}
            </td>
          </tr>
          <tr>
            <td style="padding:0;">
              ${footerHtml()}
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
  return `<p style="margin:0 0 16px;font-family:${EMAIL_FONT};font-size:15px;line-height:1.65;color:${EMAIL_BODY};text-align:center;">${escapeHtml(text)}</p>`;
}

export function headline(text: string): string {
  return `<h1 style="margin:0 0 18px;font-family:${EMAIL_FONT};font-size:24px;line-height:1.3;font-weight:700;color:${EMAIL_INK};text-align:center;">${escapeHtml(text)}</h1>`;
}

/** Navy CTA with optional gold border — straight corners (AGENTS.md). */
export function button(label: string, href: string): string {
  const globe = assetUrl("/email/icon-globe-white.png");
  return `<table role="presentation" cellpadding="0" cellspacing="0" align="center" style="margin:28px auto 8px;">
  <tr>
    <td align="center" style="background:${EMAIL_NAVY};border:1px solid ${EMAIL_GOLD};">
      <a href="${escapeHtml(href)}" style="display:inline-block;padding:13px 22px;font-family:${EMAIL_FONT};font-size:14px;font-weight:700;line-height:1.2;color:${EMAIL_NAVY_INK};text-decoration:none;">
        <img src="${globe}" alt="" width="16" height="16" style="display:inline-block;vertical-align:middle;width:16px;height:16px;border:0;outline:none;margin:0 8px 0 0;" />
        <span style="vertical-align:middle;">${escapeHtml(label)}</span>
      </a>
    </td>
  </tr>
</table>`;
}
