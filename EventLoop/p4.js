process.nextTick(() => console.log("nextTick 1"));

Promise.resolve().then(() => {
  console.log("promise 1");
  process.nextTick(() => console.log("nextTick inside promise"));
});

process.nextTick(() => console.log("nextTick 2"));

Promise.resolve().then(() => console.log("promise 2"));

/**
 * nextTick 1
 * nextTick 2
 * promise 1
 * promise 2
 * nextTick inside promise
 */
