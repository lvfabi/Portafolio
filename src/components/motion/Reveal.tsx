import { m } from "motion/react";
import type { ReactNode } from "react";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { easeExpo, fade, timings } from "../../lib/motion";

export function Reveal({
  children,
  className,
  order = 0,
  direction = "up",
}: {
  children: ReactNode;
  className?: string;
  order?: number;
  direction?: "up" | "right";
}) {
  const reduced = useReducedMotion();
  const displacement = direction === "right" ? { x: 24 } : { y: 28 };
  return (
    <m.div
      className={className}
      initial={reduced ? { opacity: 0 } : { opacity: 0, ...displacement }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={
        reduced
          ? fade
          : {
              duration: timings.reveal,
              delay: order * timings.revealStep,
              ease: easeExpo,
            }
      }
    >
      {children}
    </m.div>
  );
}
