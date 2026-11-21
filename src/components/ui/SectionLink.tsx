import type { MouseEvent, ReactNode } from "react";
import { scrollToSection } from "../../lib/scroll";
import { Button } from "./Button";

export function SectionLink({
  target,
  children,
  variant,
  className,
  label,
}: {
  target: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "text";
  className?: string;
  label?: string;
}) {
  const href = `#${target}`;
  function follow(event: MouseEvent<HTMLAnchorElement>) {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey)
      return;
    event.preventDefault();
    scrollToSection(target);
  }
  if (variant)
    return (
      <Button
        href={href}
        onClick={follow}
        variant={variant}
        className={className}
        aria-label={label}
      >
        {children}
      </Button>
    );
  return (
    <a href={href} onClick={follow} className={className} aria-label={label}>
      {children}
    </a>
  );
}
