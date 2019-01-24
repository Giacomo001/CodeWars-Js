/* Complete the square sum method so that it squares each number passed into it and then sums the results together.
For example: squareSum([1, 2, 2]) should return 9 because 1^2 + 2^2 + 2^2 = 9.
*/

//Solution with the .pow() method
function squareSum(numbers){
    return (numbers.map(num => Math.pow(num, 2)).reduce((a, b) => a + b, 0));
}

//Another solution
function squareSum(numbers){
  return numbers.reduce(function(sum, n){
    return (n*n) + sum;
  }, 0)
}
