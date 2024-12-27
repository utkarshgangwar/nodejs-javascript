function remDup(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        let alreadyExist = false;
        for (let j = 0; j < result.length; j++) {
            if (char === result[j]) {
                alreadyExist = true;
                break;
            }
        }
        if (!alreadyExist) {
            result += char;
        }
    }
    console.log(result);
}

// function remDup(str) {
//     let temp = new Set(str);
//     let string = Array.from(temp).join('');
//     console.log(string);
// }

remDup('adsfwaaaadaaz')