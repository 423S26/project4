import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright E2E configuration.
 * - Local dev:  set BASE_URL=http://localhost:5500  (VS Code Live Server default)
 * - CI:         uses the Vercel staging deployment automatically
 */
export default defineConfig({
  testDir: './tests/e2e',
  /* Run tests in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in source */
  forbidOnly: !!process.env.CI,
  /* Retry failed tests twice on CI, never locally */
  retries: process.env.CI ? 2 : 0,
  /* Limit workers on CI */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter */
  reporter: process.env.CI ? 'github' : 'html',

  use: {
    /* Base URL — override with BASE_URL env var, falls back to Live Server */
    baseURL: process.env.BASE_URL ?? 'http://localhost:5500',
    /* Collect traces on first retry */
    trace: 'on-first-retry',
    /* Screenshot on failure */
    screenshot: 'only-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    /* Mobile viewports */
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
  ],
});
