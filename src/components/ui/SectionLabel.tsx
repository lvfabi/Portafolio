import { m } from "motion/react";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { easeExpo, fade, timings } from "../../lib/motion";

export function SectionLabel({ title }: { title: string }) {
  const reduced = useReducedMotion();
  return (
    <m.span
      className="pill section-label"
      initial={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={
        reduced ? fade : { duration: timings.sectionLabel, ease: easeExpo }
      }
    >
      {title}
    </m.span>
  );
}
