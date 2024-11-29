const fs = require('fs');
const https = require('http');


console.log("Hello");
const x = 34234;
const y = 2;

https.get('http://dummyjson.com/products/1', (res) => {
    console.log("Fetched data successfully");
});

setTimeout(() => {
    console.log('It is set timeout');
}, 5000);

fs.readFile('./file.txt', "utf8", (err, data) => {
    console.log(data);
});

function multiplication(x, y) {
    return x * y;
}

console.log(multiplication(x, y));