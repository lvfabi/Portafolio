import type { ComponentPropsWithoutRef } from "react";
import { MagneticButton } from "../motion/MagneticButton";

type Props =
  | ({
      href: string;
      variant?: "primary" | "outline" | "text";
    } & ComponentPropsWithoutRef<"a">)
  | ({
      href?: undefined;
      variant?: "primary" | "outline" | "text";
    } & ComponentPropsWithoutRef<"button">);

export function Button(props: Props) {
  const variant = props.variant ?? "primary";
  const className = `action action--${variant} ${props.className ?? ""}`;
  if (props.href !== undefined) {
    const { variant: _variant, ...link } = props;
    const anchor = <a {...link} className={className} />;
    return variant === "primary" ? (
      <MagneticButton>{anchor}</MagneticButton>
    ) : (
      anchor
    );
  }
  const { variant: _variant, href: _href, ...button } = props;
  const control = <button type="button" {...button} className={className} />;
  return variant === "primary" ? (
    <MagneticButton>{control}</MagneticButton>
  ) : (
    control
  );
}
