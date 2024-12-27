function remArr(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let alreadyExist = false;
        for (let j = 0; j < result.length; j++) {
            if (arr[i] === result[j]) {
                alreadyExist = true;
                break;
            }
        }
        if (!alreadyExist) {
            result.push(arr[i])
        }
    }
    console.log(result);
}

remArr([1, 2, 2, 3, 4, 5])