//* Classic example of solving fibonacci(n) using recursion
//! This is not a good way of solving this problem
const fib = (n) => {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
};
console.log(fib(7));
console.log(fib(8));
console.log(fib(6));
//console.log(fib(50)); takes forever, unacceptable big O of time

//* memoization to solve the problem with a reasonable time complexity
//* JS object - keys will be arg to the func., value will be the return value
const fib2 = (n, memo = {}) => {
  if (n in memo) return memo[n]; //? check to see if n is in memo
  if (n <= 2) return 1;
  memo[n] = fib2(n - 1, memo) + fib2(n - 2, memo); //? store result in memo obj
  return memo[n];
};
console.log(fib2(7));
console.log(fib2(8));
console.log(fib2(6));
console.log(fib2(50)); 
