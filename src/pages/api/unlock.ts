/**
 * POST /api/unlock — validates the passcode or @domain email server-side
 * (never shipped to the client) and sets the HttpOnly gate cookie on match.
 */
import type { APIRoute } from 'astro';
import {
  GATE_COOKIE_MAX_AGE,
  GATE_COOKIE_NAME,
  GATE_PATH,
  isAllowedCredential,
  sanitizeNext,
} from '@lib/gate';

export const prerender = false;

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  const form = await request.formData();
  const credential = String(form.get('credential') ?? '');
  const next = sanitizeNext(String(form.get('next') ?? ''));

  if (!isAllowedCredential(credential)) {
    return redirect(`${GATE_PATH}?error=1&next=${encodeURIComponent(next)}`);
  }

  cookies.set(GATE_COOKIE_NAME, 'granted', {
    path: '/',
    httpOnly: true,
    secure: import.meta.env.PROD,
    sameSite: 'lax',
    maxAge: GATE_COOKIE_MAX_AGE,
  });

  return redirect(next);
};
