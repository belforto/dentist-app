import React, { useState, useEffect } from "react";
import styles from "./search.module.scss";

const Search: any = () => {
  return (
    <div className={styles.searchFormBox} >
      <form  className={styles.searchForm} method="get" action="">
      <div className={styles.searchBox}>
      <button className={styles.buttonSearch} type="submit">
  
      <img src={"/images/search-line.svg"}/>
      </button>
            <input className={styles.searchInput} type="text" placeholder="Pronađi posao" required />
        </div>
      </form>
    </div>
  );
};

export default Search;
