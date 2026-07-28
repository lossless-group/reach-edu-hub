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
  /* ── Pitch-generation strategy decks (2026-07-28) ────────────────────────
     Built from the audited PITCH narratives (context-v/narratives/strategies/
     <dir>/pitch.md), with verified hex-code citations from the per-client
     registry (context-v/narratives/citations/registry.csv). Deck slugs now
     match the reach-edu CORPUS strategy slugs. The June 2026 README-based
     drafts are archived at src/layouts/sections/_archive/. */
  {
    // Narrative: context-v/narratives/strategies/upward-mobility/pitch.md
    slug: "upward-mobility",
    title: "Upward Mobility: The Mobility Engine",
    lede: "America still has a mobility engine — the degree. What broke is the on-ramp. The Apprenticeship Degree rebuilds it: climb while working, without borrowing, without leaving — and the biggest new pools in philanthropy are chartered for exactly this outcome.",
    thumb: "/reach-favicon.png",
    lastUpdated: "2026-07-28",
    status: "draft",
    variants: [
      {
        slug: "um-p1",
        label: "Pitch · v1",
        lede: "Funder pitch built from the verified pitch narrative — Arlie's story, the KPI wall, the evidence stack, the widened ladder, and the catalytic $25M ask.",
        status: "draft",
        lastUpdated: "2026-07-28",
      },
    ],
  },
  {
    // Narrative: context-v/narratives/strategies/workforce-development/pitch.md
    slug: "workforce-development",
    title: "Workforce Development: Stop Training and Praying",
    lede: "The system trains and prays; the evidence says exactly what works. The Apprenticeship Degree is the only model that stacks every proven design feature — while the 2026 corporate wave funds everything around the degree except the degree.",
    thumb: "/reach-favicon.png",
    lastUpdated: "2026-07-28",
    status: "draft",
    variants: [
      {
        slug: "wd-p1",
        label: "Pitch · v1",
        lede: "Funder pitch from the verified narrative — the diagnosis, the Brookings evidence turn, the follow-the-money wall, the federal moment, and the campaign ask.",
        status: "draft",
        lastUpdated: "2026-07-28",
      },
    ],
  },
  {
    // Narrative: context-v/narratives/strategies/rural-income/pitch.md
    // (corpus slug rural-income-boosts; June draft archived)
    slug: "rural-income-boosts",
    title: "Rural Income Boosts: The Raise That Stays",
    lede: "Rural America's bind is a loop — shortages, low incomes, brain drain. The Apprenticeship Degree breaks it at the hinge of income, in place: Arkansas proved it with a ~2.4 effect size, and Walton just aimed its decade at the same Delta map.",
    thumb: "/reach-favicon.png",
    lastUpdated: "2026-07-28",
    status: "draft",
    variants: [
      {
        slug: "rib-p1",
        label: "Pitch · v1",
        lede: "Place-based funder pitch — the loop, Arlie in full, the Arkansas proof, the rural money map, and the Delta co-funding moment.",
        status: "draft",
        lastUpdated: "2026-07-28",
      },
    ],
  },
  {
    // Narrative: context-v/narratives/strategies/literacy-numeracy/pitch.md
    // (corpus slug adult-literacy-numeracy; June draft archived)
    slug: "adult-literacy-numeracy",
    title: "Foundational Capabilities, Measured Improvements",
    lede: "The labor market pays for the skill, not the diploma — and 28% of U.S. adults now read at Level 1 or below. Weave the skills into the work, sized for interstitial moments, measured by audio AI — the first university delivering measured improvements in the foundational capabilities the labor market pays for.",
    thumb: "/reach-favicon.png",
    lastUpdated: "2026-07-28",
    status: "draft",
    variants: [
      {
        slug: "aln-p1",
        label: "Pitch · v1",
        lede: "Grant-sized funder pitch — the skills premium, the decline, diversion-not-development, the delivery recipe, and the two-generation dividend.",
        status: "draft",
        lastUpdated: "2026-07-28",
      },
    ],
  },
  {
    // Narrative: context-v/narratives/strategies/frontier-job-demand/pitch.md
    slug: "frontier-job-demand",
    title: "Frontier Job Demand: The Job Is the Curriculum",
    lede: "Course catalogs are lagging indicators. Five frontier bets — advanced manufacturing, drones, applied AI, data center operations, and remote & distributed business administration — where demand, employer pull, and apprenticeship fit all score high.",
    thumb: "/reach-favicon.png",
    lastUpdated: "2026-07-28",
    status: "draft",
    variants: [
      {
        slug: "fjd-p1",
        label: "Pitch · v1",
        lede: "Employer/funder pitch from the verified narrative — every figure checked against primary sources; the corporate funding wave that buys everything except the degree.",
        status: "draft",
        lastUpdated: "2026-07-28",
      },
    ],
  },
  {
    // Narrative: context-v/narratives/strategies/agentic-product-lab/pitch.md
    // (corpus slug ncad-forge; June draft archived)
    slug: "ncad-forge",
    title: "NCAD Forge: Charter the Lab",
    lede: "The Apprenticeship Degree runs on a technology stack nobody built — and the people who understand it can now prototype it themselves. Charter the shared lab: a setup desk and coach up front, domain experts prototyping, engineers hardening, the movement keeping the IP.",
    thumb: "/reach-favicon.png",
    lastUpdated: "2026-07-28",
    status: "draft",
    variants: [
      {
        slug: "nf-p1",
        label: "Pitch · v1",
        lede: "Infrastructure pitch — the stack gaps, the vibe-coding shift, the five-count case for domain-expert builders, and the AI-in-education funding wave.",
        status: "draft",
        lastUpdated: "2026-07-28",
      },
    ],
  },
  {
    // Narrative: context-v/narratives/strategies/agent-workflow-maxxing/pitch.md
    slug: "agent-workflow-maxxing",
    title: "Agent Workflow Maxxing",
    lede: "Internal operating doctrine: $19M to raise, dozens of funders, an August deadline, a team of three. Agents research, draft, and watch; humans approve and act — covering the opportunity windows a small team can't reach manually.",
    thumb: "/reach-favicon.png",
    lastUpdated: "2026-07-28",
    status: "draft",
    variants: [
      {
        slug: "awm-p1",
        label: "Pitch · v1",
        lede: "Internal adoption pitch — the deadline wall, the five fronts, the guardrails, and the greenlight ask.",
        status: "draft",
        lastUpdated: "2026-07-28",
      },
    ],
  },
  {
    // Narrative: context-v/narratives/strategies/reverse-engineer-funding/pitch.md
    slug: "reverse-engineer-funding",
    title: "Reverse Engineer Available Funding",
    lede: "Funding is a power law: 0.1% of grantmakers supply 40% of grant dollars, and a $124T wealth transfer is underway. Study the whales, learn their pattern, size every ask to the largest amount that fits — the campaign's own anchors are the receipts.",
    thumb: "/reach-favicon.png",
    lastUpdated: "2026-07-28",
    status: "draft",
    variants: [
      {
        slug: "ref-p1",
        label: "Pitch · v1",
        lede: "Internal doctrine pitch — the verified shape of the money, the four-step method, the whale map, and the capacity × alignment ask.",
        status: "draft",
        lastUpdated: "2026-07-28",
      },
    ],
  },
];

/* Archived June 2026 drafts (slugs rural-income, literacy-numeracy,
   agentic-product-lab + old variants of the surviving slugs) were removed from
   the registry 2026-07-28; their section components live under
   src/layouts/sections/_archive/. */
export const ARCHIVED_STRATEGY_DECKS: Deck[] = [
  {
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
