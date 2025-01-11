// Es module 
// ECMAScript module import and export 


// 1. Default export 
// const sum=(a,b)=>a+b;

// const sub =(a,b)=>a-b;

// export default {sum, sub};

// in index.js 

{/**
    // import returnFunction from "../location/ES_modules"

    console.log(returnFunction);

    to access this function 
    will do 

    console.log(returnFunction.sub(10,20));

     console.log(returnFunction.sum(10,20));
    
*/}

// 2. Name export 
// export const sum=(a,b)=>a+b;
// export const sub =(a,b)=>a-b;

// in index.js 
{/**
    // import {sum , sub } from "../location/ES_modules"

    to access this function 
    will do 

    console.log(sub(10,20));

     console.log(sum(10,20));
*/}


// 3. mixed export 
// export const sum=(a,b)=>a+b;
// export const sub =(a,b)=>a-b;
    // const mul = (a*b);
// default export {mul};

// in index.js 
{/**
    // import mul,{sum , sub } from "../location/ES_modules"

    to access this function 
    will do 

    console.log(sub(10,20));
     console.log(sum(10,20));
      console.log(mul(10,20));
*/}

// 4. export all function as name 
// export const sum=(a,b)=>a+b;
// export const sub =(a,b)=>a-b;

// in index.js 
{/**
    // import * as retunName from "../location/ES_modules"

    to access this function 
    will do 

    console.log(retunName.sub(10,20));
     console.log(retunName.sum(10,20));
*/}
