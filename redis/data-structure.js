const redis = require('redis');

const client = redis.createClient({
    host: 'localhost',
    port: 6379,
})

client.on('error', (err)=>{
    console.log('redis client error :', err);
})

async function redisDataStructure(){
    try{

        await client.connect()
        console.log('Redis client connected successfully')

        // Strings -> SET, GET, MSET, MGET    // M means multiple

        await client.set("name:manu", "mylove");
        const name= await client.get("name:manu");
        console.log(name);

        await client.mSet(["user:username", "manu", "user:age", "23", "user:city", "delhi"]);

        const [username, age, city] = await client.mGet(["user:username", "user:age", "user:city"]);
        console.log(username, age, city);


// lists -> LPUSH, LPOP, RPUSH, RPOP, LRANGE

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
        
    }catch(err){
        console.log(err);
    }finally{
        client.quit();
    }
}


redisDataStructure();