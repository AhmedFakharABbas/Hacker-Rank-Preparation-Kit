// Slide through the array and calculate the sum of each subarray of length 'm'
const birthdayfunction = function (s, d, m) {
  let result = 0;
  for (let i = 0; i <= s.length - m; i++) {
    let swindow = s.slice(i, m + i);
    if (swindow.reduce((a, b) => a + b, 0) == d) {
      result++;
    }
  }
  return result;
};
console.log(birthdayfunction([2, 2, 1, 3, 2], 4, 2));
