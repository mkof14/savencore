import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { DEFAULT_LOCALE, isLocale } from "@/config/locales";

/**
 * Next.js 16 proxy (request edge) — locale root redirect + auth noindex hint.
 * Static security headers are applied in next.config.ts (D-0162).
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/") {
    return NextResponse.redirect(new URL(`/${DEFAULT_LOCALE}/`, request.url));
  }

  const response = NextResponse.next();

  // Auth, admin, and preview surfaces should not be indexed (D-0162 / D-0240).
  const segments = pathname.split("/").filter(Boolean);
  const locale = segments[0];
  const rest = segments.slice(1).join("/");
  if (pathname === "/auth/sign-in" || pathname === "/auth/sign-in/") {
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
  } else if (locale && isLocale(locale)) {
    if (
      rest.startsWith("auth/") ||
      rest.startsWith("admin/") ||
      rest.startsWith("preview/")
    ) {
      response.headers.set("X-Robots-Tag", "noindex, nofollow");
    }
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all pathnames except Next.js internals and static files.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)",
  ],
};
