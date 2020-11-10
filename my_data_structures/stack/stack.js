// * the stack data structure

let Stack = function(){
  this.counter = 0;
  this.storage = {};

  //* push item onto the end of the stack
  this.push = function(item){
    this.storage[this.counter] = item;
    this.counter++;
  }

  //* pop item off the end of the stack
  this.pop = function(){
    if(this.counter === 0){
      return undefined;
    }else{
      this.counter--;
      let item = this.storage[this.counter];
      delete this.storage[this.counter];
      return item;
    }
  }

  //* return the length of the stack
  this.size = function (){
    return this.counter;
  }

  //* return top level item on the stack
  this.peek = function(){
    return this.storage[this.counter - 1];
  }
}

let myStack = new Stack();
console.log(myStack.size());
myStack.push('a');
myStack.push('b');
myStack.push('c');
myStack.push('d');
console.log(myStack.size());
console.log(myStack.pop());
console.log(myStack.size());
console.log(myStack.peek());
