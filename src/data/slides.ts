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

  // Strategy deck: rural-income (variant v1). Eleven slots.
  v1: [
    { slot: "01", title: "Rural Income Boosts through Apprenticeship Degrees", slug: "cover" },
    { slot: "02", title: "The Rural Bind", slug: "rural-bind" },
    { slot: "03", title: "The Hinge Is Income", slug: "income-hinge" },
    { slot: "04", title: "Start With a Job, End With a Better One", slug: "mechanism" },
    { slot: "05", title: "The Raise", slug: "the-raise" },
    { slot: "06", title: "Stays Local", slug: "stays-local" },
    { slot: "07", title: "Debt-Free Matters More Here", slug: "debt-free" },
    { slot: "08", title: "Beyond Teaching", slug: "beyond-teaching" },
    { slot: "09", title: "The Evidence", slug: "evidence" },
    { slot: "10", title: "Supporters & Funder Pipeline", slug: "funder-pipeline" },
    { slot: "11", title: "Scale & The Ask", slug: "ask" },
  ],
};
