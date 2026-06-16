import { execSync } from "node:child_process";
import { rmSync } from "node:fs";
import { resolve } from "node:path";

const root = process.cwd();
const outDir = resolve(root, "public", "storybook");

rmSync(outDir, { recursive: true, force: true });

execSync("storybook build -o public/storybook", {
  cwd: root,
  stdio: "inherit",
});

process.exit(0);
