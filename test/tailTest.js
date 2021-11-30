const tail = require("../tail.js");
const assertEqual = require("../assertEqual");
// TEST CODE
const result1 = tail(["Hello", "Lighthouse", "Labs"]);
console.log(result1);

//Function Tail not modifying the original array check:

const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words)); // no need to capture the return value since we are not checking it
console.log(assertEqual(words.length, 3));

//Assertion Check:

const result = tail(["Hello", "Lighthouse", "Labs"]);
console.log(assertEqual(result.length, 2)); // ensure we get back two elements
console.log(assertEqual(result[0], "Lighthouse")); // ensure first element is "Lighthouse"
console.log(assertEqual(result[1], "Labs"));