export type DecorativeIcon = "sparkle" | "flower" | "heart";

export type HeroSegment =
  | { kind: "text" | "highlight" | "italic"; value: string }
  | { kind: "icon"; value: DecorativeIcon };

type ProjectPhoto = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type GalleryPhoto = ProjectPhoto & { caption: string };
type CoverPhoto = ProjectPhoto & { position?: string };

export type Project = {
  slug: string;
  title: string;
  period?: string;
  featured: boolean;
  summary: string;
  role: string;
  description: readonly string[];
  stack: readonly string[];
  tools?: readonly { name: string; application: string }[];
  toolsHeading?: string;
  evaluatedStack?: readonly string[];
  artwork?: { src: string; alt: string };
  cover?: string | CoverPhoto;
  gallery?: readonly (string | GalleryPhoto)[];
  links?: { figma?: string; figmaEmbed?: string; demo?: string; repo?: string };
};
