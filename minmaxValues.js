const ja = function minmaxSum(arr) {
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

  console.log(maxCount - minNumber);
  console.log(minCount - maxNumber);
};
ja([1, 3, 5, 7, 9]);
