//* trie data structure

let Node = function() {
  this.keys = new Map();
  this.end = false;

  this.setEnd = function() {
    this.end = true;
  };

  this.isEnd = function() {
    return this.end;
  };

  //? utility to follow node
  this.print = function() {
    console.log(this);
  }
};

let Trie = function() {
  this.root = new Node();

  this.add = function(input, node = this.root) {
    if (input.length === 0) {
      node.setEnd();
      // node.print();
      return;
    } else if (!node.keys.has(input[0])) {
      node.keys.set(input[0], new Node());
      // node.print();
      return this.add(input.substr(1), node.keys.get(input[0]));
    } else {
      // node.print();
      return this.add(input.substr(1), node.keys.get(input[0]));
    }
  }

  this.isWord = function(word) {
    let node = this.root;

    while (word.length > 1) {
      if (!node.keys.has(word[0])) {
        return false;
      } else {
        node = node.keys.get(word[0]);
        // node.print();
        word = word.substr(1);
      };
    };
    // node.print();
    // console.log(node.keys.get(word));
    return (node.keys.has(word) && node.keys.get(word).isEnd()) ? true : false;
  };

  this.print = function() {
    
  }
}


// let testNode = new Node();
// testNode.print();
// testNode.setEnd();
// testNode.print();

let myTrie = new Trie();
myTrie.add('bat');
myTrie.add('batt');
console.log(myTrie.isWord('bat'));
console.log(myTrie.isWord('batt'));
console.log(myTrie.isWord('battt'));