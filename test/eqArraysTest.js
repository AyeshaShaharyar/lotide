const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");



console.log(eqArrays([1,2,3], [1,2,3]));
console.log(eqArrays([1,2,3], [1,2,3]));
console.log(eqArrays([1,2,3,6], [1,2,3,6]));
console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)); // => should PASS