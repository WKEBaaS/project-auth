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
