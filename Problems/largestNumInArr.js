function findLargest(arr) {
    let largestNum = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largestNum) {
            largestNum = arr[i];
        }
    }

    return largestNum;
}

console.log(findLargest([3, 7, 2, 8, 5]));