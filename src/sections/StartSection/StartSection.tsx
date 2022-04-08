import React from "react";
import { Typography } from "../../components/Typography";
import styles from "./StartSection.module.css";

export function StartSection(): React.ReactElement {
  return (
    <section className={styles.startSection} id="start">
      <Typography variant="body2">Start</Typography>
    </section>
  );
}
