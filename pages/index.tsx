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
import CardContainer from "../components/card/cardContainer/cardContainer";
import { dbCallFetchJobs } from "./api/getJobs";

const Home: NextPage = ({jobs}:any) => {
  return (
    <div className={styles.container}>
      <div className={styles.darkContainer}>
        <Categories />
        <Hero />
        <Search />
        <CardContainer jobs={jobs} />
      </div>
      <Footer />
    </div>
  );
};

export async function getServerSideProps({ req, res ,query}:any) {
  // console.log('req: ', query)
  
  let response = await  dbCallFetchJobs(10,0)
  // console.log('response: ',  response)
  // console.log( JSON.stringify(response).substring(0,100))
  //fetch(`${server}/api/getJobs`);
// let jobs = await response.json();
// console.log('jobs: ', response)

  // res.setHeader(
  //   'Cache-Control',
  //   'public, s-maxage=10, stale-while-revalidate=59'
  // )

  return {
    props: {
      jobs:(response)
    },
  }
}

export default Home;
