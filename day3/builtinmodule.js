// Built-in Module

/* 
// Benefits of core Module
    1. convenience
    2. Efficieny
    3. Documentation
*/

/* 
   1. Path Module

    Path module is a build in module in node js that provide 
    utilities for working with file and directory path

*/

const path = require("path");

console.log(__dirname);

console.log(__filename);

// output
// D:\Abhimanyu\all manu folder\Node js code\nodedays\day3
// D:\Abhimanyu\all manu folder\Node js code\nodedays\day3\builtinmodule.js

// 1. basename

console.log(path.basename(__dirname));
console.log(path.basename(__filename));

// output
// day3
// builtinmodule.js

// 2. extname
console.log(path.extname(__dirname));
console.log(path.extname(__filename));

// output
//  blank
// .js

// 3.parse
console.log(path.parse(__dirname));
console.log(path.parse(__filename));

// output 

// {
//     root: 'D:\\',
//     dir: 'D:\\Abhimanyu\\all manu folder\\Node js code\\nodedays',
//     base: 'day3',
//     ext: '',
//     name: 'day3'
//   }
//   {
//     root: 'D:\\',
//     dir: 'D:\\Abhimanyu\\all manu folder\\Node js code\\nodedays\\day3',
//     base: 'builtinmodule.js',
//     ext: '.js',
//     name: 'builtinmodule'
//   }