"use server";

import { signOut } from "@/auth";
import { isLocale, DEFAULT_LOCALE } from "@/config/locales";
import { localizePath } from "@/navigation/locale-path";

export async function adminSignOutAction(formData: FormData) {
  const localeRaw = String(formData.get("locale") ?? DEFAULT_LOCALE);
  const locale = isLocale(localeRaw) ? localeRaw : DEFAULT_LOCALE;
  await signOut({ redirectTo: localizePath(locale, "/") });
}
