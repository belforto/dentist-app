import React from "react";
import styles from "./allJobs.module.scss";
import Header from "../../components/header";
import { Categories } from "../../components/categories";
import Hero from "../../components/hero";
import  { dbCallFetchJobs } from "../api/getJobs";
import CardContainer from "../../components/card/cardContainer/cardContainer";

export default function index({jobs}:any) {
  // console.log('sadfghj: ', jobs)
  
  return (
    <div className={styles.container}>
      <Categories />
      alljobs
      <CardContainer jobs={jobs} />
      {/* {JSON.stringify(jobs)} */}
      
    </div>
  );
}


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