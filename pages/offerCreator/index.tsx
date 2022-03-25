import React from "react";
import styles from "./OfferCreator.module.scss";
import Header from "../../components/header";
import { Categories } from "../../components/categories";

export default function index() {
  return (
    <div className={styles.container}>
      <Header />
      <Categories />
    </div>
  );
}
