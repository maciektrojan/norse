import React from "react";
import { Container } from "../../components/Container";
import { Typography } from "../../components/Typography";
import { services } from "./services";
import styles from "./ServicesSection.module.css";

export function ServicesSection(): React.ReactElement {
  return (
    <section className={styles.servicesSection} id="services">
      <Container src="https://picsum.photos/id/18/800/800">
        <Typography variant="h1">Pompy ciepła</Typography>
        <Typography variant="body2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Typography>
        <ul>
          {services.slice(0, 3).map((service) => {
            return (
              <li key={service.id}>
                <Typography variant="body2">{service.content}</Typography>
              </li>
            );
          })}
        </ul>
      </Container>
      <Container src="https://picsum.photos/id/18/800/800" direction="reverse">
        <Typography variant="h1">Technika grzewcza</Typography>
        <Typography variant="body2">
          System ogrzewania stanowi niezbędny element każdego budynku.
          Od sposobu jego wykonania zależy komfort termiczny wnętrza domu oraz
          koszty eksploatacji.
        </Typography>
        <ul>
          {services.slice(3, 11).map((service) => {
            return (
              <li key={service.id}>
                <Typography variant="body2">{service.content}</Typography>
              </li>
            );
          })}
        </ul>
      </Container>
      <Container src="https://picsum.photos/id/18/800/800">
        <Typography variant="h1">Technika sanitarna</Typography>
        <Typography variant="body2">
          Ceramika, akcesoria, a także złożone instalacje, które kryją się
          w ścianach i pod ziemią. Od jakości ich wykonania zależy higiena,
          wygląd i funkcjonalność łazienki, pralni oraz kuchni.
        </Typography>
        <ul>
          {services.slice(11, 16).map((service) => {
            return (
              <li key={service.id}>
                <Typography variant="body2">{service.content}</Typography>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
