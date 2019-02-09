/* Write a functionthat returns the number of occurrences of an element in an array.

Examples:
var arr = [0, 1, 2, 2, 3];
arr.numberOfOccurrences(0) === 1;
arr.numberOfOccurrences(4) === 0;
arr.numberOfOccurrences(2) === 2;
arr.numberOfOccurrences("a") === 0;
*/

//Solution with '.reduce' method
Array.prototype.numberOfOccurrences = function(occurence) {
  return this.reduce((total, number) => (number === occurence) ? total + 1 : total, 0) 
}

//Solution with '.filter' method
Array.prototype.numberOfOccurrences = function(search) {
  return this.filter(num => search === num).length;
}
