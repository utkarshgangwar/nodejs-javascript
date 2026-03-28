const fs = require("fs");

setImmediate(() => {
  console.log("SetImmediate");
});

setTimeout(() => {
  console.log("Timer expired");
}, 0);

Promise.resolve("Promise").then((x) => console.log(x));

fs.readFile("../README.md", "UTF-8", () => {
  setTimeout(() => {
    console.log("2nd Timer");
  });

  process.nextTick(() => console.log("2nd NextTick"));

  setImmediate(() => console.log("2nd setImmediate"));

  console.log("File reading CB");
});

process.nextTick(() => console.log("nextTick"));