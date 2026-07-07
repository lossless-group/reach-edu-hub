import {
  unlock, ensureImages, exportPdf, exportHtml, exportPptxImages, chromium, BASE_URL,
} from "./export-rural-income.mjs";

const browser = await chromium.launch();
const context = await browser.newContext({ viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 2 });
await unlock(context);

const imagesDir = await ensureImages(context);
await exportPdf(context);
await exportHtml(context);
await exportPptxImages(imagesDir);

await browser.close();
console.log("\nAll exports complete.");
