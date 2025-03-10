//{ Driver Code Starts
//Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        
        let n = parseInt(readLine());
        let a = readLine().trim().split(" ").map((x) => parseInt(x));
        let obj = new Solution();
        let res = obj.chocolateLength(n,a);
        console.log(res);
    
    
console.log("~");
}
}
// } Driver Code Ends


//User function Template for javascript
/**
 * @param {number} N
 * @param {number[]} A
 * @returns {number}
*/

class Solution {
  // Function to find the length of the maximum length subarray.
  chocolateLength(N, A) {
    let gcdResult = A[0];

    // Calculate the GCD of the entire array
    for (let i = 1; i < N; i++) {
      gcdResult = this.gcd(gcdResult, A[i]);
    }

    return gcdResult;
  }

  // Function to compute the Greatest Common Divisor (GCD) using recursion.
  gcd(a, b) {
    return b === 0 ? a : this.gcd(b, a % b);
  }
}
