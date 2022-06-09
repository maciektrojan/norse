import StarIcon from "@mui/icons-material/Star";
import clsx from "clsx";
import React from "react";
import { Typography } from "../Typography";
import styles from "./Review.module.css";

type ReviewProps = {
  className?: string;
  avatar: string;
  name: string;
  place: string;
  date: string;
  content: string;
};

export const Review: React.FC<ReviewProps> = ({
  className,
  avatar,
  name,
  place,
  date,
  content,
}) => {
  const rootClassName = clsx(styles.review, className);

  return (
    <div className={rootClassName}>
      <div>
        <Typography variant="body2" weight="bold" color="grey800">
          {avatar}
        </Typography>
        <div className={styles.column}>
          <div className={styles.row}>
            <Typography variant="body2" weight="bold">
              {name}
            </Typography>
            <Typography
              className={styles.place}
              variant="body3"
              color="grey800"
            >
              {place}
            </Typography>
          </div>
          <div className={styles.row}>
            <div>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
            <Typography className={styles.date} variant="body3" color="grey800">
              {date}
            </Typography>
          </div>
        </div>
      </div>
      <Typography variant="body2" color="grey800">
        {content}
      </Typography>
    </div>
  );
};
