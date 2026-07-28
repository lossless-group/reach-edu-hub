/** Deck content — workforce-development (wd-p1). Single source for Play-UI + PPTX. */
export const META = {
  deckSlug: 'workforce-development',
  variant: 'wd-p1',
  sectionDir: 'workforce-development',
  title: 'Workforce Development: Stop Training and Praying',
};

export const SLIDES = [
  {
    slot: '01', slug: 'cover', kind: 'cover',
    eyebrow: 'Reach × Lossless · Strategy Pitch', eyebrowRight: 'Workforce Development · Draft',
    title: [{ t: 'Stop training and praying. ' }, { t: 'Fund the model the evidence chose.', accent: true }],
    lede: 'The workforce system was built for employer demand, not worker mobility. The Apprenticeship Degree is the only model that stacks every proven design feature — at the exact moment federal policy aligned behind it.',
  },
  {
    slot: '02', slug: 'train-and-pray', kind: 'statement', eyebrow: 'The hook',
    title: [{ t: 'America’s workforce system has a name for its own failure mode: ' }, { t: 'train and pray.', accent: true }],
    titleCites: ['b22ccf'],
    lede: 'Workers complete the program, collect the certificate, and hope something materializes. It’s endemic — and the federal government now says so itself: fragmentation, credentials without ladders, no accountability for outcomes.',
    ledeCites: ['2e54ee'],
  },
  {
    slot: '03', slug: 'cost', kind: 'grid', eyebrow: 'The cost of praying',
    title: [{ t: '21 million prime-age Americans are out. The system built to reach them ' }, { t: 'can’t.', accent: true }],
    items: [
      { stat: '21M+', body: 'Americans ages 25–54 not participating in the labor force.', cites: ['2e54ee'] },
      { stat: '44%', body: 'of Americans face at least one major barrier to upskilling — childcare, transportation, income disruption.', cites: ['b22ccf'] },
      { stat: '1.5M', body: 'unfilled openings in teaching and healthcare alone — good jobs requiring degrees, empty in workers’ own communities.', cites: ['57ce95'] },
    ],
    note: 'And the why: the vast majority cite disability or caregiving — for prime-age men, disability is the single largest factor. A commute-based system structurally cannot reach them; remote work can — which is why a remote & distributed business administration pathway belongs in the rebuild.',
    noteCites: ['496b0f', '272bb5'],
  },
  {
    slot: '04', slug: 'evidence', kind: 'grid', eyebrow: 'The evidence turn',
    title: [{ t: 'A 3,928-person longitudinal study followed young adults for a decade — ' }, { t: 'and told us what works.', accent: true }],
    titleCites: ['679c9b'],
    items: [
      { stat: '+0.18', body: 'Relationship-based work-based learning (apprenticeship, co-op, mentoring) predicts job quality a decade later — and the effect persists as others fade.' },
      { stat: '0', body: 'Non-relationship CTE predicts nothing: job shadowing, career majors, tech prep — not significant. The supervising-adult relationship is the active ingredient.' },
      { stat: '+0.37', body: 'Training at ages 24–27: the single strongest training effect — precisely the Apprenticeship Degree’s population.' },
      { stat: '+0.90', body: 'A completed postsecondary degree: the strongest predictor of lasting job quality in the entire dataset.' },
    ],
    note: 'The federal auditor agrees on the delivery model — earn-and-learn: higher pay, little debt, better retention. The Apprenticeship Degree is the only model that stacks every feature the evidence endorses — at once.',
    noteCites: ['16a15a'],
  },
  {
    slot: '05', slug: 'kpi-wall', kind: 'grid', eyebrow: 'Proof, not pilot', cols: 4,
    title: [{ t: 'Five years, 3,400 candidates, 550 employers — ' }, { t: 'outcomes that beat the benchmarks.', accent: true }],
    titleCites: ['57ce95'],
    items: [
      { stat: '93%', body: 'retention post first term' },
      { stat: '70%', body: 'on-time completion vs ~50% nationally' },
      { stat: '65–110%', body: 'wage gains, aide → teacher-of-record' },
      { stat: '60+', body: 'candidate NPS vs sector benchmark 32' },
      { stat: '~2.4', body: 'measured effect size on post-program income (Education Analytics, Arkansas)' },
      { stat: '$20M/yr', body: 'projected aggregate wage gains for current enrollees' },
      { stat: '½', body: 'Jefferson Parish teacher vacancies cut in half' },
      { stat: '$75/mo', body: 'maximum out-of-pocket — zero student debt' },
    ],
    note: 'The field has noticed: the Urban Institute’s scaling framework builds on Reach as its lead case, and Inside Higher Ed calls Reach the nation’s only accredited apprenticeship-degree university.',
    noteCites: ['7d47c7', '28ded4'],
  },
  {
    slot: '06', slug: 'money', kind: 'grid', eyebrow: 'Follow the money', cols: 4,
    title: [{ t: 'Corporate philanthropy went nine-figure on workforce — funding everything around the degree ' }, { t: 'except the degree.', accent: true }],
    items: [
      { stat: '$250M', head: 'Bloomberg (2024)', body: 'Healthcare high schools — employer-embedded pipelines', cites: ['a2ceba'] },
      { stat: '$90M', head: 'Bloomberg (2026)', body: 'National Skilled Trades Initiative; $570M cumulative CTE', cites: ['65140c'] },
      { stat: '$250M', head: 'Lowe’s Foundation', body: '250,000 tradespeople by 2035', cites: ['e33e8d'] },
      { stat: '$100M', head: 'BlackRock (2026)', body: 'Future Builders; JFF runs a $25M RFP', cites: ['a25592'] },
      { stat: '$115M', head: 'Meta (2026)', body: 'America’s Workforce Academy, fast-track trades', cites: ['e9c685'] },
      { stat: '$20M · $42M', head: 'MacKenzie Scott', body: 'JFF; 10,000 Degrees — unrestricted, mobility-screened', cites: ['b585ef', '7ec216'] },
      { stat: '$172M', head: 'Ascendium (2025)', body: 'Community colleges, sectoral training, rural learners', cites: ['63bbab'] },
      { stat: '$17M · $16M', head: 'Bloomberg / Arnold', body: 'Largest-ever gifts to community colleges (HCC, Maricopa)', cites: ['a26016'] },
    ],
    note: 'Every row funds training, pipelines, or completion around the degree. The piece the system lacks — degree-bearing, employer-embedded, debt-free — is what Reach has already accredited and proven. Skills-first money and career-navigation bets reward exactly a model that certifies competence through work.',
    noteCites: ['2af56e', 'f9c42b'],
  },
  {
    slot: '07', slug: 'federal', kind: 'grid', eyebrow: 'The federal moment',
    title: [{ t: 'Washington just aligned behind apprenticeship. ' }, { t: 'Philanthropy picks who scales.', accent: true }],
    items: [
      { head: '1M apprentices', body: 'A federal target for active Registered Apprentices — executive-order-level commitment, funding to match.', cites: ['2e54ee'] },
      { head: 'Workforce Pell', body: 'Pell-eligible short-term credential programs tied to labor-market outcomes for the first time — new money that flows toward quality.', cites: ['2e54ee'] },
      { head: '30 → 200+', body: 'Community-college apprenticeship sponsors, 2016 → 2023 — the delivery infrastructure is scaling.', cites: ['6f1dc8'] },
      { head: 'WIOA drift', body: 'Reauthorization direction: pay-for-performance, integrated systems, apprenticeship as a primary pathway.', cites: ['2e54ee'] },
    ],
    note: 'Public money follows quality vehicles; the catalytic role of philanthropy is making sure the highest-evidence vehicle reaches self-sustaining scale first.',
  },
  {
    slot: '08', slug: 'ask', kind: 'grid', eyebrow: 'What your gift catalyzes',
    title: [{ t: '$25M turns the proof point into the tipping point — then the model ' }, { t: 'never needs philanthropy again.', accent: true }],
    titleCites: ['57ce95'],
    items: [
      { stat: '$25M / 3yr', body: 'scales enrollment 3,400 → 7,500+ — proof point to tipping point.' },
      { stat: '$8,037', body: 'internal cost per FTE — below WGU ($8,961), a fraction of the $52,900 public 4-year average.' },
      { stat: '7,500', body: 'enrolled: braided revenue (Pell + $75/mo + employers) reaches permanent self-funding.' },
      { stat: '$6M', body: 'committed — Carnegie ($2M) + Schusterman ($1M) anchoring; August 2026 closes the founding cohort.' },
    ],
    note: 'You’ve funded workforce programs that trained and prayed. This is the one the evidence — and the auditor, and the field’s own literature — says will hold.',
  },
  {
    slot: '09', slug: 'close', kind: 'statement', eyebrow: 'The close',
    title: [{ t: 'Stop funding training and praying. ' }, { t: 'Fund the model the evidence already chose.', accent: true }],
  },
  {
    slot: '10', slug: 'sources', kind: 'sources',
    title: [{ t: 'Every number in this deck, ' }, { t: 'sourced.', accent: true }],
    lede: 'Citations carry stable hex codes in the per-client registry; [n] numbering matches every inline marker, in order of first appearance. All load-bearing figures verified against primary sources 2026-07-28.',
  },
];
