const redis = require('redis');
const client = redis.createClient({
    host: 'localhost',
    port: 6379
})

// event listeners for redis client
client.on("error", (err)=>{
console.log("redis client error : ", err);
})






