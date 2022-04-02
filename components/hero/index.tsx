import React, { useState, useEffect } from "react";
import styles from "./hero.module.scss";

const Hero: any = () => {
  return (
    <section
      role="img"
      aria-label="Image Description"
      className={styles.masthead}
    >
      <div className={styles.textAndBtn}>
        <h6>same bla</h6>
        <h1>Poslovi za Tebe</h1>
        <div className={styles.buttons}>
          <button>Nađi posao</button>
          <a target="_blank" href={"https://www.instagram.com"} rel="noreferrer">molim boga da ga ne nađem</a>
        </div>
      </div>
      <div className={styles.imgMain}>
        <img className={styles.imgMainLogo} src={"/images/job.svg"} />
      </div>
    </section>
  );
};

export default Hero;
