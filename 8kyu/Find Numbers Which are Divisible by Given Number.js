/* Write a function which takes two arguments and returns all numbers which are divisible by given divisor. 
First argument is array of numbers and the second is divisor.

Example

divisibleBy([1,2,3,4,5,6], 2) == [2,4,6]
divisibleBy([1,2,3,4,5,6], 2) == [2,4,6]
*/

//Short solution using method
var divisibleBy = (numbers, divisor) => numbers.filter(num => num % divisor === 0)
