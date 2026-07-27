/**
 * Configurable public social profile URLs (D-0176 / D-0195 / D-0196).
 * Unset networks stay hidden on the public footer (D-0194 SO-1).
 * Owner-approved defaults may be committed; NEXT_PUBLIC_SOCIAL_* overrides.
 */

export type SocialNetwork =
  | "facebook"
  | "youtube"
  | "x"
  | "linkedin"
  | "instagram";

export type SocialLink = {
  id: SocialNetwork;
  labelKey: SocialNetwork;
  /** Absolute https URL when configured; empty string when unset. */
  href: string;
  configured: boolean;
};

/**
 * Committed owner-approved defaults (D-0195 / D-0196).
 * Note: YouTube value is the exact owner-supplied URL — a youtu.be video
 * shortlink, not a /channel/ or /@handle page. Env still overrides.
 */
const SOCIAL_DEFAULTS: Partial<Record<SocialNetwork, string>> = {
  youtube: "https://youtu.be/0C1Sk_RAnSw",
  x: "https://x.com/SAVENcore",
};

function normalizeSocialUrl(raw: string): string {
  const trimmed = raw.trim();
  if (!trimmed || trimmed === "#") {
    return "";
  }
  try {
    const url = new URL(trimmed);
    if (url.protocol !== "https:" && url.protocol !== "http:") {
      return "";
    }
    return url.toString();
  } catch {
    return "";
  }
}

const SOCIAL_ENV: Record<SocialNetwork, string> = {
  facebook: "NEXT_PUBLIC_SOCIAL_FACEBOOK",
  youtube: "NEXT_PUBLIC_SOCIAL_YOUTUBE",
  x: "NEXT_PUBLIC_SOCIAL_X",
  linkedin: "NEXT_PUBLIC_SOCIAL_LINKEDIN",
  instagram: "NEXT_PUBLIC_SOCIAL_INSTAGRAM",
};

/** Ordered social networks for the footer row. */
export const SOCIAL_NETWORKS: readonly SocialNetwork[] = [
  "facebook",
  "youtube",
  "x",
  "linkedin",
  "instagram",
] as const;

export function getSocialLinks(): readonly SocialLink[] {
  return SOCIAL_NETWORKS.map((id) => {
    const fromEnv = normalizeSocialUrl(process.env[SOCIAL_ENV[id]] ?? "");
    const href = fromEnv || normalizeSocialUrl(SOCIAL_DEFAULTS[id] ?? "");
    return {
      id,
      labelKey: id,
      href,
      configured: href.length > 0,
    };
  });
}
