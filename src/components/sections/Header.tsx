import { m, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import { site } from "../../data/site";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { anchors, headerScrollThreshold } from "../../lib/constants";
import { easeExpo, fade, softSpring, timings } from "../../lib/motion";
import { Icon } from "../icons/Icon";
import { ScrollProgress } from "../motion/ScrollProgress";
import { Logo } from "../ui/Logo";
import { SectionLink } from "../ui/SectionLink";

export function Header() {
  const reduced = useReducedMotion();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(
    () => window.scrollY > headerScrollThreshold,
  );
  useMotionValueEvent(scrollY, "change", (value) =>
    setScrolled(value > headerScrollThreshold),
  );

  return (
    <header
      className={`site-header${scrolled ? " site-header--scrolled" : ""}`}
    >
      <ScrollProgress />
      <nav className="site-container header-inner" aria-label={site.nav}>
        <m.div
          initial={
            reduced ? { opacity: 0 } : { opacity: 0, scale: 0.6, rotate: -12 }
          }
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={
            reduced ? fade : { ...softSpring, visualDuration: timings.logo }
          }
        >
          <SectionLink
            target={anchors.top}
            className="logo-link"
            label={site.home}
          >
            <Logo />
          </SectionLink>
        </m.div>
        <div className="header-nav">
          <SectionLink target={anchors.projects}>{site.projects}</SectionLink>
          <SectionLink target={anchors.about}>{site.about}</SectionLink>
          <SectionLink target={anchors.contact}>{site.contact}</SectionLink>
        </div>
        <m.div
          initial={reduced ? { opacity: 0 } : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={
            reduced
              ? fade
              : {
                  duration: timings.heroContent,
                  delay: timings.headerAction,
                  ease: easeExpo,
                }
          }
        >
          <SectionLink target={anchors.contact} variant="primary">
            {site.contactAction}
            <Icon name="arrow" />
          </SectionLink>
        </m.div>
      </nav>
    </header>
  );
}
