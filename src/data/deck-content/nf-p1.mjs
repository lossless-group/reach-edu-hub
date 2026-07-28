/** Deck content — ncad-forge (nf-p1). Single source for Play-UI + PPTX. */
export const META = {
  deckSlug: 'ncad-forge',
  variant: 'nf-p1',
  sectionDir: 'ncad-forge',
  title: 'NCAD Forge: Charter the Lab',
};

export const SLIDES = [
  {
    slot: '01', slug: 'cover', kind: 'cover',
    eyebrow: 'Reach × Lossless · Strategy Pitch', eyebrowRight: 'NCAD Forge · Draft',
    title: [{ t: 'Charter ' }, { t: 'the Forge.', accent: true }],
    lede: 'The Apprenticeship Degree runs on a technology stack nobody built — and the people who understand it can now prototype it themselves. Domain experts prototype, engineers harden, the movement keeps the IP.',
  },
  {
    slot: '02', slug: 'hook', kind: 'statement', eyebrow: 'The hook',
    title: [{ t: 'The Apprenticeship Degree runs on a different stack — ' }, { t: 'and nobody built it.', accent: true }],
    lede: 'A degree where day-to-day work is the curriculum needs software few incumbents ever built: work-and-learning integration, employer visibility, chunked assessment for people whose learning windows are shift breaks and commutes — all accreditation-legible. Legacy LMS, SIS, and online-program platforms each cover a slice. None cover the whole.',
    ledeCites: ['4847ba'],
  },
  {
    slot: '03', slug: 'who-builds', kind: 'grid', eyebrow: 'The shift',
    title: [{ t: 'Vibe coding moved prototyping from the engineering backlog to ' }, { t: 'the domain expert’s desk.', accent: true }],
    items: [
      { chip: 'UNTIL ~2025', body: 'A domain insight became software only by hiring an engineering team — the expensive gate that kept the apprenticeship stack unbuilt.' },
      { chip: 'NOW', body: 'Agentic tools matured to where non-engineers ship working prototypes — Cursor, v0, Lovable, Bolt, Replit Agent, Claude Code.', cites: ['b71a46', '8cb194', 'e76b45'] },
      { chip: 'STILL TRUE', body: 'Engineers still own hardening, scale, and security — but they are no longer the gate on prototyping.', cites: ['3675cf'] },
    ],
    note: 'The people who actually know what the apprenticeship stack needs — practitioners, industry-skills experts, adult educators — can now build the first version of the thing they understand.',
  },
  {
    slot: '04', slug: 'five-counts', kind: 'grid', eyebrow: 'Why experts win', cols: 3,
    title: [{ t: 'The expert-built version wins ' }, { t: 'on five counts.', accent: true }],
    items: [
      { stat: '01', head: 'More accurate product definition', body: 'Specified by someone who lives the problem — not a requirements doc translated twice.' },
      { stat: '02', head: 'Closer understanding of the use case', body: 'Accreditation legibility, shift schedules, a supervisor’s real day — known up front, not discovered in month six.' },
      { stat: '03', head: 'Faster to the end-user’s hands', body: 'The builder works beside the users; prototypes land in a real cohort in days, not after a procurement cycle.' },
      { stat: '04', head: 'Richer stakeholder feedback', body: 'Apprentices, supervisors, registrars give candid feedback to a trusted colleague — a same-week loop, not next-contract.' },
      { stat: '05', head: 'Authentic motivation', body: 'Not an engineer doing their job — a visionary realizing a vision. The builder has waited years for this tool to exist; that energy survives the tenth iteration.' },
    ],
  },
  {
    slot: '05', slug: 'why-ncad', kind: 'grid', eyebrow: 'The home',
    title: [{ t: 'One network, one lab — ' }, { t: 'so no member rebuilds what another already proved.', accent: true }],
    lede: 'NCAD — launched by Reach — already runs partnership development and employer engagement across a member network, anchoring the 3-million-completions-by-2035 moonshot. Many institutions hit the same stack gaps independently; a neutral center pools the prototypes so the network compounds instead of duplicating.',
    ledeCites: ['97559d', 'a42a6b', 'ef66be', '4aedc1', '57ce95'],
    items: [
      { chip: 'SHARED PROBLEM', body: 'Every member needs work↔credit mapping, employer visibility, chunked assessment, evidence capture.' },
      { chip: 'NEUTRAL CENTER', body: 'Prototypes circulate through NCAD; no single member owns or gates the commons.' },
      { chip: 'COMPOUNDING NETWORK', body: 'Each proof lifts every current and future member of the apprenticeship-degree movement at once.' },
    ],
  },
  {
    slot: '06', slug: 'first-builds', kind: 'grid', eyebrow: 'First builds',
    title: [{ t: 'Four stack gaps, ' }, { t: 'one distinctive wedge: voice.', accent: true }],
    items: [
      { head: 'Work ↔ credit mapping', body: 'Day-to-day work rendered accreditation-legible — time-based RA’s ~144 hrs/yr related instruction and competency-based pathways both.', cites: ['36c77b'] },
      { head: 'Employer visibility', body: 'A supervisor dashboard to see and nudge apprentice progress.' },
      { head: 'Chunked delivery + assessment', body: 'Sized for shifts, not semesters.' },
      { head: 'Evidence capture', body: 'Messy work artifacts → auditable accreditation documentation.' },
    ],
    note: 'The wedge: voice-first evidence capture. Teachers and nurses have no time to sit and write; their learning windows are commutes and between-moments. Speech-to-text turns a spoken post-lesson reflection into accreditation-ready evidence; text-to-speech turns the commute into learning time. Only recently good enough — a genuine differentiator against text-first incumbents.',
  },
  {
    slot: '07', slug: 'wave', kind: 'grid', eyebrow: 'The funding wave', cols: 4,
    title: [{ t: 'AI-in-education money went from millions to billions in 18 months — and the pooled funds want ' }, { t: 'people-centered public goods, not one-off pilots.', accent: true }],
    items: [
      { stat: '$4B', head: 'Microsoft Elevate', body: '20M AI credentials targeted', cites: ['2d173e'] },
      { stat: '$1B', head: 'Google', body: 'AI training across accredited nonprofit colleges', cites: ['611b39'] },
      { stat: '$500M', head: 'Humanity AI (10 foundations)', body: 'Labor + education pillars; $10M open call summer 2026', cites: ['08f3c1'] },
      { stat: '$23M', head: 'Microsoft · OpenAI · Anthropic', body: 'AFT National Academy for AI Instruction — teachers as flagship segment', cites: ['8c0ca0'] },
      { stat: '$8M', head: 'Gates via Digital Promise', body: 'AI tutoring public-goods RFP', cites: ['d2832d'] },
      { stat: '$50M/yr', head: 'OpenAI Foundation', body: 'People-First AI Fund — unrestricted, no AI expertise required', cites: ['1b000c'] },
      { stat: '$1B', head: 'NextLadder Ventures', body: 'Economic-mobility tools; Anthropic inaugural AI partner', cites: ['5f42a8'] },
    ],
    note: 'Every one of these favors exactly what the Forge is: a people-centered, shared-good, education-workforce AI build — proposed by the network that owns the problem.',
  },
  {
    slot: '08', slug: 'charter', kind: 'grid', eyebrow: 'What your gift charters',
    title: [{ t: 'Domain experts prototype, engineers harden, ' }, { t: 'the movement keeps the IP.', accent: true }],
    items: [
      { stat: '01', head: 'The front door', body: 'An Agentic Engineering setup desk and coach: a member’s domain expert arrives with a workflow problem; the desk stands them up on tooling (environments, accounts, guardrails); the coach walks them from first prompt to working prototype.' },
      { stat: '02', head: 'Prototype', body: 'Domain-expert builders across the member network, with tool budget and shared-good governance.', cites: ['57ce95'] },
      { stat: '03', head: 'Test & circulate', body: 'Real cohorts and employers inside member programs; working prototypes flow through NCAD so the network compounds.' },
      { stat: '04', head: 'Harden the winners', body: 'Part-time engineering gives production-grade treatment — security, scale, accreditation-grade data integrity — only to what earns it.' },
    ],
    note: 'A program grant improves one institution. Chartering the Forge upgrades every current and future member of the apprenticeship-degree movement at once — the 3M-by-2035 moonshot’s tooling layer.',
    noteCites: ['4aedc1'],
  },
  {
    slot: '09', slug: 'close', kind: 'statement', eyebrow: 'The close',
    title: [{ t: 'The people who understand the problem can finally build the thing. ' }, { t: 'Give them the forge.', accent: true }],
  },
  {
    slot: '10', slug: 'sources', kind: 'sources',
    title: [{ t: 'Every claim in this deck, ' }, { t: 'sourced.', accent: true }],
    lede: 'Citations carry stable hex codes in the per-client registry; [n] numbering matches every inline marker, in order of first appearance.',
  },
];
