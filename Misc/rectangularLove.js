/*
Write a function to find the rectangular intersection of two given rectangles.

As with the example above,  rectangles are always "straight" and never "diagonal." More rigorously: each side is parallel with either the x-axis or the y-axis.

They are defined as objects like this:

  const myRectangle = {

  // Coordinates of bottom-left corner
  leftX: 1,
  bottomY: 1,

  // Width and height
  width: 6,
  height: 3,
};

Your output rectangle should use this format as well.
*/
/*
Write a function to find the rectangular intersection of two given love rectangles.

As with the example above, love rectangles are always "straight" and never "diagonal." More rigorously: each side is parallel with either the x-axis or the y-axis.

They are defined as objects like this:

  const myRectangle = {

  // Coordinates of bottom-left corner
  leftX: 1,
  bottomY: 1,

  // Width and height
  width: 6,
  height: 3,
};

Your output rectangle should use this format as well.
*/

const myRectangle1 = {
  // Coordinates of bottom-left corner
  leftX: 1,
  bottomY: 1,

  // Width and height
  width: 3,
  height: 3
};

const myRectangle2 = {
  // Coordinates of bottom-left corner
  leftX: 1,
  bottomY: 1,

  // Width and height
  width: 6,
  height: 3
};

function overlapArea(rect1, rect2) {
  let outRect = {};
  //
  return outRect;
}

console.log('expect a 3x3 at 1,1:', overlapArea(myRectangle1, myRectangle2));
