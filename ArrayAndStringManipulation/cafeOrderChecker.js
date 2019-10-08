/*
My cake shop is so popular, I'm adding some tables and hiring wait staff so folks can have a cute sit-down cake-eating experience.

I have two registers: one for take-out orders, and the other for the other folks eating inside the cafe. All the customer orders get combined into one list for the kitchen, where they should be handled first-come, first-served.

Recently, some customers have been complaining that people who placed orders after them are getting their food first. Yikes—that's not good for business!

To investigate their claims, one afternoon I sat behind the registers with my laptop and recorded:

The take-out orders as they were entered into the system and given to the kitchen. (takeOutOrders)
The dine-in orders as they were entered into the system and given to the kitchen. (dineInOrders)
Each customer order (from either register) as it was finished by the kitchen. (servedOrders)
Given all three arrays, write a function to check that my service is first-come, first-served. All food should come out in the same order customers requested it.

We'll represent each customer order as a unique integer.

As an example,

  Take Out Orders: [1, 3, 5]
 Dine In Orders: [2, 4, 6]
  Served Orders: [1, 2, 4, 6, 5, 3]
would not be first-come, first-served, since order 3 was requested before order 5 but order 5 was served first.

But,

  Take Out Orders: [1, 3, 5]
 Dine In Orders: [2, 4, 6]
  Served Orders: [1, 2, 3, 5, 4, 6]
would be first-come, first-served.
*/

let takeOutArr = [1, 3, 5];
let dineInArr = [2, 4, 6];
let servedArr = [1, 2, 3, 5, 4, 6];
let servedArr2 = [1, 2, 4, 6, 5, 3];

function inOrder(takeOut, dineIn, served) {
  // take items out of the served arr one by one
  // look for a match in index 0 of the two other arrays
  // if there is a match take out of both served and thematching arr , if not return false because its not in order

  while (served.length) {
    let item = served.shift();
    if (takeOut.length && item === takeOut[0]) {
      takeOut.shift();
    } else if (dineIn.length && item === dineIn[0]) {
      dineIn.shift();
    } else {
      return false;
    }
  }
  // make sure we served all orders
  if (takeOut.length || dineIn.length) {
    return false;
  }

  return true;
}

console.log(inOrder(takeOutArr, dineInArr, servedArr), ':expect true');
console.log(inOrder(takeOutArr, dineInArr, servedArr2), ':expect false');

/*
 my first thought was to do nested loops and just go through the final array using the sub arrays , but since the arrays are essentially already sorted you can treat it like a bunch of ordered stacks:

  this could also be done with pointer type variables that track where we are in the arrays instead of mutating

  think the above is O(n) time and O(1) additional space.
*/
