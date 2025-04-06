const redis = require("redis");
const client = redis.createClient({
  host: "localhost",
  port: 6379,
});

// event listeners for redis client
client.on("error", (err) => {
  console.log("redis client error : ", err);
});

async function testConnectionRedis() {
  try {
    const res = await client.connect();
    // console.log("Redis client connected successfully", res);

    const object = await client.set("manu", "value1");

    console.log("Redis set response: ", object);

    const extractValue = await client.get("manu");

    console.log(extractValue);

    const deleteValue = await client.del("manu")
    console.log("Redis delete response: ", deleteValue);

const extractedUpdatedValue = await client.get("manu");

console.log(extractValue);
    console.log(extractedUpdatedValue);

await client.set("count", "100");
const incrementValue = await client.incr("count");
console.log(incrementValue);


const decrementValue = await client.decr("count");
await client.decr("count");
await client.decr("count");
await client.decr("count");
await client.decr("count");
await client.decr("count");

const updatedDecrementValue = await client.get("count");
console.log(updatedDecrementValue);


  } catch (err) {
    console.log(err);
  } finally {
    client.quit();
  }
}

testConnectionRedis();
