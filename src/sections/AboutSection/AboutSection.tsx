import React from "react";
import { Typography } from "../../components/Typography";
import styles from "./AboutSection.module.css";

export function AboutSection(): React.ReactElement {
  return (
    <section className={styles.aboutSection} id="about">
      <Typography variant="body2">O nas</Typography>
    </section>
  );
}
