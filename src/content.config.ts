import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const articles = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/articles" }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    category: z.enum(["Food", "Health", "Breeds", "Insurance", "Training", "Gear"]),
    image: z.string().optional(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
    metaDescription: z.string().optional(),
    affiliateProducts: z
      .array(
        z.object({
          title: z.string(),
          description: z.string(),
          link: z.string(),
          price: z.string().optional(),
          rating: z.number().optional(),
          badge: z.string().optional(),
        })
      )
      .optional(),
  }),
});

const carousel = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/carousel" }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    image: z.string(),
    link: z.string(),
    order: z.number(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { articles, carousel };
