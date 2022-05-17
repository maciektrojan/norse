import React from "react";
import { Button } from "../../components/Button";
import { Typography } from "../../components/Typography";
import styles from "./ContactSection.module.css";

export function ContactSection(): React.ReactElement {
  return (
    <div id="contact">
      <div className="padding" />
      <div className="padding" />
      <section className={styles.contactSection}>
        <Typography variant="h1" color="primaryMain">
          Kontakt
        </Typography>
        <form>
          <div>
            <div>
              <input placeholder="Imię" />
              <input placeholder="Email" />
            </div>
            <textarea placeholder="Wiadomość" />
          </div>
          <Button>Wyślij</Button>
        </form>
      </section>
    </div>
  );
}
