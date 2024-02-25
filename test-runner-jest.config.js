import { getJestConfig } from '@storybook/test-runner'

/**
 * @type {import('@jest/types').Config.InitialOptions}
 */
module.exports = {
  ...getJestConfig(),
  testEnvironmentOptions: {
    'jest-playwright': {
      connectOptions: {
        chromium: {
          wsEndpoint: 'ws://playwright:3001',
        },
      },
    },
  },
  testPathIgnorePatterns: ['/supabase/'],
}
