// Given a string "xoooxoxoxoxo", which consists of 'x' and 'o' only.
// If the number of 'x' and 'o' is equal, return true; otherwise, return false.

function xo(str) {
    let isEqual = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'x') {
            isEqual += 1;
        } else {
            isEqual -= 1;
        }
    }
    // console.log(isEqual);

    return (isEqual === 0);
}

console.log(xo("xoooxoxoxoxo")); // false
console.log(xo("xoxoxo"));       // true
console.log(xo("xooxxx"));       // false

