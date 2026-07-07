/**
 * One-off export script for the rural-income Play-UI deck — five formats:
 * PDF, per-slide PNGs, standalone HTML, PPTX (image-per-slide), PPTX
 * (native editable text/shapes). Run with the dev server already up:
 *
 *   pnpm dev                       # in one terminal
 *   BASE_URL=http://localhost:4321 node scripts/export-rural-income.mjs
 *
 * Reuses the calmstorm-decks Playwright install (no local browser download
 * needed) — swap to a local `playwright` devDependency if this script
 * graduates into a real repeatable pipeline.
 */
import { chromium } from "/Users/mpstaton/code/lossless-monorepo/ai-labs/dididecks-ai/client-sites/calmstorm-decks/node_modules/playwright/index.mjs";
import { PDFDocument } from "pdf-lib";
import PptxGenJS from "pptxgenjs";
import { mkdir, writeFile, readFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const OUT = join(ROOT, "exports", "rural-income");
const BASE_URL = process.env.BASE_URL ?? "http://localhost:4334";
const DECK = "rural-income";
const VARIANT = "v1";
const SLOTS = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"];

// Slide size at 96dpi-equivalent to the 1920x1080 design: 20in x 11.25in,
// true 16:9. PptxGenJS default LAYOUT_16x9 is 10in x 5.625in — use the
// larger custom size so native text sizing (pt) maps predictably.
const SLIDE_W_IN = 13.333;
const SLIDE_H_IN = 7.5;
const PX_PER_IN = 1920 / SLIDE_W_IN; // = 144

const px = (n) => n / PX_PER_IN;

async function unlock(context) {
  await context.request.post(`${BASE_URL}/api/unlock`, {
    form: { credential: "reach-fundraise", next: "/" },
    headers: { Origin: BASE_URL },
  });
}

async function hideChromeAndToolbar(page) {
  await page.addStyleTag({ content: "astro-dev-toolbar { display: none !important; }" });
  await page.evaluate(() => {
    document.querySelector("[data-ddd-overlay]")?.setAttribute("data-chrome-hidden", "true");
  });
}

/* ── 1. Images (already captured in exports/rural-income/images by the
   interactive Playwright pass earlier in this session — re-verify present) */
async function ensureImages(context) {
  const dir = join(OUT, "images");
  await mkdir(dir, { recursive: true });
  const page = await context.newPage();
  await page.setViewportSize({ width: 1920, height: 1080 });
  for (const slot of SLOTS) {
    await page.goto(`${BASE_URL}/play/${DECK}/${VARIANT}/${slot}`, { waitUntil: "load" });
    await hideChromeAndToolbar(page);
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(250);
    await page.screenshot({ path: join(dir, `${slot}.png`) });
  }
  await page.close();
  console.log(`✓ images → ${dir}`);
  return dir;
}

/* ── 2. PDF — via the shell's /print route, page.pdf() for real vector+text
   output rather than a raster re-embed. */
async function exportPdf(context) {
  const dir = join(OUT, "pdf");
  await mkdir(dir, { recursive: true });
  const page = await context.newPage();
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(`${BASE_URL}/play/${DECK}/${VARIANT}/print`, { waitUntil: "load" });
  await page.addStyleTag({ content: "astro-dev-toolbar { display: none !important; }" });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(300);
  const out = join(dir, "rural-income.pdf");
  await page.pdf({
    path: out,
    width: "1920px",
    height: "1080px",
    printBackground: true,
    margin: { top: 0, bottom: 0, left: 0, right: 0 },
  });
  await page.close();
  console.log(`✓ pdf → ${out}`);
}

/* ── 3. HTML with styles — snapshot the /print route's rendered DOM.
   Dev-mode <style data-vite-dev-id> tags are already inlined by Astro/Vite,
   so this is genuinely self-contained for CSS. Fonts/images referencing
   /_astro/* or /fonts/* stay relative — portable only alongside the site's
   own asset host (noted in the handoff, not solved here under time
   pressure). */
async function exportHtml(context) {
  const dir = join(OUT, "html");
  await mkdir(dir, { recursive: true });
  const page = await context.newPage();
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(`${BASE_URL}/play/${DECK}/${VARIANT}/print`, { waitUntil: "load" });
  await page.addStyleTag({ content: "astro-dev-toolbar { display: none !important; }" });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(300);
  // Strip the dev toolbar's own DOM node (display:none via injected style is
  // enough visually, but drop it from the saved markup too).
  await page.evaluate(() => document.querySelector("astro-dev-toolbar")?.remove());
  const html = await page.content();
  const out = join(dir, "rural-income.html");
  await writeFile(out, html, "utf-8");
  await page.close();
  console.log(`✓ html → ${out}`);
}

/* ── 4. PPTX — image-per-slide (full-bleed, from the PNGs in step 1) */
async function exportPptxImages(imagesDir) {
  const dir = join(OUT, "pptx-images");
  await mkdir(dir, { recursive: true });
  const pptx = new PptxGenJS();
  pptx.defineLayout({ name: "RURAL_INCOME_16x9", width: SLIDE_W_IN, height: SLIDE_H_IN });
  pptx.layout = "RURAL_INCOME_16x9";
  for (const slot of SLOTS) {
    const slide = pptx.addSlide();
    slide.addImage({
      path: join(imagesDir, `${slot}.png`),
      x: 0, y: 0, w: SLIDE_W_IN, h: SLIDE_H_IN,
    });
  }
  const out = join(dir, "rural-income-images.pptx");
  await pptx.writeFile({ fileName: out });
  console.log(`✓ pptx (images) → ${out}`);
}

export { unlock, hideChromeAndToolbar, ensureImages, exportPdf, exportHtml, exportPptxImages, chromium, BASE_URL, OUT, SLOTS, SLIDE_W_IN, SLIDE_H_IN, px };
