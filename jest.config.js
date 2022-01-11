process.env.TZ = 'UTC';

module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./src/setupTests.ts'],
  transform: {
    '.(ts|tsx)': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'json', 'js', 'jsx', 'node'],
  moduleNameMapper: {
    '^api(.*)$': '<rootDir>/src/api$1',
    '^common(.*)$': '<rootDir>/src/common$1',
    '^store(.*)$': '<rootDir>/src/store$1',
    '^theme(.*)$': '<rootDir>/src/theme$1',
    '^routes(.*)$': '<rootDir>/src/routes$1',
    '^App(.*)$': '<rootDir>/src/App$1',
    '^features(.*)$': '<rootDir>/src/features$1',
    '^test-helpers(.*)$': '<rootDir>/src/test-helpers$1',
  },
};
