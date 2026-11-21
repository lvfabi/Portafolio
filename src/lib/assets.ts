declare const __PUBLIC_ASSETS__: string[];

const assets = new Set(__PUBLIC_ASSETS__);

export function publicAsset(path: string) {
  const relative = path.replace(/^\//, "");
  return assets.has(relative)
    ? `${import.meta.env.BASE_URL}${relative}`
    : undefined;
}

export function projectGallery(slug: string) {
  const prefix = `images/projects/${slug}/gallery-`;
  return __PUBLIC_ASSETS__
    .filter(
      (path) => path.startsWith(prefix) && /\/(gallery-\d+)\.webp$/.test(path),
    )
    .sort((a, b) => a.localeCompare(b, "es", { numeric: true }));
}
