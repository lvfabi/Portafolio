import { site } from "../../data/site";
import { Decorative } from "../icons/Decorative";

export function ImagePlaceholder({
  portrait = false,
  decorative = false,
}: {
  portrait?: boolean;
  decorative?: boolean;
}) {
  return (
    <div
      className={`image-placeholder${portrait ? " image-placeholder--portrait" : ""}`}
      role={decorative ? undefined : "img"}
      aria-label={decorative ? undefined : site.imagePlaceholder}
      aria-hidden={decorative || undefined}
    >
      <span className="placeholder-frame">
        <Decorative kind="flower" />
      </span>
      <Decorative
        className="placeholder-sparkle placeholder-sparkle--top"
        kind="sparkle"
      />
      <Decorative
        className="placeholder-sparkle placeholder-sparkle--bottom"
        kind="sparkle"
      />
    </div>
  );
}
