/** Deck content — rural-income-boosts (rib-p1). Single source for Play-UI + PPTX. */
export const META = {
  deckSlug: 'rural-income-boosts',
  variant: 'rib-p1',
  sectionDir: 'rural-income-boosts',
  title: 'Rural Income Boosts: The Raise That Stays',
};

export const SLIDES = [
  {
    slot: '01', slug: 'cover', kind: 'cover',
    eyebrow: 'Reach × Lossless · Strategy Pitch', eyebrowRight: 'Rural Income Boosts · Draft',
    title: [{ t: 'The raise ' }, { t: 'that stays.', accent: true }],
    lede: 'Rural America’s bind is a loop — shortages, low incomes, brain drain. The Apprenticeship Degree breaks it at the hinge of income, in place — and Arkansas already proved it works.',
  },
  {
    slot: '02', slug: 'exit-problem', kind: 'statement', eyebrow: 'The hook',
    title: [{ t: 'Rural America doesn’t have a talent shortage. It has an exit problem — ' }, { t: 'every credential is a bus ticket out.', accent: true }],
    lede: 'The loop is self-reinforcing: chronic shortages (teachers first, then healthcare), no affordable local path to a degree, and the steady out-migration of anyone who earns one — exporting both the talent and the income it would have spent locally.',
    ledeCites: ['542c7f'],
  },
  {
    slot: '03', slug: 'map', kind: 'grid', eyebrow: 'The map',
    title: [{ t: 'In America’s education deserts there is no college within commuting distance. ' }, { t: 'There is always a school.', accent: true }],
    titleCites: ['57ce95'],
    items: [
      { stat: '0–1', body: 'broad-access colleges within commuting distance in an education desert — where Reach grows fastest.' },
      { stat: '36%', body: 'of Reach’s candidates are rural — proof the model reaches where traditional higher ed never did.' },
      { stat: 'Every county', body: 'has a school — full of degree-requiring jobs and committed adults already working in them.' },
    ],
    note: 'Aides, paraprofessionals, coaches, secretaries: the local talent pipeline is already inside the building.',
  },
  {
    slot: '04', slug: 'mechanism', kind: 'grid', eyebrow: 'The mechanism',
    title: [{ t: 'Start with a job, end with a better one — ' }, { t: 'and the raise stays.', accent: true }],
    items: [
      { stat: '01', head: 'Paid throughout', body: 'GAO: earn-and-learn means higher pay, little student debt, better retention.', cites: ['16a15a'] },
      { stat: '02', head: 'The raise is kept', body: 'Debt-free means the wage jump at licensure is net income, not clawed back by loans — worth more where baseline incomes are lower.', cites: ['a94477'] },
      { stat: '03', head: 'Nobody relocates', body: 'The workplace is the campus: credential, raise, and household spending all land in the same county.' },
      { stat: '04', head: 'Completers stay', body: 'Grow-your-own apprentices stay rooted — districts “no longer need job fairs.”', cites: ['a6412b'] },
    ],
    note: 'And a second gear the school and hospital don’t cap: remote & distributed business administration — income that lands in the county without even requiring a local employer. Rural America works from home at half the metro rate (8.1% vs 16.2%) — not for lack of demand (~25% of U.S. paid workdays are now remote) but for lack of the on-ramp. The metro wage arrives without the moving truck.',
    noteCites: ['aabd55', 'a057d7', 'ce4b4f', '91c42b'],
  },
  {
    slot: '05', slug: 'arkansas', kind: 'grid', eyebrow: 'The proof',
    title: [{ t: 'This isn’t a rural hypothesis. It’s an Arkansas result: ' }, { t: 'a ~2.4 effect size on income.', accent: true }],
    titleCites: ['57ce95'],
    items: [
      { stat: '~2.4', body: 'effect size on post-program income (Education Analytics) — causal-analysis-ready at today’s cohort sizes.' },
      { stat: '$20M/yr', body: 'projected aggregate wage gains for current enrollees.' },
      { stat: '80%+', body: 'of the first Arkansas BA cohort stepped straight into full-time teaching at $50,000+ — roughly double their prior wages.' },
      { stat: '½', body: 'Jefferson Parish, LA teacher vacancies — cut in half.' },
    ],
    note: 'Cohort-wide, aide-to-teacher-of-record wage gains run 65–110%.',
    noteCites: ['57ce95'],
  },
  {
    slot: '06', slug: 'arlie', kind: 'grid', eyebrow: 'One life',
    title: [{ t: 'Arlie: her job became her degree, her degree made her a teacher — ' }, { t: 'and her salary doubled.', accent: true }],
    titleCites: ['57ce95'],
    items: [
      { stat: '2001', body: 'Enrolls in college; leaves eighteen months short when family obligations make full-time study impossible.' },
      { stat: '2003–22', body: 'Two decades as a classroom aide and a single mom of four — in classrooms daily, unable to afford going back.' },
      { stat: '2022', body: 'Enrolls at Reach. Keeps her full-time job and benefits; coursework counts her experience and daily work.' },
      { stat: '2024', body: 'Steps into her own classroom at roughly double her aide salary — in the district she served for twenty years.' },
    ],
    note: 'Read it the way a rural economist would: for twenty years the town had a committed educator it couldn’t credential and a wage it couldn’t raise. She was already sitting in the library. Multiply Arlie by every education-desert county with a school full of aides: the raise is real, and it never left town.',
  },
  {
    slot: '07', slug: 'money-map', kind: 'grid', eyebrow: 'The rural money map', cols: 3,
    title: [{ t: 'Rural capital is moving — and it just turned toward education-to-career ' }, { t: 'in Reach’s exact geography.', accent: true }],
    items: [
      { stat: '~$70M/yr', head: 'Walton · Strategy 2030', body: 'Home-region grantmaking re-centered on education-to-career in NW Arkansas and the Arkansas–Mississippi Delta (May 2026).', cites: ['5e224c'] },
      { stat: '$50M+', head: 'MacKenzie Scott’s rural wave', body: 'Native Forward ($50M, largest-ever award in Indian Country) · two rural NC community colleges ($36M) · Northern Oklahoma ($17M) · Fort Peck ($11M) — all unrestricted, all Reach’s peer set.', cites: ['a14f6b', '496a2b', '333d1c', 'b22fe0'] },
      { stat: '$65M', head: 'Scott → LISC', body: 'Largest gift in LISC’s history; its rural program spans 2,000+ counties.', cites: ['9ec98d'] },
      { stat: '$172M', head: 'Ascendium (2025)', body: 'The only durable national rural-postsecondary funder — rural learner success as named strategy.', cites: ['63bbab'] },
      { stat: '$365M+', head: 'Place-based scale', body: 'Dogwood Health Trust (rural WNC) · Lilly GIFT VIII ($312M, all 92 Indiana counties) · Blue Meridian Place Matters ($600M+).', cites: ['5126b2', 'e3b418', 'cca778'] },
      { stat: '$100M', head: 'Corporate rural entry', body: 'Goldman Sachs rural small-business expansion (Alabama & Mississippi cohorts); CoBank’s recurring rural-prosperity grants.', cites: ['bfbdb3', '13929c'] },
    ],
    note: 'Unrestricted mega-gifts now flow to rural two-year institutions; place-rooted funders outspend national rural programs inside their geographies by an order of magnitude. The freshest signal points at the Delta.',
  },
  {
    slot: '08', slug: 'delta', kind: 'grid', eyebrow: 'The convergence',
    title: [{ t: 'Carnegie just funded Reach’s Delta expansion. Walton just aimed its decade at the Delta. ' }, { t: 'The co-funding table is set.', accent: true }],
    items: [
      { chip: 'NATIONAL ANCHOR · IN', body: 'Carnegie Corporation of New York: $2M to expand the teachers college across the Delta and launch Mississippi — the first anchor of the $25M growth campaign.', cites: ['0a146a', '57ce95'] },
      { chip: 'REGIONAL DECADE · AIMED', body: 'Walton’s Strategy 2030 names Delta educator workforce and economic stability as its focus — ~$70M/yr of home-region grantmaking.', cites: ['5e224c'] },
      { chip: 'YOUR SEAT', body: 'A rural funder joining now co-funds alongside a national anchor, in a geography with a shovel-ready launch — the highest-leverage seat in rural education philanthropy this cycle.' },
    ],
  },
  {
    slot: '09', slug: 'ask', kind: 'grid', eyebrow: 'What your gift catalyzes',
    title: [{ t: 'A place-based income engine that funds itself — ' }, { t: 'your gift buys the ignition, not the fuel bill.', accent: true }],
    titleCites: ['57ce95'],
    items: [
      { stat: '$25M / 3yr', body: 'scales 3,400 → 7,500+ enrolled: recurring district cohorts across LA, AR, AL, TN, CA plus the shovel-ready Mississippi launch.' },
      { stat: '~$2,000', body: 'per candidate per year of philanthropy, against a lean $8,037/FTE cost structure.' },
      { stat: '7,500', body: 'enrolled: braided revenue funds the model permanently.' },
      { stat: '$6M / $25M', body: 'already committed — a named stake in the Delta launch, next to Carnegie and Schusterman; founding cohort closes August 2026.' },
    ],
    note: 'Every dollar’s outcome is Arlie’s shape: twenty years an aide, two years a candidate, then teacher-of-record at roughly double the salary — in the district she never left.',
    noteCites: ['57ce95'],
  },
  {
    slot: '10', slug: 'close', kind: 'statement', eyebrow: 'The close',
    title: [{ t: 'Talent doesn’t have to leave to rise. ' }, { t: 'Fund the raise that stays.', accent: true }],
  },
  {
    slot: '11', slug: 'sources', kind: 'sources',
    title: [{ t: 'Every number in this deck, ' }, { t: 'sourced.', accent: true }],
    lede: 'Citations carry stable hex codes in the per-client registry; [n] numbering matches every inline marker, in order of first appearance. All load-bearing figures verified against primary sources 2026-07-28.',
  },
];
