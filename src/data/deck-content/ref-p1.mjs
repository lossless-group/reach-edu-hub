/** Deck content — reverse-engineer-funding (ref-p1). Single source for Play-UI + PPTX. */
export const META = {
  deckSlug: 'reverse-engineer-funding',
  variant: 'ref-p1',
  sectionDir: 'reverse-engineer-funding',
  title: 'Reverse Engineer Available Funding',
};

export const SLIDES = [
  {
    slot: '01', slug: 'cover', kind: 'cover',
    eyebrow: 'Reach × Lossless · Internal Doctrine', eyebrowRight: 'Reverse Engineer Funding · Draft',
    title: [{ t: 'Fish where ' }, { t: 'the whales are.', accent: true }],
    lede: 'Funding is a power law. Study the biggest aligned funders, learn their pattern on a call, and size every ask to the largest amount that fits — the campaign’s own anchors are the receipts.',
  },
  {
    slot: '02', slug: 'hook', kind: 'statement', eyebrow: 'The hook',
    title: [{ t: 'Fundraising effort is spread evenly. Money isn’t. ' }, { t: 'Funding is a power law.', accent: true }],
    lede: 'We’ve been fishing with a wide net in a whale ocean.',
  },
  {
    slot: '03', slug: 'money-shape', kind: 'grid', eyebrow: 'The shape of the money', cols: 3,
    title: [{ t: '$617 billion a year, concentrated in a tenth of a percent of hands — ' }, { t: 'with a $124 trillion wave behind it.', accent: true }],
    items: [
      { stat: '$617.2B', body: 'U.S. charitable giving in 2025 — crossing $600B for the first time (+5.7% current dollars, +3.0% after inflation).', cites: ['4c940e'] },
      { stat: '0.1% → 40%', body: 'Grantmakers giving $50M+ are 0.1% of ~120,000 U.S. foundations — yet supply 40% of all grant dollars; the largest 1,000 (~1%) account for ~half to 60% of tracked giving.', cites: ['6fced1', 'b3229d'] },
      { stat: '$8.0B', body: 'Gates Foundation payout in 2024 — the largest U.S. private foundation; Mellon (~$540M) and RWJF (~$550M) each move over half a billion a year.', cites: ['1a2cb7', 'f4fc11', '5c3e27'] },
      { stat: '$124T', body: 'The Great Wealth Transfer through 2048 — with ~$18T destined for charity (Cerulli, updated Dec 2024).', cites: ['f4987b'] },
      { stat: '556,850', body: 'Global UHNW individuals ($30M+) holding $63.8T in 2025; the U.S. is home to ~37% — roughly 206,000 people.', cites: ['552e9e'] },
      { stat: '$98.3T', body: 'Record global HNWI wealth in 2025 (Capgemini — investable-assets basis; world figures labeled as such).', cites: ['56142e'] },
    ],
  },
  {
    slot: '04', slug: 'method', kind: 'grid', eyebrow: 'The method',
    title: [{ t: 'The 990 tells you what they funded. The call tells you why. ' }, { t: 'The pattern tells you what to ask for — and how big.', accent: true }],
    items: [
      { stat: '01', head: 'Study the public footprint', body: '990s reveal actual grantmaking history; Candid, press, and principals’ statements fill in strategy and values.', cites: ['a7d443', '4b538e'] },
      { stat: '02', head: 'Get the intro call', body: 'The 990 tells you what they funded; the call tells you why — the thesis behind the checks. The highest-leverage step.' },
      { stat: '03', head: 'Pattern-recognize', body: 'Across their giving, find the recurring shape: the cause, geography, stage, and outcome they keep paying for.' },
      { stat: '04', head: 'Align to the sweet spot', body: 'Design the ask to the largest amount that still fits their pattern. Start from what they want to give; shape the program to match.' },
    ],
  },
  {
    slot: '05', slug: 'receipts', kind: 'grid', eyebrow: 'It already worked', cols: 3,
    title: [{ t: 'Carnegie’s pattern said Delta, so the ask said Delta — ' }, { t: 'and $2M landed.', accent: true }],
    items: [
      { stat: '$2M', body: 'Carnegie Corporation anchors the Delta expansion — landed where the funder’s pattern and Reach’s work overlap, not from a generic application.', cites: ['0a146a'] },
      { stat: '$1M', body: 'Schusterman Family Philanthropies followed as the second anchor of the growth-capital campaign.', cites: ['57ce95'] },
      { stat: '$6M / $25M', body: 'Committed, with ~$3M more in motion and an August 2026 founding-cohort close.', cites: ['57ce95'] },
    ],
  },
  {
    slot: '06', slug: 'whale-map', kind: 'grid', eyebrow: 'The whale map',
    title: [{ t: '84 verified gifts — every funder’s revealed pattern, ' }, { t: 'sized and dated.', accent: true }],
    items: [
      { chip: 'PATTERN-PROVEN · IN-MARKET NOW', body: 'Ballmer Group (largest private funder of alternative teacher prep; $40M residency renewal) · Ascendium ($172M/yr, rural learner success) · Bloomberg ($570M cumulative CTE, granting directly to colleges) · Walton (Strategy 2030 aimed at the Delta) · Arnold Ventures (largest-ever Maricopa completion grant) · Lumina (Goal 2040 = Reach’s metric).', cites: ['e7cbef', '63bbab', '65140c', 'a26016', '5e224c', '6aca82'] },
      { chip: 'DATED WINDOWS', body: 'Humanity AI $10M open call (summer 2026) · OpenAI $50M unrestricted (July 2026) · BlackRock’s $25M RFP via JFF — the windows keep opening; the question is whether we’re standing there.', cites: ['08f3c1', '1b000c', 'a25592'] },
      { chip: 'UNSOLICITABLE · SCREEN-MATCHED', body: 'MacKenzie Scott — a $7.2B year, $1.1B+ to access institutions exactly like Reach. The play is public legibility and clean outcomes data, not an application.', cites: ['f868ef', 'd1d74b'] },
      { chip: 'THE WHALE THESIS', body: 'Billion-dollar debt-free-degree checks exist (Gottesman, Bloomberg/Hopkins) — but only in medicine. The pattern-matched mega-ask for undergraduate working adults has never been made. Someone will make it first.', cites: ['3bc2ca', '1a4b17'] },
    ],
  },
  {
    slot: '07', slug: 'engine', kind: 'grid', eyebrow: 'The engine', cols: 3,
    title: [{ t: 'Reverse-engineering is the strategy. ' }, { t: 'The corpus + agents are the engine.', accent: true }],
    items: [
      { stat: '500+', body: 'documents across 57 funders in the reach-edu corpus, with per-strategy funding datasets.' },
      { stat: '185+', body: 'sources in the hex-coded citation registry — every claim in every deck traceable.' },
      { stat: '1 day', body: 'for the 84-gift landscape scan — the throughput proof of the agent operating doctrine.' },
    ],
    note: 'Studying many funders’ footprints and pattern-matching at whale scale is tractable for a team of three — because the agents do the reading.',
  },
  {
    slot: '08', slug: 'ask', kind: 'grid', eyebrow: 'The internal decision',
    title: [{ t: 'Rank every prospect by capacity × alignment. Spend the hours on the top ten. ' }, { t: 'Size every ask to the pattern’s maximum.', accent: true }],
    items: [
      { chip: 'NOW', body: 'Adopt the tiered whale map as the working pipeline; push intro calls to the pattern-proven tier before the August cohort close.', cites: ['57ce95'] },
      { chip: 'EVERY WINDOW', body: 'Submit into every dated window that clears the alignment bar — agents track the calendar so nothing expires unseen.' },
      { chip: 'THE MEGA-ASK', body: 'Draft the first pattern-matched mega-ask — the medicine-precedent, debt-free-degree framing — for the one funder whose pattern it fits best.' },
    ],
  },
  {
    slot: '09', slug: 'close', kind: 'statement', eyebrow: 'The close',
    title: [{ t: 'A few precise asks beat a hundred generic ones. The map is drawn — ' }, { t: 'now fish where the whales are.', accent: true }],
  },
  {
    slot: '10', slug: 'sources', kind: 'sources',
    title: [{ t: 'Every number in this deck, ' }, { t: 'sourced.', accent: true }],
    lede: 'Citations carry stable hex codes; [n] numbering matches every inline marker in order of first appearance. All figures verified against primary sources 2026-07-28 — including replacing decade-stale foundation figures and updating Giving USA, Cerulli, and Altrata to their current editions.',
  },
];
