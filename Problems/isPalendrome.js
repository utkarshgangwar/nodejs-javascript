function isPalindrome(str) {
    let start = 0;
    let end = str.length - 1;
    for (let i = 0; i < str.length; i++) {
        if (str[start] === str[end]) {
            start += 1;
            end -= 1;
        }
        else return false
    }
    return true;
}

console.log(isPalindrome('racecar'));
console.log(isPalindrome('hello'));
