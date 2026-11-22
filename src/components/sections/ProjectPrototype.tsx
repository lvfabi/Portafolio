import { site } from "../../data/site";
import { Icon } from "../icons/Icon";
import { Button } from "../ui/Button";

export function ProjectPrototype({
  src,
  projectTitle,
}: {
  src: string;
  projectTitle: string;
}) {
  return (
    <section
      className="project-prototype"
      aria-labelledby="project-prototype-title"
    >
      <div className="project-prototype-heading">
        <h3 id="project-prototype-title">{site.prototype}</h3>
        <Button
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          variant="text"
        >
          {site.openPrototype}
          <Icon name="arrow" />
        </Button>
      </div>
      <iframe
        className="project-prototype-frame"
        src={src}
        title={site.prototypeTitle(projectTitle)}
        width={800}
        height={450}
        allowFullScreen
        loading="lazy"
      />
    </section>
  );
}
