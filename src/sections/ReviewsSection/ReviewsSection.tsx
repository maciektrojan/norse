import React, { useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { Review } from "../../components/Review";
import { Typography } from "../../components/Typography";
import { reviews } from "./reviews";
import styles from "./ReviewsSection.module.css";

export function ReviewsSection(): React.ReactElement {
  // początek
  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 1024px)").matches
  );
  useEffect(() => {
    window
      .matchMedia("(max-width: 1024px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);
  // koniec

  const [number, setNumber] = useState(0);
  const handlePrevious = () => {
    setNumber(number - 1);
  };
  const handleNext = () => {
    setNumber(number + 1);
  };

  !matches && number === 2 && setNumber(1);

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
              matches
                ? { transform: `translateX(calc(-100% / 2 * ${number}))` }
                : { transform: `translateX(calc(-100% / 3 * ${number}))` }
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
              matches && number > 1
                ? true
                : !matches && number > 0
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
