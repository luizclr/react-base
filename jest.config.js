module.exports = {
  roots: ["<rootDir>/tests"],
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/**/enums/**/*.ts",
    "!src/react-app-env.d.ts",
    "!src/index.tsx",
  ],
  setupFilesAfterEnv: ["./tests/setup.js"],
  testMatch: ["<rootDir>/tests/**/*.{spec,test}.{js,jsx,ts,tsx}"],
  moduleNameMapper: {
    "^~/(.*)$": "<rootDir>/src/$1",
    "^#/(.*)$": "<rootDir>/tests/$1",
  },
  coverageThreshold: {
    global: {
      branches: 75,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};
