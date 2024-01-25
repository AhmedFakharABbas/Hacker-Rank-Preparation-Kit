function twoArrays(k, A, B) {
  let a = A.reverse();
  let b = B.reverse();
  let res = "NO";
  for (let i = 0; i < a.length; i++) {
    let result = a[i] + b[i];
    if (result >= k) {
      res = "YES";
    }
    return res;
  }
  // Write your code here
}
twoArrays(10, [1, 2, 3], [1, 6, 8]);
