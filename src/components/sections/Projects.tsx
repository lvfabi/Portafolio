import { projects } from "../../data/projects";
import { site } from "../../data/site";
import { anchors } from "../../lib/constants";
import type { Project } from "../../types/content";
import { SectionLabel } from "../ui/SectionLabel";
import { ProjectCard } from "./ProjectCard";
import { ProjectRow } from "./ProjectRow";

export function Projects({ onOpen }: { onOpen: (project: Project) => void }) {
  return (
    <section
      id={anchors.projects}
      tabIndex={-1}
      aria-labelledby="proyectos-titulo"
    >
      <h2 id="proyectos-titulo" className="project-section-title">
        <SectionLabel title={site.projects} />
      </h2>
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
    </section>
  );
}
