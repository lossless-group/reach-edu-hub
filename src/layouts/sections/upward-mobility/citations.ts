/**
 * Deck-wide citation registry — upward-mobility (variant um-p1).
 *
 * Hex codes are CANONICAL — they come from the per-client registry at
 * context-v/narratives/citations/registry.csv (never renumber, never recycle).
 * Sequential [n] markers are assigned at build time by array order below,
 * which mirrors first appearance across the deck. Every section imports
 * { CITE } and renders <InlineCitation {...CITE.get('hex')!} />; the final
 * Sources section renders the full ordered list.
 *
 * Narrative source: context-v/narratives/strategies/upward-mobility/pitch.md
 * (all figures verified against primary sources 2026-07-28).
 */
import { buildCitationIndex, citationsToArray } from '@lib/citations/types';
import type { CitationReference } from '@lib/citations/types';

export const DEFS: CitationReference[] = [
  {
    hexCode: '57ce95',
    title: 'Reach Teachers College Growth Campaign Deck (June 2026)',
    url: '#',
    source: 'Joe E. Ross, President & CEO — internal campaign deck',
    publishedDate: '2026-06-01',
  },
  {
    hexCode: '679c9b',
    title: 'Pathways to High-Quality Jobs for Young Adults',
    url: 'https://tacc.org/sites/default/files/documents/2018-11/brookings_child-trends_pathways-for-high-quality-jobs.pdf',
    source: 'Brookings Institution / Child Trends',
    publishedDate: '2018-11-29',
  },
  {
    hexCode: '16a15a',
    title: 'Earn-And-Learn Opportunities Can Benefit Workers and Employers',
    url: 'https://www.gao.gov/products/gao-25-107040',
    source: 'U.S. GAO (GAO-25-107040)',
  },
  {
    hexCode: 'a94477',
    title: 'The Apprenticeship Degree',
    url: 'https://www.progressivepolicy.org/wp-content/uploads/2025/06/PPI_-The-Apprenticeship-Degree.pdf',
    source: 'Progressive Policy Institute',
    publishedDate: '2025-06-01',
  },
  {
    hexCode: '9ce917',
    title: 'PPI: Promoting Upward Mobility and Addressing Labor Shortages',
    url: 'https://reach.edu/blog/ppi-the-apprenticeship-degree-promoting-upward-mobility-and-addressing-labor-shortages',
    source: 'Reach University blog',
  },
  {
    hexCode: '7d47c7',
    title: 'Setting the Stage for Scaling Apprenticeship Degrees',
    url: 'https://www.urban.org/sites/default/files/2026-05/Setting_the_Stage_for_Scaling_Apprenticeship_Degrees.pdf',
    source: 'Urban Institute',
    publishedDate: '2026-05-01',
  },
  {
    hexCode: '28ded4',
    title: 'Why Higher Ed Is Leaning Into Apprenticeships',
    url: 'https://www.insidehighered.com/news/deep-dives/2026/02/17/why-higher-ed-leaning-apprenticeships',
    source: 'Inside Higher Ed',
    publishedDate: '2026-02-17',
  },
  {
    hexCode: '3f891a',
    title: 'Reach University and Training Fund Launch Apprenticeship College of Health',
    url: 'https://reach.edu/blog/reach-university-and-training-fund-launch-apprenticeship-college-of-health-to-address-national-healthcare-workforce-shortages',
    source: 'Reach University blog',
    publishedDate: '2026-04-09',
  },
  {
    hexCode: 'c94ece',
    title: 'Occupational Outlook: Home Health and Personal Care Aides (~765,800 openings/yr)',
    url: 'https://www.bls.gov/ooh/healthcare/home-health-aides-and-personal-care-aides.htm',
    source: 'U.S. Bureau of Labor Statistics',
    publishedDate: '2025-08-28',
  },
  {
    hexCode: '20ec38',
    title: 'Occupational Outlook: Nursing Assistants and Orderlies',
    url: 'https://www.bls.gov/ooh/healthcare/nursing-assistants.htm',
    source: 'U.S. Bureau of Labor Statistics',
    publishedDate: '2025-08-28',
  },
  {
    hexCode: 'fecd96',
    title: 'Direct Care Workers in the United States: Key Facts 2024',
    url: 'https://www.phinational.org/resource/direct-care-workers-in-the-united-states-key-facts-2024',
    source: 'PHI',
    publishedDate: '2024-09-01',
  },
  {
    hexCode: 'ef6763',
    title: '65+ population reached 61.2M in 2024',
    url: 'https://www.census.gov/newsroom/press-releases/2025/older-adults-outnumber-children.html',
    source: 'U.S. Census Bureau',
    publishedDate: '2025-06-01',
  },
  {
    hexCode: '757e16',
    title: 'Taking charge: Manufacturers support growth with active workforce strategies (3.8M needed; 1.9M at risk unfilled)',
    url: 'https://www.deloitte.com/us/en/insights/industry/manufacturing-industrial-products/supporting-us-manufacturing-growth-amid-workforce-challenges.html',
    source: 'Deloitte + The Manufacturing Institute',
    publishedDate: '2024-04-03',
  },
  {
    hexCode: 'ee9ca4',
    title: 'Advanced Manufacturing industry page (97,500 apprentices served in 2025, +20% over five years)',
    url: 'https://www.apprenticeship.gov/apprenticeship-industries/advanced-manufacturing',
    source: 'U.S. DOL / Apprenticeship.gov',
  },
  {
    hexCode: '6777be',
    title: 'Global Data Center Survey 2025 (46% of operators cannot find qualified candidates)',
    url: 'https://datacenter.uptimeinstitute.com/rs/711-RIA-145/images/2025.Annual.Survey.Report.pdf',
    source: 'Uptime Institute',
  },
  {
    hexCode: 'cf95b7',
    title: 'The People Challenge: Global Data Center Staffing Forecast 2021–2025',
    url: 'https://intelligence.uptimeinstitute.com/resource/people-challenge-global-data-center-staffing-forecast-2021-2025',
    source: 'Uptime Institute',
  },
  {
    hexCode: 'e225f4',
    title: 'The Cost of Compute: A $7 Trillion Race to Scale Data Centers',
    url: 'https://www.mckinsey.com/industries/technology-media-and-telecommunications/our-insights/the-cost-of-compute-a-7-trillion-dollar-race-to-scale-data-centers',
    source: 'McKinsey & Company',
  },
  {
    hexCode: '3832d4',
    title: 'Economic Contributions of Data Centers in the United States, 2023–2024',
    url: 'https://datacentercoalition.org/reports-and-publications',
    source: 'PwC / Data Center Coalition',
    publishedDate: '2026-05-01',
  },
  {
    hexCode: '23cb42',
    title: 'Disability Impacts All of Us (1 in 4 U.S. adults)',
    url: 'https://www.cdc.gov/disability-and-health/articles-documents/disability-impacts-all-of-us-infographic.html',
    source: 'CDC',
  },
  {
    hexCode: 'b75cb3',
    title: 'People with a Disability: Labor Force Characteristics — 2025',
    url: 'https://www.bls.gov/news.release/disabl.nr0.htm',
    source: 'U.S. Bureau of Labor Statistics',
    publishedDate: '2026-03-03',
  },
  {
    hexCode: '272bb5',
    title: 'Work from Home and Disability Employment (NBER WP 32943)',
    url: 'https://www.nber.org/papers/w32943',
    source: 'Bloom, Dahl & Rooth — NBER',
  },
  {
    hexCode: 'c49a6d',
    title: 'Disabled employment-population ratio hit a series high of 22.7% in 2024',
    url: 'https://www.bls.gov/opub/ted/2025/22-7-percent-of-people-with-a-disability-were-employed-in-2024.htm',
    source: 'U.S. Bureau of Labor Statistics',
    publishedDate: '2025-04-25',
  },
  {
    hexCode: '2e20a0',
    title: 'Telework trends in 2024 (disabled workers telework at 24.4% vs 22.8%)',
    url: 'https://www.bls.gov/opub/btn/volume-14/telework-trends-in-2024.htm',
    source: 'U.S. Bureau of Labor Statistics',
  },
  {
    hexCode: '2e54ee',
    title: "America's Talent Strategy (21M+ prime-age Americans out of the labor force)",
    url: 'https://www.dol.gov/sites/dolgov/files/OPA/newsreleases/2025/08/Americas-Talent-Strategy-Building-the-Workforce-for-the-Golden-Age.pdf',
    source: 'U.S. Department of Labor',
    publishedDate: '2025-08-25',
  },
  {
    hexCode: '496b0f',
    title: 'Seven economic facts about prime-age labor force participation',
    url: 'https://www.brookings.edu/articles/seven-economic-facts-about-prime-age-labor-force-participation',
    source: 'Hamilton Project / Brookings',
    publishedDate: '2025-07-01',
  },
  {
    hexCode: 'c7ebc7',
    title: 'Does Working from Home Work? (Ctrip RCT: +13% performance, ~50% lower promotion rate)',
    url: 'https://www.gsb.stanford.edu/faculty-research/working-papers/does-working-home-work-evidence-chinese-experiment',
    source: 'Bloom, Liang, Roberts & Ying — QJE 2015',
  },
  {
    hexCode: 'c356ce',
    title: 'Remote workers were promoted 31% less frequently in 2023',
    url: 'https://www.wsj.com/lifestyle/careers/remote-workers-are-losing-out-on-promotions-8219ec63',
    source: 'WSJ / Live Data Technologies',
    publishedDate: '2024-01-01',
  },
  {
    hexCode: '5f42a8',
    title: 'National Philanthropies Join Forces to Advance Economic Mobility (NextLadder Ventures, $1B)',
    url: 'https://www.gatesfoundation.org/ideas/media-center/press-releases/2025/07/nextladder-ventures-economic-mobility',
    source: 'Gates Foundation',
    publishedDate: '2025-07-17',
  },
  {
    hexCode: 'cca778',
    title: 'Place Matters ($600M+ place-based economic mobility)',
    url: 'https://www.bluemeridian.org/funds/place-matters/',
    source: 'Blue Meridian Partners',
  },
  {
    hexCode: 'f868ef',
    title: "MacKenzie Scott's $7 billion year",
    url: 'https://fortune.com/2025/12/10/mackenzie-scott-7-billion-2025-donations-college-roommate-dentist-inspiration/',
    source: 'Fortune',
  },
  {
    hexCode: 'd1d74b',
    title: "MacKenzie Scott's Higher Ed Philanthropy Tops $1 Billion For The Year",
    url: 'https://www.forbes.com/sites/michaeltnietzel/2025/12/05/mackenzie-scotts-higher-ed-philanthropy-tops-1-billion-for-the-year/',
    source: 'Forbes',
  },
  {
    hexCode: '3c9545',
    title: 'MacKenzie Scott Makes Another Blockbuster Gift To An HBCU',
    url: 'https://www.forbes.com/sites/michaeltnietzel/2026/03/14/mackenzie-scott-makes-another-blockbuster-gift-to-an-hbcu/',
    source: 'Forbes',
    publishedDate: '2026-03-14',
  },
  {
    hexCode: '7ec216',
    title: "MacKenzie Scott Donates $42 Million Gift to 10,000 Degrees",
    url: 'https://10000degrees.org/2025/10/08/mackenzie-scott-donates-42-million-gift-to-10000-degrees/',
    source: '10,000 Degrees',
    publishedDate: '2025-10-08',
  },
  {
    hexCode: 'b585ef',
    title: 'JFF Announces $20 Million Donation from MacKenzie Scott',
    url: 'https://www.jff.org/newsroom/press-releases/jobs-for-the-future-announces-20-million-donation-from-mackenzie-scott/',
    source: 'Jobs for the Future',
    publishedDate: '2023-11-08',
  },
  {
    hexCode: 'a14f6b',
    title: 'Native Forward Receives $50 Million from MacKenzie Scott',
    url: 'https://www.nativeforward.org/2025/09/24/mackenzie-scott-awards-50-million/',
    source: 'Native Forward Scholars Fund',
    publishedDate: '2025-09-24',
  },
  {
    hexCode: '6aca82',
    title: 'Lumina Foundation sets new national goal (Goal 2040)',
    url: 'https://www.luminafoundation.org/news-and-views/lumina-foundation-sets-new-national-goal-to-expand-and-elevate-higher-education-and-workforce-training-by-2040/',
    source: 'Lumina Foundation',
    publishedDate: '2025-03-04',
  },
  {
    hexCode: '3bc2ca',
    title: 'Albert Einstein College of Medicine is now tuition-free due to $1 billion gift',
    url: 'https://www.npr.org/2024/02/27/1234107300/free-tuition-albert-einstein-college-medicine',
    source: 'NPR',
    publishedDate: '2024-02-27',
  },
  {
    hexCode: '1a4b17',
    title: '$1 billion gift to make Johns Hopkins medical school free for most',
    url: 'https://president.jhu.edu/media/2024/07/08/1-billion-gift-to-make-johns-hopkins-medical-school-free-for-most/',
    source: 'Johns Hopkins University',
    publishedDate: '2024-07-08',
  },
  {
    hexCode: '0a146a',
    title: 'Reach University Secures $2M Grant from Carnegie Corporation of New York',
    url: 'https://reach.edu/blog/reach-university-secures-2m-grant-carnegie-corporation-of-new-york',
    source: 'Reach University blog',
    publishedDate: '2026-05-14',
  },
  {
    hexCode: '7d0be0',
    title: '$1M Grant to Expand Apprenticeship Degrees in Behavioral Health',
    url: 'https://reach.edu/blog/announcement-1m-grant-to-expand-apprenticeship-degrees-in-behavioral-health',
    source: 'Reach University blog',
    publishedDate: '2025-02-20',
  },
  {
    hexCode: '672e9a',
    title: 'Ballmer Group, Wilson Foundation Put $30M Behind Community College Effort',
    url: 'https://www.detroitchamber.com/ballmer-group-wilson-foundation-put-30m-behind-community-college-effort-to-boost-certificates-degrees/',
    source: 'Detroit Regional Chamber',
    publishedDate: '2023-04-25',
  },
  {
    hexCode: '63bbab',
    title: 'Ascendium Releases 2025 Education Philanthropy Report ($172M awarded)',
    url: 'https://www.ascendiumeducation.org/newsroom/all-news-releases/ascendium-releases-2025-education-philanthropy-report',
    source: 'Ascendium Education Group',
    publishedDate: '2026-04-09',
  },
  {
    hexCode: '4aedc1',
    title: 'NCAD: 3 Million Apprenticeship Degree Completions by 2035',
    url: 'https://reach.edu/blog/ncad-growing-list-of-partners-take-foundational-strides-towards-achieving-3-million-apprenticeship-degree-completions-by-2035',
    source: 'Reach University blog',
  },
];

export const CITE = buildCitationIndex(DEFS);
export const SOURCES = citationsToArray(CITE);
