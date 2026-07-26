import Link from "next/link";
import { notFound, redirect } from "next/navigation";

import { auth } from "@/auth";
import { isLocale, type Locale } from "@/config/locales";
import { getUi } from "@/i18n/ui";
import {
  acceptInvitation,
  getInvitationByToken,
} from "@/lib/admin/invitations-store";
import { assignOperatorRole } from "@/lib/admin/operators-store";
import { localizePath } from "@/navigation/locale-path";

type PageProps = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ token?: string | string[] }>;
};

export default async function AcceptInvitePage({
  params,
  searchParams,
}: PageProps) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) {
    notFound();
  }
  const locale: Locale = localeParam;
  const ui = getUi(locale);
  const query = await searchParams;
  const tokenRaw = query.token;
  const token = Array.isArray(tokenRaw) ? tokenRaw[0] : tokenRaw;

  if (!token) {
    return (
      <main className="admin-shell__main" style={{ maxWidth: 640, margin: "2rem auto" }}>
        <p className="admin-page__eyebrow">{ui.admin.eyebrow}</p>
        <h1 className="admin-page__title">{ui.admin.invitationsTitle}</h1>
        <p className="admin-note">{ui.admin.inviteMissingToken}</p>
      </main>
    );
  }

  const session = await auth();
  const email = session?.user?.email?.trim().toLowerCase() ?? "";
  if (!email) {
    const signIn = localizePath(locale, "/auth/sign-in/");
    const callback = localizePath(
      locale,
      `/auth/accept-invite/?token=${encodeURIComponent(token)}`,
    );
    redirect(
      `${signIn}?invite=${encodeURIComponent(token)}&callbackUrl=${encodeURIComponent(callback)}`,
    );
  }

  const invitation = await getInvitationByToken(token);
  if (!invitation) {
    return (
      <main className="admin-shell__main" style={{ maxWidth: 640, margin: "2rem auto" }}>
        <p className="admin-page__eyebrow">{ui.admin.eyebrow}</p>
        <h1 className="admin-page__title">{ui.admin.invitationsTitle}</h1>
        <p className="admin-note">{ui.admin.inviteNotFound}</p>
        <Link href={localizePath(locale, "/")} className="admin-card__link">
          {ui.admin.backToSite}
        </Link>
      </main>
    );
  }

  const accepted = await acceptInvitation({ token, email });
  if (!accepted.ok) {
    return (
      <main className="admin-shell__main" style={{ maxWidth: 640, margin: "2rem auto" }}>
        <p className="admin-page__eyebrow">{ui.admin.eyebrow}</p>
        <h1 className="admin-page__title">{ui.admin.invitationsTitle}</h1>
        <p className="admin-note">{accepted.error}</p>
        <Link
          href={localizePath(locale, "/auth/sign-in/")}
          className="admin-card__link"
        >
          {ui.auth.signInSubmit}
        </Link>
      </main>
    );
  }

  await assignOperatorRole({
    email,
    role: accepted.invitation.role,
    source: "invitation",
    note: `Accepted invitation ${accepted.invitation.id}`,
  });

  return (
    <main className="admin-shell__main" style={{ maxWidth: 640, margin: "2rem auto" }}>
      <p className="admin-page__eyebrow">{ui.admin.eyebrow}</p>
      <h1 className="admin-page__title">{ui.admin.inviteAcceptedTitle}</h1>
      <p className="admin-note">{ui.admin.inviteAcceptedReauth}</p>
      <div className="admin-actions">
        <Link
          href={localizePath(locale, "/auth/sign-in/")}
          className="admin-btn admin-btn--primary"
        >
          {ui.auth.signInSubmit}
        </Link>
        <Link href={localizePath(locale, "/admin/")} className="admin-btn">
          {ui.admin.navDashboard}
        </Link>
      </div>
    </main>
  );
}
