import type { Project } from "../../types/content";
import { Icon } from "../icons/Icon";
import { Reveal } from "../motion/Reveal";
import { Tags } from "../ui/Tags";

export function ProjectRow({
  project,
  order,
  onOpen,
}: {
  project: Project;
  order: number;
  onOpen: (project: Project) => void;
}) {
  const titleId = `card-${project.slug}`;
  return (
    <Reveal className="project-row" order={order}>
      <button
        type="button"
        className="project-hit"
        aria-labelledby={titleId}
        aria-haspopup="dialog"
        data-project={project.slug}
        onClick={(event) => {
          event.currentTarget.focus({ preventScroll: true });
          onOpen(project);
        }}
      />
      <div>
        <h4 id={titleId}>{project.title}</h4>
        <p>{project.summary}</p>
        <Tags items={project.stack} />
      </div>
      <Icon name="arrow" />
    </Reveal>
  );
}
