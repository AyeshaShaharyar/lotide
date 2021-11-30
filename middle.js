
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

module.exports = middle;