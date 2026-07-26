import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SignInPage } from "@/components/auth/SignInPage";
import { isLocale } from "@/config/locales";
import { getUi } from "@/i18n/ui";
import { buildPageMetadata } from "@/lib/seo/metadata";

type SignInRouteProps = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ error?: string | string[] }>;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) return {};
  const ui = getUi(localeParam);
  const title = `${ui.auth.signInTitleBefore}SAVEN Core${ui.auth.signInTitleAfter}`;
  return buildPageMetadata({
    locale: localeParam,
    path: "/auth/sign-in/",
    title,
    description: ui.auth.signInLead,
    noIndex: true,
  });
}

export default async function SignInRoute({
  params,
  searchParams,
}: SignInRouteProps) {
  const { locale: localeParam } = await params;
  const query = await searchParams;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const errorParam = query.error;
  const error = Array.isArray(errorParam)
    ? (errorParam[0] ?? null)
    : (errorParam ?? null);

  return <SignInPage locale={localeParam} error={error} />;
}
