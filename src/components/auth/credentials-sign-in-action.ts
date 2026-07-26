"use server";

import { AuthError, CredentialsSignin } from "next-auth";
import { redirect } from "next/navigation";

import { isCredentialsAuthConfigured, signIn } from "@/auth";
import type { Locale } from "@/config/locales";
import { localizePath } from "@/navigation/locale-path";

export async function credentialsSignInAction(
  locale: Locale,
  formData: FormData,
) {
  const signInPath = localizePath(locale, "/auth/sign-in/");
  const invite = String(formData.get("invite") ?? "").trim();
  const redirectTo = invite
    ? localizePath(
        locale,
        `/auth/accept-invite/?token=${encodeURIComponent(invite)}`,
      )
    : localizePath(locale, "/");

  if (!isCredentialsAuthConfigured()) {
    redirect(`${signInPath}?error=CredentialsNotConfigured`);
  }

  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo,
    });
  } catch (error) {
    if (error instanceof CredentialsSignin) {
      redirect(
        `${signInPath}?error=CredentialsSignin${invite ? `&invite=${encodeURIComponent(invite)}` : ""}`,
      );
    }
    if (error instanceof AuthError) {
      redirect(
        `${signInPath}?error=AuthError${invite ? `&invite=${encodeURIComponent(invite)}` : ""}`,
      );
    }
    throw error;
  }
}
