/*
    You are given a string, remove repetitive characters and return the new string
*/

function uniqueCharsUsingSet(str) {
    return [...new Set(str)];
}

function uniqueChars(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (result.includes(str[i]) === false) {
            if (str[i] === " ") continue;
            result += str[i];
        }
    }
    return result;
}

// console.log(uniqueCharsUsingSet("Utkarsh Gangwar"));
console.log(uniqueChars("Utkarsh Gangwar"));