/**
 * export-pitch-decks-pptx — native-shapes PPTX for all eight pitch-generation
 * decks, in BOTH dark and light mode, from the same content modules the
 * Play-UI renders (src/data/deck-content/<variant>.mjs). Native text boxes and
 * autoshapes only — no rasterized text — so Google Slides imports cleanly and
 * every word stays editable.
 *
 * Fidelity mapping (deliberate, Slides-import-safe):
 *   - Playfair Display (headings)  → Georgia
 *   - Soleil (body)                → Arial
 *   - tracked mono chips/eyebrows  → Arial bold, tracked (legibility over
 *     mono authenticity — Courier New's thin strokes fail at distance)
 *   - gradient headline spans      → flat secondary (teal) color
 *   - hex-code citations           → [n] superscript runs; hex codes + URLs in
 *     each slide's speaker notes; paginated Sources slides at the end
 *
 * Usage: node scripts/export-pitch-decks-pptx.mjs
 * Output: exports/pitch-decks/<variant>--<mode>.pptx
 */
import PptxGenJS from 'pptxgenjs';
import { readFile, mkdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const OUT = join(ROOT, 'exports', 'pitch-decks');

const VARIANTS = ['um-p1', 'wd-p1', 'rib-p1', 'aln-p1', 'fjd-p1', 'nf-p1', 'awm-p1', 'ref-p1'];

const MODES = {
  light: {
    bg: 'FFFFFF', text: '1F1646', muted: '5C5578', accent: 'FF8300',
    secondary: '218099', cardBg: 'FBF8F5', cardLine: 'E5E0DC', gradientFlat: '218099',
  },
  dark: {
    bg: '00001E', text: 'FFFFFF', muted: 'B8B8C0', accent: 'FF8300',
    secondary: '49A8C1', cardBg: '1B183C', cardLine: '24243D', gradientFlat: '49A8C1',
  },
};

const HEAD = 'Georgia';
const BODY = 'Arial';
const W = 13.333;
const H = 7.5;
const MX = 0.75; // side margin
const CW = W - MX * 2; // content width

/* ── citations.ts parser (uniform object literals authored 2026-07-28) ── */
function parseCitations(src) {
  const out = [];
  const entryRe = /hexCode:\s*'([a-z0-9]{6})'/g;
  let m;
  while ((m = entryRe.exec(src))) {
    const tail = src.slice(m.index, m.index + 900);
    const f = (name) => {
      const r = tail.match(new RegExp(`${name}:\\s*(?:'((?:[^'\\\\]|\\\\.)*)'|"((?:[^"\\\\]|\\\\.)*)")`));
      return r ? (r[1] ?? r[2]).replace(/\\'/g, "'").replace(/\\"/g, '"') : undefined;
    };
    out.push({ hexCode: m[1], title: f('title') ?? '', url: f('url') ?? '', source: f('source'), publishedDate: f('publishedDate') });
  }
  return out;
}

const supRuns = (nums, color) =>
  nums.map((n) => ({ text: ` [${n}]`, options: { superscript: true, fontSize: 9, color, bold: true } }));

function titleRuns(segs, P, base) {
  return segs.map((s) => ({ text: s.t, options: { ...base, color: s.accent ? P.gradientFlat : P.text } }));
}

function notesFor(slide, citations, numOf) {
  const hexes = new Set([
    ...(slide.titleCites ?? []), ...(slide.ledeCites ?? []), ...(slide.noteCites ?? []),
    ...(slide.items ?? []).flatMap((it) => it.cites ?? []),
  ]);
  if (!hexes.size) return undefined;
  const lines = citations.filter((c) => hexes.has(c.hexCode))
    .map((c) => `[${numOf(c.hexCode)}] (${c.hexCode}) ${c.title}${c.source ? ' — ' + c.source : ''}${c.url && c.url !== '#' ? ' · ' + c.url : ''}`);
  return 'Citations on this slide:\n' + lines.join('\n');
}

function footnoteStrip(s, slide, citations, numOf, P, y) {
  const hexes = new Set([
    ...(slide.titleCites ?? []), ...(slide.ledeCites ?? []), ...(slide.noteCites ?? []),
    ...(slide.items ?? []).flatMap((it) => it.cites ?? []),
  ]);
  if (!hexes.size) return;
  const parts = citations.filter((c) => hexes.has(c.hexCode))
    .map((c) => `[${numOf(c.hexCode)}] ${c.title}${c.source ? ' — ' + c.source : ''}`);
  s.addText(parts.join('   ·   '), {
    x: MX, y, w: CW, h: H - y - 0.12,
    fontFace: BODY, fontSize: 6.5, color: P.muted, valign: 'top',
  });
}

function eyebrow(s, text, P, x, y, w, color) {
  s.addText((text ?? '').toUpperCase(), {
    x, y, w, h: 0.3, fontFace: BODY, fontSize: 10.5, bold: true,
    color: color ?? P.accent, charSpacing: 3,
  });
}

/* ── slide kinds ── */
function renderCover(s, slide, P, meta) {
  s.background = { color: P.bg };
  eyebrow(s, slide.eyebrow, P, MX, 0.45, CW / 2);
  eyebrow(s, slide.eyebrowRight, P, W / 2, 0.45, CW / 2 - 0, P.muted);
  eyebrow(s, "What's next, with your gift", P, MX, 1.7, CW, P.secondary);
  s.addText(titleRuns(slide.title, P, { fontFace: HEAD, fontSize: 44, bold: true }), {
    x: MX, y: 2.1, w: CW, h: 2.4, valign: 'top', lineSpacing: 50,
  });
  if (slide.lede) {
    s.addText(slide.lede, {
      x: MX, y: 4.7, w: CW * 0.82, h: 1.6, fontFace: BODY, fontSize: 16.5,
      color: P.muted, valign: 'top', lineSpacing: 24,
    });
  }
  s.addShape('rect', { x: MX, y: 6.85, w: 0.9, h: 0.045, fill: { color: P.accent }, line: { type: 'none' } });
  s.addText(meta.title, { x: W - 5.2, y: 6.7, w: 4.45, h: 0.3, align: 'right', fontFace: BODY, fontSize: 8, color: P.muted });
}

function renderStatement(s, slide, P, numOf, citations) {
  s.background = { color: P.bg };
  eyebrow(s, slide.eyebrow, P, MX, 1.15, CW, P.accent);
  const runs = titleRuns(slide.title, P, { fontFace: HEAD, fontSize: 33, bold: true });
  runs.push(...supRuns((slide.titleCites ?? []).map(numOf).filter(Boolean), P.secondary));
  s.addText(runs, { x: MX + 0.4, y: 1.7, w: CW - 0.8, h: 3.0, align: 'center', valign: 'middle', lineSpacing: 42 });
  if (slide.lede) {
    const lruns = [{ text: slide.lede, options: { fontFace: BODY, fontSize: 15.5, color: P.muted } }];
    lruns.push(...supRuns((slide.ledeCites ?? []).map(numOf).filter(Boolean), P.secondary));
    s.addText(lruns, { x: MX + 1.1, y: 4.85, w: CW - 2.2, h: 1.7, align: 'center', valign: 'top', lineSpacing: 22 });
  }
}

function renderGrid(s, slide, P, numOf, citations) {
  s.background = { color: P.bg };
  eyebrow(s, slide.eyebrow, P, MX, 0.42, CW);
  const tRuns = titleRuns(slide.title, P, { fontFace: HEAD, fontSize: 21, bold: true });
  tRuns.push(...supRuns((slide.titleCites ?? []).map(numOf).filter(Boolean), P.secondary));
  s.addText(tRuns, { x: MX, y: 0.72, w: CW, h: 0.95, valign: 'top', lineSpacing: 26 });

  let y = 1.75;
  if (slide.lede) {
    const lruns = [{ text: slide.lede, options: { fontFace: BODY, fontSize: 11.5, color: P.muted } }];
    lruns.push(...supRuns((slide.ledeCites ?? []).map(numOf).filter(Boolean), P.secondary));
    s.addText(lruns, { x: MX, y, w: CW, h: 0.62, valign: 'top', lineSpacing: 15 });
    y += 0.72;
  }

  const items = slide.items ?? [];
  const cols = slide.cols ?? Math.min(items.length, 4);
  const rows = Math.ceil(items.length / cols);
  const noteH = slide.note ? 0.85 : 0.15;
  const stripH = 0.42;
  const gridH = H - y - noteH - stripH - 0.15;
  const gap = 0.16;
  const cw = (CW - gap * (cols - 1)) / cols;
  const ch = (gridH - gap * (rows - 1)) / rows;
  const dense = items.length > 6 || rows > 2;

  items.forEach((it, i) => {
    const cx = MX + (i % cols) * (cw + gap);
    const cy = y + Math.floor(i / cols) * (ch + gap);
    s.addShape('roundRect', {
      x: cx, y: cy, w: cw, h: ch, rectRadius: 0.06,
      fill: { color: P.cardBg }, line: { color: P.cardLine, width: 1 },
    });
    let ty = cy + 0.14;
    const tx = cx + 0.16;
    const tw = cw - 0.32;
    if (it.chip) {
      s.addText(it.chip.toUpperCase(), { x: tx, y: ty, w: tw, h: 0.26, fontFace: BODY, fontSize: dense ? 8 : 9, bold: true, color: P.secondary, charSpacing: 2 });
      ty += 0.32;
    }
    if (it.stat) {
      s.addText(it.stat, { x: tx, y: ty, w: tw, h: dense ? 0.42 : 0.55, fontFace: HEAD, fontSize: dense ? 19 : 26, bold: true, color: P.accent });
      ty += dense ? 0.46 : 0.6;
    }
    if (it.head) {
      s.addText(it.head, { x: tx, y: ty, w: tw, h: 0.34, fontFace: HEAD, fontSize: dense ? 11 : 13, bold: true, color: P.text, lineSpacing: dense ? 12 : 14 });
      ty += dense ? 0.34 : 0.4;
    }
    if (it.body) {
      const runs = [{ text: it.body, options: { fontFace: BODY, fontSize: dense ? 8.5 : 10.5, color: P.muted } }];
      runs.push(...supRuns((it.cites ?? []).map(numOf).filter(Boolean), P.secondary));
      const bodyH = cy + ch - ty - (it.kicker ? 0.55 : 0.12);
      s.addText(runs, { x: tx, y: ty, w: tw, h: Math.max(bodyH, 0.3), valign: 'top', lineSpacing: dense ? 11 : 13.5 });
    }
    if (it.kicker) {
      s.addText(it.kicker, { x: tx, y: cy + ch - 0.55, w: tw, h: 0.48, fontFace: BODY, italic: true, fontSize: 8, color: P.text, valign: 'bottom', lineSpacing: 10 });
    }
  });

  let ny = y + gridH + 0.1;
  if (slide.note) {
    const nruns = [{ text: slide.note, options: { fontFace: BODY, fontSize: 10.5, color: P.muted } }];
    nruns.push(...supRuns((slide.noteCites ?? []).map(numOf).filter(Boolean), P.secondary));
    s.addText(nruns, { x: MX, y: ny, w: CW, h: noteH, valign: 'top', lineSpacing: 13.5 });
    ny += noteH;
  }
  footnoteStrip(s, slide, citations, numOf, P, ny + 0.02);
}

function renderSources(pptx, slide, P, citations, meta, kicker) {
  const PER = 9;
  const pages = Math.max(1, Math.ceil(citations.length / PER));
  for (let p = 0; p < pages; p++) {
    const s = pptx.addSlide();
    s.background = { color: P.bg };
    eyebrow(s, 'Receipts', P, MX, 0.42, CW);
    s.addText(titleRuns(slide.title, P, { fontFace: HEAD, fontSize: 21, bold: true }).concat(
      pages > 1 ? [{ text: `   (${p + 1}/${pages})`, options: { fontFace: BODY, fontSize: 12, color: P.muted } }] : []
    ), { x: MX, y: 0.72, w: CW, h: 0.55 });
    if (p === 0 && slide.lede) {
      s.addText(slide.lede, { x: MX, y: 1.28, w: CW, h: 0.5, fontFace: BODY, fontSize: 10, color: P.muted, lineSpacing: 12.5 });
    }
    const chunk = citations.slice(p * PER, (p + 1) * PER).map((c, j) => {
      const n = p * PER + j + 1;
      return {
        text: `[${n}]  ${c.title}${c.source ? ' — ' + c.source : ''}\n       ${c.url === '#' ? 'Internal document' : c.url}\n`,
        options: { fontFace: BODY, fontSize: 9.5, color: P.text, lineSpacing: 12.5, paraSpaceAfter: 6 },
      };
    });
    s.addText(chunk, { x: MX, y: 1.9, w: CW, h: H - 2.3, valign: 'top' });
    s.addText(`${meta.title} · Sources`, { x: W - 5.2, y: H - 0.42, w: 4.45, h: 0.3, align: 'right', fontFace: BODY, fontSize: 8, color: P.muted });
  }
}

/* ── main ── */
await mkdir(OUT, { recursive: true });
for (const variant of VARIANTS) {
  const { META, SLIDES } = await import(`../src/data/deck-content/${variant}.mjs`);
  const citSrc = await readFile(join(ROOT, 'src', 'layouts', 'sections', META.sectionDir, 'citations.ts'), 'utf8');
  const citations = parseCitations(citSrc);
  const numOf = (hex) => {
    const i = citations.findIndex((c) => c.hexCode === hex);
    return i === -1 ? null : i + 1;
  };

  for (const [mode, P] of Object.entries(MODES)) {
    const pptx = new PptxGenJS();
    pptx.defineLayout({ name: 'W16x9', width: W, height: H });
    pptx.layout = 'W16x9';
    pptx.author = 'Reach × Lossless';
    pptx.title = `${META.title} (${mode})`;

    for (const slide of SLIDES) {
      if (slide.kind === 'sources') {
        renderSources(pptx, slide, P, citations, META);
        continue;
      }
      const s = pptx.addSlide();
      const notes = notesFor(slide, citations, numOf);
      if (notes) s.addNotes(notes);
      if (slide.kind === 'cover') renderCover(s, slide, P, META);
      else if (slide.kind === 'statement') renderStatement(s, slide, P, numOf, citations);
      else renderGrid(s, slide, P, numOf, citations);
      if (slide.kind !== 'cover') {
        s.addText(`${slide.slot} / ${String(SLIDES.length).padStart(2, '0')}`, {
          x: W - 1.7, y: 0.32, w: 1.2, h: 0.25, align: 'right', fontFace: BODY, fontSize: 8.5, color: P.muted, charSpacing: 2,
        });
      }
    }

    const file = join(OUT, `${variant}--${mode}.pptx`);
    await pptx.writeFile({ fileName: file });
    console.log(`wrote ${file} (${SLIDES.length - 1 + Math.max(1, Math.ceil(citations.length / 9))} slides, ${citations.length} citations)`);
  }
}
console.log('done.');
