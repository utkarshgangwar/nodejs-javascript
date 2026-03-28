
const arr = [1, 4, 6, [7, 8, 9], [2, 3, [4, 5, [6, 7]]]];
const flatArray = (arr) => {
    const result = [];
    arr.forEach((item) => {
        if (Array.isArray(item)) {
            result.push(...flatArray(item));
        } else {
            result.push(item);
        }
    })
    return result;
}

console.log(flatArray(arr));