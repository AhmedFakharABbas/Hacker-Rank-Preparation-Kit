function flippingBits(n) {
 // Write your code here
 const binaryString = n.toString(2);
 //conver it into 32  bit int
const paddedBinaryString = binaryString.padStart(32, '0');

const flippedBinaryString = paddedBinaryString
    .split('')
    .map(bit => (bit === '1' ? '0' : '1'))
    .join('');
return parseInt(flippedBinaryString, 2);


}
console.log(flippingBits(3))