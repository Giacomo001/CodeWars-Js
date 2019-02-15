/* Write a program that outputs the top n elements from a list.

Example:

largest(2, [7,6,5,4,3,2,1])
// => [6,7]
*/

//Solution using '.splice' array method and spread operator
function largest(n,xs){
  return [...xs].sort((a, b) => a - b).splice(xs.length - n)
}

//Another solution using '.slice' method instead
function largest(n,xs){
  return [...xs].sort((a, b) => a - b).slice(xs.length - n)
}
