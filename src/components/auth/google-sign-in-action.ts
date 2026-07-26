"use server";

import { signIn } from "@/auth";
import type { Locale } from "@/config/locales";
import { localizePath } from "@/navigation/locale-path";

export async function googleSignInAction(
  locale: Locale,
  formData?: FormData,
) {
  const invite = String(formData?.get("invite") ?? "").trim();
  const redirectTo = invite
    ? localizePath(
        locale,
        `/auth/accept-invite/?token=${encodeURIComponent(invite)}`,
      )
    : localizePath(locale, "/");

  await signIn("google", {
    redirectTo,
  });
}
