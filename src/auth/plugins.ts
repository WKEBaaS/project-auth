import { config } from '@/config';
import { I3S } from '@youmin1017/better-auth-i3s';
import { BetterAuthPlugin } from 'better-auth';
import { bearer, jwt, openAPI } from 'better-auth/plugins';

export const genPlugins = () => {
	const plugins: BetterAuthPlugin[] = [];

	plugins.push(I3S(), openAPI());

	if (config.jwt.enabled) {
		console.log(`JWT plugin enabled: ${config.jwt.enabled}`);
		plugins.push(
			bearer(),
			jwt({
				schema: {
					jwks: {
						modelName: 'jwk',
					},
				},
			}),
		);
	}

	return plugins;
};
