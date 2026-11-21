import { animate, m, useMotionValue } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { timings } from "../../lib/motion";
import { Decorative } from "../icons/Decorative";

export function Marquee({
  items,
  label,
}: {
  items: readonly string[];
  label: string;
}) {
  const reduced = useReducedMotion();
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const x = useMotionValue("0%");
  const playback = useRef<ReturnType<typeof animate> | null>(null);
  useEffect(() => {
    if (reduced) {
      x.set("0%");
      return;
    }
    const controls = animate(x, ["0%", "-50%"], {
      duration: timings.marquee,
      ease: "linear",
      repeat: Infinity,
    });
    playback.current = controls;
    return () => {
      controls.stop();
      playback.current = null;
    };
  }, [reduced, x]);
  useEffect(() => {
    if (hovered || focused) playback.current?.pause();
    else playback.current?.play();
  }, [focused, hovered, reduced]);
  return (
    <div
      className="skills-marquee"
      tabIndex={reduced ? undefined : 0}
      aria-label={label}
      role="region"
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    >
      <m.div className="marquee-track" style={{ x }}>
        {[false, true].slice(0, reduced ? 1 : 2).map((duplicate) => (
          <ul
            className="marquee-group"
            key={String(duplicate)}
            aria-hidden={duplicate || undefined}
          >
            {items.map((item) => (
              <li key={item}>
                <Decorative kind="sparkle" />
                {item}
              </li>
            ))}
          </ul>
        ))}
      </m.div>
    </div>
  );
}
