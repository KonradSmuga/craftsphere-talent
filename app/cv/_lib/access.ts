/**
 * Private CV access. The CV lives at /cv/<token> and is only rendered for tokens
 * listed in the CV_TOKENS variable. Any other token gets a plain 404, so the page
 * is invisible to anyone without a link.
 *
 * Configure in Cloudflare → Workers → craftsphere-talent → Settings → Variables and Secrets:
 *
 *   CV_TOKENS  (secret)  comma-separated list of tokens, optionally labelled:
 *                        "acme:9f2c4b1e7a6d3f80b5c2,linkedin:4e8a1c9b2d7f6a3e0c51"
 *                        The label is only a reminder of who got the link.
 *                        Remove an entry to switch that link off.
 *
 * Generate a token with:  node -e "console.log(require('crypto').randomBytes(12).toString('hex'))"
 */
import { env } from "cloudflare:workers";

const MIN_TOKEN_LENGTH = 16;

function configuredTokens(): string[] {
  const raw = (env as Record<string, unknown>).CV_TOKENS;
  if (typeof raw !== "string") return [];
  return raw
    .split(/[,\n]/)
    .map((entry) => entry.trim())
    .filter(Boolean)
    .map((entry) => entry.slice(entry.lastIndexOf(":") + 1).trim())
    .filter((token) => token.length >= MIN_TOKEN_LENGTH);
}

function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

export function isValidCvToken(token: string | undefined): boolean {
  if (!token || token.length < MIN_TOKEN_LENGTH || token.length > 128) return false;
  let match = false;
  for (const candidate of configuredTokens()) {
    if (safeEqual(candidate, token)) match = true;
  }
  return match;
}
