/*  

Event Loop in JavaScript

The Event Loop is the mechanism that allows JavaScript to handle asynchronous 
operations efficiently. Since JavaScript is single-threaded, the Event Loop 
ensures that code runs without blocking while handling multiple tasks like I/O operations, 
timers, and user interactions.


🔥 How the Event Loop Works (Step-by-Step)
1️⃣ Execute Synchronous Code (Runs immediately in the main thread).
2️⃣ Handle Microtasks (Promises, queueMicrotask(), process.nextTick()).
3️⃣ Execute Macrotasks (Timers like setTimeout(), I/O operations, etc.).
4️⃣ Repeat the Process (Continuously checks for new tasks).


Microtask vs. Macrotask in JavaScript

JavaScript has an event loop that manages the execution of different tasks, 
categorizing them into microtasks and macrotasks.


Microtasks : 
Microtasks execute immediately after the currently executing script 
and before any macrotasks.

Examples of Microtasks:
1. process.nextTick() (Node.js only)

2. Promises (.then(), .catch(), .finally())

3. MutationObserver (For DOM Changes) and Proxy (For Object Property Changes)

4.  queueMicrotask() 

Microtasks have higher priority than macrotasks. They execute immediately after the synchronous code finishes.



Macrotasks
Macrotasks are scheduled for execution after the currently executing script 
and after all microtasks have been processed.

Examples of Macrotasks:
1. setTimeout()
2. setInterval()
3. setImmediate() (Node.js only)
4. requestAnimationFrame()
5. I/O operations (e.g., file read/write in Node.js)

Macrotasks are executed in the next event loop iteration after microtasks.

***/

// timers => pending callbacks => idle, prepare => poll => check => close callbacks  

const fs = require('fs');
const crypto = require('crypto');
console.log("Start");

setTimeout(()=>{
console.log("Timeout 1"); // THIS IS A MACROTASK
},0)

console.log("starting timeout 2");

console.log("starting timeout 3");

console.log("starting timeout 4");

setTimeout(()=>{
    console.log("Timeout 2");  // THIS IS A MACROTASK
})


setImmediate(()=>{
    console.log("this is in setImmediate (check phase)"); // THIS IS A MACROTASK
})

Promise.resolve().then(()=>{
    console.log("promise resolved") // THIS IS A MICROTASK
})

process.nextTick(()=>{
    console.log("nextTick") // THIS IS A MICROTASK  
})

fs.readFile(__dirname,()=>{
        console.log("file read operation (I/O operation)"); // THIS IS A MACROTASK
})

crypto.pbkdf2("password", "salt", 100000, 512, "sha512", (err, key)=>{
if(err) throw err;
console.log("pbkdf2 operation completed(CPU intensive task)"); // THIS IS A MACROTASK
})


console.log("End");



// output 

// Start
// starting timeout 2
// starting timeout 3
// starting timeout 4
// End
// nextTick
// promise resolved
// Timeout 1
// Timeout 2
// this is in setImmediate (check phase)
// file read operation (I/O operation)
// pbkdf2 operation completed(CPU intensive task)
