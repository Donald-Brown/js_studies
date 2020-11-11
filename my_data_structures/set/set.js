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

  this.union = function (newSet) {
    let originalValues = this.values();
    let newValues = newSet.values();
    let unionSet = new CustomSet();
    originalValues.forEach(function(value){
      unionSet.add(value);
    });
    newValues.forEach(function(value){
      unionSet.add(value);
    });
    return unionSet;
  };

  this.intersection = function (newSet) {
    let originalValues = this.values();
    let intersectionSet = new CustomSet();
    originalValues.forEach(function(value){
      if(newSet.has(value)){
        intersectionSet.add(value);
      }
    });
    return intersectionSet;
  };

  this.difference = function (newSet) {
    let that = this; //* refers to the original set
    let originalValues = this.values();
    let newValues = newSet.values();
    let differenceSet = new CustomSet();
    originalValues.forEach(function(value){
      if(!newSet.has(value)){
        differenceSet.add(value);
      }
    });
    newValues.forEach(function(value){
      if(!that.has(value)){
        differenceSet.add(value);
      }
    });
    return differenceSet;
  };

  this.subset = function (newSet) {
    let originalValues = this.values();
    return originalValues.every(function(value){
      return newSet.has(value);
    })
  };
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

let newSet = new CustomSet();
newSet.add('b');
newSet.add('d');
console.log(mySet.union(newSet).values());

console.log(mySet.intersection(newSet).values());

console.log(mySet.difference(newSet).values());

console.log(mySet.subset(newSet));
newSet.add('a');
console.log(mySet.subset(newSet));