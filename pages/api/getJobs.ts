// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { performance } from "perf_hooks";
import {
  FETCH_ALL_JOBS_URL,
  FETCH_ALL_JOBS_LIMIT_OFFSET_URL,
} from "../../components/util/Endpoints";

import {
  fetchRedisData,
  REDIS_KEY_POSLOVI,
  setRedisData,
} from "../../components/util/redis";

export default async function getJobsApiEndpoint(req: any, res: any) {
  const startTime = performance.now();
  try {
    const response = await dbCallFetchJobs(9, 10);
    // console.log('response: ', response)
    if (response == null) throw new Error("Wrong call");
    // Set the cache-header
    res.setHeader("Cache-Control", "public, max-age=5, immutable");
    res.setHeader("X-Cache", "MISS");
    res.status(200).json(response);
  } catch (err) {
    console.log("err: ", err);
    res.status(500).json({ error: "Server error" });
  } finally {
    const endTime = performance.now();
    console.log(`Call took ${endTime - startTime} milliseconds`);
  }
}

export const dbCallFetchJobs = async (limit: number, skip: number) => {
  try {
    const fetchRedisResponse = await fetchRedisData(REDIS_KEY_POSLOVI);
    const fetchRedisResponseJSON =
      typeof fetchRedisResponse == "string"
        ? JSON.parse(fetchRedisResponse)
        : fetchRedisResponse;

    if (fetchRedisResponseJSON) {
      // This value is considered fresh for five seconds (maxage=5).
      // If a request is repeated within the next 5 seconds, the previously
      // cached value will still be fresh. If the request is repeated after, it will request the
      // data again from the server.
      if (limit != null && skip != null) {
        return fetchRedisResponseJSON.slice(skip, skip + limit);
      } else {
        return fetchRedisResponseJSON;
      }
    } else {
      let dataFromMongoDB;
      // Waiting 1 second to simulate a slow response from another DB query
      // await new Promise((resolve) => setTimeout(resolve, 1000));
      // As a contrived example, let's say this is the expected result from the database
      if (limit != null && skip != null) {
        dataFromMongoDB = await fetch(
          `${FETCH_ALL_JOBS_LIMIT_OFFSET_URL}?limit=${limit}&offset=${skip}`
        ).then((response) => response.json());
      } else {
        dataFromMongoDB = await fetch(FETCH_ALL_JOBS_URL).then((response) =>
          response.json()
        );
      }

      const response = await setRedisData(REDIS_KEY_POSLOVI, dataFromMongoDB);
      // console.log("dataFromMongoDB: ", dataFromMongoDB, response);

      return dataFromMongoDB;
    }
  } catch (err) {
    console.log(" dbcall err: ", err);

    return null;
  } finally {
    // console.log(caller,"callllller")
  }
};
