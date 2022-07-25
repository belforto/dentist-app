import React from "react";
import styles from "./allJobs.module.scss";
import Header from "../../components/header";
import { Categories } from "../../components/categories";
import Hero from "../../components/hero";
import  { dbCallFetchJobs } from "../api/getJobs";
import CardContainer from "../../components/card/cardContainer/cardContainer";
import { requireAuthentication } from "../../components/util/auth";
import { GetServerSidePropsContext } from "next/types";

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


export const  getServerSideProps=  requireAuthentication(async(context: GetServerSidePropsContext) =>{
  let response = await  dbCallFetchJobs(10,0)
  return {
    props: {
      jobs:(response)
    },
  }
})