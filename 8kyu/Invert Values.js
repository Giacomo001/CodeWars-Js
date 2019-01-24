/* Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
You can assume that all values are integers.
*/

//Solution with arrow functions
const invert = array => array.map(num => num ? -num : num);

//Solution with the tilde(~)
function invert(array) {
    return array.map(x => ~x + 1);  //The tilde adds one to the number and then flips the sign 
}   
   
//Solution with for loop
function invert(array) {
   var newArray = [];  
   for(let i = 0; i < array.length; i++) {
      if(array[i] === 0) {
         newArray.push(array[i]);
      } else {
         newArray.push(array[i] * (- 1)); 
      }
   }
   return newArray;
}
