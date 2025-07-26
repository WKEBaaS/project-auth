import { Elysia } from 'elysia';
import { cors } from '@elysiajs/cors';
import { auth } from './auth';

const app = new Elysia()
	.use(cors())
	.mount(auth.handler)
	.get('/', ({ redirect }) => redirect('/api/auth/reference'))
	.listen(3000);

console.log(
	`🦊 Elysia auth api is running at ${app.server?.hostname}:${app.server?.port}`,
);
