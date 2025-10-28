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
	logger: {
		disabled: !config.logger.enabled,
		level: config.logger.level,
		log: (level, message, ...args) => {
			console.log(`[${level}] ${message}`, ...args);
		},
	},
	database: drizzleAdapter(db, {
		provider: 'pg',
		usePlural: true,
		schema: schema,
	}),
	advanced: {
		database: {
			generateId: () => Bun.randomUUIDv7(),
		},
		useSecureCookies: config.cookie.secure,
		defaultCookieAttributes: {
			sameSite: config.cookie.sameSite,
			domain: config.cookie.domain,
		},
	},
	user: {
		additionalFields: {
			role: {
				type: 'string',
				defaultValue: 'authenticated',
				returned: true,
			},
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
			jwt: {
				expirationTime: config.jwt.expirationTime,
				definePayload({ user }) {
					return {
						role: user.role,
						email: user.email,
						emailVerified: user.emailVerified,
						createdAt: user.createdAt,
						updatedAt: user.updatedAt,
						image: user.image,
					};
				},
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
