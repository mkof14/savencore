/**
 * Parse common video URL shapes for admin + public Media previews.
 * Honest embeds only — YouTube, Vimeo, or direct video files.
 */

export type VideoEmbed =
  | { provider: "youtube"; id: string; embedUrl: string; watchUrl: string }
  | { provider: "vimeo"; id: string; embedUrl: string; watchUrl: string }
  | { provider: "direct"; embedUrl: string; watchUrl: string };

export function parseVideoEmbedUrl(raw: string): VideoEmbed | null {
  const trimmed = raw.trim();
  if (!trimmed) {
    return null;
  }

  let url: URL;
  try {
    url = new URL(trimmed);
  } catch {
    return null;
  }

  if (url.protocol !== "http:" && url.protocol !== "https:") {
    return null;
  }

  const host = url.hostname.replace(/^www\./i, "").toLowerCase();

  if (host === "youtu.be") {
    const id = url.pathname.split("/").filter(Boolean)[0];
    if (id && /^[\w-]{6,}$/.test(id)) {
      return {
        provider: "youtube",
        id,
        embedUrl: `https://www.youtube.com/embed/${id}`,
        watchUrl: url.toString(),
      };
    }
  }

  if (host === "youtube.com" || host === "m.youtube.com" || host === "youtube-nocookie.com") {
    const fromQuery = url.searchParams.get("v");
    const pathParts = url.pathname.split("/").filter(Boolean);
    let id = fromQuery;
    if (!id && pathParts[0] === "embed" && pathParts[1]) {
      id = pathParts[1];
    }
    if (!id && pathParts[0] === "shorts" && pathParts[1]) {
      id = pathParts[1];
    }
    if (!id && pathParts[0] === "live" && pathParts[1]) {
      id = pathParts[1];
    }
    if (id && /^[\w-]{6,}$/.test(id)) {
      return {
        provider: "youtube",
        id,
        embedUrl: `https://www.youtube.com/embed/${id}`,
        watchUrl: url.toString(),
      };
    }
  }

  if (host === "vimeo.com" || host === "player.vimeo.com") {
    const parts = url.pathname.split("/").filter(Boolean);
    const id =
      host === "player.vimeo.com" && parts[0] === "video"
        ? parts[1]
        : parts.find((part) => /^\d+$/.test(part));
    if (id && /^\d+$/.test(id)) {
      return {
        provider: "vimeo",
        id,
        embedUrl: `https://player.vimeo.com/video/${id}`,
        watchUrl: url.toString(),
      };
    }
  }

  if (/\.(mp4|webm|ogg)(\?|#|$)/i.test(url.pathname)) {
    return {
      provider: "direct",
      embedUrl: url.toString(),
      watchUrl: url.toString(),
    };
  }

  return null;
}

export function titleFromFilename(filename: string): string {
  const base = filename.replace(/^.*[/\\]/, "");
  const withoutExt = base.replace(/\.[^.]+$/, "");
  const spaced = withoutExt.replace(/[_-]+/g, " ").replace(/\s+/g, " ").trim();
  return spaced || base || "upload";
}

export function looksLikeHttpUrl(raw: string): boolean {
  try {
    const url = new URL(raw.trim());
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}
