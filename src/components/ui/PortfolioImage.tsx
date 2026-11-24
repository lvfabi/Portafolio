import { useState } from "react";
import { ImagePlaceholder } from "./ImagePlaceholder";

type ImageSource = {
  src?: string;
  alt: string;
  width: number;
  height: number;
  pixelated?: boolean;
};

export function PortfolioImage({
  src,
  alt,
  width,
  height,
  pixelated,
  fallback,
  portrait = false,
}: ImageSource & { fallback?: ImageSource; portrait?: boolean }) {
  const [failed, setFailed] = useState<string[]>([]);
  const image =
    src && !failed.includes(src)
      ? { src, alt, width, height, pixelated }
      : fallback;
  if (!image?.src || failed.includes(image.src))
    return <ImagePlaceholder portrait={portrait} decorative={!alt} />;

  const imageSrc = image.src;
  return (
    <img
      className={
        image.pixelated
          ? "portfolio-image portfolio-image--pixelated"
          : "portfolio-image"
      }
      src={imageSrc}
      srcSet={`${imageSrc} ${image.width}w`}
      sizes={`(max-width: 767px) 100vw, ${portrait ? "420px" : "840px"}`}
      alt={image.alt}
      width={image.width}
      height={image.height}
      loading="lazy"
      decoding="async"
      onError={() => setFailed((paths) => [...paths, imageSrc])}
    />
  );
}
