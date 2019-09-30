/*
Write a function kthToLastNode() that takes an integer k and the headNode of a singly-linked list, and returns the kth to last node in the list.
*/

class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

let a = new LinkedListNode(1);
let b = new LinkedListNode(2);
let c = new LinkedListNode(3);
let d = new LinkedListNode(4);

a.next = b;
b.next = c;
c.next = d;

function kthToLastNode(k, listHead) {
  let curNode = listHead;
  let length = 1;

  //roll through once to determine length
  while (curNode.next) {
    curNode = curNode.next;
    length++;
  }

  //reset curNode
  curNode = listHead;
  //roll through again to the right node
  for (let i = 0; i < length - k; i++) {
    curNode = curNode.next;
  }
  return curNode;
}

console.log(
  kthToLastNode(3, a).value,
  'expect node w value 2 - kthToLastNode(3,a)'
);

/*
this solution above is O(2n) time and O(1) constant space, but there is a better solution:

Perhaps we can do this in just one pass? But is this faster?

What if we had like a "stick" that was k nodes wide. We could start it at the beginning of the list so that the left side of the stick was on the head and the right side was on the kth node.
*/

function kthToLastNode2(k, listHead) {
  //create a stick setup
  let top = listHead;
  let counter = 1;
  let bottom = listHead;

  // set bottom to the right starting node k units down the list
  while (counter < k) {
    bottom = bottom.next;
    counter++;
  }

  //roll through the list untill stick end hits list end
  while (bottom.next) {
    top = top.next;
    bottom = bottom.next;
  }

  //return stick top
  return top;
}

console.log(
  kthToLastNode2(2, a).value,
  'expect node w value 3 - kthToLastNode2(2,a)'
);

console.log(
  kthToLastNode2(3, a).value,
  'expect node w value 2 - kthToLastNode2(3,a)'
);

/*
Both approaches use O(n) time and O(1) constant space.

But the second approach is fewer steps since it gets the answer "in one pass," right? Wrong.

In the first approach, we walk one pointer from head to tail (to get the list's length), then walk another pointer from the head node to the target node (the kth to last node).In the second approach, rightNode also walks all the way from head to tail, and leftNode also walks from the head to the target node.

So in both cases, we have two pointers taking the same steps through our list. The only difference is the order in which the steps are taken. The number of steps is the same either way.
*/
