/* I would like to be able to pass an array with two elements to my swapValues function to swap the values. 
However it appears that the values aren't changing.

Can you figure out what's wrong here?
*/

//Short solution using '.reverse'
const swapValues = arg => arg.reverse();

//Solution using the proper function
function swapValues() {
  return arguments[0].reverse();
}

//Solution following the exercise
function swapValues(args) {
  var temp = args[0];
  args[0] = args[1];
  args[1] = temp;
}
