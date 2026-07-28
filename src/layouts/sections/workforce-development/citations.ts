/**
 * Deck-wide citation registry — workforce-development (variant wd-p1).
 * Canonical hex codes from context-v/narratives/citations/registry.csv;
 * [n] assigned by array order (first appearance across the deck).
 * Narrative: context-v/narratives/strategies/workforce-development/pitch.md
 */
import { buildCitationIndex, citationsToArray } from '@lib/citations/types';
import type { CitationReference } from '@lib/citations/types';

export const DEFS: CitationReference[] = [
  { hexCode: 'b22ccf', title: 'The Future of Workforce Development: Why the System Must Be Built Around Workers, Not Employers', url: 'https://insightsc.com/blog/2025/11/29/the-future-of-workforce-development-why-the-next-era-must-be-built-around-workers-not-employers', source: 'InsightsC', publishedDate: '2025-12-23' },
  { hexCode: '2e54ee', title: "America's Talent Strategy: Preparing the Workforce for the Golden Age", url: 'https://www.dol.gov/sites/dolgov/files/OPA/newsreleases/2025/08/Americas-Talent-Strategy-Building-the-Workforce-for-the-Golden-Age.pdf', source: 'U.S. Department of Labor', publishedDate: '2025-08-25' },
  { hexCode: '57ce95', title: 'Reach Teachers College Growth Campaign Deck (June 2026)', url: '#', source: 'Joe E. Ross, President & CEO — internal campaign deck', publishedDate: '2026-06-01' },
  { hexCode: '496b0f', title: 'Seven economic facts about prime-age labor force participation', url: 'https://www.brookings.edu/articles/seven-economic-facts-about-prime-age-labor-force-participation', source: 'Hamilton Project / Brookings', publishedDate: '2025-07-01' },
  { hexCode: '272bb5', title: 'Work from Home and Disability Employment (NBER WP 32943)', url: 'https://www.nber.org/papers/w32943', source: 'Bloom, Dahl & Rooth — NBER' },
  { hexCode: '679c9b', title: 'Pathways to High-Quality Jobs for Young Adults', url: 'https://tacc.org/sites/default/files/documents/2018-11/brookings_child-trends_pathways-for-high-quality-jobs.pdf', source: 'Brookings Institution / Child Trends', publishedDate: '2018-11-29' },
  { hexCode: '16a15a', title: 'Earn-And-Learn Opportunities Can Benefit Workers and Employers', url: 'https://www.gao.gov/products/gao-25-107040', source: 'U.S. GAO (GAO-25-107040)' },
  { hexCode: '7d47c7', title: 'Setting the Stage for Scaling Apprenticeship Degrees', url: 'https://www.urban.org/sites/default/files/2026-05/Setting_the_Stage_for_Scaling_Apprenticeship_Degrees.pdf', source: 'Urban Institute', publishedDate: '2026-05-01' },
  { hexCode: '28ded4', title: 'Why Higher Ed Is Leaning Into Apprenticeships', url: 'https://www.insidehighered.com/news/deep-dives/2026/02/17/why-higher-ed-leaning-apprenticeships', source: 'Inside Higher Ed', publishedDate: '2026-02-17' },
  { hexCode: 'a2ceba', title: 'New Specialized Healthcare High Schools in the U.S. ($250M)', url: 'https://www.bloomberg.org/videos/new-specialized-healthcare-high-schools-in-the-u-s/', source: 'Bloomberg Philanthropies' },
  { hexCode: '65140c', title: 'National Skilled Trades Initiative ($90M; $570M cumulative CTE)', url: 'https://www.bloomberg.org/press/bloomberg-philanthropies-announces-first-of-its-kind-national-skilled-trades-initiative-to-accelerate-high-school-students-into-high-wage-in-demand-trade-careers/', source: 'Bloomberg Philanthropies' },
  { hexCode: 'e33e8d', title: "Lowe's Foundation Plans Expanded $250 Million Investment", url: 'https://www.prnewswire.com/news-releases/lowes-foundation-plans-expanded-250-million-investment-to-help-train-and-develop-250-000-tradespeople-over-next-decade-increasing-skilled-trades-workforce-commitment-five-fold-302735686.html', source: "Lowe's Foundation / PRNewswire", publishedDate: '2026-04-07' },
  { hexCode: 'a25592', title: 'BlackRock Launches $100M Skilled Trades Initiative', url: 'https://www.blackrock.com/corporate/newsroom/press-releases/article/corporate-one/press-releases/blackrock-launches-philanthropic-skilled-trades-initiative', source: 'The BlackRock Foundation' },
  { hexCode: 'e9c685', title: "America's Workforce Academy ($115M first year)", url: 'https://about.fb.com/news/2026/06/americas-workforce-academy-free-skilled-trade-training/', source: 'Meta', publishedDate: '2026-06-08' },
  { hexCode: 'b585ef', title: 'JFF Announces $20 Million Donation from MacKenzie Scott', url: 'https://www.jff.org/newsroom/press-releases/jobs-for-the-future-announces-20-million-donation-from-mackenzie-scott/', source: 'Jobs for the Future', publishedDate: '2023-11-08' },
  { hexCode: '7ec216', title: "MacKenzie Scott Donates $42 Million Gift to 10,000 Degrees", url: 'https://10000degrees.org/2025/10/08/mackenzie-scott-donates-42-million-gift-to-10000-degrees/', source: '10,000 Degrees', publishedDate: '2025-10-08' },
  { hexCode: '63bbab', title: 'Ascendium 2025 Education Philanthropy Report ($172M awarded)', url: 'https://www.ascendiumeducation.org/newsroom/all-news-releases/ascendium-releases-2025-education-philanthropy-report', source: 'Ascendium Education Group', publishedDate: '2026-04-09' },
  { hexCode: 'a26016', title: 'Funding roundup: record community-college gifts (HCC $17M, Maricopa $16M)', url: 'https://www.ccdaily.com/2026/06/funding-roundup-448/', source: 'Community College Daily', publishedDate: '2026-06-10' },
  { hexCode: '2af56e', title: 'JFF Announces New Grant from Walmart to Advance Skills-First Nationwide', url: 'https://www.jff.org/newsroom/press-releases/jff-announces-new-grant-walmart-advance-skills-first-nationwide/', source: 'Jobs for the Future', publishedDate: '2023-10-26' },
  { hexCode: 'f9c42b', title: 'Schultz Family Foundation Invests $3M+ in AI-Driven Career Navigation', url: 'https://schultzfamilyfoundation.org/schultz-family-foundation-invests-more-than-3-million-in-ai-driven-career-navigation-tools/', source: 'Schultz Family Foundation', publishedDate: '2025-04-07' },
  { hexCode: '6f1dc8', title: 'Community college apprenticeship sponsors: 30 (2016) → 200+ (2023)', url: 'https://apprenticeshipsforamerica.org/', source: 'Apprenticeships for America' },
];

export const CITE = buildCitationIndex(DEFS);
export const SOURCES = citationsToArray(CITE);
