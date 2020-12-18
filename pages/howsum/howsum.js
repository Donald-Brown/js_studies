//* brute force solution
const howSum = (targetSum, numbers) => {
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let num of numbers) {
    let remainder = targetSum - num;
    let remainderResult = howSum(remainder, numbers);
    if (remainderResult !== null) {
      return [...remainderResult, num];
    }
  }

  return null;
}

console.log(howSum(7, [2, 3])); //? [3, 2, 2]
console.log(howSum(7, [5, 3, 4, 7])); //? [4, 3]
console.log(howSum(7, [2, 4])); //? null
console.log(howSum(8, [2, 3, 5])); //? [2, 2, 2, 2]
//console.log(howSum(300, [7, 14])); //? null - to large for the solution

//* A better solution for howSum
const howSumBetter = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let num of numbers) {
    let remainder = targetSum - num;
    let remainderResult = howSumBetter(remainder, numbers, memo);
    if (remainderResult !== null) {
      memo[targetSum] = [...remainderResult, num];
      return memo[targetSum];
    }
  }

  memo[targetSum] = null;
  return null;
}

console.log(howSumBetter(7, [2, 3])); //? [3, 2, 2]
console.log(howSumBetter(7, [5, 3, 4, 7])); //? [4, 3]
console.log(howSumBetter(7, [2, 4])); //? null
console.log(howSumBetter(8, [2, 3, 5])); //? [2, 2, 2, 2]
console.log(howSumBetter(300, [7, 14])); //? null
