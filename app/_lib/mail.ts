/**
 * Server-side helpers for the website forms. Emails are sent through Resend
 * (https://resend.com). Configure these in Cloudflare → Workers → craftsphere-talent
 * → Settings → Variables and Secrets:
 *
 *   RESEND_API_KEY  (secret, required)  API key from resend.com
 *   CONTACT_TO      (optional)          inbox for form messages, default konrad@craftspheretalent.com
 *   CONTACT_FROM    (optional)          sender, default "Craftsphere Talent website <onboarding@resend.dev>".
 *                                       Use an address on a domain verified in Resend, e.g.
 *                                       "Craftsphere Talent <forms@craftspheretalent.com>".
 */
import { env } from "cloudflare:workers";

const DEFAULT_TO = "konrad@craftspheretalent.com";
const DEFAULT_FROM = "Craftsphere Talent website <onboarding@resend.dev>";

export type Attachment = { filename: string; content: string };

export class NotConfiguredError extends Error {}

function setting(name: string): string | undefined {
  const value = (env as Record<string, unknown>)[name];
  return typeof value === "string" && value.trim() ? value.trim() : undefined;
}

export async function sendMail(options: {
  subject: string;
  text: string;
  replyTo: string;
  attachments?: Attachment[];
}): Promise<void> {
  const apiKey = setting("RESEND_API_KEY");
  if (!apiKey) throw new NotConfiguredError("RESEND_API_KEY is not set");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: setting("CONTACT_FROM") ?? DEFAULT_FROM,
      to: [setting("CONTACT_TO") ?? DEFAULT_TO],
      reply_to: options.replyTo,
      subject: options.subject,
      text: options.text,
      attachments: options.attachments,
    }),
  });

  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    throw new Error(`Resend responded ${response.status}: ${detail.slice(0, 300)}`);
  }
}

/** Reads a trimmed text field, cut to `max` characters. */
export function field(form: FormData, name: string, max = 500): string {
  const value = form.get(name);
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * Spam checks shared by both forms: a hidden "website" field humans leave empty,
 * and a minimum time between page load and submit.
 */
export function looksLikeSpam(form: FormData): boolean {
  if (field(form, "website")) return true;
  const startedAt = Number(field(form, "started_at", 20));
  return Number.isFinite(startedAt) && startedAt > 0 && Date.now() - startedAt < 2500;
}

export function json(status: number, body: Record<string, unknown>): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });
}

export function failure(error: unknown): Response {
  if (error instanceof NotConfiguredError) {
    return json(503, { ok: false, error: "not_configured" });
  }
  console.error("form delivery failed", error);
  return json(502, { ok: false, error: "delivery_failed" });
}

export function toBase64(bytes: Uint8Array): string {
  let binary = "";
  const chunk = 0x8000;
  for (let i = 0; i < bytes.length; i += chunk) {
    binary += String.fromCharCode(...bytes.subarray(i, i + chunk));
  }
  return btoa(binary);
}
