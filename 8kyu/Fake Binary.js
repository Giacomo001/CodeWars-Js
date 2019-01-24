/* Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. 
Return the resulting string.
*/

//Solution with arrow function
function fakeBin(x){
    return (x.split('').map(num => (num < 5) ? 0 : 1).join(''));
}

//Solution with '.replace'
function fakeBin(x) {
  return (x.replace(/\d/g, d => d < 5 ? 0 : 1));
}
