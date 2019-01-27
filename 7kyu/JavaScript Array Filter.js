/* JavaScript Arrays support a filter function (starting in JavaScript 1.6). 
Use the filter functionality to complete the function given.

The solution would work like the following:

getEvenNumbers([2,4,5,6]) // should == [2,4,6]
*/

//Solution using '.filter' as the exercise suggested
const getEvenNumbers = numbersArray => numbersArray.filter(a => a % 2 === 0);

// Similar solution using 'javascript falsy'
function getEvenNumbers(numbersArray){
  return numbersArray.filter(num => !(num % 2))  // 0 is falsy
}
