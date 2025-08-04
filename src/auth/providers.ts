import { config } from '@/config';
import { BetterAuthOptions } from 'better-auth';

export const genSocialProviders = () => {
	const socialProviders: BetterAuthOptions['socialProviders'] = {};

	if (config.providers.google.clientId && config.providers.google.clientSecret) {
		console.log(`Google provider enabled: ${config.providers.google.enabled}`);
		socialProviders.google = {
			enabled: config.providers.google.enabled,
			clientId: config.providers.google.clientId,
			clientSecret: config.providers.google.clientSecret,
		};
	}

	if (config.providers.github.clientId && config.providers.github.clientSecret) {
		console.log(`Github provider enabled: ${config.providers.discord.enabled}`);
		socialProviders.github = {
			enabled: config.providers.github.enabled,
			clientId: config.providers.github.clientId,
			clientSecret: config.providers.github.clientSecret,
		};
	}

	if (config.providers.discord.clientId && config.providers.discord.clientSecret) {
		console.log(`Discord provider enabled: ${config.providers.discord.enabled}`);
		socialProviders.discord = {
			enabled: config.providers.discord.enabled,
			clientId: config.providers.discord.clientId,
			clientSecret: config.providers.discord.clientSecret,
		};
	}

	return socialProviders;
};
