function birthdayCakeCandles(candles) {
  let maxCount = 0;
  const max = Math.max(...candles);
  candles.forEach((element) => {
    if (max === element) {
      maxCount++;
    }
  });

  console.log(maxCount);
}
birthdayCakeCandles([4, 4, 1, 3]);
