console.log("start");

setTimeout(() => {
  console.log("timeout 1");

  Promise.resolve().then(() => console.log("promise inside timeout"));

  process.nextTick(() => console.log("nextTick inside timeout"));
}, 0);

Promise.resolve().then(() => {
  console.log("promise 1");

  setTimeout(() => console.log("timeout inside promise"), 0);
});

process.nextTick(() => console.log("nextTick 1"));

console.log("end");

/**
 * start
 * end
 * nextTick 1
 * promise 1
 * timeout 1
 * nextTick inside timeout
 * promise inside timeout
 * timeout inside promise
 */