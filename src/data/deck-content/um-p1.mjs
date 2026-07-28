/**
 * Deck content — upward-mobility (um-p1), Play-UI + PPTX single source.
 * Transcribed from src/layouts/sections/upward-mobility/*.astro (Scroll-UI).
 * Citations: hex codes resolve to [n] via that deck's citations.ts DEFS order.
 */
export const META = {
  deckSlug: 'upward-mobility',
  variant: 'um-p1',
  sectionDir: 'upward-mobility',
  title: 'Upward Mobility: The Mobility Engine',
};

export const SLIDES = [
  {
    slot: '01', slug: 'cover', kind: 'cover',
    eyebrow: 'Reach × Lossless · Strategy Pitch', eyebrowRight: 'Upward Mobility · Draft',
    title: [{ t: 'The mobility engine, ' }, { t: 'rebuilt for the people it filtered out', accent: true }, { t: '.' }],
    lede: 'America still has a mobility engine — the degree. What broke is the on-ramp. The Apprenticeship Degree rebuilds it: climb while working, without borrowing, without leaving.',
  },
  {
    slot: '02', slug: 'arlie', kind: 'grid', eyebrow: 'The hook',
    title: [{ t: 'Arlie spent twenty years as a library aide. Her job became her degree — ' }, { t: 'and her salary doubled.', accent: true }],
    titleCites: ['57ce95'],
    items: [
      { stat: '2001', body: 'Enrolls in college; leaves 18 months short when family obligations make full-time study impossible.' },
      { stat: '2003–22', body: 'Two decades as a library aide — a single mom of four, in classrooms every day, unable to afford going back.' },
      { stat: '2022', body: 'Enrolls at Reach. Keeps her full-time job and benefits; her daily work counts toward the degree.' },
      { stat: '2024', body: 'Teacher of record — at roughly double her aide salary, in the district she served for twenty years.' },
    ],
    note: 'This pitch is about rebuilding the on-ramp Arlie found — at scale, with your help.',
  },
  {
    slot: '03', slug: 'problem', kind: 'grid', eyebrow: 'The problem',
    title: [{ t: 'Millions locked out of mobility — while degree-requiring jobs ' }, { t: 'sit empty in their own communities.', accent: true }],
    titleCites: ['57ce95'],
    items: [
      { stat: '40M', body: 'American adults with some college, no degree — placebound in entry-level jobs.' },
      { stat: '4.8M', body: 'students in school buildings where classrooms lack a certified teacher.' },
      { stat: '1.5M', body: 'unfilled openings in teaching and healthcare — good jobs that require a degree.' },
      { stat: '$55K', body: 'average loan debt for a new teacher, against $1.8T national student debt.' },
    ],
    note: 'Two failed offers made this. Campus-based: quit, borrow, relocate, maybe graduate. Online, for the last twenty years: borrow, struggle for time, maybe graduate with debt and a low ROI. Two generations of “access” — and in both, the learner holds the downside.',
  },
  {
    slot: '04', slug: 'insight', kind: 'statement', eyebrow: 'The insight',
    title: [{ t: 'What if your job led to your degree — ' }, { t: 'not the other way around?', accent: true }],
    titleCites: ['57ce95'],
    lede: 'In every county in America there is a school — and usually a hospital — full of good jobs that require degrees, staffed by committed adults who don’t have one. Coaches, library aides, paraprofessionals, nursing assistants. They are already the talent pipeline.',
  },
  {
    slot: '05', slug: 'abcs', kind: 'grid', eyebrow: 'The model',
    title: [{ t: 'The workplace becomes the learning place. The degree comes with ' }, { t: 'a raise, not a loan.', accent: true }],
    titleCites: ['57ce95'],
    items: [
      { head: 'A — Affordability by design', body: 'No candidate pays more than $75/month. Zero student debt — engineered, not aspired to.' },
      { head: 'B — Based in the workplace', body: 'From day one to graduation day, candidates keep their full-time job, income, and benefits. Employers recruit the students.' },
      { head: 'C — Credit for work', body: 'Roughly half the degree comes from the job itself; half from live online tutorials taught by job-embedded Professors of Practice.' },
    ],
    note: 'Completing the credential from a paraprofessional role is close to a guaranteed pay bump — Reach’s aide-to-teacher-of-record cohorts realize 65–110% wage gains.',
    noteCites: ['57ce95'],
  },
  {
    slot: '06', slug: 'kpi-wall', kind: 'grid', eyebrow: 'Proof, not pilot', cols: 4,
    title: [{ t: 'Five years in: the nation’s leading proof point — ' }, { t: 'beating the benchmarks that matter.', accent: true }],
    titleCites: ['57ce95'],
    items: [
      { stat: '3,400+', body: 'candidates enrolled across 8 states' },
      { stat: '550', body: 'school districts & networks as employer partners' },
      { stat: '93%', body: 'retention, semester after first term' },
      { stat: '70%', body: 'on-time completion vs ~50% nationally' },
      { stat: '65–110%', body: 'wage gain, aide → teacher-of-record' },
      { stat: '60+', body: 'candidate NPS vs sector benchmark of 32' },
      { stat: '65%', body: 'Pell-eligible · 48% candidates of color · 36% rural' },
      { stat: '$75/mo', body: 'maximum out-of-pocket — zero student debt' },
    ],
    note: 'Third-party: Education Analytics measured a ~2.4 effect size on post-program income in Arkansas — causal-analysis-ready at today’s cohort sizes — with ~$20M/yr in projected aggregate wage gains. Over 80% of the first Arkansas BA cohort stepped straight into full-time teaching at $50,000+; Jefferson Parish, LA credits Reach with halving teacher vacancies.',
    noteCites: ['57ce95'],
  },
  {
    slot: '07', slug: 'evidence-stack', kind: 'grid', eyebrow: 'The science agrees',
    title: [{ t: 'Not a hypothesis that needs proving — the implementation of ' }, { t: 'what the evidence already proved.', accent: true }],
    items: [
      { stat: '+0.90', body: 'A completed postsecondary degree is the strongest predictor of lasting job quality — nearly a full index point vs no diploma (3,928 young adults followed to age 29).', cites: ['679c9b'] },
      { stat: '+0.18', body: 'Relationship-based work-based learning predicts job quality a decade later; job shadowing and classroom-only CTE do not.', cites: ['679c9b'] },
      { stat: '+0.37', body: 'Training between ages 24–27 — exactly Reach’s population — is the strongest training effect in the data.', cites: ['679c9b'] },
      { stat: 'GAO', body: 'The federal auditor on earn-and-learn: higher pay, little student debt, better retention.', cites: ['16a15a'] },
    ],
    note: 'The field has certified the model: PPI wrote the mobility case; the Urban Institute’s scaling framework builds on Reach as its lead case; Inside Higher Ed names Reach the country’s only accredited apprenticeship-degree university.',
    noteCites: ['a94477', '9ce917', '7d47c7', '28ded4'],
  },
  {
    slot: '08', slug: 'ladder', kind: 'grid', eyebrow: 'The expansion', cols: 4,
    title: [{ t: 'Wherever a paraprofessional tier sits below a credentialed tier, ' }, { t: 'the engine applies.', accent: true }],
    lede: 'Teachers were the proof — not the limit. Reach has already stepped into health; the demand wall says where the ladder goes next.',
    ledeCites: ['3f891a'],
    items: [
      { chip: 'ELDERCARE · CLOSEST RUNG', head: '~765,800 openings/yr', body: 'Home health & personal care aides — the largest numeric job growth of any U.S. occupation, at a median of $34,900; nursing assistants add ~211,800/yr. PHI counts 8.9M direct-care openings 2022–2032 at $25,015 median earnings, while the 65+ population climbs from 61.2M toward 82M.', cites: ['c94ece', '20ec38', 'fecd96', 'ef6763'], kicker: 'Five million people already do this work. The credential ladder out of it doesn’t exist yet. That’s Arlie’s story, waiting to happen in eldercare.' },
      { chip: 'ADVANCED MANUFACTURING', head: '3.8M needed · 1.9M at risk', body: 'Net need of ~3.8M new manufacturing workers 2024–2033, roughly half at risk of going unfilled — against an apprenticeship base already 97,500 strong and growing 20% in five years.', cites: ['757e16', 'ee9ca4'] },
      { chip: 'DATA CENTER OPERATIONS', head: '46% can’t find candidates', body: 'The AI buildout needs people, not just power: global staffing near 2.3M roles, ~$6.7T projected global capex by 2030, ~1M direct U.S. jobs — and the industry’s own research says: remove degree requirements, train on the job.', cites: ['6777be', 'cf95b7', 'e225f4', '3832d4'] },
      { chip: 'REMOTE & DISTRIBUTED ADMIN', head: 'The unseen workforce', body: '1 in 4 U.S. adults has a disability; 22.8% employed vs 65.2% without. Remote work is an accessibility technology — WFH explains 68–85% of the record rise in full-time disability employment — yet remote workers performed 13% better and were promoted about half as often. The craft of distributed work is teachable, and untaught.', cites: ['23cb42', 'b75cb3', '272bb5', 'c7ebc7', 'c356ce'] },
    ],
    note: 'Of the 21M+ prime-age Americans out of the labor force, the vast majority cite disability or caregiving — constraints these ladders are built to lower.',
    noteCites: ['2e54ee', '496b0f'],
  },
  {
    slot: '09', slug: 'moment', kind: 'grid', eyebrow: 'The moment',
    title: [{ t: 'Philanthropy just reorganized around one outcome: ' }, { t: 'economic mobility.', accent: true }],
    items: [
      { stat: '$1B', head: 'NextLadder Ventures', body: '15-year fund for the economic mobility of low-income Americans — Ballmer, Gates, Stand Together, Valhalla, Overdeck.', cites: ['5f42a8'] },
      { stat: '$600M+', head: 'Blue Meridian · Place Matters', body: 'Place-based portfolios built on economic-mobility outcomes.', cites: ['cca778'] },
      { stat: '$1.1B+', head: 'MacKenzie Scott, 2025 higher ed', body: 'Of a $7.2B year — HBCUs, tribal and community colleges, access orgs; elite universities bypassed entirely. Continuing into 2026.', cites: ['d1d74b'] },
      { stat: '2040', head: 'Lumina’s national goal', body: '75% of the labor force holding credentials of labor-market value — mobility, not enrollment, as the metric.', cites: ['6aca82'] },
    ],
    note: 'Scott’s education-to-career gifts read as a mobility screen — $42M to 10,000 Degrees, $20M to JFF, $50M to Native Forward — a run still live in 2026. And the debt-free degree is a proven mega-gift category: Gottesman’s $1B at Einstein, Bloomberg’s $1B at Hopkins. Both in medicine. Nobody has written that check for the 40 million working adults.',
    noteCites: ['7ec216', 'b585ef', 'a14f6b', 'f868ef', '3c9545', '3bc2ca', '1a4b17'],
  },
  {
    slot: '10', slug: 'gap', kind: 'grid', eyebrow: 'The catalytic ask',
    title: [{ t: 'The model is validated. The field is under-capitalized. ' }, { t: 'The flagship bet is still open.', accent: true }],
    lede: 'Mobility capital reaches apprenticeship degrees today as $1–2M program grants — Carnegie’s Delta expansion, Goodness Web’s behavioral-health pathway — while funders go 8–9 figures for this exact outcome when a credible vehicle exists.',
    ledeCites: ['0a146a', '7d0be0', '672e9a', '63bbab'],
    items: [
      { stat: '$25M', body: 'over 3 years carries Reach from proof point (3,400) to self-sustaining, evaluation-ready scale (7,500+).' },
      { stat: '~$2,000', body: 'per candidate per year — against an internal cost of $8,037/FTE, already below WGU and SNHU, a fraction of the $52,900 public 4-year average.' },
      { stat: '7,500', body: 'enrolled: braided revenue (Pell + $75/mo + employers) funds the model permanently. Philanthropy is then no longer required.' },
      { stat: '$6M', body: 'already committed — Carnegie ($2M) and Schusterman ($1M) anchoring. August 2026 closes the founding growth-partner cohort.' },
    ],
    note: 'Stated plainly: your gift is not charity for a program — it is the last philanthropic dollar the mobility engine ever needs. Then 10,000 working adults turn jobs into degrees by 2030, and the 2035 moonshot — 3 million apprenticeship-degree starts — has its proven chassis.',
    noteCites: ['4aedc1', '57ce95'],
  },
  {
    slot: '11', slug: 'close', kind: 'statement', eyebrow: 'Join the revolution',
    title: [{ t: 'Make the workplace the learning place — and the American Dream ' }, { t: 'reachable for all.', accent: true }],
    titleCites: ['57ce95'],
    lede: 'One person’s climb is a two-generation event. Forty million people are waiting at the on-ramp. The engine works, the evidence is in, the anchors are in the boat. What’s next is scale — and scale is what your gift catalyzes.',
  },
  {
    slot: '12', slug: 'sources', kind: 'sources',
    title: [{ t: 'Every number in this deck, ' }, { t: 'sourced.', accent: true }],
    lede: 'Citations carry stable hex codes in the per-client registry; [n] numbering matches every inline marker, in order of first appearance. All load-bearing figures verified against primary sources 2026-07-28.',
  },
];
