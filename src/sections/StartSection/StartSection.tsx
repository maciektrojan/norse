import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { ReactComponent as Logo } from "../../components/Logo.svg";
import { Typography } from "../../components/Typography";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import styles from "./StartSection.module.css";

export function StartSection(): React.ReactElement {
  const { windowWidth } = useWindowDimensions();

  // const [defaultSize, setDefaultSize] = useState(true);
  // const counter = () => {
  //   width > 1024 && (defaultSize ? setSize({ x: 1200 }) : setSize({ x: 0 }));
  //   width <= 1024 && (defaultSize ? setSize({ x: 896 }) : setSize({ x: 0 }));
  //   setDefaultSize(!defaultSize);
  // };

  // useEffect(() => {
  //   const timeoutID = setTimeout(() => counter(), 20000);
  //   return () => {
  //     clearTimeout(timeoutID);
  //   };
  // }, [defaultSize]);

  const [size, setSize] = useState({ x: 320 });
  const handleClick = (mouseDownEvent: any) => {
    const position = { x: mouseDownEvent.pageX };

    const onMouseMove = (mouseMoveEvent: any) => {
      setSize(() => ({
        x: size.x - position.x + mouseMoveEvent.pageX,
      }));
    };
    const onMouseUp = () => {
      document.body.removeEventListener("mousemove", onMouseMove);
    };

    document.body.addEventListener("mousemove", onMouseMove);
    document.body.addEventListener("mouseup", onMouseUp);
  };

  size.x < 0 && setSize({ x: 0 });
  size.x > 1200 && setSize({ x: 1200 });

  const large = 1200 / 2;
  const medium = (windowWidth - 48 - 40 * 2) / 2;

  const parentElementClassName = clsx(
    styles.container,
    windowWidth > 1200 + 48 + 40 * 2
      ? size.x > large && styles.active
      : size.x > medium && styles.active
  );
  // const childrenElementClassName =
  //   size.x === 0 || size.x === 896 || size.x === 1200 ? styles.transition : "";

  return (
    <section id="start" className={styles.startSection}>
      <div className={parentElementClassName}>
        <div
          /* className={childrenElementClassName} */ style={{ width: size.x }}
        >
          <Logo />
          <div>
            <Typography variant="h1" color="grey0">
              Gwarantujemy
              <br />
              <span />
            </Typography>
          </div>
          <div onMouseDown={handleClick}>
            <button tabIndex={-1}></button>
          </div>
        </div>
      </div>
    </section>
  );
}
