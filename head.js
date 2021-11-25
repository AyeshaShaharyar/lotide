const head = function(array){
  const firstElement = array[0];
  return firstElement;
}
console.log(head([]));
console.log(head(["Hello", "Lighthouse", "Labs"]));

const assertEqual = function(actual, expected) {
  if (actual  === expected){
    return(`✅ ✅ ✅  Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    return(`🛑 🛑 🛑  Assertion Failed: ${actual}  !==  ${expected}`);
  };
};

// TEST CODE
console.log(assertEqual(head([5,6,7]), 5));
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));