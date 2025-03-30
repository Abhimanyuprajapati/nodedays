/*  
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