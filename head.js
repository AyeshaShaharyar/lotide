const assertEqual = require('./assertEqual');

const head = function(array){
  const firstElement = array[0];
  return firstElement;
}


// TEST CODE
console.log(assertEqual(head([5,6,7]), 5));
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));

module.exports = head;