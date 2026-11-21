import { m, useMotionValue, useSpring } from "motion/react";
import type { PointerEvent } from "react";
import { useFinePointer } from "../../hooks/useFinePointer";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { easeInOut, softSpring } from "../../lib/motion";
import { Decorative } from "../icons/Decorative";

const marks = [
  { kind: "sparkle", duration: 6 },
  { kind: "heart", duration: 8 },
  { kind: "sparkle", duration: 9 },
] as const;

export function HeroDecor() {
  const reduced = useReducedMotion();
  const fine = useFinePointer();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, softSpring);
  const springY = useSpring(y, softSpring);

  function move(event: PointerEvent<HTMLDivElement>) {
    const box = event.currentTarget.getBoundingClientRect();
    x.set(((event.clientX - box.left) / box.width - 0.5) * 24);
    y.set(((event.clientY - box.top) / box.height - 0.5) * 24);
  }

  return (
    <div
      className="hero-decor"
      aria-hidden="true"
      onPointerMove={fine ? move : undefined}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      <m.div
        className="hero-decor-layer"
        style={fine ? { x: springX, y: springY } : undefined}
      >
        {marks.map(({ kind, duration }, index) => (
          <m.span
            key={duration}
            className={`hero-mark hero-mark--${index + 1}`}
            animate={reduced ? { y: 0 } : { y: [-10, 10] }}
            transition={
              reduced
                ? { duration: 0 }
                : {
                    duration,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: easeInOut,
                  }
            }
          >
            <Decorative kind={kind} />
          </m.span>
        ))}
      </m.div>
    </div>
  );
}
