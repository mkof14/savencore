/**
 * Optional SMTP send for admin mailings (D-0178).
 * Uses Node net/tls with a minimal SMTP client — no extra dependency.
 * When SMTP_* is unset, callers must use simulated send.
 */

import { connect as tlsConnect } from "node:tls";
import { connect as netConnect, type Socket } from "node:net";

export type SmtpConfig = {
  host: string;
  port: number;
  secure: boolean;
  user?: string | undefined;
  pass?: string | undefined;
  from: string;
};

export function isSmtpConfigured(): boolean {
  return Boolean(
    (process.env.SMTP_HOST ?? "").trim() &&
      (process.env.SMTP_FROM ?? process.env.SMTP_USER ?? "").trim(),
  );
}

export function getSmtpConfig(): SmtpConfig | null {
  const host = (process.env.SMTP_HOST ?? "").trim();
  if (!host) return null;
  const port = Number(process.env.SMTP_PORT || (process.env.SMTP_SECURE === "true" ? 465 : 587));
  const user = (process.env.SMTP_USER ?? "").trim();
  const pass = process.env.SMTP_PASS ?? "";
  const from =
    (process.env.SMTP_FROM ?? "").trim() ||
    user ||
    "info@savencore.com";
  const config: SmtpConfig = {
    host,
    port: Number.isFinite(port) ? port : 587,
    secure: process.env.SMTP_SECURE === "true" || port === 465,
    from,
  };
  if (user) config.user = user;
  if (pass) config.pass = pass;
  return config;
}

function encodeAddressList(list: string[]): string {
  return list.join(", ");
}

async function readResponse(socket: Socket): Promise<string> {
  return new Promise((resolve, reject) => {
    let buf = "";
    const onData = (chunk: Buffer) => {
      buf += chunk.toString("utf8");
      if (/\r?\n/.test(buf) && /(?:^|\n)\d{3}[ \-].*\r?\n/.test(buf)) {
        // Wait until last line is space-delimited (end of multiline)
        const lines = buf.split(/\r?\n/).filter(Boolean);
        const last = lines[lines.length - 1] ?? "";
        if (/^\d{3} /.test(last)) {
          socket.off("data", onData);
          socket.off("error", onError);
          resolve(buf);
        }
      }
    };
    const onError = (err: Error) => {
      socket.off("data", onData);
      reject(err);
    };
    socket.on("data", onData);
    socket.on("error", onError);
  });
}

async function smtpCommand(
  socket: Socket,
  command: string,
  expectCode: number,
): Promise<string> {
  socket.write(`${command}\r\n`);
  const response = await readResponse(socket);
  const code = Number(response.slice(0, 3));
  if (code !== expectCode) {
    throw new Error(`SMTP unexpected response to ${command.split(" ")[0]}: ${response.trim().slice(0, 180)}`);
  }
  return response;
}

function toBase64(value: string): string {
  return Buffer.from(value, "utf8").toString("base64");
}

export async function trySendSmtpMail(input: {
  to: string[];
  subject: string;
  html: string;
}): Promise<{ ok: true } | { ok: false; error: string }> {
  const config = getSmtpConfig();
  if (!config) {
    return { ok: false, error: "SMTP is not configured." };
  }
  if (!input.to.length) {
    return { ok: false, error: "No recipients." };
  }

  let socket: Socket | null = null;
  try {
    socket = await new Promise<Socket>((resolve, reject) => {
      const s = config.secure
        ? tlsConnect({ host: config.host, port: config.port, servername: config.host }, () =>
            resolve(s),
          )
        : netConnect({ host: config.host, port: config.port }, () => resolve(s));
      s.setEncoding("utf8");
      s.once("error", reject);
    });

    await readResponse(socket);
    await smtpCommand(socket, `EHLO savencore.com`, 250);

    if (!config.secure && (process.env.SMTP_STARTTLS ?? "true") !== "false") {
      await smtpCommand(socket, "STARTTLS", 220);
      socket = await new Promise<Socket>((resolve, reject) => {
        const secure = tlsConnect(
          { socket: socket!, host: config.host, servername: config.host },
          () => resolve(secure),
        );
        secure.setEncoding("utf8");
        secure.once("error", reject);
      });
      await smtpCommand(socket, `EHLO savencore.com`, 250);
    }

    if (config.user && config.pass) {
      await smtpCommand(socket, "AUTH LOGIN", 334);
      await smtpCommand(socket, toBase64(config.user), 334);
      await smtpCommand(socket, toBase64(config.pass), 235);
    }

    await smtpCommand(socket, `MAIL FROM:<${config.from}>`, 250);
    for (const recipient of input.to) {
      await smtpCommand(socket, `RCPT TO:<${recipient}>`, 250);
    }
    await smtpCommand(socket, "DATA", 354);

    const headers = [
      `From: ${config.from}`,
      `To: ${encodeAddressList(input.to)}`,
      `Subject: ${input.subject.replace(/[\r\n]+/g, " ")}`,
      "MIME-Version: 1.0",
      `Content-Type: text/html; charset=utf-8`,
      "Content-Transfer-Encoding: 8bit",
      "",
      input.html,
      ".",
    ].join("\r\n");

    socket.write(`${headers}\r\n`);
    await readResponse(socket);
    await smtpCommand(socket, "QUIT", 221);
    socket.end();
    return { ok: true };
  } catch (err) {
    try {
      socket?.destroy();
    } catch {
      /* ignore */
    }
    return {
      ok: false,
      error:
        err instanceof Error
          ? `SMTP send failed: ${err.message}`
          : "SMTP send failed.",
    };
  }
}
