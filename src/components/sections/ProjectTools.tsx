import { site } from "../../data/site";
import type { Project } from "../../types/content";
import { Tags } from "../ui/Tags";

export function ProjectTools({ project }: { project: Project }) {
  return (
    <>
      {project.tools && project.tools.length > 0 && (
        <section aria-labelledby="project-tools-title">
          <h3 id="project-tools-title">{project.toolsHeading ?? site.tools}</h3>
          <dl className="project-tools">
            {project.tools.map(({ name, application }) => (
              <div key={name}>
                <dt>{name}</dt>
                <dd>
                  <p>{application}</p>
                </dd>
              </div>
            ))}
          </dl>
        </section>
      )}
      {project.evaluatedStack && project.evaluatedStack.length > 0 && (
        <section
          className="project-evaluated-stack"
          aria-labelledby="project-evaluated-title"
        >
          <h3 id="project-evaluated-title">{site.evaluatedStack}</h3>
          <Tags items={project.evaluatedStack} accent={1} />
        </section>
      )}
    </>
  );
}
