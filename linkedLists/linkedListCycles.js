/*
You have a singly-linked list and want to check if it contains a cycle.A singly-linked list is built with nodes. For example see the class below

A cycle occurs when a node’s next points back to a previous node in the list. The linked list is no longer linear with a beginning and end—instead, it cycles through a loop of nodes.

Write a function containsCycle() that takes the first node in a singly-linked list and returns a boolean indicating whether the list contains a cycle.
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
let e = new LinkedListNode();
let f = new LinkedListNode();
let g = new LinkedListNode();
let h = new LinkedListNode();

a.value = 1;
b.value = 2;
c.value = 3;
d.value = 4;
e.value = 5;
f.value = 6;
g.value = 7;
h.value = 8;

a.next = b;
b.next = c;
c.next = d;
d.next = a;

e.next = f;
f.next = g;
g.next = h;

function containsCycle(node) {
  let slowRunner = node;
  let fastRunner = node;

  while (fastRunner && fastRunner.next !== null) {
    slowRunner = slowRunner.next;
    fastRunner = fastRunner.next.next;
    if (slowRunner === fastRunner) {
      return true;
    }
  }

  return false;
}

console.log(containsCycle(a), 'expect: true');
console.log(containsCycle(e), 'expect: false');
