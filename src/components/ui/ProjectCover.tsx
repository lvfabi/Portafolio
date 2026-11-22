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
  const photo = typeof project.cover === "object" ? project.cover : undefined;
  const src = publicAsset(
    photo?.src ??
      (typeof project.cover === "string"
        ? project.cover
        : `images/projects/${project.slug}/cover.webp`),
  );
  const artwork = project.artwork;
  return (
    <PortfolioImage
      src={src}
      alt={decorative ? "" : (photo?.alt ?? site.coverAlt(project.title))}
      width={photo?.width ?? 1600}
      height={photo?.height ?? 1000}
      position={photo?.position}
      fallback={
        artwork && {
          src: publicAsset(artwork.src),
          alt: decorative ? "" : artwork.alt,
          width: 960,
          height: 600,
        }
      }
    />
  );
}
