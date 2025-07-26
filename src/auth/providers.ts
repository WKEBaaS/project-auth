export const genSocialProviders = () => {
	const socialProviders: Record<string, any> = {};

	if (Bun.env.GOOGLE_CLIENT_ID && Bun.env.GOOGLE_CLIENT_SECRET) {
		console.info('Google social provider is enabled');
		socialProviders.google = {
			clientId: Bun.env.GOOGLE_CLIENT_ID,
			clientSecret: Bun.env.GOOGLE_CLIENT_SECRET,
		};
	}
	if (Bun.env.GITHUB_CLIENT_ID && Bun.env.GITHUB_CLIENT_SECRET) {
		console.info('GitHub social provider is enabled');
		socialProviders.github = {
			clientId: Bun.env.GITHUB_CLIENT_ID,
			clientSecret: Bun.env.GITHUB_CLIENT_SECRET,
		};
	}
	if (Bun.env.DISCORD_CLIENT_ID && Bun.env.DISCORD_CLIENT_SECRET) {
		console.info('Discord social provider is enabled');
		socialProviders.discord = {
			clientId: Bun.env.DISCORD_CLIENT_ID,
			clientSecret: Bun.env.DISCORD_CLIENT_SECRET,
		};
	}

	return socialProviders;
};
