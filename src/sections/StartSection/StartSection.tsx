import React, { useEffect, useState } from "react";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import { ReactComponent as Logo } from "../../components/Logo.svg";
import { Typography } from "../../components/Typography";
import styles from "./StartSection.module.css";

export function StartSection(): React.ReactElement {
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

  // const [number, setNumber] = useState(1);
  // const counter = () => {
  //   number > 0 && number < 2 ? setNumber(number + 1) : setNumber(1);
  // };

  // useEffect(() => {
  //   const timeoutID = setTimeout(() => counter(), 3000);
  //   return () => {
  //     clearTimeout(timeoutID);
  //   };
  // }, [number]);

  return (
    <section className={styles.startSection} id="start">
      <header>
        <Logo />
        {/* <div>
          <a href="tel:123-456-789">
            <Typography variant="body2">+48 123 456 789</Typography>
          </a>
          <a href="mailto:lorem@ipsum.com">
            <Typography variant="body2">lorem@ipsum.com</Typography>
          </a>
          <a href="https://www.facebook.com" target="_blank">
            <FacebookSharpIcon />
          </a>
        </div> */}
      </header>
      <div className={styles.container}>
        <div style={{ width: size.x }}>
          <div>
            <Typography variant="h1" color="grey0">
              Gwarantujemy
              <br />
              <span className={size.x > 600 ? styles.active : ""}></span>
            </Typography>
            {/* <div className={styles.test}>
              <Typography variant="body2" color="grey0">
                Test
              </Typography>
            </div> */}
          </div>
          <div onMouseDown={handleClick}>
            <button tabIndex={-1}></button>
          </div>
        </div>
      </div>
    </section>
  );
}
