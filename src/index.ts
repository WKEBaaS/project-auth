import { Elysia } from 'elysia';
import { cors } from '@elysiajs/cors';
import { auth } from '@/auth';
import { config } from '@/config';

const app = new Elysia()
	.use(cors({
		origin: config.trustedOrigins,
		methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
		credentials: true,
		allowedHeaders: ['Content-Type', 'Authorization'],
	}))
	.mount(auth.handler)
	.get('/', ({ redirect }) => redirect('/api/auth/reference'))
	.listen(Bun.env.PORT || 3000);

// Handle Ctrl+C gracefully
process.on('SIGINT', () => {
	process.exit(0);
});
// Handle SIGTERM gracefully (e.g., for Docker/Kubernetes)
process.on('SIGTERM', () => {
	process.exit(0);
});

console.log(
	`🦊 Elysia auth api is running at ${app.server?.hostname}:${app.server?.port}`,
);
