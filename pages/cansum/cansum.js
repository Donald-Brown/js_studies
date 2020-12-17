//* brute force solution
const canSum = (targetSum, numbers) => {
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (let num of numbers) {
    let remainder = targetSum - num;
    if (canSum(remainder, numbers) === true) {
      return true;
    }
  }
  return false;
};

console.log(canSum(7, [2, 3, 6])); // true
console.log(canSum(7, [2, 4, 6])); // false
//console.log(canSum(300, [7, 14])); // false

//* solution using memoization
const canSumBetter = function(targetSum, numbers, memo = {}) {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;
  
  for (let num of numbers) {
    let remainder = targetSum - num;
    if (canSumBetter(remainder, numbers, memo) === true) {
      memo[targetSum] = true;
      return true;
    }
  }
  memo[targetSum] = false;
  return false;
};

console.log(canSumBetter(7, [2, 3, 6])); //true
console.log(canSumBetter(7, [2, 4, 6])); // false
console.log(canSumBetter(300, [7, 14])); // false