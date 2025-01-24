const arr = [2, 1, 5, 7, 4, 8, 6, 3, 9, 0];

(function bubbleSort() {
    // Loop for each element with index 0 to array length - 1
    for (let i = 0; i < arr.length; i++) {
        // inner loop from start to array length - i - 1
        // The range decreases with each outer loop iteration because the largest elements
        // are sorted at the end of the array after each iteration.
        // if i = 0, j = 0, array length = 10,
        // 0 < 10 - 0 - 1 => 0 < 9, true
        // 1 < 10 - 0 - 1 => 1 < 9, true
        // 2 < 10 - 0 - 1 => 2 < 9, true
        // .....
        // 9 < 10 - 0 - 1, 9 < 9, false
        for (let j = 0; j < arr.length - i - 1; j++) {
            // Compare adjacent elements: if the current element is greater than the next element,
            // we swap them. This ensures that the larger elements "bubble up" to the end of the array.
            // check if jth element is greater than adjascent element
            // Example:
            // 1st pass (i = 0): Compare all adjacent elements, pushing the largest element to the end.
            // Array after 1st pass: [1, 2, 5, 4, 7, 6, 3, 8, 0, 9]
            // 2nd pass (i = 1): Compare all elements except the last one (which is already sorted),
            // and push the second-largest element to its correct position.
            // Array after 2nd pass: [1, 2, 4, 5, 6, 3, 7, 0, 8, 9]
            // ......
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    // The array is now sorted after the outer loop completes.
    console.log(arr); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
})();