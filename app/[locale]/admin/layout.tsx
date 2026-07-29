import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound, redirect } from "next/navigation";

import { requireAdminRole } from "@/admin/require-role";
import { AdminShell } from "@/components/admin/AdminShell";
import { isLocale, type Locale } from "@/config/locales";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { localizePath } from "@/navigation/locale-path";

type AdminLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) {
    return { robots: { index: false, follow: false } };
  }
  return buildPageMetadata({
    locale: localeParam,
    path: "/admin/",
    title: "Admin",
    description: "Restricted operator surface.",
    noIndex: true,
  });
}

export default async function AdminLayout({
  children,
  params,
}: AdminLayoutProps) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) {
    notFound();
  }
  const locale: Locale = localeParam;

  const gate = await requireAdminRole("viewer");
  if (!gate.ok) {
    if (gate.reason === "forbidden") {
      redirect(localizePath(locale, "/"));
    }
    const callback = localizePath(locale, "/admin/");
    const signIn = localizePath(locale, "/auth/sign-in/");
    redirect(
      `${signIn}?callbackUrl=${encodeURIComponent(callback)}`,
    );
  }

  return (
    <AdminShell locale={locale} role={gate.role} email={gate.email}>
      {children}
    </AdminShell>
  );
}
