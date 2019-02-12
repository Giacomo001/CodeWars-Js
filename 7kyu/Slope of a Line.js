/* Your challenge is to write a function named getSlope/get_slope/GetSlope that calculates the slope 
of the line through two points.

Input
Each point that the function takes in is an array 2 elements long. 
The first number is the x coordinate and the second number is the y coordinate. 
If the line through the two points is vertical or if the same point is given twice, 
the function should return null/None.
*/

//Solution with ternary operator
function getSlope([x1, y1], [x2, y2]) {
  return (x2 - x1 === 0) ? null : (y2 - y1) / (x2 - x1)  
}

//Long solution
function getSlope(p1, p2) {
  var x = p2[0] - p1[0];
  var y = p2[1] - p1[1];
  return (x !== 0) ? (y / x) : null;
}
