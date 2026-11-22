import { useState } from "react";
import { ImagePlaceholder } from "./ImagePlaceholder";

type ImageSource = {
  src?: string;
  alt: string;
  width: number;
  height: number;
  position?: string;
};

export function PortfolioImage({
  src,
  alt,
  width,
  height,
  position,
  fallback,
  portrait = false,
}: ImageSource & { fallback?: ImageSource; portrait?: boolean }) {
  const [failed, setFailed] = useState<string[]>([]);
  const image =
    src && !failed.includes(src)
      ? { src, alt, width, height, position }
      : fallback;
  if (!image?.src || failed.includes(image.src))
    return <ImagePlaceholder portrait={portrait} decorative={!alt} />;

  const imageSrc = image.src;
  return (
    <img
      className="portfolio-image"
      src={imageSrc}
      srcSet={`${imageSrc} ${image.width}w`}
      sizes={`(max-width: 767px) 100vw, ${portrait ? "420px" : "840px"}`}
      alt={image.alt}
      width={image.width}
      height={image.height}
      loading="lazy"
      decoding="async"
      style={image.position ? { objectPosition: image.position } : undefined}
      onError={() => setFailed((paths) => [...paths, imageSrc])}
    />
  );
}
