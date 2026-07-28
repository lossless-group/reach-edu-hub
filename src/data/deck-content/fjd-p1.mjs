/** Deck content — frontier-job-demand (fjd-p1). Single source for Play-UI + PPTX. */
export const META = {
  deckSlug: 'frontier-job-demand',
  variant: 'fjd-p1',
  sectionDir: 'frontier-job-demand',
  title: 'Frontier Job Demand: The Job Is the Curriculum',
};

export const SLIDES = [
  {
    slot: '01', slug: 'cover', kind: 'cover',
    eyebrow: 'Reach × Lossless · Strategy Pitch', eyebrowRight: 'Frontier Job Demand · Draft',
    title: [{ t: 'The job is ' }, { t: 'the curriculum.', accent: true }],
    lede: 'Course catalogs are lagging indicators. Design apprenticeship degrees backward from where the jobs are going — five frontier bets where demand, employer pull, and apprenticeship fit all score high.',
  },
  {
    slot: '02', slug: 'hook', kind: 'statement', eyebrow: 'The hook',
    title: [{ t: 'The course catalog is a lagging indicator. In frontier fields, ' }, { t: 'the job is the curriculum.', accent: true }],
    lede: 'Robotics lines, drone operations, applied AI — these fields reinvent themselves faster than any curriculum committee cycle. A campus can’t keep up. A workplace can’t fall behind. So put the degree where the work is.',
  },
  {
    slot: '03', slug: 'transfers', kind: 'grid', eyebrow: 'The chassis',
    title: [{ t: 'The ABCs took an aide to teacher-of-record with a 65–110% raise. ' }, { t: 'Frontier fields are next.', accent: true }],
    items: [
      { chip: 'FIELD-AGNOSTIC STRUCTURE', body: 'Affordability by design ($75/month, zero debt) · based in the workplace · credit for work. Five years of teaching outcomes — 93% retention, 70% on-time completion, a ~2.4 measured effect size on income.', cites: ['57ce95'] },
      { chip: 'PAYLOAD #2 SHIPPED', body: 'The Apprenticeship College of Health proves the chassis carries new payloads — nursing assistants stepping up, the same ABCs.', cites: ['3f891a'] },
      { chip: 'THE BASELINE OUTCOME', body: 'Per the U.S. Department of Labor: 93% of apprentices who complete a Registered Apprenticeship retain employment, with an average annual salary of $77,000.', cites: ['74d051'] },
    ],
  },
  {
    slot: '04', slug: 'bets', kind: 'grid', eyebrow: 'The bets', cols: 3,
    title: [{ t: 'We don’t offer everything. We design backward from ' }, { t: 'five frontier fields.', accent: true }],
    items: [
      { stat: '01', head: 'Advanced Manufacturing Operations', body: 'Software-driven lines, robotics, observability.' },
      { stat: '02', head: 'Drone Sciences', body: 'Manufacture, software, deployment, applications.' },
      { stat: '03', head: 'AI in Business Operations', body: 'Making AI actually deliver inside organizations.' },
      { stat: '04', head: 'Data Center Operations', body: 'The physical-infrastructure jobs of the AI buildout.' },
      { stat: '05', head: 'Remote & Distributed Business Administration', body: 'A work mode the catalog never taught at all.' },
    ],
    note: 'Selection bar: demand signal × employer pull × apprenticeship fit. Opinion is the point — a program for everyone serves no employer well.',
  },
  {
    slot: '05', slug: 'demand-wall', kind: 'grid', eyebrow: 'The demand wall', cols: 3,
    title: [{ t: 'Every field is short by six or seven figures of people — ' }, { t: 'and the shortage is the syllabus.', accent: true }],
    items: [
      { chip: 'ADVANCED MANUFACTURING', head: '3.8M needed · 1.9M at risk', body: 'Net need of ~3.8M workers 2024–2033; roughly half could go unfilled. Already an apprenticeship stronghold: 97,500 apprentices served in 2025 (+20% in five years); JFF alone assisted 800+ employers.', cites: ['757e16', 'ee9ca4', '405c2d'] },
      { chip: 'DRONE SCIENCES', head: '$73B → $163.6B (global)', body: 'Global market to 2030 at a 14.3% CAGR, U.S. the largest single market; PwC UK projects 628,000 jobs in the UK drone economy alone — a scale signal for the larger U.S. market.', cites: ['7bb99e', '69bdec'] },
      { chip: 'AI IN BUSINESS OPERATIONS', head: '~90% use AI · 9% mature', body: 'An enormous operationalization gap (McKinsey adoption; Gartner maturity). BCG: 50–55% of U.S. jobs reshaped within 2–3 years — reshaped, not replaced. PwC 2026 Barometer: AI-professionalised jobs growing 2× faster, 42% faster wage growth.', cites: ['42684f', 'da5b04', 'c1cc24', '43d7ac'] },
      { chip: 'DATA CENTER OPERATIONS', head: '46% can’t find candidates', body: 'Global staffing needs near 2.3M roles; ~$6.7T projected global capex by 2030; ~1M direct U.S. jobs. The industry’s own research: remove degree requirements, train on the job.', cites: ['6777be', 'cf95b7', 'e225f4', '3832d4'] },
      { chip: 'REMOTE & DISTRIBUTED ADMIN', head: '25% of paid workdays', body: 'A large, durable, ferociously contested market (46% of applications chased ~10% of postings). Remote work is the accessibility technology behind record disabled employment — yet fully remote workers were promoted 31% less. A job category the catalog never built.', cites: ['a057d7', '44bfd1', '272bb5', 'c356ce', 'c7ebc7'] },
    ],
  },
  {
    slot: '06', slug: 'money', kind: 'grid', eyebrow: 'The money already voted', cols: 4,
    title: [{ t: 'Corporate philanthropy went nine-figure on exactly these fields. ' }, { t: 'None of it yet buys a degree.', accent: true }],
    items: [
      { stat: '$100M', head: 'BlackRock Foundation', body: 'Future Builders — with a $25M RFP run by JFF', cites: ['a25592'] },
      { stat: '$250M', head: 'Lowe’s Foundation', body: '250,000 tradespeople by 2035', cites: ['e33e8d'] },
      { stat: '$115M', head: 'Meta', body: 'America’s Workforce Academy — data-center-adjacent trades', cites: ['e9c685'] },
      { stat: '$90M', head: 'Bloomberg Philanthropies', body: 'National Skilled Trades Initiative atop $570M cumulative CTE', cites: ['65140c'] },
      { stat: '$4B', head: 'Microsoft', body: 'Elevate — 20M AI credentials targeted', cites: ['2d173e'] },
      { stat: '$1B', head: 'Google', body: 'AI training across accredited nonprofit colleges — Reach is eligible', cites: ['611b39'] },
      { stat: '$75M', head: 'Google.org', body: 'AI Opportunity Fund for essential AI skills', cites: ['29691f'] },
    ],
    note: 'Certificates, boot camps, academies — training without the degree. The evidence says the degree is what compounds (the strongest single predictor of lasting job quality). The open position in this wave is the accredited, debt-free, work-embedded degree — and Reach is the only institution accredited to deliver it.',
    noteCites: ['679c9b', '28ded4'],
  },
  {
    slot: '07', slug: 'ask', kind: 'grid', eyebrow: 'What your gift catalyzes',
    title: [{ t: 'Fund the program design — ' }, { t: 'and the employers fund the students.', accent: true }],
    items: [
      { stat: '01', head: 'Co-design backward', body: 'Start from a hiring employer’s role: competencies → curriculum → credit mapping.' },
      { stat: '02', head: 'Launch with the network', body: 'First cohorts stand up with NCAD-network employer partners.', cites: ['4aedc1'] },
      { stat: '03', head: 'Hold the quality bar', body: '150:1 advising, job-embedded faculty — the discipline that made teaching work.', cites: ['57ce95'] },
      { stat: '04', head: 'Employers fund the students', body: 'Candidates are employed from day one; braided revenue covers delivery at scale. Your gift is pure program-launch capital.', cites: ['57ce95'] },
    ],
    note: 'The teaching college took five years to become the national proof point. Each frontier program starts with that chassis, those systems — and a funding wave already paying for everything around it.',
  },
  {
    slot: '08', slug: 'close', kind: 'statement', eyebrow: 'The close',
    title: [{ t: 'In fields this new and moving this fast, academic program design can’t keep up. ' }, { t: 'The only hope is apprenticeship', accent: true }, { t: ' — on-the-job skill development, combined with verified learning and broader industry knowledge.' }],
  },
  {
    slot: '09', slug: 'sources', kind: 'sources',
    title: [{ t: 'Every number in this deck, ' }, { t: 'sourced.', accent: true }],
    lede: 'Citations carry stable hex codes; [n] numbering matches every inline marker in order of first appearance. All figures verified against primary sources 2026-07-28 — including the corrections verification forced (superseded studies replaced, global figures labeled global, one fabricated stat dropped).',
  },
];
