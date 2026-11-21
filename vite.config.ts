import { readdirSync } from "node:fs";
import { join, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { siteMetadata } from "./scripts/site-metadata";

const publicDir = fileURLToPath(new URL("./public/", import.meta.url));

function getSiteUrl() {
  if (!process.env.SITE_URL) return;
  const url = new URL(process.env.SITE_URL);
  if (
    url.protocol !== "https:" ||
    url.search ||
    url.hash ||
    url.username ||
    url.password
  ) {
    throw new Error(
      "SITE_URL debe ser una dirección HTTPS sin credenciales, parámetros ni fragmento.",
    );
  }
  if (!url.pathname.endsWith("/")) url.pathname += "/";
  return url;
}

export default defineConfig(() => {
  const siteUrl = getSiteUrl();
  const assets = readdirSync(publicDir, {
    recursive: true,
    withFileTypes: true,
  })
    .filter((entry) => entry.isFile())
    .map((entry) =>
      relative(publicDir, join(entry.parentPath, entry.name))
        .split(sep)
        .join("/"),
    )
    .sort();

  return {
    base: siteUrl?.pathname ?? "/",
    plugins: [react(), tailwindcss(), siteMetadata(siteUrl)],
    define: { __PUBLIC_ASSETS__: JSON.stringify(assets) },
  };
});
