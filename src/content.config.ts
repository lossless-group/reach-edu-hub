import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Changelog collection (required per Lossless conventions)
const changelog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/changelog' }),
  schema: z.object({
    title: z.string(),
    lede: z.string(),
    publish: z.boolean().default(false),
    date_authored_initial_draft: z.coerce.date(),
    date_authored_current_draft: z.coerce.date().optional(),
    date_authored_final_draft: z.coerce.date().optional(),
    date_first_published: z.coerce.date().optional(),
    date_last_updated: z.coerce.date().optional(),
    at_semantic_version: z.string(),
    augmented_with: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).default([]),
    authors: z.array(z.string()).default([]),
  }),
});

// Materials collection - for Reach University content
const materials = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/materials' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    category: z.string().optional(),
    date: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    authors: z.array(z.string()).default([]),
  }),
});

export const collections = {
  changelog,
  materials,
};
