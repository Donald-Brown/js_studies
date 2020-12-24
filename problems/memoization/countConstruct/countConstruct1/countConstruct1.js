//* brute force solution
const countConstruct = (target, wordBank) => {
  if (target === '') return 1;
  let totalCount = 0;

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const numWaysForRest = countConstruct(target.slice(word.length), wordBank);
      totalCount += numWaysForRest;
    }
  }
  return totalCount;
}

console.log(countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])); // 2
console.log(countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // 1
console.log(countConstruct('skateBoard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); // 0
console.log(countConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])); // 4
//console.log(countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee'])); // 0

//* memoized solution
const countConstructBetter = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === '') return 1;
  let totalCount = 0;

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const numWaysForRest = countConstructBetter(target.slice(word.length), wordBank, memo);
      totalCount += numWaysForRest;
    }
  }
  memo[target] = totalCount;
  return totalCount;
}

console.log(countConstructBetter('purple', ['purp', 'p', 'ur', 'le', 'purpl'])); // 2
console.log(countConstructBetter('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // 1
console.log(countConstructBetter('skateBoard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); // 0
console.log(countConstructBetter('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])); // 4
console.log(countConstructBetter('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee'])); // 0