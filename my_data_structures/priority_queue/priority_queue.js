//* Priority Queue

function PriorityQueue() {
  let collection = [];

  this.print = function() {
    console.log(collection);
  }

  this.enqueue = function(element) {
    if(collection.length === 0){
      collection.push(element);
    }else{
      let added = false;
      for(let i = 0; i < collection.length; i++){
        if(element[1] < collection[i][1]){
          collection.splice(i, 0, element);
          added = true;
          break;
        }
      }
      if(!added){
        collection.push(element);
      }
    }
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

let myPriorityQ = new PriorityQueue();
console.log(myPriorityQ.isEmpty());
console.log(myPriorityQ.size());
myPriorityQ.enqueue(['size', 3]);
myPriorityQ.enqueue(['shape', 1]);
myPriorityQ.print();
myPriorityQ.enqueue(['color', 1]);
myPriorityQ.enqueue(['width', 2])
myPriorityQ.print();
// console.log(myPriorityQ.dequeue());
// myPriorityQ.print();
console.log(myPriorityQ.front());
console.log(myPriorityQ.isEmpty());
