const assertArraysEqual = require("../assertArraysEqual");

console.log(assertArraysEqual([1, 2, 3], [1, 2, 3])); // => should PASS
console.log(assertArraysEqual([1, 20, 3], [1, 2, 3]));