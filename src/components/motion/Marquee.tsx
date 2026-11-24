import { animate, m, useMotionValue } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { marqueeSpeed } from "../../lib/motion";
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
  const [groupWidth, setGroupWidth] = useState(0);
  const group = useRef<HTMLUListElement>(null);
  const x = useMotionValue(0);
  const playback = useRef<ReturnType<typeof animate> | null>(null);
  useEffect(() => {
    const element = group.current;
    if (reduced || !element) return;
    const observer = new ResizeObserver(([entry]) => {
      setGroupWidth(entry.contentRect.width);
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, [reduced]);

  useEffect(() => {
    if (reduced) {
      x.set(0);
      return;
    }
    if (!groupWidth) return;
    const controls = animate(x, [0, -groupWidth], {
      duration: groupWidth / marqueeSpeed,
      ease: "linear",
      repeat: Infinity,
    });
    playback.current = controls;
    return () => {
      controls.stop();
      playback.current = null;
    };
  }, [groupWidth, reduced, x]);
  useEffect(() => {
    if (hovered || focused) playback.current?.pause();
    else playback.current?.play();
  }, [focused, groupWidth, hovered, reduced]);
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
            ref={duplicate ? undefined : group}
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
