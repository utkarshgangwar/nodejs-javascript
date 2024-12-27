// recursion
// function fibonacci(n) {
//     if (n <= 1) return n;
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }

// for loop
function fibonacci(n) {
    if (n <= 1) return n; 
    let a = 0, b = 1, temp;
    for (let i = 2; i <= n; i++) {
      temp = a + b;
      a = b;
      b = temp;
    }
    return b;
  }

console.log(fibonacci(10));