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
  //my code according to hackerrank that is not fixed yet
//her is the corrected verstion according to chatgpt 
function countingSort(arr) {
    const frequencyArray = new Array(100).fill(0);

    // Count the occurrences of each element in the input array
    for (let i = 0; i < arr.length; i++) {
        frequencyArray[arr[i]]++;
    }
  }
//yet not fixed
//

//
//