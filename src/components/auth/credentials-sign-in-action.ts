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

  if (!isCredentialsAuthConfigured()) {
    redirect(`${signInPath}?error=CredentialsNotConfigured`);
  }

  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: localizePath(locale, "/"),
    });
  } catch (error) {
    if (error instanceof CredentialsSignin) {
      redirect(`${signInPath}?error=CredentialsSignin`);
    }
    if (error instanceof AuthError) {
      redirect(`${signInPath}?error=AuthError`);
    }
    throw error;
  }
}
