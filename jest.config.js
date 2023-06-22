module.exports = {
  verbose: true,
  roots: ["<rootDir>/tests", "<rootDir>/src"],
  collectCoverageFrom: ["src/**/*.{ts,tsx}", "!src/index.tsx"],
  setupFiles: ["./tests/setup-envs.js"],
  setupFilesAfterEnv: ["./tests/setup.js"],
  testMatch: ["<rootDir>/tests/**/*.{spec,test}.{ts,tsx}"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|svg)$": "<rootDir>/__mocks__/fileMock.js",
    "^~/(.*)$": "<rootDir>/src/$1",
    "^#/(.*)$": "<rootDir>/tests/$1",
  },
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};
