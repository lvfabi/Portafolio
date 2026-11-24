import { m } from "motion/react";
import { useLayoutEffect, useRef } from "react";
import type { KeyboardEvent } from "react";
import { site } from "../../data/site";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { anchors } from "../../lib/constants";
import { dialogSpring, fade, timings } from "../../lib/motion";
import type { Project } from "../../types/content";
import { Icon } from "../icons/Icon";
import { ProjectModalContent } from "./ProjectModalContent";

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const reduced = useReducedMotion();

  useLayoutEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const trigger = document.activeElement;
    dialog.showModal();
    closeRef.current?.focus();
    return () => {
      dialog.close();
      const fallback = document.getElementById(anchors.projects);
      const target =
        trigger instanceof HTMLElement && trigger.matches("[data-project]")
          ? trigger
          : fallback;
      target?.focus({ preventScroll: true });
    };
  }, []);

  function trapFocus(event: KeyboardEvent<HTMLDialogElement>) {
    if (event.key !== "Tab") return;
    const focusable = event.currentTarget.querySelectorAll<HTMLElement>(
      'button:not([disabled]), a[href], iframe, [tabindex="0"]',
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const wrap = event.shiftKey ? first : last;
    if (document.activeElement === wrap) {
      event.preventDefault();
      (event.shiftKey ? last : first)?.focus();
    }
  }

  return (
    <dialog
      ref={dialogRef}
      className="project-dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onKeyDown={trapFocus}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <m.div
        className="dialog-overlay"
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: reduced ? fade.duration : timings.overlay }}
      />
      <m.div
        data-lenis-prevent
        className="dialog-panel"
        layoutId={
          reduced || !project.featured ? undefined : `project-${project.slug}`
        }
        initial={
          reduced || project.featured ? { opacity: 0 } : { opacity: 0, y: 20 }
        }
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={
          reduced
            ? fade
            : {
                layout: dialogSpring,
                opacity: { duration: timings.overlay },
                y: dialogSpring,
              }
        }
      >
        <div className="dialog-tools">
          <h2 id="project-modal-title">{project.title}</h2>
          <button
            ref={closeRef}
            type="button"
            className="close-dialog"
            aria-label={site.close}
            onClick={onClose}
          >
            <Icon name="close" />
          </button>
        </div>
        <ProjectModalContent project={project} />
      </m.div>
    </dialog>
  );
}
