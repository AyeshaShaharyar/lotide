const assertEqual = function (actual, expected) {
  if (actual === expected) {
    return `✅ ✅ ✅  Assertion Passed: ${actual}  ===  ${expected}`;
  } else {
    return `🛑 🛑 🛑  Assertion Failed: ${actual}  !==  ${expected}`;
  }
};

const assertArraysEqual = function (array1, array2) {
  if (array1.length !== array2.length) {
    return `🛑 🛑 🛑  Assertion Failed: ${array1}  !==  ${array2}`;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return `🛑 🛑 🛑  Assertion Failed: ${array1}  !==  ${array2}`;
    }
  }
  return `✅ ✅ ✅  Assertion Passed: ${array1}  ===  ${array2}`;
};

const letterPositions = function (sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};

console.log(letterPositions("hello World"));
console.log(letterPositions("Lighthouse in the house"));
console.log(letterPositions("Joe"));
console.log(assertArraysEqual(letterPositions("hello").e, [1]));

//How to get the other index of the same letter;
