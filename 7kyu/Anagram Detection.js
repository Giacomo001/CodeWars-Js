/* An anagram is the result of rearranging the letters of a word to produce a new word.

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of theeach other; return false otherwise.

Examples
"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK"
*/

//Solution using a prototype
var isAnagram = function(test, original) {
  return test.sorting() === original.sorting()
}

String.prototype.sorting = function() {
  return this.toLowerCase().split('').sort().join('')
}
