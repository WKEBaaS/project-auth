/* WKE I3S Extended Plugin */

import { BetterAuthPlugin } from 'better-auth';
import { schema } from './schema';
import { getI3SAdapter } from './adapter';

export interface I3SOptions {
	entityId?: number; // Optional entityId to customize
}

export const I3S = (opts?: I3SOptions) => {
	return {
		id: 'i3s',
		schema: schema,
		init: () => {
			return {
				options: {
					databaseHooks: {
						user: {
							create: {
								before: async (user, ctx) => {
									if (!ctx?.context.adapter) {
										throw new Error('No adapter found in context');
									}
									const adapter = getI3SAdapter(ctx.context.adapter);
									const object = await adapter.createObject({
										entityId: opts?.entityId ?? 2, // Default to 2 if not provided
									});
									return {
										data: {
											...user,
											id: object.id,
										},
									};
								},
							},
						},
					},
				},
			};
		},
	} satisfies BetterAuthPlugin;
};
