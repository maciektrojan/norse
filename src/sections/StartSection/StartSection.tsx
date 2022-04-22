import React, { useEffect, useState } from "react";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import { ReactComponent as Logo } from "../../components/Logo.svg";
import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
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
      <div className={styles.test}>
        <div style={{ width: size.x }}>
          <div>
            <Typography variant="h1" color="grey0">
              Gwarantujemy
              <br />
              <span className={size.x > 600 ? styles.active : ""}></span>
            </Typography>
          </div>
          <div onMouseDown={handleClick}>
            <button></button>
          </div>
        </div>
      </div>
      {/* <Container src="https://as2.ftcdn.net/v2/jpg/04/56/94/89/1000_F_456948900_y5hfQT0KQp4F0xkpJ8lo9NvLc7u7fKac.jpg">
        <Typography variant="body1" weight="bold">
          Lorem ipsum
        </Typography>
        <Typography variant="h1">Lorem ipsum dolor sit amet</Typography>
        <Typography variant="body2" color="grey800">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Typography>
        <Button>Lorem ipsum</Button>
        <Button variant="outlined">Lorem ipsum</Button>
      </Container> */}
    </section>
  );
}
