/* Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor 
('cause of superstition).

Write a function that given an American floor (passed as an integer) returns the real floor.
Moreover, your function should work for basement floors too: just return the same value as the passed one.

Usage Examples:
getRealFloor(1) == 0 
getRealFloor(0) == 0 // Special case to please Europeans
getRealFloor(5) == 4
getRealFloor(15) == 13
getRealFloor(-3) == -3
*/

//Long solution
function getRealFloor(n) {
  if(n === 0) return 0;
  if(n < 0) return n;
  if(n < 13) return n - 1;
  if(n >= 13) return n - 2;
}

//Short solution using ternary operators
const getRealFloor = n => (n >= 13) ? n - 2 : (n > 0) ? n - 1 : n;
