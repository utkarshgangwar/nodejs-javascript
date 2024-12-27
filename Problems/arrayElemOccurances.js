// Write a function that counts the occurrences of a specific number in an array.
// This involves tallying how many times a specific number apprears in the array.
// Example: Count 2 in [1,2,2,3] -> 2, Count 4 in [4,4,5] -> 2.

// --------------------------- loop --------------------------------------
// function arrayElemOccur(arr, numToCount) {
//     // arr = arr.sort((a, b) => a - b);
//     let occurence = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === numToCount) {
//             occurence += 1;
//         }
//         // else {
//         //     continue;
//         // }
//     }
//     return occurence;
// }
// console.log(arrayElemOccur([1, 2, 2, 3], 2));
// console.log(arrayElemOccur([4, 4, 1, 4, 3, 2, 5, 3, 4, 5], 4));

// --------------------------- Recursion ---------------------------------

// recursion
// function arrayElemOccur(arr, numToCount) {
//     let count = 0;
//     let newIndex = arr.indexOf(numToCount);
//     if (newIndex >= 0) {
//         count += 1;
//         // arr.pop(arr[newIndex]); Wrong
//         // pop removes element from the last not in between.
//         // Use splice instead.
//         arr.splice(newIndex, 1);
//         return arrayElemOccur(arr, numToCount);
//     } else {
//         return count;
//     }
// }
// Bad code, o(n^2)

// recursion 2
function arrayElemOccur(arr, numToCount, index = 0) {
    if (index === arr.length) return 0;
    return (arr[index] === numToCount ? 1 : 0) + arrayElemOccur(arr, numToCount, index + 1);
}

console.log(arrayElemOccur([1, 2, 2, 3, 2], 2));
// console.log(arrayElemOccur([4, 4, 1, 4, 3, 2, 5, 3, 4, 5], 4));

// -------------------------------- Reduce ---------------------------
/*
    1. Reduce accepts a callback function with initial value and the array elements with it.
    2. Now at the end we are defining the count variable's value as 0. After the , i.e., 0.
    3. Now the arrow function is adding the computed value to the count by the condition.
    4. Condition i.e., ternary => if current is equal to numToCount then it is 1 else it is 0.
    5. Returning this at the end.
*/
function arrayElemOccur(arr, numToCount) {
    return arr.reduce((count, current) => count + (current === numToCount ? 1 : 0), 0);
}

// console.log(arrayElemOccur([1, 2, 2, 3], 2));
// console.log(arrayElemOccur([4, 4, 1, 4, 3, 2, 5, 3, 4, 5], 4, 0));