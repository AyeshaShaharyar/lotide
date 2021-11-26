const assertArraysEqual = function(array1, array2) {

  if(array1.length !== array2.length){
    return (`🛑 🛑 🛑  Assertion Failed: ${array1}  !==  ${array2}`);
  }
  for (let i = 0; i < array1.length; i++){
  if(array1[i] !== array2[i]){
    return (`🛑 🛑 🛑  Assertion Failed: ${array1}  !==  ${array2}`);
  };
}
return (`✅ ✅ ✅  Assertion Passed: ${array1}  ===  ${array2}`);
}

const eqArrays = function(array1, array2){
  if(array1.length !== array2.length){
    return false;
  }
  for (let i = 0; i < array1.length; i++){
  if(array1[i] !== array2[i]){
    return false;
  };
}
return true;
};

const without = function(source, itemsToRemove){
  
  
  source = source.filter(item => !itemsToRemove.includes(item))
 
  
  console.log(source);
}

//Assertion check:

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));



without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]