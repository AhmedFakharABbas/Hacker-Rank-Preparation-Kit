function lonelyinteger(a) {
    // Write your code here
    for(const element of a){
        const result=a.filter((e)=>e===element)
        if(result.length===1){
           const [uniqueElement] = result;
           return uniqueElement
        }
    }

}

const test =[1,2,3,4,3,2,1];
console.log(lonelyinteger(test))
