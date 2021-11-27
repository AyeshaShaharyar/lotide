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




const middle = function(arr){
  let middleArr = [];

  let index = Math.floor(arr.length / 2);

  if(arr.length === 1 || arr.length === 2){
    return [];

  }else if (arr.length % 2 === 0){
    middleArr.push(arr[index - 1]);
    middleArr.push(arr[index]);
    return middleArr;

  }else{

   middleArr.push(arr[index]);
   return middleArr;
  }
}

console.log(middle([1,2]));

console.log(assertArraysEqual(middle([1,2,3]), [2])); // => should PASS
console.log(assertArraysEqual(middle([1,2,3,4]), [2,3]));