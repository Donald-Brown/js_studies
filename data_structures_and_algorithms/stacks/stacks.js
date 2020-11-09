// * Stacks
// ? functions: push, pop, peek, length

function palindromeChecker(word){
  let letters = []; //* this is the stack
  let rword = '';

  //* put letters of word into the stack
  for(let i = 0; i < word.length; i++){
    letters.push(word[i]);
  }
  
  //* pop off the stack in reverse order
  for(let i = 0; i < word.length; i++){
    rword += letters.pop();
  }
  
  if(rword === word){
    console.log(`${word} is a palindrome.`);
  }else{
    console.log(`${word} is not a palindrome.`)
  }
}

palindromeChecker('sas');
palindromeChecker('sase');

let Stack = function(){
  this.count = 0;
  this.storage = {};

  //* Adds a value onto the end of the stack
  this.push = function(value){
    this.storage[this.count] = value;
    this.count++;
  }

  //* removes and returns the value at the end of the stack
  this.pop = function(){
    if(this.count === 0){
      return undefined;
    }
    this.count--;
    let result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }

  this.size = function(){
    return this.count;
  }

  //* returns the value at the end of the stack
  this.peek = function(){
    return this.storage[this.count - 1];
  }
}

let myStack = new Stack();
myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
myStack.push('HelloWorld');
console.log(myStack.storage[1]);
console.log(myStack.size());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());

let myObj = {};

myObj[1] = 'hello';
myObj[2] = 'bye';
myObj[3] = 'again';

console.log(myObj);