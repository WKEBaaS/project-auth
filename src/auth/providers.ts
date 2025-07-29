import { config } from '@/config';

export const genSocialProviders = () => {
	const socialProviders: Record<string, any> = {};

	if (config.providers.google.enabled) {
		console.info('Google social provider is enabled');
		socialProviders.google = {
			clientId: Bun.env.GOOGLE_CLIENT_ID,
			clientSecret: Bun.env.GOOGLE_CLIENT_SECRET,
		};
	}

	if (config.providers.github.enabled) {
		console.info('GitHub social provider is enabled');
		socialProviders.github = {
			clientId: Bun.env.GITHUB_CLIENT_ID,
			clientSecret: Bun.env.GITHUB_CLIENT_SECRET,
		};
	}

	if (config.providers.discord.enabled) {
		console.info('Discord social provider is enabled');
		socialProviders.discord = {
			clientId: Bun.env.DISCORD_CLIENT_ID,
			clientSecret: Bun.env.DISCORD_CLIENT_SECRET,
		};
	}

	return socialProviders;
};
