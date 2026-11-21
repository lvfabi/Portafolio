import { reducedMotion } from "../lib/constants";
import { useMediaQuery } from "./useMediaQuery";

export function useReducedMotion() {
  return useMediaQuery(reducedMotion);
}
