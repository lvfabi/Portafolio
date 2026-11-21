import { m, useScroll } from "motion/react";
import { useRef } from "react";
import { site } from "../../data/site";
import { timeline } from "../../data/timeline";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { Decorative } from "../icons/Decorative";
import { Reveal } from "../motion/Reveal";

export function Timeline() {
  const timelineRef = useRef<HTMLOListElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 90%", "end 65%"],
  });

  return (
    <section className="section-space" aria-labelledby="timeline-title">
      <Reveal>
        <h2 id="timeline-title" className="section-title">
          {site.timeline}
        </h2>
      </Reveal>
      <div className="timeline">
        <m.div
          className="timeline-line"
          aria-hidden="true"
          style={{ scaleY: reduced ? 1 : scrollYProgress }}
        />
        <ol ref={timelineRef}>
          {timeline.map(({ title, organization, period }, index) => (
            <li key={title}>
              <Decorative
                className="timeline-node"
                kind={index % 2 ? "flower" : "sparkle"}
              />
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
    </section>
  );
}
