import { m, useScroll } from "motion/react";
import { useRef } from "react";
import { site } from "../../data/site";
import { timeline } from "../../data/timeline";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { Reveal } from "../motion/Reveal";
import { WindowHeading } from "../ui/WindowHeading";

export function Timeline() {
  const timelineRef = useRef<HTMLOListElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 90%", "end 65%"],
  });

  return (
    <section
      className="section-space retro-window timeline-window"
      aria-labelledby="timeline-title"
    >
      <WindowHeading id="timeline-title" title={site.timeline} />
      <div className="window-content">
        <div className="timeline">
          <m.div
            className="timeline-line"
            aria-hidden="true"
            style={{ scaleY: reduced ? 1 : scrollYProgress }}
          />
          <ol ref={timelineRef}>
            {timeline.map(({ title, organization, period }, index) => (
              <li key={title}>
                <span className="timeline-node" aria-hidden="true" />
                <Reveal
                  direction="right"
                  className="timeline-content"
                  order={index}
                >
                  <p className="timeline-period">{period}</p>
                  <h3>{title}</h3>
                  <p>{organization}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
