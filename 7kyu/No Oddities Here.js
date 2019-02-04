/* Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. Return the good values in the order they are given.

function noOdds(values)
*/

//Long solution with a for loop
function noOdds(values) {
  var even = []
  for(value in values) {
    if(value % 2 === 0){
      even.push(values[value])
    }
  }
  return even
}

//Short solution with '.filter' method
const noOdds = values => values.filter(num => num % 2 === 0)

//Solution with nested functions
function noOdds(values){
  function isEven(number){
    return !(number % 2)
  }  
  return values.filter(isEven)
}
