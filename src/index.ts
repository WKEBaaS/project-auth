import { Elysia } from 'elysia';
import { cors } from '@elysiajs/cors';
import { auth } from './auth';

const app = new Elysia()
	.use(cors())
	.mount(auth.handler)
	.get('/', ({ redirect }) => redirect('/api/auth/reference'))
	.listen(Bun.env.PORT || 3000);

// Handle Ctrl+C gracefully
process.on('SIGINT', () => {
	process.exit(0);
});

console.log(
	`🦊 Elysia auth api is running at ${app.server?.hostname}:${app.server?.port}`,
);
