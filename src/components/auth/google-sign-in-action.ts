"use server";

import { signIn } from "@/auth";
import type { Locale } from "@/config/locales";
import { localizePath } from "@/navigation/locale-path";

export async function googleSignInAction(locale: Locale) {
  await signIn("google", {
    redirectTo: localizePath(locale, "/"),
  });
}
