/* Write a function named sumDigits which takes a number as input and returns the sum of the absolute value 
of each of the number's decimal digits. 

For example:
 sumDigits(10);  // Returns 1
 sumDigits(99);  // Returns 18
 sumDigits(-32); // Returns 5

Let's assume that all numbers in the input will be integer values.
*/

//Solution using array methods
function sumDigits(number) {
  return Math.abs(number)                                     //Finding the absolute of number
             .toString()                                      //Transforming the number to a string
             .split('')
             .reduce((a, b) => a + Number(b), 0)              //Reducing the array to one number while transforming the values
}

//Long solution
function sumDigits(number) {
  var i = 0;
  var sum = 0;
  number = Math.abs(number)
  
  while(number != 0) {
    sum += number % 10
    number = Math.floor(number/10)
  }
  return sum
}
