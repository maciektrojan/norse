import React from "react";
import styles from "./ContactSection.module.css";

export function ContactSection(): React.ReactElement {
  return (
    <div id="contact">
      <div className="padding" />
      <section className={styles.contactSection}>Kontakt</section>
      <div className="padding" />
    </div>
  );
}
