import React, { useState, useEffect } from "react";
import styles from "./header.module.scss";

const Header: any = () => {
  return (
    <div className={styles.container}>
      <section id="headerSection" className="headerSection">
        <div>
          <img
            src="https://static.wixstatic.com/media/ac812b_4e7d7588b956474394aa8c5bec70876e~mv2.png/v1/fill/w_74,h_35,al_c,usm_0.66_1.00_0.01,enc_auto/Color%20logo%20with%20background.png"
            alt="Color logo with background.png"
          />
        </div>
      </section>
    </div>
  );
};

export default Header;
