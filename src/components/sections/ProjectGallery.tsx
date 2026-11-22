import { site } from "../../data/site";
import { projectGallery, publicAsset } from "../../lib/assets";
import type { Project } from "../../types/content";
import { PortfolioImage } from "../ui/PortfolioImage";

export function ProjectGallery({ project }: { project: Project }) {
  const images = (project.gallery ?? projectGallery(project.slug))
    .map(publicAsset)
    .filter((src): src is string => Boolean(src));
  if (!images.length) return null;

  return (
    <section className="project-gallery" aria-labelledby="gallery-title">
      <h3 id="gallery-title">{site.gallery}</h3>
      <div
        className="gallery-track"
        tabIndex={0}
        role="region"
        aria-labelledby="gallery-title"
      >
        {images.map((src, index) => (
          <div className="gallery-tile" key={src}>
            <PortfolioImage
              src={src}
              alt={site.galleryAlt(project.title, index + 1)}
              width={1280}
              height={800}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
