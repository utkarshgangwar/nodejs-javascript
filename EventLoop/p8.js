let count = 0;

function recursive() {
  if (count < 3) {
    count++;
    process.nextTick(recursive);
  }
  console.log("count:", count);
}

setTimeout(() => console.log("timeout"), 0);

recursive();

/**
 * 1
 * 2
 * 3
 * 3
 */