/* Complete the solution so that it reverses the string value passed into it.
solution('world'); // returns 'dlrow'
*/

// Solution with string methods
function solution(str) {
    return str.split('').reverse().join('');
}

// Solution with 'for...of'
function solution(str){
  let reversed = '';
  for(char of str) {
    reversed = char + reversed;
  }
  return reversed;
}
