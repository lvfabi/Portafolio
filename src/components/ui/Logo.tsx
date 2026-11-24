export function Logo() {
  return (
    <svg
      className="logo-flower"
      viewBox="0 0 24 24"
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      <path
        className="logo-petals"
        d="M9 1h6v3h2V3h3v3h1v3h2v6h-3v2h1v3h-4v1h-2v2H9v-3H7v1H4v-3H3v-3H1V9h3V7H3V4h4v1h2Z"
      />
      <path
        d="M9 6h6v2h2v2h1v4h-1v2h-2v2H9v-2H7v-2H6v-4h1V8h2Z"
        fill="var(--color-butter-300)"
      />
      <path
        d="M9 10h2v2H9zM9 14h2v1h2v-1h2v2h-2v1h-2v-1H9z"
        fill="currentColor"
      />
      <rect
        className="logo-eye"
        x="13"
        y="10"
        width="2"
        height="2"
        fill="currentColor"
      />
    </svg>
  );
}
