/* Create a method that accepts an array of names, and returns an array of each name with its first letter capitalized.

Example:
capMe(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie']
capMe(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey']
*/

//Long solution
function capMe(names) {
  return names.map(function(value) {
    return `${value.slice(0, 1).toUpperCase()}${value.slice(1).toLowerCase()}`
  })
}

//Solution with a 'for' loop
function capMe(names) {
  for(var i= 0, length=names.length; i<length; i++) {
    names[i] = names[i].charAt(0).toUpperCase() + names[i].substring(1).toLowerCase();
  }
  return names
}
