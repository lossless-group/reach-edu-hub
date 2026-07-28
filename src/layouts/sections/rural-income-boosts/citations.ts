/**
 * Deck-wide citation registry — rural-income-boosts (variant rib-p1).
 * Canonical hex codes from context-v/narratives/citations/registry.csv;
 * [n] assigned by array order (first appearance across the deck).
 * Narrative: context-v/narratives/strategies/rural-income/pitch.md
 */
import { buildCitationIndex, citationsToArray } from '@lib/citations/types';
import type { CitationReference } from '@lib/citations/types';

export const DEFS: CitationReference[] = [
  { hexCode: '542c7f', title: 'Rural Opportunity Through Apprenticeship', url: 'https://www.insidehighered.com/news/tech-innovation/alternative-credentials/2026/05/26/rural-opportunity-through-apprenticeship', source: 'Inside Higher Ed', publishedDate: '2026-05-26' },
  { hexCode: '57ce95', title: 'Reach Teachers College Growth Campaign Deck (June 2026)', url: '#', source: 'Joe E. Ross, President & CEO — internal campaign deck', publishedDate: '2026-06-01' },
  { hexCode: '16a15a', title: 'Earn-And-Learn Opportunities Can Benefit Workers and Employers', url: 'https://www.gao.gov/products/gao-25-107040', source: 'U.S. GAO (GAO-25-107040)' },
  { hexCode: 'a94477', title: 'The Apprenticeship Degree', url: 'https://www.progressivepolicy.org/wp-content/uploads/2025/06/PPI_-The-Apprenticeship-Degree.pdf', source: 'Progressive Policy Institute', publishedDate: '2025-06-01' },
  { hexCode: 'a6412b', title: 'A New State Solution for Teacher Shortages: Apprenticeships', url: 'https://www.air.org/resource/blog-post/new-state-solution-teacher-shortages-apprenticeships', source: 'AIR' },
  { hexCode: 'aabd55', title: 'Non-Metropolitan Areas Lag Behind in Work-from-Home Rates (16.2% metro vs 8.1% non-metro)', url: 'https://agpolicyreview.card.iastate.edu/spring-2024/non-metropolitan-areas-lag-behind-work-home-rates', source: 'Winters / Iowa State CARD' },
  { hexCode: 'a057d7', title: 'SWAA / WFH Research (April 2026: ~25–27% of U.S. paid workdays remote)', url: 'https://wfhresearch.com/wp-content/uploads/2026/04/WFHResearch_updates_April2026.pdf', source: 'Barrero, Bloom & Davis', publishedDate: '2026-04-01' },
  { hexCode: 'ce4b4f', title: 'The Uneven Geography of Remote Work', url: 'https://eig.org/the-uneven-geography-of-remote-work', source: 'Economic Innovation Group' },
  { hexCode: '91c42b', title: 'Rise of Remote Work (rural economic development strategy)', url: 'https://ruralinnovation.us/wp-content/uploads/2022/01/Remote-Work_122721.pdf', source: 'Center on Rural Innovation / EDA' },
  { hexCode: '5e224c', title: 'Walton Family Foundation Home Region Strategy 2030 (Delta education-to-career)', url: 'https://hl.nwaonline.com/news/2026/may/20/walton-family-foundation-home-region-program-to/', source: 'NWA Online', publishedDate: '2026-05-20' },
  { hexCode: 'a14f6b', title: 'Native Forward Receives $50 Million from MacKenzie Scott', url: 'https://www.nativeforward.org/2025/09/24/mackenzie-scott-awards-50-million/', source: 'Native Forward Scholars Fund', publishedDate: '2025-09-24' },
  { hexCode: '496a2b', title: 'MacKenzie Scott Invests Record $36 Million (two rural NC community colleges)', url: 'https://www.nccommunitycolleges.edu/news/philanthropist-mackenzie-scott-invests-record-36-million/', source: 'NC Community Colleges' },
  { hexCode: '333d1c', title: 'MacKenzie Scott Extends Her Philanthropy To Tribal, Community Colleges', url: 'https://www.forbes.com/sites/michaeltnietzel/2025/11/23/mackenzie-scott-extends-her-philanthropy-to-tribal-community-colleges/', source: 'Forbes' },
  { hexCode: 'b22fe0', title: 'Fort Peck Community College receives $11M gift from MacKenzie Scott', url: 'https://montanafreepress.org/2025/11/26/fort-peck-community-college-receives-11m-gift-from-mackenzie-scott/', source: 'Montana Free Press', publishedDate: '2025-11-26' },
  { hexCode: '9ec98d', title: 'MacKenzie Scott Donates $65 Million to LISC', url: 'https://www.lisc.org/our-stories/story/mackenzie-scott-donates-65-million-lisc/', source: 'LISC' },
  { hexCode: '63bbab', title: 'Ascendium 2025 Education Philanthropy Report ($172M; rural learner success)', url: 'https://www.ascendiumeducation.org/newsroom/all-news-releases/ascendium-releases-2025-education-philanthropy-report', source: 'Ascendium Education Group', publishedDate: '2026-04-09' },
  { hexCode: '5126b2', title: 'Dogwood Health Trust ($365M into rural Western NC, 2024–25)', url: 'https://www.gih.org/philanthropy-work/reports/dogwood-health-trust-july-2026/', source: 'Grantmakers in Health', publishedDate: '2026-07-17' },
  { hexCode: 'e3b418', title: 'Lilly Endowment GIFT VIII ($312M across all 92 Indiana counties)', url: 'https://lillyendowment.org/stories/collaborating-to-enrich-quality-of-life/', source: 'Lilly Endowment' },
  { hexCode: 'cca778', title: 'Place Matters ($600M+ place-based partnerships)', url: 'https://www.bluemeridian.org/funds/place-matters/', source: 'Blue Meridian Partners' },
  { hexCode: 'bfbdb3', title: 'Goldman Sachs 10,000 Small Businesses: $100M Investment in Rural Communities', url: 'https://www.goldmansachs.com/pressroom/press-releases/2023/10ksb-expansion-into-rural-communities', source: 'Goldman Sachs', publishedDate: '2023-09-08' },
  { hexCode: '13929c', title: 'CoBank Rural Prosperity Grant Program', url: 'https://www.cobank.com/news/2026/cobank-awards-1-9-million-in-grants-to-support-economic-development-in-rural-america', source: 'CoBank' },
  { hexCode: '0a146a', title: 'Reach University Secures $2M Grant from Carnegie Corporation of New York', url: 'https://reach.edu/blog/reach-university-secures-2m-grant-carnegie-corporation-of-new-york', source: 'Reach University blog', publishedDate: '2026-05-14' },
];

export const CITE = buildCitationIndex(DEFS);
export const SOURCES = citationsToArray(CITE);
