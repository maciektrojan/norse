import React from "react";
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
        <Container src={require("../../images/3.1.png")}>
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
          <Button>Lorem ipsum</Button>
        </Container>
        <Container
          // src="https://as2.ftcdn.net/v2/jpg/02/64/75/57/1000_F_264755794_ntv1zfF4CfVAZ6nnQMw7Ortw2k4708re.jpg"
          // src="https://as1.ftcdn.net/v2/jpg/01/42/61/78/1000_F_142617853_ncJ69kgmp8pV6TkjGHgjoZX9hqEAD7Eq.jpg"
          src={require("../../images/3.1.png")}
          direction="reverse"
        >
          <Typography variant="h1">Technika grzewcza</Typography>
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
          <Button>Lorem ipsum</Button>
        </Container>
        <Container
          // src="https://as2.ftcdn.net/v2/jpg/04/03/81/71/1000_F_403817132_dIL2JeNg6N9QS85ciGoLiuW7Q4SzkYrE.jpg"
          src={require("../../images/3.1.png")}
        >
          <Typography variant="h1">Technika sanitarna</Typography>
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
          <Button>Lorem ipsum</Button>
        </Container>
      </section>
      <div className="padding" />
    </div>
  );
}
