import React from "react";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import { ReactComponent as Logo } from "../../components/Logo.svg";
import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import { Typography } from "../../components/Typography";
import styles from "./StartSection.module.css";

export function StartSection(): React.ReactElement {
  return (
    <section className={styles.startSection} id="start">
      <header>
        <Logo />
        <div>
          <a href="tel:123-456-789">
            <Typography variant="body2">+48 123 456 789</Typography>
          </a>
          <a href="mailto:lorem@ipsum.com">
            <Typography variant="body2">lorem@ipsum.com</Typography>
          </a>
          <a href="https://www.facebook.com" target="_blank">
            <FacebookSharpIcon />
          </a>
        </div>
      </header>
      <Container src="https://picsum.photos/id/18/800/800">
        <Typography variant="body1" weight="bold">
          Lorem ipsum
        </Typography>
        <Typography variant="h1">Lorem ipsum dolor sit amet</Typography>
        <Typography variant="body2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Typography>
        <Button>Lorem ipsum</Button>
        <Button variant="outlined">Lorem ipsum</Button>
      </Container>
    </section>
  );
}
