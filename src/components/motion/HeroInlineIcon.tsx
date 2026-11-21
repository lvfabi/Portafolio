import { m, useAnimationControls } from "motion/react";
import { useFinePointer } from "../../hooks/useFinePointer";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { softSpring, timings } from "../../lib/motion";
import type { DecorativeIcon } from "../../types/content";
import { Decorative } from "../icons/Decorative";

export function HeroInlineIcon({
  kind,
  delay,
}: {
  kind: DecorativeIcon;
  delay: number;
}) {
  const reduced = useReducedMotion();
  const fine = useFinePointer();
  const hover = useAnimationControls();
  return (
    <m.span
      className={`hero-inline hero-inline--${kind}`}
      initial={reduced ? false : { scale: 0, rotate: -90 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={
        reduced
          ? { duration: 0 }
          : { ...softSpring, visualDuration: timings.heroIcon, delay }
      }
    >
      <m.span
        animate={hover}
        onHoverStart={
          fine
            ? () => {
                hover.set({ rotate: 0 });
                void hover.start({
                  rotate: 360,
                  transition: { duration: timings.iconHover },
                });
              }
            : undefined
        }
      >
        <m.span
          animate={reduced ? { rotate: 0 } : { rotate: 360 }}
          transition={
            reduced
              ? { duration: 0 }
              : {
                  duration:
                    kind === "sparkle"
                      ? timings.sparkleSpin
                      : timings.flowerSpin,
                  ease: "linear",
                  repeat: Infinity,
                }
          }
        >
          <m.span
            animate={
              reduced || kind !== "sparkle"
                ? { scale: 1 }
                : { scale: [1, 1.15, 1] }
            }
            transition={
              reduced || kind !== "sparkle"
                ? { duration: 0 }
                : { duration: timings.sparklePulse, repeat: Infinity }
            }
          >
            <Decorative kind={kind} />
          </m.span>
        </m.span>
      </m.span>
    </m.span>
  );
}
