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
    console.log("Redis client connected successfully", res);
  } catch (err) {
    console.log(err);
  } finally {
    client.quit();
  }
}

testConnectionRedis();
