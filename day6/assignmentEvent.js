// Events in node.js

// Create a program using node js eventemitter that :
// 1. Listen multiple types of user events (e.g login , logout , purchase and profile update)  ✅
// 2. tracks how many times each event is emitter.
// 3. logs a summary of all events occurrences when a special sumarry event is triggered

// Requirements 
// 1. Create at least four custom events
// 2. emit these events multiplies times with different arguments (e.g username , item purchase)
// 3. track and store the count of each type 
// 4. define a summary events that log a details reports of how many times each events was triggered

const EventEmitter = require('events')
const fs = require("fs"); 
const { json } = require('stream/consumers');

const emitter = new EventEmitter();

const eventcount ={
    login: 0,
    logout: 0,
    purchase: 0,
    profile_update: 0
} 

const filelog = "eventtracker.json";

if(fs.existsSync(filelog)){
    const data=fs.readFileSync(filelog, "utf-8");
    Object.assign(eventcount, JSON.parse(data));
}

function saveCount(){
    fs.writeFileSync(filelog, JSON.stringify(eventcount), null , 2)

}

emitter.on("login", (username)=>{
    eventcount.login++;
    console.log(`${username} is login successfully`);
    saveCount();
})  

emitter.on("logout", (username)=>{
    eventcount.logout++;
    console.log(`${username} is logout successfully`);
    saveCount();
})

emitter.on("purchase",(username, itemname)=>{
    eventcount.purchase++;
    console.log(`${username} successfully purchase ${itemname}`);
    saveCount();
})

emitter.on("profile_update", (username)=>{
    eventcount.profile_update++;
    console.log(`${username} is profile updated successfully`);
    saveCount();
})

emitter.on("summury", ()=>{
    console.log("\n Event Summary ")
    console.log(`Login:${eventcount.login}`);
    console.log(`logout:${eventcount.logout}`);
    console.log(`purchase:${eventcount.purchase}`);
    console.log(`profile_update:${eventcount.profile_update}`);
})


emitter.emit("login", "abhimanyu");
emitter.emit("logout", "abhimanyu");
emitter.emit("purchase", "don", "love");
emitter.emit("profile_update", "abhimanyu");

emitter.emit("summury");