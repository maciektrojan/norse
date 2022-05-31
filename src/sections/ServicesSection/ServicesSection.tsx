import React from "react";
import { Link } from "react-scroll";
import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import { Typography } from "../../components/Typography";
import { services } from "./services";
import styles from "./ServicesSection.module.css";

export function ServicesSection(): React.ReactElement {
  return (
    <div id="services">
      <div className="padding" />
      <section className={styles.servicesSection}>
        <Container src={require("../../images/3.1-800w.png")} alt="heat pump">
          <Typography variant="body3" weight="bold" color="grey0">
            Usługi
          </Typography>
          <Typography variant="h1">Pompy ciepła</Typography>
          <Typography variant="body2" color="grey800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Typography>
          <ul>
            {services.slice(0, 3).map((service) => {
              return (
                <li key={service.id}>
                  <Typography variant="body2" color="grey800">
                    {service.content}
                  </Typography>
                </li>
              );
            })}
          </ul>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            href=""
            tabIndex={-1}
          >
            <Button>Zapytaj o wycenę</Button>
          </Link>
        </Container>
        <Container
          src={require("../../images/3.2-800w.png")}
          alt="boiler room"
          direction="reverse"
        >
          <Typography variant="h1">Technika grzewcza</Typography>
          <Typography variant="body2" color="grey800">
            System ogrzewania stanowi niezbędny element każdego budynku.
            Od sposobu jego wykonania zależy komfort termiczny wnętrza domu oraz
            koszty eksploatacji.
          </Typography>
          <ul>
            {services.slice(3, 11).map((service) => {
              return (
                <li key={service.id}>
                  <Typography variant="body2" color="grey800">
                    {service.content}
                  </Typography>
                </li>
              );
            })}
          </ul>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            href=""
            tabIndex={-1}
          >
            <Button>Zapytaj o wycenę</Button>
          </Link>
        </Container>
        <Container src={require("../../images/3.3-800w.png")} alt="bathroom">
          <Typography variant="h1">Technika sanitarna</Typography>
          <Typography variant="body2" color="grey800">
            Ceramika, akcesoria, a także złożone instalacje, które kryją się
            w ścianach i pod ziemią. Od jakości ich wykonania zależy higiena,
            wygląd i funkcjonalność łazienki, pralni oraz kuchni.
          </Typography>
          <ul>
            {services.slice(11, 16).map((service) => {
              return (
                <li key={service.id}>
                  <Typography variant="body2" color="grey800">
                    {service.content}
                  </Typography>
                </li>
              );
            })}
          </ul>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            href=""
            tabIndex={-1}
          >
            <Button>Zapytaj o wycenę</Button>
          </Link>
        </Container>
      </section>
    </div>
  );
}
