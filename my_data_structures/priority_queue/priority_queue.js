//* Priority Queue

function PriorityQueue() {
  let collection = [];

  this.print = function() {
    console.log(collection);
  }

  this.enqueue = function() {

  }

  this.dequeue = function() {
    let value = collection.shift();
    return value[0];
  }

  this.front = function() {
    return collection[0];
  }

  this.size = function() {
    return collection.length;
  }

  this.isEmpty = function() {
    return (collection.length === 0);
  }
}