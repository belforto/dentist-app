import React from "react";
import Editor from "../../components/editor";
import Luckysheet from "../../components/excell";
import styles from "./OfferCreator.module.scss";

export default function index() {
  return (
    <div className={styles.container}>
      <Editor />
      <div className={styles.excell}>
        <Luckysheet />
      </div>
    </div>
  );
}
