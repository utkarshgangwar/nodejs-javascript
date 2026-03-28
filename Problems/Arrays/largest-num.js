const arr = [30, 50, 10, 20, 40];

(function () {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            arr[i] = arr[i] + arr[i + 1];
            arr[i + 1] = arr[i] - arr[i + 1];
            arr[i] = arr[i] - arr[i + 1];
        }
    }
    console.log(arr[arr.length - 1], arr);
})();

(function () {
    console.log('arr -- ', arr);

    let largest = arr[0];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] > largest) {
            largest = arr[i + 1]
        }
    }
    console.log(largest);
})();