import { Adapter, BetterAuthPlugin } from 'better-auth';
import { Object } from './schema';

export interface I3SOptions {
}

export const getI3SAdapter = (adapter: Adapter) => {
	return {
		createObject: async (data: Omit<Object, 'id'>) => {
			const object = await adapter.create<Omit<Object, 'id'>, Object>({
				model: 'object',
				data: data,
			});
			return object;
		},
	};
};
