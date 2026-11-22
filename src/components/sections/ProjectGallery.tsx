import { site } from "../../data/site";
import { projectGallery, publicAsset } from "../../lib/assets";
import type { Project } from "../../types/content";
import { PortfolioImage } from "../ui/PortfolioImage";

export function ProjectGallery({ project }: { project: Project }) {
  const images = (project.gallery ?? projectGallery(project.slug)).flatMap(
    (entry, index) => {
      const photo =
        typeof entry === "string"
          ? {
              src: entry,
              alt: site.galleryAlt(project.title, index + 1),
              width: 1280,
              height: 800,
            }
          : entry;
      const src = publicAsset(photo.src);
      return src ? [{ ...photo, src }] : [];
    },
  );
  if (!images.length) return null;

  const portrait = images.every(({ width, height }) => height > width);
  return (
    <section className="project-gallery" aria-labelledby="gallery-title">
      <h3 id="gallery-title">{site.gallery}</h3>
      <div
        className={
          portrait ? "gallery-track gallery-track--portrait" : "gallery-track"
        }
        tabIndex={0}
        role="region"
        aria-labelledby="gallery-title"
      >
        {images.map(({ src, alt, width, height, ...details }) => (
          <figure className="gallery-item" key={src}>
            <div
              className={
                height > width
                  ? "gallery-tile gallery-tile--portrait"
                  : "gallery-tile"
              }
            >
              <PortfolioImage
                src={src}
                alt={alt}
                width={width}
                height={height}
              />
            </div>
            {"caption" in details && (
              <figcaption>
                <span>{details.caption}</span>
                <a
                  href={src}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={site.fullSizeLabel(details.caption)}
                >
                  {site.fullSize}
                </a>
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </section>
  );
}
