/**
 * Native-shapes PPTX for rural-income — real text boxes/shapes, not a
 * flattened screenshot, so a viewer can click in and edit copy inside
 * Google Slides / PowerPoint. Hand-mapped from the 11 Play-UI source files
 * (src/components/slides/v1/*.astro) rather than DOM-scraped — under time
 * pressure, faster and more reliable than building a generic DOM→shapes
 * compiler for an 11-slide one-off.
 *
 * Honest fidelity ceiling (see context-v/explorations/Exporting-Strategy-
 * Decks-to-Google-Slides.md, Option E): no custom @font-face unless
 * uploaded to Slides separately (falls back to Georgia/Arial here), no
 * gradient text (flattened to the teal accent color), no color-mix()
 * shadows. Colors and copy are faithful; typographic polish is not.
 */
import PptxGenJS from "pptxgenjs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "..", "exports", "rural-income", "pptx-native");

const NAVY = "1F1646";
const TEAL = "218099";
const ORANGE = "FF8300";
const MUTED = "5C5578";
const CARD_BG = "FBF8F5";
const BORDER = "E5E0DC";
const WHITE = "FFFFFF";

const HEAD_FONT = "Georgia";
const BODY_FONT = "Arial";
const MONO_FONT = "Courier New";

const W = 13.333;
const H = 7.5;

function addCorner(slide, text, opts) {
  slide.addText(text, {
    fontFace: MONO_FONT, fontSize: 9, color: MUTED, charSpacing: 2,
    ...opts,
  });
}

function addEyebrow(slide, text, x, y, w, color = ORANGE) {
  slide.addText(text.toUpperCase(), {
    x, y, w, h: 0.3, fontFace: MONO_FONT, fontSize: 11, bold: true,
    color, charSpacing: 2,
  });
}

function addCard(slide, x, y, w, h, opts = {}) {
  slide.addShape("roundRect", {
    x, y, w, h, rectRadius: 0.08,
    fill: { color: opts.fill ?? CARD_BG },
    line: { color: opts.line ?? BORDER, width: 1 },
  });
}

const pptx = new PptxGenJS();
pptx.defineLayout({ name: "RURAL_INCOME_16x9", width: W, height: H });
pptx.layout = "RURAL_INCOME_16x9";

/* 01 — Cover */
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };
  addCorner(s, "REACH × LOSSLESS · STRATEGY", { x: 0.7, y: 0.5, w: 4, align: "left", color: ORANGE, bold: true });
  addCorner(s, "RURAL PROSPERITY · DRAFT", { x: 8.6, y: 0.5, w: 4, align: "right" });
  addEyebrow(s, "An apprenticeship-degree strategy", 0.7, 1.6, 6, TEAL);
  s.addText(
    [
      { text: "Rural income boosts through ", options: { color: NAVY } },
      { text: "Apprenticeship Degrees.", options: { color: TEAL } },
    ],
    { x: 0.7, y: 1.95, w: 8.5, h: 2.6, fontFace: HEAD_FONT, fontSize: 44, bold: true, valign: "top" },
  );
  s.addText(
    "Not a staffing patch — a place-based income engine. Start with a paid job, end with a better one: debt-free, in place, and the raise stays local.",
    { x: 0.7, y: 4.6, w: 7, h: 1, fontFace: BODY_FONT, fontSize: 16, color: MUTED },
  );
  s.addShape("line", { x: 0.7, y: 6.7, w: 0.5, y2: 6.7, line: { color: ORANGE, width: 3 } });
  addCorner(s, "REACH UNIVERSITY × THE LOSSLESS GROUP", { x: 8, y: 6.85, w: 4.6, align: "right" });
}

/* 02 — Rural Bind (4 cards) */
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };
  addCorner(s, "02 / 11", { x: 11.5, y: 0.5, w: 1.2, align: "right" });
  addEyebrow(s, "The problem", 0.7, 0.75, 4);
  s.addText("Rural communities are caught in a loop that exports their own talent.", {
    x: 0.7, y: 1.05, w: 9, h: 1.5, fontFace: HEAD_FONT, fontSize: 28, bold: true, color: NAVY,
  });
  const items = [
    ["STEP 1 →", "Shortages", "Rural districts and health systems can't fill roles — teachers first, then healthcare and beyond."],
    ["STEP 2 →", "No local pipeline", "Degrees mean leaving town; few come back. Recruiting outsiders rarely sticks."],
    ["STEP 3 →", "Brain drain", "The few who do credential up take their earnings to a metro — talent and income both exit."],
    ["STEP 4 ↺", "Lower incomes", "Fewer credentialed, higher-paid workers locally — so the shortage deepens."],
  ];
  items.forEach(([step, title, desc], i) => {
    const x = 0.7 + i * 3.0;
    addCard(s, x, 2.9, 2.8, 1.9);
    s.addText(step, { x: x + 0.15, y: 3.0, w: 2.5, h: 0.25, fontFace: MONO_FONT, fontSize: 9, color: MUTED });
    s.addText(title, { x: x + 0.15, y: 3.25, w: 2.5, h: 0.3, fontFace: HEAD_FONT, fontSize: 15, bold: true, color: NAVY });
    s.addText(desc, { x: x + 0.15, y: 3.6, w: 2.5, h: 1.1, fontFace: BODY_FONT, fontSize: 10, color: MUTED });
  });
  s.addText([
    { text: "Every turn of the loop makes the next worse. Breaking it needs an intervention at the hinge — ", options: { color: MUTED } },
    { text: "income earned and kept locally.", options: { color: NAVY, bold: true } },
  ], { x: 0.7, y: 5.2, w: 10.5, h: 1, fontFace: BODY_FONT, fontSize: 15 });
}

/* 03 — Income Hinge */
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };
  addCorner(s, "03 / 11", { x: 11.5, y: 0.5, w: 1.2, align: "right" });
  addEyebrow(s, "The reframe", 0.7, 0.6, 4);
  s.addText([
    { text: "The Apprenticeship Degree is a ", options: { color: NAVY } },
    { text: "rural income engine", options: { color: TEAL } },
    { text: " — the staffing fix is the side effect.", options: { color: NAVY } },
  ], { x: 0.7, y: 1.0, w: 10.5, h: 2.6, fontFace: HEAD_FONT, fontSize: 36, bold: true, valign: "top" });
  s.addShape("line", { x: 0.7, y: 3.9, w: 1.5, y2: 3.9, line: { color: BORDER, width: 1 } });
  s.addText(
    "Read for a rural-development funder, this isn't charity for under-resourced schools. It raises individual and household earnings, solves the employer's shortage with grow-your-own talent, and compounds as raised wages recirculate in the local economy.",
    { x: 0.7, y: 4.2, w: 8, h: 1.6, fontFace: BODY_FONT, fontSize: 16, color: MUTED },
  );
}

/* 04 — Mechanism (4 numbered cards) */
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };
  addCorner(s, "04 / 11", { x: 11.5, y: 0.5, w: 1.2, align: "right" });
  addEyebrow(s, "The mechanism", 0.7, 0.75, 4);
  s.addText([
    { text: "Start with a job, ", options: { color: NAVY } },
    { text: "end with a better one.", options: { color: TEAL } },
  ], { x: 0.7, y: 1.05, w: 9, h: 0.8, fontFace: HEAD_FONT, fontSize: 28, bold: true });
  const steps = [
    ["01", "Paid throughout", "The apprentice is an employee earning wages the whole way — learning while earning, not borrowing to learn. [1]"],
    ["02", "Debt-free credential", "No tuition debt to service, so the post-credential raise is net income — not partly clawed back by loans."],
    ["03", "The role upgrade", "Licensure unlocks a materially higher-paid role — paraprofessional or aide steps up to licensed teacher."],
    ["04", "Retention", "Grow-your-own apprentices stay rooted, sustaining the income gain and stabilizing the local pipeline."],
  ];
  steps.forEach(([num, title, desc], i) => {
    const x = 0.7 + i * 3.0;
    addCard(s, x, 2.1, 2.8, 2.1);
    s.addText(num, { x: x + 0.15, y: 2.2, w: 1, h: 0.5, fontFace: HEAD_FONT, fontSize: 22, bold: true, color: ORANGE });
    s.addText(title, { x: x + 0.15, y: 2.75, w: 2.5, h: 0.3, fontFace: HEAD_FONT, fontSize: 14, bold: true, color: NAVY });
    s.addText(desc, { x: x + 0.15, y: 3.05, w: 2.5, h: 1.1, fontFace: BODY_FONT, fontSize: 10, color: MUTED });
  });
  s.addText("Each step compounds the last — and none of it requires leaving town or taking on debt.", {
    x: 0.7, y: 4.6, w: 10.5, h: 0.6, fontFace: BODY_FONT, fontSize: 15, color: MUTED,
  });
  s.addText('[1] GAO-25-107040, "Apprenticeship: Earn-And-Learn Opportunities Can Benefit Workers and Employers" — U.S. GAO, 2025-05-28', {
    x: 0.7, y: 6.9, w: 11, h: 0.3, fontFace: MONO_FONT, fontSize: 8, color: MUTED,
  });
}

/* 05 — The Raise (big stat) */
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };
  addCorner(s, "05 / 11", { x: 11.5, y: 0.5, w: 1.2, align: "right" });
  addEyebrow(s, "The raise", 0.7, 0.9, 4);
  s.addText([
    { text: "≈ +$27,000", options: { color: ORANGE, fontSize: 54 } },
    { text: " / yr", options: { color: MUTED, fontSize: 20 } },
  ], { x: 0.7, y: 1.3, w: 9, h: 1.1, fontFace: HEAD_FONT, bold: true });
  s.addText("National median: teacher assistant ($35,240/yr) → elementary/kindergarten teacher ($62,310/yr) [1]", {
    x: 0.7, y: 2.4, w: 9, h: 0.5, fontFace: MONO_FONT, fontSize: 11, color: MUTED,
  });
  s.addShape("line", { x: 0.7, y: 3.1, w: 1.5, y2: 3.1, line: { color: BORDER, width: 1 } });
  s.addText(
    "The terminal step isn't a certificate — it's a pay grade. Licensure moves an apprentice from a support role into a credentialed, higher-wage one, and because the credential came debt-free, the full delta lands as durable, net income.",
    { x: 0.7, y: 3.4, w: 8, h: 1.3, fontFace: BODY_FONT, fontSize: 15, color: MUTED },
  );
  s.addText(
    "The figure above is a national BLS median comparison — directional, not a Reach outcome. The exact delta for Reach's rural footprint must come from state salary schedules and Reach outcome data — pending, not estimated.",
    { x: 0.7, y: 4.8, w: 8, h: 1, fontFace: BODY_FONT, fontSize: 12, color: MUTED, italic: true },
  );
  s.addText('[1] "Teacher Assistants — Occupational Outlook Handbook" — U.S. Bureau of Labor Statistics, 2024-05-01', {
    x: 0.7, y: 6.9, w: 11, h: 0.3, fontFace: MONO_FONT, fontSize: 8, color: MUTED,
  });
}

/* 06 — Stays Local (2 cards) */
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };
  addCorner(s, "06 / 11", { x: 11.5, y: 0.5, w: 1.2, align: "right" });
  addEyebrow(s, "Where the money goes", 0.7, 0.75, 5);
  s.addText([
    { text: "Grow-your-own keeps the talent — ", options: { color: NAVY } },
    { text: "and the wages", options: { color: TEAL } },
    { text: " — local.", options: { color: NAVY } },
  ], { x: 0.7, y: 1.05, w: 10.5, h: 0.9, fontFace: HEAD_FONT, fontSize: 26, bold: true });
  const paths = [
    ["Recruit from away", "Leaks", MUTED, [
      "Outsiders rarely stick — turnover resets the shortage.",
      "When they leave, their earnings leave with them.",
      "No compounding: the community keeps paying to re-recruit.",
    ]],
    ["Grow your own", "Stays", TEAL, [
      "The classroom is the campus — no one has to move.",
      "Credential and raise both land in the same community.",
      "Wages recirculate locally as a place-based multiplier.",
    ]],
  ];
  paths.forEach(([label, verb, tone, points], i) => {
    const x = 0.7 + i * 5.9;
    addCard(s, x, 2.2, 5.6, 3.6);
    s.addText(label, { x: x + 0.3, y: 2.4, w: 3.5, h: 0.4, fontFace: HEAD_FONT, fontSize: 16, bold: true, color: NAVY });
    s.addShape("roundRect", { x: x + 4.5, y: 2.4, w: 0.9, h: 0.35, rectRadius: 0.15, fill: { color: WHITE }, line: { color: BORDER, width: 1 } });
    s.addText(verb, { x: x + 4.5, y: 2.4, w: 0.9, h: 0.35, fontFace: MONO_FONT, fontSize: 9, align: "center", valign: "middle", color: NAVY });
    points.forEach((pt, j) => {
      s.addShape("rect", { x: x + 0.3, y: 3.1 + j * 0.75, w: 0.03, h: 0.6, fill: { color: tone } });
      s.addText(pt, { x: x + 0.45, y: 3.05 + j * 0.75, w: 4.8, h: 0.7, fontFace: BODY_FONT, fontSize: 12, color: MUTED });
    });
  });
}

/* 07 — Debt-Free (3 numbered rows) */
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };
  addCorner(s, "07 / 11", { x: 11.5, y: 0.5, w: 1.2, align: "right" });
  addEyebrow(s, "Why it fits rural", 0.7, 0.75, 4);
  s.addText([
    { text: "Debt-free is worth ", options: { color: NAVY } },
    { text: "more", options: { color: TEAL } },
    { text: " where incomes are lower.", options: { color: NAVY } },
  ], { x: 0.7, y: 1.05, w: 10, h: 0.8, fontFace: HEAD_FONT, fontSize: 26, bold: true });
  const rows = [
    ["01", "Debt-aversion runs higher", "Many rural candidates would never sign for a loan. A no-debt path turns a hard no into a yes."],
    ["02", "Lower baselines, bigger relative lift", "Where incomes start lower, the same raise is a larger share of household earnings."],
    ["03", "The raise isn't clawed back", "No monthly loan payment skims the gain — net income rises the full amount, and stays risen."],
  ];
  rows.forEach(([num, title, desc], i) => {
    const y = 2.2 + i * 1.35;
    s.addText(num, { x: 0.7, y, w: 0.6, h: 0.5, fontFace: MONO_FONT, fontSize: 16, color: ORANGE });
    s.addText(title, { x: 1.4, y, w: 6, h: 0.4, fontFace: HEAD_FONT, fontSize: 16, bold: true, color: NAVY });
    s.addText(desc, { x: 1.4, y: y + 0.4, w: 9, h: 0.6, fontFace: BODY_FONT, fontSize: 13, color: MUTED });
    if (i < 2) s.addShape("line", { x: 0.7, y: y + 1.15, w: 10.7, y2: y + 1.15, line: { color: BORDER, width: 0.5 } });
  });
}

/* 08 — Beyond Teaching (3 cards) */
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };
  addCorner(s, "08 / 11", { x: 11.5, y: 0.5, w: 1.2, align: "right" });
  addEyebrow(s, "Multi-sector expansion", 0.7, 0.75, 5);
  s.addText([
    { text: "The engine isn't only for teachers — ", options: { color: NAVY } },
    { text: "it's generalizing.", options: { color: TEAL } },
  ], { x: 0.7, y: 1.05, w: 10.5, h: 0.8, fontFace: HEAD_FONT, fontSize: 24, bold: true });
  const sectors = [
    ["Live", "Teaching", "The proven first front — grow-your-own teachers for districts that can't recruit."],
    ["New · Apr 2026", "Health", "Reach + a training fund launched an Apprenticeship College of Health, including a behavioral-health pathway. [1]"],
    ["Next", "More sectors", "Any rural workforce desert with employer demand is a candidate for the same earn-and-learn engine."],
  ];
  sectors.forEach(([tag, title, desc], i) => {
    const x = 0.7 + i * 3.9;
    addCard(s, x, 2.1, 3.7, 2.4);
    s.addShape("roundRect", { x: x + 0.2, y: 2.3, w: 1.6, h: 0.35, rectRadius: 0.15, fill: { color: WHITE }, line: { color: BORDER, width: 1 } });
    s.addText(tag, { x: x + 0.2, y: 2.3, w: 1.6, h: 0.35, fontFace: MONO_FONT, fontSize: 8, align: "center", valign: "middle", color: TEAL });
    s.addText(title, { x: x + 0.2, y: 2.8, w: 3.3, h: 0.45, fontFace: HEAD_FONT, fontSize: 19, bold: true, color: NAVY });
    s.addText(desc, { x: x + 0.2, y: 3.3, w: 3.3, h: 1.1, fontFace: BODY_FONT, fontSize: 10.5, color: MUTED });
  });
  s.addText([
    { text: "Rural healthcare deserts are a natural second front. The behavioral-health pathway was seeded by The Goodness Web at $1M [2] — the same place-based income logic, a different workforce shortage.", options: {} },
  ], { x: 0.7, y: 4.8, w: 11, h: 1, fontFace: BODY_FONT, fontSize: 14, color: MUTED });
  s.addText(
    '[1] "Reach University and Training Fund Launch Apprenticeship College of Health" — Reach University, 2026-04-09    [2] "$1M Grant to Expand Apprenticeship Degrees in Behavioral Health" — The Goodness Web Foundation, 2025-02-20',
    { x: 0.7, y: 6.9, w: 12, h: 0.3, fontFace: MONO_FONT, fontSize: 7.5, color: MUTED },
  );
}

/* 09 — Evidence (3 quote cards) */
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };
  addCorner(s, "09 / 11", { x: 11.5, y: 0.5, w: 1.2, align: "right" });
  addEyebrow(s, "The evidence", 0.7, 0.75, 4);
  s.addText([
    { text: "The pattern is documented — ", options: { color: NAVY } },
    { text: "pay, debt, retention.", options: { color: TEAL } },
  ], { x: 0.7, y: 1.05, w: 10.5, h: 0.8, fontFace: HEAD_FONT, fontSize: 24, bold: true });
  const proof = [
    ['Earn-and-learn programs "can lead to higher pay, produce little student debt, and increase employee retention." [1]', "— GAO, 2025"],
    ["The Apprenticeship Degree promotes upward mobility while addressing chronic labor shortages. [2]", "— Progressive Policy Institute"],
    ['Strong grow-your-own pipelines mean districts "no longer need job fairs."', "— District outcome, Reach (unverified)"],
  ];
  proof.forEach(([quote, source], i) => {
    const x = 0.7 + i * 3.9;
    addCard(s, x, 2.1, 3.7, 2.9);
    s.addShape("rect", { x: x + 0.2, y: 2.3, w: 0.5, h: 0.04, fill: { color: ORANGE } });
    s.addText(quote, { x: x + 0.2, y: 2.5, w: 3.3, h: 1.8, fontFace: HEAD_FONT, fontSize: 13, color: NAVY });
    s.addText(source, { x: x + 0.2, y: 4.55, w: 3.3, h: 0.35, fontFace: MONO_FONT, fontSize: 9, color: MUTED });
  });
  s.addText(
    "[1] GAO-25-107040 — U.S. GAO, 2025-05-28    [2] \"PPI: The Apprenticeship Degree\" — Progressive Policy Institute / Reach University, 2025-06-01",
    { x: 0.7, y: 6.9, w: 12, h: 0.3, fontFace: MONO_FONT, fontSize: 7.5, color: MUTED },
  );
}

/* 10 — Funder Pipeline (3 tier cards) */
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };
  addCorner(s, "10 / 11", { x: 11.5, y: 0.5, w: 1.2, align: "right" });
  addEyebrow(s, "Supporters & funder pipeline", 0.7, 0.75, 5);
  s.addText([
    { text: "Assembled across tiers — ", options: { color: NAVY } },
    { text: "national down to local.", options: { color: TEAL } },
  ], { x: 0.7, y: 1.05, w: 10.5, h: 0.8, fontFace: HEAD_FONT, fontSize: 24, bold: true });
  const tiers = [
    ["National", "Large philanthropies & policy champions.", [
      ["Carnegie Corporation of New York", "$2M · Teachers College, Delta Region"],
      ["The Goodness Web", "$1M · behavioral-health pathway"],
      ["Continued philanthropic funding", "actively being sought"],
    ]],
    ["Regional / State", "Agencies & foundations matching national grants to local delivery.", [
      ["State education & workforce agencies", "seed list TBD"],
      ["Regional foundations", "seed list TBD"],
      ["Multi-district consortia", "seed list TBD"],
    ]],
    ["Local", "Where the income lands and co-funding proves demand.", [
      ["Employers — districts & health systems", "seed list TBD"],
      ["Community foundations", "seed list TBD"],
      ["Local businesses", "seed list TBD"],
    ]],
  ];
  tiers.forEach(([chip, role, items], i) => {
    const x = 0.7 + i * 3.9;
    addCard(s, x, 2.05, 3.7, 4.1);
    s.addShape("roundRect", { x: x + 0.2, y: 2.2, w: 1.6, h: 0.35, rectRadius: 0.15, fill: { color: WHITE }, line: { color: BORDER, width: 1 } });
    s.addText(chip, { x: x + 0.2, y: 2.2, w: 1.6, h: 0.35, fontFace: MONO_FONT, fontSize: 8, align: "center", valign: "middle", color: TEAL });
    s.addText(role, { x: x + 0.2, y: 2.65, w: 3.3, h: 0.6, fontFace: BODY_FONT, fontSize: 9.5, color: MUTED });
    items.forEach(([name, note], j) => {
      const y = 3.4 + j * 0.85;
      s.addText(name, { x: x + 0.2, y, w: 3.3, h: 0.4, fontFace: HEAD_FONT, fontSize: 11.5, bold: true, color: NAVY });
      s.addText(note, { x: x + 0.2, y: y + 0.35, w: 3.3, h: 0.3, fontFace: MONO_FONT, fontSize: 8, color: MUTED });
    });
  });
  s.addText([
    { text: "Funded top-down, proven bottom-up: ", options: { color: NAVY } },
    { text: "national grants, regional match, local co-funding.", options: { color: TEAL } },
  ], { x: 0.7, y: 6.35, w: 11.5, h: 0.5, fontFace: BODY_FONT, fontSize: 14 });
}

/* 11 — Ask (closing) */
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };
  addCorner(s, "11 / 11", { x: 11.5, y: 0.5, w: 1.2, align: "right" });
  addEyebrow(s, "Scale & the ask", 0.7, 0.7, 4);
  s.addText([
    { text: "3 million", options: { color: WHITE, fontSize: 1 } },
  ], { x: 0.7, y: 1.05, w: 0.1, h: 0.1 }); // spacer (kept minimal, see stat below)
  s.addText("3 million [1]", { x: 0.7, y: 1.0, w: 6, h: 1, fontFace: HEAD_FONT, fontSize: 44, bold: true, color: ORANGE });
  s.addText("Apprenticeship Degree completions by 2035 · anchored by NCAD, a goal set at the 2023 Clinton Global Initiative", {
    x: 0.7, y: 1.95, w: 8, h: 0.6, fontFace: MONO_FONT, fontSize: 11, color: MUTED,
  });
  s.addText([
    { text: "Let's fund the next rural cohorts — ", options: { color: NAVY } },
    { text: "together.", options: { color: TEAL } },
  ], { x: 0.7, y: 2.7, w: 10, h: 0.7, fontFace: HEAD_FONT, fontSize: 26, bold: true });
  const cols = [
    ["Reach", "Delivers the model, the credential, and the rural cohort outcomes — and scales it through NCAD."],
    ["Funders", "Co-fund across the pipeline so national grants reach regional match and local delivery."],
  ];
  cols.forEach(([label, desc], i) => {
    const x = 0.7 + i * 5.5;
    s.addText(label, { x, y: 3.6, w: 5, h: 0.35, fontFace: MONO_FONT, fontSize: 11, bold: true, color: TEAL });
    s.addText(desc, { x, y: 3.95, w: 5, h: 0.7, fontFace: BODY_FONT, fontSize: 13, color: MUTED });
  });
  s.addShape("line", { x: 0.7, y: 4.9, w: 1.5, y2: 4.9, line: { color: BORDER, width: 1 } });
  s.addText("The raise is the point — and the income stays local.", {
    x: 0.7, y: 5.1, w: 8, h: 0.6, fontFace: HEAD_FONT, fontSize: 20, color: NAVY,
  });
  s.addText("[1] NCAD — 3 Million Apprenticeship Degree Completions by 2035, Reach University", {
    x: 0.7, y: 6.9, w: 11, h: 0.3, fontFace: MONO_FONT, fontSize: 8, color: MUTED,
  });
}

const out = join(OUT, "rural-income-native.pptx");
await pptx.writeFile({ fileName: out });
console.log(`✓ pptx (native) → ${out}`);
