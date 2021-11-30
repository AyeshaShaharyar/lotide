
const assertEqual = function(actual, expected) {
  if (actual  === expected){
    return(`✅ ✅ ✅  Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    return(`🛑 🛑 🛑  Assertion Failed: ${actual}  !==  ${expected}`);
  };
};

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

const eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);
  if(keys1.length !== keys2.length){
    return false;
  }
  for (let key of keys1){
    if(Array.isArray(object1[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }else if(object1[key] === object2[key]){
      return false;
    }
  }
}
  return true;
};

const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true
assertObjectsEqual(ab, ba);

// const abc = { a: "1", b: "2", c: "3" };
// console.log(eqObjects(ab, abc)); // => false
// (assertObjectsEqual(eqObjects(ab, abc), false));

// (assertObjectsEqual(eqObjects(cd, cd2), true));
// (assertObjectsEqual(eqObjects(cd, dc), true))
// // console.log(`${inspect(actual)}`);