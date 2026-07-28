/**
 * Deck-wide citation registry — agent-workflow-maxxing (variant awm-p1).
 * Canonical hex codes from context-v/narratives/citations/registry.csv;
 * [n] assigned by array order (first appearance across the deck).
 * Narrative: context-v/narratives/strategies/agent-workflow-maxxing/pitch.md
 */
import { buildCitationIndex, citationsToArray } from '@lib/citations/types';
import type { CitationReference } from '@lib/citations/types';

export const DEFS: CitationReference[] = [
  { hexCode: '57ce95', title: 'Reach Teachers College Growth Campaign Deck (June 2026)', url: '#', source: 'Joe E. Ross, President & CEO — internal campaign deck', publishedDate: '2026-06-01' },
  { hexCode: '1b000c', title: 'The 2026 People-First AI Fund ($50M, unrestricted, July 2026 deadline)', url: 'https://openaifoundation.org/en-US/news/2026-people-first-ai-fund', source: 'OpenAI Foundation' },
  { hexCode: '08f3c1', title: 'Humanity AI ($500M pool; $10M open call summer 2026)', url: 'https://www.mellon.org/news/humanity-ai-commits-500m-build-people-centered-future-ai', source: 'Mellon Foundation (ten-foundation pool)' },
  { hexCode: 'a25592', title: 'BlackRock Future Builders ($25M national RFP via JFF)', url: 'https://www.blackrock.com/corporate/newsroom/press-releases/article/corporate-one/press-releases/blackrock-launches-philanthropic-skilled-trades-initiative', source: 'The BlackRock Foundation' },
  { hexCode: 'd2832d', title: 'Digital Promise $8M AI tutoring RFP (Gates-backed, opened May 2026)', url: 'https://www.edtechinnovationhub.com/news/digital-promise-program-opens-8-million-ai-tutoring-grant-backed-by-gates-foundation', source: 'EdTech Innovation Hub', publishedDate: '2026-06-04' },
  { hexCode: '90ad13', title: 'DGLF record one-day adult-literacy round (~$16M, May 2026)', url: 'https://www.businesswire.com/news/home/20260508824264/en/Dollar-General-Literacy-Foundation-Celebrates-Another-One-Day-Grant-Milestone', source: 'BusinessWire' },
  { hexCode: 'ef2072', title: 'How to use AI for grant writing', url: 'https://www.grantassistant.ai/resources/articles/ai-grant-writing', source: 'Grant Assistant' },
  { hexCode: '91f051', title: 'Best AI Tools for Grant Writing (pricing/positioning)', url: 'https://www.instrumentl.com/blog/best-ai-for-grant-writing', source: 'Instrumentl' },
  { hexCode: '97bdd0', title: 'Best AI Sales Agent Software 2026 (autonomous SDR vs enrichment vs CRM agents)', url: 'https://tribble.ai/blog/best-ai-sales-agent-software-2026/', source: 'Tribble' },
  { hexCode: '1ffec6', title: '13 Best AI Sales Agent Tools for B2B Teams (case-study claims)', url: 'https://www.11x.ai/guides/ai-sales-agent-tools-b2b-sales-teams', source: '11x' },
  { hexCode: 'ccb282', title: 'Best AI Tool for Event Planning in 2026', url: 'https://www.lensmor.com/blog/ai-tool-for-event-planning', source: 'Lensmor' },
  { hexCode: '7fb84f', title: 'Meeting Prep Agent', url: 'https://www.outreach.ai/ai-agents/meeting-prep-agent', source: 'Outreach' },
  { hexCode: '70a304', title: 'Trip Planner AI', url: 'https://tripplanner.ai/', source: 'Trip Planner AI' },
  { hexCode: '8a2652', title: 'New ways to plan trips with agentic booking in Search', url: 'https://blog.google/products-and-platforms/products/search/agentic-plans-booking-travel-canvas-ai-mode/', source: 'Google' },
  { hexCode: '9cc232', title: 'Avoiding automated engagement penalties', url: 'https://www.linkedin.com/top-content/artificial-intelligence/navigating-ai-risks/avoiding-automated-engagement-penalties/', source: 'LinkedIn' },
  { hexCode: '22d589', title: 'Will AI Replace Social Media Managers? 2026 Reality Check (89.7% use AI daily / 5.4% fully automate)', url: 'https://improvado.io/blog/will-ai-replace-social-media-managers', source: 'Improvado' },
];

export const CITE = buildCitationIndex(DEFS);
export const SOURCES = citationsToArray(CITE);
