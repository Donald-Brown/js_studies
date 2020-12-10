//* brute force canSum function
//? m = targetSum n= array length
//? O(n^m)time
//? O(m) space
const canSum = (targetSum, numbers) => {
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (let num of numbers) {
    const remainder = targetSum - num;
    if (canSum(remainder, numbers) === true) {
      return true;
    }
  }

  return false;
};
console.log(canSum(7, [2, 3])); // true
console.log(canSum(7, [5, 3, 4, 7])); // true
console.log(canSum(7, [2, 4])); // false
console.log(canSum(8, [2, 3, 5])); // true
console.log(canSum(-7, [2, 4])); // false
// console.log(canSum(300, [7, 14])); // false however to large for this implementation


//* canSum memoization
//? O(m * n) timne
//? O(m) space
const canSum2 = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (let num of numbers) {
    const remainder = targetSum - num;

    if (canSum2(remainder, numbers, memo) === true) {
      memo[targetSum] = true;
      return true;
    }
  }

  memo[targetSum] = false;
  return false;
};
console.log('new function')
console.log(canSum2(7, [2, 3])); // true
console.log(canSum2(7, [5, 3, 4, 7])); // true
console.log(canSum2(7, [2, 4])); // false
console.log(canSum2(8, [2, 3, 5])); // true
console.log(canSum2(-7, [2, 4])); // false
console.log(canSum2(300, [7, 14])); // false however to large for this implementation
