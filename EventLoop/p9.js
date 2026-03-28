setTimeout(() => {
  console.log("timeout 1");
  setImmediate(() => console.log("immediate inside timeout"));
}, 0);

setImmediate(() => {
  console.log("immediate 1");
  setTimeout(() => console.log("timeout inside immediate"), 0);
});

process.nextTick(() => console.log("nextTick"));

Promise.resolve().then(() => console.log("promise"));

/**
 * nextTick
 * promise
 * 
 * timeout 1
 * immediate 1
 * 
 * immediate inside timeout
 * timout inside immediate
 */