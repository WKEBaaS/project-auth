declare module 'bun' {
	interface Env {
		BETTER_AUTH_URL: string; // Base URL of your app
		BETTER_AUTH_SECRET: string; // Secret key for signing tokens
		DATABASE_URL: string; // Database connection string
	}
}
