//Assert Function
const assertEqual = function(actual, expected) {
  if (actual  === expected){
    return(`✅ ✅ ✅  Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    return(`🛑 🛑 🛑  Assertion Failed: ${actual}  !==  ${expected}`);
  };
};

// TEST CODE
console.log (assertEqual("Lighthouse Labs", "Bootcamp"));
console.log(assertEqual(1, 1));


//Tail Function


const tail = function(array){
  const tailElements = array.slice(1);
  return tailElements;
}

// TEST CODE
const result = tail(["Hello", "Lighthouse", "Labs"]);
console.log(result);

//Function Tail not modifying the original array check:

const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words)); // no need to capture the return value since we are not checking it
console.log(assertEqual(words.length, 3));

//Assertion Check:

const result = tail(["Hello", "Lighthouse", "Labs"]);
console.log(assertEqual(result.length, 2)); // ensure we get back two elements
console.log(assertEqual(result[0], "Lighthouse")); // ensure first element is "Lighthouse"
console.log(assertEqual(result[1], "Labs"));

