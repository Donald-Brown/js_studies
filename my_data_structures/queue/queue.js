// * Queues

function Queue() {
  let collection = [];

  this.print = function () {
    console.log(collection);
  };

  this.enqueue = function (element) {
    collection.push(element);
  };

  this.dequeue = function () {
    return collection.shift();
  };

  this.front = function () {
    return collection[0];
  };

  this.size = function () {
    return collection.length;
  };

  this.isEmpty = function () {
    return collection.length === 0;
  };
}

let myQueue = new Queue();
console.log(myQueue.isEmpty());
console.log(myQueue.front());
myQueue.enqueue("a");
myQueue.enqueue("b");
myQueue.enqueue("d");
myQueue.enqueue("c");
myQueue.print();
console.log(myQueue.isEmpty());
console.log(myQueue.front());
console.log(myQueue.size());
console.log(myQueue.dequeue());
myQueue.print();