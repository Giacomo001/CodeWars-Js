/* Your task is to create a function that does four basic mathematical operations.
The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.
Examples:
basicOp('+', 4, 7)         // Output: 11
basicOp('-', 15, 18)       // Output: -3
basicOp('*', 5, 5)         // Output: 25
basicOp('/', 49, 7)        // Output: 7
*/

// Solution with a switch statement
function basicOp(operation, value1, value2)
{
  switch (operation) {
      case '+': return(value1 + value2);
      break;
      
      case '-': return(value1 - value2);
      break;
      
      case '*': return(value1 * value2);
      break;
      
      case '/': return(value1 / value2);
      break;
      
      default: return 'NaN';      
  }        
}

// Solution with a 'key:value' object
function basicOp(operation, value1, value2)
{
  var cases = {
    '+': value1 + value2,
    '-': value1 - value2,
    '*': value1 * value2,
    '/': value1 / value2
  };
  return cases[operation]
}
