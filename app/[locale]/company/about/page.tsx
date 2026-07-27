import { notFound, redirect } from "next/navigation";

import { isLocale } from "@/config/locales";
import { localizePath } from "@/navigation/locale-path";

type Props = { params: Promise<{ locale: string }> };

/**
 * Thin alias — /company/about/ redirects to the canonical /foundation/ page (D-0194).
 * No content lives here; the Foundation page is the single source of truth.
 */
export default async function Page({ params }: Props) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) {
    notFound();
  }
  redirect(localizePath(localeParam, "/foundation/"));
}
