const resources = defineCollection({
	loader: glob({ base: './src/content/resources', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		url: z.string().optional(),
		type: z.enum(['link', 'guide', 'document', 'tool']).default('link'),
		heroImage: z.string().optional(),
	}),
});