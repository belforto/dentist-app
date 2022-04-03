import { useState } from "react";

import styles from "./card.module.scss";

export const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.card__icon}>
        <i className="fas fa-bolt"></i>
      </div>
      <p className={styles.card__exit}>
        <i className="fas fa-times"></i>
      </p>
      <h2 className={styles.card__title}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </h2>
      <p className={styles.card__apply}>
        <a className={styles.card__link} href="#">
          Apply Now <i className="fas fa-arrow-right"></i>
        </a>
      </p>
    </div>
  );
};

export default Card;
