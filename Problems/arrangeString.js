// Given two strings, str1 and str2,
// check whether rearranging the characters of str1 can result in str2.
// Input : str1 = "geeksforgeeks" 
//         str2 = "geegeeksksfor"
// Output : YES

// Input : str1 = "geeksfor"  
//         str2 = "geeekfor"
// Output : NO

const string1 = "geeksforgeeks";
const string2 = "geegeeksksfor";
let MAX = 26;

function arrangeString(str1, str2) {
    let l1 = str1.length;
    let l2 = str2.length;

    if (l1 != l2)
        return false;

    let map = new Array(MAX);
    for (let i = 0; i < map.length; i++) {
        map[i] = 0;
    }

    for (let i = 0; i < l1; i++) {
        console.log(str1[i]);
        console.log(str1[i].charCodeAt(0));
        console.log('a'.charCodeAt(0));
        console.log(str1[i].charCodeAt(0) - 'a'.charCodeAt(0));

        map[str1[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    // for (let i = 0; i < l2; i++) {
    //     map[str2[i].charCodeAt(0) - 'a'.charCodeAt(0)]--;

    //     if (map[str2[i] - 'a'.charCodeAt(0)] < 0)
    //         return false;
    // }

    console.log(map);
}

arrangeString(string1, string2);