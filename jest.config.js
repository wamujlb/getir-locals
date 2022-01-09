process.env.TZ = 'UTC';

module.exports = {
  testEnvironment: 'jest-environment-jsdom-sixteen',
  setupFilesAfterEnv: ['./src/setupTests.ts'],
  transform: {
    '.(ts|tsx)': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'json', 'js', 'jsx', 'node'],
  moduleNameMapper: {
    '^api(.*)$': '<rootDir>/src/api$1',
    '^common(.*)$': '<rootDir>/src/common$1',
    '^routes(.*)$': '<rootDir>/src/routes$1',
    '^app(.*)$': '<rootDir>/src/app$1',
    '^features(.*)$': '<rootDir>/src/features$1',
    '^test-helpers(.*)$': '<rootDir>/src/test-helpers$1',
  },
};
