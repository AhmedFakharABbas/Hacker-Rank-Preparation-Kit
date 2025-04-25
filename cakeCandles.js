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
const optimizedfucntion = (candles) => {
  let max = Math.max(...candles);
  let maxCount = candles.filter((candle) => candle === max).length;
  console.log(maxCount);
};
birthdayCakeCandles([4, 4, 1, 3]);
optimizedfucntion([4, 4, 1, 3]);
