const fs = require("fs");

fs.readFile(__filename, () => {
  console.log("I/O callback");

  setTimeout(() => console.log("timeout"), 0);

  setImmediate(() => console.log("immediate"));

  process.nextTick(() => console.log("nextTick"));

  Promise.resolve().then(() => console.log("promise"));
});

/**
 * I/O callback
 * nextTick
 * promise
 * timeout
 * immediate
 */
