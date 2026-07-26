/**
 * Configurable public social profile URLs (D-0176).
 * Do not invent live profile URLs — set via NEXT_PUBLIC_SOCIAL_* env when real.
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

function readSocialUrl(envName: string): string {
  const raw = process.env[envName]?.trim() ?? "";
  if (!raw || raw === "#") {
    return "";
  }
  try {
    const url = new URL(raw);
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
    const href = readSocialUrl(SOCIAL_ENV[id]);
    return {
      id,
      labelKey: id,
      href,
      configured: href.length > 0,
    };
  });
}
