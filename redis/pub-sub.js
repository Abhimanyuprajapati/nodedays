//  pub-sub
// -> publiser -> send -> channel -> subscriber will consume

const redis = require('redis');

const client = redis.createClient({
    host: "localhost",
    port: 6379,
})

client.on('error', (err) => {
    console.log('redis client error :', err)
})

async function testPubSubRedis () {
    try{
        await client.connect()
        console.log('Redis client connected successfully')

        // const subscriber = client.duplicate(); // create a new client -> share the same connection
        // await subscriber.connect(); // connect to the redis server

        // await subscriber.subscribe("my-channel", (message, channel)=>{
        //     console.log(`received message : ${channel} : ${message}`);
        // })

        // publish message to the dummy channel
        // await client.publish("my-channel", "hello to redis world");

        // await client.publish("my-channel", "hello to my love");

        // await new Promise((resolve)=>{
        //     setTimeout(() => {
        //         resolve("done");
        //     }, 5000);
        // })

        // await subscriber.unsubscribe("my-channel");
        // await subscriber.quit(); // close the subscriber connection


        // *** */ pipeline -> send multiple commands to redis server in a single request
            // pipeline & transaction

    const multi = client.multi();

    multi.set("name:manu", "mylove");
    multi.set("name:manu1", "missing");

    multi.get("name:manu");
    multi.get("name:manu1");

    const result = await multi.exec();
    console.log(result);

    }catch(err){
        console.log(err);
    }finally{
        client.quit();
    }
}


testPubSubRedis();

