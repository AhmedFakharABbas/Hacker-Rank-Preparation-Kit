function plusMinus(arr) {
  let pcount = 0;
  let negcount = 0;
  let zerocount = 0;
  let total = arr.length;
  arr.forEach((element) => {
    element > 0 ? pcount++ : element < 0 ? negcount++ : zerocount++;
  });
  console.log(pcount / total);
  console.log(negcount / total);
  console.log(zerocount / total);
}
plusMinus([-4, 3, -9, 0, 4, 1]);
