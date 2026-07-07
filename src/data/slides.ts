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

  // Strategy deck: literacy-numeracy (variant ln-v1). Ten slots.
  "ln-v1": [
    { slot: "01", title: "Improving Literacy & Numeracy in Working Adults", slug: "cover" },
    { slot: "02", title: "The Quiet Ceiling", slug: "quiet-ceiling" },
    { slot: "03", title: "The Skills Are Priced", slug: "skills-priced" },
    { slot: "04", title: "Who's Below the Line", slug: "below-the-line" },
    { slot: "05", title: "Credential ≠ Capability", slug: "credential-capability" },
    { slot: "06", title: "The Pedagogy Is Ready", slug: "pedagogy-ready" },
    { slot: "07", title: "Embed It in the Degree", slug: "embed" },
    { slot: "08", title: "Assure the Gain", slug: "assure-gain" },
    { slot: "09", title: "The Payoff", slug: "payoff" },
    { slot: "10", title: "Supporters & The Ask", slug: "ask" },
  ],

  // Strategy deck: agentic-product-lab "NCAD Forge" (variant forge-v1). Ten slots.
  "forge-v1": [
    { slot: "01", title: "NCAD Forge", slug: "cover" },
    { slot: "02", title: "A Different Stack", slug: "different-stack" },
    { slot: "03", title: "The Gap Today", slug: "the-gap" },
    { slot: "04", title: "Who Builds Has Changed", slug: "who-builds" },
    { slot: "05", title: "Engineers Still Matter", slug: "engineers" },
    { slot: "06", title: "The Right Builders", slug: "right-builders" },
    { slot: "07", title: "The Lab", slug: "the-lab" },
    { slot: "08", title: "How It Works", slug: "how-it-works" },
    { slot: "09", title: "First Builds", slug: "first-builds" },
    { slot: "10", title: "The Ask", slug: "ask" },
  ],

  // Strategy deck: agent-workflow-maxxing (variant awm-v1). Eleven slots.
  "awm-v1": [
    { slot: "01", title: "Agent Workflow Maxxing", slug: "cover" },
    { slot: "02", title: "The Bottleneck", slug: "bottleneck" },
    { slot: "03", title: "The Shift", slug: "shift" },
    { slot: "04", title: "More Conversations at Once", slug: "abm" },
    { slot: "05", title: "Travel", slug: "travel" },
    { slot: "06", title: "Events & Conferences", slug: "events" },
    { slot: "07", title: "Grants", slug: "grants" },
    { slot: "08", title: "Social Presence", slug: "social" },
    { slot: "09", title: "Best Practices", slug: "best-practices" },
    { slot: "10", title: "The Tooling Map", slug: "tooling" },
    { slot: "11", title: "The Payoff", slug: "payoff" },
  ],

  // Strategy deck: reverse-engineer-funding (variant ref-v1). Nine slots.
  "ref-v1": [
    { slot: "01", title: "Reverse Engineer Available Funding", slug: "cover" },
    { slot: "02", title: "Funding Follows a Power Law", slug: "power-law" },
    { slot: "03", title: "Two Concentrated Pools", slug: "two-pools" },
    { slot: "04", title: "Why New Money", slug: "new-money" },
    { slot: "05", title: "The Method", slug: "method" },
    { slot: "06", title: "Pattern Recognition", slug: "pattern" },
    { slot: "07", title: "Size to the Sweet Spot", slug: "sweet-spot" },
    { slot: "08", title: "Prioritize by Capacity × Alignment", slug: "prioritize" },
    { slot: "09", title: "The Engine", slug: "engine" },
  ],

  // Strategy deck: frontier-job-demand (variant fjd-v1). Nine slots.
  "fjd-v1": [
    { slot: "01", title: "Opinionated Program Design: Frontier Job Demand", slug: "cover" },
    { slot: "02", title: "Design Backward from the Job", slug: "thesis" },
    { slot: "03", title: "Why Apprenticeship Fits Frontier", slug: "fit" },
    { slot: "04", title: "Advanced Manufacturing Operations", slug: "manufacturing" },
    { slot: "05", title: "Drone Sciences", slug: "drones" },
    { slot: "06", title: "AI in Business Operations", slug: "ai-ops" },
    { slot: "07", title: "The Design Principle", slug: "design-principle" },
    { slot: "08", title: "What to Build First", slug: "build-first" },
    { slot: "09", title: "Opinion Is the Product", slug: "close" },
  ],

  // Strategy deck: workforce-development (variant wd-v1). Ten slots.
  "wd-v1": [
    { slot: "01", title: "Workforce Development: The System Is Broken. The Model Is Here.", slug: "cover" },
    { slot: "02", title: "The Broken Status Quo", slug: "broken-system" },
    { slot: "03", title: "Automation Pressure", slug: "automation-pressure" },
    { slot: "04", title: "The Evidence", slug: "evidence" },
    { slot: "05", title: "The Active Ingredient", slug: "active-ingredient" },
    { slot: "06", title: "The Degree Stack", slug: "degree-stack" },
    { slot: "07", title: "The Federal Moment", slug: "federal-moment" },
    { slot: "08", title: "The Equity Case", slug: "equity-case" },
    { slot: "09", title: "Funders & the Philanthropic Landscape", slug: "funders" },
    { slot: "10", title: "Scale & The Ask", slug: "ask" },
  ],
};
