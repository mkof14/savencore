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
  placement?: "header" | "footer";
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
 * Discreet Install app control — shows when beforeinstallprompt is available,
 * or a short iOS tip when installable via Share → Add to Home Screen.
 */
export function InstallAppControl({
  locale,
  placement = "header",
}: InstallAppControlProps) {
  const ui = getUi(locale);
  const [deferred, setDeferred] = useState<BeforeInstallPromptEvent | null>(
    null,
  );
  const [showIosTip, setShowIosTip] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (isStandalone()) return;

    const onBip = (event: Event) => {
      event.preventDefault();
      setDeferred(event as BeforeInstallPromptEvent);
      setShowIosTip(false);
    };

    window.addEventListener("beforeinstallprompt", onBip);

    if (isIosDevice()) {
      setShowIosTip(true);
    }

    return () => window.removeEventListener("beforeinstallprompt", onBip);
  }, []);

  if (dismissed || isStandalone()) {
    return null;
  }

  if (!deferred && !showIosTip) {
    return null;
  }

  const className =
    placement === "footer"
      ? "site-footer__text-link install-app"
      : "site-header__text-link install-app";

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
      <p className="install-app__tip">{ui.pwa.iosTip}</p>
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
