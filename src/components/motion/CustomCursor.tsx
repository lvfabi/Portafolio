import { m, useSpring } from "motion/react";
import { useRef, useState } from "react";
import type { ReactNode } from "react";
import { site } from "../../data/site";
import { useFinePointer } from "../../hooks/useFinePointer";
import { cursorSpring, timings } from "../../lib/motion";

export function CustomCursor({ children }: { children: ReactNode }) {
  const fine = useFinePointer();
  const [visible, setVisible] = useState(false);
  const inside = useRef(false);
  const x = useSpring(0, cursorSpring);
  const y = useSpring(0, cursorSpring);
  return (
    <div
      className="cursor-area"
      onPointerMove={
        fine
          ? (event) => {
              const bounds = event.currentTarget.getBoundingClientRect();
              const nextX = event.clientX - bounds.left;
              const nextY = event.clientY - bounds.top;
              if (!inside.current) {
                inside.current = true;
                x.jump(nextX);
                y.jump(nextY);
                setVisible(true);
              } else {
                x.set(nextX);
                y.set(nextY);
              }
            }
          : undefined
      }
      onPointerLeave={() => {
        inside.current = false;
        setVisible(false);
      }}
    >
      {children}
      {fine && (
        <m.div className="cursor-position" style={{ x, y }} aria-hidden="true">
          <m.span
            className="project-cursor"
            initial={false}
            animate={{ scale: visible ? 1 : 0 }}
            transition={{ duration: timings.cursor }}
          >
            {site.view}
          </m.span>
        </m.div>
      )}
    </div>
  );
}
