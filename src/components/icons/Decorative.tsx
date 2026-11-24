import type { DecorativeIcon } from "../../types/content";

const paths: Record<DecorativeIcon, string> = {
  sparkle: "M7 0h2v5h2v2h5v2h-5v2H9v5H7v-5H5V9H0V7h5V5h2Z",
  flower: "M6 1h4v3h3v2h2v4h-3v3h-2v2H6v-2H4v-3H1V6h2V4h3Zm0 5v4h4V6Z",
  heart: "M2 2h4v2h4V2h4v2h2v4h-2v2h-2v2h-2v2H6v-2H4v-2H2V8H0V4h2Z",
};

export function Decorative({
  kind,
  className,
}: {
  kind: DecorativeIcon;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="currentColor"
      shapeRendering="crispEdges"
      aria-hidden="true"
      className={className}
    >
      <path d={paths[kind]} fillRule="evenodd" />
    </svg>
  );
}
