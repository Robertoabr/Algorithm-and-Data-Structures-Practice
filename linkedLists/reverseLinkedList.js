/*
Write a function for reversing a linked list.mDo it in place.

Your function will have one input: the head of the list.Your function should return the new head of the list.

Here's a sample linked list node class:
*/

class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

let a = new LinkedListNode();
let b = new LinkedListNode();
let c = new LinkedListNode();
let d = new LinkedListNode();

a.value = 1;
b.value = 2;
c.value = 3;
d.value = 4;

a.next = b;
b.next = c;
c.next = d;

function reverseList(listHead) {
  let curNode = listHead;
  let nextNode = null;
  let prevNode = null;

  while (curNode) {
    // grab the next node before reversing
    nextNode = curNode.next;

    //reverse pointer
    curNode.next = prevNode;

    //step forward
    prevNode = curNode;
    curNode = nextNode;
  }
  // we return prev node because curNode is null when we are done with our while loop
  return prevNode;
}

console.log(reverseList(a), ' Expect d->c->b->a , reverseList(a)');

/*
It's one of those problems where, even once you know the procedure, it's hard to write a bug-free solution. Drawing it out helps a lot. Write out a sample linked list and walk through your code by hand, step by step, running each operation on your sample input to see if the final output is what you expect.
*/
