export type DecorativeIcon = "sparkle" | "flower" | "heart";

export type HeroSegment =
  | { kind: "text" | "highlight" | "italic"; value: string }
  | { kind: "icon"; value: DecorativeIcon };

export type Project = {
  slug: string;
  title: string;
  period?: string;
  featured: boolean;
  summary: string;
  role: string;
  description: readonly string[];
  stack: readonly string[];
  cover?: string;
  gallery?: readonly string[];
  links?: { figma?: string; demo?: string; repo?: string };
};
