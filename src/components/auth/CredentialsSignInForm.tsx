"use client";

import { useId, useState } from "react";

import type { Locale } from "@/config/locales";
import type { UiMessages } from "@/i18n/ui";

import { credentialsSignInAction } from "./credentials-sign-in-action";

type CredentialsSignInFormProps = {
  locale: Locale;
  configured: boolean;
  labels: UiMessages["auth"];
};

export function CredentialsSignInForm({
  locale,
  configured,
  labels,
}: CredentialsSignInFormProps) {
  const emailId = useId();
  const passwordId = useId();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form
      className="auth-sign-in__form"
      action={credentialsSignInAction.bind(null, locale)}
    >
      <div className="auth-sign-in__field">
        <label className="auth-sign-in__label" htmlFor={emailId}>
          {labels.emailLabel}
        </label>
        <input
          id={emailId}
          className="auth-sign-in__input"
          type="email"
          name="email"
          autoComplete="email"
          inputMode="email"
          required
          disabled={!configured}
          placeholder={labels.emailPlaceholder}
        />
      </div>

      <div className="auth-sign-in__field">
        <label className="auth-sign-in__label" htmlFor={passwordId}>
          {labels.passwordLabel}
        </label>
        <div className="auth-sign-in__password-row">
          <input
            id={passwordId}
            className="auth-sign-in__input auth-sign-in__input--password"
            type={showPassword ? "text" : "password"}
            name="password"
            autoComplete="current-password"
            required
            disabled={!configured}
            placeholder={labels.passwordPlaceholder}
          />
          <button
            type="button"
            className="auth-sign-in__password-toggle"
            onClick={() => setShowPassword((value) => !value)}
            aria-pressed={showPassword}
            aria-controls={passwordId}
            disabled={!configured}
          >
            {showPassword ? labels.hidePassword : labels.showPassword}
          </button>
        </div>
      </div>

      <button
        type="submit"
        className="auth-sign-in__submit"
        disabled={!configured}
        aria-disabled={!configured}
      >
        {labels.signInSubmit}
      </button>
    </form>
  );
}
