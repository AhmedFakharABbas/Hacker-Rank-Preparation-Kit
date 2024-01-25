function twoArrays(k, A, B) {
  A.sort(a - b);
  B.sort(b - a);
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
console.log(twoArrays(10, [1, 2, 3], [1, 6, 8]));
