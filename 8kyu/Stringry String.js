/* Write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.
The string should start with a 1.
A string with size 6 should return :'101010'.
With size 4 should return : '1010'.
With size 12 should return : '101010101010'.
The size will always be positive and will only use whole numbers.
*/

//Solution '.map' method
const stringy = size =>
    [...new Array(size)].map((x, i) => (i % 2 === 0) ? 1 : 0).join('');
    
//Solution repeating '10' and slicing the array
const stringy = size => "10".repeat(size).slice(0,size);    
