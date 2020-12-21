// brute force
const bestSum = (targetSum, numbers) => {
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let shortestCombination = null;

  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderCombination = bestSum(remainder, numbers);
    if (remainderCombination !== null) {
      const combination = [ ...remainderCombination, num ];
      //* if the combination is shorter than the current 'shortest' update it
      if (shortestCombination === null ||combination.length < shortestCombination.length) {
        shortestCombination = combination;
      }
    }
  }

  return shortestCombination;
}


console.log(bestSum(7, [5, 3, 4, 7])); // [7]
console.log(bestSum(8, [2, 3, 5])); // [3, 5]
console.log(bestSum(8, [1, 4, 5])); // [4, 4]
//console.log(bestSum(100, [1, 2, 5, 25])); // [25, 25, 25, 25]


//* memoized solution
const bestSumBetter = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let shortestCombination = null;

  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderCombination = bestSumBetter(remainder, numbers, memo);
    if (remainderCombination !== null) {
      const combination = [ ...remainderCombination, num ];
      //* if the combination is shorter than the current 'shortest' update it
      if (shortestCombination === null ||combination.length < shortestCombination.length) {
        shortestCombination = combination;
      }
    }
  }

  memo[targetSum] = shortestCombination;
  return shortestCombination;
}


console.log(bestSumBetter(7, [5, 3, 4, 7])); // [7]
console.log(bestSumBetter(8, [2, 3, 5])); // [3, 5]
console.log(bestSumBetter(8, [1, 4, 5])); // [4, 4]
console.log(bestSumBetter(100, [1, 2, 5, 25])); // [25, 25, 25, 25]
