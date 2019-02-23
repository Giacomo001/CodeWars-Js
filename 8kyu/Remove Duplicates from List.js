/* Define a function that removes duplicates from an array of numbers and returns it as a result.

The order of the sequence has to stay the same.
*/

//Short solution
const distinct = a => [...new Set(a)];   //A set is an object containing unique values

//Another solution
const distinct = a => a.filter((item, index) => a.indexOf(item) === index);
