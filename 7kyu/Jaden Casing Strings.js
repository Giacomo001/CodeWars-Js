/* Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). 
Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known 
for almost always capitalizing every word.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes 
from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:
Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

Note that the Java version expects a return value of null for an empty string or null.
*/

//Long solution using string methods
String.prototype.toJadenCase = function () {
  return this.split(' ')
             .map(word => word.charAt(0).toUpperCase() + word.slice(1))
             .join(' ')
}

//Short solution using Regex
String.prototype.toJadenCase = function () {
  return this.replace(/(^|\s)[a-z]/g, l => l.toUpperCase())
}

/* (^|\s) takes every first letter of a string OR(|) every letter that has a white space before
[a-z] this is the condition the letter must have, it must be bewteen 'a' and 'z'
'/g' means 'globally' so it examines every letter in the string
*/
