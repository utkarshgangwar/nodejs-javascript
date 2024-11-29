const crypto = require('node:crypto');

console.log('Start');
const a = 243342;
const b = 43;

// Password based key derivative function

// Sync function
crypto.pbkdf2Sync('password', 'salt', 50000000, 50, 'sha512');
console.log('First key is generated');

setTimeout(() => {
    console.log('Run as the call stack is empty ASAP');
}, 0);


setTimeout(() => {
    console.log('Run after 3 seconds');
}, 3000);

// Async function
crypto.pbkdf2('password', 'salt', 500000, 50, 'sha512', (err, key) => {
    console.log('Key is generated');
});

function multiplication(x, y) {
    return x * y;
}

console.log(multiplication(a, b));
console.log('End');