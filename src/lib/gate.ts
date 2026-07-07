/**
 * Whole-site passcode/email-domain gate. No DB, no OAuth, no Identity/Session
 * tables — a single HttpOnly cookie set by a server-side check.
 *
 * Two ways in: a shared passcode (RUH_GATE_PASSCODE), or typing an email
 * address ending in the allowed domain (RUH_ALLOWED_EMAIL_DOMAIN). The
 * email path does not verify ownership (no magic link) — it's a phrase
 * match, same trust level as the passcode. That's the intended minimum
 * for a single known stakeholder.
 */

export const GATE_COOKIE_NAME = 'ruh_gate';
export const GATE_COOKIE_MAX_AGE = 60 * 60 * 24 * 90; // 90 days
export const GATE_PATH = '/gate';
export const UNLOCK_API_PATH = '/api/unlock';

/** Paths that must stay reachable without the cookie, or no one could ever unlock. */
export const UNGATED_PATHS = [GATE_PATH, UNLOCK_API_PATH];

export function isUngatedPath(pathname: string): boolean {
  return UNGATED_PATHS.some((p) => pathname === p || pathname.startsWith(`${p}/`));
}

/** Only accept same-site relative paths for the post-unlock redirect target. */
export function sanitizeNext(next: string | null | undefined): string {
  if (!next) return '/';
  if (!next.startsWith('/') || next.startsWith('//')) return '/';
  return next;
}

export function isAllowedCredential(rawInput: string): boolean {
  const input = rawInput.trim();
  if (!input) return false;

  const env = import.meta.env as unknown as Record<string, string | undefined>;

  if (input.includes('@')) {
    const domain = (env.RUH_ALLOWED_EMAIL_DOMAIN ?? '').trim().toLowerCase();
    if (!domain) return false;
    return input.toLowerCase().endsWith(`@${domain}`);
  }

  const passcode = (env.RUH_GATE_PASSCODE ?? '').trim().toLowerCase();
  if (!passcode) return false;
  return input.toLowerCase() === passcode;
}
