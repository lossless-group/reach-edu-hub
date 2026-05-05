# Reach goes Lossless

> A working hub for the **Reach University × The Lossless Group** partnership. Booting up systems for Lossless Collaboration.

Live at: <https://reach-edu-hub.vercel.app>

The audience is Reach University senior leadership. The hub gathers the work-in-progress for the partnership — presentation iterations for the current fundraise, and the systems we're booting up next. Single point of contact: **Michael Staton** (text or WhatsApp; email is overload).

---

## Surfaces

| Path | Purpose |
|------|---------|
| `/` | Hub home — co-branding, the two pillars, trajectory, showcase, friendly nod |
| `/story` | The Reach story scroll-deck — `v1 baseline` (clean / journalistic) |
| `/story/version-2` | The Reach story scroll-deck — `v2 editorial` (serif / mode-aware) |
| `/brand-kit` | Internal reference for Reach brand tokens (colors, fonts, modes) |
| `/design-system` | Component catalog for contributors and AI assistants |
| `/changelog` | Index of build notes; click through to per-entry detail rendered via LFM |

The `Header` cycler between **Story** and **Brand Kit** flips between scroll-deck variants when you're on a `/story...` path. Sticky to the top on scrolling pages.

---

## Stack

- **Astro 6** — static site generator
- **Tailwind v4** — utility CSS, with `dark:` and `vibrant:` custom variants wired in `src/styles/global.css`
- **`@lossless-group/lfm`** — Lossless Flavored Markdown, installed from [JSR](https://jsr.io/@lossless-group/lfm) (no auth required — public package)
- **Vercel** — deployment target via `@astrojs/vercel` adapter
- **pnpm** — package manager (do not use npm/yarn — workspace resolution will fail)

Three-mode theme system (light / dark / vibrant) is wired top to bottom: `theme.css` two-tier tokens → `mode-switcher.js` sets `data-mode` + `.dark` class on `<html>` → Tailwind variants compile against both.

---

## Local development

`@lossless-group/lfm` is installed from JSR (public, no auth). The site's `.npmrc` is just one line:

```
@jsr:registry=https://npm.jsr.io
```

`package.json` resolves `@lossless-group/lfm` through the JSR npm-compatibility scope:

```json
"@lossless-group/lfm": "npm:@jsr/lossless-group__lfm@^0.2.2"
```

To re-add or upgrade LFM later:

```bash
pnpx jsr add @lossless-group/lfm
```

### Run

```bash
pnpm install
pnpm dev       # http://localhost:4321
pnpm build     # builds to dist/ (and .vercel/output/ for Vercel deploys; both gitignored)
pnpm preview   # serves the production build locally
```

No GitHub token required for any of this. The astro-knots playbook is explicit: install LFM from JSR.

---

## Deployment (Vercel)

The project lives under the **`colearn-labs`** Vercel team. To work with it locally:

```bash
pnpx vercel link --yes --scope colearn-labs --project reach-edu-hub
```

No project env vars are required for the build — JSR is public and doesn't need a token.

`vercel.json` pins the install + build commands to pnpm so Vercel doesn't fall back to `npm install` (which doesn't honor `pnpm-lock.yaml`):

```json
{
  "installCommand": "pnpm install --frozen-lockfile",
  "buildCommand": "pnpm build"
}
```

Trigger a redeploy:

```bash
git push                                    # main pushes auto-deploy via Vercel's git integration
# or
pnpx vercel --prod --scope colearn-labs     # manual deploy from local
```

---

## Repository conventions

- **Commits** follow `git-conventions` from `~/.claude/skills/git-conventions/` — structured headers (`feat(scope)`, `fix(scope)`, etc.), paragraph-spaced bodies, "Also included" riders for minor changes.
- **Changelog** entries land in `src/content/changelog/` as `YYYY-MM-DD_NN.md`. Follow `changelog-conventions` skill — `## Why Care?` first, `## What's New?` second, then the deeper story. Lede must do its job in two seconds.
- **Sitemap and design notes** live in `context-v/sitemap/` (e.g. `Page__Index.md`).
- **Three-mode rule:** every component must read strong in light, dark, and vibrant. Use the `dark:` and `vibrant:` Tailwind variants — see `src/styles/global.css` for the wiring.
- **No `var(--theme-*)` references in deck Phase 1/2 work** — Tailwind built-in tokens only; the deck-iteration-workflow skill is explicit. Site chrome (Header, Footer, ModeToggle) is allowed to use semantic tokens.

---

## Source layout

```
src/
├── components/
│   ├── basics/            # site chrome — Header, Footer
│   ├── markdown/          # AstroMarkdown renderer + Sources, Callout, etc.
│   └── ui/                # ModeToggle (canonical 3-mode toggle)
├── content/
│   ├── changelog/         # changelog entries (Astro content collection)
│   ├── messages/          # 9 LFM message files distilled from reach.edu
│   └── materials/         # placeholder for future published artifacts
├── layouts/
│   ├── BaseThemeLayout    # site chrome wrapper (Header + main + Footer)
│   ├── BoilerPlateHTML    # <html><head> with no-flash mode boot
│   ├── PageAsDeckWrapper  # scroll-snap deck container with section tracker
│   └── sections/story/    # T01–T09 section components for both deck variants
│       └── version-2/     # editorial / serif treatment
├── lib/
│   ├── parse-content.ts   # LFM polyfills (citations + callouts)
│   └── scroll-decks.ts    # registry of /story scroll-deck variants
├── pages/                 # /, /story/*, /brand-kit, /design-system
├── styles/
│   ├── global.css         # @import tailwindcss + @custom-variant dark/vibrant
│   └── theme.css          # two-tier tokens + three [data-mode] blocks
└── utils/
    ├── mode-switcher.js   # canonical 3-mode toggle logic
    └── theme-switcher.js  # theme class manager
```

---

## Skills referenced in this repo

These live at `~/.claude/skills/` (from the [`lossless-skills`](https://github.com/lossless-group/lossless-skills) install) and govern how this site is built:

- **`deck-iteration-workflow`** — Phase 1 (single-page scroll deck) and Phase 2 (per-slide variants); the rule about Tailwind built-in tokens during early phases.
- **`changelog-conventions`** — entries go in `src/content/changelog/`, lede first, story arc, public-by-default voice.
- **`git-conventions`** — header pattern, paragraph-spaced body, files-changed list.
- **`theme-system`** — two-tier token architecture, three-mode contract.
- **`astro-knots`** — Astro Knots conventions (no React, no JSX).

---

## License

UNLICENSED — private client work.
