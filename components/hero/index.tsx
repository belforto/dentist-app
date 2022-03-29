import React, { useState, useEffect } from "react";
import styles from "./hero.module.scss";

const Hero: any = () => {
  return (
    <section  role="img" aria-label="Image Description" className={styles.masthead}>
       
    <h1>
      The Hero Generator
    </h1>
      <button>
        When a hero comes along
      </button>
  </section>
      
    
  );
};

export default Hero;
