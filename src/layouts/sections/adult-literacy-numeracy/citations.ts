/**
 * Deck-wide citation registry — adult-literacy-numeracy (variant aln-p1).
 * Canonical hex codes from context-v/narratives/citations/registry.csv;
 * [n] assigned by array order (first appearance across the deck).
 * Narrative: context-v/narratives/strategies/literacy-numeracy/pitch.md
 */
import { buildCitationIndex, citationsToArray } from '@lib/citations/types';
import type { CitationReference } from '@lib/citations/types';

export const DEFS: CitationReference[] = [
  { hexCode: '28f12b', title: 'Returns to skills around the world: Evidence from PIAAC (EER 73)', url: 'https://hanushek.stanford.edu/sites/default/files/publications/Hanushek%2BSchwerdt%2BWiederhold%2BWoessmann%202015%20EER%2073.pdf', source: 'Hanushek, Schwerdt, Wiederhold & Woessmann (2015)' },
  { hexCode: '2b7e6d', title: 'What is the economic value of literacy and numeracy?', url: 'https://wol.iza.org/articles/what-is-economic-value-of-literacy-and-numeracy/long', source: 'IZA World of Labor' },
  { hexCode: '24ff0f', title: 'PIAAC Highlights of U.S. National Results (2023)', url: 'https://nces.ed.gov/surveys/piaac/2023/national_results.asp', source: 'NCES' },
  { hexCode: 'a182e2', title: 'Literacy in U.S. (2017 baseline: 19% at/below Level 1)', url: 'https://nationalcoalitionforliteracy.org/literacy-in-united-states/', source: 'National Coalition for Literacy' },
  { hexCode: 'd67dcb', title: 'PIAAC — Survey of Adult Skills', url: 'https://www.oecd.org/en/about/programmes/piaac.html', source: 'OECD' },
  { hexCode: 'a73ccd', title: 'Foundational Skills in the Service Sector (62%/74% below Level 3)', url: 'https://nationalskillscoalition.org/wp-content/uploads/2020/12/NSC-foundational-skills-FINAL.pdf', source: 'National Skills Coalition / Bergson-Shilcock, with AIR', publishedDate: '2017-02-01' },
  { hexCode: 'd461ae', title: 'Do U.S. Adults Have the Skills Needed to Thrive in the 21st Century?', url: 'https://www.air.org/resource/spotlight/do-us-adults-have-skills-needed-thrive-21st-century-four-piaac-studies-air', source: 'AIR' },
  { hexCode: 'cd9feb', title: 'The Science of Reading and Where It Stands in Adult Education', url: 'https://www.proliteracy.org/resources/the-science-of-reading-and-where-it-stands-in-adult-education/', source: 'ProLiteracy' },
  { hexCode: 'f2068b', title: 'Development, Discouragement, or Diversion? (remediation is diversionary)', url: 'https://ccrc.tc.columbia.edu/publications/development-discouragement-diversion.html', source: 'Scott-Clayton & Rodriguez (2015), CCRC' },
  { hexCode: '4a210e', title: 'CUNY corequisite RCT (16-point higher pass rate vs remedial algebra)', url: 'https://journals.sagepub.com/doi/10.3102/0162373716649056', source: 'Logue, Watanabe-Rose & Douglas (2016), EEPA' },
  { hexCode: '95f776', title: 'Adult Education Strategies: Identifying and Building Evidence of Effectiveness', url: 'https://ies.ed.gov/ncee/2025/01/2021007-pdf', source: 'IES / NCEE' },
  { hexCode: '57ce95', title: 'Reach Teachers College Growth Campaign Deck (June 2026)', url: '#', source: 'Joe E. Ross, President & CEO — internal campaign deck', publishedDate: '2026-06-01' },
  { hexCode: '79319a', title: 'Serving More Than 20 Million Individuals through the Dollar General Literacy Foundation', url: 'https://www.dollargeneral.com/hereforwhatmatters/literacy-foundation', source: 'Dollar General' },
  { hexCode: '90ad13', title: 'DGLF Celebrates Another One-Day Grant Milestone (~$16M, May 2026)', url: 'https://www.businesswire.com/news/home/20260508824264/en/Dollar-General-Literacy-Foundation-Celebrates-Another-One-Day-Grant-Milestone', source: 'BusinessWire' },
  { hexCode: '3f6fb6', title: 'DGLF Awards More Than $3.5 Million in Youth Literacy Grants', url: 'https://www.businesswire.com/news/home/20250814972129/en/Dollar-General-Literacy-Foundation-Awards-More-Than-%243.5-Million-in-Youth-Literacy-Grants', source: 'BusinessWire', publishedDate: '2025-08-14' },
  { hexCode: '69fa84', title: 'George & Barbara Bush Foundation Launches Barbara Bush Fund for Family Literacy', url: 'https://bush41.org/news/george-barbara-bush-foundation-launches-barbara-bush-fund-for-family-literacy', source: 'George & Barbara Bush Foundation' },
  { hexCode: 'b8a0cd', title: 'Adult Literacy Programs Receive Millions through Yield Giving', url: 'https://www.proliteracy.org/news/adult-literacy-programs-receive-millions-through-yield-giving/', source: 'ProLiteracy' },
  { hexCode: 'e174dc', title: 'Literacy Opportunity Fund Spreads $148K Between 30 Nonprofits in Q1 (grants capped at $6,000; federal funding ~$1B → ~$190M)', url: 'https://www.proliteracy.org/news/literacy-opportunity-fund-spreads-148k-between-30-nonprofits-in-q1/', source: 'ProLiteracy' },
  { hexCode: '4aedc1', title: 'NCAD: 3 Million Apprenticeship Degree Completions by 2035', url: 'https://reach.edu/blog/ncad-growing-list-of-partners-take-foundational-strides-towards-achieving-3-million-apprenticeship-degree-completions-by-2035', source: 'Reach University blog' },
  { hexCode: '4872f7', title: "Mother's reading skill is the greatest determinant of children's future academic success", url: 'https://www.nichd.nih.gov/newsroom/releases/102510-reading-family-income', source: 'NICHD (Sastry & Pebley, Demography)', publishedDate: '2010-10-25' },
  { hexCode: '6a9ca0', title: 'PIAAC U.S. Country Note: socio-economic background impacts skills more strongly in the U.S.', url: 'https://www.oecd.org/content/dam/oecd/en/about/programmes/edu/piaac/country-specific-material/cycle-1/USA-Country-Note-Cycle1-Round1-2013.pdf', source: 'OECD', publishedDate: '2013-10-01' },
];

export const CITE = buildCitationIndex(DEFS);
export const SOURCES = citationsToArray(CITE);
