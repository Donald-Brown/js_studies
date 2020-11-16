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
  remove(data) {
    function removeNode(node, data) {
      if (node === null) {
        return null;
      }
      if (node.data === data) {
        //* no child nodes
        if (node.left === null && node.right === null) {
          return null;
        }
        //* no left child
        if (node.left === null) {
          return node.right;
        }
        //*no right child
        if (node.right === null) {
          return node.left;
        }
        //* node has two children 
        let tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    }
    this.root = removeNode(this.root, data);
  }
  findMinHeight(node = this.root) {
    if (node === null) {
      return -1;
    }
    let left = this.findMinHeight(node.left);
    let right = this.findMinHeight(node.right);
    if (left < right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }
  findMaxHeight(node = this.root) {
    if (node === null) {
      return -1;
    }
    let left = this.findMaxHeight(node.left);
    let right = this.findMaxHeight(node.right);
    if (left > right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }
  isBalanced() {
    return this.findMinHeight() >= this.findMaxHeight() - 1;
  }
  inOrder() {
    if (this.root === null) {
      return null;
    } else {
      let result = new Array();
      function traverseInOrder(node) {
        node.left && traverseInOrder(node.left);
        result.push(node.data);
        node.right && traverseInOrder(node.right);
      }
      traverseInOrder(this.root);
      return result;
    }
  }
  preOrder() {

  }
  postOrder() {

  }
  levelOrder() {

  }
}

// let myTree = new BinarySearchTree();
// console.log(myTree);
// myTree.add(15);
// console.log(myTree);

// myTree.add(34);
// console.log(myTree);
// myTree.add(4);
// myTree.add(10);
// myTree.add(25);
// myTree.add(2);
// myTree.add(7);
// console.log(myTree);

// console.log(myTree.findMin());
// console.log(myTree.findMax());

// console.log(myTree.find(3));
// console.log(myTree.find(4));
// console.log(myTree.find(25));

// console.log(myTree.isPresent(3));
// console.log(myTree.isPresent(25));

// console.log('space');
// console.log(myTree.isPresent(2));
// myTree.remove(2);
// console.log(myTree.isPresent(2));

// console.log('space')

// console.log(myTree.isPresent(25));
// myTree.remove(25);
// console.log(myTree.isPresent(25));

let bst = new BinarySearchTree();
bst.add(9);
bst.add(4);
bst.add(17);
bst.add(3);
bst.add(6);
bst.add(22);
bst.add(5);
bst.add(7);
bst.add(20);

// console.log(bst.findMinHeight());
// console.log(bst.findMaxHeight());
// console.log(bst.isBalanced());
// bst.add(10);
// console.log(bst.findMinHeight());
// console.log(bst.findMaxHeight());
// console.log(bst.isBalanced());
console.log(bst.inOrder());



// console.log('space');
// let bst2 = new BinarySearchTree();
// bst2.add(5);
// bst2.add(3);
// bst2.add(7);
// console.log(bst2.findMinHeight());
// console.log(bst2.findMaxHeight());
// console.log(bst2.isBalanced());