//* Binary Search

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  add(data) {
    if(this.root === null){
      this.root = new Node(data);
      return;
    } else {
      const searchTree = function(node){
        if(data < node.data){
          if(node.left === null) {
            node.left = new Node(data);
            return;
          } else {
            return searchTree(node.left);
          }
        } else if(data > node.data){
          if(node.right === null){
            node.right = new Node(data);
            return;
          } else {
            return searchTree(node.right);
          }
        }
      }
      return searchTree(this.root);
    }
  }
  findMin() {
    let current = this.root;
    while(current.left !== null){
      current = current.left;
    }
    return current.data
  }
  findMax() {
    let current = this.root;
    while(current.right !== null){
      current = current.right;
    }
    return current.data;
  }
  find(data) {
    let current = this.root;
    while(current.data !== data){
      if(data < current.data){
        current = current.left;
      } else {
        current = current.right;
      } 
      if(current === null){
        return null;
      }
    }
    return current
  }
  isPresent(data) {
    let current = this.root;
    while(current){
      if(current.data === data){
        return true;
      }
      if(data < current.data){
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }
  remove() {

  }
}

let myTree = new BinarySearchTree();
console.log(myTree);
myTree.add(15);
console.log(myTree);

myTree.add(34);
console.log(myTree);
myTree.add(4);
myTree.add(10);
myTree.add(25);
myTree.add(2);
myTree.add(7);
console.log(myTree);

console.log(myTree.findMin());
console.log(myTree.findMax());

console.log(myTree.find(3));
console.log(myTree.find(4));
console.log(myTree.find(25));

console.log(myTree.isPresent(3));
console.log(myTree.isPresent(25));
