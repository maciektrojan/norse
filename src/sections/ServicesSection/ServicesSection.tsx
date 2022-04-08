import React from "react";
import { Typography } from "../../components/Typography";
import styles from "./ServicesSection.module.css";

export function ServicesSection(): React.ReactElement {
  return (
    <section className={styles.servicesSection} id="services">
      <Typography variant="body2">Usługi</Typography>
    </section>
  );
}
