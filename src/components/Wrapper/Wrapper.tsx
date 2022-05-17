import React, { useState } from "react";
import { Link } from "react-scroll";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CommentIcon from "@mui/icons-material/Comment";
import ConstructionIcon from "@mui/icons-material/Construction";
import HomeIcon from "@mui/icons-material/Home";
import InboxIcon from "@mui/icons-material/Inbox";
import PeopleIcon from "@mui/icons-material/People";
import PersonIcon from "@mui/icons-material/Person";
import clsx from "clsx";
import { Typography } from "../Typography";
import styles from "./Wrapper.module.css";

export const Wrapper: React.FC = ({ children }) => {
  const [open, setOpen] = useState(false);
  const handleArrowClick = () => {
    setOpen(!open);
  };

  type Link = {
    id: number;
    url: string;
    content: string;
    icon?: React.ReactElement;
  };

  const links: Link[] = [
    { id: 1, url: "start", content: "Start", icon: <HomeIcon /> },
    { id: 2, url: "about", content: "O nas", icon: <PersonIcon /> },
    { id: 3, url: "partners", content: "Partnerzy", icon: <PeopleIcon /> },
    { id: 4, url: "services", content: "Usługi", icon: <ConstructionIcon /> },
    { id: 5, url: "reviews", content: "Opinie", icon: <CommentIcon /> },
    { id: 6, url: "contact", content: "Kontakt", icon: <InboxIcon /> },
  ];

  return (
    <div className={clsx(styles.wrapper, open ? styles.open : styles.closed)}>
      <nav>
        <div>
          <button className={styles.arrow} onClick={handleArrowClick}>
            <ArrowForwardIosIcon />
          </button>
        </div>
        <Typography className={styles.label} variant="body3">
          MENU
        </Typography>
        {links.map((link) => {
          return (
            <Link
              key={link.id}
              to={link.url}
              spy={true}
              smooth={true}
              duration={500}
              activeClass={styles.active}
              href=""
            >
              <Typography variant="body3">{link.content}</Typography>
              <div>{link.icon}</div>
              <Typography className={styles.tooltip} variant="body3">
                {link.content}
              </Typography>
            </Link>
          );
        })}
      </nav>
      <div className={styles.container}>
        <main>
          {children}
          <div className="padding" />
          <footer>
            <div>
              <a href="tel:123-456-789" tabIndex={-1}>
                <Typography variant="body3">+48 123 456 789</Typography>
              </a>
              <a href="mailto:lorem@ipsum.com" tabIndex={-1}>
                <Typography variant="body3">lorem@ipsum.com</Typography>
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
                tabIndex={-1}
              >
                <Typography variant="body3">Facebook</Typography>
              </a>
              <a
                href="https://fixly.pl/profil/of9ASx1U"
                target="_blank"
                rel="noreferrer"
                tabIndex={-1}
              >
                <Typography variant="body3">Fixly</Typography>
              </a>
            </div>
            <Typography variant="body3">
              © 2022 Norse. Wszelkie prawa zastrzeżone
            </Typography>
          </footer>
          <div className="padding" />
        </main>
      </div>
    </div>
  );
};
