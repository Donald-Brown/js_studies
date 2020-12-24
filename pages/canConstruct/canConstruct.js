//* Brute force solution
const canConstruct = (target, words) => {
  if (target === '') return true;

  for (let word of words) {
    if (target.indexOf(word) === 0) {
      suffix = target.slice(word.length);
      if (canConstruct(suffix, words) === true) {
        return true;
      }
    }
  }
  return false;
}

console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // true
console.log(canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); // false
console.log(canConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])); //true
//console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee'])); //false

//* memoized solution
const canConstructBetter = (target, words, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === '') return true;

  for (let word of words) {
    if (target.indexOf(word) === 0) {
      suffix = target.slice(word.length);
      if (canConstructBetter(suffix, words, memo) === true) {
        memo[target] = true;
        return true;
      }
    }
  }
  memo[target] = false;
  return false;
}

console.log(canConstructBetter('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // true
console.log(canConstructBetter('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); // false
console.log(canConstructBetter('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])); //true
console.log(canConstructBetter('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee'])); //false
