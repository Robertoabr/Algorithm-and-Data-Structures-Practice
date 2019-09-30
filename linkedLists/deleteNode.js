/*
Delete a node from a singly-linked list, given only a variable pointing to that node.

The input could, for example, be the variable b below:
*/

class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const a = new LinkedListNode('A');
const b = new LinkedListNode('B');
const c = new LinkedListNode('C');

a.next = b;
b.next = c;

deleteNode(b);

//answer here
function deleteNode(nodeToDelete) {
  // Get the input node's next node, the one we want to skip to
  const nextNode = nodeToDelete.next;

  if (nextNode) {
    // Replace the input node's value and pointer with the next
    // node's value and pointer. The previous node now effectively
    // skips over the input node
    nodeToDelete.value = nextNode.value;
    nodeToDelete.next = nextNode.next;
  } else {
    // Eep, we're trying to delete the last node!
    throw new Error("Can't delete the last node with this technique!");
  }
}

console.log(a.next, 'should be C');

/*
We take value and next from the input node's next node and copy them into the input node. Now the input node's previous node effectively skips the input node's old value!

But be careful—there are some potential problems with this implementation.First, it doesn't work for deleting the last node in the list.There are two other potential side-effects:

1. Any references to the input node have now effectively been reassigned to its next node. In our example, we "deleted" the node assigned to the variable b, but in actuality we just gave it a new value (2) and a new next! If we had another pointer to b somewhere else in our code and we were assuming it still had its old value (8), that could cause bugs.

2. If there are pointers to the input node's original next node, those pointers now point to a "dangling" node (a node that's no longer reachable by walking down our list). In our example above, c is now dangling. If we changed c, we'd never encounter that new value by walking down our list from the head to the tail.


Because it modifies the list "in place" it can cause other parts of the surrounding system to break. This is called a "side effect."

In-place operations like this can save time and/or space, but they're risky. If you ever make in-place modifications in an interview, make sure you tell your interviewer that in a real system you'd carefully check for side effects in the rest of the code base.
*/
