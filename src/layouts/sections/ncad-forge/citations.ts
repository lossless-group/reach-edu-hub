/**
 * Deck-wide citation registry — ncad-forge (variant nf-p1).
 * Canonical hex codes from context-v/narratives/citations/registry.csv;
 * [n] assigned by array order (first appearance across the deck).
 * Narrative: context-v/narratives/strategies/agentic-product-lab/pitch.md
 */
import { buildCitationIndex, citationsToArray } from '@lib/citations/types';
import type { CitationReference } from '@lib/citations/types';

export const DEFS: CitationReference[] = [
  { hexCode: '4847ba', title: 'Understanding Work-Based Learning', url: 'https://sr.ithaka.org/blog/understanding-work-based-learning/', source: 'Ithaka S+R' },
  { hexCode: 'b71a46', title: 'The Vibe Coding Bakeoff (Bolt / Lovable / Replit / v0 for non-engineers)', url: 'https://medium.com/@usabilitycounts/the-vibe-coding-bakeoff-for-generative-ai-prototyping-tools-bolt-lovable-replit-and-v0-876bfc13fd2f', source: 'Medium / usabilitycounts' },
  { hexCode: '8cb194', title: 'An Opinionated Guide on the Best AI Coding Tools in 2025', url: 'https://creatoreconomy.so/p/opinionated-guide-on-the-best-ai-coding-prototyping-tools-in-2025', source: 'Creator Economy' },
  { hexCode: 'e76b45', title: 'Best Vibe Coding Tools 2026 (Cursor, Claude Code, Copilot, Devin, …)', url: 'https://www.taskade.com/blog/best-vibe-coding-tools', source: 'Taskade' },
  { hexCode: '3675cf', title: 'Low-Code, High Impact: Why 2026 Belongs to Citizen Developers', url: 'https://aufaittechnologies.com/blog/citizen-and-professional-developers-low-code-trend/', source: 'Aufait Technologies' },
  { hexCode: '97559d', title: 'NCAD — National Center for the Apprenticeship Degree', url: 'https://www.ncad.org/', source: 'NCAD' },
  { hexCode: 'a42a6b', title: 'NCAD Executive Overview (functions incl. employer engagement)', url: 'https://oadn.org/wp-content/uploads/2024/10/NCAD-Executive-Overview.pdf', source: 'OADN (2024)' },
  { hexCode: 'ef66be', title: 'NCAD membership / Apprenticeship Degree Network', url: 'https://www.ncad.org/membership-community', source: 'NCAD' },
  { hexCode: '4aedc1', title: 'NCAD: 3 Million Apprenticeship Degree Completions by 2035', url: 'https://reach.edu/blog/ncad-growing-list-of-partners-take-foundational-strides-towards-achieving-3-million-apprenticeship-degree-completions-by-2035', source: 'Reach University blog' },
  { hexCode: '57ce95', title: 'Reach Teachers College Growth Campaign Deck (June 2026)', url: '#', source: 'Joe E. Ross, President & CEO — internal campaign deck', publishedDate: '2026-06-01' },
  { hexCode: '36c77b', title: 'Work-Based Learning Glossary (competency- vs time-based RA; ~144 hrs related instruction)', url: 'https://www.jff.org/idea/work-based-learning-glossary/', source: 'Jobs for the Future' },
  { hexCode: '2d173e', title: 'Microsoft Elevate ($4B; 20M AI credentials)', url: 'https://blogs.microsoft.com/on-the-issues/2025/07/09/elevate/', source: 'Microsoft', publishedDate: '2025-07-09' },
  { hexCode: '611b39', title: 'Google commits $1 billion for AI training at US universities', url: 'https://www.reuters.com/world/us/google-commits-1-billion-ai-training-us-universities-2025-08-06/', source: 'Reuters', publishedDate: '2025-08-06' },
  { hexCode: '08f3c1', title: 'Humanity AI Commits $500M to Build a People-Centered Future of AI', url: 'https://www.mellon.org/news/humanity-ai-commits-500m-build-people-centered-future-ai', source: 'Mellon Foundation (ten-foundation pool)' },
  { hexCode: '8c0ca0', title: 'AFT National Academy for AI Instruction ($23M; Microsoft, OpenAI, Anthropic)', url: 'https://news.microsoft.com/source/2025/07/08/aft-to-launch-national-academy-for-ai-instruction-with-microsoft-openai-anthropic-and-united-federation-of-teachers/', source: 'Microsoft Source', publishedDate: '2025-07-08' },
  { hexCode: 'd2832d', title: 'Digital Promise opens $8M AI tutoring RFP (Gates-backed)', url: 'https://www.edtechinnovationhub.com/news/digital-promise-program-opens-8-million-ai-tutoring-grant-backed-by-gates-foundation', source: 'EdTech Innovation Hub', publishedDate: '2026-06-04' },
  { hexCode: '1b000c', title: 'The 2026 People-First AI Fund ($50M, unrestricted)', url: 'https://openaifoundation.org/en-US/news/2026-people-first-ai-fund', source: 'OpenAI Foundation' },
  { hexCode: '5f42a8', title: 'NextLadder Ventures ($1B; Anthropic inaugural AI partner)', url: 'https://www.gatesfoundation.org/ideas/media-center/press-releases/2025/07/nextladder-ventures-economic-mobility', source: 'Gates Foundation', publishedDate: '2025-07-17' },
];

export const CITE = buildCitationIndex(DEFS);
export const SOURCES = citationsToArray(CITE);
