/*Write function RemoveExclamationMarks which removes all exclamation marks from a given string.*/

//Solution with regular expressions
function removeExclamationMarks(s) {
  return s.replace(/!/g, '');   //This method finds all the '!' and it replaces them with and empty stirng ''.
}

//Another solution
function removeExclamationMarks(s) {
  return s.split('!').join('');
}
