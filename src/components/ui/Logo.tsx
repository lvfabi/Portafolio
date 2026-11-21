export function Logo() {
  return (
    <svg className="logo-flower" viewBox="0 0 56 56" aria-hidden="true">
      <path
        className="logo-petals"
        d="M28 13C22 1 34 0 34 12c5-9 15-3 9 6 11-4 16 7 5 11 10 3 5 15-5 11 6 9-4 16-11 6-2 11-14 11-14 0-9 5-16-3-9-10C-2 33 1 22 12 23 4 14 13 7 20 15c-2-11 9-15 8-2Z"
      />
      <circle cx="28" cy="29" r="12" fill="var(--color-butter-300)" />
      <circle cx="24" cy="27" r="1.35" fill="currentColor" />
      <ellipse
        className="logo-eye"
        cx="32"
        cy="27"
        rx="1.35"
        ry="1.35"
        fill="currentColor"
      />
      <path
        d="M24 32q4 4 8 0"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
      />
    </svg>
  );
}
