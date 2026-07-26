import { NextResponse, type NextRequest } from "next/server";

import { DEFAULT_LOCALE, isLocale, type Locale } from "@/config/locales";
import { localizePath } from "@/navigation/locale-path";

/**
 * Auth.js `pages.signIn` target (locale-neutral).
 * Resolves a locale from Referer or Accept-Language, then redirects to the
 * localized SAVEN sign-in page while preserving query params (error, etc.).
 */
export function GET(request: NextRequest) {
  const locale = resolveSignInLocale(request);
  const target = new URL(localizePath(locale, "/auth/sign-in/"), request.url);

  request.nextUrl.searchParams.forEach((value, key) => {
    target.searchParams.set(key, value);
  });

  const response = NextResponse.redirect(target);
  response.headers.set("X-Robots-Tag", "noindex, nofollow");
  return response;
}

function resolveSignInLocale(request: NextRequest): Locale {
  const referer = request.headers.get("referer");
  if (referer) {
    try {
      const first = new URL(referer).pathname.split("/").filter(Boolean)[0];
      if (first && isLocale(first)) {
        return first;
      }
    } catch {
      // ignore malformed referer
    }
  }

  const accept = request.headers.get("accept-language");
  if (accept) {
    for (const part of accept.split(",")) {
      const tag = part.split(";")[0]?.trim().toLowerCase();
      if (!tag) continue;
      if (isLocale(tag)) return tag;
      if (tag === "zh" || tag.startsWith("zh-")) return "zh-cn";
      const base = tag.split("-")[0];
      if (base && isLocale(base)) return base;
    }
  }

  return DEFAULT_LOCALE;
}
