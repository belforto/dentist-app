import React from "react";
import styles from "./contact.module.scss";
import Header from "../../components/header";
import { Categories } from "../../components/categories";
import Hero from "../../components/hero";

export default function index() {
  return (
    <div className={styles.container}>
      <Categories />
      contact 1
    </div>
  );
}
