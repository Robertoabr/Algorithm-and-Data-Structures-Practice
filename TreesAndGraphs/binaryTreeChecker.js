/*
Write a function to check that a binary tree ↴ is a valid binary search tree.

Here's a sample binary tree node class:

  class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}

hint: One way to break the problem down is to come up with a way to confirm that a single node is in a valid place relative to its ancestors. Then if every node passes this test, our whole tree is a valid BST.
*/

class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}

let validTree = new BinaryTreeNode(50);
validTree.insertLeft(30);
validTree.insertRight(80);
validTree.left.insertLeft(20);
validTree.left.insertRight(40);
validTree.right.insertLeft(70);
validTree.right.insertRight(90);
validTree.left.left.insertLeft(10);

let invalidTree = new BinaryTreeNode(50);
invalidTree.insertLeft(30);
invalidTree.insertRight(80);
invalidTree.left.insertLeft(20);
invalidTree.left.insertRight(40);
invalidTree.right.insertLeft(70);
invalidTree.right.insertRight(90);
invalidTree.left.left.insertLeft(22);

function binarySearchTreeChecker(treeRoot, lowerB, upperB) {
  debugger;
  if (lowerB === undefined) {
    lowerB = -Infinity;
  }
  if (upperB === undefined) {
    upperB = Infinity;
  }

  if (!treeRoot) {
    return true;
  }

  if (treeRoot.value >= upperB || treeRoot.value <= lowerB) {
    return false;
  }

  return (
    binarySearchTreeChecker(treeRoot.left, lowerB, treeRoot.value) &&
    binarySearchTreeChecker(treeRoot.right, treeRoot.value, upperB)
  );
}

console.log('valid tree', binarySearchTreeChecker(validTree));
console.log('invalid tree', binarySearchTreeChecker(invalidTree));
