/**
 * Slot registry — maps each variant to its ordered slot list.
 *
 * Consumed by @dididecks/shell to render /toc/[deckSlug]/[variantSlug] and to
 * emit /play paths. Keyed by VARIANT SLUG (unique across all decks — see
 * decks.ts).
 *
 * Note on slot discovery: the shell ALSO scans `scrollPagesRoot` for inline
 * `<section data-slot data-variant>` tags. reach-edu-hub composes its scroll
 * pages from imported section components (src/layouts/sections/...), which the
 * scanner can't see through, so this hand-authored map is the authoritative
 * source for the TOC. The section components still carry data-slot/data-variant
 * attributes for the in-scroll SlideRankPill's IntersectionObserver.
 */

export interface SlotRef {
  slot: string;
  title: string;
  slug: string;
}

export type SlotsByVariant = Record<string, SlotRef[]>;

const STORY_SLOTS: SlotRef[] = [
  { slot: "01", title: "The Apprenticeship Degree", slug: "apprenticeship-degree" },
  { slot: "02", title: "Equity & Mobility Mission", slug: "equity-mission" },
  { slot: "03", title: "The Reach Method", slug: "reach-method" },
  { slot: "04", title: "Debt-Free Affordability", slug: "affordability" },
  { slot: "05", title: "Professors of Practice", slug: "faculty" },
  { slot: "06", title: "The Teacher Pipeline", slug: "teacher-pipeline" },
  { slot: "07", title: "Employer & District Partnerships", slug: "partnerships" },
  { slot: "08", title: "Scale & Traction", slug: "scale-traction" },
  { slot: "09", title: "Healthcare Expansion", slug: "healthcare" },
];

export const SLOTS: SlotsByVariant = {
  // Story · v1 baseline and v2 editorial share the same nine conceptual slots.
  baseline: STORY_SLOTS,
  editorial: STORY_SLOTS,

  // Automation · pipeline (eleven slides).
  pipeline: [
    { slot: "01", title: "First Things First", slug: "first-things-first" },
    { slot: "02", title: "Three Games, One Pipeline", slug: "three-games-one-pipeline" },
    { slot: "03", title: "Five Levers", slug: "five-levers" },
    { slot: "04", title: "Key Players", slug: "key-players" },
    { slot: "05", title: "Donor Personalization", slug: "donor-personalization" },
    { slot: "06", title: "Grant Pipeline", slug: "grant-pipeline" },
    { slot: "07", title: "Probable Stack", slug: "probable-stack" },
    { slot: "08", title: "Data Sources", slug: "data-sources" },
    { slot: "09", title: "New Identification", slug: "new-identification" },
    { slot: "10", title: "Geographic Clusters", slug: "geographic-clusters" },
    { slot: "11", title: "Theme Mapping", slug: "theme-mapping" },
  ],

  /* ── Pitch-generation strategy decks (2026-07-28) ──────────────────────
     Variant slugs are globally unique (shell keys SLOTS by variant alone).
     Built from context-v/narratives/strategies/<dir>/pitch.md. */

  // upward-mobility (um-p1). Twelve slots.
  "um-p1": [
    { slot: "01", title: "Upward Mobility: The Mobility Engine", slug: "cover" },
    { slot: "02", title: "Arlie", slug: "arlie" },
    { slot: "03", title: "The Problem, in Four Numbers", slug: "problem" },
    { slot: "04", title: "The Insight", slug: "insight" },
    { slot: "05", title: "The ABCs", slug: "abcs" },
    { slot: "06", title: "The KPI Wall", slug: "kpi-wall" },
    { slot: "07", title: "The Science Agrees", slug: "evidence-stack" },
    { slot: "08", title: "The Ladder Is Bigger Than Teaching", slug: "ladder" },
    { slot: "09", title: "The Moment", slug: "moment" },
    { slot: "10", title: "The Gap Is the Opportunity", slug: "gap" },
    { slot: "11", title: "Close", slug: "close" },
    { slot: "12", title: "Sources", slug: "sources" },
  ],

  // workforce-development (wd-p1). Ten slots.
  "wd-p1": [
    { slot: "01", title: "Stop Training and Praying", slug: "cover" },
    { slot: "02", title: "Train and Pray", slug: "train-and-pray" },
    { slot: "03", title: "The Cost of Praying", slug: "cost" },
    { slot: "04", title: "The Evidence Turn", slug: "evidence" },
    { slot: "05", title: "Proof, Not Pilot", slug: "kpi-wall" },
    { slot: "06", title: "Follow the Money", slug: "money" },
    { slot: "07", title: "The Federal Moment", slug: "federal" },
    { slot: "08", title: "What Your Gift Catalyzes", slug: "ask" },
    { slot: "09", title: "Close", slug: "close" },
    { slot: "10", title: "Sources", slug: "sources" },
  ],

  // rural-income-boosts (rib-p1). Eleven slots.
  "rib-p1": [
    { slot: "01", title: "The Raise That Stays", slug: "cover" },
    { slot: "02", title: "The Exit Problem", slug: "exit-problem" },
    { slot: "03", title: "The Map", slug: "map" },
    { slot: "04", title: "The Mechanism", slug: "mechanism" },
    { slot: "05", title: "Arkansas Already Proved It", slug: "arkansas" },
    { slot: "06", title: "One Life: Arlie", slug: "arlie" },
    { slot: "07", title: "The Rural Money Map", slug: "money-map" },
    { slot: "08", title: "Why the Delta, Why Now", slug: "delta" },
    { slot: "09", title: "What Your Gift Catalyzes", slug: "ask" },
    { slot: "10", title: "Close", slug: "close" },
    { slot: "11", title: "Sources", slug: "sources" },
  ],

  // adult-literacy-numeracy (aln-p1). Twelve slots.
  "aln-p1": [
    { slot: "01", title: "Foundational Capabilities, Measured Improvements", slug: "cover" },
    { slot: "02", title: "The Skill, Not the Diploma", slug: "hook" },
    { slot: "03", title: "Who's Below the Line", slug: "below-the-line" },
    { slot: "04", title: "The Turn", slug: "turn" },
    { slot: "05", title: "The Pedagogy Caught Up", slug: "pedagogy" },
    { slot: "06", title: "The Recipe", slug: "recipe" },
    { slot: "07", title: "The Vehicle's Numbers", slug: "vehicle" },
    { slot: "08", title: "The Funding Landscape", slug: "landscape" },
    { slot: "09", title: "What Your Gift Catalyzes", slug: "ask" },
    { slot: "10", title: "The Two-Generation Dividend", slug: "two-generation" },
    { slot: "11", title: "Close", slug: "close" },
    { slot: "12", title: "Sources", slug: "sources" },
  ],

  // frontier-job-demand (fjd-p1). Nine slots.
  "fjd-p1": [
    { slot: "01", title: "The Job Is the Curriculum", slug: "cover" },
    { slot: "02", title: "The Lagging Indicator", slug: "hook" },
    { slot: "03", title: "The Model Transfers", slug: "transfers" },
    { slot: "04", title: "Five Opinionated Bets", slug: "bets" },
    { slot: "05", title: "The Demand Wall", slug: "demand-wall" },
    { slot: "06", title: "The Money Already Voted", slug: "money" },
    { slot: "07", title: "What Your Gift Catalyzes", slug: "ask" },
    { slot: "08", title: "Close", slug: "close" },
    { slot: "09", title: "Sources", slug: "sources" },
  ],

  // ncad-forge (nf-p1). Ten slots.
  "nf-p1": [
    { slot: "01", title: "Charter the Forge", slug: "cover" },
    { slot: "02", title: "A Stack Nobody Built", slug: "hook" },
    { slot: "03", title: "Who Builds Just Changed", slug: "who-builds" },
    { slot: "04", title: "Five Counts for the Domain Expert", slug: "five-counts" },
    { slot: "05", title: "Why NCAD", slug: "why-ncad" },
    { slot: "06", title: "First Builds", slug: "first-builds" },
    { slot: "07", title: "The Funding Wave", slug: "wave" },
    { slot: "08", title: "What Your Gift Charters", slug: "charter" },
    { slot: "09", title: "Close", slug: "close" },
    { slot: "10", title: "Sources", slug: "sources" },
  ],

  // agent-workflow-maxxing (awm-p1). Nine slots.
  "awm-p1": [
    { slot: "01", title: "A Team of Three, a Big Surface", slug: "cover" },
    { slot: "02", title: "The Surface-Area Problem", slug: "hook" },
    { slot: "03", title: "The Two Effects", slug: "two-effects" },
    { slot: "04", title: "The Deadline Wall", slug: "windows" },
    { slot: "05", title: "The Five Fronts", slug: "five-fronts" },
    { slot: "06", title: "The Receipts", slug: "receipts" },
    { slot: "07", title: "The Ask", slug: "ask" },
    { slot: "08", title: "Close", slug: "close" },
    { slot: "09", title: "Sources", slug: "sources" },
  ],

  // reverse-engineer-funding (ref-p1). Ten slots.
  "ref-p1": [
    { slot: "01", title: "Fish Where the Whales Are", slug: "cover" },
    { slot: "02", title: "Funding Is a Power Law", slug: "hook" },
    { slot: "03", title: "The Shape of the Money", slug: "money-shape" },
    { slot: "04", title: "The Method", slug: "method" },
    { slot: "05", title: "The Receipts", slug: "receipts" },
    { slot: "06", title: "The Whale Map", slug: "whale-map" },
    { slot: "07", title: "The Engine", slug: "engine" },
    { slot: "08", title: "The Ask", slug: "ask" },
    { slot: "09", title: "Close", slug: "close" },
    { slot: "10", title: "Sources", slug: "sources" },
  ],
};
