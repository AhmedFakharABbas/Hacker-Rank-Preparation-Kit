function compareTriplets(a, b) {
  let aliceScore = 0;
  let bobScore = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      aliceScore++;
    } else if (a[i] < b[i]) {
      bobScore++;
    }
  }
  return [aliceScore, bobScore];
}
console.log(compareTriplets([1, 2, 3], [3, 2, 1]));
// The function should return an array with two integers, the first being the score of Alice and the second being the score of Bob.
// The function should compare the elements of the two arrays and award points based on the following rules:
// - If Alice's score is greater than Bob's score, Alice gets 1 point.
// - If Bob's score is greater than Alice's score, Bob gets 1 point.
// - If the scores are equal, no one gets a point.
// The function should return an array with two integers, the first being the score of Alice and the second being the score of Bob.
// Example:
// Input: [1, 2, 3], [3, 2, 1]
// Output: [1, 1]
