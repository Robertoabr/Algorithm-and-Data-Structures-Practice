/*
Implement a queue with 2 stacks. Your queue should have an enqueue and a dequeue method and it should be "first in first out" (FIFO).

Optimize for the time cost of m calls on your queue. These can be any mix of enqueue and dequeue calls.Assume you already have a stack implementation and it gives O(1)O(1) time push and pop.
*/

//stack implementation is a given in this problem
class Stack {
  constructor() {
    this.items = [];
  }
  push(item) {
    this.items.push(item);
  }
  pop() {
    if (!this.items.length) {
      return null;
    }
    return this.items.pop();
  }
  peek() {
    if (!this.items.length) {
      return null;
    }
    return this.items[this.items.length - 1];
  }
}

//
//
//Answer Below:

class Queue {
  constructor() {
    this.inStack = new Stack();
    this.outStack = new Stack();
  }
  enqueue(item) {
    // put all the things on the inStack first
    this.inStack.push(item);
  }
  dequeue() {
    // if there is nothing in the outstack fill it !
    if (this.outStack.items.length === 0) {
      while (this.inStack.items.length > 0) {
        this.outStack.push(this.inStack.pop());
      }
      //if outstack is empty after all this raise error
      if (this.outStack.length === 0) {
        throw new Error("Can't dequeue from empty queue!");
      }
      // and after filling it return the top of the outStack
      return this.outStack.pop();
    } else {
      // else just return the top of the outStack
      return this.outStack.pop();
    }
  }
}

let newQueue = new Queue();

newQueue.enqueue(1);
newQueue.enqueue(2);
newQueue.enqueue(3);

console.log(newQueue.dequeue(), 'expect 1 - newQueue.dequeue()');
console.log(newQueue.dequeue(), 'expect 2 - newQueue.dequeue()');
console.log(newQueue.dequeue(), 'expect 3 - newQueue.dequeue()');
console.log(newQueue.inStack.items, 'expect empty arr');
console.log(newQueue.outStack.items, 'expect empty arr');
