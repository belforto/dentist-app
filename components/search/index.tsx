
import React, { useState, useEffect, useContext } from "react";
import Button from "../button";
import AppContext from "../util/state/AppContext";
import SearchResults from "./results/SearchResults";
import styles from "./search.module.scss";

const Search: any = () => {
  const context: any = useContext(AppContext);
  let { searchString } = context.state;

  return (
    <div>
      <div className={styles.searchFormBox}>
        <form className={styles.searchForm} method="get" action="">
          <Button />
        </form>
      </div>

    <SearchResults   searchString={searchString}  />
      
    </div>
  );

}
export default Search;