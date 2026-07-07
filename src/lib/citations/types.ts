/**
 * Citation System Types
 *
 * Ported from astro-knots/sites/dark-matter/src/lib/citations/types.ts
 * Hex-code based citation system that converts to sequential integers at render time.
 */

export interface CitationReference {
  /** 6-character alphanumeric identifier (e.g., "br2018") */
  hexCode: string;
  /** Sequential index assigned at render time (e.g., 1, 2, 3) */
  index?: number;
  /** Title of the source article/document */
  title: string;
  /** Full URL to the source */
  url: string;
  /** ISO date string when the source was published */
  publishedDate?: string;
  /** ISO date string when the source was last updated */
  updatedDate?: string;
  /** When the citation was captured/accessed */
  accessDate?: string;
  /** Publication name or domain (e.g., "Brookings", "DOL") */
  source?: string;
}

export interface IndexedCitation extends CitationReference {
  index: number;
}

export interface CitableData<T = unknown> {
  data: T;
  citation?: CitationReference;
}

export function buildCitationIndex(
  citations: (CitationReference | undefined)[]
): Map<string, IndexedCitation> {
  const indexMap = new Map<string, IndexedCitation>();

  citations.forEach((citation) => {
    if (citation && !indexMap.has(citation.hexCode)) {
      indexMap.set(citation.hexCode, {
        ...citation,
        index: indexMap.size + 1,
      });
    }
  });

  return indexMap;
}

export function getCitation(
  hexCode: string,
  indexMap: Map<string, IndexedCitation>
): IndexedCitation | undefined {
  return indexMap.get(hexCode);
}

export function citationsToArray(
  indexMap: Map<string, IndexedCitation>
): IndexedCitation[] {
  return [...indexMap.values()].sort((a, b) => a.index - b.index);
}
