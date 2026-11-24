import { projects } from "../../data/projects";
import { site } from "../../data/site";
import { anchors } from "../../lib/constants";
import type { Project } from "../../types/content";
import { WindowHeading } from "../ui/WindowHeading";
import { ProjectCard } from "./ProjectCard";
import { ProjectRow } from "./ProjectRow";

export function Projects({ onOpen }: { onOpen: (project: Project) => void }) {
  return (
    <section
      className="retro-window projects-window"
      id={anchors.projects}
      tabIndex={-1}
      aria-labelledby="proyectos-titulo"
    >
      <WindowHeading id="proyectos-titulo" title={site.projects} />
      <div className="window-content">
        <div className="project-grid">
          {projects
            .filter((project) => project.featured)
            .map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                order={index}
                onOpen={onOpen}
              />
            ))}
        </div>
        <div className="academic-projects">
          <h3>{site.otherProjects}</h3>
          {projects
            .filter((project) => !project.featured)
            .map((project, index) => (
              <ProjectRow
                key={project.slug}
                project={project}
                order={index}
                onOpen={onOpen}
              />
            ))}
        </div>
      </div>
    </section>
  );
}
