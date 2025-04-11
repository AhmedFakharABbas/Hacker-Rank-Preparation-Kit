// fir uni directional arry
function diagonalDifference(arr) {
  let firstDiag = 0;
  let secondDiag = 0;
  for (let i = 0; i < 3; i++) {
    firstDiag = firstDiag + arr[i * 3 + i];
    secondDiag = secondDiag + arr[i * 3 + 2 - i];
  }
  return secondDiag - firstDiag;
}
console.log(diagonalDifference([11, 2, 4, 4, 5, 6, 10, 8, -12]));
/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
  // Write your code here
  let primaryDiagonalSum = 0;
  let secondaryDiagonalSum = 0;

  // Calculate the sum of the primary diagonal (left to right)
  for (let i = 0; i < arr.length; i++) {
    primaryDiagonalSum += arr[i][i];
  }

  // Calculate the sum of the secondary diagonal (right to left)
  for (let i = 0; i < arr.length; i++) {
    secondaryDiagonalSum += arr[i][arr.length - 1 - i];
  }

  // Return the absolute difference between the two diagonal sums
  return Math.abs(primaryDiagonalSum - secondaryDiagonalSum);
}
