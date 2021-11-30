const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle.js")

console.log(middle([1,2]));

console.log(assertArraysEqual(middle([1,2,3]), [2])); // => should PASS
console.log(assertArraysEqual(middle([1,2,3,4]), [2,3]));