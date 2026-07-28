/**
 * Deck-wide citation registry — frontier-job-demand (variant fjd-p1).
 * Canonical hex codes from context-v/narratives/citations/registry.csv;
 * [n] assigned by array order (first appearance across the deck).
 * Narrative: context-v/narratives/strategies/frontier-job-demand/pitch.md
 * (all figures verified against primary sources 2026-07-28).
 */
import { buildCitationIndex, citationsToArray } from '@lib/citations/types';
import type { CitationReference } from '@lib/citations/types';

export const DEFS: CitationReference[] = [
  { hexCode: '57ce95', title: 'Reach Teachers College Growth Campaign Deck (June 2026)', url: '#', source: 'Joe E. Ross, President & CEO — internal campaign deck', publishedDate: '2026-06-01' },
  { hexCode: '3f891a', title: 'Reach University and Training Fund Launch Apprenticeship College of Health', url: 'https://reach.edu/blog/reach-university-and-training-fund-launch-apprenticeship-college-of-health-to-address-national-healthcare-workforce-shortages', source: 'Reach University blog', publishedDate: '2026-04-09' },
  { hexCode: '74d051', title: 'Registered Apprenticeship 101 fact sheet (93% retain employment; $77K average annual salary)', url: 'https://www.apprenticeship.gov/sites/default/files/dol-industry-factsheet-apprenticeship101-v10.pdf', source: 'U.S. Department of Labor' },
  { hexCode: '757e16', title: 'Taking charge (3.8M manufacturing workers needed 2024–2033; 1.9M at risk unfilled)', url: 'https://www.deloitte.com/us/en/insights/industry/manufacturing-industrial-products/supporting-us-manufacturing-growth-amid-workforce-challenges.html', source: 'Deloitte + The Manufacturing Institute', publishedDate: '2024-04-03' },
  { hexCode: 'ee9ca4', title: 'Advanced Manufacturing (97,500 apprentices served in 2025, +20% over five years)', url: 'https://www.apprenticeship.gov/apprenticeship-industries/advanced-manufacturing', source: 'U.S. DOL / Apprenticeship.gov' },
  { hexCode: '405c2d', title: 'Apprenticeship Expansion Helps Workers and Businesses Thrive (TA to 800+ employers, 2020–2025)', url: 'https://www.jff.org/idea/apprenticeship-expansion-helps-workers-and-businesses-thrive/', source: 'Jobs for the Future' },
  { hexCode: '7bb99e', title: 'Drone Market report (global $73.06B 2024 → $163.6B 2030, 14.3% CAGR)', url: 'https://www.grandviewresearch.com/industry-analysis/drone-market-report', source: 'Grand View Research' },
  { hexCode: '69bdec', title: 'Skies Without Limits (628,000 jobs in the UK drone economy by 2030)', url: 'https://www.pwc.co.uk/intelligent-digital/drones/Drones-impact-on-the-UK-economy-FINAL.pdf', source: 'PwC UK' },
  { hexCode: '42684f', title: 'AI Skills Demand in the U.S. Job Market (citing McKinsey State of AI ~90% adoption)', url: 'https://gloat.com/blog/ai-skills-demand/', source: 'Gloat' },
  { hexCode: 'da5b04', title: '9% of organizations AI-mature (survey of 606 CIOs)', url: 'https://www.gartner.com/en/newsroom/press-releases/2023-11-06-gartner-says-ai-ambition-and-ai-ready-scenarios-must-be-a-top-priority-for-cios-for-next-12-24-months', source: 'Gartner', publishedDate: '2023-11-06' },
  { hexCode: 'c1cc24', title: 'AI Will Reshape More Jobs Than It Replaces (50–55% of U.S. jobs, 2–3 years)', url: 'https://www.bcg.com/publications/2026/ai-will-reshape-more-jobs-than-it-replaces', source: 'BCG (2026)' },
  { hexCode: '43d7ac', title: '2026 Global AI Jobs Barometer (professionalised jobs 2× growth; 42% faster wage growth)', url: 'https://www.pwc.com/gx/en/services/ai/ai-jobs-barometer.html', source: 'PwC' },
  { hexCode: '6777be', title: 'Global Data Center Survey 2025 (46% of operators cannot find qualified candidates)', url: 'https://datacenter.uptimeinstitute.com/rs/711-RIA-145/images/2025.Annual.Survey.Report.pdf', source: 'Uptime Institute' },
  { hexCode: 'cf95b7', title: 'Global Data Center Staffing Forecast (~2.3M FTE; remove unnecessary education requirements)', url: 'https://intelligence.uptimeinstitute.com/resource/people-challenge-global-data-center-staffing-forecast-2021-2025', source: 'Uptime Institute' },
  { hexCode: 'e225f4', title: 'The Cost of Compute (~$6.7T global data-center capex by 2030)', url: 'https://www.mckinsey.com/industries/technology-media-and-telecommunications/our-insights/the-cost-of-compute-a-7-trillion-dollar-race-to-scale-data-centers', source: 'McKinsey & Company' },
  { hexCode: '3832d4', title: 'Economic Contributions of Data Centers in the U.S. (direct employment ~1M jobs)', url: 'https://datacentercoalition.org/reports-and-publications', source: 'PwC / Data Center Coalition', publishedDate: '2026-05-01' },
  { hexCode: 'a057d7', title: 'SWAA / WFH Research (~25–27% of U.S. paid workdays remote, 3.5× 2019)', url: 'https://wfhresearch.com/wp-content/uploads/2026/04/WFHResearch_updates_April2026.pdf', source: 'Barrero, Bloom & Davis', publishedDate: '2026-04-01' },
  { hexCode: '44bfd1', title: 'Remote roles ~10% of U.S. postings, 46% of all applications', url: 'https://www.linkedin.com/pulse/hybrid-really-new-normal-heres-what-data-showing-taylor-borden-nrjvf', source: 'LinkedIn Economic Graph (Dec 2022)' },
  { hexCode: '272bb5', title: 'Work from Home and Disability Employment (NBER WP 32943)', url: 'https://www.nber.org/papers/w32943', source: 'Bloom, Dahl & Rooth — NBER' },
  { hexCode: '2e54ee', title: "America's Talent Strategy (21M+ prime-age out of the labor force)", url: 'https://www.dol.gov/sites/dolgov/files/OPA/newsreleases/2025/08/Americas-Talent-Strategy-Building-the-Workforce-for-the-Golden-Age.pdf', source: 'U.S. Department of Labor', publishedDate: '2025-08-25' },
  { hexCode: '496b0f', title: 'Seven economic facts about prime-age labor force participation', url: 'https://www.brookings.edu/articles/seven-economic-facts-about-prime-age-labor-force-participation', source: 'Hamilton Project / Brookings', publishedDate: '2025-07-01' },
  { hexCode: 'c7ebc7', title: 'Ctrip WFH RCT (+13% performance; ~50% lower promotion rate)', url: 'https://www.gsb.stanford.edu/faculty-research/working-papers/does-working-home-work-evidence-chinese-experiment', source: 'Bloom, Liang, Roberts & Ying — QJE 2015' },
  { hexCode: 'c356ce', title: 'Fully remote workers promoted 31% less in 2023', url: 'https://www.wsj.com/lifestyle/careers/remote-workers-are-losing-out-on-promotions-8219ec63', source: 'WSJ / Live Data Technologies', publishedDate: '2024-01-01' },
  { hexCode: 'a25592', title: 'BlackRock Future Builders ($100M; $25M RFP via JFF)', url: 'https://www.blackrock.com/corporate/newsroom/press-releases/article/corporate-one/press-releases/blackrock-launches-philanthropic-skilled-trades-initiative', source: 'The BlackRock Foundation' },
  { hexCode: 'e33e8d', title: "Lowe's Foundation $250M expansion (250,000 tradespeople)", url: 'https://www.prnewswire.com/news-releases/lowes-foundation-plans-expanded-250-million-investment-to-help-train-and-develop-250-000-tradespeople-over-next-decade-increasing-skilled-trades-workforce-commitment-five-fold-302735686.html', source: "Lowe's Foundation / PRNewswire", publishedDate: '2026-04-07' },
  { hexCode: 'e9c685', title: "America's Workforce Academy ($115M first year)", url: 'https://about.fb.com/news/2026/06/americas-workforce-academy-free-skilled-trade-training/', source: 'Meta', publishedDate: '2026-06-08' },
  { hexCode: '65140c', title: 'National Skilled Trades Initiative ($90M; $570M cumulative CTE)', url: 'https://www.bloomberg.org/press/bloomberg-philanthropies-announces-first-of-its-kind-national-skilled-trades-initiative-to-accelerate-high-school-students-into-high-wage-in-demand-trade-careers/', source: 'Bloomberg Philanthropies' },
  { hexCode: '2d173e', title: 'Microsoft Elevate ($4B; 20M AI credentials)', url: 'https://blogs.microsoft.com/on-the-issues/2025/07/09/elevate/', source: 'Microsoft', publishedDate: '2025-07-09' },
  { hexCode: '611b39', title: 'Google commits $1 billion for AI training at US universities', url: 'https://www.reuters.com/world/us/google-commits-1-billion-ai-training-us-universities-2025-08-06/', source: 'Reuters', publishedDate: '2025-08-06' },
  { hexCode: '29691f', title: "Google.org's $75M AI Opportunity Fund for the United States", url: 'https://publicpolicy.google/article/ai-opportunity-fund/', source: 'Google.org', publishedDate: '2026-05-01' },
  { hexCode: '679c9b', title: 'Pathways to High-Quality Jobs for Young Adults (degree = strongest predictor)', url: 'https://tacc.org/sites/default/files/documents/2018-11/brookings_child-trends_pathways-for-high-quality-jobs.pdf', source: 'Brookings Institution / Child Trends', publishedDate: '2018-11-29' },
  { hexCode: '28ded4', title: 'Why Higher Ed Is Leaning Into Apprenticeships', url: 'https://www.insidehighered.com/news/deep-dives/2026/02/17/why-higher-ed-leaning-apprenticeships', source: 'Inside Higher Ed', publishedDate: '2026-02-17' },
  { hexCode: '4aedc1', title: 'NCAD: 3 Million Apprenticeship Degree Completions by 2035', url: 'https://reach.edu/blog/ncad-growing-list-of-partners-take-foundational-strides-towards-achieving-3-million-apprenticeship-degree-completions-by-2035', source: 'Reach University blog' },
];

export const CITE = buildCitationIndex(DEFS);
export const SOURCES = citationsToArray(CITE);
