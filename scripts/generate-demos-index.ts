import { readdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const demosDir = resolve(process.cwd(), "app", "(docs)", "demos");
const files = (await readdir(demosDir)).filter(
  (f) => f.endsWith(".tsx") && f !== "index.tsx",
);

const imports = files
  .map((f) => {
    const name = f.replace(/\.tsx$/, "");
    const ident = name
      .split("-")
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join("");
    return `import ${ident}Demo from "./${name}";`;
  })
  .sort()
  .join("\n");

const entries = files
  .map((f) => {
    const slug = f.replace(/\.tsx$/, "");
    const ident = slug
      .split("-")
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join("");
    return `  "${slug}": ${ident}Demo,`;
  })
  .sort()
  .join("\n");

const content = `${imports}

import type { ComponentType } from "react";

export const demos: Record<string, ComponentType> = {
${entries}
};
`;

await writeFile(resolve(demosDir, "index.ts"), content, "utf8");
console.log(`demos index: ${files.length} entries`);
