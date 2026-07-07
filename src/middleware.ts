/**
 * Whole-site gate. See src/lib/gate.ts for the mechanism. Redirects any
 * request without the unlock cookie to /gate, preserving the original
 * path so the unlock endpoint can send the visitor back afterward.
 */
import { defineMiddleware } from 'astro:middleware';
import { GATE_COOKIE_NAME, GATE_PATH, isUngatedPath } from '@lib/gate';

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname, search } = context.url;

  if (isUngatedPath(pathname)) return next();

  const cookie = context.cookies.get(GATE_COOKIE_NAME);
  if (cookie?.value === 'granted') return next();

  const nextParam = encodeURIComponent(`${pathname}${search}`);
  return context.redirect(`${GATE_PATH}?next=${nextParam}`);
});
