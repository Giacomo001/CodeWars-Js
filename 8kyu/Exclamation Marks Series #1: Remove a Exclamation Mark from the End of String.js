/* Remove a exclamation mark from the end of string. For a beginner kata, you can assume that the input 
data is always a string, no need to verify it.
Examples
remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi!!"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi! Hi"
remove("Hi") === "Hi"
*/

//Solution with '.replace' method
function remove(s){
   return s.replace(/!$/, '');
}

// Another solution using another method
function remove(s) {
  return s.endsWith('!') ? s.slice(0, -1) : s;  //'endsWith' checks if a string ends with a specific character or string.
}
