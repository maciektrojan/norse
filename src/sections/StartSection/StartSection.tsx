import React, { useEffect, useState } from "react";
import { ReactComponent as Logo } from "../../components/Logo.svg";
import { Typography } from "../../components/Typography";
import styles from "./StartSection.module.css";

export function StartSection(): React.ReactElement {
  // początek
  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 1024px)").matches
  );
  useEffect(() => {
    window
      .matchMedia("(max-width: 1024px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);
  // koniec

  const [defaultSize, setDefaultSize] = useState(true);
  const counter = () => {
    matches && (defaultSize ? setSize({ x: 896 }) : setSize({ x: 0 }));
    !matches && (defaultSize ? setSize({ x: 1200 }) : setSize({ x: 0 }));
    setDefaultSize(!defaultSize);
  };

  useEffect(() => {
    const timeoutID = setTimeout(() => counter(), 20000);
    return () => {
      clearTimeout(timeoutID);
    };
  }, [defaultSize]);

  const [size, setSize] = useState({ x: 400 });
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

  return (
    <div id="start" className={size.x > 600 ? styles.active : ""}>
      <div className="padding" />
      <section className={styles.startSection}>
        <div className={styles.container}>
          <div
            className={
              size.x === 0 || size.x === 896 || size.x === 1200
                ? styles.transition
                : ""
            }
            style={{ width: size.x }}
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
    </div>
  );
}
