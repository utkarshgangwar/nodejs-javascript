const fs = require("fs");

//trap in self invoked fn
(function fn() {
  console.log("start");

  setImmediate(() => console.log("immediate 1"));

  setTimeout(() => console.log("timeout 1"), 0);

  fs.readFile(__filename, () => {
    console.log("I/O");

    setImmediate(() => console.log("immediate 2"));

    setTimeout(() => console.log("timeout 2"), 0);

    process.nextTick(() => console.log("nextTick inside I/O"));

    Promise.resolve().then(() => console.log("promise inside I/O"));
  });

  process.nextTick(() => console.log("nextTick 1"));

  Promise.resolve().then(() => console.log("promise 1"));

  console.log("end");
})()

/**
 * start
 * end
 * nextTick 1
 * promise 1
 * timeout 1
 * immediate 1
 * I/O
 * nextTicket inside I/O
 * promise inside I/O
 * timeout 2
 * immediate 2
 */