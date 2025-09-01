import { config } from '@/config';
import { db } from '@/db';
import * as schema from '@/db/schema';
import { betterAuth, BetterAuthOptions } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { genSocialProviders } from './providers';
import { bearer, jwt, openAPI } from 'better-auth/plugins';
import { I3S } from '@youmin1017/better-auth-i3s';

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
	plugins: [
		I3S(),
		openAPI(),
		bearer(),
		jwt({
			jwks: {
				disablePrivateKeyEncryption: true,
			},
			schema: {
				jwks: {
					modelName: 'jwk',
				},
			},
		}),
	],
	socialProviders: genSocialProviders(),
} satisfies BetterAuthOptions;

export const auth = betterAuth(options);
