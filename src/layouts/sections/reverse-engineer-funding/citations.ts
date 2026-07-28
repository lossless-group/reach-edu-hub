/**
 * Deck-wide citation registry — reverse-engineer-funding (variant ref-p1).
 * Canonical hex codes from context-v/narratives/citations/registry.csv;
 * [n] assigned by array order (first appearance across the deck).
 * Narrative: context-v/narratives/strategies/reverse-engineer-funding/pitch.md
 * (all figures verified against primary sources 2026-07-28).
 */
import { buildCitationIndex, citationsToArray } from '@lib/citations/types';
import type { CitationReference } from '@lib/citations/types';

export const DEFS: CitationReference[] = [
  { hexCode: '4c940e', title: 'Giving USA 2026: U.S. charitable giving rose to $617.20 billion in 2025', url: 'https://givingusa.org/giving-usa-charitable-giving-rose-to-617-20-billion-in-2025-surpassing-the-600-billion-mark-for-the-first-time/', source: 'Giving USA', publishedDate: '2026-06-01' },
  { hexCode: '6fced1', title: 'US social sector: Money (grantmakers giving $50M+ are 0.1% of funders, 40% of grant dollars)', url: 'https://candid.org/impact-insights/us-social-sector/money/', source: 'Candid (FY2022 filings)' },
  { hexCode: 'b3229d', title: 'Foundation 1000 trends analysis (~1% of funders, ~50–60% of tracked grant dollars)', url: 'https://candid.org/blogs/a-crash-course-trends-analysis-using-candids-foundation-1000-data-set/', source: 'Candid', publishedDate: '2023-09-21' },
  { hexCode: '1a2cb7', title: 'Gates Foundation Annual Report 2024 (total charitable support $8.015B)', url: 'https://www.gatesfoundation.org/about/financials/annual-reports/annual-report-2024', source: 'Gates Foundation' },
  { hexCode: 'f4fc11', title: 'Mellon Foundation Annual Report 2024 (~$540M grantmaking)', url: 'https://www.mellon.org/annual-report/2024', source: 'Mellon Foundation' },
  { hexCode: '5c3e27', title: 'RWJF Financials (annual grantmaking ~$550M)', url: 'https://www.rwjf.org/en/about-rwjf/financials.html', source: 'Robert Wood Johnson Foundation' },
  { hexCode: 'f4987b', title: '$124 trillion in wealth will transfer through 2048; ~$18T to charity', url: 'https://www.cerulli.com/press-releases/cerulli-anticipates-124-trillion-in-wealth-will-transfer-through-2048', source: 'Cerulli Associates', publishedDate: '2024-12-05' },
  { hexCode: '552e9e', title: 'World Ultra Wealth Report 2026 (556,850 global UHNW holding $63.8T; U.S. ~37%)', url: 'https://www.prnewswire.com/news-releases/altratas-world-ultra-wealth-report-2026-finds-the-global-ultra-wealthy-population-reaches-all-time-high-of-556-850-individuals-302806898.html', source: 'Altrata', publishedDate: '2026-06-23' },
  { hexCode: '56142e', title: 'World Wealth Report 2026 (global HNWI wealth a record $98.3T)', url: 'https://www.familywealthreport.com/article.php/Rise-In-High-Net-Worth-Individuals%27-Global-Wealth-In-2025%3B-US-Adds-Most-Millionaires-%E2%80%93-Capgemini-?id=207881', source: 'Capgemini (via Family Wealth Report)' },
  { hexCode: 'a7d443', title: 'How to Use IRS Form 990s for Grant Prospecting', url: 'https://www.grantreadyky.org/learn/resources/990s-for-grant-prospecting', source: 'Grant Ready KY' },
  { hexCode: '4b538e', title: "A Nonprofit's Guide To Grant Prospect Research", url: 'https://www.instrumentl.com/blog/grant-prospect-research', source: 'Instrumentl' },
  { hexCode: '57ce95', title: 'Reach Teachers College Growth Campaign Deck (June 2026)', url: '#', source: 'Joe E. Ross, President & CEO — internal campaign deck', publishedDate: '2026-06-01' },
  { hexCode: '0a146a', title: 'Reach University Secures $2M Grant from Carnegie Corporation of New York', url: 'https://reach.edu/blog/reach-university-secures-2m-grant-carnegie-corporation-of-new-york', source: 'Reach University blog', publishedDate: '2026-05-14' },
  { hexCode: 'e7cbef', title: 'NCTR Awards Grants to 43 Teacher Residency Programs (Ballmer $40M renewal)', url: 'https://nctresidencies.org/resource/nctr-awards-grants-to-43-teacher-residency-programs-to-support-recruitment-preparation-and-retention-of-educators-2', source: 'NCTR' },
  { hexCode: '63bbab', title: 'Ascendium 2025 Education Philanthropy Report ($172M; rural learner success)', url: 'https://www.ascendiumeducation.org/newsroom/all-news-releases/ascendium-releases-2025-education-philanthropy-report', source: 'Ascendium Education Group', publishedDate: '2026-04-09' },
  { hexCode: '65140c', title: 'National Skilled Trades Initiative ($570M cumulative CTE)', url: 'https://www.bloomberg.org/press/bloomberg-philanthropies-announces-first-of-its-kind-national-skilled-trades-initiative-to-accelerate-high-school-students-into-high-wage-in-demand-trade-careers/', source: 'Bloomberg Philanthropies' },
  { hexCode: 'a26016', title: 'Record community-college gifts (Bloomberg → HCC $17M; Arnold → Maricopa $16M)', url: 'https://www.ccdaily.com/2026/06/funding-roundup-448/', source: 'Community College Daily', publishedDate: '2026-06-10' },
  { hexCode: '5e224c', title: 'Walton Home Region Strategy 2030 (aimed at the Delta)', url: 'https://hl.nwaonline.com/news/2026/may/20/walton-family-foundation-home-region-program-to/', source: 'NWA Online', publishedDate: '2026-05-20' },
  { hexCode: '6aca82', title: 'Lumina Goal 2040 (credentials of labor-market value)', url: 'https://www.luminafoundation.org/news-and-views/lumina-foundation-sets-new-national-goal-to-expand-and-elevate-higher-education-and-workforce-training-by-2040/', source: 'Lumina Foundation', publishedDate: '2025-03-04' },
  { hexCode: '08f3c1', title: 'Humanity AI ($500M pool; $10M open call summer 2026)', url: 'https://www.mellon.org/news/humanity-ai-commits-500m-build-people-centered-future-ai', source: 'Mellon Foundation (ten-foundation pool)' },
  { hexCode: '1b000c', title: 'The 2026 People-First AI Fund ($50M, unrestricted, July 2026)', url: 'https://openaifoundation.org/en-US/news/2026-people-first-ai-fund', source: 'OpenAI Foundation' },
  { hexCode: 'a25592', title: 'BlackRock Future Builders ($25M RFP via JFF)', url: 'https://www.blackrock.com/corporate/newsroom/press-releases/article/corporate-one/press-releases/blackrock-launches-philanthropic-skilled-trades-initiative', source: 'The BlackRock Foundation' },
  { hexCode: 'f868ef', title: "MacKenzie Scott's $7 billion year", url: 'https://fortune.com/2025/12/10/mackenzie-scott-7-billion-2025-donations-college-roommate-dentist-inspiration/', source: 'Fortune' },
  { hexCode: 'd1d74b', title: "MacKenzie Scott's Higher Ed Philanthropy Tops $1 Billion For The Year", url: 'https://www.forbes.com/sites/michaeltnietzel/2025/12/05/mackenzie-scotts-higher-ed-philanthropy-tops-1-billion-for-the-year/', source: 'Forbes' },
  { hexCode: '3bc2ca', title: 'Einstein College of Medicine tuition-free after $1B gift', url: 'https://www.npr.org/2024/02/27/1234107300/free-tuition-albert-einstein-college-medicine', source: 'NPR', publishedDate: '2024-02-27' },
  { hexCode: '1a4b17', title: '$1B gift makes Johns Hopkins medical school free for most', url: 'https://president.jhu.edu/media/2024/07/08/1-billion-gift-to-make-johns-hopkins-medical-school-free-for-most/', source: 'Johns Hopkins University', publishedDate: '2024-07-08' },
];

export const CITE = buildCitationIndex(DEFS);
export const SOURCES = citationsToArray(CITE);
