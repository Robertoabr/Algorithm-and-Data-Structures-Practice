/*
You want to be able to access the largest element in a stack. ↴

You've already implemented this Stack class:

Use your Stack class to implement a new class MaxStack with a method getMax() that returns the largest element in the stack.

getMax() should not remove the item.

Your stacks will contain only integers.
*/

class Stack {
  constructor() {
    // Initialize an empty stack
    this.items = [];
  }

  // Push a new item onto the stack
  push(item) {
    this.items.push(item);
  }

  // Remove and return the last item
  pop() {
    // If the stack is empty, return null
    // (It would also be reasonable to throw an exception)
    if (!this.items.length) {
      return null;
    }
    return this.items.pop();
  }

  // Returns the last item without removing it
  peek() {
    if (!this.items.length) {
      return null;
    }
    return this.items[this.items.length - 1];
  }
}

//
//
//ANSWER BELOW
class MaxStack {
  constructor() {
    this.stack = new Stack();
    this.maxesStack = new Stack();
  }

  // Add a new item to the top of our stack. If the item is greater
  // than or equal to the last item in maxesStack, it's
  // the new max! So we'll add it to maxesStack.
  push(item) {
    this.stack.push(item);
    if (this.maxesStack.peek() === null || item >= this.maxesStack.peek()) {
      this.maxesStack.push(item);
    }
  }

  // Remove and return the top item from our stack. If it equals
  // the top item in maxesStack, they must have been pushed in together.
  // So we'll pop it out of maxesStack too.
  pop() {
    const item = this.stack.pop();
    if (item === this.maxesStack.peek()) {
      this.maxesStack.pop();
    }
    return item;
  }

  // The last item in maxesStack is the max item in our stack.
  getMax() {
    return this.maxesStack.peek();
  }
}

/*
O(1) time for push(), pop(), and getMax(). O(m)O(m) additional space, where mm is the number of operations performed on the stack.

Notice how in the solution we're spending time/space on push() and pop() so we can save time on getMax(). That's because we chose to optimize for the time cost of calls to getMax().

But we could've chosen to optimize for something else. For example, if we expected we'd be running push() and pop() frequently and running getMax() rarely, we could have optimized for faster push() and pop() methods.Sometimes the first step in algorithm design is deciding what we're optimizing for. Start by considering the expected characteristics of the input.
*/

let myStack = new MaxStack();

myStack.push(6);
myStack.push(4);
myStack.push(3);

console.log(myStack.getMax(), ': Expect 6 - myStack.getMax()');
