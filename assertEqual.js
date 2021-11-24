// If the values match, it should print (console.log) the following: Assertion Passed: [actual] === [expected] (but with the values filled in)
// Otherwise it should print (console.log) the following: Assertion Failed: [actual] !== [expected] (but with the values filled in)
const assertEqual = function(actual, expected) {
  if (actual  === expected){
    console.log(" ✅ ✅ ✅  Assertion Passed: " + [actual] + " === " + [expected]);
  } else {
    console.log(" 🛑 🛑 🛑  Assertion Failed: " + [actual] + " !== " + [expected]);
  };
};

// TEST CODE
console.log (assertEqual("Lighthouse Labs", "Bootcamp"));
console.log(assertEqual(1, 1));