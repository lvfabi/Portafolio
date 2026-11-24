import { m } from "motion/react";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { easeExpo, fade, timings } from "../../lib/motion";

export function WindowHeading({ id, title }: { id: string; title: string }) {
  const reduced = useReducedMotion();

  return (
    <h2 className="window-heading" id={id}>
      <m.span
        initial={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={
          reduced ? fade : { duration: timings.sectionLabel, ease: easeExpo }
        }
      >
        {title}
      </m.span>
    </h2>
  );
}
