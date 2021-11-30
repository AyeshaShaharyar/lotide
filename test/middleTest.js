const assert = require("chai").assert;
const middle = require("../middle.js");

// console.log(middle([1,2]));

// console.log(assertArraysEqual(middle([1,2,3]), [2])); // => should PASS
// console.log(assertArraysEqual(middle([1,2,3,4]), [2,3]));

describe("return the middle of the array", () => {

  it("return the middle of the array [2] for [1,2,3]", () => {
    assert.deepEqual(middle([1,2,3]), [2]);
  });

  it("return the middle of the array [2,3] for [1,2,3,4]", () => {
    assert.deepEqual(middle([1,2,3,4]), [2,3]);
  });

  it("return the empty array [] for [1,2]", () => {
    assert.deepEqual(middle([1,2]), []);
  });
});