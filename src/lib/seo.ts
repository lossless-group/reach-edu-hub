/**
 * Site-wide SEO + OpenGraph registry.
 *
 * Every user-facing page reads its title / description / og:image through
 * the helpers in this module — either by passing the values directly to
 * <MetaTags> or by looking them up by route in STATIC_SEO / SCROLL_DECK_SEO.
 *
 * Pattern adapted from sites/calmstorm-decks/src/lib/seo.ts. Differences for
 * reach-edu-hub:
 *   - The hub is **not gated** — public info, being found is good.
 *     Default `noindex` is FALSE in MetaTags (opt-in to noindex per page).
 *   - Default OG image is the partnership banner at /og_image__Reach-goes-Lossless.png
 *     (1200×630). Generate per-page variants when worth it.
 *
 * To add a new page:
 *   1. If it's a scroll deck variant, add to SCROLL_DECK_SEO.
 *   2. Otherwise add to STATIC_SEO or pass values directly to <MetaTags>.
 *   3. For changelog entries, the [slug].astro page passes frontmatter
 *      directly — no registry entry needed.
 */

/* ──────────────────────────────────────────────────────────────────────
   Site-wide constants
   ────────────────────────────────────────────────────────────────────── */

export const SITE_NAME = 'Reach goes Lossless';

export const SITE_TAGLINE =
  'Reach University × The Lossless Group · Booting up systems for Lossless Collaboration';

/**
 * Default OG image used by every page.
 *
 * Hosted on ImageKit (the Lossless Group's image CDN) rather than the
 * Vercel-served /public path. Reasons:
 *   - ImageKit URLs are stable across Vercel deploys and domain changes.
 *   - ImageKit serves with permissive CORS and high uptime — social
 *     unfurlers (LinkedIn, WhatsApp, iMessage) cache cleanly against it.
 *   - No risk of Git LFS pointer regressions or Vercel deployment-protection
 *     subdomains breaking unfurls (both happened during early reach-edu-hub
 *     deploys; see changelog 2026-05-04_03 + the LFS fix in 4efa52c).
 *
 * Source PNG also lives at /public/ogimage__Default.png as a fallback.
 */
export const DEFAULT_OG_IMAGE =
  'https://ik.imagekit.io/xvpgfijuw/Reach-Edu-Embeds/ogimage__Default.png';

/** Real pixel dimensions of DEFAULT_OG_IMAGE. */
export const DEFAULT_OG_IMAGE_WIDTH = 1408;
export const DEFAULT_OG_IMAGE_HEIGHT = 704;
export const DEFAULT_OG_IMAGE_ALT =
  'Reach University × The Lossless Group — Booting Up Systems for Lossless Collaboration.';

/** Standard <title> suffix appended to per-page titles. */
export const TITLE_SUFFIX = 'Reach goes Lossless';

/** Character limits — design content to look good when truncated. */
export const CHAR_LIMITS = {
  title: 60,
  description: 155,
  siteName: 30,
} as const;

/* ──────────────────────────────────────────────────────────────────────
   Types
   ────────────────────────────────────────────────────────────────────── */

export interface SeoEntry {
  /** Bare title — the suffix " — Reach goes Lossless" is appended automatically. */
  title: string;
  /** Meta description, also used as og:description and twitter:description. */
  description: string;
  /** Override the default OG image. Path (e.g. "/og.png") or absolute URL. Optional. */
  ogImage?: string;
}

/* ──────────────────────────────────────────────────────────────────────
   Per-scroll-deck SEO — keyed by route href
   ────────────────────────────────────────────────────────────────────── */

export const SCROLL_DECK_SEO: Record<string, SeoEntry> = {
  '/scroll/story/baseline': {
    title: 'The Reach Story · v1 Baseline',
    description:
      'Nine sections introducing Reach University — the Apprenticeship Degree, equity mission, method, affordability, faculty, teacher pipeline, partnerships, scale, and the healthcare expansion.',
  },
  '/scroll/story/editorial': {
    title: 'The Reach Story · v2 Editorial',
    description:
      'The same nine sections, in an editorial / serif-driven treatment. Mode-aware throughout — light, dark, and vibrant.',
  },
  '/scroll/automation/pipeline': {
    title: 'Pipeline Building & Automation',
    description:
      'What Lossless will boot up for Reach next. Boost-and-relief for the current fundraise team, then widening the aperture to new donors, new grants, and a map of the philanthropic landscape.',
  },
  /* Pitch-generation strategy decks (2026-07-28) — corpus-slug routes. */
  '/scroll/upward-mobility/um-p1': {
    title: 'Upward Mobility: The Mobility Engine',
    description:
      'America still has a mobility engine — the degree. What broke is the on-ramp. The Apprenticeship Degree rebuilds it: climb while working, without borrowing, without leaving — with verified evidence and the catalytic $25M ask.',
  },
  '/scroll/workforce-development/wd-p1': {
    title: 'Workforce Development: Stop Training and Praying',
    description:
      'The workforce system trains and prays; the evidence says exactly what works. The Apprenticeship Degree stacks every proven design feature — while the 2026 corporate wave funds everything around the degree except the degree.',
  },
  '/scroll/rural-income-boosts/rib-p1': {
    title: 'Rural Income Boosts: The Raise That Stays',
    description:
      'Rural America has an exit problem — every credential is a bus ticket out. The Apprenticeship Degree breaks the loop at the hinge of income, in place: Arkansas proved it with a ~2.4 effect size, and the Delta co-funding table is set.',
  },
  '/scroll/adult-literacy-numeracy/aln-p1': {
    title: 'Foundational Capabilities, Measured Improvements',
    description:
      'The labor market pays for the skill, not the diploma — and 28% of U.S. adults now read at Level 1 or below. Weave the skills into the work, size them for interstitial moments, measure with audio AI — improvement you can see, cohort by cohort.',
  },
  '/scroll/frontier-job-demand/fjd-p1': {
    title: 'Frontier Job Demand: The Job Is the Curriculum',
    description:
      'Design apprenticeship degrees backward from where the jobs are going — advanced manufacturing, drones, applied AI, data center operations, and remote & distributed business administration. Every figure verified against primary sources.',
  },
  '/scroll/ncad-forge/nf-p1': {
    title: 'NCAD Forge: Charter the Lab',
    description:
      'The Apprenticeship Degree runs on a technology stack nobody built — and the domain experts who understand it can now prototype it themselves. Charter the shared lab; the movement keeps the IP.',
  },
  '/scroll/agent-workflow-maxxing/awm-p1': {
    title: 'Agent Workflow Maxxing',
    description:
      'Internal operating doctrine: $19M to raise, dozens of funders, an August deadline, a team of three. Agents research, draft, and watch; humans approve and act.',
  },
  '/scroll/reverse-engineer-funding/ref-p1': {
    title: 'Reverse Engineer Available Funding',
    description:
      'Funding is a power law: 0.1% of grantmakers supply 40% of grant dollars, with a $124T wealth transfer underway. Study the whales, learn the pattern, size every ask to the largest amount that fits.',
  },
};

/* ──────────────────────────────────────────────────────────────────────
   One-off pages
   ────────────────────────────────────────────────────────────────────── */

export const STATIC_SEO = {
  root: {
    title: 'Booting up systems for Lossless Collaboration',
    description:
      'A working hub for Reach University × The Lossless Group — presentation iterations for the current fundraise, and the systems we are booting up next.',
  } satisfies SeoEntry,
  brandKit: {
    title: 'Brand Kit',
    description:
      'Internal reference for the Reach brand tokens — colors, fonts, and the three-mode (light / dark / vibrant) contract.',
  } satisfies SeoEntry,
  designSystem: {
    title: 'Design System',
    description:
      'Component catalog for contributors and AI assistants working on the Reach × Lossless hub.',
  } satisfies SeoEntry,
  changelogIndex: {
    title: 'Changelog',
    description:
      'Build notes from the Reach × Lossless hub. What shipped, why it matters, what it enables next. Newest first.',
  } satisfies SeoEntry,
};

/* ──────────────────────────────────────────────────────────────────────
   Helpers
   ────────────────────────────────────────────────────────────────────── */

export function getScrollDeckSeo(href: string): SeoEntry | undefined {
  return SCROLL_DECK_SEO[href.replace(/\/$/, '')];
}

/** Compose the final <title> by appending the suffix. */
export function buildPageTitle(title: string): string {
  if (!title) return TITLE_SUFFIX;
  if (title === TITLE_SUFFIX) return title;
  return `${title} — ${TITLE_SUFFIX}`;
}

/** Truncate a string with a trailing ellipsis if it exceeds the limit. */
export function truncate(s: string, limit: number): string {
  if (s.length <= limit) return s;
  return s.slice(0, limit - 1).trim() + '…';
}
