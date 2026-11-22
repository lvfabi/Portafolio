import { m } from "motion/react";
import { profile } from "../../data/profile";
import { site } from "../../data/site";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { publicAsset } from "../../lib/assets";
import { easeExpo, fade, timings } from "../../lib/motion";
import type { Project } from "../../types/content";
import { Icon } from "../icons/Icon";
import { Button } from "../ui/Button";
import { ProjectCover } from "../ui/ProjectCover";
import { Tags } from "../ui/Tags";
import { ProjectGallery } from "./ProjectGallery";
import { ProjectPrototype } from "./ProjectPrototype";
import { ProjectTools } from "./ProjectTools";

export function ProjectModalContent({ project }: { project: Project }) {
  const reduced = useReducedMotion();
  const cover = publicAsset(
    typeof project.cover === "object"
      ? project.cover.src
      : (project.cover ?? `images/projects/${project.slug}/cover.webp`),
  );
  const links = [
    { label: site.demo, href: project.links?.demo },
    {
      label: site.github,
      href: profile.github ? project.links?.repo : undefined,
    },
  ].filter(({ href }) => href);
  const content = [
    <div key="title">
      {project.period && <p className="project-period">{project.period}</p>}
      <h2 id="project-modal-title">{project.title}</h2>
      {(project.links?.figma || project.links?.figmaEmbed) && (
        <ProjectPrototype
          embed={project.links.figmaEmbed}
          href={project.links.figma}
          projectTitle={project.title}
        />
      )}
    </div>,
    <div key="role">
      <h3>{site.role}</h3>
      <p>{project.role}</p>
    </div>,
    project.tools?.length || project.evaluatedStack?.length ? (
      <ProjectTools key="tools" project={project} />
    ) : null,
    project.description.length > 0 && (
      <div key="description" className="modal-description">
        {project.description.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    ),
    project.stack.length > 0 && <Tags key="stack" items={project.stack} />,
    <ProjectGallery key="gallery" project={project} />,
    links.length > 0 && (
      <div key="links" className="actions">
        {links.map(
          ({ label, href }) =>
            href && (
              <Button href={href} variant="outline" key={label}>
                {label}
                <Icon name="arrow" />
              </Button>
            ),
        )}
      </div>
    ),
  ];
  return (
    <>
      {(project.featured || cover || project.artwork) && (
        <div className="modal-cover">
          <ProjectCover project={project} />
        </div>
      )}
      <div className="modal-copy">
        {content.map(
          (child, index) =>
            child && (
              <m.div
                key={child.key}
                initial={reduced ? { opacity: 0 } : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={
                  reduced
                    ? fade
                    : {
                        duration: 0.3,
                        delay:
                          timings.dialogContent + index * timings.dialogStep,
                        ease: easeExpo,
                      }
                }
              >
                {child}
              </m.div>
            ),
        )}
      </div>
    </>
  );
}
