import { NextPage } from "next/types";
import React, { useEffect, useState } from "react";
import Card from "..";

import styles from "./cardContainer.module.scss";

interface ICardContainer {
  jobs?: any;
}

const CardContainer: NextPage<ICardContainer> = ({ jobs }) => {
  

  const renderAllJobs = () => {
    return Array.from(jobs).map((job: any, index: number) => {
      return (
        <div key={index}>
          <Card job={job} index={index} />
        </div>
      );
    });
    // return JSON.stringify(jobs)
  };
  return (
    <div className={styles.cardsContainer}>
      {renderAllJobs()}
      {/* {JSON.stringify(jobs)} */}
    </div>
  );
};

export default CardContainer;
