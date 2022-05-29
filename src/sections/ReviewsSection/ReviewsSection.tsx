import React, { useState } from "react";
import { Button } from "../../components/Button";
import { Review } from "../../components/Review";
import { Typography } from "../../components/Typography";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import { reviews } from "./reviews";
import styles from "./ReviewsSection.module.css";

export function ReviewsSection(): React.ReactElement {
  const { windowWidth } = useWindowDimensions();

  const [number, setNumber] = useState(0);
  const handlePrevious = () => {
    setNumber(number - 1);
  };
  const handleNext = () => {
    setNumber(number + 1);
  };

  windowWidth > 1024 && number === 2 && setNumber(1);

  return (
    <div id="reviews">
      <div className="padding" />
      <section className={styles.reviewsSection}>
        <div>
          <Typography variant="body3" weight="bold" color="grey0">
            Opinie
          </Typography>
          <Typography variant="body2" color="grey800">
            Sprawdź więcej opinii naszych klientów w serwisie{" "}
            <a
              href="https://fixly.pl"
              target="_blank"
              rel="noreferrer"
              tabIndex={-1}
            >
              Fixly
            </a>
          </Typography>
        </div>
        <div>
          <div
            style={
              windowWidth > 1024
                ? { transform: `translateX(calc(-100% / 3 * ${number}))` }
                : { transform: `translateX(calc(-100% / 2 * ${number}))` }
            }
          >
            {reviews.map((review) => {
              return (
                <Review
                  key={review.id}
                  avatar={review.avatar}
                  name={review.name}
                  place={review.place}
                  date={review.date}
                  content={review.content}
                />
              );
            })}
          </div>
        </div>
        <div>
          <Button
            onClick={handlePrevious}
            disabled={number === 0 ? true : false}
          >
            Poprzednia
          </Button>
          <Button
            onClick={handleNext}
            disabled={
              windowWidth > 1024 && number === 1
                ? true
                : windowWidth <= 1024 && number === 2
                ? true
                : false
            }
          >
            Następna
          </Button>
        </div>
      </section>
    </div>
  );
}
