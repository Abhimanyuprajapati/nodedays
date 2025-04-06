const redis = require("redis");

const client = redis.createClient({
  host: "localhost",
  port: 6379,
});

client.on("error", (err) => {
  console.log("redis client error :", err);
});

async function redisDataStructure() {
  try {
    await client.connect()
    console.log('Redis client connected successfully')

    // **** */ Strings -> SET, GET, MSET, MGET    // M means multiple

    // await client.set("name:manu", "mylove");
    // const name= await client.get("name:manu");
    // console.log(name);
    // await client.mSet(["user:username", "manu", "user:age", "23", "user:city", "delhi"]);
    // const [username, age, city] = await client.mGet(["user:username", "user:age", "user:city"]);
    // console.log(username, age, city);

    //**** */ lists -> LPUSH, LPOP, RPUSH, RPOP, LRANGE

    // await client.lPush("mylist", ["item1", "item2", "item3", "item4"]);
    // const extractAll = await client.lRange("mylist", 0,-1);
    // console.log(extractAll);
    // const firstNode = await client.lPop("mylist");
    // console.log(firstNode);
    // const remainingNode = await client.lRange("mylist", 0,-1);
    // console.log(remainingNode);
    // const lastinsert = await client.rPush("mylist", ["manshi", "manu", "manu1"]);
    // console.log(lastinsert);
    // const remainingNode = await client.lRange("mylist", 0,-1);
    // console.log(remainingNode);
    // const lastNode = await client.rPop("mylist");
    // console.log(lastNode);

    //  **** */ sets -> SADD, SMEMBERS, SREM, SISMEMBER

//     await client.sAdd("user:nickname", ["manu", "manu1", "manu2"]);
//     const allNicknames = await client.sMembers("user:nickname");
//     console.log(allNicknames);

//     const findManu1 = await client.sIsMember("user:nickname", "manu1");
// console.log(findManu1);

// await client.sRem("user:nickname", "manu2");
// const allNicknameAfterDelete = await client.sMembers("user:nickname");
// console.log(allNicknameAfterDelete);


// **** */ sorted sets -> ZADD, ZRANGE, ZREM, ZRANK

    // await client.zAdd("cart", [
    //     { score: 200, value: "item1" },
    //   { score: 150, value: "item2" },
    //   { score: 900, value: "item3" },
    //   { score: 9, value: "item4" },
    // ]);

    // const getAllCart = await client.zRange("cart", 0, -1);
    // console.log(getAllCart);

    // const getAllcartWithScore = await client.zRangeWithScores("cart", 0, -1);
    // console.log(getAllcartWithScore);

    // const getanyItem = await client.zRank("cart", "item3");
    // console.log(getanyItem);


    //  **** */ hashes -> HSET, HGET, HGETALL, HDEL

    await client.hSet("product:name", {
        name: "manu",
        price: 200,
        decription: "my love",
        rating:5,
    })

    const getproduct = await client.hGet("product:name", "decription");
    console.log(getproduct);

    const getAllProduct = await client.hGetAll("product:name");
    console.log(getAllProduct);

    await client.hDel("product:name", "rating");
    const getAllProductAfterDelete = await client.hGetAll("product:name");
    console.log(getAllProductAfterDelete);


  } catch (err) {
    console.log(err);
  } finally {
    client.quit();
  }
}

redisDataStructure();
