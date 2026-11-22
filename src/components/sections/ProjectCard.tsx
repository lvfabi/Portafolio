import { m, useInView, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { colors } from "../../lib/constants";
import { easeExpo, fade, timings } from "../../lib/motion";
import type { Project } from "../../types/content";
import { Icon } from "../icons/Icon";
import { CustomCursor } from "../motion/CustomCursor";
import { ProjectCover } from "../ui/ProjectCover";
import { Tags } from "../ui/Tags";

export function ProjectCard({
  project,
  order,
  onOpen,
}: {
  project: Project;
  order: number;
  onOpen: (project: Project) => void;
}) {
  const article = useRef<HTMLElement>(null);
  const cover = useRef<HTMLDivElement>(null);
  const inView = useInView(article, { once: true });
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: cover,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [-16, 16]);
  const titleId = `card-${project.slug}`;

  return (
    <article
      ref={article}
      className={`project-card tone-${colors[order % colors.length]}`}
    >
      <m.div
        layoutId={reduced ? undefined : `project-${project.slug}`}
        className="project-card-inner"
        initial={
          reduced
            ? { opacity: 0 }
            : { opacity: 0, clipPath: "inset(12% 6% 12% 6% round 28px)" }
        }
        animate={
          inView
            ? reduced
              ? { opacity: 1 }
              : {
                  opacity: 1,
                  clipPath: "inset(0% 0% 0% 0% round 28px)",
                  transitionEnd: { clipPath: "none" },
                }
            : undefined
        }
        transition={
          reduced
            ? fade
            : {
                duration: timings.card,
                delay: order * timings.revealStep,
                ease: easeExpo,
              }
        }
      >
        <CustomCursor>
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
          <div ref={cover} className="project-cover">
            <m.div
              className="project-parallax"
              style={reduced ? undefined : { y: imageY }}
            >
              <div className="project-zoom">
                <ProjectCover project={project} decorative />
              </div>
            </m.div>
          </div>
          <div className="project-copy">
            <div className="project-heading">
              <h3 id={titleId}>{project.title}</h3>
              <Icon name="arrow" />
            </div>
            <p>{project.summary}</p>
            <Tags items={project.stack} accent={order} />
            {project.period && (
              <p className="project-period">{project.period}</p>
            )}
          </div>
        </CustomCursor>
      </m.div>
    </article>
  );
}
