//* Heaps

//? left child: i * 2;
//? right child: i * 2 + 1;
//? parent: i / 2;

let MinHeap = function() {
  let heap = [null];

  this.insert = function(num) {
    heap.push(num);
    if (heap.length > 2) {
      let index = heap.length - 1;
      while (heap[index] < heap[Math.floor(index/2)]) {
        if (index >= 1) {
          [heap[Math.floor(index / 2)], heap[index]] = [heap[index], heap[Math.floor(index / 2)]];
          if (Math.floor(index / 2) > 1) {
            index = Math.floor(index / 2);
          } else {
            break;
          };
        };
      };
    };
  };

  this.romove = function() {
    let smallest = heap[1];
  
    if (heap.length > 2) {
      heap[1] = heap[heap.length - 1];
      heap.splice(heap.length - 1);
      if (heap.length === 3) {
        if (heap[1] > heap[2]) {
          [heap[1], heap[2]] = [heap[2], heap[1]];
        };
        return smallest;
      };
      let i = 1;
      let left = 2 * i;
      let right = 2 * i + 1;
      while (heap[i] >= heap[left] || heap[i] >= heap[right]) {
        if (heap[left] < heap[right]) {
          [heap[i], heap[left]] = [heap[left], heap[i]];
          i = 2 * i;
        } else {
          [heap[i], heap[right]] = [heap[right], heap[i]];
          i = 2 * i + 1;
        };
        left = 2 * i;
        right = 2 * i + 1;
        if (heap[left] === undefined || heap[right] === undefined) {
          break;
        };
      };
    } else if (heap.length === 2) {
      heap.splice(1, 1);
    } else {
      return null;
    };
    return smallest;
  };

  this.sort = function() {
    let result = [];
    while (heap.length > 1) {
      result.push(this.remove());
    };
    return result;
  };
};

let MaxHeap = function() {
  let heap = [null];

  
};