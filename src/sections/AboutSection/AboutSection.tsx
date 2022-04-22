import React, { useEffect, useState } from "react";
import ConstructionIcon from "@mui/icons-material/Construction";
import EastIcon from "@mui/icons-material/East";
import ExploreIcon from "@mui/icons-material/Explore";
import PersonIcon from "@mui/icons-material/Person";
import SellIcon from "@mui/icons-material/Sell";
import { Typography } from "../../components/Typography";
import styles from "./AboutSection.module.css";

export function AboutSection(): React.ReactElement {
  type Item = {
    id: number;
    content: string;
    icon?: React.ReactElement;
  };

  const items: Item[] = [
    { id: 1, content: "Szczegółowa wycena", icon: <SellIcon /> },
    { id: 2, content: "Profesjonalne doradztwo", icon: <PersonIcon /> },
    { id: 3, content: "Sprawna logistyka", icon: <ExploreIcon /> },
    { id: 4, content: "Fachowe wykonananie", icon: <ConstructionIcon /> },
  ];

  const [number, setNumber] = useState(1);
  const counter = () => {
    number > 0 && number < 4 ? setNumber(number + 1) : setNumber(1);
  };
  const handleHover = (hoveredItem: any) => {
    setNumber(hoveredItem.id);
  };

  useEffect(() => {
    const timeoutID = setTimeout(() => counter(), 10000);
    return () => {
      clearTimeout(timeoutID);
    };
  }, [number]);

  return (
    <div id="about">
      <div className="padding" />
      <section className={styles.aboutSection}>
        <div>
          <Typography variant="body3" weight="bold" color="grey0">
            O nas
          </Typography>
          <div>
            <Typography variant="h2">
              Oferujemy szereg usług instalacyjnych
            </Typography>
            <Typography variant="body2" color="grey800">
              Zapewniamy kompleksowe wykonanie instalacji od <b>projektu</b>{" "}
              przez <b>odbiór</b> po <b>serwis</b>, w tym:
            </Typography>
          </div>
        </div>
        <div>
          {items.map((item) => {
            return (
              <div
                key={item.id}
                className={item.id === number ? styles.active : ""}
                onMouseOver={() => {
                  handleHover(item);
                }}
              >
                {item.icon}
                <div>
                  <Typography variant="h2" weight="bold">
                    {item.content}
                  </Typography>
                  <div>
                    <Typography variant="body3">Dowiedz się więcej</Typography>
                    <EastIcon />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
