function LinkedList() {
  let length = 0;
  let head = null;

  let Node = function(element) {
    this.element = element;
    this.next = null;
  } 

  this.head = function() {
    return head;
  }

  this.size = function() {
    return length;
  }

  this.add = function(element) {
    let node = new Node(element);

    if (head === null) {
      head = node;
    } else {
      let current = head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    length++;
  }

  this.remove = function(element) {
    let current = head;
    let previous;

    if (current.element === element) {
      head = current.next;
    } else {
      while (current.element !== element) {
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    length--;
  }
  
  this.isEmpty = function() {
    return length === 0;
  }

  this.indexOf = function(element) {
    let current = head;
    let index = -1;

    while (current) {
      index++;
      if (current.element === element) {
        return index;
      }
      current = current.next;
    }
    return -1
  } 

  this.elementAt = function(index) {
    let current = head;
    let count = 0;

    while (count < index) {
      count++;
      if (current.next === null) { //* added to fix error when index was out of range
        return undefined;
      }
      current = current.next;
    }
    return current.element
  }

  this.addAt = function(index, element) {
    let node = new Node(element);
    let current = head;
    let previous;
    let currentIndex = 0;

    if (index > length) {
      return false;
    }
    if (index === 0) {
      node.next = current;
      head = node;
    } else {
      while (currentIndex < index) {
        currentIndex++;
        previous = current;
        current = current.next;
      }
      node.next = current;
      previous.next = node;
    }
    length++;
  }

  this.removeAt = function(index) {
    let current = head;
    let previous;
    let currentIndex = 0;

    if (index < 0 || index >= length) {
      return null;
    } else {
      while (currentIndex < index) {
        currentIndex++;
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    length--;
    return current.element;
  }
}

let myList = new LinkedList();
console.log(myList.head());
console.log(myList.size());
myList.add('Arizona');
myList.add('Alaska');
console.log(myList.head());
console.log(myList.size());
myList.remove('Arizona');
console.log(myList.head());
console.log(myList.size());
// myList.remove('Alaska');
console.log(myList.isEmpty());
myList.add('Arizona');
myList.add('Texas');
myList.add('California');
myList.add('Pennsylvania');
myList.add('Maine');
console.log(myList.size());
console.log(myList.indexOf('California'));
console.log(myList.indexOf('Vermont'));
console.log(myList.elementAt(3));
console.log(myList.elementAt(8));
myList.addAt(3, 'Iowa');
console.log(myList.elementAt(3));
console.log(myList.removeAt(3));
console.log(myList.elementAt(3));