const assertEqual = function(actual, expected) {
  if (actual  === expected){
    return(`✅ ✅ ✅  Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    return(`🛑 🛑 🛑  Assertion Failed: ${actual}  !==  ${expected}`);
  };
};


const countLetters = function(str){
let withoutSpaceStr = str.replace(/ /g,"");
let results = {};

for(let letter of withoutSpaceStr){
  
  if(results[letter]){
    results[letter] += 1;
  }else{
    results[letter] = 1;
  }
}

return results;
};

console.log(countLetters("lighthouse in the house"));
console.log(countLetters("Hello Hello World"));