import { defineCollection, z } from 'astro:content';

export const collections = {
	repertoire: defineCollection({
		type: 'content',
		schema: z.object({
			title: z.string(),
			description: z.string(),
			publishDate: z.coerce.date(),
			img: z.string(),
			img_alt: z.string().optional(),
		}),
	}),
	termine: defineCollection({
		type: 'content',
		schema: z.object({
			datum: z.string().date(),
			vorstellung: z.string(),
			rolle: z.string(),
		}),
	}),
	fotos: defineCollection({
		type: 'content',
		schema: z.object({
			publishDate: z.coerce.date(),
			img: z.string(),
			img_alt: z.string().optional(),
		}),
	}),
};
