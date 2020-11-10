//* sets

function CustomSet() {
  let collection = [];

  this.has = function (item) {
    return (collection.indexOf(item) !== -1);
  };

  this.values = function () {
    return collection;
  };

  this.add = function (item) {
    if(!this.has(item)){
      collection.push(item);
      return true;
    }else{
      return false;
    }
  };

  this.remove = function (item) {
    if(this.has(item)){
      collection.splice(collection.indexOf(item), 1);
      return true;
    }else{
      return false;
    }
  };

  this.size = function () {
    return collection.length;
  };

  this.union = function (newSet) {};

  this.intersection = function (newSet) {};

  this.difference = function (newSet) {};

  this.subset = function (newSet) {};
}

let mySet = new CustomSet();
console.log(mySet.values());
mySet.add('a');
mySet.add('c');
mySet.add('b');
console.log(mySet.values());
mySet.remove('c');
console.log(mySet.values());
console.log(mySet.size());
