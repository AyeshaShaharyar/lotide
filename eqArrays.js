const assertEqual = function(actual, expected) {
  if (actual  === expected){
    return(`✅ ✅ ✅  Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    return(`🛑 🛑 🛑  Assertion Failed: ${actual}  !==  ${expected}`);
  };
};


const eqArrays = function(array1, array2){
let values1;
let  values2;
{
  for(let value of array1){
     values1 = value;
  }
  for (let value of array2){
    values2 = value;
  }
  if(values1 === values2){
    return true ;
  }else{
    return false;
  }
}
}
console.log(eqArrays([1,2,3], [1,2,3]));
console.log(eqArrays([1,2,30], [1,2,3]));
console.log(eqArrays([1,2,30], [1,2,30]));
console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)); // => should PASS