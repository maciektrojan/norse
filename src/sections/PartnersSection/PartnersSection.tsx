import React from "react";
import styles from "./PartnersSection.module.css";

export function PartnersSection(): React.ReactElement {
  return (
    <div id="partners">
      <div className="padding" />
      <section className={styles.partnersSection}>
        <div>
          <div>
            <div>
              <img
                src="https://www.hewalex.pl/public/logos/hewalex-no-pad.svg"
                alt="hewalex logo"
              />
            </div>
            <div>
              <img
                src="https://www.hewalex.pl/public/logos/hewalex-no-pad.svg"
                alt="hewalex logo"
              />
            </div>
            <div>
              <img
                src="https://www.hewalex.pl/public/logos/hewalex-no-pad.svg"
                alt="hewalex logo"
              />
            </div>
            {/*  */}
            <div>
              <img
                src="https://www.hewalex.pl/public/logos/hewalex-no-pad.svg"
                alt="hewalex logo"
              />
            </div>
            <div>
              <img
                src="https://www.hewalex.pl/public/logos/hewalex-no-pad.svg"
                alt="hewalex logo"
              />
            </div>
            <div>
              <img
                src="https://www.hewalex.pl/public/logos/hewalex-no-pad.svg"
                alt="hewalex logo"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
