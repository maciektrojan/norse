import React, { ButtonHTMLAttributes } from "react";
import clsx from "clsx";
import styles from "./Button.module.css";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "contained" | "outlined" | "text";
};

export const Button: React.FC<ButtonProps> = ({
  className,
  variant = "contained",
  disabled,
  children,
  ...rest
}) => {
  const rootClassName = clsx(
    styles.button,
    styles[`button-${variant}`],
    className,
  );

  return (
    <button {...rest} className={rootClassName} disabled={disabled}>
      {children}
    </button>
  );
};
