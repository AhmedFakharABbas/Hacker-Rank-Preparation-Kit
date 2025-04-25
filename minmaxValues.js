function minmaxSum(arr) {
  let maxNumber = 0;
  let minNumber;
  let maxCount = 0;
  let minCount = 0;

  arr.forEach((element) => {
    maxCount = maxCount + element;
    minCount = minCount + element;
    if (element > maxNumber) {
      maxNumber = element;
    }
    if (element < minNumber || !minNumber) {
      minNumber = element;
    }
  });

  console.log(minCount - maxNumber, maxCount - minNumber);
}
function optimizedMaxMin(arr) {
  const total = arr.reduce((sum, number) => sum + number);
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  console.log(total - max, total - min);
}
optimizedMaxMin([1, 3, 5, 7, 9]);
minmaxSum([1, 3, 5, 7, 9]);
