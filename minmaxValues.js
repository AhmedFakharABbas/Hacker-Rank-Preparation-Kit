const ja = function minmaxSum(arr) {
  console.log('arr', arr);
  let maxNumber = 0;
  let minNumber = 0;
  let maxCount = 0;
  let minCount = 0;

  arr.forEach((element) => {
    maxCount = maxCount + element;
    minCount = minCount + element;
    if (element > maxNumber) {
      maxNumber = maxNumber;
    }
    if (element < minNumber) {
      minNumber = minNumber;
    }
  });
  console.log('minNumber', minNumber);
  console.log('maxNumber', maxNumber);
  console.log('maxCount', maxCount);
  console.log('minCount', minCount);
};
ja([1, 3, 5, 7, 9]);
