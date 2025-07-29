import { config } from '@/config';
import { db } from '@/db';
import * as schema from '@/db/schema';
import { betterAuth, BetterAuthOptions } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { genPlugins } from './plugins';
import { genSocialProviders } from './providers';

const options = {
	trustedOrigins: config.trustedOrigins,
	database: drizzleAdapter(db, {
		provider: 'pg',
		usePlural: true,
		schema: schema,
	}),
	advanced: {
		database: {
			generateId: () => Bun.randomUUIDv7(),
		},
		defaultCookieAttributes: {
			sameSite: 'None',
			secure: true,
		},
	},
	emailAndPassword: {
		enabled: config.enailAndPassword.enabled,
	},
	plugins: genPlugins(),
	socialProviders: genSocialProviders(),
} satisfies BetterAuthOptions;

export const auth = betterAuth(options);
