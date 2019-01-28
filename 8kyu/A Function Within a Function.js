/* Given an input n, write a function always that returns a function which returns n. 
Ruby should return a lambda or a proc.

var three = always(3);
three(); // returns 3
*/

//Short solution
const always = n => (function() {return n});

//Long solution
function always (n) {
    function reallyAlways () {
      return n;
    }
  return reallyAlways;
}
