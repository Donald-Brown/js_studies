//* simple Hash table in JavaScript

let hash = function(string, max) {
  let hash = 0;
  for (let i = 0; i < string.length; i++) {
    hash += string.charCodeAt(i);
  }
  return hash % max;
}

let HashTable = function() {
  let storage = [];
  const STORAGELIMIT = 20;

  //* utility function for example
  this.print = function() {
    console.log(storage);
  }

  this.add = function(key, value) {
    let index = hash(key, STORAGELIMIT);
    if (storage[index] === undefined) {
      storage[index] = [ [key, value] ];
    } else {
      for (let i = 0; i < storage[index].length; i++) {
        let inserted = false;
        if (storage[index][1][0] === key) {
          storage[index][i][1] = value;
          inserted = true;
        }
      }
      if (inserted === false) {
        storage[index].push([ key, value ]);
      }
    }
  }

  this.remove = function(key) {
    let index = hash(key, STORAGELIMIT);
    if (storage[index].length === 1 && storage[index][0] === key) {
      delete storage[index];
    } else {
      for (let i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          delete storage[index][i];
        }
      }
    }
  }

  this.lookup = function(key) {
    let index = hash(key, STORAGELIMIT);
    if (storage[index] === undefined){
      return undefined;
    } else {
      for (let i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          return storage[index][i][1];
        }
      }
    }
  }
}

let hs = new HashTable();

hs.add('person', 'donnie');
hs.add('mom', 'robin');
hs.add('dad', 'don');
hs.add('nephew', 'bailey');
hs.add('neighbor', 'jim');

hs.print();

//hs.remove('neighbor');
hs.print();

console.log(hs.lookup('nephew'));

