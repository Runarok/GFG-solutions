//{ Driver Code Starts
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

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function newNode(root, data) {
    if (root === null)
        root = new Node(data);
    else if (data < root.data)
        root.left = newNode(root.left, data);
    else
        root.right = newNode(root.right, data);
    return root;
}

function buildTree(str) {
    // Corner Case
    if (str.length === 0 || str[0] === "N") return null;

    // Create the root of the tree
    let root = new Node(parseInt(str[0]));

    // Push the root to the queue
    let queue = [];
    let start = 0;
    queue.push(root);

    // Starting from the second element
    let i = 1;
    while (queue.length !== start && i < str.length) {

        // Get and remove the front of the queue
        let currNode = queue[start];
        start++;

        // Get the current node's value from the string
        let currVal = str[i];

        // If the left child is not null
        if (currVal !== "N") {

            // Create the left child for the current node
            currNode.left = new Node(parseInt(currVal));

            // Push it to the queue
            queue.push(currNode.left);
        }

        // For the right child
        i++;
        if (i >= str.length) break;
        currVal = str[i];

        // If the right child is not null
        if (currVal !== "N") {

            // Create the right child for the current node
            currNode.right = new Node(parseInt(currVal));

            // Push it to the queue
            queue.push(currNode.right);
        }
        i++;
    }

    return root;
}

function inorderUtil(root, res) {
    if (root === null) return;
    inorderUtil(root.left, res);
    res.push(root.data);
    inorderUtil(root.right, res);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let input_ar1 = readLine().split(' ');
        let root = buildTree(input_ar1);
        let k = parseInt(readLine());
        let obj = new Solution();
        obj.insert(root, k);
        let res = [];
        inorderUtil(root, res);
        let s = '';
        for (let i = 0; i < res.length; i++) {
            s += res[i] + " ";
        }
        console.log(s);

        console.log("~");
    }
}
// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {Node} node
 * @param {number} key
 * @returns {Node}
 */

class Solution {
    // Function to insert a node in a BST.
    insert(node, key) {
        // If the current node is null, insert the new key here
        if (node === null) {
            return new Node(key); // Return a new node with the key
        }

        // If the key is smaller than the current node's data, insert in the left subtree
        if (node.data > key) {
            node.left = this.insert(node.left, key);
        } 
        // If the key is greater than the current node's data, insert in the right subtree
        else if (node.data < key) {
            node.right = this.insert(node.right, key);
        }

        // Return the unchanged node pointer
        return node;
    }
}
