import React from "react";
import clsx from "clsx";
import styles from "./Typography.module.css";

type TypographyProps = {
  className?: string;
  variant: "h1" | "h2" | "body1" | "body2" | "body3";
  weight?: "bold";
  color?:
    | "primaryMain"
    // | "error"
    // | "warning"
    // | "info"
    | "grey0"
    | "grey500"
    | "grey800"
    | "grey900";
};

const variantMaping = {
  h1: "h1",
  h2: "h2",
  body1: "p",
  body2: "p",
  body3: "p",
};

export const Typography: React.FC<TypographyProps> = ({
  className,
  variant,
  weight,
  color,
  children,
}) => {
  const tag = variantMaping[variant];
  const variantHash = styles[`variant-${variant}`];
  const weightHash = styles[`weight-${weight}`];
  const colorHash = styles[`color-${color}`];
  const rootClassName = clsx(variantHash, weightHash, colorHash, className);

  return React.createElement(tag, { className: rootClassName }, children);
};
