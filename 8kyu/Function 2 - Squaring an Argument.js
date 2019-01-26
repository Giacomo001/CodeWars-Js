//Now you have to write a function called square that takes an argument and returns the square of it.

//Solution
const square = num => num * num;     // or with 'num ** 2'

//Solution with 'Math.pow'
function square (num) {
  var num = Math.pow(num, 2);
  
  return num;
}
