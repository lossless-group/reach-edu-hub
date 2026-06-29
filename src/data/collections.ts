/**
 * Collection registry — the NEW menu layer above single-deck convergence.
 *
 * A collection is a curated, ordered set of PEER decks plus a menu surface.
 * It does NOT rename decks or appear in deck URLs — it merely REFERENCES decks
 * (defined once in decks.ts) by slug and imposes order + framing. Deck routes
 * (`/scroll/{deck}/{variant}/`) are untouched.
 *
 * Concept + decisions: context-v/explorations/
 *   Deck-Collections-A-Menu-Layer-Above-Single-Deck-Convergence.md
 *
 * reach-edu has three collections, each mounted at its own top-level menu route:
 *   /stories       → the "story" deck(s)
 *   /automations   → the "automation" deck(s)
 *   /strategies    → the new per-narrative "strategy" decks (the critical path)
 */
import { DECKS, type Deck } from "./decks";

export interface Collection {
  /** URL slug — the menu route is mounted at /{slug}. */
  slug: string;
  /** Menu title. */
  title: string;
  /** One-line framing shown above the deck cards. */
  lede: string;
  /** Reader-facing singular label for a member deck, e.g. "Strategy". */
  itemLabel: string;
  /** Ordered deck slugs — references into DECKS (decks.ts). Unknown slugs are
   *  skipped at resolve time, so a collection can list a deck that is still
   *  only a drafted narrative (no deck built yet). */
  deckSlugs: string[];
}

export const COLLECTIONS: Collection[] = [
  {
    slug: "stories",
    title: "Stories",
    lede: "The Reach narrative, told for funders and partners — the apprenticeship-degree story and its variants.",
    itemLabel: "Story",
    deckSlugs: ["story"],
  },
  {
    slug: "automations",
    title: "Automations",
    lede: "The Lossless side of the work — the systems we boot up for Reach, deck by deck.",
    itemLabel: "Automation",
    deckSlugs: ["automation"],
  },
  {
    slug: "strategies",
    title: "Strategies",
    lede: "One deck per strategic narrative. Each starts as an LLM-assisted narrative in context-v/narratives/strategies/, then becomes a deck.",
    itemLabel: "Strategy",
    // Strategy decks (built 2026-06-29). Narratives under
    // context-v/narratives/strategies/<deck>/README.md
    deckSlugs: ["rural-income", "literacy-numeracy", "agentic-product-lab"],
  },
];

export function getCollection(slug: string): Collection | undefined {
  return COLLECTIONS.find((c) => c.slug === slug);
}

/** A deck resolved for menu display: the deck record + its canonical entry URL
 *  (first/default variant). */
export interface CollectionDeck extends Deck {
  /** Deep link into the deck's default variant scroll page. */
  href: string;
}

/** Resolve a collection's deckSlugs against DECKS, in listed order. Decks that
 *  don't exist yet are skipped (so a drafted-but-unbuilt strategy is a no-op,
 *  not a crash). */
export function getCollectionDecks(slug: string): CollectionDeck[] {
  const collection = getCollection(slug);
  if (!collection) return [];
  const out: CollectionDeck[] = [];
  for (const deckSlug of collection.deckSlugs) {
    const deck = DECKS.find((d) => d.slug === deckSlug);
    if (!deck) continue; // drafted narrative without a built deck — skip
    const defaultVariant = deck.variants[0];
    if (!defaultVariant) continue;
    out.push({ ...deck, href: `/scroll/${deck.slug}/${defaultVariant.slug}` });
  }
  return out;
}
