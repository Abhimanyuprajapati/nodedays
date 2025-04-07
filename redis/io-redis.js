const Redis = require('ioredis');
// redis client library for node js 

const redis = new Redis();

async function ioRedisDemo() {
    try{
        await redis.set("name:manu", "mylove");
        const val = await redis.get("name:manu");
        console.log(val);
    }catch(err){
        console.log(err);
    }finally{
        redis.quit();
    }
}

ioRedisDemo();

