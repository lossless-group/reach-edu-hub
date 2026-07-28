/** Deck content — agent-workflow-maxxing (awm-p1). Single source for Play-UI + PPTX. */
export const META = {
  deckSlug: 'agent-workflow-maxxing',
  variant: 'awm-p1',
  sectionDir: 'agent-workflow-maxxing',
  title: 'Agent Workflow Maxxing',
};

export const SLIDES = [
  {
    slot: '01', slug: 'cover', kind: 'cover',
    eyebrow: 'Reach × Lossless · Internal Doctrine', eyebrowRight: 'Agent Workflow Maxxing · Draft',
    title: [{ t: 'A team of three, ' }, { t: 'a very big surface.', accent: true }],
    lede: '$19M to raise, dozens of funders to work, an August deadline. Agents research, draft, and watch; humans approve and act — covering the opportunity windows a small team can’t reach manually.',
  },
  {
    slot: '02', slug: 'hook', kind: 'statement', eyebrow: 'The hook',
    title: [{ t: 'The campaign gave us a surface-area problem: $19M to raise, dozens of funders, an August deadline. ' }, { t: 'Agents are how a team of three covers a big surface.', accent: true }],
    lede: '$25M goal, $6M committed, founding growth-partner cohort closes August 2026. That’s not a headcount problem — it’s a coverage problem.',
    ledeCites: ['57ce95'],
  },
  {
    slot: '03', slug: 'two-effects', kind: 'grid', eyebrow: 'The thesis',
    title: [{ t: 'Agents don’t just make current work faster. They make ' }, { t: 'impossible-at-our-size work possible.', accent: true }],
    items: [
      { chip: 'EFFECT ONE · RELIEF', body: 'Reduce overwhelm on work we already do — research, drafts, prep, follow-ups.' },
      { chip: 'EFFECT TWO · EXPANSION', body: 'Enable what we currently triage away — ten outreach threads at once, conference outreach nine months early, a grant corpus that drafts new applications on demand.' },
    ],
    note: 'The win is not “same work, faster.” It’s “stop triaging away the high-leverage work.”',
  },
  {
    slot: '04', slug: 'windows', kind: 'grid', eyebrow: 'The deadline wall', cols: 3,
    title: [{ t: 'The funding landscape is a wall of dated windows. Every missed deadline is a ' }, { t: 'five-, six-, or seven-figure pass.', accent: true }],
    items: [
      { stat: '$50M', head: 'OpenAI People-First AI Fund', body: 'Unrestricted, no AI expertise required — July 2026 deadline.', cites: ['1b000c'] },
      { stat: '$10M', head: 'Humanity AI open call', body: 'From the $500M ten-foundation pool; labor + education pillars, summer 2026.', cites: ['08f3c1'] },
      { stat: '$25M', head: 'BlackRock Future Builders', body: 'National RFP administered by JFF.', cites: ['a25592'] },
      { stat: '$8M', head: 'Gates via Digital Promise', body: 'AI tutoring public-goods RFP (opened May 2026).', cites: ['d2832d'] },
      { stat: '~$16M/yr', head: 'Dollar General Literacy Foundation', body: 'Escalating annual adult-literacy cycle.', cites: ['90ad13'] },
      { stat: '$19M', head: 'The campaign drumbeat', body: 'Every prospective growth partner needs a tailored packet before August 2026.', cites: ['57ce95'] },
    ],
    note: 'Tracking, qualifying, drafting, and following up on all of these — while running the existing pipeline — is precisely the work the team drops today. And the windows keep opening: the question is whether we’re ever standing there when they do.',
  },
  {
    slot: '05', slug: 'five-fronts', kind: 'grid', eyebrow: 'The five fronts', cols: 3,
    title: [{ t: 'One rule everywhere: agents research, draft, and watch — ' }, { t: 'humans approve and act.', accent: true }],
    items: [
      { stat: '01', head: 'Grants', body: 'The corpus that drafts itself: snippet library, brand voice, deadline calendar, DDQ fill-outs.', cites: ['ef2072', '91f051'] },
      { stat: '02', head: 'ABM / funder conversations', body: 'Research, enrichment, sequencing, reply triage — one person tends many threads.', cites: ['97bdd0', '1ffec6'] },
      { stat: '03', head: 'Events', body: 'The nine-months-ahead game: CFPs, attendee scraping, per-meeting prep briefs.', cites: ['ccb282', '7fb84f'] },
      { stat: '04', head: 'Travel', body: 'Itineraries built around stacked funder meetings; route and drive-time optimized.', cites: ['70a304', '8a2652'] },
      { stat: '05', head: 'Social presence', body: 'Monitor named stakeholders, draft engagement; a human posts. LinkedIn penalizes automated engagement — the guardrail is load-bearing.', cites: ['9cc232'] },
    ],
    note: 'The industry data supports the split: ~89.7% of social teams use AI daily; only ~5.4% fully automate. Augment, don’t abdicate.',
    noteCites: ['22d589'],
  },
  {
    slot: '06', slug: 'receipts', kind: 'grid', eyebrow: 'The receipts', cols: 3,
    title: [{ t: 'The mega-gifts landscape scan was the doctrine in action: ' }, { t: '84 verified gifts, 81 sources, one afternoon.', accent: true }],
    items: [
      { stat: '84', body: 'verified gifts across six topic lanes — parallel research agents, primary-source verification.' },
      { stat: '185+', body: 'sources in a hex-coded citation registry — every number in every pitch deck traceable.' },
      { stat: '8', body: 'strategy pitch decks built on that evidence base — including this one.' },
    ],
    note: 'The doctrine isn’t hypothetical: it’s how the evidence under every one of these pitch decks was assembled — at a speed and coverage no manual pass achieves.',
  },
  {
    slot: '07', slug: 'ask', kind: 'grid', eyebrow: 'The internal decision',
    title: [{ t: 'Greenlight one bottleneck: ' }, { t: 'the grants front, corpus-first.', accent: true }],
    items: [
      { chip: 'START', body: 'Stand up the grant corpus + snippet library + deadline calendar. Prove it on the live windows.' },
      { chip: 'MEASURE', body: 'Both axes: hours saved and asks newly submitted. Then expand front by front.' },
      { chip: 'GUARDRAIL', body: 'Humans stay on everything outward — sent, published, submitted. Tool budget is noise against a single caught window.' },
    ],
  },
  {
    slot: '08', slug: 'close', kind: 'statement', eyebrow: 'The close',
    title: [{ t: 'Don’t do the same work faster. Do the work we never had time for — ' }, { t: 'while the opportunity windows are open, and we still have a team of three.', accent: true }],
  },
  {
    slot: '09', slug: 'sources', kind: 'sources',
    title: [{ t: 'Sources, ' }, { t: 'hex-coded.', accent: true }],
    lede: 'Citations carry stable hex codes in the per-client registry; [n] numbering matches every inline marker, in order of first appearance. Vendor/anecdote-grade tool stats are labeled as such in the narrative.',
  },
];
