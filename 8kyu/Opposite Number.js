//Very simple, given a number, find its opposite.

function opposite(number) {
  return ((number < 0) ? Math.abs(number) : (number - (number * 2)));
}

//Simplest solution
function opposite(number) {
  return(-number);
}
