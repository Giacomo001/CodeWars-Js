/* You'll be given a string, and have to return the total of all the unicode characters as an int. 
Should be able to handle any characters sent at it.

examples:
uniTotal("a") == 97 uniTotal("aaa") == 291
*/

//Solution with spread operator + '.reduce' method
const uniTotal = str => [...str].reduce((a, b) => a + b.charCodeAt(0), 0);
