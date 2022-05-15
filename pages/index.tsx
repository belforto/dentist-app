import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Editor from "../components/header";
import Categories from "../components/categories";
import Hero from "../components/hero";
import Search from "../components/search";
import Card from "../components/card";
import Footer from "../components/footer";
import { FETCH_ALL_JOBS_URL } from "../components/util/Endpoints";


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.darkContainer}>
        {JSON.stringify(FETCH_ALL_JOBS_URL)}
        <Categories />
        <Hero /> 
        <Search />
        <div className={styles.cardsContainer}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default Home;
