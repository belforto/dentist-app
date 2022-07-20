import React, { useState, useEffect } from "react";
import Button from "../button";
import styles from "./search.module.scss";

const Search: any = () => {
  return (
    <div className={styles.searchFormBox} >
      <form  className={styles.searchForm} method="get" action="">
        <Button/>
     
      </form>
    </div>
  );
};

export default Search;
