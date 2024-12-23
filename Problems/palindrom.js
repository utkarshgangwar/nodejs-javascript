// Given a string that consists of symbols, numbers, and characters,
// for example, "A man, a plan, a canal: Panama!!", find out whether it is a palindrome or not.

function check(str) {
    let clearedString = str.toLowerCase().replace(/[^a-z0-9]/g, "");

    let left = 0;
    let right = clearedString.length - 1;

    while (left < right) {
        if (clearedString[left] !== clearedString[right])
            return false;
        left++;
        right--;
    }

    return true;
}

// Test cases
console.log(check("A man, a plan, a canal: Panama!!")); // true
console.log(check("race a car"));                       // false
console.log(check(" "));                                // true (empty string is considered a palindrome)
console.log(check("madam"));                            // true
console.log(check("Was it a car or a cat I saw?"));     // true
console.log(check("A man, a plan, a canal: Panama"));   // true
console.log(check("race a car"));                       // false