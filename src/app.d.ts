declare module 'bun' {
	interface Env {
		BETTER_AUTH_URL: string; // Base URL of your app
		BETTER_AUTH_SECRET: string; // Secret key for signing tokens
		DATABASE_URL: string; // Database connection string
		// Social Providers
		GOOGLE_CLIENT_ID?: string;
		GOOGLE_CLIENT_SECRET?: string;
		GITHUB_CLIENT_ID?: string;
		GITHUB_CLIENT_SECRET?: string;
		DISCORD_CLIENT_ID?: string;
		DISCORD_CLIENT_SECRET?: string;
	}
}
