import { site } from "../../data/site";
import { publicAsset } from "../../lib/assets";
import type { Project } from "../../types/content";
import { PortfolioImage } from "./PortfolioImage";

export function ProjectCover({
  project,
  decorative = false,
}: {
  project: Project;
  decorative?: boolean;
}) {
  const src = publicAsset(
    project.cover ?? `images/projects/${project.slug}/cover.webp`,
  );
  const artwork = project.artwork;
  return (
    <PortfolioImage
      src={src}
      alt={decorative ? "" : site.coverAlt(project.title)}
      width={1600}
      height={1000}
      fallback={
        artwork && {
          src: publicAsset(artwork.src),
          alt: decorative ? "" : artwork.alt,
          width: 960,
          height: 600,
          pixelated: true,
        }
      }
    />
  );
}
