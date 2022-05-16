import Redis from "ioredis";

const REDIS_URL = process.env.REDIS_URL ? process.env.REDIS_URL : "aa";
const REDIS_PORT = process.env.REDIS_PORT ? process.env.REDIS_PORT : "99";
const REDIS_PASSWORD = process.env.REDIS_PASS_STRING
  ? process.env.REDIS_PASS_STRING
  : "aa";
export const redis = new Redis(
  "redis://:" + REDIS_PASSWORD + "@" + REDIS_URL + ":" + REDIS_PORT
);

export const REDIS_KEY_POSLOVI = "sviposlovi";

const TIME_TO_REFRESH_REDIS_KEY_HOURS = process.env
  .TIME_TO_REFRESH_REDIS_KEY_HOURS
  ? Number(process.env.TIME_TO_REFRESH_REDIS_KEY_HOURS)
   *60*60
   : 10 * 60; // in seconds


//GET DATA FROM REDIS BY PROVIDING KEY
export const fetchRedisData = async (redisKey: string) => {
  let response;
  try {
    response = await JSON.parse((await redis.get(redisKey)) || "key");

    return response;
  } catch (error) {
    // setRedisData(redisKey, "{a:1}");
    return null;
  }
};


//SET DATA TO REDIS BY PROVIDING KEY, DATA and Time to expiration
export const setRedisData = async (redisKey: string, dataRedis: any) => {
  let value;
  try {
    value = await redis.set(
      redisKey,
      JSON.stringify(dataRedis),
      "EX",
      Number(TIME_TO_REFRESH_REDIS_KEY_HOURS)
    );
  } catch (error) {}
  return value;
};
