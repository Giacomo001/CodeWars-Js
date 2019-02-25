/* Create a function that takes 2 positive integers in form of a string as an input, and outputs the sum (also as a string):

  sumStr("4", "5")    // should output "9"
  sumStr("34", "5")   // should output "39"

If either input is an empty string, consider it as zero.
*/

//Short solution using string template
const sumStr = (a, b) => `${Number(a) + Number(b)}`;

//Another solution
const sumStr = (a, b) => (+a + +b) + '';        //+ converts a String to a Number +'10' => 10
