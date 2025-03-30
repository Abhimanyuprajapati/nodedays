/* 
// objects -> handle binary data

// file system operations, cryptography, image processing
****/

const buffOne = Buffer.alloc(10); // allocates 10 bytes of memory
console.log(buffOne);

const bufferForString = Buffer.from("abhimanyu");
console.log(bufferForString);

const bufferForArray = Buffer.from([1,2,3,4,5,6,7,8,9]);
console.log(bufferForArray);

buffOne.write("abhimanyu"); // writes the string to the buffer
console.log(buffOne.toString()); // converts the buffer to string