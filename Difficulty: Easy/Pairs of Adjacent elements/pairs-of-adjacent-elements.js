//{ Driver Code Starts
// Initial Template for javascript

// Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString =
        inputString.trim().split('\n').map(string => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

function printList(res, n) {
    let s = "";
    for (let i = 0; i < n; i++) {
        s += res[i];
        s += " ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let input_ar1 = readLine().split(' ').map(x => parseInt(x));
        let n = input_ar1.length;

        let arr = new Array(n);
        for (let i = 0; i < n; i++) {
            arr[i] = input_ar1[i];
        }

        let obj = new Solution();
        let res = obj.adjacentPairs(arr);
        console.log(res);
        console.log("~");
    }
} // } Driver Code Ends

// } Driver Code Ends


// User function Template for javascript
/**
 * @param {number[]} arr - Array of numbers
 * @returns {number[]} - The count of adjacent pairs where the second element is 1 greater than the first
 */

class Solution {
    // Function to count the number of adjacent pairs where the second element is 1 greater than the first
    adjacentPairs(arr) {
        let count = 0; // Variable to track the number of valid adjacent pairs

        // Iterate through the array to check adjacent elements
        for (let i = 0; i < arr.length - 1; i++) {
            // Check if the next element is exactly 1 greater than the current element
            if (arr[i + 1] === arr[i] + 1) {
                count++; // Increment the count for each valid pair
            }
        }

        // Return the count of adjacent pairs
        return count;
    }
}
