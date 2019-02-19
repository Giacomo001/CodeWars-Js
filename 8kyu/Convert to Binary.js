/* Given a non-negative integer n, write a function toBinary/ToBinary which returns that number in a binary format.

to_binary(1)  // should return 1 
to_binary(5)  // should return 101
to_binary(11) // should return 1011
*/

//Long solution
function toBinary(n){
  let convert = parseInt(n, 10).toString(2)
  return Number(convert)
}

//Short solution
const toBinary = n => + n.toString(2)   //The '+' converts a number representation into a number
