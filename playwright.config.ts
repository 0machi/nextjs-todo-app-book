import type { PlaywrightTestConfig } from '@playwright/test'
import { devices } from '@playwright/test'

/**
 * See https://playwright.dev/docs/test-configuration.
 */
const config: PlaywrightTestConfig = {
  testDir: './e2e',
  fullyParallel: false,
  expect: {
    timeout: 5000,
  },
  retries: 0,
  reporter: [process.env.CI ? ['list'] : ['html', { host: '0.0.0.0', port: '9323', open: 'always' }]],
  use: {
    baseURL: 'http://127.0.0.1:3002',
    trace: 'on-first-retry',
    headless: false,
    locale: 'ja-JP',
    storageState: './e2e/.auth/user.json',
  },
  projects: [
    {
      name: 'setup',
      testMatch: '**/*.setup.ts',
    },
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
      dependencies: ['setup'],
    },
  ],
}

export default config
