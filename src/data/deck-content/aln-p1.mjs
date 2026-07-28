/** Deck content — adult-literacy-numeracy (aln-p1). Single source for Play-UI + PPTX. */
export const META = {
  deckSlug: 'adult-literacy-numeracy',
  variant: 'aln-p1',
  sectionDir: 'adult-literacy-numeracy',
  title: 'Foundational Capabilities, Measured Improvements',
};

export const SLIDES = [
  {
    slot: '01', slug: 'cover', kind: 'cover',
    eyebrow: 'Reach × Lossless · Strategy Pitch', eyebrowRight: 'Adult Literacy & Numeracy · Draft',
    title: [{ t: 'Foundational capabilities, ' }, { t: 'measured improvements.', accent: true }],
    lede: 'Foundational skills woven into the work, sized for the moments working adults actually have, measured continuously by audio AI — the first university where literacy and numeracy improvements are real, visible, and compounding.',
  },
  {
    slot: '02', slug: 'hook', kind: 'statement', eyebrow: 'The hook',
    title: [{ t: 'The labor market pays for the skill, ' }, { t: 'not the diploma.', accent: true }],
    lede: 'Across 23 countries of PIAAC data, a one-standard-deviation gain in numeracy is associated with ~18% higher wages for prime-age workers — and 28% in the United States, the highest return in the study. America has both the biggest skills penalty and the biggest skills payoff.',
    ledeCites: ['28f12b', '2b7e6d'],
  },
  {
    slot: '03', slug: 'below-the-line', kind: 'grid', eyebrow: 'Who’s below the line',
    title: [{ t: 'Most working adults are below proficiency in exactly the skills ' }, { t: 'the market prices highest.', accent: true }],
    items: [
      { stat: '19% → 28%', body: 'of U.S. adults read at Level 1 or below — more than 1 in 4, up nine points from 2017 to 2023. The trend is the headline.', cites: ['24ff0f', 'a182e2'] },
      { stat: '44% · 38%', body: 'reached Level 3+ in literacy · numeracy respectively (PIAAC 2023); average scores declined significantly from 2017.', cites: ['24ff0f', 'd67dcb'] },
      { stat: '62% · 74%', body: 'of frontline service-sector workers (retail, food service, health & social assistance) score below Level 3 in literacy · numeracy respectively — the Apprenticeship Degree’s core population.', cites: ['a73ccd', 'd461ae'] },
    ],
  },
  {
    slot: '04', slug: 'turn', kind: 'grid', eyebrow: 'The turn',
    title: [{ t: 'K-12 spent twenty years learning what works and how to measure it. ' }, { t: 'Postsecondary never tried — because the degree assumes.', accent: true }],
    lede: 'K-12 rebuilt reading around the science of reading — evidence-based practice and relentless measurement: screeners, benchmarks, growth tracking. Higher ed adopted none of it. The diploma lands, the reading and math may not have moved — and no one notices, because no one measured.',
    ledeCites: ['cd9feb'],
    items: [
      { chip: 'WHAT POSTSECONDARY TRIES', body: 'Remediation is diversion, not development: rigorous evidence finds pull-out developmental courses do little to build skills — their primary effect is diverting students away from college-level work.', cites: ['f2068b'] },
      { chip: 'THE COUNTERPOINT', body: 'In a CUNY randomized trial, students placed directly into college-level statistics with support passed at a 16-point higher rate and earned more credits.', cites: ['4a210e'] },
      { chip: 'THE BREAKTHROUGH', body: 'Applied, relevant, contextual practice has heretofore not been deliverable to working adults at scale. We think we can create a breakthrough. The next two slides are how.' },
    ],
  },
  {
    slot: '05', slug: 'pedagogy', kind: 'grid', eyebrow: 'The good news',
    title: [{ t: 'The science of reading rebuilt children’s literacy. It’s now reaching adults — ' }, { t: 'and the delivery vehicle already exists.', accent: true }],
    items: [
      { chip: 'THE EVIDENCE BASE', body: 'The validated science-of-reading base is being adapted for adult learners, and IES evidence reviews catalog contextualized, work-embedded numeracy strategies that outperform decontextualized drill.', cites: ['cd9feb', '95f776'] },
      { chip: 'THE MISSING PIECE — SOLVED', body: 'What foundational-skills instruction always lacked was a vehicle: a place where working adults are already enrolled, persisting, and applying skills daily. The Apprenticeship Degree teaches in the flow of work by design.', cites: ['57ce95'] },
    ],
  },
  {
    slot: '06', slug: 'recipe', kind: 'grid', eyebrow: 'The recipe',
    title: [{ t: 'Woven into the work, aimed at the raise, sized for the moments they have — ' }, { t: 'measured as it goes.', accent: true }],
    items: [
      { head: 'Contextually relevant', body: 'The reading is the curriculum guide, the parent email, the medication chart; the math is the classroom count, the dosage, the paycheck — the approach the evidence favors over decontextualized drill.', cites: ['95f776'] },
      { head: 'Aimed at the raise', body: 'Every gain advances a real credential toward a real raise — 65–110% at licensure — so motivation never has to be manufactured.', cites: ['57ce95'] },
      { head: 'Interstitial', body: 'Working adults don’t have semesters; they have shift breaks, commutes, and in-between moments. Instruction sized for those moments is instruction that happens.' },
      { head: 'Continuously measured', body: 'Ongoing mobile instruction produces ongoing measurement — assessment becomes exhaust from the instruction itself: a growth curve per candidate, per cohort, in real time.' },
    ],
    note: 'Audio-based AI makes this buildable now. A spoken micro-lesson on the commute; a voice check-in after a shift; fluency, comprehension, and number sense evaluated from natural speech. What used to be difficult and blunt becomes API-implementable and precise — the same voice-first thesis as the NCAD Forge.',
  },
  {
    slot: '07', slug: 'vehicle', kind: 'grid', eyebrow: 'The vehicle', cols: 3,
    title: [{ t: 'We’re not proposing a literacy program that needs students. ' }, { t: 'We have 3,400 — with 93% retention.', accent: true }],
    titleCites: ['57ce95'],
    items: [
      { stat: '3,400+', body: 'candidates across 8 states' },
      { stat: '93%', body: 'retention post first term' },
      { stat: '70%', body: 'on-time completion vs ~50% nationally' },
      { stat: '65%', body: 'Pell-eligible · 48% of color · 36% rural' },
      { stat: '$75/mo', body: 'maximum out-of-pocket, zero debt' },
      { stat: '65–110%', body: 'wage gains at licensure' },
    ],
    note: 'Add a measured foundational-skills layer to this machine and every point of literacy/numeracy gain compounds into the wage outcome the evidence promises.',
    noteCites: ['28f12b'],
  },
  {
    slot: '08', slug: 'landscape', kind: 'grid', eyebrow: 'The field',
    title: [{ t: 'Adult literacy is philanthropy’s most under-capitalized lane — ' }, { t: 'which makes measured improvement the differentiator worth funding.', accent: true }],
    items: [
      { stat: '$10.6M → ~$16M', head: 'Dollar General Literacy Foundation', body: 'The anchor funder, escalating — record one-day adult/family literacy rounds 2024 → 2026, incl. GED/HSE support at colleges.', cites: ['79319a', '90ad13', '3f6fb6'] },
      { stat: 'Relaunched 2025', head: 'Barbara Bush Fund for Family Literacy', body: 'National grantmaking fund — two-generation family literacy, exactly the parent-learner demographic Reach serves.', cites: ['69fa84'] },
      { stat: '$1–2M each', head: 'MacKenzie Scott’s Open Call', body: 'Unrestricted gifts to community adult-literacy providers — the largest infusion those organizations have ever seen.', cites: ['b8a0cd'] },
      { stat: '≤ $6,000', head: 'The typical grant in this lane', body: 'Federal adult-education funding collapsed from ~$1B (2005) to ~$190M (2024), so philanthropy micro-backfills — the field’s own re-granting fund caps at $6,000 per grant. No scalable, measured flagship exists. That’s the opening.', cites: ['e174dc'] },
    ],
  },
  {
    slot: '09', slug: 'ask', kind: 'grid', eyebrow: 'What your gift catalyzes',
    title: [{ t: 'Fund measured improvements: skills woven into the work, growing as they ' }, { t: 'are measured — visible at graduation.', accent: true }],
    items: [
      { stat: '01', head: 'Adapt the curricula', body: 'Science-of-reading and contextualized-numeracy instruction folded into Reach’s tutorial sequence.', cites: ['cd9feb', '95f776'] },
      { stat: '02', head: 'Build the audio-AI layer', body: 'Instruction and assessment that fit candidates’ interstitial moments — spoken micro-lessons, voice check-ins, growth curves.' },
      { stat: '03', head: 'Report per cohort', body: 'Public, PIAAC-aligned skill-gain reporting: an auditable answer to “did the basics actually improve?” — attached to thousands of candidates whose wage outcomes are already tracked.', cites: ['57ce95'] },
      { stat: '04', head: 'Share with the movement', body: 'What works — curricula, instruments, and wherever possible the delivery technology — flows to the wider NCAD community. One grant, one proof, a movement’s worth of adoption.', cites: ['4aedc1'] },
    ],
    note: 'A modest grant here doesn’t run a literacy program — it makes Reach the first university whose foundational-skills improvements are measured and real, and hands the adult-literacy field its proof-of-improvement flagship.',
  },
  {
    slot: '10', slug: 'two-generation', kind: 'grid', eyebrow: 'The payoff',
    title: [{ t: 'Teach a parent to read better, and you’ve made ' }, { t: 'two investments.', accent: true }],
    items: [
      { chip: 'THE STATISTICS', body: 'An NIH-funded study of 3,000+ families found a mother’s reading skill was the single strongest predictor of her children’s later academic success — ahead of neighborhood and family income. OECD analysis shows parental background predicts adult skills more strongly in the U.S. than in almost any other surveyed country.', cites: ['4872f7', '6a9ca0'] },
      { chip: 'THE POPULATION', body: 'Reach’s candidates are parents, working as paraprofessionals in the schools their own children attend. A measured literacy gain lands twice — once in the candidate’s paycheck, once at their kitchen table. This is the family-literacy thesis the Barbara Bush Fund exists to fund.', cites: ['57ce95', '69fa84'] },
    ],
  },
  {
    slot: '11', slug: 'close', kind: 'statement', eyebrow: 'The close',
    title: [{ t: 'Millions completed programs. Fewer gained the skills. We’ll weave the skills into the work, measure the improvement — ' }, { t: 'and watch it show up in their children.', accent: true }],
  },
  {
    slot: '12', slug: 'sources', kind: 'sources',
    title: [{ t: 'Every number in this deck, ' }, { t: 'sourced.', accent: true }],
    lede: 'Citations carry stable hex codes in the per-client registry; [n] numbering matches every inline marker, in order of first appearance. All load-bearing figures verified against primary sources 2026-07-28.',
  },
];
