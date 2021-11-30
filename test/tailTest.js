const assert = require("chai").assert;
const tail = require("../tail.js");

describe("tail of the array", () => {
  it("returns [Lighthouse, Labs] for [Hello, Lighthouse, Labs]", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), (["Lighthouse", "Labs"]));
  });

});
