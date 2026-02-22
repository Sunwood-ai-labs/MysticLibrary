import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
	testDir: './tests',
	fullyParallel: true,
	forbidOnly: !!process.env.CI,
	retries: process.env.CI ? 2 : 0,
	workers: process.env.CI ? 1 : undefined,
	reporter: 'html',

	use: {
		baseURL: 'http://localhost:5179',
		trace: 'on-first-retry',
	},

	projects: [
		{
			name: 'chromium',
			use: { ...devices['Desktop Chrome'] },
		},
	],

	// テスト前に開発サーバーを起動
	webServer: {
		command: 'pnpm dev --port 5179',
		url: 'http://localhost:5179',
		reuseExistingServer: !process.env.CI,
		timeout: 120000,
	},
});
