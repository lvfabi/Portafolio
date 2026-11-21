import { desktopPointer } from "../lib/constants";
import { useMediaQuery } from "./useMediaQuery";
import { useReducedMotion } from "./useReducedMotion";

export function useFinePointer() {
  const fine = useMediaQuery(desktopPointer);
  const reduced = useReducedMotion();
  return fine && !reduced;
}
