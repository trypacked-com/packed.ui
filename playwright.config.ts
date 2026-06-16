import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/visual",
  snapshotPathTemplate: "{testDir}/baselines/{arg}{ext}",
  use: {
    ...devices["Desktop Chrome"],
    viewport: { width: 1280, height: 720 },
    baseURL: "http://127.0.0.1:6007",
  },
  expect: {
    toHaveScreenshot: {
      maxDiffPixelRatio: 0.01,
    },
  },
  webServer: {
    command: "bun run storybook -- --port 6007 --ci --quiet",
    url: "http://127.0.0.1:6007",
    reuseExistingServer: false,
    timeout: 120000,
  },
});
