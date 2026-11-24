import { m, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { profile } from "../../data/profile";
import { site } from "../../data/site";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { publicAsset } from "../../lib/assets";
import { fade, timings } from "../../lib/motion";
import { Icon } from "../icons/Icon";
import { Button } from "../ui/Button";
import { PortfolioImage } from "../ui/PortfolioImage";

const photos = profile.portraits.flatMap((photo) => {
  const src = publicAsset(photo.src);
  return src ? [{ ...photo, src }] : [];
});

export function ProfilePortraits() {
  const frame = useRef<HTMLDivElement>(null);
  const inView = useInView(frame, { amount: 0.5 });
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [hovered, setHovered] = useState(false);
  const rotating = !reduced && playing;

  useEffect(() => {
    if (photos.length < 2 || !inView || !rotating || hovered) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % photos.length);
    }, timings.portraitInterval * 1000);
    return () => window.clearInterval(timer);
  }, [inView, rotating, hovered]);

  function step(direction: number) {
    setPlaying(false);
    setIndex(
      (current) => (current + direction + photos.length) % photos.length,
    );
  }

  return (
    <div
      role="group"
      aria-label={site.profilePhotos}
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse") setHovered(true);
      }}
      onPointerLeave={() => setHovered(false)}
      onFocusCapture={(event) => {
        if (
          !event.currentTarget.contains(event.relatedTarget) &&
          event.target.matches(":focus-visible")
        )
          setPlaying(false);
      }}
    >
      <div className="portrait-wrap" ref={frame}>
        <div className="portrait">
          {photos.length === 0 && (
            <PortfolioImage
              alt={site.profilePlaceholder}
              width={800}
              height={1000}
              portrait
            />
          )}
          {photos.map((photo, position) => (
            <m.div
              key={photo.src}
              className="portrait-slide"
              aria-hidden={position !== index || undefined}
              initial={false}
              animate={{ opacity: position === index ? 1 : 0 }}
              transition={reduced ? { duration: 0 } : fade}
            >
              <PortfolioImage {...photo} portrait />
            </m.div>
          ))}
        </div>
      </div>
      {photos.length > 1 && (
        <div className="portrait-controls">
          <Button
            variant="outline"
            className="portrait-arrow portrait-arrow--previous"
            aria-label={site.previousPortrait}
            onClick={() => step(-1)}
          >
            <Icon name="arrow" />
          </Button>
          <span
            className="portrait-progress"
            aria-live={rotating ? "off" : "polite"}
          >
            {site.portraitProgress(index + 1, photos.length)}
          </span>
          <Button
            variant="outline"
            className="portrait-arrow"
            aria-label={site.nextPortrait}
            onClick={() => step(1)}
          >
            <Icon name="arrow" />
          </Button>
          {!reduced && (
            <Button
              variant="text"
              onClick={() => setPlaying((value) => !value)}
            >
              {playing ? site.pausePortraits : site.playPortraits}
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
