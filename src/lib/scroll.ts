import Lenis from "lenis";
import { headerOffset } from "./constants";
import { timings } from "./motion";

let lenis: Lenis | undefined;

export function startSmoothScroll() {
  const instance = new Lenis({
    autoRaf: true,
    duration: timings.lenis,
    easing: (t) => 1 - Math.pow(1 - t, 5),
  });
  lenis = instance;
  return () => {
    instance.destroy();
    lenis = undefined;
  };
}

export function scrollToSection(id: string) {
  const target = document.getElementById(id);
  if (!target) return;
  target.focus({ preventScroll: true });
  if (location.hash !== `#${id}`) history.pushState(null, "", `#${id}`);
  if (lenis) lenis.scrollTo(target, { offset: -headerOffset });
  else target.scrollIntoView();
}
