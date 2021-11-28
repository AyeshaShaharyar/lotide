const assertEqual = function(actual, expected) {
  if (actual  === expected){
    return(`✅ ✅ ✅  Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    return(`🛑 🛑 🛑  Assertion Failed: ${actual}  !==  ${expected}`);
  };
};

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





// const letterPositions = function(sentence) {
//   const results = {};
//   for (let char of sentence){
//     if(char !== " "){
//     if(results[char]){
//     results[char] = [(sentence.indexOf(char))];
//   }else{
//     results[char] = [sentence.indexOf(char)];
//   }
//   }
// }
//   return results;
// };

const letterPositions = function(sentence) {
  const newObject = {};
 for(let i = 0; i < sentence.length; i++){
   let character = sentence[i];
  if (character !== " ") {
     if (newObject[character]) {
       newObject[character].push[i];
     } else {newObject [character] = [i];
     }
 
   } 
 
 }
 return newObject;
 
 };

console.log(letterPositions("hello World"));
console.log(letterPositions("hello"));
console.log(letterPositions("Joe"));
console.log(assertArraysEqual(letterPositions("hello").e, [1]));


//How to get the other index of the same letter;