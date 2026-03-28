Array.prototype.customMap = function (cb) {
  const result = [];
  console.log(cb, this.length, typeof(this));


  for (let i = 0; i < this.length; i++) {
    result.push(cb(this[i], i, this));
  }

  return result;
};

const output = ([1, 2, 3, 4, 5]).customMap((item) => item * 2);

console.log(output);
