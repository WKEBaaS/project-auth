export const genSocialProviders = () => {
	const socialProviders: Record<string, any> = {};

	if (Bun.env.GOOGLE_ENABLED == 'true' || Bun.env.GOOGLE_ENABLED == '1') {
		if (Bun.env.GOOGLE_CLIENT_ID && Bun.env.GOOGLE_CLIENT_SECRET) {
			console.info('Google social provider is enabled');
			socialProviders.google = {
				clientId: Bun.env.GOOGLE_CLIENT_ID,
				clientSecret: Bun.env.GOOGLE_CLIENT_SECRET,
			};
		} else {
			console.warn('Google social provider is enabled but missing credentials');
		}
	}

	if (Bun.env.GITHUB_ENABLED == 'true' || Bun.env.GITHUB_ENABLED == '1') {
		if (Bun.env.GITHUB_CLIENT_ID && Bun.env.GITHUB_CLIENT_SECRET) {
			console.info('GitHub social provider is enabled');
			socialProviders.github = {
				clientId: Bun.env.GITHUB_CLIENT_ID,
				clientSecret: Bun.env.GITHUB_CLIENT_SECRET,
			};
		} else {
			console.warn('GitHub social provider is enabled but missing credentials');
		}
	}

	if (Bun.env.DISCORD_ENABLED == 'true' || Bun.env.DISCORD_ENABLED == '1') {
		if (Bun.env.DISCORD_CLIENT_ID && Bun.env.DISCORD_CLIENT_SECRET) {
			console.info('Discord social provider is enabled');
			socialProviders.discord = {
				clientId: Bun.env.DISCORD_CLIENT_ID,
				clientSecret: Bun.env.DISCORD_CLIENT_SECRET,
			};
		} else {
			console.warn('Discord social provider is enabled but missing credentials');
		}
	}

	return socialProviders;
};
