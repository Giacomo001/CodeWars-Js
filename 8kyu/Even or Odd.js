/* Create a function (or write a script in Shell) that takes an integer as an argument and returns 
"Even" for even numbers or "Odd" for odd numbers. */

//Solution with ternary operators
function even_or_odd(number) {
  return (number % 2 === 0) ? "Even" : "Odd";
}

//Solution with normal If/Else statement
function even_or_odd(number) {
  if (number%2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
