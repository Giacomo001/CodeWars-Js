/* All Star Code Challenge #18

Create a function called that accepts 2 string arguments and returns an integer 
of the count of occurrences the 2nd argument is found in the first one.

If no occurrences can be found, a count of 0 should be returned.

strCount('Hello', 'o') // => 1
strCount('Hello', 'l') // => 2
strCount('', 'z')      // => 0

Notes:
The first argument can be an empty string
The second string argument will always be of length 1
*/

//Shortest solution
const strCount = (str, letter) => str.split(letter).length - 1

//Short solution
const strCount = (str, letter) => str.split('').filter(l => l === letter).length

//Long solution
function strCount(str, letter){  
  let count = 0
  str = str.split('')
  for(let i in str) {
    if(str[i] === letter) {
      count++
    }
  }
  return count
}
