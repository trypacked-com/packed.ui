import { expect, test } from "bun:test";
import path from "node:path";

const root = path.join(import.meta.dir, "..");

test(
  "storybook visual regression",
  () => {
    const proc = Bun.spawnSync(["bunx", "playwright", "test"], {
      cwd: root,
      stdout: "inherit",
      stderr: "inherit",
      env: process.env,
    });

    expect(proc.exitCode).toBe(0);
  },
  { timeout: 600_000 },
);
