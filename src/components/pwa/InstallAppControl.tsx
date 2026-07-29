"use client";

import { useEffect, useId, useRef, useState } from "react";

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
 * Install app control — always visible in the footer Resources column (D-0223 / D-0224).
 * - beforeinstallprompt → native install prompt
 * - already installed → “Installed”
 * - otherwise → compact “How to install” panel (tip + Close inside the panel)
 */
export function InstallAppControl({
  locale,
  placement = "footer",
}: InstallAppControlProps) {
  const ui = getUi(locale);
  const helpId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const [deferred, setDeferred] = useState<BeforeInstallPromptEvent | null>(
    null,
  );
  const [isIos, setIsIos] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);
  const [standalone, setStandalone] = useState(false);

  useEffect(() => {
    if (isStandalone()) {
      setStandalone(true);
      return;
    }

    const onBip = (event: Event) => {
      event.preventDefault();
      setDeferred(event as BeforeInstallPromptEvent);
      setHelpOpen(false);
    };

    window.addEventListener("beforeinstallprompt", onBip);
    setIsIos(isIosDevice());

    return () => window.removeEventListener("beforeinstallprompt", onBip);
  }, []);

  useEffect(() => {
    if (!helpOpen) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setHelpOpen(false);
    };
    const onPointer = (event: MouseEvent) => {
      if (
        rootRef.current &&
        !rootRef.current.contains(event.target as Node)
      ) {
        setHelpOpen(false);
      }
    };

    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onPointer);
    };
  }, [helpOpen]);

  const className =
    "site-footer__link site-footer__install-control install-app";

  if (standalone) {
    return (
      <span className={`${className} install-app--installed`}>
        {ui.pwa.installed}
      </span>
    );
  }

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
    <div
      ref={rootRef}
      className={`install-app install-app--help install-app--${placement}`}
    >
      <button
        type="button"
        className={className}
        aria-expanded={helpOpen}
        aria-controls={helpOpen ? helpId : undefined}
        onClick={() => setHelpOpen((open) => !open)}
      >
        {ui.pwa.installApp}
      </button>
      {helpOpen ? (
        <div
          id={helpId}
          className="install-app__panel"
          role="dialog"
          aria-label={ui.pwa.howToInstall}
        >
          <p className="install-app__panel-title">{ui.pwa.howToInstall}</p>
          <p className="install-app__tip-text">
            {isIos ? ui.pwa.iosTip : ui.pwa.browserTip}
          </p>
          <button
            type="button"
            className="install-app__dismiss"
            onClick={() => setHelpOpen(false)}
          >
            {ui.pwa.closeHelp}
          </button>
        </div>
      ) : null}
    </div>
  );
}
