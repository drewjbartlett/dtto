module.exports = {
  moduleFileExtensions: ['ts', 'json', 'js'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  collectCoverage: false,
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
};
