/* SAVEN Core — lightweight offline shell (D-0162).
 * Caches the app shell only. Does not invent offline content for domain pages.
 */
const CACHE = "savencore-shell-v9";
const SHELL = [
  "/",
  "/en/",
  "/manifest.webmanifest",
  "/icons/icon-192.png?v=211",
  "/icons/icon-512.png?v=211",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(SHELL)).then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))),
    ).then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  // Network-first for navigations; cache fallback for shell only.
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE).then((cache) => cache.put(request, copy));
          return response;
        })
        .catch(() =>
          caches.match(request).then((cached) => cached || caches.match("/en/")),
        ),
    );
    return;
  }
});
