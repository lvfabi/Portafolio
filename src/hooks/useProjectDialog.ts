import { useSyncExternalStore } from "react";
import { projects } from "../data/projects";
import type { Project } from "../types/content";

const projectNavigation = "projectnavigation";

function subscribe(update: () => void) {
  window.addEventListener("hashchange", update);
  window.addEventListener(projectNavigation, update);
  return () => {
    window.removeEventListener("hashchange", update);
    window.removeEventListener(projectNavigation, update);
  };
}

function openProject(project: Project) {
  history.pushState({ portfolioProject: project.slug }, "", `#${project.slug}`);
  window.dispatchEvent(new Event(projectNavigation));
}

function closeProject() {
  const slug = location.hash.slice(1);
  if (history.state?.portfolioProject === slug) {
    history.back();
  } else {
    const url = new URL(location.href);
    url.hash = "";
    history.replaceState(null, "", url);
    window.dispatchEvent(new Event(projectNavigation));
  }
}

export function useProjectDialog() {
  const hash = useSyncExternalStore(
    subscribe,
    () => location.hash,
    () => "",
  );
  const project = projects.find(({ slug }) => `#${slug}` === hash);
  return { project, openProject, closeProject };
}
