type IconName =
  | "arrow"
  | "down"
  | "up"
  | "download"
  | "close"
  | "mail"
  | "linkedin"
  | "github";

const paths: Record<IconName, string> = {
  arrow: "M4 12h15m-6-6 6 6-6 6",
  down: "M12 4v15m-6-6 6 6 6-6",
  up: "M12 20V5m-6 6 6-6 6 6",
  download: "M12 3v12m-4-4 4 4 4-4M5 16v4h14v-4",
  close: "m6 6 12 12M18 6 6 18",
  mail: "M3 5h18v14H3zM3 6l9 7 9-7",
  linkedin: "M5 9v10m0-14v.1M10 19V9m0 4c0-5 8-5 8 0v6",
  github:
    "M8 20c-4 1-4-2-6-2m12 4v-3c0-1 .1-2-.5-2.6 3-.3 6-1.5 6-6.5a5 5 0 0 0-1.4-3.5 5 5 0 0 0-.2-3.4s-1.2-.4-3.6 1.4a13 13 0 0 0-5.6 0C6.3 2.6 5 3 5 3A5 5 0 0 0 5 6.5 5 5 0 0 0 3.6 10c0 5 3 6.2 6 6.5-.6.6-.6 1.4-.6 2.5v3",
};

export function Icon({ name }: { name: IconName }) {
  return (
    <svg
      className="action-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={paths[name]} />
    </svg>
  );
}
