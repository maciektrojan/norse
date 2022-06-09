import clsx from "clsx";
import React from "react";
import styles from "./Typography.module.css";

type TypographyProps = {
  className?: string;
  variant: "h1" | "h2" | "body1" | "body2" | "body3";
  weight?: "bold";
  color?: "primaryMain" | "grey0" | "grey500" | "grey800" | "grey900";
};

const variantMapping = {
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
  const tag = variantMapping[variant];
  const variantHash = styles[`variant-${variant}`];
  const weightHash = styles[`weight-${weight}`];
  const colorHash = styles[`color-${color}`];
  const rootClassName = clsx(variantHash, weightHash, colorHash, className);

  return React.createElement(tag, { className: rootClassName }, children);
};
