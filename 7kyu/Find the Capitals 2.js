/* Write a function that takes a single string (word) as argument. The function must return an ordered list 
containing the indexes of all capital letters in the string.

Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );
*/

//Long solution with a 'for' loop
var capitals = function(word) {
	let result = []  
  for(let i = 0; i < word.length; i++) {
    if(word[i] === word[i].toUpperCase()) {
      result.push(i)
    }
  }
  return result
}

//Solution with methods
var capitals = function (word) {
  return word.split('').reduce(function(n, l, i){
    return /[A-Z]/.test(l) && n.push(i), n;
  }, [])
}
