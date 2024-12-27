function reverseString(str) {
    let reverseStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reverseStr = reverseStr + str[i];
    }
    console.log(reverseStr);

    return reverseStr;
}

console.log(reverseString('hello'));