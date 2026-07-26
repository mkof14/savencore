import type { ReactNode } from "react";
import { notFound, redirect } from "next/navigation";

import { requireAdminRole } from "@/admin/require-role";
import { AdminShell } from "@/components/admin/AdminShell";
import { isLocale, type Locale } from "@/config/locales";
import { localizePath } from "@/navigation/locale-path";

type AdminLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

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
