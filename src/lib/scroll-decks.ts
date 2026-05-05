/**
 * Registry of Reach Story scroll-deck variants.
 *
 * The "scroll deck" is the assembled, scroll-snap-driven composition of all
 * nine sections in one page. Each entry here represents one published variant.
 * Pattern stolen from sites/calmstorm-decks/src/lib/scroll-decks.ts.
 *
 * Add a new entry when you publish a new variant. The Header cycler appears
 * between Story and Brand Kit only when the current pathname matches a
 * registered href.
 */

export interface ScrollDeck {
  /** URL the deck is mounted at (no trailing slash). */
  href: string;
  /** Short label shown in the header chrome cycler. */
  label: string;
  /** Sequential variant number, used in counters. */
  variantNumber: number;
}

export const SCROLL_DECKS: ScrollDeck[] = [
  { href: '/story',           label: 'v1 · baseline',  variantNumber: 1 },
  { href: '/story/version-2', label: 'v2 · editorial', variantNumber: 2 },
];

/** Default landing for the "Story" header link. */
export const SCROLL_DECK_HOME = SCROLL_DECKS[0].href;

/** Normalize trailing slash before matching. */
function norm(p: string): string {
  return p.replace(/\/$/, '') || '/';
}

export function isScrollDeckPath(pathname: string): boolean {
  const p = norm(pathname);
  return SCROLL_DECKS.some((d) => d.href === p);
}

export function getScrollDeckCycle(pathname: string): {
  prev: string;
  next: string;
  index: number;
  total: number;
  current: ScrollDeck;
} | null {
  const p = norm(pathname);
  const total = SCROLL_DECKS.length;
  const i = SCROLL_DECKS.findIndex((d) => d.href === p);
  if (i === -1) return null;
  return {
    prev: SCROLL_DECKS[(i - 1 + total) % total].href,
    next: SCROLL_DECKS[(i + 1) % total].href,
    index: i + 1,
    total,
    current: SCROLL_DECKS[i],
  };
}
