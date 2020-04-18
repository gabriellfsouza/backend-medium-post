// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html
require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});


module.exports = {

  // Stop running tests after `n` failures
  bail: 1,

  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // An array of glob patterns indicating a set of files for which coverage
  // information should be collected
  collectCoverageFrom: ['src/app/**/*.js'],

  // Indicates whether the coverage information should be collected while
  // executing the test
  collectCoverage: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // A list of reporter names that Jest uses when writing coverage reports
  coverageReporters: [
    //   "json",
    'text',
    'lcov',
    //   "clover"
  ],


  // A preset that is used as a base for Jest's configuration
  preset: '@shelf/jest-mongodb',

  // A list of paths to modules that run some code to configure or set up the
  // testing framework before each test
  setupFilesAfterEnv: ['./jest.setup.js'],

  // A path to a module which exports an async function that is triggered once
  // before all test suites
  // globalSetup: null,

  // A path to a module which exports an async function that is triggered once
  // after all test suites
  // globalTeardown: null,

  // The test environment that will be used for testing
  testEnvironment: 'node',

  // The glob patterns Jest uses to detect test files
  testMatch: [
    '**/__tests__/**/*.test.js',
    //   "**/?(*.)+(spec|test).[tj]s?(x)"
  ],

  // An array of regexp pattern strings that are matched against all source
  // file paths, matched files will skip transformation
  transform: {
    '.(js|jsx|ts|tsx)': '@sucrase/jest-plugin',
  },

};
