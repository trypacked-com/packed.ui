import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

type RegistryFile = {
  path: string;
  type: string;
  target?: string;
};

type RegistryItem = {
  name: string;
  type: string;
  title?: string;
  description?: string;
  dependencies?: string[];
  registryDependencies?: string[];
  files?: RegistryFile[];
};

type RegistryManifest = {
  $schema: string;
  name?: string;
  homepage?: string;
  items: RegistryItem[];
};

const root = process.cwd();
const manifestPath = resolve(root, "registry.json");
const outputRoot = resolve(root, "public", "r");

const manifestRaw = await readFile(manifestPath, "utf8");
const manifest = JSON.parse(manifestRaw) as RegistryManifest;

await rm(outputRoot, { recursive: true, force: true });
await mkdir(outputRoot, { recursive: true });

for (const item of manifest.items) {
  const files = await Promise.all(
    (item.files ?? []).map(async (file) => {
      const absPath = resolve(root, file.path);
      const content = await readFile(absPath, "utf8");

      return {
        ...file,
        content,
      };
    }),
  );

  const payload: RegistryItem & { $schema: string } = {
    $schema: "https://ui.shadcn.com/schema/registry-item.json",
    ...item,
    files,
  };

  const itemPath = resolve(outputRoot, `${item.name}.json`);
  await writeFile(itemPath, `${JSON.stringify(payload, null, 2)}\n`, "utf8");
}

const publicRegistryPath = resolve(root, "public", "registry.json");
await writeFile(publicRegistryPath, `${manifestRaw.trim()}\n`, "utf8");
