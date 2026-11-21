import { readdir, readFile } from "node:fs/promises";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const rootUrl = new URL("../", import.meta.url);
const root = fileURLToPath(rootUrl);
const textFile = /\.(?:tsx?|jsx?|mjs|json|md|txt|svg|xml|html|css)$/i;
let count = 0;

for (const folder of ["src/data/", "public/"]) {
  const directory = new URL(folder, rootUrl);
  const entries = await readdir(directory, {
    withFileTypes: true,
    recursive: true,
  });
  for (const entry of entries.sort((a, b) => a.name.localeCompare(b.name))) {
    if (!entry.isFile() || !textFile.test(entry.name)) continue;
    const path = join(entry.parentPath, entry.name);
    const content = await readFile(path, "utf8");
    for (const [index, line] of content.split(/\r?\n/).entries()) {
      if (!/\bTODO\b/.test(line)) continue;
      console.log(`${relative(root, path)}:${index + 1} ${line.trim()}`);
      count += 1;
    }
  }
}

console.log(
  count
    ? `\nPendientes de contenido: ${count}.`
    : "Sin pendientes de contenido.",
);
