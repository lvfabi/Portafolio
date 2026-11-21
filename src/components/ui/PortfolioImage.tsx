import { useState } from "react";
import { ImagePlaceholder } from "./ImagePlaceholder";

export function PortfolioImage({
  src,
  alt,
  width,
  height,
  portrait = false,
}: {
  src?: string;
  alt: string;
  width: number;
  height: number;
  portrait?: boolean;
}) {
  const [failed, setFailed] = useState<string>();
  if (!src || failed === src)
    return <ImagePlaceholder portrait={portrait} decorative={!alt} />;
  return (
    <img
      className="portfolio-image"
      src={src}
      srcSet={`${src} ${width}w`}
      sizes={`(max-width: 767px) 100vw, ${portrait ? "420px" : "840px"}`}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(src)}
    />
  );
}
