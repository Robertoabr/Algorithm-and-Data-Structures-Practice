/*
Write a function to find the 2nd largest element in a binary search tree.

Example Tree:
           9
     4           17
   3   6             22
     5   7       20

sample binary tree node class included

Hint:
-"simplify, solve, and adapt" strategy.
-Breaking things down into cases

Whenever a problem is starting to feel complicated, try breaking it down into cases.It can be really helpful to actually draw out sample inputs for those cases. This'll keep your thinking organized and also help get your interviewer on the same page.
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

let myTree = new BinaryTreeNode();

myTree.value = 9;
myTree.insertLeft(4);
myTree.insertRight(17);
myTree.left.insertLeft(3);
myTree.left.insertRight(6);
myTree.right.insertRight(22);
myTree.left.right.insertRight(7);
myTree.left.right.insertLeft(5);
myTree.right.right.insertLeft(20);

function findLargest(tree) {
  if (tree.left === null) {
    return tree.value;
  }
  return findLargest(tree.right);
}

function findSecondLargest(tree) {
  //at the max and we can see that it has a left so max of left tree will be the second largest
  if (tree.left && !tree.right) {
    return findLargest(tree.left);
  }

  //at  parent of max node and we can see that child has no left, so parent is second largest
  if (tree.right && !tree.right.left && !tree.right.right) {
    return tree.value;
  }
  //otherwise head to the right
  return findSecondLargest(tree.right);
}

console.log(findSecondLargest(myTree), ': expect 22');
