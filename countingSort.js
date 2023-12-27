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

function countingSort(arr) {
    const maxNumber = Math.max(...arr);
    let result=Array(maxNumber+1).fill(0);
  
  for(const num of arr){
      result[num]= (result[num]||0)+1;
  }
  return result
  }
//her is the corrected verstion according to chatgpt 
//yet not fixed
//

//
//