//swap my code
let a = 10;
let b = 5;
a = a + b; //15
b = a - b; //10
a = a - b; //5

console.log('a', a); //5
console.log('b', b); //10

//concat array tow array sor and putt 0 at the end
let firstArra = [1, 2, 3, 0, 6, 7];
let secondArr = [6, 8, 9, 10, 0];
let resultArray = [...firstArra, ...secondArr];
resultArray.sort((a, b) => {
  if (a === 0 && b !== 0) {
    return 1; // move zeros to the end
  } else if (a !== 0 && b === 0) {
    return -1; // keep non-zeros in their order
  } else {
    return a - b; // sort non-zero elements in ascending order
  }
});
console.log(resultArray);
