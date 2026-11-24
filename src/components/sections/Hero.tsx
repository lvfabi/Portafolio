import { m } from "motion/react";
import { profile } from "../../data/profile";
import { site } from "../../data/site";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { publicAsset } from "../../lib/assets";
import { anchors } from "../../lib/constants";
import { easeExpo, fade, timings } from "../../lib/motion";
import { Icon } from "../icons/Icon";
import { HeroTitle } from "../motion/HeroTitle";
import { Button } from "../ui/Button";
import { SectionLink } from "../ui/SectionLink";

export function Hero() {
  const reduced = useReducedMotion();
  const cv = publicAsset(profile.cv);
  const content = [
    <p key="intro" className="hero-intro">
      {profile.heroSubtitle}
    </p>,
    <p key="availability" className="pill availability">
      <span aria-hidden="true" />
      {profile.availability}
    </p>,
    <div key="actions" className="actions">
      <SectionLink target={anchors.projects} variant="primary">
        {site.projectsAction}
        <Icon name="down" />
      </SectionLink>
      {cv && (
        <Button variant="text" href={cv} download>
          {site.cv}
          <Icon name="download" />
        </Button>
      )}
    </div>,
  ];

  return (
    <section
      className="hero"
      id={anchors.top}
      tabIndex={-1}
      aria-labelledby="inicio-titulo"
    >
      <div className="hero-content">
        <HeroTitle />
        {content.map((child, index) => (
          <m.div
            key={child.key}
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={
              reduced
                ? fade
                : {
                    duration: timings.heroContent,
                    delay:
                      timings.heroContentStart +
                      index * timings.heroContentStep,
                    ease: easeExpo,
                  }
            }
          >
            {child}
          </m.div>
        ))}
      </div>
      <div className="hero-visual" aria-hidden="true">
        <img
          src={publicAsset(profile.heroArtwork)}
          width={416}
          height={312}
          alt=""
        />
      </div>
    </section>
  );
}
