// 191. Number of 1 Bits

// Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).

// Note:

// Note that in some languages, such as Java, there is no unsigned integer type. In this case, the input will be given as a signed integer type. It should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
// In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 3, the input represents the signed integer. -3.
 

// Example 1:

// Input: n = 00000000000000000000000000001011
// Output: 3
// Explanation: The input binary string 00000000000000000000000000001011 has a total of three '1' bits.

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
 var hammingWeight = function(n) {
    let result = 0;
    for(let b of n) {
        if(b === "1") {
            result += 1;
        }
    }
    return result;
};
const n = '00000000000000000000000000001011';
console.log(hammingWeight(n))