// Events in node.js

// Create a program using node js eventemitter that :
// 1. Listen multiple types of user events (e.g login , logout , purchase and profile update) 
// 2. tracks how many times each event is emitter.
// 3. logs a summary of all events occurrences when a special sumarry event is triggered

// Requirements 
// 1. Create at least four custom events
// 2. emit these events multiplies times with different arguments (e.g username , item purchase)
// 3. track and store the count of each type 
// 4. define a summary events that log a details reports of how many times each events was triggered

const EventEmitter= require('events')

const emitter = new EventEmitter();

emitter.on("login", (username)=>{
    console.log(`${username} is login successfully`);
})  

emitter.on("logout", (username)=>{
    console.log(`${username} is logout successfully`);
})

emitter.on("purchase",(username, itemname)=>{
    console.log(`${username} successfully purchase ${itemname}`);
})

emitter.on("profile_update", (username)=>{
    console.log(`${username} is profile updated successfully`);
})


emitter.emit("login", "abhimanyu");
emitter.emit("logout", "abhimanyu");
emitter.emit("purchase", "don", "love");
emitter.emit("profile_update", "abhimanyu")
