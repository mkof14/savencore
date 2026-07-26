import Link from "next/link";

import { isCredentialsAuthConfigured, isGoogleAuthConfigured } from "@/auth";
import { SavenLogo } from "@/components/brand/SavenLogo";
import type { Locale } from "@/config/locales";
import { getUi } from "@/i18n/ui";
import { localizePath } from "@/navigation/locale-path";

import { CredentialsSignInForm } from "./CredentialsSignInForm";
import { googleSignInAction } from "./google-sign-in-action";
import "./sign-in.css";

type SignInPageProps = {
  locale: Locale;
  error?: string | null;
};

export function SignInPage({ locale, error }: SignInPageProps) {
  const ui = getUi(locale);
  const googleConfigured = isGoogleAuthConfigured();
  const credentialsConfigured = isCredentialsAuthConfigured();
  const homeHref = localizePath(locale, "/");
  const errorMessage = resolveAuthErrorMessage(error, ui.auth);

  return (
    <div className="auth-sign-in">
      <div className="auth-sign-in__atmosphere" aria-hidden="true">
        <div className="auth-sign-in__glow" />
        <div className="auth-sign-in__grain" />
      </div>

      <div className="auth-sign-in__panel">
        <Link href={homeHref} className="auth-sign-in__back">
          <span aria-hidden="true" className="auth-sign-in__back-arrow">
            ←
          </span>
          {ui.auth.back}
        </Link>

        <div className="auth-sign-in__brand">
          <SavenLogo
            locale={locale}
            variant="footer"
            tone="dark"
            linked={false}
            className="auth-sign-in__logo"
          />
        </div>

        <div className="auth-sign-in__copy">
          <h1 className="auth-sign-in__title">{ui.auth.signInTitle}</h1>
          <p className="auth-sign-in__lead">{ui.auth.signInLead}</p>
        </div>

        <div className="auth-sign-in__actions">
          {errorMessage ? (
            <div className="auth-sign-in__error" role="alert">
              {errorMessage}
            </div>
          ) : null}

          <CredentialsSignInForm
            locale={locale}
            configured={credentialsConfigured}
            labels={ui.auth}
          />

          {!credentialsConfigured ? (
            <div className="auth-sign-in__notice" role="status">
              <p className="auth-sign-in__notice-title">
                {ui.auth.configureTitle}
              </p>
              <p>{ui.auth.configurePassword}</p>
              <p className="auth-sign-in__notice-muted">
                {ui.auth.operatorNote}
              </p>
            </div>
          ) : (
            <p className="auth-sign-in__hint">{ui.auth.operatorNote}</p>
          )}

          <div className="auth-sign-in__divider" role="separator">
            <span>{ui.auth.orDivider}</span>
          </div>

          {googleConfigured ? (
            <form action={googleSignInAction.bind(null, locale)}>
              <button type="submit" className="auth-sign-in__google">
                <GoogleMark />
                {ui.auth.continueWithGoogle}
              </button>
            </form>
          ) : (
            <>
              <button
                type="button"
                className="auth-sign-in__google"
                disabled
                aria-disabled="true"
              >
                <GoogleMark />
                {ui.auth.continueWithGoogle}
              </button>
              <div className="auth-sign-in__notice" role="status">
                <p className="auth-sign-in__notice-title">
                  {ui.auth.configureTitle}
                </p>
                <p>{ui.auth.configureGoogle}</p>
                <p className="auth-sign-in__notice-muted">{ui.auth.notSignedIn}</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function resolveAuthErrorMessage(
  error: string | null | undefined,
  auth: ReturnType<typeof getUi>["auth"],
): string | null {
  if (!error) return null;
  if (error === "CredentialsSignin" || error === "CredentialsSigninError") {
    return auth.invalidCredentials;
  }
  if (
    error === "CredentialsNotConfigured" ||
    error === "Configuration" ||
    error === "AuthError"
  ) {
    return auth.configurePassword;
  }
  return auth.invalidCredentials;
}

function GoogleMark() {
  return (
    <svg
      className="auth-sign-in__google-mark"
      viewBox="0 0 18 18"
      width="20"
      height="20"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="#4285F4"
        d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z"
      />
      <path
        fill="#34A853"
        d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9 18z"
      />
      <path
        fill="#FBBC05"
        d="M3.964 10.707c-.18-.54-.282-1.117-.282-1.707s.102-1.167.282-1.707V4.961H.957C.348 6.175 0 7.55 0 9s.348 2.825.957 4.039l3.007-2.332z"
      />
      <path
        fill="#EA4335"
        d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.961L3.964 7.293C4.672 5.163 6.656 3.58 9 3.58z"
      />
    </svg>
  );
}
