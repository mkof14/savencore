import { redirect } from "next/navigation";

import { DEFAULT_LOCALE } from "@/config/locales";

/**
 * Framework-level redirect backup for `/` → `/en/`.
 * `proxy.ts` also redirects `/` to the default locale.
 */
export default function RootPage() {
  redirect(`/${DEFAULT_LOCALE}/`);
}
