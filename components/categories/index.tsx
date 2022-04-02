import { useState } from "react";

import styles from "./categories.module.scss";


export const Categories = () => {
  
  return (
    <nav className={styles.horiz}>
    <ul>
        <li><a href="#">Stream</a></li>
        <li><a href="#">Lab</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
</nav>
  );
};

export default Categories;
