import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import { basename, resolve } from "node:path";

const root = process.cwd();
const uiDir = resolve(root, "registry", "ui");
const handoffDir = resolve(root, "handoff", "components");
const itemsDir = resolve(root, "registry", "items");

const NPM_DEPS: Record<string, string[]> = {
  "class-variance-authority": ["cva"],
  "radix-ui": ["radix-ui"],
  "lucide-react": ["lucide-react"],
  cmdk: ["cmdk"],
  vaul: ["vaul"],
  "input-otp": ["input-otp"],
  "react-hook-form": ["react-hook-form"],
  "react-day-picker": ["react-day-picker"],
  sonner: ["sonner"],
  zod: ["zod"],
  "@hookform/resolvers": ["@hookform/resolvers"],
};

const REGISTRY_IMPORT_RE = /from "@\/registry\/ui\/([^"]+)"/g;

function titleCase(name: string) {
  return name
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

async function handoffDescription(name: string): Promise<string | undefined> {
  const dirs = ["core", "forms", "feedback", "navigation"];
  for (const dir of dirs) {
    const promptPath = resolve(
      handoffDir,
      dir,
      `${titleCase(name).replace(/ /g, "")}.prompt.md`,
    );
    const altPath = resolve(
      handoffDir,
      dir,
      `${name
        .split("-")
        .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
        .join("")}.prompt.md`,
    );
    for (const path of [promptPath, altPath]) {
      try {
        const raw = await readFile(path, "utf8");
        const first = raw.split("\n").find((line) => line.trim().length > 0);
        if (first && !first.startsWith("```")) return first.trim();
      } catch {
        /* try next */
      }
    }
  }
  return undefined;
}

function detectNpmDeps(source: string): string[] {
  const found = new Set<string>();
  for (const [pkg, needles] of Object.entries(NPM_DEPS)) {
    if (needles.some((needle) => source.includes(needle))) {
      found.add(pkg);
    }
  }
  return [...found].sort();
}

function detectRegistryDeps(source: string): string[] {
  const deps = new Set<string>(["@packed/utils"]);
  for (const match of source.matchAll(REGISTRY_IMPORT_RE)) {
    deps.add(`@packed/${match[1]}`);
  }
  return [...deps].sort();
}

const uiFiles = (await readdir(uiDir)).filter((f) => f.endsWith(".tsx"));
await mkdir(itemsDir, { recursive: true });

for (const file of uiFiles) {
  const name = basename(file, ".tsx");
  const source = await readFile(resolve(uiDir, file), "utf8");
  const description =
    (await handoffDescription(name)) ??
    `Packed ${titleCase(name)} — warm, token-driven UI on sand surfaces.`;

  const item = {
    name,
    type: "registry:ui",
    title: titleCase(name),
    description,
    dependencies: detectNpmDeps(source),
    registryDependencies: detectRegistryDeps(source),
    files: [
      {
        path: `registry/ui/${file}`,
        type: "registry:ui",
        target: `components/ui/${file}`,
      },
    ],
  };

  await writeFile(
    resolve(itemsDir, `${name}.json`),
    `${JSON.stringify(item, null, 2)}\n`,
    "utf8",
  );
}

console.log(`wrote ${uiFiles.length} registry item manifests`);
