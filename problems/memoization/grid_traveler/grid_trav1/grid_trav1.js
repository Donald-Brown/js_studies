//! not the best solution for this problem
//! big O of n^2
// brute force solution
const gridTraveler = (m, n) => {
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;
  return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
};

console.log(gridTraveler(1, 1)); // 1
console.log(gridTraveler(2, 3)); // 3
console.log(gridTraveler(3, 2)); // 3
console.log(gridTraveler(3, 3)); // 6
// console.log(gridTraveler(1, 1)) // 2333606220 to big for this implenetation

//* proper memoized solution
const gridTraveler2 = (m, n, memo = {}) => {
  const key = m + "," + n;
  // are the args in the memo obj
  if (key in memo) return memo[key];
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;
  memo[key] = gridTraveler2(m - 1, n, memo) + gridTraveler2(m, n - 1, memo);
  return memo[key];
};

console.log(gridTraveler2(1, 1)); // 1
console.log(gridTraveler2(2, 3)); // 3
console.log(gridTraveler2(3, 2)); // 3
console.log(gridTraveler2(3, 3)); // 6
console.log(gridTraveler2(18, 18)); // 2333606220
