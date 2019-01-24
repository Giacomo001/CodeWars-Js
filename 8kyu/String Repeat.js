/* Write a function called repeatStr which repeats the given string string exactly n times.
repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello" */

//Solution with '.repeat()' method
function repeatStr (n, s) {
  return (n > 0) ? s.repeat(n) : '';
}

//Another Solution 
function repeatStr (n, s) {
  return s.repeat(n);
}
