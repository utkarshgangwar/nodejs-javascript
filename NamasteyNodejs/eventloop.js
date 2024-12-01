const fs = require('fs');
const a = 100;

setImmediate(() => console.log("setImmediate"));

fs.readFile('./file.txt', "utf8", (err, data) => {
    console.log('File Reading Completed');
});

setTimeout(() => {
    console.log('Timer Expired');
}, 0);

function printX() {
    console.log(a);
}

printX();

console.log('Last line of the file');


/*
    - Phases

    Inner phase:
     - process.nextTick phase
     - Promise phase

    Timeout phase
    Inner phase
    Global execution context
    Inner phase
    Pole phase
    Inner phase
    Check phase
    Inner phase
    Close phase
*/

/* 
    Output:
    100
Last line of the file
Timer Expired
setImmediate
File Reading Completed
*/
