// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { performance } from "perf_hooks";
import { FETCH_ALL_JOBS_URL } from "../../components/util/Endpoints";

import { fetchRedisData, REDIS_KEY_POSLOVI, setRedisData } from "../../components/util/redis";


export default async function handler(req:any, res:any) {
  const startTime = performance.now();
  try {
    const fetchRedisResponse = 
    await fetchRedisData(REDIS_KEY_POSLOVI)
    
    if (fetchRedisResponse) {
      // This value is considered fresh for five seconds (maxage=5).
      // If a request is repeated within the next 5 seconds, the previously
      // cached value will still be fresh. If the request is repeated after, it will request the
      // data again from the server.
      res.setHeader("Cache-Control", "public, max-age=5, immutable");
      res.setHeader("X-Cache", "HIT");
      res.status(200).json(
        // JSON.parse(fetchRedisResponse)
        fetchRedisResponse
        );
      } else {
        // Waiting 1 second to simulate a slow response from another DB query
        // await new Promise((resolve) => setTimeout(resolve, 1000));
        // As a contrived example, let's say this is the expected result from the database
        const dataFromMongoDB = await fetch(FETCH_ALL_JOBS_URL).then(response => response.json());
        
        
        const response = await setRedisData(REDIS_KEY_POSLOVI,dataFromMongoDB)
        console.log('dataFromMongoDB: ', dataFromMongoDB,response)
      // Here we are caching the result for 15 seconds to Redis
      // client.setex(key, 15, JSON.stringify(data));

      // Set the cache-header
      res.setHeader("Cache-Control", "public, max-age=5, immutable");
      res.setHeader("X-Cache", "MISS");
      res.status(200).json(dataFromMongoDB);
    }

  } catch (err) {
    console.log('err: ', err)
    res.status(500).json({ error: "Server error" });
  }
  finally{
    const endTime = performance.now();
    console.log(`Call took ${endTime - startTime} milliseconds`);
    
  }
}