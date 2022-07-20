import React, { useState, useEffect, useRef, useContext } from "react";
import AppContext from "../util/state/AppContext";
import styles from "./button.module.scss";

const Button: any = () => {
  const context :any= useContext(AppContext);

  const searchClassRef = useRef(null);
  const searchClassPRef = useRef(null);
  const searchClassInputRef = useRef(null);

  const [focusOnSearch, setFocusOnSearch] = useState(false);
  const [textFromInputField, setTextFromInputField] = useState(null);

  const focusAndBlurEventHandler = (event: any) => {
    console.log("click", focusOnSearch, event);
    if (!focusOnSearch) {
      searchClassRef?.current?.classList.add(styles.active);
      setFocusOnSearch(true);
    } else if (focusOnSearch) {
      searchClassRef?.current?.classList.remove(styles.active);
      setFocusOnSearch(false);
    }
  };
  const handleInputTextChange = (e: any) => {
    console.log(e);
    let searchTerm = e.target.value;
    setTextFromInputField(searchTerm);
    context.handleSearchStringChange(searchTerm);
  };

  return (
    <div className={styles.search} ref={searchClassRef}>
      <svg xmlns="http://www.w3.org/2000/svg" width="355.5" height="87.99">
        <path
          className={styles.right}
          fill="none"
          strokeWidth="4"
          strokeMiterlimit="10"
          d="M177.75 85.99h133.5c23.334 0 42.25-18.916 42.25-42.25C352.944 20.528 333.967 2 310.748 2H177.75"
        />
        <path
          className={styles.left}
          fill="none"
          strokeWidth="4"
          strokeMiterlimit="10"
          d="M177.75 85.99H44.25C20.916 85.99 2 67.074 2 43.74 2.556 20.528 21.533 2 44.752 2H177.75"
        />
      </svg>

      <input
        ref={searchClassInputRef}
        onFocus={(e) => focusAndBlurEventHandler(e)}
        onBlur={(e) => focusAndBlurEventHandler(e)}
        onChange={(e) => handleInputTextChange(e)}
        type="text"
      />
      <p ref={searchClassPRef}>{textFromInputField}</p>

      {!textFromInputField && <span>Search</span>}
    </div>
  );
};

export default Button;
