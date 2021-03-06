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



const map = function(array, callback){
  const results = [];
  for (let item of array) {
    results.push(callback(item));
    
  }
  return results;

}
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);


console.log(assertArraysEqual(map(words, word => word[0]), ["g", "c", "t", "m", "t"])); // => should PASS
