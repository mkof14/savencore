import { promises as fs } from "node:fs";
import path from "node:path";

const STORAGE_ROOT = path.join(process.cwd(), "storage", "admin");

export type StoreWriteResult =
  | { ok: true }
  | { ok: false; error: string; code: "storage_unavailable" };

async function ensureRoot(): Promise<void> {
  await fs.mkdir(STORAGE_ROOT, { recursive: true });
}

export function adminStorePath(filename: string): string {
  return path.join(STORAGE_ROOT, filename);
}

export async function readJsonFile<T>(
  filename: string,
  fallback: T,
): Promise<T> {
  try {
    const raw = await fs.readFile(adminStorePath(filename), "utf8");
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export async function writeJsonFile<T>(
  filename: string,
  data: T,
): Promise<StoreWriteResult> {
  try {
    await ensureRoot();
    await fs.writeFile(
      adminStorePath(filename),
      `${JSON.stringify(data, null, 2)}\n`,
      "utf8",
    );
    return { ok: true };
  } catch {
    return {
      ok: false,
      error:
        "Admin JSON store is not writable in this environment. Local development writes to storage/admin/; production needs durable storage (next phase).",
      code: "storage_unavailable",
    };
  }
}

export async function appendJsonLinesFile(
  filename: string,
  line: unknown,
): Promise<StoreWriteResult> {
  try {
    await ensureRoot();
    await fs.appendFile(
      adminStorePath(filename),
      `${JSON.stringify(line)}\n`,
      "utf8",
    );
    return { ok: true };
  } catch {
    return {
      ok: false,
      error:
        "Admin outbox store is not writable in this environment.",
      code: "storage_unavailable",
    };
  }
}
