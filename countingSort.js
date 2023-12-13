function countingSort(arr) {
  const maxNumber = Math.max(...arr);
  let result=Array(maxNumber+1).fill(0);

for(const num of arr){
    result[num]= (result[num]||0)+1;
}
return result
}
const a = [1, 1, 3, 4, 1];
console.log(countingSort(a))

//yet not fixed