import { useState } from "react";

import styles from "./card.module.scss";

export const Card = ({ job, index }: any) => {
  const backgroundColorFunctionRandom = (index: number) => {
    switch (index % 5) {
      case 0:
        return "radial-gradient(#1fe4f5, #3fbafe)";

      case 1:
        return "radial-gradient(#f588d8, #c0a3e5)";

      case 2:
        return "radial-gradient(#60efbc, #58d5c9)";

      case 3:
        return "radial-gradient(#76b2fe, #b69efe)";

      case 4:
        return "radial-gradient(#fbc1cc, #fa99b2)";

      default:
        return "radial-gradient(#1fe4f5, #3fbafe)";
    }
  };
  return (
    <div
      className={styles.card}
      style={{ background: backgroundColorFunctionRandom(index) }}
    >
      <div className={styles.card__icon}>
        <i className="fas fa-bolt"></i>
      </div>
      <p className={styles.card__exit}>
        <i className="fas fa-times"></i>
      </p>
      <h2 className={styles.card__title}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </h2>
      {JSON.stringify(job)}
      <p className={styles.card__apply}>
        <a className={styles.card__link} href="#">
          Apply Now <i className="fas fa-arrow-right"></i>
        </a>
      </p>
    </div>
  );
};

export default Card;
