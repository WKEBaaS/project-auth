import { isEnabled } from '@/utils';

const trustedOrigins = Bun.env.TRUSTED_ORIGINS && Bun.env.TRUSTED_ORIGINS.length > 0
	? Bun.env.TRUSTED_ORIGINS.split(',')
	: undefined;

export const config = {
	trustedOrigins: trustedOrigins,
	enailAndPassword: {
		enabled: isEnabled(Bun.env.EMAIL_AND_PASSWORD_ENABLED),
	},
	jwt: {
		enabled: isEnabled(Bun.env.JWT_ENABLED),
	},
	cookie: {
		secure: isEnabled(Bun.env.COOKIE_SECURE),
		sameSite: (Bun.env.COOKIE_SAME_SITE as 'Lax' | 'Strict' | 'None') || 'Lax',
		domain: Bun.env.COOKIE_DOMAIN,
	},
	logger: {
		enabled: isEnabled(Bun.env.LOGGER_ENABLED),
		level: (Bun.env.LOGGER_LEVEL as 'error' | 'warn' | 'info' | 'debug') ||
			'info',
	},
	providers: {
		google: {
			enabled: isEnabled(Bun.env.GOOGLE_ENABLED),
			clientId: Bun.env.GOOGLE_CLIENT_ID,
			clientSecret: Bun.env.GOOGLE_CLIENT_SECRET,
		},
		github: {
			enabled: isEnabled(Bun.env.GITHUB_ENABLED),
			clientId: Bun.env.GITHUB_CLIENT_ID,
			clientSecret: Bun.env.GITHUB_CLIENT_SECRET,
		},
		discord: {
			enabled: isEnabled(Bun.env.DISCORD_ENABLED),
			clientId: Bun.env.DISCORD_CLIENT_ID,
			clientSecret: Bun.env.DISCORD_CLIENT_SECRET,
		},
	},
};

if (config.logger.level === 'debug') {
	console.log('Config:', config);
}
