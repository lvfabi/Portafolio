import { m } from "motion/react";
import { profile } from "../../data/profile";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { easeExpo, fade, timings } from "../../lib/motion";
import { HeroInlineIcon } from "./HeroInlineIcon";

export function HeroTitle() {
  const reduced = useReducedMotion();
  const label = profile.heroTitle
    .map((segment) => (segment.kind === "icon" ? "" : segment.value))
    .join("")
    .replace(/\s+/g, " ")
    .trim();
  const offsets = profile.heroTitle.map((_, index) =>
    profile.heroTitle
      .slice(0, index)
      .reduce(
        (count, segment) =>
          count +
          (segment.kind === "icon"
            ? 0
            : segment.value.trim().split(/\s+/).filter(Boolean).length),
        0,
      ),
  );
  return (
    <m.h1
      id="inicio-titulo"
      aria-label={label}
      initial={reduced ? { opacity: 0 } : false}
      animate={{ opacity: 1 }}
      transition={fade}
    >
      <span aria-hidden="true">
        {profile.heroTitle.map((segment, index) => {
          if (segment.kind === "icon") {
            return (
              <HeroInlineIcon
                key={index}
                kind={segment.value}
                delay={
                  timings.heroWordStart +
                  Math.max(0, offsets[index] - 1) * timings.heroWordStep +
                  timings.heroIconGap
                }
              />
            );
          }
          const Tag =
            segment.kind === "italic"
              ? "em"
              : segment.kind === "highlight"
                ? "mark"
                : "span";
          return (
            <Tag
              key={index}
              className={
                segment.kind === "highlight" ? "hero-highlight" : undefined
              }
            >
              {segment.value
                .split(/(\s+)/)
                .filter(Boolean)
                .map((word, wordIndex, words) => {
                  if (/^\s+$/.test(word) || reduced) return word;
                  const offset =
                    offsets[index] +
                    words.slice(0, wordIndex).filter((part) => /\S/.test(part))
                      .length;
                  return (
                    <span className="hero-word" key={wordIndex}>
                      <m.span
                        initial={{ y: "105%" }}
                        animate={{ y: "0%" }}
                        transition={{
                          duration: timings.heroWord,
                          delay:
                            timings.heroWordStart +
                            offset * timings.heroWordStep,
                          ease: easeExpo,
                        }}
                      >
                        {word}
                      </m.span>
                    </span>
                  );
                })}
            </Tag>
          );
        })}
      </span>
    </m.h1>
  );
}
