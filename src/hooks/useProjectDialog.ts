import { useSyncExternalStore } from "react";
import { projects } from "../data/projects";
import type { Project } from "../types/content";

const projectNavigation = "projectnavigation";

function subscribe(update: () => void) {
  window.addEventListener("hashchange", update);
  window.addEventListener("popstate", update);
  window.addEventListener(projectNavigation, update);
  return () => {
    window.removeEventListener("hashchange", update);
    window.removeEventListener("popstate", update);
    window.removeEventListener(projectNavigation, update);
  };
}

function openProject(project: Project) {
  history.pushState(
    { portfolioProject: project.slug, returnHash: location.hash },
    "",
    `#${project.slug}`,
  );
  window.dispatchEvent(new Event(projectNavigation));
}

function closeProject() {
  const project = findProject(location.hash);
  if (!project) return;

  // Close the current entry without restoring scroll from a history traversal.
  const url = new URL(location.href);
  const state = history.state;
  url.hash =
    state?.portfolioProject === project.slug ? (state.returnHash ?? "") : "";
  history.replaceState(null, "", url);
  window.dispatchEvent(new Event(projectNavigation));
}

function findProject(hash: string) {
  return projects.find(({ slug }) => `#${slug}` === hash);
}

export function useProjectDialog() {
  const hash = useSyncExternalStore(
    subscribe,
    () => location.hash,
    () => "",
  );
  const project = findProject(hash);
  return { project, openProject, closeProject };
}
