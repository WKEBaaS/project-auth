import { AuthPluginSchema } from 'better-auth';
import * as z from 'zod';

export const schema = {
	object: {
		fields: {
			entityId: {
				type: 'number',
			},
		},
	},
} satisfies AuthPluginSchema;

export const object = z.object({
	id: z.string(),
	entityId: z.number(),
});

export type Object = z.infer<typeof object>;
