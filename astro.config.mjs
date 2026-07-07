import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import dididecksShell from '@dididecks/shell';
import path from 'path';

// https://astro.build/config
export default defineConfig({
  // Server output. The shell injects routes whose getStaticPaths run the
  // registry-loader's esbuild.transform; under 'static' those run inside
  // Astro's bundled prerender context, which has no __filename and crashes
  // (`__filename is not defined`). 'server' renders the injected routes
  // on-demand so esbuild runs at request time in real Node — the same reason
  // every other client-site (chroma/humain/lossless) uses server output.
  // Also required for the whole-site gate (src/middleware.ts) — a passcode/
  // @domain-email cookie check with no DB, per the calmstorm
  // Gate-Sensitive-Information-with-Simple-Code pattern. No page in this
  // site opts into `export const prerender = true` anymore, since a
  // prerendered page is a static file Vercel serves directly and never
  // reaches the middleware.
  output: 'server',
  adapter: vercel(),

  integrations: [
    dididecksShell({
      client: 'reach-edu-hub',
      decksRegistryPath: './src/data/decks.ts',
      slotsRegistryPath: './src/data/slides.ts',
      auditsPath: './data/audits/slides.json',
      slidesComponentsRoot: './src/components/slides',
      // The hub is public per context-v/sitemap (Gating: none).
      distributionTier: 'shared',
    }),
  ],

  // Old bespoke URLs → new shell /scroll/[deck]/[variant] routes. Keeps any
  // links already shared with Reach alive after the convention migration.
  // Also redirect bare deck/scroll roots to each deck's canonical variant.
  redirects: {
    '/story': '/scroll/story/baseline',
    '/story/version-2': '/scroll/story/editorial',
    '/automation': '/scroll/automation/pipeline',
    '/scroll': '/scroll/story/baseline',
    '/scroll/story': '/scroll/story/baseline',
    '/scroll/automation': '/scroll/automation/pipeline',
  },

  // Site URL — used by Astro to resolve absolute URLs for canonical links,
  // OpenGraph image paths, and feeds. Override in Vercel's env panel
  // (SITE_URL) when the site moves to a custom domain.
  // NOTE: uses the public reach-edu-hub.vercel.app alias rather than the
  // reach-edu-hub-colearn-labs.vercel.app subdomain, which has Vercel
  // deployment protection (password gate) and returns 401 to social
  // unfurlers — breaking every share preview.
  site: process.env.SITE_URL ?? 'https://reach-edu-hub.vercel.app',
  base: '/',
  trailingSlash: 'ignore',

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@layouts': path.resolve('./src/layouts'),
        '@components': path.resolve('./src/components'),
        '@lib': path.resolve('./src/lib'),
      }
    },
    server: {
      fs: {
        // Allow serving files from monorepo root (hoisted pnpm deps)
        allow: ['../..']
      }
    }
  }
});
