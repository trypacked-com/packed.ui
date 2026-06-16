import { readdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = process.cwd();
const itemsDir = resolve(root, "registry", "items");
const manifestPath = resolve(root, "registry.json");

const baseRaw = await readFile(manifestPath, "utf8");
const base = JSON.parse(baseRaw) as {
  $schema: string;
  name: string;
  homepage: string;
  items: Array<Record<string, unknown>>;
};

let files: string[] = [];
try {
  files = (await readdir(itemsDir)).filter((f) => f.endsWith(".json"));
} catch {
  files = [];
}

for (const file of files) {
  const raw = await readFile(resolve(itemsDir, file), "utf8");
  const item = JSON.parse(raw) as Record<string, unknown>;
  const name = item.name as string;
  base.items = base.items.filter((i) => i.name !== name);
  base.items.push(item);
}

base.items.sort((a, b) => String(a.name).localeCompare(String(b.name)));

await writeFile(manifestPath, `${JSON.stringify(base, null, 2)}\n`, "utf8");
console.log(`merged ${files.length} item manifests`);
