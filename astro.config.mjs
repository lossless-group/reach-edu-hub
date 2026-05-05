import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import path from 'path';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: vercel(),
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
