export default {
  preset: "ts-jest",
  testMatch: ["**/*.spec.ts"],
  modulePaths: ["<rootDir>/src/"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "@/tests/(.+)": "<rootDir>/tests/$1",
    "@/(.+)": "<rootDir>/src/$1",
  },
  roots: ["<rootDir>/src", "<rootDir>/tests"],
  transform: {
    "\\.ts$": "ts-jest",
  },
  clearMocks: true,
  setupFiles: ["dotenv/config"],
};
