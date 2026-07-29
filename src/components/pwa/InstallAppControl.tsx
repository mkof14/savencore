"use client";

import { useEffect, useState } from "react";

import type { Locale } from "@/config/locales";
import { getUi } from "@/i18n/ui";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

type InstallAppControlProps = {
  locale: Locale;
  /** Install control is footer-only (D-0164). */
  placement?: "footer";
};

function isIosDevice(): boolean {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent;
  const iOS = /iPad|iPhone|iPod/.test(ua);
  const iPadOs = navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
  return iOS || iPadOs;
}

function isStandalone(): boolean {
  if (typeof window === "undefined") return false;
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    // iOS Safari
    Boolean((navigator as Navigator & { standalone?: boolean }).standalone)
  );
}

/**
 * Install app control — always visible in the footer Resources column (D-0223).
 * Uses beforeinstallprompt when available; otherwise a short how-to tip.
 * Hidden only when already installed (standalone) or the tip was dismissed.
 */
export function InstallAppControl({
  locale,
  placement = "footer",
}: InstallAppControlProps) {
  const ui = getUi(locale);
  const [deferred, setDeferred] = useState<BeforeInstallPromptEvent | null>(
    null,
  );
  const [isIos, setIsIos] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [standalone, setStandalone] = useState(false);

  useEffect(() => {
    if (isStandalone()) {
      setStandalone(true);
      return;
    }

    const onBip = (event: Event) => {
      event.preventDefault();
      setDeferred(event as BeforeInstallPromptEvent);
    };

    window.addEventListener("beforeinstallprompt", onBip);
    setIsIos(isIosDevice());

    return () => window.removeEventListener("beforeinstallprompt", onBip);
  }, []);

  if (dismissed || standalone) {
    return null;
  }

  const className =
    "site-footer__link site-footer__install-control install-app";

  if (deferred) {
    return (
      <button
        type="button"
        className={className}
        onClick={async () => {
          await deferred.prompt();
          try {
            await deferred.userChoice;
          } catch {
            /* ignore */
          }
          setDeferred(null);
        }}
      >
        {ui.pwa.installApp}
      </button>
    );
  }

  return (
    <details className={`install-app install-app--tip install-app--${placement}`}>
      <summary className={className}>{ui.pwa.installApp}</summary>
      <p className="install-app__tip">
        {isIos ? ui.pwa.iosTip : ui.pwa.browserTip}
      </p>
      <button
        type="button"
        className="install-app__dismiss"
        onClick={() => setDismissed(true)}
      >
        {ui.close}
      </button>
    </details>
  );
}
