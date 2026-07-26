"use client";

import { useEffect } from "react";

/** Registers the lightweight offline-shell service worker when supported. */
export function RegisterServiceWorker() {
  useEffect(() => {
    if (typeof window === "undefined" || !("serviceWorker" in navigator)) {
      return;
    }
    // Avoid SW noise during local Next/Turbopack HMR.
    if (process.env.NODE_ENV !== "production") {
      return;
    }
    void navigator.serviceWorker.register("/sw.js").catch(() => {
      /* non-fatal */
    });
  }, []);

  return null;
}
