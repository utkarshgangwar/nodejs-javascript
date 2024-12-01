const fs = require('fs');

const a = 100;

setImmediate(() => console.log("setImmediate"));

Promise.resolve("Promise").then((value) => console.log(value));

fs.readFile('./file.txt', "utf8", (err, data) => {
    console.log('File Reading Completed');
});

setTimeout(() => {
    console.log('Timer Expired');
}, 0);

process.nextTick(() => {
    console.log('process.nextTick');
})

function printX() {
    console.log("A is ", a);
}

printX();

console.log('Last line of the file');

/*
    Output:
            A is 100
            Last line of the file
            process.nextTick
            Promise
            Timer Expired
            setImmediate
            File Reading Completed
*/