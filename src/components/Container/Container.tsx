import React from "react";
import clsx from "clsx";
import styles from "./Container.module.css";

type ContainerProps = {
  className?: string;
  src: string;
  alt: string;
  direction?: "reverse";
};

export const Container: React.FC<ContainerProps> = ({
  className,
  src,
  alt,
  direction,
  children,
}) => {
  const rootClassName = clsx(
    styles.container,
    styles[`direction-${direction}`],
    className
  );

  return (
    <div className={rootClassName}>
      <div>{children}</div>
      <div>
        <img width="100%" src={src} alt={alt} />
      </div>
    </div>
  );
};
