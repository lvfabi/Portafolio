export type DecorativeIcon = "sparkle" | "flower" | "heart";

export type HeroSegment =
  | { kind: "text" | "highlight" | "italic"; value: string }
  | { kind: "icon"; value: DecorativeIcon }
  | { kind: "break" };

type GalleryPhoto = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export type Project = {
  slug: string;
  title: string;
  period?: string;
  featured: boolean;
  summary: string;
  overview: string;
  role: string;
  description: readonly string[];
  stack: readonly string[];
  tools?: readonly { name: string; application: string }[];
  toolsHeading?: string;
  evaluatedStack?: readonly string[];
  artwork?: { src: string; alt: string };
  cover?: string;
  gallery?: readonly (string | GalleryPhoto)[];
  links?: { figma?: string; figmaEmbed?: string; demo?: string; repo?: string };
};
