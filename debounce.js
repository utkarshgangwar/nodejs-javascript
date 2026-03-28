function debounce(func, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
    //   console.log(this);
    //   func.call(this, ...args);
      func.apply(this, args);
    }, delay);
  };
}

function search(input) {
  console.log(input);
}

const searchInput = debounce(search, 500);

searchInput("Hello");
searchInput("Hello World");
searchInput("Hello You");
