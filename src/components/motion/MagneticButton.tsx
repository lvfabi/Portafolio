import { m, useMotionValue, useSpring } from "motion/react";
import type { PointerEvent, ReactNode } from "react";
import { useFinePointer } from "../../hooks/useFinePointer";
import { softSpring } from "../../lib/motion";

export function MagneticButton({ children }: { children: ReactNode }) {
  const fine = useFinePointer();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, softSpring);
  const springY = useSpring(y, softSpring);

  function move(event: PointerEvent<HTMLSpanElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const dx = event.clientX - rect.left - rect.width / 2;
    const dy = event.clientY - rect.top - rect.height / 2;
    const distance = Math.hypot(dx, dy);
    const factor = distance <= 80 ? 0.1 : 0;
    x.set(dx * factor);
    y.set(dy * factor);
  }

  return (
    <span
      className="magnetic"
      onPointerMove={fine ? move : undefined}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      <m.span style={fine ? { x: springX, y: springY } : undefined}>
        {children}
      </m.span>
    </span>
  );
}
