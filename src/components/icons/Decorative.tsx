import type { DecorativeIcon } from "../../types/content";

export function Decorative({
  kind,
  className,
}: {
  kind: DecorativeIcon;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      {kind === "sparkle" && (
        <path d="M19.8 1.3c1.7 12 5.4 16.1 18.5 18.4-12.4 2.3-16.6 6.2-18.6 19C17.5 25.4 13.3 21.8 1.4 20 13.3 17.6 17.8 13.7 19.8 1.3Z" />
      )}
      {kind === "flower" && (
        <path
          d="M20 10C16-3 5 3 9 15-4 13-2 27 10 26c-5 11 7 17 11 6 6 10 17 4 11-6 13-2 10-15-1-12C33 3 23-2 20 10Zm0 6a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z"
          fillRule="evenodd"
        />
      )}
      {kind === "heart" && (
        <path d="M20 35C16 31 3 23 3 13c0-9 11-12 17-4 6-8 17-5 17 4 0 10-13 18-17 22Z" />
      )}
    </svg>
  );
}
