// A left rotation operation on an array of size  shifts each of the array's elements  unit to the left. Given an integer, , rotate the array that many steps left and return the result.

// Example


// After  rotations, .

// Function Description

// Complete the rotateLeft function in the editor below.

// rotateLeft has the following parameters:

// int d: the amount to rotate by
// int arr[n]: the array to rotate
// Returns

// int[n]: the rotated array
// Input Format

// The first line contains two space-separated integers that denote , the number of integers, and , the number of left rotations to perform.
// The second line contains  space-separated integers that describe .

// Constraints

// Sample Input

// 5 4
// 1 2 3 4 5
// Sample Output

// 5 1 2 3 4
// Explanation

// To perform  left rotations, the array undergoes the following sequence of changes:



// function rotateLeft(d, arr) {
//     arr = arr.map(n => {
//       return  n + d
//     })
//     for(i=0; i<arr.length;i++){
//         if(arr[i] > arr.length){
//             let x = arr[i] - arr.length
//             arr[i] = 0 + x
//         }
//     }

//     return arr
// }

alternate solution
function rotateLeft(d, arr) {
let res = arr.slice(d).concat(arr.slice(0,d));
return res
}

console.log(rotateLeft(2, [1,2,3,4,5]))
console.log(rotateLeft(5, [1,2,3,4,5]))
console.log(rotateLeft(3, [1,2,3,4,5]))