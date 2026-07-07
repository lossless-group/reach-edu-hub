/**
 * Deck registry — source-of-truth for what shows up in the /scroll/ and /play/
 * gallery indexes and variant choosers, AND the contract @dididecks/shell reads
 * to enumerate /toc/[deckSlug]/[variantSlug] and /play paths.
 *
 * Two-axis variant model (mirrors chroma-decks):
 *   - DECK (slug)     — the conceptual artifact, e.g. "story". Lives at /scroll/{slug}/.
 *   - VARIANT (slug)  — a whole-deck composition, e.g. "baseline", "editorial".
 *                       Lives at /scroll/{slug}/{variant}/.
 *
 * IMPORTANT: variant slugs must be UNIQUE across all decks in this client.
 * The shell's slot registry (slides.ts SLOTS) is keyed by variant slug alone,
 * so two decks sharing a variant slug would collide on their slot lists. That
 * is why automation's single variant is "pipeline", not "baseline".
 *
 * Adding a variant:
 *   1) Add a VariantRef to the deck's `variants` array here.
 *   2) Add its slot list to src/data/slides.ts under the variant slug.
 *   3) Create src/pages/scroll/{slug}/{variant}/index.astro.
 *   4) (Play-UI, later) create src/components/slides/{variant}/{slot}-{slug}.astro.
 */

export type DeckStatus = "stub" | "draft" | "presentable" | "shipped";

export interface VariantRef {
  /** URL slug — appears in /scroll/{deck}/{variant}/. UNIQUE across all decks. */
  slug: string;
  /** Human-readable label for choosers. */
  label: string;
  /** One-line description. */
  lede: string;
  status: DeckStatus;
  /** ISO date. */
  lastUpdated: string;
}

export interface Deck {
  slug: string;
  title: string;
  lede: string;
  thumb: string; // relative to public/
  lastUpdated: string; // ISO date — most recent variant update
  status: DeckStatus; // rolls up from variants
  variants: VariantRef[]; // ordered; first listed is the canonical default
  /** True when a one-pager HTML+PDF exists at public/one-pagers/{slug}/. */
  onePager?: boolean;
}

export const DECKS: Deck[] = [
  {
    slug: "story",
    title: "The Reach Story",
    lede: "Reach University's apprenticeship-degree narrative — nine sections distilled from the funder corpus: the model, the equity mission, the method, affordability, faculty, teacher pipeline, partnerships, scale, and the healthcare expansion.",
    thumb: "/reach-favicon.png",
    lastUpdated: "2026-05-04",
    status: "presentable",
    variants: [
      {
        slug: "baseline",
        label: "v1 · Baseline",
        lede: "The original nine-section treatment — clean, confident, mode-aware.",
        status: "presentable",
        lastUpdated: "2026-05-04",
      },
      {
        slug: "editorial",
        label: "v2 · Editorial",
        lede: "The same nine sections in an editorial / serif-driven treatment.",
        status: "presentable",
        lastUpdated: "2026-05-04",
      },
    ],
  },
  {
    slug: "automation",
    title: "Pipeline Building & Automation",
    lede: "The Lossless side of the work — what we'll boot up for Reach next: boost-and-relief for the fundraise team, then widening the aperture to new donors, new grants, and a map of the philanthropic landscape.",
    thumb: "/reach-favicon.png",
    lastUpdated: "2026-05-04",
    status: "draft",
    variants: [
      {
        slug: "pipeline",
        label: "v1 · Pipeline",
        lede: "Eleven-slide outline of the pipeline-building and automation program.",
        status: "draft",
        lastUpdated: "2026-05-04",
      },
    ],
  },
  {
    // First "strategy" deck (strategies collection). Narrative source:
    // context-v/narratives/strategies/rural-income/README.md
    slug: "rural-income",
    title: "Rural Income Boosts through Apprenticeship Degrees",
    lede: "The Apprenticeship Degree as a rural economic-development engine: start with a paid job, end with a better one — debt-free, in place — so income rises and stays local.",
    thumb: "/reach-favicon.png",
    lastUpdated: "2026-06-29",
    status: "draft",
    onePager: true,
    variants: [
      {
        // NOTE: variant slugs are GLOBALLY unique across this client (the shell
        // keys SLOTS by variant alone). "v1" is free today; when more strategy
        // decks land we either prefix or fix the shell to scope SLOTS by deck.
        slug: "v1",
        label: "v1 · Draft",
        lede: "First Scroll-UI cut from the narrative; figures flagged for verification. Built on the token-driven deck-primitives system.",
        status: "draft",
        lastUpdated: "2026-06-29",
      },
    ],
  },
  {
    // Second "strategy" deck. Narrative source:
    // context-v/narratives/strategies/literacy-numeracy/README.md
    slug: "literacy-numeracy",
    title: "Improving Literacy & Numeracy in Working Adults",
    lede: "Fold validated foundational-skills pedagogy (science of reading + contextualized numeracy) into the Apprenticeship Degree, and measure the gain — so the degree durably lifts the two skills most tightly linked to wages and promotions.",
    thumb: "/reach-favicon.png",
    lastUpdated: "2026-06-29",
    status: "draft",
    onePager: true,
    variants: [
      {
        // "v1" is taken by rural-income (the shell keys SLOTS by variant slug
        // alone — see the shell limitation note); use a deck-scoped slug.
        slug: "ln-v1",
        label: "v1 · Draft",
        lede: "First Scroll-UI cut from the narrative; figures flagged for verification. Token-driven via deck-primitives.",
        status: "draft",
        lastUpdated: "2026-06-29",
      },
    ],
  },
  {
    // Third "strategy" deck — an operating proposal (charter a shared lab).
    // Narrative: context-v/narratives/strategies/agentic-product-lab/README.md
    slug: "agentic-product-lab",
    title: "NCAD Forge",
    lede: "An agentic product lab for the apprenticeship stack: domain experts across NCAD's member network use vibe-coding tools to prototype the software the Apprenticeship Degree needs — with engineers hardening what proves out.",
    thumb: "/reach-favicon.png",
    lastUpdated: "2026-06-29",
    status: "draft",
    onePager: true,
    variants: [
      {
        // "v1"/"ln-v1" taken (shell keys SLOTS by variant slug alone).
        slug: "forge-v1",
        label: "v1 · Draft",
        lede: "First Scroll-UI cut from the narrative; fast-moving facts flagged for verification. Token-driven via deck-primitives.",
        status: "draft",
        lastUpdated: "2026-06-29",
      },
    ],
  },
  {
    // Fourth "strategy" deck — operating doctrine for a small team.
    // Narrative: context-v/narratives/strategies/agent-workflow-maxxing/README.md
    slug: "agent-workflow-maxxing",
    title: "Agent Workflow Maxxing",
    lede: "Dedicated agents and agent workflows let a small team operate like a much bigger one — reducing overwhelm on the work you already do, and enabling work that wasn't possible at your size, across ABM, travel, events, grants, and social.",
    thumb: "/reach-favicon.png",
    lastUpdated: "2026-06-29",
    status: "draft",
    onePager: true,
    variants: [
      {
        // Globally-unique variant slug (shell keys SLOTS by variant alone).
        slug: "awm-v1",
        label: "v1 · Draft",
        lede: "First Scroll-UI cut from the narrative; vendor/anecdote stats flagged for verification. Token-driven via deck-primitives.",
        status: "draft",
        lastUpdated: "2026-06-29",
      },
    ],
  },
  {
    // Fifth "strategy" deck — grant-prospecting doctrine.
    // Narrative: context-v/narratives/strategies/reverse-engineer-funding/README.md
    slug: "reverse-engineer-funding",
    title: "Reverse Engineer Available Funding",
    lede: "Grant funding follows a power law — a few mega-foundations and a wave of new-money UHNWIs hold most discretionary dollars. Study the biggest aligned funders, learn their strategy, pattern-match, and size the ask to their sweet spot.",
    thumb: "/reach-favicon.png",
    lastUpdated: "2026-06-29",
    status: "draft",
    onePager: true,
    variants: [
      {
        // Globally-unique variant slug (shell keys SLOTS by variant alone).
        slug: "ref-v1",
        label: "v1 · Draft",
        lede: "First Scroll-UI cut from the narrative; wealth/philanthropy figures flagged for verification. Token-driven via deck-primitives.",
        status: "draft",
        lastUpdated: "2026-06-29",
      },
    ],
  },
  {
    // Seventh "strategy" deck — workforce development.
    // Narrative: context-v/narratives/strategies/workforce-development/README.md
    slug: "workforce-development",
    title: "Workforce Development: The System Is Broken. The Model Is Here.",
    lede: "The U.S. workforce system was built for employer demand, not worker mobility — producing credentials without ladders and a 'train and pray' model that leaves millions sidelined. Brookings/Child Trends research names the active ingredient: relationship-based work-based learning predicts job quality a decade later. The Apprenticeship Degree implements every evidence-based design feature at once, at the exact moment federal policy aligned behind scaling it.",
    thumb: "/reach-favicon.png",
    lastUpdated: "2026-07-06",
    status: "draft",
    onePager: true,
    variants: [
      {
        // Globally-unique variant slug (shell keys SLOTS by variant alone).
        slug: "wd-v1",
        label: "v1 · Draft",
        lede: "First Scroll-UI cut from the narrative; corpus-sourced figures flagged for verification. Token-driven via deck-primitives.",
        status: "draft",
        lastUpdated: "2026-07-06",
      },
    ],
  },
  {
    // Sixth "strategy" deck — program-design doctrine.
    // Narrative: context-v/narratives/strategies/frontier-job-demand/README.md
    slug: "frontier-job-demand",
    title: "Opinionated Program Design: Frontier Job Demand",
    lede: "Design apprenticeship-degree programs backward from where the jobs are going — three frontier fields with huge demand, employer pull, and work suited to a work-embedded degree: Advanced Manufacturing Operations, Drone Sciences, and AI in Business Operations.",
    thumb: "/reach-favicon.png",
    lastUpdated: "2026-06-29",
    status: "draft",
    onePager: true,
    variants: [
      {
        // Globally-unique variant slug (shell keys SLOTS by variant alone).
        slug: "fjd-v1",
        label: "v1 · Draft",
        lede: "First Scroll-UI cut from the narrative; industry/labor figures flagged for verification. Token-driven via deck-primitives.",
        status: "draft",
        lastUpdated: "2026-06-29",
      },
    ],
  },
];

export function getDeck(slug: string): Deck | undefined {
  return DECKS.find((d) => d.slug === slug);
}
