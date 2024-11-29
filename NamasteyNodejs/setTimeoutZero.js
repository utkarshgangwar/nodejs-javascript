
console.log('Start');

const a = 243342;
const b = 43;

setTimeout(() => {
    console.log('Run as the call stack is empty ASAP');
}, 0);


setTimeout(() => {
    console.log('Run after 3 seconds');
}, 3000);

const multiFn = (a, b) => {
    return a * b;
}

console.log(multiFn(a, b));
console.log('End');
