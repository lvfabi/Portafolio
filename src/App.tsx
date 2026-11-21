import {
  AnimatePresence,
  domMax,
  LayoutGroup,
  LazyMotion,
  MotionConfig,
} from "motion/react";
import { lazy, Suspense, useEffect } from "react";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/sections/Footer";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";
import { Timeline } from "./components/sections/Timeline";
import { Header } from "./components/sections/Header";
import { Projects } from "./components/sections/Projects";
import { Hero } from "./components/sections/Hero";
import { SectionLink } from "./components/ui/SectionLink";
import { site } from "./data/site";
import { useProjectDialog } from "./hooks/useProjectDialog";
import { useReducedMotion } from "./hooks/useReducedMotion";
import { anchors } from "./lib/constants";
import { startSmoothScroll } from "./lib/scroll";

const ProjectModal = lazy(() => import("./components/sections/ProjectModal"));

export default function App() {
  const { project, openProject, closeProject } = useProjectDialog();
  const reduced = useReducedMotion();
  useEffect(() => {
    if (!reduced) return startSmoothScroll();
  }, [reduced]);

  return (
    <LazyMotion features={domMax} strict>
      <MotionConfig reducedMotion="user">
        <SectionLink target={anchors.main} className="skip-link">
          {site.skip}
        </SectionLink>
        <Header />
        <LayoutGroup>
          <main id={anchors.main} className="site-container" tabIndex={-1}>
            <Hero />
            <Projects onOpen={openProject} />
            <About />
            <Skills />
            <Timeline />
            <Contact />
          </main>
          <Suspense fallback={null}>
            <AnimatePresence>
              {project && (
                <ProjectModal
                  key={project.slug}
                  project={project}
                  onClose={closeProject}
                />
              )}
            </AnimatePresence>
          </Suspense>
        </LayoutGroup>
        <Footer />
      </MotionConfig>
    </LazyMotion>
  );
}
