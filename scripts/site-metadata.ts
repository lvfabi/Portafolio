import type { HtmlTagDescriptor, Plugin } from "vite";
import { seo } from "../src/data/seo";

const escapeXml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");

export function siteMetadata(siteUrl: URL | undefined): Plugin {
  return {
    name: "portfolio-site-metadata",
    transformIndexHtml(html) {
      const title =
        html
          .match(/<title>([^<]*)<\/title>/)?.[1]
          .replace(/\s+/g, " ")
          .trim() ?? "";
      const image = siteUrl
        ? new URL(seo.socialImage, siteUrl).href
        : `./${seo.socialImage}`;
      const meta = (
        key: string,
        content: string,
        attribute = "name",
      ): HtmlTagDescriptor => ({
        tag: "meta",
        attrs: { [attribute]: key, content },
        injectTo: "head",
      });
      const og = (key: string, content: string) =>
        meta(`og:${key}`, content, "property");

      return [
        meta("description", seo.description),
        og("type", "website"),
        og("locale", "es_CL"),
        og("title", title),
        og("description", seo.description),
        og("image", image),
        og("image:alt", seo.socialImageAlt),
        og("image:width", "1200"),
        og("image:height", "630"),
        meta("twitter:card", "summary_large_image"),
        meta("twitter:title", title),
        meta("twitter:description", seo.description),
        meta("twitter:image", image),
        meta("twitter:image:alt", seo.socialImageAlt),
        ...(siteUrl
          ? [
              og("url", siteUrl.href),
              {
                tag: "link",
                attrs: { rel: "canonical", href: siteUrl.href },
                injectTo: "head" as const,
              },
            ]
          : []),
      ];
    },
    generateBundle() {
      if (!siteUrl) return;
      this.emitFile({
        type: "asset",
        fileName: "sitemap.xml",
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${escapeXml(siteUrl.href)}</loc></url></urlset>\n`,
      });
      this.emitFile({
        type: "asset",
        fileName: "robots.txt",
        source: `User-agent: *\nAllow: /\nSitemap: ${new URL("sitemap.xml", siteUrl).href}\n`,
      });
    },
  };
}
