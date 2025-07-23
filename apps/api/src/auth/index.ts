/* Better-Auth Related */
import { I3S } from '@youmin1017/better-auth-i3s';
import { db } from '../db';
import * as schema from '../db/schema';
import { betterAuth, BetterAuthOptions } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { openAPI } from 'better-auth/plugins';

export const auth = betterAuth(
	{
		database: drizzleAdapter(db, {
			provider: 'pg',
			usePlural: true,
			schema: schema,
		}),
		plugins: [
			I3S(),
			openAPI(),
		],
		advanced: {
			database: {
				generateId: () => Bun.randomUUIDv7(),
			},
		},
		emailAndPassword: {
			enabled: true,
		},
	} satisfies BetterAuthOptions,
);
