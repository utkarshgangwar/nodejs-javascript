/*

Output:
Last line of the file
process.nextTick
Promise
Timer Expired
setImmediate
File Reading Completed
2nd process.nextTick
2nd setImmediate
2nd timer
            
*/

const fs = require('fs');

setImmediate(() => console.log("setImmediate"));

Promise.resolve("Promise").then((value) => console.log(value));

fs.readFile('./file.txt', "utf8", (err, data) => {

    setTimeout(() => { console.log('2nd timer'); }, 0);

    process.nextTick(() => console.log("2nd process.nextTick"));

    setImmediate(() => console.log("2nd setImmediate"));

    console.log('File Reading Completed');
});

setTimeout(() => {
    console.log('Timer Expired');
}, 0);

process.nextTick(() => {
    console.log('process.nextTick');
})


console.log('Last line of the file');