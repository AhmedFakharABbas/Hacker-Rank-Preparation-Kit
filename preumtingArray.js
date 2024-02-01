function twoArrays(k, A, B) {
    // Sort array A in ascending order
    A.sort((a, b) => a - b);

    // Sort array B in descending order
    B.sort((a, b) => b - a);

    // Check if there exist elements in A and B such that A[i] + B[i] < k for any i
    for (let i = 0; i < A.length; i++) {
        if (A[i] + B[i] < k) {
            return "NO";
        }
    }
    // If the loop completes, it means A[i] + B[i] >= k for all i

    // If the loop completes, it means A[i] + B[i] >= k for all i
    return "YES";
}

// Example usage:
const kValue = 10;
const arrayA = [2, 1, 3];
const arrayB = [7, 8, 9];

const result = twoArrays(kValue, arrayA, arrayB);
console.log(result); // Output: YES or NO
