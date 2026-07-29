/**
 * Soft in-memory Contact API rate limit (D-0243).
 * Best-effort per process — appropriate for soft degrade to mailto, not a hard WAF.
 */

const WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS = 5;
const MAX_KEYS = 5_000;

type Bucket = {
  hits: number[];
};

const buckets = new Map<string, Bucket>();

function pruneHits(hits: number[], now: number): number[] {
  return hits.filter((t) => now - t < WINDOW_MS);
}

function evictIfNeeded(): void {
  if (buckets.size <= MAX_KEYS) return;
  const overflow = buckets.size - MAX_KEYS;
  const keys = buckets.keys();
  for (let i = 0; i < overflow; i += 1) {
    const key = keys.next().value;
    if (key === undefined) break;
    buckets.delete(key);
  }
}

/** Resolve a coarse client key from common proxy headers. */
export function getContactClientKey(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim();
    if (first) return first.slice(0, 64);
  }
  const realIp = request.headers.get("x-real-ip")?.trim();
  if (realIp) return realIp.slice(0, 64);
  const cf = request.headers.get("cf-connecting-ip")?.trim();
  if (cf) return cf.slice(0, 64);
  return "unknown";
}

export type ContactRateLimitResult = {
  allowed: boolean;
  remaining: number;
};

/**
 * Record one attempt and return whether the client may use SMTP send.
 * When denied, Contact should soft-degrade to mailto without exposing internals.
 */
export function consumeContactRateLimit(
  clientKey: string,
  now = Date.now(),
): ContactRateLimitResult {
  const key = clientKey || "unknown";
  const existing = buckets.get(key);
  const hits = pruneHits(existing?.hits ?? [], now);

  if (hits.length >= MAX_REQUESTS) {
    buckets.set(key, { hits });
    return { allowed: false, remaining: 0 };
  }

  hits.push(now);
  buckets.set(key, { hits });
  evictIfNeeded();
  return { allowed: true, remaining: Math.max(0, MAX_REQUESTS - hits.length) };
}

/** Test helper — clear buckets between prove runs. */
export function resetContactRateLimitForTests(): void {
  buckets.clear();
}

export const CONTACT_RATE_LIMIT = {
  windowMs: WINDOW_MS,
  maxRequests: MAX_REQUESTS,
} as const;
