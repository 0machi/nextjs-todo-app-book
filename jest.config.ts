const config = {
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  modulePathIgnorePatterns: ['<rootDir>/supabase/'],
  testPathIgnorePatterns: ['<rootDir>/e2e/'],
  testEnvironment: 'jest-environment-jsdom',
  collectCoverage: false,
  coverageDirectory: 'coverage',
  setupFilesAfterEnv: ['./jest.setup.ts'],
  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        publicPath: '__reports__',
        filename: 'jest.html',
      },
    ],
  ],
}

export default config
